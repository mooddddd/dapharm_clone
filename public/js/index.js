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
  lis[i].addEventListener("mouseover", function (e) {
    divElement[i].classList.add("on");
  });
  header.addEventListener("mouseout", function (e) {
    divElement[i].classList.remove("on");
  });

}

// header 네비게이터


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


// content_right new_rolling 부분 시작
let index = 0;
const margin = 10;

const rolling = document.querySelector(".new_rolling");
const img = document.querySelectorAll(".new_rolling>li");
const imgcount = img.length;
const imgWidth = 441;
const prev = document.querySelector(".prev_btn");
const next = document.querySelector(".next_btn");

makeClone();

function makeClone() {
  for (let i = 0; i < imgcount; i++) {
    let cloneImg = img[i].cloneNode(true);
    cloneImg.classList.add("clone");
    rolling.appendChild(cloneImg);
  }
  for (let i = imgcount - 1; i >= 0; i--) { //i값은 인덱스로 받으니까 -1 해야지!
    let cloneImg = img[i].cloneNode(true);
    cloneImg.classList.add("clone");
    rolling.prepend(cloneImg);
  }
  updatewidth();
  setInitialPos();

  setTimeout(function () {
    rolling.classList.add("animated");
  }, 100);
}

function updatewidth() {
  let currentImgs = document.querySelectorAll(".new_rolling>li");
  // 왜 다시 선언하느냐!? -> 클론으로 리스트가 늘어났으니까 다시 선언해줌! (맞나..)
  let newImgCount = currentImgs.length;
  let newWidth = (imgWidth + margin) * newImgCount - margin + "px";
  rolling.style.width = newWidth;
}

function setInitialPos() {
  let initialTranslateValue = -(imgWidth + margin) * imgcount;
  rolling.style.transform = "translateX(" + initialTranslateValue + "px)";
}

next.addEventListener("click", function () {
  moveImg(index + 1);
});

prev.addEventListener("click", function () {
  moveImg(index - 1);
});

function moveImg(num) {
  rolling.style.left = -(num * (imgWidth + margin)) + "px";
  index = num;
  if (index === imgcount || -index=== imgcount) {
    setTimeout(function () {
      rolling.classList.remove("animated");
      rolling.style.left = "0px";
      index = 0;
    }, 1000);

    setTimeout(function () {
      rolling.classList.add("animated");
    }, 1100);
  }
}

let interval = setInterval(() => {
  index += 1;
  moveImg(index);
  if (index === 3) index = 0;
}, 5000); // 인터벌로 무한대로 돌게끔 해줌! 이거 다시 수정해서 멈춰야함...
// content_right new_rolling 부분 완성!!!



// 똑같은 방법으로 content_left rolling 완성함!
const rolling2 = document.querySelector(".brand_rolling");
const img2 = document.querySelectorAll(".brand_rolling>li");

let index2 = 0

const imgcount2 = img2.length;
const imgWidth2 = 204;

const prev2 = document.querySelector(".prev_btn2");
const next2 = document.querySelector(".next_btn2");

makeClone2();

function makeClone2() {
  for (let i = 0; i < imgcount2; i++) {
    let cloneImg2 = img2[i].cloneNode(true);
    cloneImg2.classList.add("clone");
    rolling2.appendChild(cloneImg2);
  }
  for (let i = imgcount2 - 1; i >= 0; i--) {
    let cloneImg2 = img2[i].cloneNode(true);
    cloneImg2.classList.add("clone");
    rolling2.prepend(cloneImg2);
  }

  updatewidth2();
  setInitialPos2();

  setTimeout(function () {
    rolling2.classList.add("animated");
  }, 100);
}

function updatewidth2() {
  let currentImgs2 = document.querySelectorAll(".brand_rolling>li");
  let newImgCount2 = currentImgs2.length;
  let newimgWidth2 = currentImgs2.length * (imgWidth2 + margin) - margin + "px";
  rolling2.style.width = newimgWidth2;
}

function setInitialPos2() {
  let initialTranslateValue2 = -(imgWidth2 + margin) * imgcount2;
  rolling2.style.transform = "translateX(" + initialTranslateValue2 + "px)";
}

function moveImg2(num) {
  rolling2.style.left = -(num * (imgWidth2 + margin)) + "px";
  index2 = num;
  if (index2 === imgcount2 || -index2 === imgcount2) {
    setTimeout(function () {
      rolling2.classList.remove("animated");
      rolling2.style.left = "0px";
      index2 = 0;
    }, 1000);
    setTimeout(function () {
      rolling2.classList.add("animated");
    }, 1100);
  }
}

next2.addEventListener("click", function () {
  moveImg2(index2 + 1);
});

prev2.addEventListener("click", function () {
  moveImg2(index2 - 1);
});

let interva2 = setInterval(() => {
  index2 += 1;
  moveImg2(index2);
  if (index2 === 3) index2 = 0;
}, 5000);

// content_left 같은 방법응로 완료!!!!!!!!!!!

