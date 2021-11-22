class Customer{
    constructor(id,customerNumber){
this.id=id;
this.customerNumber=customerNumber;
    }
}

let customer= new Customer(); // değerleri geçmesek de oluyor
//prototyping
console.log(customer); //Customer içinde bir object oluşturdu
costumer.name="Murat";
console.log(costumer.name); //bir objeye hiç olmayan bi deger atayabiliyoeuz buna prototyping özellği denir

Customer.bisey="bişey"
console.log(Customer.bisey); //classa yapılan bprototyping

console.log(customer.customerNumber); //this ile atadıktan sonra bu değer oluştur ve okuduk
class IndividualCustomer extends Customer{

    constructor(firstName,id,customerNumber){
        super(id,customerNumber);//base c#da karşılık geldiği 
        this.firstName=firstName;
    }
}


class CorporsteCostumer extends Customer{
constructor(firstName,id,customerNumber){
    super(id,customerNumber);
    this.firstName=firstName;
}
}


let products=[
    {id:1,name:"Acer",unitPrice:233},
    {id:2,name:"Acer2",unitPrice:233},
    {id:3,name:"Acer3",unitPrice:233},
    {id:4,name:"Acer4",unitPrice:233}
]
let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0); // accnin başlangıc degeri sıfır her urunun unit pricesini eker



