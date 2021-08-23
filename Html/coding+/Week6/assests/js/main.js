async function Converter() {
    let num = document.getElementById("Numbers").value;
    let fnum = document.getElementById("frombase").value;
    let tnum = document.getElementById("tobase").value;
    let data = [];
    const base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let sum = 0;


    if(fnum != 10){
        var retemp = num.split("").reverse().join("");
        for (var i = 0; i < retemp.length; i++){
            sum = sum + (retemp[i] * fnum**i);
        }
        num = sum;

    }

    while (true) {
        
        data.push(base[num % tnum]);
        num = Math.floor(num / tnum);
        if (num < tnum) {
            data.push(num);
            break;
        }
    }

    let val = "";

    async function forlooper(){
    for (let index = 1; index <= data.length; index++) {
        const element = data[data.length - index];
        val += `${element}`;
    }
    }

    await forlooper();
    val = val.toString().replace(/^0/, "");

    if(val != ""){
    return (document.getElementById("Res").value = val);
    } else{
        console.log(num);
        return(document.getElementById("Res").value = num);
    }
}
