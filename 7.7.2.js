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