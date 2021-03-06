function getSum() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    document.getElementById("result").innerHTML = "Tổng hai số là: " + sum;
}