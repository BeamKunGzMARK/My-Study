function cal() {
    var a = document.getElementById("anum").value;
    var b = document.getElementById("bnum").value;
    var c = document.getElementById("cnum").value;

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

    var astring = String(a);
    var bstring = String(b);
    var cstring = String(c);
    var text = `4${a}${b}`;

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
