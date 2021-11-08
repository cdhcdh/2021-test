const title = document.querySelector(".js-title");
const range = document.getElementById("js-range");
const form = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const myNum = form.querySelector("input");
const resultDisplay = result.querySelector("span");//상수선언으로 html과 js값을 연결

function selectBar()//select bar 관련함수
{
    range.oninput = printMax;
}

function printMax()//최대값을 출력해주는 함수
{
    const maxNumber = title.querySelector("span");
    maxNumber.innerHTML = range.value;//HTML에 해당값 출력
}

function getRand(e){//랜덤숫자를 설정해주는 함수, e: 모든것을 가지고 있는 오브젝트
    e.preventDefault();//버튼을 눌렀을때 시킨일이 아닌 동작을 하는 것을 방지하는 함수
    const userNum = parseInt(myNum.value, 10);//문자열을 정수로 바꾸어주는 함수, 10을 넣어 10진수로 바꾸었습니다.
    const max = range.value;
    const machineNum = Math.ceil(Math.random() * max);//랜덤함수
    referee(userNum, machineNum);
}

function referee(userNum, machineNum)//심판함수: 대소비교를 해주는 함수
{
    var result = 0;
    result = (userNum > machineNum) + (userNum < machineNum) * 2 + (userNum == machineNum) * 3;
    //case문의 값 1,2,3을 위해 a>b 이면 1, a<b이면 2, a==3이면 3이나오도록 하는 수식
    switch (result)
    {
        case 1:
     resultDisplay.innerHTML=//HTML에 아래내용 출력
        `you choose: ${userNum} <br /> the machine choose: ${machineNum} <br /> you win!`;
        break;

        case 2:
     resultDisplay.innerHTML=//HTML에 아래내용 출력
        `you choose: ${userNum} <br /> the machine choose: ${machineNum} <br /> you lost!`;
        break;

        case 3:
     resultDisplay.innerText=//HTML에 아래내용 출력
        `you choose: ${userNum} <br /> the machine choose: ${machineNum} <br /> restart`;
        break;
    }

}

selectBar();//함수 호출
form.addEventListener("submit", getRand);//submit 행동이 일어날때 getrand함수를 실행