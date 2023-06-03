function multiplyNumbers() {
    var number1 = parseFloat(document.getElementById("inputNumber1").value);
    var number2 = parseFloat(document.getElementById("inputNumber2").value);
    var multiplyResult = number1 * number2;
    document.getElementById("result").innerHTML = "Multiply Result: " + multiplyResult;
  }

  function divideNumbers() {
    var number1 = parseFloat(document.getElementById("inputNumber1").value);
    var number2 = parseFloat(document.getElementById("inputNumber2").value);
    var divideResult = number1 / number2;
    document.getElementById("result").innerHTML = "Divide Result: " + divideResult;
  }