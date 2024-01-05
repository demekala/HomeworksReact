let nums = [];
let arr = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];
do {
  var salary = parseInt(window.prompt("enter your salary", ""), 10);
} while (isNaN(salary) || salary < 1);

for (let i = 0; i < getRandomInt(20); i++) {
  nums[i] = getRandomInt(100);
}

document.write("random numbers: ");

for (let i = 0; i < nums.length; i++) {
  document.write(nums[i] + ", ");
}

document.write("<br>");
document.write("odd numbers: ");

arr.forEach((number) => {
  if (number % 2 === 1) document.write(number + ", ");
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

if (salary < 1000) alert("you are broke");
else if (salary < 2000) alert("you have approximately average salary");
else if (salary < 10000) alert("you are almost rich");
else alert("you are rich af");
