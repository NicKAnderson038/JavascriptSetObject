document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;


const solution = (X) => {
  // pulling values out of an array and using the index as an object name. No dublicates!
  const set = new Set(X);
  let i = 1;
  console.log(set);
  while (set.has(i)) {
    console.log(set.has(i), i)
    i++;
  }

  return i;
}

const A = [1, 3, 6, 4, 1, 2]; // 5
const B = [-1, -3]; // 1
const C = [1,2,3,9]; // 4
const D = [1, 7, 4, -9, 4, 6, 2, 5, 0, 8, 3] // 1

/**
 * using 'i' as the counter & representing the value in the set.
 * checking by counting up if that number exsists. 
 * the number may still exsist, but if it's not the next one on the count, then the function will fail.
 * Useful for items in an array, objects to a lesser extense.
*/

const result = solution(D)
console.log(result)


const objSolution = (X) => {
  const set = new Set(X)
  console.log(set)
}
const objArray = [
  {
    item: 1,
    name: 'Bill'
  },
  {
    item: 2,
    name: 'suzy'
  },
  {
    item: 3,
    name: 'King'
  }
]
objSolution(objArray)