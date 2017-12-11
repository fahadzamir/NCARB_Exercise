using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TestApi1.Models;
using System.Diagnostics;

namespace TestApi1.Controllers
{
    public class PersonController : ApiController
    {
        // GET: api/Person
        [EnableCors(origins: "http://localhost:8000", headers: "*", methods: "GET")]
        public List<Person> Get()
        {
            var personsList = new List<Person> {
                new Person {
                    Id = 1234,
                    FirstName = "Fahad",
                    LastName = "Zamir",
                    JobTitle = "Software Engineer"
                },
                new Person {
                    Id = 5555,
                    FirstName = "John",
                    LastName = "Doe",
                    JobTitle = "Software Engineer"
                }
            };

            Debug.WriteLine(personsList.Count);

            return personsList;
        }

        // POST: api/Person
        [EnableCors(origins: "http://localhost:8000", headers: "*", methods: "POST")]
        public void Post([FromBody]Person value)
        {
            var person = new Person();
            person.FirstName = value.FirstName;
            person.LastName = value.LastName;
            person.JobTitle = value.JobTitle;
            Debug.WriteLine(value.FirstName);
            Debug.WriteLine(value.LastName);
            Debug.WriteLine(value.JobTitle);
        }
    }
}
