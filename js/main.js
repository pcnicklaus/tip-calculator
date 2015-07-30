// add scripts

var answer = 0;

$(document).on('ready', function() {
  console.log('sanity check!');
  var myButton = document.getElementById(generateButton);
  myButton.onclick = myFunction () {
    console.log('firing');
    var amount = document.getElementById(amount);
    parseInt(amount);
console.log(amount);
    var tip = document.getElementById(tip);
    parseInt(tip);
    console.log(tip);
    tipAmount = (amount * tip);
    tipAmount.toFixed(2);
    document.getElementById('answer').innerHTML = tipAmount;

  };

});

