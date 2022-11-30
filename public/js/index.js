// 마우스 오버를 할 때마다 해당 div에 on이 붙어야 함
// div를 객체로 만들기? -> div[i] 선택될 때마다 on이 붙음
// 그러면 div[i] 이외의 것들에는 전부 remove 먹여줘야 함
// 해당 인덱스 객체 하나 만들고, 그 값이랑 맞으면 add on, 안맞으면 remove on?

// 이게 돼?,,,,,,,,

//mouseover 걸어줄 엘리먼트
//

// const gnbElement = document.querySelector(".gnb");
// const gnbs = document.querySelectorAll(".gnb>li>.sub");
const header = document.querySelector("#header");


const lis = document.querySelectorAll(".gnb>li")
const divElement = document.querySelectorAll(".gnb>li>.sub")

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function () {
    divElement[i].classList.add("on");
  });
  header.addEventListener("mouseout", function (e) {
    divElement[i].classList.remove("on");
  });
}
// header 네비게이터


// // image 슬라이드
// const ul = document.querySelector(".slider>ul");
// const width = document.querySelector(".slider>ul>li").offsetWidth;
// const totalWidth = width * 3;

// ul.style.width = totalWidth + "px"; // 이미지 크기만큼 width 증가

// let moveLeftAntimation = ul.animate(
//   [
//     { transform: "translateX(0px)" },
//     { transform: "translateX(0px)", offset: 0.85 },
//     { transform: "translateX(-100px)" },
//   ],
//   {
//     duration: 2000,
//   }
// );

// moveLeftAntimation.onfinish = function () {
//   var removeItem = ul.removeChild(ul.firstElementChild);
//   ul.appendChild(removeItem);
//   moveLeftAntimation.play();
// };

const a = document.querySelector(".a")
const b = document.querySelector(".b")
const c = document.querySelector(".c")

const arr = [a,b,c]
const elements = document.querySelectorAll(".visual_rolling > li");

let count = 1;
const intervalId = setInterval(function () {
  for (let i = 0; i < elements.length; i++) {
    if (i === count) {
      elements[i].classList.add("on");
    } else {
      elements[i].classList.remove("on");
    }
  }

  if (++count === 3) count = 0;
}, 5000);
// main_visual - visual_rolling 부분!! 완성

