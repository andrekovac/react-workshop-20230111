/* eslint-disable */

/* Primitive data types */

// type inference
let a: boolean = false;
a = true;

const myVariable1: null | undefined | string = null;
let myVariable2 = undefined;

console.log(myVariable2);

/* Objects */

// const car: { [key: string]: any } = {
const car = {
  "brand name": "Ford",
  model: "Fiesta",
  year: 2019,
  color: "red",
  isElectric: false,
};

// car["new property"] = "new value";

console.log(car);

/* Arrays */

// Tuple: Array with fixed length and fixed types
const cars: ReadonlyArray<string> = ["Ford", "Fiat", "Audi"];
const cars2: string[] = ["Ford", "Fiat", "Audi"];
// cars[3] = "BMW";

console.log(cars);

/* Destructuring */

// const model = car.model;
// const year = car.year;

const { model, year } = car;

// fiat
const [, , second] = cars;

// const state = useState();
// const value = state[0];
// const setValue = state[1];

// const [value, setValue] = useState();

// const useState = () => {
//     // ...
//     const [value, setValue];
// }

console.log({ second });

/* Spread syntax */

const person = {
  name: "Foo",
  age: 76,
};

const extendedPerson = person;
extendedPerson.name = "Football";

console.log(person);

const extendedPerson2 = {
  ...person,
  hobby: "Football",
};

// console.log(extendedPerson === person)

extendedPerson2.name = "Bar";

console.log(person);

// console.log(extendedPerson2 === person)

/* Functions */

// Function expression

const logSth = function (text: string, text2: string): void {
  console.log(text);
  //   return undefined;
};

// type alias of a function type
type LogSth = (text: string, text2: string) => void;

// Arrow function expression
const doSthAndLog = (logFunction: LogSth) => {
  logFunction("text1", "text2");
  console.log("Done!");
};

const sum = (num1: number, num2: number) => num1 + num2;
const getPerson = () => {
  return {
    name: "Hans",
    age: 92,
  };
};

doSthAndLog(logSth);

console.log(logSth("a", "b"));

/* array methods */

// for each

const output1 = cars.forEach((car, idx) => console.log(idx));
const output2 = cars.map((car, idx) => "super" + car);

console.log(output2);

/* block scope */

const one = 1;

if (1 === 1) {
  console.log(one);
  const two = 2;
}

// two

/* template string */

const myString1 = "super-" + car.color;
const myString2 = `super-${car.color + "!!!"}`;

myString2;

/* equality */

// == vs. ===

const value1 = { num: 1 };
const value2 = { num: 1 };

console.log(value1 == value2);

export {};

/* type & interface */

type ISBN = string;

const myIbsn: ISBN = "234234-323-2323";

type Person = {
  name: string;
  age?: number;
};

type Animal = {
  name: string;
  paws?: number;
};

interface PersonI {
  name: string;
  age?: number;
}

interface PersonI {
  hobbies: Array<string>;
}

const person1: PersonI = {
  name: "Sarah",
  hobbies: ["schwimmen"],
};

type PersonOrAnimal = Person | Animal;

console.log(person1.age);

/* any & unknown */

let anyValue: any = {};
let unknownValue: unknown = { foo: "bar" };

let string1: string = anyValue;
// let string2: string = unknownValue;

// unknownValue.sth;

/* async/await & Promise */

// fetch("http://www.mywebsite.com")
//     .then(response => response.json())
//     .then(result => console.log(result))

// const myFetch = new Promise((resolve, reject) => {
//      const result = "result";
//      if (1 == 1) {
//         resolve(result);
//      } else {
//         reject(new Error("This didn't work!"));
//      }
// })

// Promise (pending / fullfilled / rejected)
const myFunction = async () => {
  const response = await fetch("http://www.mywebsite.com");
  const result = await response.json();
  return result;
};

// console.log(myFunction());

// ...

const myNum: number = Number(12);

myNum;
