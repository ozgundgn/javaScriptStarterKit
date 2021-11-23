import { users } from "../data/users.js"
import DataError from "../models/dataError.js";

export default class UserService{ //export dışardan ekleyebilme, default js file based olduğu için dosya bazlı UserService i import ettiğimde default olarak bunu implemente et dedik
constructor(loggerService){

    this.employees=[],
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
            this.employees.push(user)
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

if(Number.isNaN(Number.parseInt(user.age))){
    this.errors.push(new DataError(`Validaton problem. ${user.age}`,user))
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
    switch (user.type) {
        case "cutomers":
            if(!this.checkCustomerValidityForErrors(user)){
                this.customers.push(user)
            }
            break;
    case "employee":
        if(!this.checkEmployeeValidityForErrors(user)){
            this.employees.push(user)
        }
        default:
            this.errors.push( new DataError("Wrong user type",user))
            break;
    }
 //this.users.push(user)
 this.loggerService.log(user)
}
listCustomers(){
 return this.customers;
}
getCustomerById(id){
 return  this.customers.find(x=>x.id===id)
}

getCustomersSorted(){
   return this.customers.sort((customer1,customer2)=>{
        if(customer1.firstName<customer2.firstName){//["firstname" gibi kullan refactoringde           return 1
        return 1;
        }else if(customer1.firstName===customer2.firstName)
        {
     return 0;
        }else{
            return -1
        }
    })
}
}