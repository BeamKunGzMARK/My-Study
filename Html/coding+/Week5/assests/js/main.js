function revest() {
    var gettext = document.getElementById("revest").value;
    var revest = gettext.split("").reverse().join("");
    console.log(gettext);
    return (document.getElementById("output").innerText = revest);
}

function converter() {
    var gettext = document.getElementById("input").value;
    let a = [];
    let count = 0;

    for (let index = 0; index <= gettext; index++) {
        count = count + index;
    }
    return (document.getElementById("output").innerText = count);
}

function secondparse() {
    let gettext = document.getElementById("inputsec").value;
    let data = [];

    if (gettext == 0 || gettext == 1) {
        return (document.getElementById("outputsec").innerText = gettext);
    } else {
        while (gettext > 0) {
            var remaining = gettext % 2;
            gettext = Math.floor(gettext / 2);
            data.push(remaining);
        }
    }

    console.log(data);

    let val = "";

    for (let index = 1; index <= data.length; index++) {
        const element = data[data.length - index];
        val += `${element}`;
    }

    return (document.getElementById("outputsec").innerText = val);
}
