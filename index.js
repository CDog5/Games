const cardwrapper = document.querySelector('.card-wrapper');
const cards = new Array(7);
const startbtn = document.querySelector('#start');
const scrtxt = document.querySelector('#score');
let score;
let before;
function isCorrect(id,guess){
  const thiscard = document.getElementById(id);
  thiscard.innerText = cards[id].no;
  if((thiscard.innerText > before && guess == "upper") || (thiscard.innerText  < before && guess == "lower")){
    thiscard.style.backgroundColor = "#1FD537";
    score+=1;
    scrtxt.innerText = score;
  }
  else{
    thiscard.style.backgroundColor = "#E40010";
  }
  before = parseInt(thiscard.innerText);
}
class StartCard {
  constructor() {
    this.value = Math.floor((Math.random() * 10) + 1);
    before = this.value;
    this.element = document.createElement("div");
    this.element.classList.add('card');
    this.element.style.backgroundColor = "#BEBEBE";
    this.element.innerText = this.value;
;
    cardwrapper.appendChild(this.element);
  }
}
class Card {
    constructor(id) {
      this.id = id;
      this.no = Math.floor((Math.random() * 10) + 1);
      this.value = "";
      this.colour = "#BEBEBE";
      this.element = document.createElement("div");
      this.lower = document.createElement("button");
      this.lower.innerText = "LOWER"
      this.element.classList.add('card');
      this.element.style.backgroundColor = this.colour;
      this.element.innerText = this.value;
      this.element.id = id;
      this.element.appendChild(this.lower);
      this.higher = document.createElement("button");
      this.higher.innerText = "HIGHER"
      this.element.appendChild(this.higher);
      this.higher.id = id;
      this.lower.id = id;
      this.lower.onclick = function(){isCorrect(this.id,"lower");};
      this.higher.onclick = function(){isCorrect(this.id,"upper");};
      cardwrapper.appendChild(this.element);
    }
  }
function start() {
  score = 0;
  scrtxt.innerText = score;
  cardwrapper.innerHTML = "";
  for(var i = 0; i < 7; i++){
    if(i == 0){
      cards[i] = new StartCard();
    }
    else{
      cards[i] = new Card(i);
    }
  }
}
function revealAll(){
    for(var i = 1; i < 7; i++){
      if(cards[i]){
        cards[i].element.innerText = cards[i].no;
      }
    }
  }
startbtn.onclick = start;
