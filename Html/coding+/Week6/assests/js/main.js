async function Converter() {
  let num = document.getElementById("Numbers").value;
  const fnum = document.getElementById("frombase").value;
  const tnum = document.getElementById("tobase").value;
  const data = [];
  const base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let reVal = new Object();
  reVal = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  let sum = 0;

  if (fnum != 10) {
    const retemp = num.split("").reverse().join("").toUpperCase();

    for (let i = 0; i < retemp.length; i++) {
      sum = sum + reVal[retemp[i]] * fnum ** i;
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

  async function forlooper() {
    for (let index = 1; index <= data.length; index++) {
      const element = data[data.length - index];
      val += `${element}`;
    }
  }

  await forlooper();
  val = val.toString().replace(/^0/, "");

  if (val != "") {
    return (document.getElementById("Res").value = val);
  } else {
    console.log(num);
    return (document.getElementById("Res").value = num);
  }
}

async function convertnew() {
  const num = document.getElementById("Numbers").value;
  const fnum = document.getElementById("frombase").value;
  const tnum = document.getElementById("tobase").value;

  const changer = parseInt(num, fnum); // แปลงจากค่ารับ มาแปลงเป็น ฐานเริ่มต้น
  const keeper = changer;
  const trying = keeper.toString(tnum); // จากนั้นแปลงจาก ฐานเริ่มต้นมาแล้ว ไปเป็นฐานที่ต้องการ

  return (document.getElementById("Res").value = trying);
}
