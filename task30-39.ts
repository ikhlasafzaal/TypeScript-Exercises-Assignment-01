// Task # 30
let helloAdmin:string[] = ['admin', 'hooria', 'fatima', 'quba', 'kashaf'];

for (let users of helloAdmin) {
    if (users === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello, " +users+ " Thank you for logging in again.");
    }
}

// Task # 31
let emptyArray: string[] = [];

if (emptyArray.length === 0) {
    console.log("We need to find some users");
} else {
    for (let users of emptyArray) {
        if (users === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log("Hello, " +users+ " Thank you for logging in again.");
        }
    }
}

// Task # 32
var currentUsers:string[] = ['Ammad','Khizar','Shayan','Rafay','Ahsan'];
var newUsers:string[] = ['Sunaim','Rafay','Maaz','Hassan','Ahsan'];

let current_users: string[] = ['eric', 'willie', 'admin', 'erin', 'Ever'];
let new_users: string[] = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];

let lowerCase: string[] = currentUsers.map(user => user.toLowerCase());

for (let userVar of newUsers) {
    if (lowerCase.includes(userVar.toLowerCase())) {
        console.log(userVar + " username has already been used.");
    } else {
        console.log(userVar + " username is available.");
    }
}

// Task # 33
let numOrdinal:number[] = [1,2,3,4,5,6,7,8,9];

for(let numberOrdinal of numOrdinal){
    if (numberOrdinal == 1) {
        console.log("1st");
    }
    else if(numberOrdinal == 2) {
        console.log("2nd");
    }
    else if(numberOrdinal == 3) {
        console.log("3rd");
    }
    else{
        console.log(numberOrdinal+"th");
    }
}

// Task # 34
var pizzaArray:string[] = ['Margherita','Hawaiian', 'Pepperoni'];
for(var pizza of pizzaArray){
    console.log("Pizza Names: " +pizza);   
}

for(var pizza of pizzaArray){
    console.log("I Like " + pizza + " pizza.");   
}

console.log("I really love pizza!");

// Task # 35
let animalArray:string[] = ['Birds', 'Peacock', 'Parrot'];
for(let animals of animalArray){
    console.log("AnimalsName: " +animals);
}

for(let animals of animalArray){
    console.log(animals + ' symbolize human appreciation for beauty and diversity.');
}

console.log("Any of these animals would make a great pet!");


// Task # 36
function makeShirt(size: string, text: string) {
    console.log("Size of Shirt is: " +size+ " and text of the Shirt is: "+text);
}

makeShirt("Medium", "Beauty Lies in Eyes!");

// Task # 37
function makeShirt1(size: string = "Large", text: string = "I Love TypeScript") {
    console.log("Size of Shirt is: " +size+ " and text of the Shirt is: "+text);
}
makeShirt1();
makeShirt1("Medium");
makeShirt("X-Large", "Beauty Lies in Eyes!");


// Task # 38
function describeCities(city: string, country: string = "Pakistan"){
    console.log(`${city} is located in ${country}`);
}
describeCities('Lahore');
describeCities('Islamabad');
describeCities('Karachi');

describeCities('Tokyo','Japan');
describeCities('Paris','France');

// Task # 39
function cityCountry(city:string, country:string){
    console.log('"' + city + ', ' + country + '"');
}
cityCountry('Karachi','Pakistan');
cityCountry('Tokyo','Japan');
cityCountry('Paris','France');