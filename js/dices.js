function rollDice() {
  const min = 1;
  const max = 6;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

rollDice();

const rollBtn = document.getElementById("roll");

rollBtn.style.display = "block";
rollBtn.style.margin = "0 auto";
rollBtn.style.fontSize = '40px'
rollBtn.style.backgroundColor = 'red'

const theResult = document.getElementById("result");

theResult.style.textAlign = "center";
theResult.style.fontStyle ='oblique'
theResult.style.fontSize = '35px'


const sentence = document.createElement("h1");
document.body.appendChild(sentence);

sentence.style.textAlign = "center";
sentence.style.margin = "0 auto";
sentence.style.fontSize = "50px";
sentence.style.marginTop = "400px";

let consecutiveLows = 0;
let consecutiveHighs = 0;

rollBtn.addEventListener("click", function () {
  const diceResult = rollDice();
  theResult.innerHTML = `The result is ${diceResult}`;

  console.log(diceResult);
  console.log(consecutiveHighs);
  console.log(consecutiveLows);

  if (diceResult <= 3) {
    consecutiveLows++;
    sentence.innerHTML = "unlucky...";
    consecutiveHighs = 0;
  } else {
    consecutiveHighs++;
    sentence.innerHTML = "CARRY ON CHAMPION";
    consecutiveLows = 0;
  }

  if (consecutiveHighs === 4) {
    location.href = "./betterending.html";
  }

  if (consecutiveLows === 4) {
    location.href = "./goodending.html";
  }
});
