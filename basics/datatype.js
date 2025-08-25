"user strict;" //treats code as newer version

//alert for browser use
/*datatypes
1.number- 2^53
2.bigint
3.string
4.boolean
5.null-- this is empty
6.undefine d--this is not defined(but not null)
7.symbol--for unique entities
8. object
*/ 
console.log(typeof 'vidhya')
console.log(typeof null) //object type
console.log(typeof undefined)//undefined
let score= "33avx"
let valueinnum= Number(score)
console.log(typeof valueinnum)
console.log(valueinnum) //will show NaN-> not a number
//null into int is 0, undefined as NaN
let name= "vidhya"
let x= Number(name)
console.log(x)