import Employee from "../models/employee.js";
import CommonService from "./commonService.js";

export default class EmployeeService {

    constructor(){
      this._common=new CommonService();
      this.employees=[];
    }

    getById(id){
        return this.employees.find(x=>x.id===id)
    }

    list(){
        return this.employees.filter(x=>x.type==="employee")
    }

    add(employee){
        if(!this.checkEmployeeValidityForErrors(employee)){
            this.employees.push(employee)
        }
    }

    checkEmployeeValidityForErrors(employee){
        let requiredFields=Object.keys(new Employee());
        return this._common.validate(employee,requiredFields);
    }

    getSortedEmployeesBy(sortParameter){
        return this.employees.sort((emp1,emp2)=>{
            if(emp1[sortParameter]<emp2[sortParameter]){//["firstname" gibi kullan refactoringde           return 1
            return 1;
            }else if(emp1[sortParameter]===emp2[sortParameter])
            {
             return 0;
            }else{
                return -1
            }
        })
    }
}