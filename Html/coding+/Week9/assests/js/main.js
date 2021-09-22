function cal() {
  const a = document.getElementById("anum").value;
  const b = document.getElementById("bnum").value;
  const c = document.getElementById("cnum").value;

  if ((a, b, c !== null || undefined || "")) {
    var result1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    var result2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  }

  // katex.render(
  //     `\\x = \\frac{ -${b} \\pm \\sqrt{${b}^2 - 4${a}${c}}{2${a}}   `,
  //     document.getElementById("restextf"),
  //     {
  //         throwOnError: false,
  //     }
  // );

  const astring = String(a);
  const bstring = String(b);
  const cstring = String(c);
  const text = `4${a}${b}`;

  katex.render(
    `x=\\frac{-${b} \\pm \\sqrt{${b}^2 - 4(${a})(${c})} }{2(${a})}`,
    document.getElementById("restextf")
  );

  document.getElementById("restext").innerHTML = katex.renderToString(
    `${a}x^2 + ${b}x + ${c} = 0`,
    {
      throwOnError: false,
    }
  );

  document.getElementById("res").value = `${result1} , ${result2}`;
}
