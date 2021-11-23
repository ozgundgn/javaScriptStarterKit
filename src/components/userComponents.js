import { ElsaticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";


console.log("User component yüklendi.");

let userService= new UserService(new MongoLogger)

let user1= new User(1,"Ozgun","Doğan","Bursa")
let user2= new User(2,"Ozdgun","Ddoğan","Bursda")


userService.add(user1)
userService.add(user2)

// userService.getById()
// userService.list()
// console.log(userService.list())
// console.log(userService.getById(2))


//prototyping

let customer= {id:1,firstName:"Oxgun"}

customer.lastName="Doğan"
// console.log(customer.lastName);

console.log("--------------------")

userService.load()

let customerToAdd=new Customer(1,"Seda","Yılmaz","Ankara",20);

customerToAdd.type="customer";
userService.add(customerToAdd)
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted())



