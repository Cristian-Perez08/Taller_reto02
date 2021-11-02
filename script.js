//letras numeros
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");
// botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const cn = document.getElementById("cn");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");

// funciones
const fna1 = () => {
    if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("YA ESTAN TODOS LOS CAMPOS!");
    } else {
        if (letters.innerHTML == "ABCDEFGHIJ") {
                numbers.innerHTML = "1";
        } else {
            if (letters.innerHTML == "") {
                    letters.innerHTML = "A";
        }
        }
    }
};

const fnb2 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
            alert("YA ESTAN TODOS LOS CAMPOS!");
        } else {
            if (numbers.innerHTML == "1") {
                    numbers.innerHTML += "2";
            } else {
            alert("HACE FALTA UN NUMERO");
            }
        }
    } else {
        if (letters.innerHTML == "A") {
        letters.innerHTML += "B";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fnc3 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
            alert("YA ESTAN TODOS LOS CAMPOS!");
        } else {
        if (numbers.innerHTML == "12") {
            numbers.innerHTML += "3";
        } else {
            alert("HACE FALTA UN NUMERO");
        }
        }
    } else {
        if (letters.innerHTML == "AB") {
        letters.innerHTML += "C";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fnd4 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("YA ESTAN TODOS LOS CAMPOS!");
        } else {
        if (numbers.innerHTML == "123") {
            numbers.innerHTML += "4";
        } else {
            alert("HACE FALTA UN NUMERO");
        }
        }
    } else {
        if (letters.innerHTML == "ABC") {
        letters.innerHTML += "D";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fne5 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("YA ESTAN TODOS LOS CAMPOS!");
        } else {
        if (numbers.innerHTML == "1234") {
            numbers.innerHTML += "5";
        } else {
            alert("HACE FALTA UN NUMERO");
        }
        }
    } else {
        if (letters.innerHTML == "ABCD") {
        letters.innerHTML += "E";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fnf6 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("YA ESTAN TODOS LOS CAMPOS!");
        } else {
        if (numbers.innerHTML == "12345") {
            numbers.innerHTML += "6";
        } else {
            alert("HACE FALTA UN NUMERO");
        }
        }
    } else {
        if (letters.innerHTML == "ABCDE") {
        letters.innerHTML += "F";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fng7 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("YA ESTAN TODOS LOS CAMPOS!");
        } else {
        if (numbers.innerHTML == "123456") {
            numbers.innerHTML += "7";
        } else {
            alert("HACE FALTA UN NUMERO");
        }
        }
    } else {
        if (letters.innerHTML == "ABCDEF") {
        letters.innerHTML += "G";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fnh8 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("YA ESTAN TODOS LOS CAMPOS!");
        } else {
        if (numbers.innerHTML == "1234567") {
            numbers.innerHTML += "8";
        } else {
            alert("HACE FALTA UN NUMERO");
        }
        }
    } else {
        if (letters.innerHTML == "ABCDEFG") {
        letters.innerHTML += "H";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fni9 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("YA ESTAN TODOS LOS NUMEROS!");
        } else {
        if (numbers.innerHTML == "12345678") {
            numbers.innerHTML += "9";
        } else {
            alert("HACE FALTA UN NUMERO");
        }
        }
    } else {
        if (letters.innerHTML == "ABCDEFGH") {
        letters.innerHTML += "I";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fncn = () => {
    numbers.innerHTML = "";
};

const fnj0 = () => {
    if (letters.innerHTML == "ABCDEFGHIJ") {
        if (numbers.innerHTML == "1234567890" && letters.innerHTML == "ABCDEFGHIJ") {
        alert("YA ESTAN TODOS LOS CAMPOS!");
        } else {
        if (numbers.innerHTML == "123456789") {
            numbers.innerHTML += "0";
        } else {
            alert("HACE FALTA UN NUMERO");
        }
        }
    } else {
        if (letters.innerHTML == "ABCDEFGHI") {
        letters.innerHTML += "J";
        } else {
        alert("HACE FALTA UNA LETRA");
        }
    }
};

const fncl = () => {
    letters.innerHTML = "";
};

// eventos
a1.onclick = () => {
    fna1();
};
b2.onclick = () => {
    fnb2();
};
c3.onclick = () => {
    fnc3();
};
d4.onclick = () => {
    fnd4();
};
e5.onclick = () => {
    fne5();
};
f6.onclick = () => {
    fnf6();
};
g7.onclick = () => {
    fng7();
};
h8.onclick = () => {
    fnh8();
};
i9.onclick = () => {
    fni9();
};
cn.onclick = () => {
    fncn();
};
j0.onclick = () => {
    fnj0();
};
cl.onclick = () => {
    fncl();
};