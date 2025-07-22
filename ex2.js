//Задание 7.7.1
function printInfo (){
  console.log (`Name: ${this.name}, Age: ${this.age}`)
}

const person = {
  name: "Иван",
  age: 20
}

printInfo.call (person)

//Задание 7.7.2
function calculate (a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "*") {
    return a * b;
  } else {
    return "Ошибка";
  }
}

calculate.apply (null, [2, 3, "+"])

//Задание 7.7.3
//const usersFilter = users.filter(user => user.age >= 18);

//const names = users.map(user => user.name);

//console.log(usersFilter);

//console.log(names);

//Задание 7.7.4
function setFullName (name) {
  this.fullName = name;
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName('John Smith');

console.log(person.fullName);

//Задание 7.7.5
function filterNumbers (numbers) {
    let set = new Set (numbers);
    let filterSet = Array.from(set);
    return filterSet.sort((a, b) => a - b)
}

const array = [1, 6, 3, 6, 5, 8];

filterNumbers(array)