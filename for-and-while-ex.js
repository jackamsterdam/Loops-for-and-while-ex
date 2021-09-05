// Solutions: For Loops + While Loops:

// Ex-1: Write a function that get a number. The function will check and print all the numbers that divide by 3 without a remainder until that number.

// Unit testing:
var divideBy = 9;
var res = allDivideBy3(divideBy)
console.log(divideBy, ' - Expecting: An array: [0, 3, 6, 9], Got: ', res)

var divideBy = 17;
var res = allDivideBy3(divideBy)
console.log(divideBy, ' - Expecting: An array  [0, 3, 6, 9, 12, 15], Got: ', res)

function allDivideBy3(num) {
    let numbers = []
    for (let i = 0; i <= num; i++) {

        if (i % 3 === 0) {
            numbers.push(i)
        }
    }
    return numbers
}

// allDivideBy3(9) //(4) [0, 3, 6, 9]
// allDivideBy3(17) //(6) [0, 3, 6, 9, 12, 15]

//***********************WHILE************************* */
function allDivideBy3(num) {
    let numbers = []
    let i = 0
    while (i <= num) {
        if (i % 3 === 0) {
            numbers.push(i)
        }
        i++
    }
    return numbers
}
allDivideBy3(9) //(4) [0, 3, 6, 9]
allDivideBy3(17) //(6) [0, 3, 6, 9, 12, 15]

//************************************************************************************************************************************ */


//Ex-2
//Write a function that gets 2 numbers, the function will check and print all the numbers from the first one that was sent until the second one.

function range(min, max) {
    let nums = []
    for (let i = min; i <= max; i++) {
        nums.push(i)
    }
    return nums
}
range(5, 15) //(11) [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//******************************WHILE************************************** */

function range(min, max) {
    let nums = []
    let i = min;
    while (i <= max) {
        nums.push(i++)
    }
    return nums
}
range(5, 15) //(11) [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//************************************************************************************************************************************ */
//Ex-3
//Write a function that gets a number. the function will check if the number is a prime number מספר ראשוני
//A prime number divides only by itself and by 1

function isPrime(num) {
    let isPrime = true
    if (num <= 0 || num === 1) {
        console.log('Not a prime number')
        return !isPrime
    }
    //     if (num === 2) return isPrime
    //     if (num % 2 === 0) {
    //         console.log('Not a prime number')
    //         return !isPrime
    //     }
    //     if (num % 3 === 0) {
    //         console.log('Not a prime number')
    //         return !isPrime
    //     }
    //     if (num === 5) return true
    //     if (num % 5 === 0) {
    //         console.log('Not a prime number')
    //         return !isPrime
    //     }
    //6n+1 or 6n-1 gives you all prime numbers except 2,3

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = !isPrime
            break;
        }
    }
    return isPrime

}

isPrime(-1) //false
isPrime(0) // false
isPrime(1) //false
isPrime(2) //true
isPrime(3) //true
isPrime(4) //false
isPrime(5) //true
isPrime(6) //false
isPrime(7) //true
isPrime(9) //false
isPrime(13) //true
isPrime(115) //false
isPrime(107) //true


//******************************WHILE************************************** */




function isPrime(num) {
    let isPrime = true
    let idx = 2
    if (num <= 0 || num === 1) {
        console.log('Not a prime number')
        return !isPrime
    }
    while (idx < Math.sqrt(num)) {
        if (num % idx === 0) {
            isPrime = !isPrime
            break;

        }
        idx++
    }
    return isPrime
}

isPrime(-1) //false
isPrime(0) // false
isPrime(1) //false
isPrime(2) //true
isPrime(3) //true
isPrime(4) //false
isPrime(5) //true
isPrime(6) //false
isPrime(7) //true
isPrime(9) //false
isPrime(13) //true
isPrime(115) //false
isPrime(107) //true



//************************************************************************************************************************************ */
//Ex-4
//Write a function that gets 2 numbers, the function will check and return true/false if you can build the second number by adding the first number that was sent until the first number. 
function addRepeat(num1, num2) {
    let isTrue = false
    let sum = 0

    for (let i = 0; i < (num2 / num1); i++) {
        sum += num1
        if (sum === num2) {
            isTrue = !isTrue
        }
    }
    return isTrue

}

addRepeat(1, 5) // true
addRepeat(2, 5) // false
addRepeat(2, 6) //true
addRepeat(3, 33) //true
addRepeat(7, 32) //false
addRepeat(8, 32) //true


//*****************************WHILE*************************************** */


function addRepeat(num1, num2) {
    let isTrue = false
    let sum = 0
    let i = 0
    while (i < (num2 / num1)) {
        sum += num1
        if (sum === num2) {
            isTrue = !isTrue
        }
        i++
    }
    return isTrue
}

addRepeat(1, 5) // true
addRepeat(2, 5) // false
addRepeat(2, 6) //true
addRepeat(3, 33) //true
addRepeat(7, 32) //false
addRepeat(8, 32) //true

//************************************************************************************************************************************ */
// Ex-5
//Write a function that gets a number, the function will print "love" "doesn't love" the number of times as the argument that was sent.

function loves(num) {
    for (let i = 0; i < num; i++) {
        console.log('love❤')
        console.log('Does not love👎🏻')
    }
}
loves(3) //
    // love❤
    // Does not love👎🏻
    // love❤
    // Does not love👎🏻
    // love❤
    // Does not love👎🏻

//*****************************WHILE*************************************** */
function loves(num) {
    let i = 0
    while (i < num) {
        console.log('love❤')
        console.log('Does not love👎🏻')
        i++
    }
}

loves(3) //
    // love❤
    // Does not love👎🏻
    // love❤
    // Does not love👎🏻
    // love❤
    // Does not love👎🏻

//************************************************************************************************************************************ */