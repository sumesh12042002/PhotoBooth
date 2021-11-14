var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn")

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}



if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}


let likebtn = document.querySelector(".like_btn1");
let likeIcon =  document.querySelector("#icon1");
let count =  document.querySelector("#count1");

let clicked = false;

likebtn.addEventListener("click", () => {
   if(!clicked){
       clicked = true;
       likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
       count.textContent++;
   }
   else{
       clicked = false;
       likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
       count.textContent--;
   }
});

let likebtn2 = document.querySelector(".like_btn2");
let likeIcon2 =  document.querySelector("#icon2");
let count2 =  document.querySelector("#count2");


let clicked2 = false;

likebtn2.addEventListener("click", () => {
   if(!clicked2){
       clicked2 = true;
       likeIcon2.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
       count2.textContent++;
   }
   else{
       clicked2 = false;
       likeIcon2.innerHTML = `<i class="far fa-thumbs-up"></i>`;
       count2.textContent--;
   }
});

let likebtn3 = document.querySelector(".like_btn3");
let likeIcon3 =  document.querySelector("#icon3");
let count3 =  document.querySelector("#count3");

let clicked3 = false;

likebtn3.addEventListener("click", () => {
   if(!clicked3){
       clicked3 = true;
       likeIcon3.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
       count3.textContent++;
   }
   else{
       clicked3 = false;
       likeIcon3.innerHTML = `<i class="far fa-thumbs-up"></i>`;
       count3.textContent--;
   }
});

let likebtn4 = document.querySelector(".like_btn4");
let likeIcon4 =  document.querySelector("#icon4");
let count4 =  document.querySelector("#count4");

let clicked4 = false;

likebtn4.addEventListener("click", () => {
   if(!clicked4){
       clicked4 = true;
       likeIcon4.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
       count4.textContent++;
   }
   else{
       clicked4 = false;
       likeIcon4.innerHTML = `<i class="far fa-thumbs-up"></i>`;
       count4.textContent--;
   }
});

let likebtn5 = document.querySelector(".like_btn5");
let likeIcon5 =  document.querySelector("#icon5");
let count5 =  document.querySelector("#count5");

let clicked5 = false;

likebtn5.addEventListener("click", () => {
   if(!clicked5){
       clicked5 = true;
       likeIcon5.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
       count5.textContent++;
   }
   else{
       clicked5 = false;
       likeIcon5.innerHTML = `<i class="far fa-thumbs-up"></i>`;
       count5.textContent--;
   }
});



