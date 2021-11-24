import { users } from "../data/users.js"
import DataError from "../models/dataError.js";
import User from "../models/user.js";
import CommonService from "./commonService.js";
import CustomerService from "./customerService.js";
import EmployeeService from "./employeeService.js";
import UserAddModel from "../models/userAddModel.js";
import { errors } from "../data/error.js";


export default class UserService{ //export dışardan ekleyebilme, default js file based olduğu için dosya bazlı UserService i import ettiğimde default olarak bunu implemente et dedik
constructor(loggerService){

    this._customer= new CustomerService();
    this._employee= new EmployeeService(); 
    this._common=new CommonService();
    this.loggerService=loggerService
}

load (){
users.filter(x=>x.type=="customer").map(x=>{this.addCustomer(x)});
users.filter(x=>x.type=="employee").map(x=>{this.addEmployee(x)});
users.filter(x=>x.type!="employee" && x.type!="customer").map(x=>errors.push(new DataError("Wrong user type",x)))
}

listCustomers(){
 return this._customer.list();
}
getCustomerById(id){
 return this._customer.getById(id)
}
getCustomersSorted(sortParameter){
  return this._customer.getSortedCustomersBy(sortParameter);
}
addCustomer(user){
  if(user!=undefined){
    user.type="customer"
    this._customer.add(user)
  }
}
//employee

listEmployees(){
    return this._employee.list();
   }
 getEmployeeById(id){
    return this._employee.getById(id)
   }

 getEmployeesSorted(sortParameter){
     return this._employee.getSortedEmployeesBy(sortParameter);
   }

addEmployee(user){
  if(user!=undefined){
    user.type="employee"
    this._employee.add(user)
  }
}

//general

   add(user){
    switch (user.type) {
    case "customer":
      this.addCustomer(user)
            break;
    case "employee":
           this.addEmployee(user)
        default:
            errors.push( new DataError("Wrong user type",user))
            break;
    }
    // this.loggerService.log(user)
}
}