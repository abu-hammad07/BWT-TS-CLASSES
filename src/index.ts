const myname: string = "Abu Hammad";
console.log(myname);


let data: any = 23;
data = "Abu Hammad";
data = true;
console.log(typeof data);


console.log("Objects in Typescript and Interface");
interface Person {
    name: string
    age: number
    isWorking: boolean
}

let person: Person = {
    name: "Muhammad",
    age: 21,
    isWorking: true,
}
console.log(person);

let persons: {
    name: string;
    age: number;
    location: string;
    isWorking: boolean;
} = {
    name: "Ahmed",
    age: 34,
    location: "Islamabad",
    isWorking: false
}
console.log(persons);


console.log("Array of Objects");
let totalPersons: Person [] = [
    {
        name: "Ahmed",
        age: 34,
        isWorking: false
    },
    {
        name: "Ali",
        age: 24,
        isWorking: true,
    }
]
console.log(totalPersons);


console.log("Union and Intersection types");
// Union types


