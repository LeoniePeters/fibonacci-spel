/*This function checks if a row contains a sequences of at least 5 numbers 
of the Fibonacci sequence. */

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
  /*Fibonacci check:
  1. exclude zeros
  2. checks for each element (a nested array) of arrayOfSubsequentNumbers if 
  Fibonacci (reduceRight(fiboReducer) = 0). 
  If Fibonacci, push element's index to indexArray, else push x*/
  arrayOfSubsequentNumbers.forEach((nestedArray, index) =>
    !nestedArray.includes(0) &&
      nestedArray.reduceRight(fiboReducer) === 0 ?
      indexArray.push(`${index}_`) : indexArray.push('x')
  )
  /*turns indexArray into array of strings of format startindex-length. 
  1. joins all indexes so it can
  2. split again indexes and get rid of x's (i.e. not part of Fibonacci sequence)
  3. map to turn strings into arrays of indexes (gets rid of the _ seperators)
  4. filter where fibonacci sequence is 5 or longer 
  (length check is 3. arrayOfSubsequentNumbers check for each element +2 
    following. 3 + 2 = 5.
  5. map over leftover arrays and turn them in strings of representing 
  startIndex-length of found Fibonacci sequence*/
  const fiboIndexes = indexArray.join('')
    .split('x')
    .map(e => {
      const indexArr = e.split('_');
      indexArr.pop();
      return indexArr
    })
    .filter(e => e.length >= 3)
    .map(e => `${e[0]}-${e.length + 2}`)

  return fiboIndexes
}

//to test output
// console.log(FibonacciCheck([{ number: 8 }, { number: 13 }, { number: 25 }, 
// { number: 144 }, { number: 233 }, { number: 377 }, { number: 610 }, 
// { number: 987 }, { number: 0 }, { number: 1 }, { number: 1 }, { number: 2 }, 
// { number: 3 }, { number: 5 }, { number: 8 }, { number: 13 }, { number: 21 }]))