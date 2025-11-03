//as promise is a object so it can be created
const promise1= new Promise(function(resolve, reject){
    //do and async task
    //db calls, cryptography task, network call
    setTimeout(function(){
        console.log('async task is complete');
        resolve() //links the creation with consumption
    },1000)
})
promise1.then(function(){ //then is connected to ressolve
console.log("promise consumed");
}) 
 