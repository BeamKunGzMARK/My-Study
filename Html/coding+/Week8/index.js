const test = {
  name: "Dekchai",
  lname: "Jaidee",
};
let i;
let tmp = "";

for (i in test) {
  tmp += test[i] + " ";
}

const test2 = ["A", "B", "C"];
let i2;
let tmp2 = "";

for (i2 of test2) {
  tmp2 += [i2] + " ";
}

console.log(tmp2);
