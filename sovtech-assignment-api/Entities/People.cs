using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sovtech_assignment.Entities
{
    public class People
    {
        public List<PeopleJson> results { get; set; }
    }
    public class PeopleJson
    {
        public string Name { get; set; }
    }
}
