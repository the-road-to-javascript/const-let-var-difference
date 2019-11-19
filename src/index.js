const personOne = {
  name: 'Robin Wieruch',
  age: 30,
};

const personTwo = {
  name: 'Liesa Huppertz',
  age: 29,
};

const family = [personOne, personTwo];

function sumAge(persons) {
  // console.log(sum);
  let sum = 0;

  for (let i = 0; i < persons.length; i++) {
    sum = sum + persons[i].age;
  }

  // console.log(i);

  return sum;
}

const result = sumAge(family);

console.log(result);
// 59
