function ex1_a() {
    document.getElementById("exQuery").innerText = "a. 두 수를 입력받아서, 출력해봅시다.";

    let num1 = prompt("첫번째 숫자를 입력하세요", "0 ~ 99");
    let num2 = prompt("두번째 숫자를 입력하세요", "0 ~ 99");

    document.getElementById("exAnswer").innerText = "입력받은 두 수의 값은 : \n" + num1 + "과 " + num2 + "입니다.";
}

let num1, num2;
let exQuery = document.getElementById("exQuery");
let exAnswer = document.getElementById("exAnswer");

function ex1_b() {
    document.getElementById("exQuery").innerText = "b. 두 수를 입력받아서, 두 수가 짝수인지 홀수인지 출력해봅시다.";

    num1 = parseInt(prompt("첫번째 숫자를 입력하세요.", "0 ~ 99"));
    num2 = parseInt(prompt("두번째 숫자를 입력하세요.", "0 ~ 99"));

    var p = document.createElement("p");
    var txt = document.createTextNode("");

    if(num1 % 2 == 0){
        txt.nodeValue = num1 + " : 짝수";
    }else {
        txt.nodeValue = num1 + " : 홀수";
    }

    p.appendChild(txt);
    exAnswer.appendChild(p);

    var p = document.createElement("p");
    var txt = document.createTextNode("");

    if(num2 % 2 == 0){
        txt.nodeValue = num2 + " : 짝수";
    }else {
        txt.nodeValue = num2 + " : 홀수";
    }

    p.appendChild(txt);
    exAnswer.appendChild(p);
}

function ex1_c2(num) {
    let p = document.createElement("p");
    let txt = document.createTextNode("");

    if(num % 2 == 0){
        txt.nodeValue = num + " : 짝수";
    }else {
        txt.nodeValue = num + " : 홀수";
    }

    p.appendChild(txt);
    exAnswer.appendChild(p);
}
function ex1_c() {
    exQuery.innerText = "c. 두 수를 입력받아, 함수{ 짝수 or 홀수 출력}를 작성합시다.";

    num1 = parseInt(prompt("첫번째 숫자를 입력하세요", "0 ~ 99"));
    num2 = parseInt(prompt("두번째 숫자를 입력하세요", "0 ~ 99"));

    ex1_c2(num1);
    ex1_c2(num2);
}