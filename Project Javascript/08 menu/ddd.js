// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ];
  
//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       let key = obj[property]
//       if (!acc[key]) {
//         acc[key] = []
//       }
//       acc[key].push(obj)
//       return acc
//     }, {})
//   }

//   let groupedPeople = people.groupBy('name', 'age')
// console.log(groupedPeople)

//***************************//
// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
//     if (previousValue.indexOf(currentValue) === -1) {
//       const b =previousValue.indexOf(currentValue)
//       console.log(b)
//       const c =previousValue
//       console.log(c)
//       const d =currentValue
//       console.log(d)
//    const a= previousValue.push(currentValue)
//    console.log(a)
//   }
//   const h= previousValue
//   console.log(h)
//      return previousValue
// }, [])

// console.log(myArrayWithNoDuplicates)


// const array=['a','b','c','d'] 
// const l = array.indexOf('e')
// console.log(l)

//*******************//
// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//     let k = allNames[name]
//     console.log(k)
//   }
//   const g= allNames
//   console.log(g,'mmm')
//   return allNames
// }, {})

// console.log(countedNames)

//****************************//
// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ];
  
//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       let key = obj[property]
//       console.log(key)
//       if (!acc[key]) {
//         acc[key] = []
//       }
//       const y = acc[key].push(obj)
//       console.log(y) 
//       const z= acc
//       console.log(acc)
//       return acc
//     }, {})
//   }
  
//   let groupedPeople = groupBy(people, 'age')
//   console.log(groupedPeople)


//********************************
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(x)
}

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}




