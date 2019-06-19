// element selectors
const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

// event listeners
redBlock.addEventListener('click', goToTop);
blueBlock.addEventListener('click', goToTop);
greenBlock.addEventListener('click', goToTop);
pinkBlock.addEventListener('click', goToTop);
grayBlock.addEventListener('click', goToTop);

// functions
function bgOrange() {
  return event.target.style.backgroundColor = 'orange';
}

function lowestNumber() {
  const arr = [];
  arr.push(redBlock.textContent);
  arr.push(blueBlock.textContent);
  arr.push(greenBlock.textContent);
  arr.push(pinkBlock.textContent);
  arr.push(grayBlock.textContent);
  arr.sort();
  return Number(arr[0]);

}

function goToTop() {
  lowestNumber();
  if(Number(this.textContent) >= lowestNumber()) {
    event.target.style.order--;
    this.textContent++;
  }
}
