var h1 = document.getElementsByTagName("h1");
var h3 = document.getElementsByTagName("h3");
var audio = document.getElementById("audio");
var playBTN = document.getElementById("PlayBTN");
var count = 0;


function play(){
    if(count == 0){
        count = 1;
        audio.play();
       }else{
        count = 0;
        audio.play();
        }
   
   
   audio.addEventListener("click", ()=>{
       audio.onclick(play);
   });
   
   }

const cards = document.querySelectorAll(".card");
const ruleBtn = document.querySelector("button");
var spinBTN = document.querySelector("abbr");

setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = seconds - 12;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night; 
  });

ruleBtn.addEventListener("click", ()=>{
      ruleBtn.style.display = "none";
      ruleBtn.style.transform = "rotate(-45deg)";
      ruleBtn.style.transition = "all .1s ease";
});

spinBTN.addEventListener("click", ()=>{
    spinBTN.style.filter = "blur(19px)";
});

let cardOne, cardTwo;
let disableDeck = false;

  h3[0].innerHTML = "You Have 5 Minutes To Find 3 Generators";
    
    var sec         = 300,
        countDiv    = document.getElementById("timer"),
        secpass,
        countDown   = setInterval(function () {
            'use strict';
            
            secpass();
        }, 300);
    
    function secpass() {
        'use strict';
        
        var min     = Math.floor(sec / 60),
            remSec  = sec % 60;
        
        if (remSec < 10) {
            
            remSec = '0' + remSec;
        
        }
        if (min < 10) {
            
            min = '0' + min;
        
        }
        countDiv.innerHTML = min + ":" + remSec;
        
        if (sec > 0) {
            
            sec = sec - 1;
            
        } else {
            
            clearInterval(countDown);
            
            countDiv.innerHTML = 'Sorry try Again!'; //setting up python function
            
            secpass(disableDeck = true); // times up clickCard is off

            secpass(clearInterval)
            setInterval(spinBTN)
            Enumerator                          
        }
    }

// refresh

function flipCard(e) { 
            let clickedCard = e.target; //getting user clicked card
            if(clickedCard !== cardOne && !disableDeck) {
            clickedCard.classList.add("flip");
            if(!cardOne) {
                // return the cardOne value to clickedCard
                return cardOne = clickedCard;
            }
            cardTwo = clickedCard;
            
            let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg =cardTwo.querySelector("img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
}
function matchCards(img1, img2) {
    if(img1 === img2) {
      matchedCards = alert("Right Click Mouse Choose <inspect> check console for(score)h1 for SCOREBOARD"),
      matchedCards = console.log("h1"),
      h1[0].innerHTML = `<br>Hurry!
                                
      </br>`;

    let disableDeck = true;
     // increment matched value by 1
      // if matched value is 8 it means that user has matched all cards(8 * 2 = 16cards)
      if(matchCards == 8) {
        setTimeout(() => {
            return shuffleCard();
        }, 50);
      }
      cardOne.removeEventListener("click", flipCard);
      cardTwo.removeEventListener("click", flipCard);
      cardOne = cardTwo = "";
      return disableDeck = false;
    }
    setTimeout(() => {
    cardOne.classList.add("animate");
    cardTwo.classList.add("animate");
    }, 400);

    setTimeout(() =>{
        cardOne.classList.remove("animate", "flip");
        cardTwo.classList.remove("animate", "flip");
        cardOne = cardTwo = ""; 
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matchCards = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr = [1, 2, 4, 3, 7, 6, 5, 8, 8, 3, 2, 1, 4, 5, 6, 3, 7];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `images/img-${arr[index]}.png`;
        card.addEventListener("click", flipCard);
    })
    
    shuffleCard();

}
cards.forEach(card => { //adding click event to all cards
    card.addEventListener("click", flipCard);
    
});