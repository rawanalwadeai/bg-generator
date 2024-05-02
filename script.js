var css = document.querySelector(".h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient")



function setBodyGradient(){
    return body.style.background="linear-gradient(to right, " + 
    color1.value + "," + color2.value + ")" ; 



}
        css.innerHTML = body.style.background  + ";";

console.log("heyy")

color1.addEventListener("input" , setBodyGradient)



color2.addEventListener("input" , setBodyGradient)


//scope

var a = 5;

function b(){
    var a = "1 hello"
    console.log(a);
}


function bb(){
    var a = "2 hello"
    console.log(a);
}

function bbb(){
    var a = "3 hello"
    console.log(a);
}


console.log(a);
b();
bb();
bbb();
console.log(a);


const obj= {player: "rawan" ,
pass :"245" , wh: false};

const player= obj.player;

const name="eafmke";

 var na=12;
 na=34;

 let nam=0
 nam=1;

 console.log(na);
 console.log(nam);


 //template strings 
 const name2="rawna"
 const age=21;

 const syn=`hello how r u ${name2} yor age semmes like ${age - 1}`;

console.log(syn)




//arrow functions :

function add1(a,b){// the normal way without arrow fun
    return a + b;
}

const add2 = (a,b) => a + b;//if i have one line of return 
const add3 = (a,b) => { }//if i have more than one line of return

//--




var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var ag = person.age;
var eyeColor = person.eyeColor;

var { firstName , lastName , ag , eyeColor} = person;

console.log(firstName)

//
var firstName="wa";
var city="abha";
var message2 = `hello ${firstName} have I met you before? I think we met in ${city} last summer n0???`

console.log(message2);

const m = (a) => (b) => a*b;
const m2 = m(5);

console.log(m(5));


 var a = 20;
 function de(){
   var a=2;
 }
 console.log(a);


 const array = [1,2,4,6];
 const newArray= array.forEach(num => {num*2});
 //it could be like that also (num =>  num*2);
 console.log(newArray);

 const mapArray = array.map(num => { return num*2});
 //it could be like that also (num =>  num*2);
console.log(mapArray);


//reduce:
const arrayy=[1,2,0];
const reduceArray=arrayy.reduce((acc, num ) => {return acc + num} , 2)
//2 يعني بدايه قيمه ال acc 2 
console.log(reduceArray);