using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TestApi1.Models;

namespace TestApi1.Controllers
{
    public class PersonAPIController : ApiController
    {
        // GET: api/Person
        [EnableCors(origins: "http://localhost:8000", headers: "*", methods: "GET")]
        public List<PersonViewModel> Get()
        {
            var personsList = new List<PersonViewModel> {
                new PersonViewModel {
                    Id = 1234,
                    FirstName = "Fahad",
                    LastName = "Zamir",
                    JobTitle = "Software Engineer"
                },
                new PersonViewModel {
                    Id = 5555,
                    FirstName = "John",
                    LastName = "Doe",
                    JobTitle = "Software Engineer"
                }
            };
            
            return personsList;
        }

        // GET: api/Person/5
        public string Get(int id)
        {            
            return "value";
        }

        // POST: api/Person
        [EnableCors(origins: "http://localhost:8000", headers: "*", methods: "POST")]
        public void Post([FromBody]PersonViewModel value)
        {
            var person = new PersonViewModel();
            person.FirstName = value.FirstName;
            person.LastName = value.LastName;
            person.JobTitle = value.JobTitle;
            System.Diagnostics.Debug.WriteLine(value.FirstName);
            System.Diagnostics.Debug.WriteLine(value.LastName);
            System.Diagnostics.Debug.WriteLine(value.JobTitle);
            Console.WriteLine(value.JobTitle);
        }

        // PUT: api/Person/5
        public void Put(int id, [FromBody]string value)
        {
            var person = new PersonViewModel();
        }

        // DELETE: api/Person/5
        public void Delete(int id)
        {
            var person = new PersonViewModel();
        }
    }
}
