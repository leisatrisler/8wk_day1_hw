let anyType;
let typeString:string;
let typeNumber:number;
let typeBool:boolean;
let typeObj:object;
let typeNull:null;
let typeUndefined:undefined;

anyType = 1;
anyType = 'string'
anyType = {id:2};

//Error
typeString = 123;

typeString = 'I am a string!';

typeNull = 'I am a string!' //Error

typeNull = null;

let iceString:string;
let iceNumber:number;
let iceBool:boolean;

iceString = 'Hello World';
iceNumber = 123;
iceBool = true;

let implicitlyTypedArray = ["na na na na", "na na na na", "hey hey", "goodbye"];

implicitlyTypedArray = 'new song';

implicitlyTypedArray = [1, 2, 3, 4]

let explicitlyTypedArray:string[];

explicitlyTypedArray = [1, 2, 3, 4]; // Error

explicitlyTypedArray = ['We', 'will', 'we', 'will', 'rock', 'you'];

let arrayOfNulls:null[] = [null, null, null];
console.log(arrayOfNulls);

let multitypedArr:[number, string, boolean, null];

multitypedArr = [22, 'brian', true, null];

multitypedArr = ['brian', 22, null, true];

let unknownLengthArray:[string, ...number[]]

unknownLengthArray = ['John', 3, 4, 77, 345, 34, 55, 64, 45];

unknownLengthArray = ['Judy'];

let stringBoolsArray:[string, ...boolean[]] = ['world', true, false, false, true, false];
console.log(stringBoolsArray);

function nameLower(name){
    name=name.toLowerCase();
    return name;
};


function nameLower(name:string){
    name = name.toLowerCase();
    return name;
};

function nameLower(name:string){
    name=name.toLowerCase();
    return name
}

nameLower('JACK').length

function nameLower(name){
    name = name.toLowerCase();
    return name + 2;
}

nameLower('TEST').length


function nameLower(name:string):string{
    name = name.toLowerCase();
    return name + 2;
};


nameLower('TEST').length

function iceAddition(first:number, second:number):string{
    return `${first} plus ${second} equals ${first + second}`
}

iceAddition(2, 4).toUpperCase()


const nameUpper = (name:string):string => {
    name = name.toUpperCase();
    return name;
}

nameUpper('lyndon johnson')

const iceAdditionArrow = (first:number, second:number):string => {
    return `${first} plus ${second} equals ${first + second}`
};


iceAdditionArrow(10, 23).toUpperCase()

const iceAdditionArrow2 = (first:number, second:number):string => `${first} plus ${second} equals ${first + second}`;

iceAdditionArrow2(34, 45).toLowerCase();

function sayHello(name:string):void{
    console.log(`Hello ${name}`)
}

sayHello('Paula Poundstone');

function sayHello(name:string):void{
    console.log(`Hello ${name}`);
    return 123;
}

sayHello('Paula Poundstone');

const iceVoid = ():void => {
    console.log('If I have a void I have nothing');
}

typeof iceVoid();

let typeAny:any;
typeAny = 'Hello';
typeAny=1234;
typeAny = [1, 'hello', true]

let product: [number, string];
product = [1, 'Red Nike Shoes'];


//Error
product = ['Red Nike Shoes', 1];

//Error
product = [1, 'Red Nike Shoes', 'Size 10'];

// this works but shouldn't!!!
product.push('more info');
product

let iceTuple:[boolean, undefined] = [true, undefined];

iceTuple = [false, undefined];

enum Size {Small, Medium, Large};
console.log(Size.Small)

let mySize:Size = Size.Medium;
console.log(mySize)

enum Size {Small=5, Medium, Large};
console.log(Size.Small)

let mySize2:Size = Size.Medium;
console.log(mySize2)


enum Size{Small='S', Medium='M', Large='L'};
console.log(Size.Small);

let mySize3:Size = Size.Medium;
console.log(mySize3)

let mySize4:Size = "Not an Enum Element";

let mySize5:Size = Size.ExtraLarge;

enum IceEnum {offense='O', defense='D', specialTeams='ST'}
console.log(IceEnum.specialTeams, IceEnum.offense, IceEnum.defense)



function myUnknownFunction(person:any){
    person.walk();
    person.talk();
}

function myUnknownFunction(person:unknown){
    person.walk();
    person.talk();
}


class Person{
    walk(){console.log('walking')}
    talk(){console.log('talking')}
};


function myUnknownFunction(person:unknown){
    if (person instanceof Person){
        person.walk();
        person.talk();
    } else {
        console.log('This is not a Person object');
    };
};


let jimmy = new Person();
myUnknownFunction(jimmy)

myUnknownFunction('Random String')

function iceGuard(param:unknown){
    if (typeof param === 'number'){
        return param ** 2;
    } else if (typeof param === 'string'){
        return param.toUpperCase();
    } else if (typeof param === 'boolean'){
        return param ? 'Its on' : 'Its off'
    } else {
        return param
    }
}


console.log(iceGuard("hello")) // HELLO
console.log(iceGuard(12)) // 144
console.log(iceGuard(false)) // Its off
console.log(iceGuard(null)) // null

typeof true

function myNeverFunction():never{
    console.log('This function is running...')
    while (true){
        var x = 1;
    };
};

let student1 = {id:1}
student1.name = 'Alfonzo';
//Error because name:string is not part of our shape

let student2 = {id:2, name:'Alfonzo'};
student2.name = 'Reginald';
student2

let student3:{
    id: number,
    name: string
} = {id: 3, name: 'Janet'};

console.log(student3)



//error
student3.name = 1234;

student3.name = 'Jackson';
console.log(student3)

console.table(student3)

let iceMan:{
    id:number, 
    name:string, 
    wasFrozen:boolean
}={id:1, name:"Crane", wasFrozen: true}

iceMan

type Student = {
    id: number,
    name: string
}

let studentType:Student={
    id: 13,
    name: 'Dale'
};

console.table(studentType)

studentType.name = 123

studentType.lastName = 'Earnhardt';

let anotherStudent:Student = {id: 123, name:'Jeff'}
console.table(anotherStudent)



type IceManType = {
    id:number, 
    name:string, 
    wasFrozen:boolean
}


let iceMan1:IceManType = {id:1, name:"Link", wasFrozen: true};
let iceMan2:IceManType = {id:2, name:"Stanley Shephard", wasFrozen: true};
let iceMan3:IceManType = {id:3, name:"GEICO Caveman", wasFrozen: false}

console.table(iceMan1);
console.table(iceMan2);
console.table(iceMan3);

type StudentRO = {
    readonly id: number,
    name: string
}


let studentReadOnly:StudentRO = {
    id: 4,
    name: 'Dale'
};
console.table(studentReadOnly)

studentReadOnly.id = 10;

type StudentOF = {
    readonly id: number,
    name: string,
    fax?: string
};

let studentOF:StudentOF = {
    id: 4,
    name: 'Dale'
};

studentOF

studentOF.fax = '232-232-2323'
studentOF

type StudentMethod = {
    readonly id:number,
    name:string,
    fax?:string,
    sayHello:(name:string)=>string
}

let studentM:StudentMethod = {
    id: 123,
    name: 'Dale',
    sayHello: (name) => {
        return 'Hello ' + name
    }
};

console.log(studentM)

studentM.sayHello('sally')

studentM.sayHello(123);

type IceShoeType = {
    readonly id: number,
    size: number,
    name: string,
    isWide?: boolean,
    description: string
};

let iceShoe:IceShoeType = {
    id: 321,
    size: 10,
    name: 'Air Jordan',
    description: 'Spend all your money on me and then you can leap a building in a single bound!'
}


iceShoe.isWide = false;

console.log(iceShoe)


let multipleTyped: string|null

multipleTyped = 'This is a string';

multipleTyped = null;
console.log(multipleTyped);

multipleTyped = 123;

function inchesToCm(length:string|number):number{
    return length*2.54
};

function inchesToCm(length:string|number):number{
    if (typeof length === 'string'){
        return parseFloat(length)*2.54
    } else {
        return length * 2.54
    }
}

inchesToCm(100)

inchesToCm('33.3')

inchesToCm(true)

function ice13(param:boolean|string): boolean {
    if (typeof param === 'boolean') {
        return param;
    }else {
        return param.charAt(0).toUpperCase() === 'C';
    }
}


console.log(ice13(true));
console.log(ice13('california'));
console.log(ice13('New Mexico'));

function contrivedAs(arr:string[], value:string|number):boolean{
    return arr.includes(value);
};


function contrivedAs(arr:string[], value:string|number):boolean{
    return arr.includes(value as string)
}

console.log(contrivedAs(['Python', 'TypeScript', 'JavaScript'], 'TypeScript'));
console.log(contrivedAs(['Python', 'TypeScript', 'JavaScript'], 123));


type Moveable = {
    id: number,
    x: number,
    y: number,
    move: ()=>void
}


type Resizable = {
    id: number,
    width: number,
    height: number,
    resize: ()=>void
}


type Component = Moveable & Resizable



let myComponent:Component = {
    id: 456,
    x: 5,
    y: 10,
    width: 400,
    height: 200,
    
    move: ()=> {
        // Define how the component moves
        console.log('Moving...')
    },
    
    resize: ()=>{
        // Define how the component resizes
        console.log('Resizing...')
    }
}


myComponent

myComponent.move();

myComponent.resize();

type IceUser={
    firstName: string,
    lastName: string,
    age: number
}

type IceCustomer = {
    cart: string[], 
    address: string
}

type IceCompleted = IceUser & IceCustomer;

// const mergeTogether = IceCompleted = {
//     iceUser: IceUser("Cane", "Stonewall", 29);
// }
// const iceComplete1 = IceUser("Cane", "Stonewall", 29);
// const iceComplete2 = IceCustomer(["ice", "ice cream", "popsicle"], "123 stoneCav, Riv,Ca 0000")

let icedOver:IceCompleted = {
    firstName: 'John',
    lastName: 'Walsh',
    age: 77,
    cart: ['fingerpint kit', 'magnifying glass', 'luminol'],
    address: '123 Skaneateles Lake Dr., Syracuse, NY'
}

icedOver

// This is useless
let literalType1:100;

literalType1 = 50;


let literalType2:25|50|100
literalType2 = 25

literalType2 = 75

type Color = "red"|"green"|"blue"

let literalColor:Color;

literalColor = 'yellow';

literalColor = 'blue';

type Friend = "Ross"| "Rachel"| "Joey"| "Chandler"|"Pheobe"|"Monica"

let rachel:Friend = 'Rachel'
console.log(rachel)

let janice:Friend = 'Janice'

type Name = "Ross"|"Rachel"|"Joey"|"Chandler"|"Pheobe"|"Monica"
let literalName:Name
literalName="Janice"

type CTStudent = {
    id: string,
    name: string,
    age: number,
    isTired: Boolean,
    projectsCompleted: string[],
    pet?: string //The ? makes pet optional since student2 does not have a pet.
}

let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
    
}

let student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

console.log(student1);
console.log(student2);
console.log(student3);


type Fruit= {
    color:string;
    shape:string;
};

let apple: Fruit = {color:"red", shape: "round"};
let eaten: Fruit = null

function printFruitColor(fruit: Fruit|null): void{
    if (fruit){
        console.log(fruit.color);
    }else{
        console.log("You ate my fruit already");
    }
}
printFruitColor(apple);
printFruitColor(eaten);

type Book={
    isbn:string,
    title:string,
    author:string,
}

type DigitalBook={
    fileType:string,
}

type Ebook = Book | DigitalBook;

let myEbook: Ebook = {
    isbn:"634764056745906",
    title:"Gone With The Wind",
    author:" Margaret Mitchell",
    fileType: "hardcover"
};

console.log(myEbook);

type ShopItem = {
    id: number;
    price: number;
    description: string;
    color?: string;
    category: Categories;
    keywords: string[];
}

enum Categories {
    Shirts = "Shirts",
    Shoes = "Shoes",
    Pants = "Pants",
    Hats = "Hats"
}

const itemOne: ShopItem ={
    id: 100,
    price: 140.00,
    description: "Black Pants",
    color: "black",
    category: Categories.Pants,
    keywords: ["Pants", "Black", "Skull"],
};

const itemTwo: ShopItem ={
    id: 200,
    price: 40.00,
    description: "Black Trucker Hat",
    color: "black",
    category: Categories.Hats,
    keywords: ["Hats", "Black", "Trucker", "Flat-Bill"],
};

const itemThree: ShopItem ={
    id: 300,
    price: 25.00,
    description: "Black Shirts",
    color: "black",
    category: Categories.Hats,
    keywords: ["Shirts", "Black", "Alligence"],
};

console.log(itemOne);
console.log(itemTwo);
console.log(itemThree);


