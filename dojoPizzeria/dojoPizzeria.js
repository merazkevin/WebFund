// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);




function pizzaOven(crustType, sauceType, cheeses, toppings){
var pizza = {};
pizza.crusType = crustType;
pizza.sauceType = sauceType;
pizza.cheeses = cheeses;
pizza.toppings = toppings; 
return pizza; 
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzzarella"], ["pepperoni", "sausage"])
console.log(pizza1);
let pizza2 = pizzaOven("handTossed", "marinara", ["Mozzarella", "feta"], ["mushroom", "olives", "onions"]);
console.log(pizza2);
let pizza3 = pizzaOven("Rising Crust", "white",["provolone", "Mozzarella"], ["Pepperoni", "ham", "mushrooms"]);
console.log(pizza3);
let pizza4 = pizzaOven("thin", "spicyRed", ["mozzarella"], ["pepperoni" , "mushroom", "olives"]);
console.log(pizza4); 