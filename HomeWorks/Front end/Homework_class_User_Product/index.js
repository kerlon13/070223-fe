class User {
    constructor(name,username, role, status) {
        this.name = name;
        this.username = username;
        this._role = role;
        this._status = status;
        User.users.push(this);
    }

    static roles = ['manager', 'admin', 'root', 'guest'];
    static statuses = ['online', 'offline', 'work'];
    static users = [];

    get role() {
        return this._role;
    }

    set role(value) {
    
        if (User.roles.includes(value)) {
          this._role = value;
        } else {
          console.log(`Указанное значение (${value}) недопустимо.`);
        }
      }  

      get status() {
        return this._status;
      }

      set status(newStatus) {
    
        if (User.statuses.includes(newStatus)) {
          this._status = newStatus;
        } else {
          console.log(`Указанное значение статуса (${newStatus}) недопустимо.`);
        }
      }

      static getAllUsers() {
        return User.users;
      }

}

class Product {
    constructor(title, price, count) {
        this.title = title;
        this._price = price;
        this.count = count;
        Product.products.push(this);
    }
    static income = 0;
    static products = [];

    sale () {
        if(this.count === 0) {
          throw new Error("Товар отсутствует на складе");
        } else {
            this.count--;
            Product.income += this._price;
        }
    }

    get price() {
      return this._price;
    }
  
    set price(value) {
      if (value > 0) {
        this._price = value;
      } else {
        throw new Error("Цена должна быть больше 0");
      }
    }
}

const user1 = new User("Alice","alice12","moderator","online");
const user2 = new User("Ivan","ivan123","admin","online");
const users = User.getAllUsers();

function displayUser(users) {
    for (let user of users) {
      const { name, username, role, status } = user;
      const userDetails = `Имя: ${name}, Логин: ${username}, Роль: ${role}, Статус: ${status}`;
      console.log(userDetails);
    }
}
displayUser(users);

const product1 = new Product("Ноутбук", 1000, 5);

product1.sale();
console.log(product1.count); 
console.log(Product.income); 
console.log(Product.products);

console.log(product1.price);
product1.price = 800;
console.log(product1.price);