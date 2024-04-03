// 1. mehsullarin ucuzdan bahaya siralanmasi

let products = [
    {
      id: 1,
      name: "MERCEDES",
      price: 15000,
    },
    {
      id: 2,
      name: "HUNDAI",
      price: 5000,
    },
    {
      id: 3,
      name: "BMW",
      price: 10000,
    },
    {
      id: 4,
      name: "KHAZAR",
      price: 2000,
    },
  ];

const productList = products.map((product)=>product.price);
let productFilter=products.sort((a,b) => a.price-b.price);
console.log( productFilter);
// 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin


let general = []
general.push(Math.floor(Math.random() * 100))
general.push(Math.floor(Math.random() * 100))
general.push(Math.floor(Math.random() * 100))
general.push(Math.floor(Math.random() * 100))
general.push(Math.floor(Math.random() * 100))

const sum = general.reduce((a, b) => a + b, 0)

console.log(`ArrayNƏTİCƏ: ${general.join(' + ')} =>  ${sum} `)

