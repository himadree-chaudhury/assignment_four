function calculateTax(income, expenses) {
  if (
    income < 0 ||
    expenses < 0 ||
    expenses > income ||
    typeof income === undefined ||
    typeof income !== "number" ||
    typeof expenses === undefined ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }
  let payableTax = (income - expenses) * 0.2;
  return payableTax;
}

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
console.log(calculateTax("jk"));
