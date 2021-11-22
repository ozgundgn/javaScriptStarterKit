import { users } from "../data/users.js"
import DataError from "../models/dataError.js";

export default class UserService{ //export dışardan ekleyebilme, default js file based olduğu için dosya bazlı UserService i import ettiğimde default olarak bunu implemente et dedik
constructor(loggerService){

    this.employess=[],
    this.customers=[],
    this.errors=[],
    this.loggerService=loggerService
}
load (){

for(const user of users){
    switch (user.type) {
        case "customer":
            if(!this.checkCustomerValidityForErrors(user)){
                this.customers.push(user)
            }
            break;
    case "employee":
        if(!this.checkEmployeeValidityForErrors(user)){
            this.employess.push(user)
        }
        break;
        default:
            this.errors.push(new DataError("Wrong user type",user))
            break;
    }
}
}
checkCustomerValidityForErrors(user){
let requiredFields="id firstName lastName age city".split(" ");
let hasErrors=false
for (const field of requiredFields) {
   hasErrors=true
    if(!user[field]){
        this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
    }
}
return hasErrors;
}

checkEmployeeValidityForErrors(user){
    let requiredFields="id firstName lastName age city salary".split(" ");
    let hasErrors=false
    for (const field of requiredFields) {
       hasErrors=true
        if(!user[field]){
            this.errors.push(new DataError(`Validation problem. ${field} is required`,user))
        }
    }

    if(Number.isNaN(Number.parseInt(user.age))){
        this.errors.push(new DataError(`Validaton problem. ${user.age}`,user))
    }
    return hasErrors;
    }
add(user){
 //this.users.push(user)
 this.loggerService.log(user)
}
list(){
 //return  this.users
}
getById(id){
 //return  this.users.find(x=>x.id===id)
}
}