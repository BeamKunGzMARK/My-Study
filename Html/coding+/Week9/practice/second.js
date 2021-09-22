let input = require("input");
let typenum = 0;
let numall = 0;
let count = 0;

(async function () {
    typenum = Number(await input.text("Enter Number: "));

    do {
        //* ไม่ตรวจสอบเงื่อนไข ครั้งแรก ครั้งต่อไปจึงค่อยตรวจสอบ //
        numall += count;
        count += 1;
    } while (count <= typenum);

    console.log(numall);
})();
