import { errors } from "../data/error.js";
import DataError from "../models/dataError.js";

export default class CommonService{

    validate(user,requiredFields){
    let hasErrors=false;
    if(requiredFields!=undefined){
        for (const field of requiredFields) {
        
             if(user[field]===undefined){
                hasErrors=true
                 errors.push(new DataError(`Validation problem. ${field} is required`,user))
             }
         }
    }
    this.isAgeNumeric(user);
    return hasErrors;
}

isAgeNumeric(user){
    if(Number.isNaN(Number.parseInt(user.age))){
        errors.push(new DataError(`User age is not numeric. ${user.age}`,user))
    }
 }
} 