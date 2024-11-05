const num:number=120
const str:string= 'hello md'
const isAdmin:boolean=true
const nullType:null=null
const undefineType:undefined=undefined
const tupol:[number,string]=[122, 'mr. x']
console.log('num',num, 'string:',str, 'bol:',isAdmin, 'null:',nullType, 'unde',undefineType)
console.log('tuople', tupol)
const info:{
    firstName:string;
    middleName:string;
    lastName?: string;
    age: number;
    isAdmin:boolean
}={
    firstName:'Md.',
    middleName:'Athiqur',
    lastName: 'Rahman',
    age:33,
    isAdmin: true
}

console.log('info',info.isAdmin)

function testFunction(num1:number,num2:number):number{
    return num1+num2
}

testFunction(2,5)

const arr=(num1:number, num2:number):number=>num1+num2
arr(2,5)
console.log(arr)

const numArray:number[]=[2,3,5]
const newNum:number[]=numArray.map((ele:number):number=>ele*ele)
console.log(newNum)

const student1:string[]=['asfak', 'Ikram', 'Sakib']
const student2:string[]=['Anis', 'Sakil', 'Jabber']

student1.push(...student2)
console.log(student1)

const greetings=(...friends:string[])=>{
 friends.forEach(friend=>{
    console.log(`hi ${friend}`)
 })
}

greetings('alom','komol','molom')

//Object Destructuring
const myFriends={
    name:'Rahim',
    bio:{
        age:35,
        profession: 'Teacher'
    },
    school: 'Thakurgaon school',
    salary:60000
}

const {bio:{profession}}=myFriends
console.log(profession)

//Array Destructuring------
const staff=['samsuzzaman', 'subor','mohitul', 'afzal', 'masud']
const [,, best,...rest]=staff
console.log(staff)

//Type alias for object----
type Friend={
    firstName:string;
    middleName?:string;
    lastName:string;
    age:number;
    phone:number
}
const friend1:Friend={
    firstName:'Abdur',
    middleName:'Rahim',
    lastName:'Hauladar',
    age:35,
    phone:1720112498
}

const friend2:Friend={
    firstName:'Abdur',
    
    lastName:'Hauladar',
    age:35,
    phone:1720112498
}

//Function alias----
type NumAdd=(num1:number, num2:number)=>number
const numAdd:NumAdd=(num1,num2)=>num1+num2

//Union type
type NewDevwloper='Front-end developer' | 'Fokira developer'
const newDeveloper:NewDevwloper='Front-end developer'

type Patient={
    name:string;
    id:number;
    blood:'A+'|'B+'|'O+'
}
const patient1:Patient={
    name:'Akter Hamid',
    id:1450,
    blood:'A+'
}

//Intersection type
type FrontEnd={
    skills:string[];
    designation1: 'Front-end Developer'

}
type BackEnd={
    skills:string[];
    designation2: 'Back-end Developer'
}
type FullStack= FrontEnd & BackEnd
const developer:FullStack={
    skills:['HTML', 'React'],
    designation1:'Front-end Developer',
    designation2:'Back-end Developer'

}

//Ternary Operator----
const age=25
const checkAge=age>=18? 'adult': 'youth'
console.log(checkAge)

//Nulish qualiseing operator
const checkNulish=''
const nulishReturn=checkNulish?? 'Guest'
console.log(nulishReturn)
//use of nulish operator with ternary operator

type User={
    name:string;
    designation: string;
    presentAddress: {
        vill:string
    };
    permanentAddress:{
        vill:'mari'
    }
}
const user:User={
    name:'Abdul Rahim',
    designation:'DRE',
    presentAddress:{
        vill:'mari'
    },
    permanentAddress:{
        vill:'mari'
    }
}

const infom=user?.permanentAddress?.vill?? 'village is not exist'
console.log(infom)

// Type assertion---------
const kgToGrm=(value: string|number):string |number|undefined=>{
    if(typeof value==='string'){
        const convertedValue=parseFloat(value)
        return convertedValue
    }
    if(typeof value==='number'){
        return value
    }
}
const result1=kgToGrm(1000) as number
const result2=kgToGrm('2000') as string // this is type assertion. it will be used when developer will be confirmed
console.log(result2)

// Custom Error
type CustomError={
    message:string
}
try{

}
catch(error){
    console.log((error as CustomError).message)
}