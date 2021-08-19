function Converter() {
    let num = document.getElementById("Numbers").value;
    let fnum = document.getElementById("frombase").value;
    let tnum = document.getElementById("tobase").value;
    let data = [];
    const base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    while (true) {
        data.push(base[num % tnum]);
        num = Math.floor(num / tnum);
        if (num < tnum) {
            data.push(num);
            break;
        }
    }

    let val = "";

    console.log(data);

    for (let index = 1; index <= data.length; index++) {
        const element = data[data.length - index];
        val += `${element}`;
    }

    console.log(val);

    return (document.getElementById("Res").value = val);
}
