function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const charLength = email.length;
  let multipleChar = [];
  for (let i = 0; i <= charLength; i++) {
    if (email[i] === "@") {
      multipleChar.push(email[i]);
    }
  }
  if (multipleChar.length !== 1) {
    return "Invalid Email";
  } else {
    const userName = email.slice(0, email.indexOf("@"));
    const domainName = email.slice(email.indexOf("@") + 1);
    return userName + " sent you an email from " + domainName;
  }
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification("sadia8@@icloud.com"));
