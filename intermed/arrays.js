// const myarray=[0,1,2,3,4,5,true,"abc"]
// // console.log(myarray[2])
// myarray.push(6)
// console.log(myarray)
// myarray.unshift(9)
// console.log(myarray)
// const arr= myarray.join()
const thiss= [0,1,2,3,4,5,6]
const x= thiss.slice(1,3)
//console.log(x)
const y= thiss.splice(1,3)
//console.log(y)
//console.log(thiss) //[0,1,2,3,4,5,6] to [0,4,5,6] 
//splice transfers the range from the original array and not 
// copy them unlike slice
const first= [1,2,3,4,5]
const second= [6,7,8,9]
const combined= [...first, ...second]
console.log(combined)
console.log(Array.isArray(first))
console.log(Array.from("vidhya"))
 
