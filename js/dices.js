// import { getScore } from "./logic";
function rollDice() {
  const min = 1;
  const max = 6;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
  if ((result = 3)) {
    sentence = "well done";
  }
}

rollDice();

const rollBtn = document.getElementById("roll");

rollBtn.style.display = 'block'
rollBtn.style.margin = '0 auto'

const theResult = document.getElementById("result");



const sentence = document.createElement("h1");
document.body.appendChild(sentence);
sentence.innerHTML = "text text come on";

sentence.style.textAlign = "center";
sentence.style.margin = "0 auto";
sentence.style.fontSize = "50px";
sentence.style.marginTop = "400px";

rollBtn.addEventListener("click", function () {
  const diceResult = rollDice();
  theResult.innerHTML = `the result is ${diceResult}`;
});


// const score=getScore()
//     console.log(score)
