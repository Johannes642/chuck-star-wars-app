using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sovtech_assignment.Entities
{
    public class Chuck
    {
        public List<ChuckJson> Result { get; set; }
    }
    public class ChuckJson
    {
        public string Value { get; set; }
      //  public string Id { get; set; }
    }
}
