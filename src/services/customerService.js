
import Customer from "../models/customer.js";
import CommonService from "./commonService.js";

export default class CustomerService {
 
constructor(){
    this._common=new CommonService();
    this.customers=[];
}
getById(id){
    return this.customers.find(x=>x.id===id)
}

list(){
    return  this.customers.filter(x=>x.type==="customer")
}

add(customer){
  if(!this.checkCostumerValidityForErrors(customer)){
    this.customers.push(customer);
   }
}
checkCostumerValidityForErrors(customer){
    let requiredFields=Object.keys(new Customer());
    return this._common.validate(customer,requiredFields);
}
getSortedCustomersBy(sortParameter){
    return this.customers.sort((customer1,customer2)=>{
        if(customer1[sortParameter]<customer2[sortParameter]){//["firstname" gibi kullan refactoringde           return 1
        return 1;
        }else if(customer1[sortParameter]===customer2[sortParameter])
        {
         return 0;
        }else{
            return -1
        }
    })
}
}