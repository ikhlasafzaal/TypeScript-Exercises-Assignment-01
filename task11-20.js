// Task # 11
var arrayName = ["FatimaKhan", "QubaKashaf", "JaweriaKhan", "HareemKalam"];
console.log("First Name of Array: ", arrayName[0]);
console.log("Second Name of Array: ", arrayName[1]);
console.log("Third Name of Array: ", arrayName[2]);
console.log("Fourth Name of Array: ", arrayName[3]);
// Task # 12
var greetings = "Hello, ";
var msg = "Nice to meet you.";
console.log(greetings + arrayName[0] + "! " + msg);
console.log(greetings + arrayName[2] + "! " + msg);
console.log(greetings + arrayName[3] + "! " + msg);
console.log(greetings + arrayName[1] + "! " + msg);
// Task # 13
var carArray = ["Civic", "Fortuner", "Swift", "Alto", "Corolla"];
console.log("I would like to own a " + carArray[0] + " Car.");
console.log("I would like to own a " + carArray[1] + " Car.");
console.log("I would like to own a " + carArray[2] + " Car.");
console.log("I would like to own a " + carArray[3] + " Car.");
console.log("I would like to own a " + carArray[4] + " Car.");
// Task # 14
var host = "Sincerely, Ikhlas.";
var guest = ["Fatima", "Quba", "Fareeda"];
var helloMsg = "Dear";
var greeting = "Join me for dinner at my place this Friday.";
console.log(helloMsg + " " + guest[0] + "! " + greeting + " " + host);
console.log(helloMsg + " " + guest[1] + "! " + greeting + " " + host);
console.log(helloMsg + " " + guest[2] + "! " + greeting + " " + host);
// Task # 15
var dinnerNotAttend = "Fareeda";
console.log(dinnerNotAttend + " can't make it to dinner.");
guest.splice(2, 1);
console.log("Updated Guest List:", guest);
var newGuest = "Jaweria";
guest.push(newGuest);
console.log("Updated List after adding new Guest", newGuest + ":", guest);
console.log(helloMsg + " " + guest[2] + "! " + greeting + " " + host);
//  Task # 16
console.log("Guest List: " + guest);
console.log("You are found a bigger dinner table!");
var addInBegining = "Hareem";
guest.unshift(addInBegining);
console.log("Add Data in Starting Updated List: " + guest);
var addInMiddle = Math.ceil(guest.length / 2);
guest.splice(addInMiddle, 1, "Urooba");
console.log("After adding data in Middle Updated Guest List: " + guest);
console.log(helloMsg + " " + guest[0] + "! " + greeting + " " + host);
console.log(helloMsg + " " + guest[1] + "! " + greeting + " " + host);
console.log(helloMsg + " " + guest[2] + "! " + greeting + " " + host);
console.log(helloMsg + " " + guest[3] + "! " + greeting + " " + host);
// Task #17
console.log("You can invite only two people for Dinner.");
var deleteGuest1 = guest.pop();
console.log("Sorry, " + deleteGuest1 + ", you're sorry you cannot invite them to dinner. Sincerely, " + host + ".");
var deleteGuest2 = guest.pop();
console.log("Sorry, " + deleteGuest2 + ", you're sorry you cannot invite them to dinner. Sincerely, " + host + ".");
console.log("Congrats! " + guest[0] + ", You are still invited. Sincerely, " + host + ".");
console.log("Congrats! " + guest[1] + ", You are still invited. Sincerely, " + host + ".");
// Task # 18
var places = ["Makkah Mukaramah", "Hunza Valley", "Faisal Mosque", "Arafat Tomb", "Karbala"];
console.log("Places List: " + places);
var sortPlaces = places.sort();
console.log("Places Sorted a/c to Alphabatical Order: " + sortPlaces);
console.log("Actual Places List: " + places);
var sortReverse = places.reverse();
console.log("Places Sorted Reverse a/c to Alphabatical Order: " + sortReverse);
console.log("Actual Places List: " + places);
console.log("Places Sorted Reverse a/c to Alphabatical Order: " + sortReverse);
var revOriginal = sortReverse.reverse();
console.log("Places Sorted Reverse a/c to get Original Order: " + sortReverse);
var aphabatical = revOriginal.sort();
console.log("Places Sorted a/c to Alphabatical Order:" + aphabatical);
var revalphabatical = aphabatical.reverse();
console.log("Places Sorted Reverse Order: " + revalphabatical);
// Task # 19
console.log("Guest Array who Invited: " + guest);
var noOfGuest = guest.length;
console.log(noOfGuest + " Guests have been invited");
// Task # 20
var city = ["Karachi", "Islamabad", "Lahore", "Peshawar", "Multan", "Hyderabad"];
console.log("Cities List: " + city);
