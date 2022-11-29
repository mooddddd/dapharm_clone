// 마우스 오버를 할 때마다 해당 div에 on이 붙어야 함
// div를 객체로 만들기? -> div[i] 선택될 때마다 on이 붙음
// 그러면 div[i] 이외의 것들에는 전부 remove 먹여줘야 함
// 해당 인덱스 객체 하나 만들고, 그 값이랑 맞으면 add on, 안맞으면 remove on?

// 이게 돼?,,,,,,,,


const header = document.querySelector(".gnb")

const menu1 = document.querySelector(".menu1")
const menu2 = document.querySelector(".menu2")
const menu3 = document.querySelector(".menu3")
const menu4 = document.querySelector(".menu4")
const menu5 = document.querySelector(".menu5")
const menu6 = document.querySelector(".menu6")

const div = document.querySelectorAll(".sub")




menu1.addEventListener("mouseover",function(){
  div[0].classList.add("on")
})
menu1.addEventListener("mouseout", function () {
  div[0].classList.remove("on");
});

