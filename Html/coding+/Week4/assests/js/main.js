function getvalue() {
        var value = document.getElementById("getnumber").value;

        if (value >= 80) {
                document.getElementById("textnum").innerHTML = `Grade A`;
        } else {
                if (value <= 79 && value >= 70) {
                        document.getElementById(
                                "textnum"
                        ).innerHTML = `Grade B`;
                }

                if (value <= 69 && value >= 60) {
                        document.getElementById(
                                "textnum"
                        ).innerHTML = `Grade C`;
                }
                if (value <= 59 && value >= 50) {
                        document.getElementById(
                                "textnum"
                        ).innerHTML = `Grade D`;
                }

                if (value <= 49 && value >= 0) {
                        document.getElementById(
                                "textnum"
                        ).innerHTML = `Grade F`;
                }

                if (value < 0) {
                        document.getElementById(
                                "textnum"
                        ).innerHTML = `Invaild Numbers !!`;
                }
        }
}
