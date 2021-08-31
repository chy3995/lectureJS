function ex1_a() {
    document.getElementById("exQuery").innerText = "a. 두 수를 입력받아서, 출력해 봅시다."
    // 두 수를 입력받는다 prompt 사용.
    // 함수 안에 선언된 num1과 num2는 함수와 라이브사이클(생명주기)이 같습니다.
    // 지역변수 num1, num2
    let num1 = prompt("첫번째 숫자를 입력하세요", "0~99")
    let num2 = prompt("두번째 숫자를 입력하세요", "0~99")

    //출력
    document.getElementById("exAnswer").innerText = "입력받은 두 수의 값은 : \n" + num1 + "와(과) " + num2 + "입니다."
}

// 전역변수 선언부
let num1, num2;
let exQuery = document.getElementById("exQuery");
let exAnswer = document.getElementById("exAnswer");

function ex1_b() {
    document.getElementById("exQuery").innerText = "b. 두 수를 입력받아서, 두 수가 홀수인지 짝수인지 출력해봅시다."
    //입력
    let num1 = prompt("첫번째 숫자를 입력하세요", "0~99")
    let num2 = prompt("두번째 숫자를 입력하세요", "0~99")

    //지역변수 : 엘리먼트 생성 및 추가_____첫번째 선언
    var p = document.createElement("p"); // createElement -> ()안에 있는 Element를 만든다.
    var txt = document.createTextNode("");
    //num1 연산
    if(num1 % 2 == 0){
        txt.nodeValue = num1 + " : 짝수입니다.";
    }else {
        txt.nodeValue = num1 + " : 홀수입니다.";
    }
    // p태그 추가
    p.appendChild(txt);
    exAnswer.appendChild(p);
    //지역변수 : 엘리먼트 생성 및 추가_____두번째 선언
    var p = document.createElement("p");
    var txt = document.createTextNode("");
    //num2 연산
    if(num2 % 2 == 0){
        txt.nodeValue = num2 + " : 짝수입니다.";
    }else{
        txt.nodeValue = num2 + " : 홀수입니다.";
    }
    //p태그 추가
    p.appendChild(txt);
    exAnswer.appendChild(p);
}
function ex1_c2(num) {
    //지역변수 : 엘리먼트 생성 및 추가
    let p = document.createElement("p");
    let txt = document.createTextNode("");
    //num1 연산
    if(num % 2 == 0) {
        txt.nodeValue = num + " : 짝수입니다.";
    }else {
        txt.nodeValue = num + " : 홀수입니다.";
    }
    //p태그 추가
    p.appendChild(txt);
    exAnswer.appendChild(p);
}
function ex1_c() {
    exQuery.innerText = "c. 두 수를 입력받아, 함수{ 짝수 or 홀수 출력 }를 작성합시다.";
    //입력
    num1 = parseInt(prompt("첫번째 숫자를 입력하세요", "0~99"));
    num2 = parseInt(prompt("두번째 숫자를 입력하세요", "0~99"));
    //출력할 함수
    ex1_c2(num1);
    ex1_c2(num2);
}