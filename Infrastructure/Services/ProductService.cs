using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Services
{
    public class ProductService
    {
        private Infrastructure.DataBase.Shop _shop;
        public ProductService(Infrastructure.DataBase.Shop shop)
        {
            _shop = shop;
        }

        public IEnumerable<Products> GetAll()
        {
            return _shop.Users as IEnumerable<Products>;
        }
        public Products GetById(int id)
        {
            return _shop.Products.Where(user => user.Id == id).FirstOrDefault();
        }
        public int Create(Products user)
        {
            try
            {
                _shop.Products.Add(user);

                return _shop.SaveChanges();
            }
            catch (Exception)
            {
                return -1;
            }
        }

        public void Update(Products user)
        {
            Products found = _shop.Products.Where(n => n.Id == user.Id).FirstOrDefault();

            found.Name = user.Name;
            found.Rate = user.Rate;
        }
    }
}
