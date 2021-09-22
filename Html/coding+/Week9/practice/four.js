const input = require("input");

(async function () {
  firstnum = Number(await input.text("Enter The First Number : "));
  secondnum = Number(await input.text("Enter The Second Number : "));
  operator = await input.text("Type the Operator : ");

  console.log(`Operator is : ${operator}`);

  switch (operator) {
    case "/":
      console.log(firstnum / secondnum);
      break;
    case "*":
      console.log(firstnum * secondnum);
      break;
    case "+":
      console.log(firstnum + secondnum);
      break;
    case "-":
      console.log(firstnum - secondnum);
      break;
    default:
      console.log(`This Operator is not correct ${operator} . `);
      break;
  }
})();
