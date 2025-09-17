const user={id: 1, name: 'Hossain', job: 'actor'};
// JavaScript Object Notation (JSON)
const stringified=JSON.stringify(user);
console.log(user);
console.log(stringified);
/* 
{ id: 1, name: 'Hossain', job: 'actor' } ->JS
{"id":1,"name":"Hossain","job":"actor"} ->JSON
 */


const shop ={
    owner: 'Ali',
    address: {
        street: 'Khagan Bazar, Savar',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'Mic', 'Airpod', 'Keyboard'],
    revenue: 450000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON=JSON.stringify(shop);
console.log(shopJSON);