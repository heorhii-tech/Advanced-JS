// ex1.1
let name = "name";
let age = "25";
let isAdmin = false;
//ex1.2
const planet = "Earth";

//ex1.3
//sayHi()// Hello, John
//ex1.4
let user = {
    name : 'John',
    surname: 'Smith',
}
user.name = "Pete";
console.log(user)
user.name = "";
Object.defineProperty(user, "name",{
    value:"Nick"
})
console.log(user)
user.name = "";
console.log(user)
delete user.name
console.log(user)


//ex1.5
const userS = {
    name: "John"
}

// does it work?
userS.name = "Pete"
console.log(userS)


//ex1.6
let sum = 0 ;
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130,
}

function sumSalaries (){
    for( let salary of Object.values(salaries)){
        sum+=salary;
    }
    return sum;
}
console.log ( sumSalaries());
//390

//ex1.7

let a = 5;
let b = 6;
let result = (a+b<4)? "Below" : "Over";
console.log(result)

//ex1.8
let login = "Director"
 let message =
     (login === 'Employee')? 'Hello' :
         (login === 'Director')? 'Greetings' :
         (login === '')? 'No login':
             "";
console.log(login)



