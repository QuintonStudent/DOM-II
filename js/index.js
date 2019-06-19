// functions
function beepBeep() {
  return alert('beep beep');
}

function bgPink() {
  return event.target.style.backgroundColor = 'pink';
}

function bgDodgerBlue() {
  return event.target.style.backgroundColor = 'dodgerblue';
}

function bgSeaGreen() {
  return event.target.style.backgroundColor = 'seagreen';
}

function textOrange() {
  return event.target.style.color = 'orange';
}

function resize() {
  let width = 100;
  return event.target.style.width = `${width-50}%`;
}

function preDefault() {
  return event.preventDefault();
}

// element selectors
const logoHeading = document.querySelector('.logo-heading');
const navBar = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link');
const busImg = document.querySelector('.home img');
const buttons = document.querySelectorAll('.btn');
const wholePage = document.querySelector('html');
const textBoxes = document.querySelectorAll('section input');

// event listeners
logoHeading.addEventListener('click', beepBeep);
navBar.addEventListener('click', bgPink);
navLink.forEach(item => {
  item.addEventListener('mouseover', textOrange);
});
busImg.addEventListener('wheel', resize);
buttons.forEach(item => {
  item.addEventListener('drag', bgDodgerBlue);
});
buttons.forEach(item => {
  item.addEventListener('resize', bgPink);
});
wholePage.addEventListener('dblclick', bgPink);
// textBoxes.forEach(item => {
//   item.addEventListener('select', bgDodgerBlue);
// });
textBoxes.forEach(item => {
  item.addEventListener('drag', bgDodgerBlue);
});
textBoxes.forEach(item => {
  item.addEventListener('drop', bgPink);
});
// textBoxes.forEach(item => {
//   item.addEventListener('focus', bgSeaGreen);
// });
