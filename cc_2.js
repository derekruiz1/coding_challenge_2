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
employee.position = "Store Manager" //Adding employee position

console.log(employee);