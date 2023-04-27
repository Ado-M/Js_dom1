// oppgave1
var celsiusIn = document.getElementById("celsius-input");
var fahrenheitIn = document.getElementById("fahrenheit-input");
var ToFahrenheitBtn = document.getElementById("til-fahrenheit-btn");
var ToCelsiusBtn = document.getElementById("til-celsius-btn");
var div_1 = document.getElementById("div-o1");

div_1.style.margin = "30px";

ToFahrenheitBtn.addEventListener("click", convertToFarhenheit);
ToCelsiusBtn.addEventListener("click", convertToCelsius);

function convertToFarhenheit() {
  var celsius = parseFloat(celsiusIn.value);
  var fahrenheit = celsius * 1.8 + 32;
  fahrenheitIn.value = fahrenheit.toFixed(2);
}

function convertToCelsius() {
  var fahrenheit = parseFloat(fahrenheitIn.value);
  var celsius = (fahrenheit - 32) / 1.8;
  celsiusIn.value = celsius.toFixed(2);
}

// oppgave2
var output = document.getElementById("out_put");
var compareBtn = document.getElementById("skriv-btn");
var div_2 = document.getElementById("div-o2");
var result = document.getElementById("result");

div_2.style.margin = "30px";

compareBtn.addEventListener("click", compareNumbers);

function compareNumbers() {
  var num1 = Math.floor(Math.random() * 11);
  var num2 = Math.floor(Math.random() * 11);

  if (num1 < num2) {
    output.textContent = num1 + " er mindre enn " + num2;
  } else if (num1 > num2) {
    output.textContent = num1 + " er større enn " + num2;
  } else {
    output.textContent = num1 + " er lik " + num2;
  }
}

// oppgave 3
var div_3 = document.getElementById("div-o3");
div_3.style.margin = "30px";

function checkPalindrome() {
  var inText = document.getElementById("input-text").value;
  var reversedText = inText.split("").reverse().join("");
  var outputDiv = document.getElementById("output");

  if (inText.toLowerCase() === reversedText.toLowerCase()) {
    outputDiv.innerHTML = inText + " er en palindrom!";
  } else {
    outputDiv.innerHTML = inText + " er ikke en palindrom.";
  }
}
// oppgave 4

document.getElementById('bx1').innerHTML='Box 1'
document.getElementById('bx2').innerHTML='Box 2'
document.getElementById('bx3').innerHTML='Box 3'

var div_4 = document.getElementById("div-o4");


var bt1 = document.getElementById('btt1');
var bt2 = document.getElementById('btt2');
var bt3 = document.getElementById('btt3');

bt3.style.cursor='pointer'
bt2.style.cursor='pointer'
bt1.style.cursor='pointer'
div_4.style.margin = "30px";

bt1.addEventListener("click", btt1);
bt2.addEventListener("click", btt2);
bt3.addEventListener("click", btt3) 
function btt1() {
  bx1.style.backgroundColor='red'
}
function btt2() {
  bx2.style.backgroundColor='blue'
}
function btt3() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  bx3.style.backgroundColor= `#${randomColor}`
}




