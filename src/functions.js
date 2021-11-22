function addToCart(quantity,productName="Elma") { 
    console.log('Sepete eklendi :'+productName+'adet :'+quantity);
}

addToCart(10); //yerleştirmeye ilk parametreden başlar sırayla gider, bu yüzden default değeri olan paramatreler en sonra yazılmalıdır
let dolar=9.50;
let seyHello=()=>{ //this keywordu kullanımında farklılık gösterir
    console.log("hello world");
}

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}
 product2=product3
product2.productName="Karpuz"
console.log(product3.productName) // sonuç karpuz oluyor, referans türü, objectler arraylariheap, adreslerini tutar yani product2nin tuttuğu değerleri tanımlayan ismi alır ve onu tutmaya başlar.

function addToCart2(product){ //immutability 
    console.log(product.productName);
}

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1); //sonuç 20 değer tipi sayılar stack, değerler ile devam ediyor

function addToCart4(products) 
{
    console.log(products);
}

function addToCart4(x) // burada scoped özelliği olduğundan products nesnesinin function içindeki bloklarda dğer alıp almadığını bakıyor yoksa bi üst scope a bakıyoe orada da tanımlı olan products buluyor oy yüzden yine ürünleri listeliyor
{
    console.log(products);
}
let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:11,quantity:6},
    {productName:"Karpuz",unitPrice:12,quantity:7}
]

addToCart4(products) //ekrana ürünleri yazdı

function add(...numbers){ // içerisine verilenleri attığı bir dizi uretir, eğer başka parametre tanımlayacaksak en başa tanımlamalıyız çünkü kalanları diziye toplar o yüzden adı rest
    let total=0;
for (let index = 0; index < numbers.length; index++) {
   
    total=total+numbers[index]
}
console.log(total);
}
add(20,30);

let numbers=[30,40,900,20];
console.log(Math.max(...numbers)) //burada diziyi elemanlarına ayırıp tek tek ele alabilir

//desctructured
let [icAnadolu,marmara]=["İç Anadolu","Marmara","Karanediz"];

console.log(icAnadolu); //çıktı içanadolu
console.log(marmara); //çıktı marmara

let newProductName,newUnitPrice,newQuantity 
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}=
    { productName:"Karpuz",unitPrice:12,quantity:7})

    console.log(newProductName)
    console.log(newUnitPrice)
    console.log(newQuantity)





