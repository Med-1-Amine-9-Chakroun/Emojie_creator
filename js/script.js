var rightBtn = document.getElementById("right");
var leftBtn = document.getElementById("left");
var middleOne = document.getElementById('middle-1');
var middleTow = document.getElementById('middle-2');
var middleThree = document.getElementById('middle-3');
var i = 0;


var color = document.getElementById("m-1-color");
var emojieCercle = document.getElementById('cercle');
color.addEventListener('click', function(e){
    e = e.target;
    if (e.id == "red"){
        emojieCercle.style.backgroundColor = "#c23131"
    }
    else  if (e.id == "blue"){
        emojieCercle.style.backgroundColor = "#53a4cb"
    }
    else if (e.id == "green"){
        emojieCercle.style.backgroundColor = "#227122"
    }
});
var emogieEye = document.getElementById("emojie-eyes");
var emogieMouth = document.getElementById("emojie-mouth");
var imgs = document.querySelectorAll("img");
imgs.forEach(function(img) {
    img.addEventListener('click', function(){
        if (img.id == 'eyes'){
            emogieEye.src = img.src;
        }
        else if (img.id == 'mouth'){
            emogieMouth.src = img.src;
        }
    });
});


function changeDiv(i) {
   
 
    if (i === 0){
        middleOne.classList.add("visible");
        middleOne.classList.remove("hidden");
        middleTow.classList.add("hidden");
        middleTow.classList.remove("visible");
        middleThree.classList.add("hidden");
        middleThree.classList.remove("visible");
        
    } 
    else if (i === 1){
        middleOne.classList.add("hidden");
        middleOne.classList.remove("visible");
        middleTow.classList.add("visible");
        middleTow.classList.remove("hidden");
        middleThree.classList.add("hidden");
        middleThree.classList.remove("visible");
    }
    else if (i === 2){
        middleOne.classList.add("hidden");
        middleOne.classList.remove("visible");
        middleTow.classList.add("hidden");
        middleTow.classList.remove("visible");
        middleThree.classList.add("visible");
        middleThree.classList.remove("hidden");
    }            
}

rightBtn.addEventListener('click', function(){
  
    if (i < 0){
        i = 0;
    }
    i++;
    changeDiv(i);
});
leftBtn.addEventListener('click', function(){
    if (i > 2){
        i = 2;
    }
    i--;
    changeDiv(i);
});


let hello = "hello world";
const greeting = (hello) =>{
    return `sdsd ${hello}`;
}
function hy (hello){
    return `welcome ${hello}`;
}
console.log(greeting('eeee'));