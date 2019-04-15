// import React from 'react'

/*This function checks if a row contains a sequence of 5 numbers partaining
the Fibonacci sequence. */

// export default function FibonacciCheck(row) {
//   const rowOfNumbers = row.map(cell => cell.number)
//   //.some checks if true for some element in the array
//   const findFibonacci = rowOfNumbers.findIndex((num, index, array) => {
//     // //stops the check at the 5th last element. Not needed
//     // if (index < array.length - 4) {
//     //make array with next 5 element in array
//     const arr = [num, array[index + 1], array[index + 2], array[index + 3],
//       array[index + 4]];
//     //check if the array of 5 follows Fibonacci sequence
//     if (!arr.includes(0) && (arr[2] === (arr[1] + arr[0]) &&
//       arr[3] === (arr[2] + arr[1]) &&
//       arr[4] === (arr[3] + arr[2]))) {
//       return index
//     }
//   }
//     //  }
//   )
//   if (findFibonacci === -1) return false
//   else return findFibonacci
// }

export default function FibonacciCheck(row) {
  //turns array of objects to array of numbers
  const rowOfNumbers = row.map(cell => cell.number)
  //reducer to be used to do Fibonacci check
  const fiboReducer = (acc, val) => acc - val
  //indexArray will contain indexes for elements that pass Fibonacci check
  const indexArray = []
  //turns array of numbers into array of nested arrays of format [e, e+1 e+2]
  const arrayOfSubsequentNumbers = rowOfNumbers.map((num, index, array) =>
    [num, array[index + 1], array[index + 2]])
  /*checks for each element (nested array) of arrayOfSubsequentNumbers if 
  Fibonacci (reduceRight(fiboReducer) = 0). 
  If Fibonacci, push element's index to indexArray, else push hyphen*/
  arrayOfSubsequentNumbers.forEach((nestedArray, index) =>
    nestedArray.reduceRight(fiboReducer) === 0 ?
      indexArray.push(index) : indexArray.push('-')
  )
  /*turns indexArray into array of strings. 
  Each string is sequence of indexes of numbers partaining to the Fibonacci sequence.*/
  const fiboIndexes = indexArray.join('').split('-').filter(e => e.length >= 3)[0]
  return `${fiboIndexes[0]}-${fiboIndexes.length + 2}`
}

console.log(FibonacciCheck([{ number: 8 }, { number: 55 }, { number: 89 }, { number: 144 },
{ number: 233 }, { number: 377 }, { number: 610 }, { number: 987 }]))
//3,4,5
//{ number: 0 }, { number: 1 }, { number: 1 }, { number: 2 },
//{ number: 3 }, { number: 5 }, { number: 3 }, { number: 5 },

/*
  //.forEach(e => {
  //if (e.length >= 3) return `${ e[0] } -${ e.length } `
  //})*/