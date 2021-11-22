let cart=[
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarj Cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Pot",quantity:5,unitPrice:150}
]
// react,angular,vue falan geliştirilen uygulamalara SPA (single page application )

cart.push({id:8,productName:"Ruhs8at",quantity:1,unitPrice:20})
/* js de push yazdığımızda bellekteki yerini değiştirmiyoruz aynı referans, ekleme yaptığmızda yeniden render ediyor angular,
//vue ama react bunu yapmaz.
// data değiştiğinde önceden 6 vardı şimdi 7 var olarak anlamıyor. Tercihleri böyle, redux gibi mimariler buna çok önem verir.
Bizim referansı değiştirmemiz gerekiyor.
*/

function addToCart(sepet){
sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20})
}

addToCart(cart)
console.log("<ul>")
cart.map(x=>{
    console.log("<li>"+x.productName+":"+x.unitPrice*x.quantity+"</li>")
})
console.log("</ul>");
var quantityOver2=cart.filter(x=>x.quantity>2);//dizi döner

console.log(quantityOver2)

var total=cart.reduce((acc,product)=>acc+product.quantity*product.unitPrice,0);
console.log(total);

