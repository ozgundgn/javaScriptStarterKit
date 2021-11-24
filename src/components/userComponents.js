import { ElsaticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import { errors } from "../data/error.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserAddModel from "../models/userAddModel.js";
import UserService from "../services/userService.js";


console.log("User component yüklendi.");

let userService= new UserService(new MongoLogger)

// let user1= new User(1,"Ozgun","Doğan","Bursa")
// let user2= new User(2,"Ozdgun","Ddoğan","Bursda")


// userService.add(user1)
// userService.add(user2)

// // userService.getById()
// // userService.list()
// // console.log(userService.list())
// // console.log(userService.getById(2))


// //prototyping

// let customer= {id:1,firstName:"Oxgun"}

// customer.lastName="Doğan"
// // console.log(customer.lastName);

// console.log("--------------------")

userService.load()

let customerToAdd=new UserAddModel({id:1,lastName:"Yılmaz",city:"Ankara",age:20,type:"customer"})
let employeeToAdd=new UserAddModel({id:1,lastName:"Can",city:"Mardin",age:23,type:"employee"})

// userService.add(customerToAdd)

userService.addCustomer(customerToAdd)
console.log("----------customer list----------")
console.log(userService.listCustomers());
console.log("----------customer sorted by firstName desc----------")
console.log(userService.getCustomersSorted("firstName"));
console.log("----------customer getById(2)----------")
console.log(userService.getCustomerById(2))


userService.addEmployee(employeeToAdd)
console.log("----------employee list----------")
console.log(userService.listEmployees());
console.log("----------employees sorted by firstName desc----------")
console.log(userService.getEmployeesSorted("firstName"));
console.log("----------employees getById(3)----------")
console.log(userService.getEmployeeById(3))

console.log("----------Errors----------")

console.log(errors);



