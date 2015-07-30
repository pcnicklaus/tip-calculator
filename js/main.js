// add scripts

var answer = 0;

window.onload = function() {
  console.log('sanity check!');
  };

var myButton = document.getElementById("generateButton");

myButton.onclick = function () {
    console.log('firing');
    var amount = document.getElementById("amount").value;
    parseInt(amount);
    console.log(amount + "Am");
    var tip = document.getElementById("tip-percent").value;
    parseInt(tip);
    console.log(tip + "tip");
    tipAmount = (amount * tip).toFixed(2);
    // tipAmount.toFixed(2);
    console.log(tipAmount)
    document.getElementById('answer').innerHTML = "You should tip $" + tipAmount;

};

