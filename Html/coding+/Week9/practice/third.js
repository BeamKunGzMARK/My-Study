const input = require("input");
let typenum = 0;
let numall = 1;

(async function () {
  typenum = Number(await input.text("Enter Number of Factorial: "));

  if (typenum == 0) {
    console.log("1");
  } else if (typenum > 0) {
    for (let i = 1; i <= typenum; i++) {
      numall *= i;
    }
    console.log(`${typenum}! = ${numall}`);
  }
})();
