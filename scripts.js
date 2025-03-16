// Counter

const decreaseBtn = document.getElementById("userDecrease");
const resetBtn = document.getElementById("userReset");
const increaseBtn = document.getElementById("userIncrease");
const countLabel = document.getElementById("output");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count;
}