"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, number, boolean, null, undefined, symbol, object
let x = 10;
x = 20;
console.log(x);
// Inferency x Anotation
// Inferency -> Definição de tipo de acordo com o valor recebido.
let y = 10;
// Anotation -> Definição de tipo por anotação.
let z = 10;
// Tipos basicos
let firstName = "João";
let age = 20;
let isStudent = true;
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isStudent);
//obejct
let person = {
    name: "João",
    age: 20
};
// array
let students = ["João", "Maria", "Pedro"];
let myNumbers = [1, 2, 3];
// tuple
let myTuple = ["João", 20, ["Pedro", "Maria"]];
// object literals 
const user = {
    name: "João",
    age: 20
};
// any -> aceita qualquer tipo de valor
let a = 0;
a = "string";
a = true;
a = {};
// union types
let id = 10;
id = '10';
id = 20;
let userId = 10;
let productId = '10';
let orderId = 20;
// enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola v",
    size: Size.G
};
console.log(camisa.size);
// literal types -> não permite que o valor seja alterado.
let teste;
teste = "alumvalor";
// functions
function sum(a, b) {
    return a + b;
}
// function - especificando o tipo de retorno
function sum2(a, b) {
    return a + b;
}
// function void -> não retorna nada
function sum3(a, b) {
    console.log(a + b);
}
// function with optional params
function greeting(name, lastName) {
    if (lastName) {
        return `Hello ${name} ${lastName}`;
    }
    return `Hello ${name}`;
}
console.log(greeting("João", "Silva"));
console.log(greeting("João"));
function sumNumbers(params) {
    return params.n1 + params.n2;
}
console.log(sumNumbers({ n1: 10, n2: 20 }));
function multiplyNumbers(params) {
    return params.n1 * params.n2;
}
console.log(multiplyNumbers({ n1: 10, n2: 20 }));
function divideNumbers(params) {
    return params.n1 / params.n2;
}
console.log(divideNumbers({ n1: 10, n2: 20 }));
// narrowing
// checking of type
function doSomething(value) {
    if (typeof value === "number") {
        console.log("value is a number");
        return;
    }
    console.log("value is not a number, it is a string");
}
doSomething(10);
doSomething("10");
// generics
function showArraysItems(arr) {
    arr.forEach(item => console.log("ITEM: ", item));
}
showArraysItems([1, 2, 3]);
showArraysItems(["a", "b", "c"]);
showArraysItems([1, "a", true, { name: "João" }]);
// classes
class User {
    constructor(name, role, aproved) {
        this.name = name;
        this.role = role;
        this.aproved = aproved;
    }
    showUserName() {
        console.log(this.name);
    }
    shoeUserRole() {
        console.log(this.role);
    }
    showUserAproved() {
        console.log(this.aproved);
    }
    verifyUserAproved(isAproved) {
        if (isAproved) {
            console.log("Usuário aprovado");
            return;
        }
        console.log("Usuário não aprovado");
    }
}
const user01 = new User("João", "admin", true);
console.log(user01);
user01.showUserName();
user01.shoeUserRole();
user01.showUserAproved();
user01.verifyUserAproved(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = 4;
    }
    showBrand() {
        console.log(`À marca do carro é ${this.brand}`);
    }
}
const car01 = new Car("Fiat", 4);
car01.showBrand();
//Herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const superCar01 = new SuperCar("Ferrari", 4, "V8");
// Decorators
// Constructor Decorator
function BaseParams() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
// Decorator in class
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParams()
], Person);
const people01 = new Person("João");
console.log(people01);
