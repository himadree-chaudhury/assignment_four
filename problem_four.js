function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    Array.isArray(obj) ||
    obj.name === undefined ||
    typeof obj.name !== "string" ||
    obj.testScore === undefined ||
    typeof obj.testScore !== "number" ||
    isNaN(obj.testScore) ||
    obj.testScore > 50 ||
    obj.schoolGrade === undefined ||
    typeof obj.schoolGrade !== "number" ||
    isNaN(obj.schoolGrade) ||
    obj.schoolGrade > 30 ||
    obj.isFFamily === undefined ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  let testScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true) {
    testScore += 20;
  }
  if (testScore >= 80) {
    return true;
  }
  return false;
}

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);
console.log(calculateFinalScore("hello"));
console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);