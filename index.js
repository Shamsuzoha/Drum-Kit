var numberOfDrumButtoms = document.querySelectorAll(".drum").length;
var crash = new Audio("sounds/crash.mp3");
var kick_bass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+ currentkey).classList.add("pressed");
    
    setTimeout(function() {
        document.querySelector("."+ currentkey).classList.remove("pressed");
    }, 100);
} 

for (i = 0; i<numberOfDrumButtoms; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;

        buttonAnimation(buttonInnerHtml);

        switch (buttonInnerHtml) {
            case "w":
                tom1.play()
                break;
            case "a":
                tom2.play()
                break;
            case "s":
                tom3.play()
                break;
            case "d":
                tom4.play()
                break;
            case "j":
                snare.play()
                break;
            case "k":
                crash.play()
                break;
            case "l":
                kick_bass.play()
                break;
            default:
                console.log(buttonInnerHtml)
        }
    });
    document.addEventListener("keydown",function(event) {
        var keydownHTML = event.key;
        buttonAnimation(keydownHTML);
        switch (keydownHTML) {
            case "w":
                tom1.play()
                break;
            case "a":
                tom2.play()
                break;
            case "s":
                tom3.play()
                break;
            case "d":
                tom4.play()
                break;
            case "j":
                snare.play()
                break;
            case "k":
                crash.play()
                break;
            case "l":
                kick_bass.play()
                break;
            default:
                console.log(keydownHTML)
        }
    })
}

