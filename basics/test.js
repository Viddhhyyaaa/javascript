console.log("hii")
const accountId=144553
let accountEmail= 'abc123@gmail.com'
var accountPassowrd= '12345'
let accountstate //this will print undefined
/*
use let over var for block scope and functional scope
*/
accountCity='jaipur' //not recommended but still functional
//accountId=2 this is immutable as const is being used
console.log(accountId);
accountEmail='xyz@gmail.com'
accountCity='bangalore'
console.table([accountEmail,accountId,accountPassowrd,accountCity])
console.log(accountstate)