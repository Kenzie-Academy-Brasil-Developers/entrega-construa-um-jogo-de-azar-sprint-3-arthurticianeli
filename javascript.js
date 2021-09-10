const playButton = document.getElementById("clickButton");

playButton.addEventListener("click", function(){

    document.querySelector(".containerPlay").style.display = "none";
    
    document.querySelector(".containerChoose").style.display = "flex";

})

const computer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click", function(){
      
    document.querySelector(".containerChoose").style.display = "none";
    
    document.querySelector(".containerLoading").style.display = "flex";

    setTimeout(function() {

        document.querySelector(".containerLoading").style.display = "none";

    const choose = 1

    if (choose === computer){
    
        document.querySelector(".containerDraw").style.display = "flex";
    
    } else if (computer === 2) {
    
        document.querySelector(".containerLost").style.display = "flex";

    } else {
    
        document.querySelector(".containerWon").style.display = "flex";
    }
    
    }, 3000);

})

paperButton.addEventListener("click", function(){

    document.querySelector(".containerChoose").style.display = "none";
    
    document.querySelector(".containerLoading").style.display = "flex";

    setTimeout(function() {

        document.querySelector(".containerLoading").style.display = "none";

    const choose = 2

    if (choose === computer){
    
        document.querySelector(".containerDraw").style.display = "flex";
    
    } else if (computer === 3) {
    
        document.querySelector(".containerLost").style.display = "flex";

    } else {
    
        document.querySelector(".containerWon").style.display = "flex";
    }
    
    }, 3000);

})

scissorsButton.addEventListener("click", function(){

    document.querySelector(".containerChoose").style.display = "none";
    
    document.querySelector(".containerLoading").style.display = "flex";

    setTimeout(function() {

        document.querySelector(".containerLoading").style.display = "none";

    const choose = 3

    if (choose === computer){
    
        document.querySelector(".containerDraw").style.display = "flex";
    
    } else if (computer === 1) {
    
        document.querySelector(".containerLost").style.display = "flex";

    } else {
    
        document.querySelector(".containerWon").style.display = "flex";
    }
    
    }, 3000);

})

const back = document.querySelector("body")

back.addEventListener("click", function(event){
 
    if(event.target.tagName === "P"){

    document.querySelector(".containerDraw").style.display = "none";

    document.querySelector(".containerLost").style.display = "none";

    document.querySelector(".containerWon").style.display = "none";
    
    document.querySelector(".containerPlay").style.display = "flex";
    }
})