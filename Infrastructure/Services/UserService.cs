using Infrastructure.Data;
using Infrastructure.DataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Services
{
    public class UserService
    {
        private Infrastructure.DataBase.Shop _shop;
        public UserService(Infrastructure.DataBase.Shop shop)
        {
            _shop = shop;
        }

        public IEnumerable<Users> GetAll()
        {
            return _shop.Users as IEnumerable<Users>;
        }
        public Users GetById(int id)
        {
            return _shop.Users.Where(user => user.Id == id).FirstOrDefault();
        }
        public int Create(Users user)
        {
            try
            {
                _shop.Users.Add(user);

                return _shop.SaveChanges();
            }
            catch (Exception)
            {
                return -1;
            }
        }

        public void Update(Users user)
        {
            Users found = _shop.Users.Where(n => n.Id == user.Id).FirstOrDefault();
            
            found.Name = user.Name;
            found.Login = user.Login;
            found.Password = user.Password;
            found.Permissions = user.Permissions;
        }

        public int Delete(int id)
        {
            _shop.Users.Remove(_shop.Users.Where(u => u.Id == id).FirstOrDefault());
            return _shop.SaveChanges();
        }
    }
}
