let cart = [
<<<<<<< HEAD
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Şarj Cihazı", quantity: 2, unitPrice: 2500 },
  { id: 3, productName: "Bardak", quantity: 1, unitPrice: 1000 },
  { id: 4, productName: "Kalem", quantity: 5, unitPrice: 2000 },
  { id: 5, productName: "Kitap", quantity: 1, unitPrice: 3000 },
  { id: 6, productName: "Bot", quantity: 4, unitPrice: 400 },
];

// cart.push( {id:7, productName: "Ruhsat", quantity:1, unitPrice: 750})

// cart.map((product) => console.log(product.productName));

console.log("<ul>");
cart.map((product) => {
  console.log(
    "<li>" +
      product.productName +
      " : " +
      product.unitPrice * product.quantity +
      "</li>"
  );
});
console.log("</li>");

// yeni bir array oluşturmaktır genelde amaç
let quantityOver2 = cart.filter((product) => product.quantity > 2);

console.log("quantityOver2", quantityOver2);

// reduce

let total = cart.reduce(
  (acc, product) => acc + product.unitPrice * product.quantity,
  0
);
console.log(total);

function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 750 });
}

addToCart(cart);

console.log(cart); // 7. elemanı da yazar

let sayi = 10;

function sayiTopla(number) {
  number += 1;
}

sayiTopla(sayi);

console.log(sayi); // 10
=======
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)

//23.00 Dersteyiz
console.log(total)


let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}



addToCart(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)

//23.00 Dersteyiz
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
