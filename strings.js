//Using JavaScript, find the following words from the following strings:
 // 1."dress"
// const string1 = "The woman in the white dress is a teacher";
// 2. "natural"
// const string2="I like listening to natural sounds to calm myself";

const string1="The woman in the white dress is a teacher";
let texts=string1.search("dress");
console.log(texts);
const string2="I like listening to natural sounds to calm myself";
let x=string2.search("natural");
console.log(x);

//  convert the following strings into the specified format:
// 1. Title case: "Thats her home adress"
// 2. LowerCase: "I like the book"
// 3.toUpperCase:"beautiful"
const place="Thats her home adress";
let s=place.toLocaleLowerCase();
console.log(s)
const girl="beautiful";
let a=girl.toUpperCase();
console.log(a);
const book="I like the book"
let z=book.toLowerCase();
console.log(z);


// Count how many times the following string appears in the string variable:
// "rain"
// "e"
//const story= "The rain will rain soon than expected"
const words="The rain will rain soon than expected"
const r=(words.match(/rain/g)).length;
const m=(words.match(/e/g)).length;
console.log(r);
console.log(m);


const myCar = ["Porsche", "Range", "Jeep", "Ferrari"];
console.log(myCar.join('+'));

// Insert the following string at the nineth index of the below variable:
// "food"
// const chair = "My favourite spot is at the door"
const chair="My favourite spot is at the door"
console.log(chair.replace(chair[9],"food"))