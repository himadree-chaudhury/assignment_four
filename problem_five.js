function waitingTime(waitingTimes, serialNumber) {
  if (
    !Array.isArray(waitingTimes) ||
    typeof serialNumber !== "number" ||
    serialNumber <= waitingTimes.length
  ) {
    return "Invalid Input";
  }
  let totalTimeElapsed = 0;
  for (time of waitingTimes) {
    totalTimeElapsed += time;
  }
  const avgWaitingTime = Math.round(totalTimeElapsed / waitingTimes.length);
  const timeRequired =
    avgWaitingTime * (serialNumber - (waitingTimes.length + 1));
  return timeRequired;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
console.log(waitingTime([7, 8, 3, 4, 5], 6));
console.log(
  waitingTime({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);
