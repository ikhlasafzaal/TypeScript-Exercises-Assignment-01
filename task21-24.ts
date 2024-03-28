// Task # 21

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

const student1 = {
    Id : 5678,
    Name:"Fatima Khan",
    Course:"PHP"
}

const student2 = {
    Id : 5678,
    Name:"Hareem Khan",
    Course:"ASP .Net"
}

const student3 = {
    Id : 5678,
    Name:"Jaweria Khan",
    Course:"Laravel"
}

console.log(student1);
console.log(student2);
console.log(student3);

// Task # 22
let vehicles:string[] = ["car", "motorbike", "truck", "tanker"];
console.log("Vehicles List: "+vehicles);
console.log("Intentional error:" +vehicles[4]);
console.log("Corrected Intentional error:" +vehicles[3]);

//  Task # 23

let manAge:number = 56;
console.log("ManAge != 56 ? Predict False");
console.log(manAge == 6);

let noOfBottles:number = 40;
console.log("NoOfBottles == 40 ? Predict True");
console.log(noOfBottles == 50);

let num1:number = 5, num2:number = 56;
console.log("num1 is greater than num2 ? Predict False.");
console.log(num1 > num2);

let boxColor:string = "Blue";
console.log("Is box color blue? I predict true.");
console.log(boxColor == "Blue");

let myName1: string = 'Hareem';
let myName2: string = "Quba"
console.log("Name is hareem OR quba ? predict true");
console.log(myName1 == "Fatima" || myName2 == "Quba");

let childCry:boolean  = false;
console.log("childCry is true ? Predict True");
console.log(childCry == false);

let quranChapters:number = 30;
console.log("Quran Chapters are more than 30 ? Predict False");
console.log(quranChapters == 30);

let noOfEachClassAttendance: number = 19;
let noOfClassesConducted:number = 12;
console.log("noOfEachClassAttendance is less than noOfClassesConducted = ? Predict True");
console.log(noOfClassesConducted < noOfEachClassAttendance);

let courseEnrolled:string = "Web Development";
console.log("course enrolled id web development ? Predict True");
console.log(courseEnrolled == "Backend Development");

let childrenLike1:string = "Pizza";
let childrenLike2:string = "Burger";
console.log("children like pizza AND burger ? Predict True else False");
console.log(childrenLike1 == "Pizza" && childrenLike2=="Biryani");

// Task # 24
let cupboardColor1:string = "Brown";
let cupboardColor2:string = "Black"
console.log("cupboardcolor1 equality with Brown ? Predict True");
console.log(cupboardColor1 == "Brown");
console.log("cupboardcolor2 Inequality is not with Black ? Predict False");
console.log(cupboardColor2 == cupboardColor1);



let var1: string = "PAKISTAN";
let var2: string = "pakistan";
console.log("Pakistan are equal when converted to lower case ? Predict true");
console.log(var1.toLowerCase() == var2);



let a: number = 50;
let b: number = 20;
console.log("a = b ? Predict True");
console.log(a == 50);
console.log("a != b ? Predict true");
console.log(a != b); 
console.log("b > a ? Predict  false");
console.log(b > a); 
console.log("b < a ? Predict true");
console.log(b < a); 
console.log("a >= 1000 ? Predict false");
console.log(a >= 1000);
console.log("b <= 200 ? Predict True");
console.log(b <= 200);


let weather1:string = "Rainy";
let weather2:string = "Foggy";
console.log("weather1 AND weather2 both ? Predict True");
console.log(weather1 == "Rainy" && weather2 == "Foggy");
console.log("weather1 OR weather2 ? Predict True");
console.log(weather1 == "Sunny" || weather2 == "Foggy");



let booksCategory:string[] = ["Funny", "Informative", "Motivative", "Islamic"];
console.log("booksCategory Array contains Islamic ? Predict True");
console.log(booksCategory.includes("Islamic"));

let  numArray:number[] = [3,6789,45,78];
console.log("numArray contain 6789? Predict True");
console.log(numArray.includes(6789));
console.log("numArray not contain 435345? Predict False");
console.log(numArray.includes(435345));





 





