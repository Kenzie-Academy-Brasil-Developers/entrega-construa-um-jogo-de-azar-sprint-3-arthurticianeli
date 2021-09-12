//***************** VARIABLES *************************

const playButton = document.getElementById("clickButton");

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

const containerChoose = document.querySelector(".containerChoose")
const containerLoading = document.querySelector(".containerLoading")
const containerComputer = document.querySelector(".containerComputer")
const containerPlay = document.querySelector(".containerPlay")

const containerDraw = document.querySelector(".containerDraw")
const containerWon = document.querySelector(".containerWon")
const containerLost = document.querySelector(".containerLost")

const rockComputer = document.querySelector("#rockComputer")
const paperComputer = document.querySelector("#paperComputer")
const scissorsComputer = document.querySelector("#scissorsComputer")

const back = document.querySelector("body")

// ***************** FUNCTIONS ************************

const showChoose = function(){
    containerChoose.classList.add("fadeIn")
    containerChoose.style.display = "flex"  

    containerPlay.style.display = "none"
}

const showLoading = function(){
    containerChoose.style.display = "none"  

    containerLoading.classList.add("fadeIn")
    containerLoading.style.display = "flex"
}



// ***************** EVENT LISTENERS *******************

// ***** CLICK PLAY *****
playButton.addEventListener("click", function(){
        
    containerPlay.classList.add("fadeOut")

    setTimeout (showChoose, 1000)
    
})

// ***** CLICK ROCK *****

rockButton.addEventListener("click", function(){
        
    const choose = 1
    
    let computer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    containerChoose.classList.add("fadeOut")
    
    setTimeout (showLoading, 1000)

    // ***** SHOW COMPUTER PICK *****
    setTimeout(function() {
        
        containerLoading.classList.add("fadeOut")
    
        rockComputer.classList.add("fadeIn")
        paperComputer.classList.add("fadeIn")
        scissorsComputer.classList.add("fadeIn")   
    
        setTimeout(() => {
            containerLoading.style.display = "none";
            
            if (computer === 1){
                
               rockComputer.style.display = "flex";
               
            } else if (computer === 2){
                paperComputer.style.display = "flex"
                
            } else {
                scissorsComputer.style.display = "flex"
                
            }
            
            containerComputer.classList.add("fadeIn")
            containerComputer.style.display = "flex";
            
        }, 1000);
        
        
    }, 6000);
    
    // ***** SHOW RESULT *****

    setTimeout(function() { 
     
        containerComputer.classList.add("fadeOut")
        
        setTimeout(() => {
            containerComputer.style.display = "none";
            
            if (choose === computer){
                containerDraw.style.display = "flex";
            } else if (computer === 2) {
                containerLost.style.display = "flex";
            } else {
                containerWon.style.display = "flex";
            }
                        
        }, 1000);

    }, 9000);
})

// ***** CLICK PAPER *****

paperButton.addEventListener("click", function(){
    
    const choose = 2

    let computer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    containerChoose.classList.add("fadeOut")
    
    setTimeout (showLoading, 1000)

   // ***** SHOW COMPUTER PICK *****
   setTimeout(function() {
        
    containerLoading.classList.add("fadeOut")

    rockComputer.classList.add("fadeIn")
    paperComputer.classList.add("fadeIn")
    scissorsComputer.classList.add("fadeIn")   

    setTimeout(() => {
        containerLoading.style.display = "none";
        
        if (computer === 1){
            
           rockComputer.style.display = "flex";
           
        } else if (computer === 2){
            paperComputer.style.display = "flex"
            
        } else {
            scissorsComputer.style.display = "flex"
        }
        
        containerComputer.classList.add("fadeIn")
        containerComputer.style.display = "flex";
        
    }, 1000);
    
    
}, 6000);

    // ***** SHOW RESULT *****

        setTimeout(function() {

            containerComputer.classList.add("fadeOut")

            setTimeout(() => {

            containerComputer.style.display = "none";
        
            if (choose === computer){
                containerDraw.style.display = "flex";
            } else if (computer === 3) {
                containerLost.style.display = "flex";
            } else {
                containerWon.style.display = "flex";
            }
                    
        }, 1000);

    }, 9000);
})

// ***** CLICK SCISSORS *****

scissorsButton.addEventListener("click", function(){
    
    const choose = 3

    let computer = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    containerChoose.classList.add("fadeOut")
    
    setTimeout (showLoading, 1000)

    // ***** SHOW COMPUTER PICK *****
    setTimeout(function() {
        
        containerLoading.classList.add("fadeOut")
    
        rockComputer.classList.add("fadeIn")
        paperComputer.classList.add("fadeIn")
        scissorsComputer.classList.add("fadeIn")   
    
        setTimeout(() => {
            containerLoading.style.display = "none";
            
            if (computer === 1){
                
               rockComputer.style.display = "flex";
               
            } else if (computer === 2){
                paperComputer.style.display = "flex"
                
            } else {
                scissorsComputer.style.display = "flex"
                
            }
            
            containerComputer.classList.add("fadeIn")
            containerComputer.style.display = "flex";
            
        }, 1000);
        
        
    }, 6000);

    // ***** SHOW RESULT *****

    setTimeout(function() { 
     
        containerComputer.classList.add("fadeOut")
        
        setTimeout(() => {
            containerComputer.style.display = "none";

            if (choose === computer){
                containerDraw.style.display = "flex";
            } else if (computer === 1) {
                containerLost.style.display = "flex";
            } else {
                containerWon.style.display = "flex";
            }
                    
        }, 1000);

    }, 9000);
})


// ************* CLICK PLAYAGAIN ************

back.addEventListener("click", function(event){

    if(event.target.tagName === "P"){

    containerDraw.classList.toggle("fadeOut") //ON - draw out
    containerLost.classList.toggle("fadeOut") //ON - lost out
    containerWon.classList.toggle("fadeOut") //ON - won out
    
    setTimeout(() => {
        containerDraw.style.display = "none";
        containerLost.style.display = "none";
        containerWon.style.display = "none";
    }, 1000);
    
    setTimeout(() => {
        document.querySelector(".containerPlay").style.display = "flex";
    }, 2000);
    }

    // ************** RESET ****************

    setTimeout(() => {

        computer = 0

        containerChoose.classList.remove("fadeOut")
        containerComputer.classList.remove("fadeOut")
        containerLoading.classList.remove("fadeOut")
        containerPlay.classList.remove("fadeOut")
        containerDraw.classList.remove("fadeOut")
        containerLost.classList.remove("fadeOut")
        containerWon.classList.remove("fadeOut")
        containerChoose.classList.remove("fadeIn")
        containerComputer.classList.remove("fadeIn")
        containerLoading.classList.remove("fadeIn")
        containerPlay.classList.remove("fadeIn")
        containerDraw.classList.remove("fadeIn")
        containerLost.classList.remove("fadeIn")
        containerWon.classList.remove("fadeIn")

        rockComputer.style.display = "none";
        paperComputer.style.display = "none";
        scissorsComputer.style.display = "none";
    }, 2000)
})