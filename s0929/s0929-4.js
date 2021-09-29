function ex2_a() {
    document.getElementById("exQuery").innerText = "a. 빈 배열을 생성하고, 배열에 값을 추가, 출력해봅시다.";   

    const arrNum = [];

    let num1 = prompt("숫자를 입력하세요", "0 ~ 99");
    arrNum.push(num1);

    let exAnswer = document.getElementById("exAnswer");
    exAnswer.innerText = "입력받은 수의 값은 : \n" + num1 + "입니다.";
}

let count = 3;

function ex2_b() {
    let exAnswer = document.getElementById("exAnswer");
    document.getElementById("exQuery").innerText = "b. 빈 배열을 생성, count변수만큼 입력, count변수만큼 출력";
    
    const arrNum = new Array();

    for(let i = 0; i < count; i++) {
        arrNum.push(prompt(i + "번째 숫자를 입력하세요", "0 ~ 99"));
    }
    exAnswer.innerText = "";
    for(let i in arrNum) {
        exAnswer.innerText += arrNum[i] + "\n";
    }
}

function addTagP(v) {
    let p = document.createElement("p");
    let txt = document.createTextNode(v);
    p.appendChild(txt);

    let exAnswer = document.getElementById("exAnswer");
    exAnswer.appendChild(p);
}

function ex2_c() {
    document.getElementById("exQuery").innerText = "c. 빈 배열을 생성, count만큼 입력함수(), P태그로 출력함수()";

    const arrNum = new Array();

    for(let i = 0; i < count; i++) {
        arrNum.push(prompt(i + "번째 숫자를 입력하세요", "0 ~ 99"));
    }
    for(let i in arrNum) {
        addTagP(arrNum[i]);
    }
}