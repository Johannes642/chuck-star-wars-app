using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using sovtech_assignment.Entities;

namespace sovtech_assignment.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private const string base_chuck_URL = "https://api.chucknorris.io";
        private const string base_swapi_URL = "https://swapi.dev";
        private readonly string api_chuck = "/jokes/search?query={0}";
        private readonly string api_swapi = "/api/people/?search={0}";

        [HttpGet]


        public async Task<List<Search>> Search(string query)
        {
            var chuck = new Chuck();
            var people = new People();

            HttpClient client = new HttpClient
            {
                BaseAddress = new Uri(base_chuck_URL)
            };
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage chuck_response = await client.GetAsync(string.Format(api_chuck, query));
            if (chuck_response.IsSuccessStatusCode)
            {
                dynamic content_chuck = await chuck_response.Content.ReadAsStringAsync();
                chuck = JsonConvert.DeserializeObject<Chuck>(content_chuck);
            }
            else
            {
                _ = string.Format("{0} ({1})", (int)chuck_response.StatusCode, chuck_response.ReasonPhrase);
            }

            HttpClient swapi_client = new HttpClient
            {
                BaseAddress = new Uri(base_swapi_URL)
            };
            swapi_client.DefaultRequestHeaders.Accept.Clear();
            swapi_client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage swapi_response = await swapi_client.GetAsync(string.Format(api_swapi, query));
            if (swapi_response.IsSuccessStatusCode)
            {
                dynamic content_swapi = await swapi_response.Content.ReadAsStringAsync();
                people = JsonConvert.DeserializeObject<People>(content_swapi);
            }
            else
            {
                _ = string.Format("{0} ({1})", (int)swapi_response.StatusCode, swapi_response.ReasonPhrase);
            }

            List<Search> searches = new List<Search>
            {
                new Search
                {
                    Chuck = chuck,
                    Swapi = people
                }
            };
            List<Search> res = searches;
            return res;
        }
    }
}
