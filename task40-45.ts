// Task # 40

function makeAlbum(artist: string, title: string, tracks?: number): {[key: string]: any} {
    let album: {[key: string]: any} = {
        artist: artist,
        title: title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

let barbieAlbum1 = makeAlbum('Barbie', 'Barbie as Rapunzel');
let barbieAlbum2 = makeAlbum('Barbie', 'Barbie in the Nutcracker');
let barbieAlbum3 = makeAlbum('Barbie', 'Barbie as The Princess and the Pauper', 10);

console.log(barbieAlbum1);
console.log(barbieAlbum2);
console.log(barbieAlbum3);




// Task # 41
var magicianNames:string[] = ['Agha Suhail', 'Khaled Mahmood', 'Omer Sharif', 'Adeel Hashmi'];

function showMagicians(magicians: string[]): void {
   for(let magicianName of magicians){
    console.log("Magician's Name: " + magicianName);
   }
}

showMagicians(magicianNames);

// Task # 42
function makeGreat(magicianNames: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magicianName of magicianNames) {
        greatMagicians.push("The Great " + magicianName);
    }
    return greatMagicians;
}

let greatMagicians: string[] = makeGreat(magicianNames);

console.log("greatMagicians Modified Magician:");
showMagicians(greatMagicians);


// Task # 43

let modifiedMagicians: string[] = makeGreat([...magicianNames]);

console.log("Original Magicians: ");
showMagicians(magicianNames);

console.log("Modified Magicians: ");
showMagicians(modifiedMagicians);



// Task # 44
function sandwich(...item:string[]){
    for(let items of item){
        console.log('Adding '+items+' to the sandwich');
    }
    console.log("Your Sandwich is cooked!");
}
sandwich("Bread", "Turkey", "Cheese","Lettuce","Tomato");
sandwich("Turkey", "Swiss Cheese", "Spinach");
sandwich("Peanut Butter", "Jelly", "strawberry jam");


//  Task # 45
function createCar(manufacturer: string, modelName: string, ...args: [string, any][]): object {
    let car: {[key: string]: any} = {
        manufacturer,
        modelName
    };

    for (let arg of args) {
        const [key, value] = arg;
        car[key] = value;
    }
    return car;
}

let myCar = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2022]);
console.log(myCar);
let car1 = createCar("Honda", "Civic", ["color", "blue"], ["year", 2023]);
console.log(car1);
let car2 = createCar("Ford", "Mustang", ["color", "yellow"], ["year", 2021], ["transmission", "automatic"]);
console.log(car2);
let car3 = createCar("Tesla", "Model S", ["color", "black"], ["year", 2024], ["autopilot", true]);
console.log(car3);

