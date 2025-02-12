//Task 1
let products = ["Airpods", "Ipad", "Iphone", "Macbook", "AirTag"]; //Products 
products.push("Phone Case"); //Adding product to the Array

let removedProduct = products.pop(); //Removing Last Product 

console.log(products);

//Task 2
let scores = [95,78,47,67,55]; //Test Scores
scores[1] = 85; // Score Update
let average = scores.reduce((sum, scores) => (sum + scores))/scores.length; //Score Average

console.log(scores);
console.log(average);

//Task 3
//Employee Information
let employee = {
    name: "Stephen Curry",
    age: 36 ,
    department: "Electronics" ,
    isActive: true
}; 

employee.department = "Sales"; //Updating employee department
employee.position = "Store Manager"; //Adding employee position

console.log(employee);

//Task 4
//Customer Database
let customers = [{

    name: "James",
    email: "James027@gmail.com", 
    purchaseAmount: 70,
},
{
    name: "Catlin",
    email: "Catlin417@gmail.com",
    purchaseAmount: 85,
},
{   
    name: "Ben",
    email: "Ben10@outlook.com",
    purchaseAmount: 450,
}];

customers.push(
 {
    name: "Reece", 
    email: "ReecesPieces@outlook.com", 
    purchaseAmount: 150
 }); //Adding Customer to Database

console.log(customers);

// Task 5
let order = {
    orderId: 314,
    customerName: "Reece",
    amount: 150
}; //Order Information

let calculateTax = (order.amount * 0.1); //Calculating Tax 
let total = (order.amount + calculateTax); //Calculating total price with tax

console.log(order);
console.log(calculateTax);
console.log(total);