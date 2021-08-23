import React, { useState } from "react";
import firebase from "firebase/app";
import config from "../config.json";
import "firebase/auth";
import "firebase/database";

firebase.initializeApp(config.data);

function Firebaseposter() {
    let ipuser = "";
    let valuedatabase;

    const [country, setcountry] = useState("None");
    const [valueclick, setvalueclick] = useState(0);

    fetch("https://api.ipify.org/?format=json")
        .then((response) => response.json())
        .then((data) => (ipuser = data.ip));

    fetch(`https://ipinfo.io/${ipuser}?token=4f5d84aa7e733c`)
        .then((response) => response.json())
        .then((datai) => {
            setcountry(datai.country);
            if (country !== "None") {
                valuedatabase = firebase.database().ref(`/Country`);
                valuedatabase.once("value").then(function (snapshot) {
                    var a = snapshot.child(`${country}`).exists(); // true
                    if (a === true) {
                        valuedatabase.child(`${country}`).update({
                            Date: Date.now(),
                            Value: snapshot.val()[country].Value + 1 ,
                        });

                                        setvalueclick(
                                            snapshot.val()[country].Value
                                        );
                    } else {
                        valuedatabase.child(`${country}`).set({
                            Date: Date.now(),
                            Value: 0,
                        });
                                        setvalueclick(
                                            snapshot.val()[country].Value
                                        );
                    }
                });
            }
        });

    function clickValue(Valuesame) {
        let valueclicker = Valuesame + 1;
        valuedatabase = firebase.database().ref(`/Country`);
        valuedatabase.once("value").then(function (snapshot) {
            var a = snapshot.child(`${country}`).exists(); // true
            if (a === true) {
                valuedatabase.child(`${country}`).update({
                    Date: Date.now(),
                    Value: valueclicker,
                });

                setvalueclick(snapshot.val()[country].Value);
            } else {
                valuedatabase.child(`${country}`).set({
                    Date: Date.now(),
                    Value: valueclicker,
                });

                              setvalueclick(snapshot.val()[country].Value);
            }
        });
    }

    document.addEventListener("click", function () {
       clickValue(valueclick);
    });


    return (
        <div className="Clicker_Zone">
            <h4>Clicker : {valueclick}</h4>
            <p>Country : {country}</p>
        </div>
    );
}

export default Firebaseposter;
