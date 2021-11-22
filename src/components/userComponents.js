import { ElsaticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";


console.log("User component yüklendi.");

let userService= new UserService(new MongoLogger)

let user1= new User(1,"Ozgun","Doğan","Bursa")
let user2= new User(2,"Ozdgun","Ddoğan","Bursda")


userService.add(user1)
userService.add(user2)

userService.getById()
userService.list()
console.log(userService.list())
console.log(userService.getById(2))


//prototyping

let customer= {id:1,firstName:"Oxgun"}

customer.lastName="Doğan"
// console.log(customer.lastName);

console.log("--------------------")

userService.load()
console.log(userService.customers);
console.log(userService.employess);
console.log(userService.errors);



