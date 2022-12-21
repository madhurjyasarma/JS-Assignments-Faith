"use strict";
// console.log("Hello, TypeScript. We have met again!");
// var addNumbers = (firstNum:number,secondNum:number) => {
//     return firstNum + secondNum;
// }
// const result = addNumbers(100,200);
// console.log(result);
/*

    Assignment
---------------------------------------------------
create a class named person with field names  name,
age, hobbies (multiple hobbies)

-- create an object of person class and display
information about the person with all hobbies
*/
class Person {
    constructor(name, age, hobbies) {
        this.name = "";
        this.age = 0;
        this.hobbies = [];
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
let person = new Person("Madhurjya", 25, ["Music", "Games", "Coding"]);
console.log(person.hobbies[0]);
