function tinhTong() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let tong = parseInt(firstNumber) + parseInt(secondNumber);
    document.getElementById("ketQua").innerHTML = "Tổng hai số là: " + tong;
}