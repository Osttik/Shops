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
    [Route("api/products/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService userService;
        public ProductsController(ProductService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public IEnumerable<Products> Get()
        {
            return userService.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(userService.GetById(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Products user)
        {
            return CreatedAtAction("Get", new { id = user.Id }, userService.Create(user));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Products user)
        {
            userService.Update(user);
            return NoContent();
        }

        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
