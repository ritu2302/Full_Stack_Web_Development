// Console is an object//

console.log("Hello world")
console.warn("Hello world")
console.error("Hello world")

//primitive data type

//string
console.log("Hello world")
console.log('d') //All characters are string in JS

console.log(typeof "Hello world")

//Numbers
console.log(typeof 1)
console.log(typeof 1.2)
console.log(typeof 1555515465461515645415)
console.log(typeof -1)
console.log(typeof -1.2)

//Boolean
console.log(typeof true)
console.log(false)

var age = 19
console.log(age)

var age1 = null     //null is a value, null is just an empty space
console.log(age1)
console.log(typeof age1) //null is an object

//console.log(Name)  //Refrence error

//Non primitive data types

//arrays
var arr = [1,2,3,4, "Age"]
console.log(arr)
console.log(typeof arr)

console.log(arr.length) //will show length of array
arr.push(5)
console.log(arr)

//Operators

//Arithmetic  operators

var a = 2
var  b = 10

console.log('a+b =', a+b)
console.log('b-a =', b-a)
console.log('b/a =', b/a)
console.log('b*a =', b*a)
console.log('b**a =', b**a) //power
console.log('b % a =', b % a)

//Assignment operators
b=11
console.log('b' , b)
b += 10
console.log('b+=10' , b)
b++            
console.log('b++' , b)
b -=10
console.log('b-=10' , b)
b--
console.log('b--' , b)

var c =10

console.warn (c)
console.log(c)
console.warn(c++)
console.log(c)

//Comparision operator

var d =10
var e= 2
console.log (d>e)
console.log (d <e)
console.log (d>=e)
console.log (d<=e)
console.log (d==e)

//console.warn(d==f) //Refrence error 
//console.warn(d===f)
//console.warn(d +f)

//Logical operators

//Logical AND Operator
console.log('true && true' , true && true)
console.log('true && false' , true && false)
console.log('false && true' , false && true)
console.log('false && false' , false && false)

//Logical OR Operator
console.log('true || true' , true || true)
console.log('true || false' , true || false)
console.log('false || true' , false || true)
console.log('false || false' , false || false)

