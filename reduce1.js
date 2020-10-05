let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 52, occupation: 'gardener' },
    { name: 'Anna', age: 43, occupation: 'teacher' },
    { name: 'Albert', age: 46, occupation: 'programmer' },
    { name: 'Adam', age: 47, occupation: 'teacher' },
    { name: 'Robert', age: 32, occupation: 'driver' }
  ];
  
  let sumgodini = users.reduce((result, godini) => {
  return result + godini.age
  },0)
  
  console.log(sumgodini);