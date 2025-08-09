let value1 = 0;
let value2 = 0;
let operator = "";
let total = 0;

function reset() {
   document.getElementById("result").innerText = "0";
   value1 = 0;
   value2 = 0;
   operator = "";
   total = 0;
}

function visorlimit() {

   if (document.getElementById("result").innerText.length >= 9) {
      alert("Limite de caracteres atingido!");
      return true;
   }
   return false;
} 

function append1ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }
   
   if (resultElement.innerText == "0") {
      resultElement.innerText = "1";
   } else {
      resultElement.innerText += "1";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}
function append2ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }
   
   if (resultElement.innerText == "0") {
      resultElement.innerText = "2";
   } else {
      resultElement.innerText += "2";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}

function append3ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }
   
   if (resultElement.innerText == "0") {
      resultElement.innerText = "3";
   } else {
      resultElement.innerText += "3";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}

function append4ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }
   
   if (resultElement.innerText == "0") {
      resultElement.innerText = "4";
   } else {
      resultElement.innerText += "4";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}

function append5ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }
   
   if (resultElement.innerText == "0") {
      resultElement.innerText = "5";
   } else {
      resultElement.innerText += "5";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}

function append6ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }
   
   if (resultElement.innerText == "0") {
      resultElement.innerText = "6";
   } else {
      resultElement.innerText += "6";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}

function append7ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }
   
   if (resultElement.innerText == "0") {
      resultElement.innerText = "7";
   } else {
      resultElement.innerText += "7";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}

function append8ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }
   
   if (resultElement.innerText == "0") {
      resultElement.innerText = "8";
   } else {
      resultElement.innerText += "8";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}

function append9ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }

   if (resultElement.innerText == "0") {
      resultElement.innerText = "9";
   } else {
      resultElement.innerText += "9";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }
   
}



function append0ToResult() {

   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }

   if (resultElement.innerText == "0") {
      resultElement.innerText = "0";
   } else {
      resultElement.innerText += "0";
   }
   if (operator == "") {
      value1 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value1;
   } else {
      value2 = parseFloat(resultElement.innerText);
      document.getElementById("result").innerText = value2;
   }

   
   
}

 document.getElementById("clear").addEventListener("click", reset);

 document.getElementById("number-7").addEventListener("click", append7ToResult);
 document.getElementById("number-8").addEventListener("click", append8ToResult);
 document.getElementById("number-9").addEventListener("click", append9ToResult);
 document.getElementById("number-4").addEventListener("click", append4ToResult);
 document.getElementById("number-5").addEventListener("click", append5ToResult);
 document.getElementById("number-6").addEventListener("click", append6ToResult);
 document.getElementById("number-1").addEventListener("click", append1ToResult);
 document.getElementById("number-2").addEventListener("click", append2ToResult);
 document.getElementById("number-3").addEventListener("click", append3ToResult);
 document.getElementById("number-0").addEventListener("click", append0ToResult);

 document.getElementById("sum").addEventListener("click", x => {
   
   const resultElement = document.getElementById("result");

   if (visorlimit()) {
      return;
   }

   if (operator != "") {  
      operator = "+";
   }

   operator = "+";
   value2 = 0;
   const resultElement = document.getElementById("result");
   
   executar()
   }

 );

