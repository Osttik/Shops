using Infrastructure.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Shop.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Controllers
{
    [ApiController]
    [Route("api/users/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserService userService;
        public UsersController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public IEnumerable<Users> Get()
        {
            return userService.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(userService.GetById(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Users user)
        {
            return CreatedAtAction("Get", new { id = user.Id }, userService.Create(user));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Users user)
        {
            userService.Update(user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            userService.Delete(id);
            return NoContent();
        }

        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
