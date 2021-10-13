using System;
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
    public class SwapiController : ControllerBase
    {
        private const string V = "https://swapi.dev";
        private const string swapiURL = V;
        private readonly string api = "/api/people/";

        [HttpGet("people", Name = "people")]
        public async Task<People> GetPeople()
        {
            var people = new People();
            using (HttpClient client = new HttpClient())
            {
                client.BaseAddress = new Uri(swapiURL);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client.GetAsync(api);
                string content;
                if (response.IsSuccessStatusCode)
                {
                    content = await response.Content.ReadAsStringAsync();
                    people = JsonConvert.DeserializeObject<People>(content);
                }
                else
                {
                    _ = string.Format("{0} ({1})", (int)response.StatusCode, response.ReasonPhrase);
                }
            }
            return people;
        }
    }
}