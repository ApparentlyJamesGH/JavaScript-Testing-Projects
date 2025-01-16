let number = 0;
function add() {
    number = number + Number(document.getElementById("increment").value);
   document.getElementById("cntr").innerText = "Counter: " + number
};

function sub() {
    number = number - Number(document.getElementById("increment").value);
    document.getElementById("cntr").innerText = "Counter: " + number
};