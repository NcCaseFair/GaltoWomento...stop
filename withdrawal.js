let i = 0;
let h2 = document.querySelector('h2');
let p = document.querySelector('p');
let aqua = document.querySelector('.aqua');
let body = document.querySelector('.body');
let number = document.querySelector('.number');
let percentBar = document.querySelector('.percentBar');
let area = document.querySelector('h1');
const Cuky = document.querySelector("s");
const Muri = document.getElementById('card');

Muri.addEventListener("click", ()=>{
    Cuky.style.display = "none";
});

let interval = setInterval(function(){
    number.innerHTML = i+'<span>%</span>';
    percentBar.style.width = i+'%';
    i++
    if(i == 101){
        clearInterval(interval)
        setTimeout(function(){
            h2.style.innerHTML = 'Play';
            aqua.style.opacity = '0';
            aqua.style.visibility = 'hidden';
            p.style.opacity = '1';
            p.style.visibility = 'visible';
            h2.style.opacity = '1';
            h2.style.visibility = 'visible';

        })
    }
},500)
