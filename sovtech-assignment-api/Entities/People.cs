using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sovtech_assignment.Entities
{
    public class People
    {
        public List<Result> results { get; set; }
    }
    public class Result
    {
        public string Name { get; set; }
    }
}
