let username = "Z97";
let userCheck = /^[A-Za-z]+([0-9]*)$/i; // Change this line
let result = userCheck.test(username);

console.log(result);

