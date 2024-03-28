// Task # 30
var helloAdmin = ['admin', 'hooria', 'fatima', 'quba', 'kashaf'];
for (var _i = 0, helloAdmin_1 = helloAdmin; _i < helloAdmin_1.length; _i++) {
    var users = helloAdmin_1[_i];
    if (users === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello, " + users + " Thank you for logging in again.");
    }
}
// Task # 31
var emptyArray = [];
if (emptyArray.length === 0) {
    console.log("We need to find some users");
}
else {
    for (var _a = 0, emptyArray_1 = emptyArray; _a < emptyArray_1.length; _a++) {
        var users = emptyArray_1[_a];
        if (users === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello, " + users + " Thank you for logging in again.");
        }
    }
}
// Task # 32
var currentUsers = ['Ammad', 'Khizar', 'Shayan', 'Rafay', 'Ahsan'];
var newUsers = ['Sunaim', 'Rafay', 'Maaz', 'Hassan', 'Ahsan'];
var current_users = ['eric', 'willie', 'admin', 'erin', 'Ever'];
var new_users = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];
var lowerCase = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, newUsers_1 = newUsers; _b < newUsers_1.length; _b++) {
    var userVar = newUsers_1[_b];
    if (lowerCase.includes(userVar.toLowerCase())) {
        console.log(userVar + " username has already been used.");
    }
    else {
        console.log(userVar + " username is available.");
    }
}
// Task # 33
var numOrdinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numOrdinal_1 = numOrdinal; _c < numOrdinal_1.length; _c++) {
    var numberOrdinal = numOrdinal_1[_c];
    if (numberOrdinal == 1) {
        console.log("1st");
    }
    else if (numberOrdinal == 2) {
        console.log("2nd");
    }
    else if (numberOrdinal == 3) {
        console.log("3rd");
    }
    else {
        console.log(numberOrdinal + "th");
    }
}
// Task # 34
var pizzaArray = ['Margherita', 'Hawaiian', 'Pepperoni'];
for (var _d = 0, pizzaArray_1 = pizzaArray; _d < pizzaArray_1.length; _d++) {
    var pizza = pizzaArray_1[_d];
    console.log("Pizza Names: " + pizza);
}
for (var _e = 0, pizzaArray_2 = pizzaArray; _e < pizzaArray_2.length; _e++) {
    var pizza = pizzaArray_2[_e];
    console.log("I Like " + pizza + " pizza.");
}
console.log("I really love pizza!");
// Task # 35
var animalArray = ['Birds', 'Peacock', 'Parrot'];
for (var _f = 0, animalArray_1 = animalArray; _f < animalArray_1.length; _f++) {
    var animals = animalArray_1[_f];
    console.log("AnimalsName: " + animals);
}
for (var _g = 0, animalArray_2 = animalArray; _g < animalArray_2.length; _g++) {
    var animals = animalArray_2[_g];
    console.log(animals + ' symbolize human appreciation for beauty and diversity.');
}
console.log("Any of these animals would make a great pet!");
// Task # 36
function makeShirt(size, text) {
    console.log("Size of Shirt is: " + size + " and text of the Shirt is: " + text);
}
makeShirt("Medium", "Beauty Lies in Eyes!");
// Task # 37
function makeShirt1(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I Love TypeScript"; }
    console.log("Size of Shirt is: " + size + " and text of the Shirt is: " + text);
}
makeShirt1();
makeShirt1("Medium");
makeShirt("X-Large", "Beauty Lies in Eyes!");
// Task # 38
function describeCities(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is located in ").concat(country));
}
describeCities('Lahore');
describeCities('Islamabad');
describeCities('Karachi');
describeCities('Tokyo', 'Japan');
describeCities('Paris', 'France');
// Task # 39
function cityCountry(city, country) {
    console.log('"' + city + ', ' + country + '"');
}
cityCountry('Karachi', 'Pakistan');
cityCountry('Tokyo', 'Japan');
cityCountry('Paris', 'France');
