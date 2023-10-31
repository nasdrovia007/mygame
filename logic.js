class Player {
  constructor() {
    this.width = 5;
    this.height = 10;
    this.positionX = 50;
    this.positionY = 50;

    this.thePlayer = document.getElementById("player");
    this.thePlayer.style.width = this.width + "vw";
    this.thePlayer.style.height = this.height + "vh";
    this.thePlayer.style.left = this.positionX + "vw";
    this.thePlayer.style.bottom = this.positionY + "vh";
    this.coins = [];
  }
  moveLeft() {
    this.positionX--;
    this.thePlayer.style.left = this.positionX + "vw";
    this.coin();
  }
  moveRight() {
    this.positionX++;
    this.thePlayer.style.left = this.positionX + "vw";
    this.coin();
  }
  moveDown() {
    this.positionY--;
    this.thePlayer.style.bottom = this.positionY + "vh";
    this.coin();
  }
  moveUp() {
    this.positionY++;
    this.thePlayer.style.bottom = this.positionY + "vh";
    this.coin();
  }
}

const jimmy = new Player();
const allTheCoins = [];

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      jimmy.moveLeft();
      break;
    case "ArrowRight":
      jimmy.moveRight();
      break;
    case "ArrowUp":
      jimmy.moveUp();
      break;
    case "ArrowDown":
      jimmy.moveDown();
      break;
  }
});

class Money {
  constructor() {
    this.width = 2;
    this.height = 4;
    this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
    this.positionY = Math.floor(Math.random() * (100 - this.height + 1));

    this.createDomElement();
  }

  createDomElement() {
    this.theMoney = document.createElement("div");

    this.theMoney.classList.add("coins");
    this.theMoney.style.width = this.width + "vw";
    this.theMoney.style.height = this.height + "vh";
    this.theMoney.style.left = this.positionX + "vw";
    this.theMoney.style.bottom = this.positionY + "vh";
    this.theMoney.style.borderRadius = 25 + "px";

    const parentElm = document.getElementById("skyview");
    parentElm.appendChild(this.theMoney);
  }
}

function createCoin() {
  const coin = new Money();
  allTheCoins.push(coin);
}

function checkCollison() {
  for (let i = allTheCoins.length - 1; i >= 0; i--) {
    const coin = allTheCoins[i];

    if (
      jimmy.positionX < coin.positionX + coin.width &&
      jimmy.positionX + jimmy.width > coin.positionX &&
      jimmy.positionY < coin.positionY + coin.height &&
      jimmy.positionY + jimmy.height > coin.positionY
    ) {
      console.log(coin);
      coin.theMoney.remove();
      allTheCoins.splice(i, 1);
    }
  }
}

const myGameInterval = setInterval(() => {
  checkCollison();
}, 100);

const coinInterval = setInterval(createCoin, 1000);
