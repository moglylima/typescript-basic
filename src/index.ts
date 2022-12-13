// string, number, boolean, null, undefined, symbol, object
let x: number = 10

x = 20
console.log(x)

// Inferency x Anotation

// Inferency -> Definição de tipo de acordo com o valor recebido.
let y = 10

// Anotation -> Definição de tipo por anotação.
let z: number = 10

// Tipos basicos
let firstName: string = "João"
let age: number = 20
let isStudent: boolean = true

console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isStudent)

//obejct
let person: object = {
    name: "João",
    age: 20
}

// array
let students: string[] = ["João", "Maria", "Pedro"]
let myNumbers: number[] = [1, 2, 3]

// tuple
let myTuple: [string, number, string[]] = ["João", 20, ["Pedro", "Maria"]]

// object literals 
const user: {name: string, age: number} = {
    name: "João",
    age: 20
}

// any -> aceita qualquer tipo de valor
let a: any = 0;

a = "string"
a = true
a = {}

// union types
let id: number | string = 10

id = '10'
id = 20

// type alias
type myIdType = number | string

let userId: myIdType = 10
let productId: myIdType = '10'
let orderId: myIdType = 20
// enum
enum Size {
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
}

const camisa = {
    name: "Camisa Gola v",
    size: Size.G
}

console.log(camisa.size)

// literal types -> não permite que o valor seja alterado.
let teste: "alumvalor"

teste = "alumvalor"

// functions
function sum(a: number, b: number){
    return a + b
}

// function - especificando o tipo de retorno
function sum2(a: number, b: number): number{
    return a + b
}

// function void -> não retorna nada
function sum3(a: number, b: number): void{
    console.log(a + b)
}

// function with optional params
function greeting(name: string, lastName?: string): string{
    if(lastName){
        return `Hello ${name} ${lastName}`
    }
    return `Hello ${name}`
}

console.log(greeting("João", "Silva"))
console.log(greeting("João"))


// Interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(params: MathFunctionParams): number{
    return params.n1 + params.n2
}

console.log(sumNumbers({n1: 10, n2: 20}))

function multiplyNumbers(params: MathFunctionParams): number{
    return params.n1 * params.n2
}

console.log(multiplyNumbers({n1: 10, n2: 20}))

function divideNumbers(params: MathFunctionParams): number{
    return params.n1 / params.n2
}

console.log(divideNumbers({n1: 10, n2: 20}))

// narrowing
// checking of type
function doSomething(value: number | string){
    if(typeof value === "number"){
        console.log("value is a number")
        return
    }
    console.log("value is not a number, it is a string")
}

doSomething(10)

doSomething("10")

// generics
function showArraysItems<T>(arr: T[]){
    arr.forEach(item => console.log("ITEM: ", item))
}

showArraysItems([1, 2, 3])
showArraysItems(["a", "b", "c"])
showArraysItems([1, "a", true, {name: "João"}])


// classes
class User {
    name
    role
    aproved

    constructor(name: string, role: string, aproved: boolean){
        this.name = name
        this.role = role
        this.aproved = aproved
    }

    showUserName(){
        console.log(this.name)
    }
    shoeUserRole(){
        console.log(this.role)
    }
    showUserAproved(){
        console.log(this.aproved)
    }

    verifyUserAproved(isAproved: boolean){
        if(isAproved){
            console.log("Usuário aprovado")
            return
        }
            console.log("Usuário não aprovado")
    }
}

const user01 = new User("João", "admin", true)

console.log(user01)
user01.showUserName()
user01.shoeUserRole()
user01.showUserAproved()
user01.verifyUserAproved(false)

// Interfaces with classes

interface interfaceVeicle {
    brand: string,
    showBrand(): void
}

class Car implements interfaceVeicle {
    brand
    wheels
    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = 4
    }

    showBrand(): void{
        console.log(`À marca do carro é ${this.brand}`)
    }
}

const car01 =   new Car("Fiat", 4)
car01.showBrand()

//Herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: string){
        super(brand, wheels)
        this.engine = engine
    }
}

const superCar01 = new SuperCar("Ferrari", 4, "V8")

// Decorators

// Constructor Decorator
function BaseParams(){
    return function < T extends {new (...args: any[]): {}}> (constructor: T){
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

// Decorator in class
@BaseParams()
class Person{
    name 
    constructor(name: string){
        this.name = name
    }
}

const people01 = new Person("João")
console.log(people01)

