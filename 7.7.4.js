function setFullName (name) {
  this.fullName = name;
}

const person = {
  name: "Иван",
  age: 20
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName('John Smith');

console.log(person.fullName);