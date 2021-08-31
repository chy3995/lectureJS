function ex2_a(){
    document.getElementById("exQuery").innerText = "a. 빈 배열을 생성하고, 배열에 값을 추가, 출력해봅시다.";

    // 빈 배열 생성
    const arrNum = [];

    // 지역변수 num1
    let num1 = prompt("숫자를 입력하세요", "0 ~ 99");
    arrNum.push(num1);

    // 출력
    let exAnswer = document.getElementById("exAnswer");
    exAnswer.innerText = "입력받은 수의 값은 : " + arrNum + " 입니다.";
}

// 전역변수 생성
let count = 3;

function ex2_b(){
    let exAnswer = document.getElementById("exAnswer");
    document.getElementById("exQuery").innerText = "b. 빈 배열 생성, count 변수만큼 입력, count 변수만큼 출력";
    // 빈 배열 생성
    const arrNum = new Array();

    // count만큼 입력
    for(let i = 0; i < count; i++){
        arrNum.push(prompt(i + "번째 숫자를 입력하세요.", "0 ~ 99"));
    }
    // 입력된 배열의 갯수만큼 출력
    exAnswer.innerText = "";
    for(i in arrNum){
        exAnswer.innerText += arrNum[i] + "\n";
    }
}
function addTagP(v){
    let p = document.createElement("p");
    let txt = document.createTextNode(v);
    p.appendChild(txt);

    let exAnswer = document.getElementById("exAnswer");
    exAnswer.appendChild(p);
}
function ex2_c(){
    document.getElementById("exQuery").innerText = "c. 빈 배열 생성, count만큼 입력함수(), p태그로 출력함수()";
    // 빈 배열 생성
    const arrNum = new Array();

    // count만큼 입력
    for(let i = 0; i < count; i++){
       arrNum.push(prompt(i + "번째 숫자를 입력하세요.", "0 ~ 99")); 
    }
    // 입력된 배열의 갯수만큼 출력
    for(let i in arrNum){
        addTagP(arrNum[i]);
    }
}