let str = 'Something'
let number = 6
let bool = false
let Big_Int = BigInt(10000)
let symb = Symbol('$')
let testNull = null
let nedefinit = undefined

console.log(typeof str)
console.log(typeof number)
console.log(typeof bool)
console.log(typeof Big_Int)
console.log(typeof symb)
console.log(typeof testNull)
console.log(typeof nedefinit)

var num1 = 2 + 5
console.log(num1)
num1++
console.log(num1)
var num2 = 5
var num3 = num1 - num2
console.log(num3)
num3--
console.log(num3)
var num4 = num3 / num2
console.log(num4)
var num5 = 5 * 8
console.log(num5)
var num6 = 6
var num7 = 6
num6 = num1 ** num7
console.log(num6)


console.log(num1 > num2)
console.log(num5 < num3)
console.log(num4 >= num5)
console.log(num2 <= num1)
console.log(!num5)
console.log(num4 == num2)
console.log(num6 === num7)