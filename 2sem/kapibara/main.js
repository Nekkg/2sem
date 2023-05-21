let myicon_1 = document.getElementById("svg_8");
let tHead = document.getElementById("tHead");
myicon_1.addEventListener("mouseover", showPopup_1);
myicon_1.addEventListener("mouseout", hidePopup_1);
function showPopup_1(evt) {
    let iconPos_1 = myicon_1.getBoundingClientRect();
    tHead.style.left = (iconPos_1.right - 500) + "px";
    tHead.style.top = (iconPos_1.top + 0) + "px";
    tHead.style.display = "block";
}
function hidePopup_1(evt) {
  tHead.style.display = "none";
}
let myicon_2 = document.getElementById("svg_11");
let tNeck = document.getElementById("tNeck");
myicon_2.addEventListener("mouseover", showPopup_2);
myicon_2.addEventListener("mouseout", hidePopup_2);
function showPopup_2(evt) {
    let iconPos_2 = myicon_2.getBoundingClientRect();
    tNeck.style.left = (iconPos_2.right - 500) + "px";
    tNeck.style.top = (iconPos_2.top + -20) + "px";
    tNeck.style.display = "block";
}
function hidePopup_2(evt) {
  tNeck.style.display = "none";
}
let myicon_3 = document.getElementById("svg_19");
let tBody = document.getElementById("tBody");
myicon_3.addEventListener("mouseover", showPopup_3);
myicon_3.addEventListener("mouseout", hidePopup_3);
function showPopup_3(evt) {
    let iconPos_3 = myicon_3.getBoundingClientRect();
    tBody.style.left = (iconPos_3.right - 750) + "px";
    tBody.style.top = (iconPos_3.top + -18) + "px";
    tBody.style.display = "block";
}
function hidePopup_3(evt) {
  tBody.style.display = "none";
}
let myicon_4 = document.getElementById("svg_18");
let tPLaps = document.getElementById("tPLaps");
myicon_4.addEventListener("mouseover", showPopup_4);
myicon_4.addEventListener("mouseout", hidePopup_4);
function showPopup_4(evt) {
    let iconPos_4 = myicon_4.getBoundingClientRect();
    tPLaps.style.left = (iconPos_4.right - 600) + "px";
    tPLaps.style.top = (iconPos_4.top + -100) + "px";
    tPLaps.style.display = "block";
}
function hidePopup_4(evt) {
  tPLaps.style.display = "none";
}
let myicon_5 = document.getElementById("svg_23");
let tZLaps = document.getElementById("tZLaps");
myicon_5.addEventListener("mouseover", showPopup_5);
myicon_5.addEventListener("mouseout", hidePopup_5);
function showPopup_5(evt) {
    let iconPos_5 = myicon_5.getBoundingClientRect();
    tZLaps.style.left = (iconPos_5.right - 700) + "px";
    tZLaps.style.top = (iconPos_5.top + -70) + "px";
    tZLaps.style.display = "block";
}
function hidePopup_5(evt) {
  tZLaps.style.display = "none";
}
let myicon_6 = document.getElementById("svg_20");
let tSzadi = document.getElementById("tSzadi");
myicon_6.addEventListener("mouseover", showPopup_6);
myicon_6.addEventListener("mouseout", hidePopup_6);
function showPopup_6(evt) {
    let iconPos_6 = myicon_6.getBoundingClientRect();
    tSzadi.style.left = (iconPos_6.right - 800) + "px";
    tSzadi.style.top = (iconPos_6.top + -15) + "px";
    tSzadi.style.display = "block";
}
function hidePopup_6(evt) {
  tSzadi.style.display = "none";
}