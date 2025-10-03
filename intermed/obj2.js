//object singleton
// //const tinderuser= new Object() SINGLETON OBJECT
// const tinderuser= {}  //NON-SINGLETON OBJECT(LITERALS)
// console.log(tinderuser);
const tinderuser= {}
tinderuser.id= "123abc"
tinderuser.name= "vidhya"
tinderuser.isloggedin= false
//console.log(tinderuser)
const regularuser= {
    email: "vidhya@gmail.com",
    fullname:{
        userfullname: {
            firstname: "vidhya",
            lastname:  "rai"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname)
const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 2:"b"}
// const obj3= {obj1, obj2}
// console.log(obj3)
//const obj3= Object.assign({}, obj1, obj2)
const obj3= {...obj1, ...obj2}
console.log(obj3)