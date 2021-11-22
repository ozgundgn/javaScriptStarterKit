//rest

let restFunction= function(id,...products){
console.log(id);
console.log(products);
}

restFunction(2,3,"isim",{id=2,name="isim2"});

//spread
let points=[1,2,3,4,5,60]
console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC","D",..."EFG","H") //abc ve efg yi dizi elemanları gibi görüp ayırır


//destructuring react da çok kullanılıyor
//elimizdeki arrayın degişkenlerini bir deger atamak isteriz
let populations=[10000,20000,30000] //bunu destruct ediyoruz
let [small,medium,high]=populations; //sırasıyla aktarır değerlere
console.log(small);
console.log(medium);
console.log(high);

function someFunction([small1],number){
    console.log(small1);
    //bana bir array gelecek arraydeki değerlerin ilkini small1 değişkenine atar
}

let categotu={id:1,name:"içecek"}
let {id,name}=categotu

//Redux

