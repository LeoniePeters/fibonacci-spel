// import React from 'react'

/*This function checks if a row contains a sequence of 5 numbers partaining
the Fibonacci sequence. */

export default function FibonacciCheck(row) {
  //.some checks if true for some element in the array
  const findFibonacci = row.findIndex((num, index, array) => {
    // //stops the check at the 5th last element. Not needed
    // if (index < array.length - 4) {
    //make array with next 5 element in array
    const arr = [num, array[index + 1], array[index + 2], array[index + 3],
      array[index + 4]];
    //check if the array of 5 follows Fibonacci sequence
    if (!arr.includes(0) && (arr[2] === (arr[1] + arr[0]) &&
      arr[3] === (arr[2] + arr[1]) &&
      arr[4] === (arr[3] + arr[2]))) {
      return index
    }
  }
    //  }
  )
  if (findFibonacci === -1) return false
  else return findFibonacci
}