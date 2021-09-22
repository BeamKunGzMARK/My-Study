var test = {
    name:"Dekchai",
    lname:"Jaidee"
}
var i;
let tmp = "";

for(i in test){
    tmp += test[i] + " ";
}

var test2 = ["A", "B", "C"];
var i2;
let tmp2 = "";

for (i2 of test2) {
    tmp2 += [i2] + " ";
}


    console.log(tmp2)