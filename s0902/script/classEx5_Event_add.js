// 윈도우객체 Lode
function winLode(e) {
    alert(`${e.currentTarget} 객체가 ${e.type}되었습니다.`);
}
window.onload = winLode;

// H1에 이벤트리스너 추가(익명이너 함수)
/* function(){} -> 이름이 없어서 익명이너 함수 
    정의와 동시에 실행이라 이름이 필요없음.
    이름이 없으면 안으로 들어가야 한다. -> 익명이너
*/
document.querySelector("h1").addEventListener("click", function(){
    alert(`${this}를 클릭했습니다.`);
    alert(`${this.textContent}를 클릭했습니다.`);
});
/*
    e.currentTarget.textContent =거의 비슷함= this.textContent
*/
// P에 이벤트리스너 추가(call외부함수)
function dbClick(e){
    alert(`${e.currentTarget.textContent}를 더블클릭했습니다.`);
    alert(`${e.currentTarget.tagName}태그를 ${e.type}했습니다.`);
}
document.querySelector("h1").addEventListener("dblclick", dbClick);

// BUTTON에 이벤트리스너 추가
function over(){
    alert(`첫번째 버튼만 오버됩니다.`);
}
document.querySelector("button").addEventListener("mouseover", over);

// BUTTON 들~에 배경스타일 지정
let btns = document.querySelectorAll("button");
for(let i = 0; i < btns.length; i++){
    btns[i].style.background = "skyblue";
}

// BUTTON 들~에 이벤트리스너 추가
function dbClkS(e){
    alert(`${e.currentTarget.textContent}이 ${e.type}되었습니다.`);
}
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("dblclick", dbClkS);
}