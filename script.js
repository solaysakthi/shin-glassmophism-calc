let screen = document.getElementById("dscreen");

function display(num) {
    dscreen.value += num;
}

function calculate() {
    try {
        dscreen.value = eval(dscreen.value);
    }
    catch(err) {
        alert("Invalid");
    }
}

function sclear() {
    dscreen.value = "";
}

function del() {
    dscreen.value = dscreen.value.slice(0,-1);
}