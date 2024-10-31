//variables

//the following are different variables initialisation methods, let,const,var

//let fullName = 'Mahmud Akinbami'
//console.log(fullName)

//let age = 25
//console.log(age)

//var country = "Nigeria"
//console.log(country)

//variable reassignment. 'let' allows the option for variable reassignment. 

//fullName = 'demi Akinbami'
//console.log(fullName)

//variable declaration. 'let' allows the option for variable declaration without even adding the data to it. Const cant do that. const declaration must be initialised . 'let' allows the option for variable declaration without initialisation. 
//let fullName 



//Arithmetic operations
// let x = 10
// let y = 5

//addition
// let addition = x + y 

//subtraction
// let subtraction = x - y

//multiplication

// let multiplication = x * y

//division

// let division = x / y

//modulus (remainder)

// let modulus = x % y

//exponentiation

// let exponentiation = x ** y

// console.log(addition, subtraction, multiplication, division, modulus, exponentiation)

//increment

// let cartItems = 0

// cartItems++

// console.log(cartItems)

//decrement

// let newCartItems = 0
// newCartItems--


//Addition Assignment Operation
// let totalAmount = 100
// totalAmount += 50  //instead of reassigning totalAmount, you can do this get reassign totalAmount to a new value.

//subtraction Assignment Operation

// let remainingAmount = 100
// remainingAmount -= 50//instead of reassigning totalAmount, you can do this get reassign totalAmount to a new value.


//multiplication Assignment Operation

// let totalPrice = 100
// totalPrice *= 50  //instead of reassigning totalAmount, you can do this get reassign totalAmount to a new value.


//Division Assignment Operation

// let currentPrice = 100
// currentPrice /= 50  //instead of reassigning totalAmount, you can do this get reassign totalAmount to a new value.

//modulus Assignment Operation

// let totalQuantity = 10
// totalQuantity %= 5  //instead of reassigning totalAmount, you can do this get reassign totalAmount to a new value.

// console.log(totalAmount, remainingAmount, totalPrice, currentPrice, totalQuantity)


//how to compare

//greater than comparison
// let greaterThan = 10 > 20

//less than comparison
// let lessThan = 10 < 20

//equal comparison

// let equal = 10 === 10

//not equal comparison

// let notEqual = 10!== 10

//greater than or equal comparison

//let greaterThanEqual = 10 >= 20

//less than or equal comparison

//let lessThanEqual = 10 <= 20

//console.log(greaterThan, lessThanEqual, equal, notEqual, greaterThanEqual, lessThanEqual)


//math object

//let roundedUp = Math.ceil(5.3)

// let roundedDown = Math.floor(5.3)

// let highestVariable = Math.max(10, 20, 13, 40)

// let lowestVariable = Math.min(10, 20, 13, 40)

// let randomNumber = Math.random() 

// let roundedRandomNumber = Math.floor(randomNumber *100)
// console.log(roundedRandomNumber)

//Type Conversion= it is converting strings to numbers and vice versa
//conversion of strings to number
// let age = "40"
// age = Number(age)
// console.log(typeof age)

// conversion of number to strings
// let firstName = 30
// firstName = String(firstName)
// console.log( typeof firstName)

// for example
// Adam buys two items in a store,one of the items was sent to the js as a string whilst the other was sent as a number how do you calculate the price of both items.

// let firstItemPrice = "100"
// let secondItemPrice = 200

// firstItemPrice = Number(firstItemPrice)

// let totalPrice = firstItemPrice + secondItemPrice
// console.log(totalPrice)

//another real life example
// let firstItemPrice = prompt("Enter First Item Price")
// let secondItemPrice = prompt("Enter Second Item Price")
// //almost every data, especially when users have to type them come in as strings, and we have to convert them to numbers to calculate

// firstItemPrice = Number(firstItemPrice)
// secondItemPrice = Number(secondItemPrice)

// //then calculate

// let totalPrice = firstItemPrice + secondItemPrice
// console.log(totalPrice)


////Function

// function printMyName(){
//     console.log("joseph Brednan")
// }
// // you have to recall it and it is reusable 
// printMyName()
// printMyName()
// printMyName()

// // Another Example

// function calculateAverage(){
//     let firstIncome = 200
//     let secondIncome = 300
//     let thirdIncome = 300

//     let incomeAverage = (firstIncome + secondIncome + thirdIncome)/ 3

//     let finalAnswer = Math.floor(incomeAverage) * 10

//     console.log(finalAnswer)
// }

// //remember to call the function outside 
// calculateAverage()


//combine all you have learnt so far


// function calculateAverageIncome(){
//     let firstPrompt = prompt("Enter your first Item Price")
//     let secondPrompt = prompt("Enter your second price")
    
//     //it comes as a string, convert to number
//     firstPrompt = Number(firstPrompt)
//     secondPrompt = Number(secondPrompt)

//     //now find the average

//     let averageIncome = (firstPrompt + secondPrompt) / 2

//     let finalAnswer = Math.floor(averageIncome)
//     console.log(finalAnswer)
// }
// //remember to call the function. 
// calculateAverageIncome()



////Return statement 
//This is telling the function to return the answer that you want from the function, and only that answer. basically look at the end result of any function, and then return that end result you want. 

//so for example, in the previous example, 

// function calculateAverageIncome(){
//     let firstPrompt = prompt("Enter your first Item Price")
//     let secondPrompt = prompt("Enter your second price")
    
//     //it comes as a string, convert to number
//     firstPrompt = Number(firstPrompt)
//     secondPrompt = Number(secondPrompt)

//     //now find the average

//     let averageIncome = (firstPrompt + secondPrompt) / 2

//     let finalAnswer = Math.floor(averageIncome)
//     return finalAnswer    ////this is where you will put return.  it is important to know that return statements is at the end of the function. 
// }
// //remember to call the function. 
// calculateAverageIncome()

////real example

// function calculateAverageIncome(){
//     let joseph = 200
//     let jane = 300
//     let jimmy = 300

//     let averageIncome = (joseph + jane + jimmy) / 3

//     let finalAnswer = Math.floor(averageIncome)
//     return finalAnswer    ////this is where you will put return.  it is important to know that return statements is at the end of the function.  this function will return the final answer that the user wants.
// }

// console.log(calculateAverageIncome())////if you remove the return statement, the console log will come out as undefined. however if you add the return statement, the console log will come out as the right answer. 

////for every action taken in an application, a function is built for the action.






// // OBJECT LITERALS //

//Object literals are  database basically that are kept in variables.

// let bankCustomer1 ={
//     firstName : 'John',
//     lastName : 'Smith',
//     age : 22,
//     country: "Nigeria",
//     accountTier: 2,
//     rich: true 
// }

// let bankCustomer2 = {
//     firstName : 'Smith',
//     lastName : 'Amy',
//     age : 29,
//     country: "Armenia",
//     accountTier: 1,
//     rich: true 
// }

// let bankCustomer3 = {
//     firstName : 'John',
//     lastName : 'Doe',
//     age : 35,
//     country: "USA",
//     accountTier: 3,
//     rich: false 
// }

//// You can nest object literals in other object literals


////METHODS////
//A method is a function that is inside an object literal.
//for example

// let purchaseRecords = {
//     customerName : "james",
//     paymentMethod : "card",
//     numberOfItems : 3,
//     itemOnePrice : 100,
//     itemTwoPrice : 200,
//     itemThreePrice : 300,
//     wasPaymentSuccessful : true,
//     totalAmount : function(){
//         let total =  this.itemOnePrice + this.itemTwoPrice + this.itemThreePrice
//         return total
//     }
// }

// let record = purchaseRecords.totalAmount()
// console.log(record)

// //This method calculates the total amount of money the customer spent.

//// OBJECT LITERALS
//how to call and access a property in the object literal
// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     color: 'Blue',
//     mileage: 50000,
//     // add more properties here as needed
//     // you can add methods to the object as well.
//     // example:
//     carAge : function(){
//         return 2024- this.year
//     }
// }

// let result = car.carAge()

// console.log(result)
// let carColor = car.color
// let carModel = car.model

// console.log(carColor)
// console.log(carModel)


////Another Example

// const house = {
//     color : "gray",
//     rooms : 6,
//     size : "350sqm",
//     houseDescription : function(){
//         return `the house colour is ${this.color}, it has ${this.rooms} rooms and a size of ${this.size}`
//     }
// }

// let result = house.houseDescription()

// console.log(result)

////Another Example

// const me =  {
//     name : "mahmud",
//     age : 26,
//     height : "183cm",
//     color : "black",
//     eyeColor : "black",

//     description : function(){
//         return `Hello, i am ${this.name}, i am ${this.age} years old, i am ${this.height} tall and have a ${this.color} skin colour `
//     }
// }

// let result = me.description()
// console.log(result)

/////COMBINE ALL YOU HAVE LEARNT SO FAR

// let address = prompt("house address")
// let noOfBedrooms = prompt("no of bedrooms")
// let noOfBathrooms = prompt("no of bathrooms")
// let garageCapacity = prompt("garage capacity")
// let automaticDoor = prompt("automatic door?")
// let hasTools = prompt("has tools?")
// let colorOfGarage = prompt("color of garage")

// let house = {
//     address : address,
//     noOfBathrooms : noOfBedrooms,
//     noOfBathrooms : noOfBathrooms,
//     garage : {
//         capacity : garageCapacity,
//         automaticDoor : automaticDoor,
//         tools : hasTools,
//         color : colorOfGarage,
//     },

//     description : function(){
//         return `This house is located at ${this.address}, it has ${this.noOfBathrooms} bathrooms and ${this.noOfBedrooms} bedrooms. The garage in this house can hold ${this.garage.capacity} people, has an automatic door ${this.garage.automaticDoor}, has ${this.garage.tools} and its color is ${this.garage.color}`
//     }
// }

// let result = house.description()

// console.log(result)
//properties are also called keys.  start properties name s with lowercase letters. do not put the property of an object in double, single quotes oe backticks. If the property is made up of two or more words, dont write the two words with a space between them. the values of the properties/keys can be anything.(number/string/boolean|object literals/arrays e.t.c)


/////How to modify  OBJECT LITERAL.

// const bioData = {
//     name : "John Doe",
//     age : 25,
//     gender : "Male",
//     hobbies : ["reading", "painting", "cooking"],
//     address : {
//         street : "123 Main Street",
//         city : "New York",
//         state : "NY"
//     }
// }

// // to modify the property 
// bioData.gender = "non-binary"

// // to delete the property
// delete bioData.gender

// // to add a new property

// bioData.education = "Bachelor's Degree in Computer Science"

// // to modify a nested property

// bioData.address.city = "Los Angeles"

// console.log(bioData)

// // to add a new nested property

// bioData.address.country = "USA"

// console.log(bioData)

// // to delete a nested property

// delete bioData.address.country

// console.log(bioData)

// console.log(bioData)

//// to destructure an object literal 

////to use an object literal, bring it out and use it as a variable outside the object literal

//for example

// const bioData = {
//     name : "John Doe",
//     age : 25,
//     gender : "Male",
// }

// //console.log(age)// this will give you error messages as i cant access data from the bio data object literal without access to the bio data object literal. 
// // destructure an object literal will allow you to access the bio data key/property in the object literal and convert any of the properties to a variable  that can be used for anything. 

//     let {name, age} = bioData
//     console.log(name)
//     console.log(age)

// to destructure an array



////HOW TO CREATE A METHOD FOR MULTIPLE OBJECT LITERAALS, IF you want to combine object literals to make a method.

// const bioData = {
//     nameOfOwner1 : "John Doe",
//     ageOfOwner1 : 25,
//     genderOfOwner1 : "Male",
// }

// const secondBioData = {
//     nameOfOwner2 : "Amy Daisy",
//     ageOfOwner2 : 26,
//     genderOfOwner2 : "Female",
// }

// const thirdBioData = {
//     nameOfOwner3 : "lade demi",
//     ageOfOwner3 : 28,
//     genderOfOwner3 : "Female",
// }

//     //this is where destructure will be useful
//     let {nameOfOwner1, ageOfOwner1, genderOfOwner1} = bioData
//     let {nameOfOwner2, ageOfOwner2, genderOfOwner2} = secondBioData
//     let {nameOfOwner3, ageOfOwner3, genderOfOwner3} = thirdBioData


// function carStatement(){
// let sentence = `The first car with me is owned by ${nameOfOwner1}, with a gender of ${genderOfOwner1} and an age of ${ageOfOwner1}. The second car with me is owned by ${nameOfOwner2}, with a gender of ${genderOfOwner2} and an age of ${ageOfOwner2}. The third car with me is owned by ${nameOfOwner3}, with a gender of ${genderOfOwner3} and an age of ${ageOfOwner3}.`
// console.log(sentence)
// }

// carStatement()


////LOOP////

// const house = {
//     color : "blue",
//     rooms : 4,
//     size : "250sqm",
// }

// let result = Object.keys(house)

// let results = Object.values(house)

// console.log(result)
// console.log(results)

///// WE CAN CREATE OBJECT LITERALS TO INHERIT THE PROPERTIES OF A PRE EXISTING OBJECT LITERALS USING AN OBJECT CONSTRUCTOR.

// const person = {
// firstName: 'John',
// lastName: 'Doe',
// age: 30
// }

// const aNewPerson = Object.create(person)

//to change the value of the the existing properties
// aNewPerson.firstName = 'Jane'
// aNewPerson.lastName = 'Smith'
// aNewPerson.age = 28

//how about adding a new key to the new object literal
// aNewPerson.height = "183cm"
// aNewPerson.Weight = "90kg"

// console.log(aNewPerson)

////CREATE A FUNCTION THAT SAYS HELLO TO ANY USER THAT SUBMITS THEIR NAME

// let userName = prompt("name?")

// function helloUser(userName){
//     let greeting = `Hello ${userName}, my name is Ari`
//     console.log(greeting)
// }

// helloUser(userName)
// helloUser("david")

////you can save multiple parameters as well
// let firstName = prompt("first name?")
// let lastName = prompt("last name?")

// function helloUserWithMultipleParams(firstName, lastName){
//     let greeting = `Hello ${firstName} ${lastName}, my name is Ari`
//     console.log(greeting)
// }

// helloUserWithMultipleParams(firstName, lastName)


////CREATE A FUNCTION THAT IDENTIFIES THE LEAST OF 5 SCORES FROM 5 STUDENTS
// let firstScore = prompt("your first score")

// let secondScore = prompt("your second score")

// let thirdScore = prompt("your third score")

// let fourthScore = prompt("your fourth score")

// let fifthScore = prompt("your fifth score")

// function findLeastScore(score1, score2, score3, score4, score5){
//     let leastScore = Math.min(score1, score2, score3, score4, score5)
//     console.log(`The least score is ${leastScore}`)
// }

// findLeastScore(firstScore, secondScore, thirdScore, fourthScore, fifthScore)

//// What if you expect one parameter to collect more than one value

////just use a rest parameter, which is just putting three dots before the parameter.

// function vacationCity(username, ...cities){
//     let  nameAndCities = `hey ${username}, your favorite vacation cities are ${cities}`
//     console.log(nameAndCities)
// }


// vacationCity("John Doe", "Paris", "Tokyo", "London")

////CREATE A FUNCTION THAT COLLECTS ICE CREAM ORDERS AND PRINT THE ORDERS FOR THE KITCHEN 

// function iceCreamOrder(customerName, customerAddress, cupSize, flavor1, flavor2, ...toppings){

//     let order = `Hello, ${customerName} orders is as follows:
//     Cup size: ${cupSize} 
//     Flavor 1: ${flavor1} 
//     Flavor 2: ${flavor2} 
//     Toppings: ${toppings} 
//     Delivery address: ${customerAddress}`
    
//     console.log(order)

// }

// iceCreamOrder("John Doe", "123 Main Street, New York, NY", "Large", "Mint Chocolate", "Rocky Road", "Sprinkles", "Peanut butter")

// //another customer order

// iceCreamOrder("Jane Smith", "456 Elm Street, Los Angeles, CA", "Medium", "Rocky Road", "Mint Chocolate", "Nutty Almond", "Chocolate Chip")

/////ARRAY//

// const myArray =[
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
// ]

// //the index positions of items in an array starts from 0.
// //the no of items in an array is the length of the array.  so the length is 6, not because the last no is 6, its because of the no of items are 6. 

// //to call a certain item within the array
// const result = myArray[0] // calling  the index position of the item, 
// console.log(result)

////TO LEARN HOW TO MANIPULATE ARRAYS

// //to add an item to the beginning of an array--UNSHIFT METHOD 

    // myArray.unshift("hello")
    //  console.log(myArray)

    // //to remove an item from the beginning of an array -- SHIFT METHOD 

    // myArray.shift()
    // console.log(myArray)

    //TO CREATE an array that contains 3 bank customer records

    // const customerRecords = [
    //     {
    //         customerName : "Mahmud Akinbami",
    //         bankAccount : 7378393877,
    //         balance : 83873683
    //     },

    //     {
    //         customerName : "Muiz Ali",
    //         bankAccount : 36357836367,
    //         balance : 879
    //     },

    //     {
    //         customerName : "Mariam Ibrahim",
    //         bankAccount : 33537366373,
    //         balance : 20
    //     },
    // ]

// customerRecords.unshift({
//     customerName : "Ari",
//     bankAccount : 3635536363,
//     balance : 1000
// })

// customerRecords.shift()


/////TO REMOVE  THE END OF OF ARRAY-----POP METHOD/////

// customerRecords.pop()
// console.log(customerRecords)

////TO ADD THE END OF ARRAY-----PUSH METHOD/////

// customerRecords.push({
//     customerName : "Demi Lovato",
//     bankAccount : 366535637,
//     balance : 464748894
// })

// console.log(customerRecords)

////TO REVERSE THE POSITION OF ARRAYS , SO TO MAKE THE MOST RECENT OBJECT LITERAL IN THE ARRAY COME TO THE FIRST POSITION

// customerRecords.reverse()
// console.log(customerRecords)

////TO CHECK IF AN ARRAY INCLUDES A PARTICULAR OBJECT LITERAL////


////theres is "indexof" method to check the index position of an item and "includes" method to check if an item is included in the array

// const myArray =[
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     "hello",
//     5,
//     9574,
//     true,
//     5
// ]

// let result = myArray.indexOf(5)
// console.log(result)

// let result = myArray.includes(5)
// console.log(result)

/////SLICING ARRAYS /////
////we slice with the index position
// let result = myArray.slice(2, 3)////the first number in the parenthesis is the index position, the second is the the index position of where you want it to stop

// console.log(result)
// console.log(myArray)

/////SPLICE ARRAYS /////
// let result = myArray.splice(2,1) ////the first number in the parenthesis is the index position, the second is the no of the index position from the first number that you want to splice.  remember its not the same as slice length, the second number in the parenthesis is the no of items you want to splice from the first no.
// console.log(result)
// console.log(myArray)

/////HOW TO ACCESS PROPERTIES IN AN ARRAY /////

// const myArray = [
//     {
//         name: "John Doe",
//         age: 30,
//         country : "United States",
//     },

//     {
//         name: "Jane Smith",
//         age: 25,
//         country : "England"
//     },
// ]

// let result = myArray[0]
// result.country 

// console.log(result.country)

////Another example////

// const studentArray = [
//     {
//         fullName : "John",
//         age : 20,
//         regNumber : 3787336,
//         department: "Sciences",
//         isStudentActive : true,
//         country: "United States"
//     },

//     {
//         fullName : "Jane",
//         age : 22,
//         regNumber : 6538736,
//         department: "Arts",
//         isStudentActive : false,
//         country : "England"
//     },

//     {
//         fullName : "Mike",
//         age : 25,
//         regNumber : 7893636,
//         department: "Engineering",
//         isStudentActive : true,
//         country : "Ireland"
//     },

//     {
//         fullName : "Emma",
//         age : 28,
//         regNumber : 5637363,
//         department: "Health Sciences",
//         isStudentActive : false,
//         country : "Australia"
//     }
// ]

// // to slice

// let studentRecords = studentArray.splice(1,4)
// console.log(studentRecords)

//// how to nest arrays

// let firstArray = [10,20,30,40,50]
// let secondArray = [60,70,80,90, 100]

// let combinedArray = [firstArray, secondArray]

// console.log(combinedArray)


// // to access an item in the nested array
//  console.log(combinedArray[0][0])


////TO MERGE THE MULTIPLE ARRAYS
// let firstArray = [10,20,30,40,50]
// let secondArray = [60,70,80,90, 100]

// const mergeArray = [...firstArray, ...secondArray]

// console.log(mergeArray)

////FOR LOOP///

// let myArray = ["josh", "sheep", "date", "time",]

// for(let x = 0; x < myArray.length; x++){
//     //to extract items from the array
//     let result = myArray[x]
//     console.log(result)
// }

////Task: log the following statement 10 times "Good Evening"
// for(let x = 1; x <= 10; x++){
//     console.log(`Good Evening ${x} times`)
// }


// //To print out of an array in a loop
// const myArray = ["josh", "sheep", "date", "time", "gabriel", ]

// for(x = 0; x < myArray.length; x++){
//     let result = myArray[x]
//     console.log(result)
// }


// //to extract tweets data from an array

// const tweetsArray = [
//     { userName : "Emeka098",
//     emailAddress : "Emekasharp@gmail.com",
//     tweetContent : "I love programming",
//     tweetDate : "2022-03-15"
//     },

//     { userName : "JohnDoe123",
//     emailAddress : "johndoe@gmail.com",
//     tweetContent : "I'm excited to learn more",
//     tweetDate : "2022-03-16"
//     },
    
//     { userName : "SarahJane",
//         emailAddress : "sarahjane@gmail.com",
//         tweetContent : "I'm sad about my job",
//         tweetDate : "2022-03-17"
//     },

//     { userName : "MaryJane",
//     emailAddress : "maryjane@gmail.com",
//     tweetContent : "I'm really proud of my team",
//     tweetDate : "2022-03-18"
//     },

//     { userName : "EmmaWatson",
//     emailAddress : "emmawatson@gmail.com",
//     tweetContent : "I'm excited about our next project",
//     tweetDate : "2022-03-19"
//     },
// ]

// for (x = 0; x <tweetsArray.length; x++){
//     let tweets = tweetsArray[x].tweetContent
//     let name = tweetsArray[x].userName
//     console.log(`Tweet by ${name} with the tweet "${tweets}"`)
// }

////FOR EACH METHOD

// const myArray = ["lisbon", "madrid", "london", "Amsterdam", "Helsinki", ]

// myArray.forEach(function(item){
//     console.log(item)
// })

////Another example

// const studentRecords = [
//     { fullName : "John",
//     age : 20,
//     regNumber : 3787336,
//     department: "Sciences",
//     isStudentActive : true,
//     country: "United States",
//     gpa : 2.8,
//     },

//     { fullName : "Jane",
//     age : 22,
//     regNumber : 6538736,
//     department: "Arts",
//     isStudentActive : false,
//     country : "England",
//     gpa : 2.9,
//     },

//     { fullName : "Mike",
//     age : 25,
//     regNumber : 7893636,
//     department: "Engineering",
//     isStudentActive : true,
//     country : "Ireland",
//     gpa : 3.2,
//     },
    
//     { fullName : "Emma",
//     age : 28,
//     regNumber : 5637363,
//     department: "Health Sciences",
//     isStudentActive : false,
//     country : "Australia",
//     gpa : 3.5
//     }
// ]

// studentRecords.forEach(function(item, index, array){
//     let statement = `The students with full name ${item.fullName}, and age ${item.age} with reg number ${item.regNumber} and from ${item.department} department  is from ${item.country}`
//     console.log(statement, index, array, item)
// })


////STRING PROPERTIES AND METHODS   //////////////////////////////////

// const myString = "Joseph"

// //Length property
// let result = myString.length
// console.log(result)

////TRIM METHOD

//the whole idea of trim method is to remove whitespace that occurs in  the string

// const myString = "                         Joseph"
// let result = myString.trim()

// console.log(result)

///// TO REPLACE TEXTS //////////////////////////////////

// const myString = "Hello World"

// // //Replace method
// let result = myString.replace(" World", " Africa")
// console.log(result);


//// TO UPPERCASE METHOD////
// const myString = "Joseph Brednan" //// notice that the text is in title case, the first letter in each character is capitalized

//  let result = myString.toUpperCase()
//  console.log(result);

//  ///// TO LOWER CASE METHOD////

// let results = myString.toLowerCase()
//     // notice that the text is in title case, the first letter in each character is not capitalized
//  console.log(results)


///// IMCLUDES WITH STRINGS////

// const myString = "Hello World"

// let result = myString.includes("World")

// // if the string includes the word "World" it will return true otherwise it will return false

// console.log(result)


//// SUB STRINGS//// Works exactly like slice in array

// const myString = "Hello World"

// let result = myString.substring(0, 4)

// // // substring method will return a substring from the specified index to the end of the string

// console.log(result)


/////INDEX OF STRINGS///

// const myString = "Hello World"

// let result = myString.indexOf("H")

// // // // indexOf method will return the index of the first occurrence of the specified value in the string

// console.log(result)


////CHARAT METHODS///

// const myString = "Hello World"

// let result = myString.charAt(0)

// // // // // charAt method will identify and return the character at the specified index

// console.log(result)


////SPLIT METHODS///

// const myString = "Hello, World, This, Is, A, Test"

// let result = myString.split("")

//  // // // // split method will return an array containing the splitted string by the specified delimiter

// console.log(result)


/////CONDITIONALS /////////////////////////

// //FOR A SINGLE CASE COMPARISON

// let x = 1
// let y = 5

// if (x > y) {
//     console.log("X is greater than Y")
// }else{
//     console.log("X is less than or equal to Y")
// }

// //further example

// const myArray = [
//     {
//         name: "joseph",
//         studentID : 456,
//     }
// ]

// if (myArray[0].name === "joseph"){
//     console.log("Name matches, a student")
// }
    
// else{
//     console.log ("not a student")
// }

//// further example

// let dob = prompt("what year where you born?")
// let age = 2024- dob

// if (age >= 18){ 
//     console.log("You are old enough to drive")
// }else{
//     console.log("You are not old enough to drive")
// }

////TERNARY OPERATOR/// THIS A DIFFERENT METHOF OF IF ELSE, AS WELL AS THE ANSWER CAN BE STORED AS A VARIABLE

// let X = 10
// let y = 10

// X > y ? caches.log("YES") : console.log("no")

//// for muitiple comparison

// let x = 10
// let y = 20
// let a = 5
// let b = 3

// x > y && a > b ?  console.log("yes") : console.log("no")


////further example
// let userAge = prompt("Enter your age")
// let user = prompt("What is your name")

// userAge = Number(userAge) //to ensure that a number is input not a word

// if (userAge > 0 && userAge <= 12 ) {
//     console.log(`${user} is a toddler`)
// }else if (userAge > 12 && userAge <= 18){
//     console.log(`${user} is a teenager`)
// } else if (userAge > 18 && userAge <= 40)
// {
//     console.log(`${user} is a youth`)
// }else {
//     console.log(`${user} is old`)
// }


////further example

// let examResult = prompt("whats your score")
// examResult = Number(examResult)

// if(examResult >= 1 && examResult<= 39){
//     console.log("fail")
// }else if (examResult > 39 &&  examResult <= 59){
//     console.log("pass")
// }else if (examResult >59 && examResult <=69){
//     console.log("Good")
// }else if (examResult > 69 && examResult <= 79){
//     console.log("Very Good")
// }else if (examResult > 79 & examResult <= 100){
//     console.log("Excellent")
// }else{
//     console.log("Wrong Input")
// }


////Splice items in an array can be replaced with anything
// const myObj = {
//     name : "mahmud"
// }
// const myArray = [1,2,3,4,5]

// myArray.splice(0,3,"Joseph", myObj, true)
// console.log(myArray)

////COMBINE EVERYTHING YOU HAVE LEARNT

// //EXTRACT THE ACCOUNT NUMBER AND BALANCE OF A CUSTOMER CALLED SANDRA IN A DATABASE OF A BANK WITH 4 CUSTOMERS

// const bankDetails = [
//     {
//         userName : "Sandra Amos",
//         accountNumber : 637738638,
//         balance : 46876
//     },
//     {
//         userName : "Muiz Banire",
//         accountNumber : 36839387,
//         balance : 374894
//     },
//     {
//         userName : "Sehi Tumo",
//         accountNumber : 3783738,
//         balance : 3683977
//     },

//     {
//         userName : "Gabriel Union",
//         accountNumber : 37938737,
//         balance : 3489849
//     }
// ]

// bankDetails.forEach(function(item){
//     if(item.userName === "Sandra Amos"){
//         console.log(`the customer name is ${item.userName}, account number is ${item.accountNumber} and the balance is ${item.balance}`)
//     }
// })

////USING FOR LOOP
// const bankDetails = [
//     {
//         userName : "Sandra Amos",
//         accountNumber : 637738638,
//         balance : 46876
//     },
//     {
//         userName : "Muiz Banire",
//         accountNumber : 36839387,
//         balance : 374894
//     },
//     {
//         userName : "Sehi Tumo",
//         accountNumber : 3783738,
//         balance : 3683977
//     },

//     {
//         userName : "Gabriel Union",
//         accountNumber : 37938737,
//         balance : 3489849
//     }
// ]

// for(x = 0; x < bankDetails.length; x++){
//     let sandraName = bankDetails[x].userName.sa
//     let sandraAccountNumber = bankDetails[x].accountNumber
//     let sandraBalance = bankDetails[x].balance

//     console.log(`accordingly  name : ${sandraName}, number : ${sandraAccountNumber} and balance : ${sandraBalance}`)
// }


/////further example

// const users = [
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 2, name: 'Bob', email: 'bob@example.com' },
//     { id: 3, name: 'Charlie', email: 'charlie@example.com' }
//   ];

//   users.forEach(function(item){
//     if(item.name === "Alice"){
//         console.log (`accordingly :${item.id},  ${item.name}, ${item.email}`)
//     }
//   })

// for( let x = 1; x <= 10; x++){

//     console.log(`Multiplication table for ${x}`)
//     for( let y = 1; y < 10; y++ ){
//         console.log(`${x} multiplied by ${y} = ${x*y}`)
//     }
// }

//// Break and continue, telling your loop to stop from a part in the loop ////

// for (let b = 0; b < 10; b++){
//     if(b === 5){
//         break
//     }console.log(b)
// }

////continue //// Break and continue, telling your loop to skip a part in the loop  and continue with the rest////
// for (let b = 0; b < 10; b++){
//     if(b === 5){
//         continue
//     }console.log(b)
// }


////for in loop

// const myObject = {
//     fullName : "Joshua",
//     location : "kenya",
//     studentStatus: true
// }

// for( let anything in myObject){
//     let result = myObject[anything]
//     console.log(result);
// }



////TO CHECK THE LAST ITEM IN AN ARRAY
// const myArray = ["sandra", "Abel", "Amy", "Paul"]
// let result = myArray[myArray.length-1]
// console.log(result)

////the join method converts an array data to a string data
// const names = ["sandra", "paul", "paul", "micheal"]
// let see = names.join("/")
// console.log(see)
////to return the string data into array data
// const names = ["sandra", "paul", "paul", "micheal"]
// let see = names.join(" ")

// let result = see.split()
// console.log(result)


////    MAP `           /////
//MAP

// const priceArray = [34.5, 34.6, 28.2, 38.7, 98.5, 56.4]

// const data = priceArray.map(function(item){
//     let result =   Math.floor(item)
//     return result
// })

// console.log(data)

////FILTER METHOD

// const names = ["joseph", "jo", "amy", "john", "Demi"]

// let result = names.filter(function(item){
//     return item === "john"
// })

// console.log(result)

/////further example

// const studentRecords = [
//     {
//         studentName : "omar hutchinson",
//         studentID : 376735637,
//         studentScore : 98
//     },

//     {
//         studentName : "erling haaland",
//         studentID : 378398333,
//         studentScore : 99
//     },

//     {
//         studentName : "kylian mbappe",
//         studentID : 3366386363,
//         studentScore : 100
//     },

//     {
//         studentName : "yaya sanogo",
//         studentID : 3377376363,
//         studentScore : 54
//     },

//     {
//         studentName : "victor boniface",
//         studentID : 3367736537333,
//         studentScore : 76
//     },

//     {
//         studentName : "victor osimhen",
//         studentID : 3367483463,
//         studentScore : 86
//     },

//     {
//         studentName : "lautaro martinez",
//         studentID : 3378387387398,
//         studentScore : 86
//     }
// ]

// let studentFilter = studentRecords.filter(function(item){
//     return item.studentScore > 90
// })

// console.log(studentFilter)

/////DOM MANIPULATION

// const paragraph = document.getElementById("heading")
// paragraph.textContent = `mahmud akinbami`

// const paragraph = document.getElementById("heading")
// paragraph.innerText = `demi akinbami`

////to change the attribute of a html
// const paragraph = document.getElementById("heading")
// paragraph.innerHTML = `<button> Mahmud</button>`

///// to change the class attribute of a html


// const heading = document.getElementById("heading")

// heading.setAttribute("class", "heading1") //the first part of the bracket is the attribute you want to change, the secondis what you want to change, check the css for heading1 

////set attribute can change an existing attribute or give it a new one if it is originally empty



////to create an element on js

// const paragraphElement = document.createElement("p")
// paragraphElement.textContent = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, asperiores! Soluta et, commodi optio saepe pariatur iusto placeat possimus adipisci velit suscipit, eaque quos deleniti nulla assumenda a omnis quas."

// paragraphElement.setAttribute("class",  "text")
// paragraphElement.setAttribute("ID", "texts")
// console.log(paragraphElement)

// ////now to put it in the html
// const container = document.getElementById("container")
// container.append(paragraphElement)

// ////now to remove attributes in
// const container = document.getElementById("head")
// container.removeAttribute("class")


//// CREATING A FORM
// const form = document.getElementById("form")
// const userName = document.getElementById("username")
// const postTextArea = document.getElementById("post")


// const heading = document.getElementById("heading")
// const post = document.getElementById("text")


// const postContainer = document.getElementById("posts_container");


// let postArray = [];



// form.addEventListener("submit", function(event){
//     event.preventDefault()// this method is use to prevent the form from throwing the data away

//    let postFromTextArea = postTextArea.value  // this is to collect the value of what is in this input field

//    let nameFromUserName = userName.value //same thing here 

//    // to now bundle the values in an object literal
//     const userPost = {
//         postFromUser : postFromTextArea,
//         nameFromUser : nameFromUserName
//     }

//     postArray.push(userPost);

//     //reset the form for reuse
//     form.reset()
//     showPosts()
// })

// function showPosts(){
//     postContainer.innerHTML = ` ` //to prevent duplicates of final post

//     postArray.forEach(function (item){
//     let userPost = item.postFromUser;
//     let userName = item.nameFromUser;

//     let postHeadingElement = document.createElement(`h3`);
//     postHeadingElement.textContent = userPost;

//     let paragraphElement = document.createElement("p");
//     paragraphElement.textContent = userName;

// postContainer.append(postHeadingElement, paragraphElement);

// })
// }

////ANOTHER EXAMPLE

// const form = document.getElementById("form");
// const userName = document.getElementById("userName");
// const competition = document.getElementById("competition");
// const postContainer = document.getElementById("posts_container")

// arrayPost = [];

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let userNameValue = userName.value;
//     let competitionValue = competition.value;

//     const userPost = {
//         userTeamName : userNameValue,
//         userCompetition : competitionValue,
//     };

//     arrayPost.push(userPost)

//     form.reset()
//     showPosts()
// })

// function showPosts(){

//     postContainer.innerHTML = " "


//     arrayPost.forEach(function(item) {
//         let teamName = item.userTeamName;
//         let teamCompetition = item.userCompetition;


//         let postTeamName = document.createElement("p");
//         postTeamName.textContent = `Welcome,  Your team name is ${teamName}`;

//         let postTeamCompetition = document.createElement("p")
//         postTeamCompetition.textContent = `The team Competition is ${teamCompetition}`;


//         postContainer.append(postTeamName, postTeamCompetition )
//     }) 

// }


//-------------------------------------ARROW FUNCTION---------------//

// const callMyName = ()=>{
//     console.log("Demi")
// }
// callMyName()

//Arrow function has implicit return

// function returnMyCountry(){
//     return "Nigeria"
// }

// let result = returnMyCountry()
// console.log(result)

// const myCountry = ()=>{
//     return "Canada"
// }

// let capture = myCountry()
// console.log(capture)

// const myNation = ()=> "United Kingdom"
// let store = myNation()
// console.log(store)

// const array = [
//     {
//         name: "Joseph"
//     },
//     {
//         name: "Demi"
//     },
//     {
//         name: "Paul"
//     }
// ]

// let collect = array.filter((item, Index)=> item.name === "Demi"
// )

// console.log(collect)

// let collect = array.forEach((item,index)=> item.name === "Demi")

// console.log(collect)

// ---------------------------set time out----------------//

// setTimeout(function(){
//     console.log("this is a request to google maps")
// }, 5000)

// function sayHelloToMe(){
//     console.log("Hello To me ")
// }

// sayHelloToMe()

// const ID = setTimeOut(function(){
//     console.log("Timer")
// }, 2000)
// console.log(ID)

// const ID2 = setTimeout(function(){
//     console.log("Second Timer")
// }, 4000)
// console.log(ID2)

//-----------------Example of how it works-------------//

// const text = document.getElementById("posts_container")
// const button = document.getElementById("button")

// const ID = setTimeout(function(){
//     text.textContent = "Data received"
// }, 5000)
// console.log(ID)


// button.addEventListener("click", getRoam)

// function getRoam(){
//     clearTimeout(ID)
//     text.innerHTML = "You cancel am so data not received"
// }

// --------------------------------HTTP----------------------------//
//GET
// POST
// PUT/ PATCH
// DELETE

//HTTP STATUS CODE
//404 --- NOT FOUND
//200 ---- REQUEST IS OKAY
//300/301 ----RESOURCE IS REDIRECTED
//500 -------- SERVER ERROR

// [
//     {
//         fullName : "Demi akinbami",
//         country : "Nigeria"
//     },
//     {
//         fullName : "Shakira Oladejo",
//         country : "Nigeria"
//     },
//     {
//         fullName : "ale Garnacho",
//         country : "Argentina"
//     },
//     {
//         fullName : "Mbappe",
//         country : "France"
//     },
// ]

// const xmlRequest = new XMLHttpRequest()
// xmlRequest.open("GET", "googlemaps.com")

// xmlRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText)
//         console.log(data)

//         data.array.forEach(item) => {
            
//         };
//     }
// }


// xmlRequest.send()

// readystate status code
// 0 is the initialization of the request
// 1 connection established between client and server
// 2 Receipt of request
// 3 Processing of request
// 4 request is done processing and a response is coming


// ================== FETCH API FOR WEATHER=======================

// let weatherRequest = new XMLHttpRequest() //step 1

// let APIKey = "9a271641ce1cc1e462b8a56ad0c8b61d"

// let city = "Kuwait"

// weatherRequest.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)


// weatherRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let data = JSON.parse(this.responseText)

//         printDataOnUI(data)
//     }
// }

// function printDataOnUI(data){
//     console.log(data)
//     // check the array in  the console for the data you actually need and call  them here
//     let temp = data.main.temp
//     console.log(temp)

//     let convertTemp = Math.round(temp - 273.15) //converting from kelvin to celcius
//     console.log(`The temperature of your city is ${convertTemp} degree celcius`)
// }
// weatherRequest.send()

// -----------------------------PROMISE------------------------------//

// // save the promise in a variable
// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // api will be stored inside resolve
//         resolve("Data from google maps API")
//     }, 5000)
// })
// //promise.then().this is used to get api that was resolved, any data that was gotten back will be stored in the parameter"Data", you can console,log the parameter to show you that the data gotten from the api exist there. 
// promise.then((data)=>{
//     console.log(data)
// }) 

// //promise.catch().this is used to get api that was not resolved, error parameter will be used to get and capture 
// promise.catch((error)=>{

// }) 

// example-------------------------------//

// const array = [
//     {
//         name: "mahmud",
//         age: 26
//     }, {
//         name: "demi",
//         age : 25
//     }
// ]

// let promise = new Promise((resolve, reject) => {
//     // Simulate async operation
//     setTimeout(() => {
//         resolve(array);
//     }, 1000);  // Resolves after 1 second
// });

// promise.then((datas) => {
//     datas.forEach((dataItem) => {
//         let myName = dataItem.name;
//         console.log(myName);  // Logs "mahmud" and "demi"
//     });
// });



//----------------FETCH-----------------------------------//
// fetch("GET", "./data.json").then((data)=>{
// console.log(data)
// })
// to fetch data from the weather
// let APIKey = "9a271641ce1cc1e462b8a56ad0c8b61d" //get your personalised apikey on the website
// let city = "Kuwait" //ideally this is meant to be gotten from the user using an input

// function collectWeatherData(){
//     let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`

//     fetch(endPoint).then((data)=>{
//         return data.json() //this is a promise object and as such not json.parse or stringify. 
//     }).then((newData)=>{
//         console.log(newData)
//     }).catch(Error)
// }

// collectWeatherData()

//---------------------------------------------------------------------GITHUB------------------------------------------------------------------//

//VERSION CONTROL

// two major types of version control, 1 a centralised version control