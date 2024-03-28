// Task # 40
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var barbieAlbum1 = makeAlbum('Barbie', 'Barbie as Rapunzel');
var barbieAlbum2 = makeAlbum('Barbie', 'Barbie in the Nutcracker');
var barbieAlbum3 = makeAlbum('Barbie', 'Barbie as The Princess and the Pauper', 10);
console.log(barbieAlbum1);
console.log(barbieAlbum2);
console.log(barbieAlbum3);
// Task # 41
var magicianNames = ['Agha Suhail', 'Khaled Mahmood', 'Omer Sharif', 'Adeel Hashmi'];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magicianName = magicians_1[_i];
        console.log("Magician's Name: " + magicianName);
    }
}
showMagicians(magicianNames);
// Task # 42
function makeGreat(magicianNames) {
    var greatMagicians = [];
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magicianName = magicianNames_1[_i];
        greatMagicians.push("The Great " + magicianName);
    }
    return greatMagicians;
}
var greatMagicians = makeGreat(magicianNames);
console.log("greatMagicians Modified Magician:");
showMagicians(greatMagicians);
// Task # 43
var modifiedMagicians = makeGreat(__spreadArray([], magicianNames, true));
console.log("Original Magicians: ");
showMagicians(magicianNames);
console.log("Modified Magicians: ");
showMagicians(modifiedMagicians);
// Task # 44
function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
        var items = item_1[_a];
        console.log('Adding ' + items + ' to the sandwich');
    }
    console.log("Your Sandwich is cooked!");
}
sandwich("Bread", "Turkey", "Cheese", "Lettuce", "Tomato");
sandwich("Turkey", "Swiss Cheese", "Spinach");
sandwich("Peanut Butter", "Jelly", "strawberry jam");
//  Task # 45
function createCar(manufacturer, modelName) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        var key = arg[0], value = arg[1];
        car[key] = value;
    }
    return car;
}
var myCar = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2022]);
console.log(myCar);
var car1 = createCar("Honda", "Civic", ["color", "blue"], ["year", 2023]);
console.log(car1);
var car2 = createCar("Ford", "Mustang", ["color", "yellow"], ["year", 2021], ["transmission", "automatic"]);
console.log(car2);
var car3 = createCar("Tesla", "Model S", ["color", "black"], ["year", 2024], ["autopilot", true]);
console.log(car3);
