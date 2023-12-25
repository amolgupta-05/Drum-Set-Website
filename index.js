
for(var i=0; i< document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", handleKeyClick);

function handleClick(){
     playAudio(this.innerHTML);
     buttonAnimation(this.innerHTML);
    
}


function handleKeyClick(event){
   
     playAudio(event.key);
     buttonAnimation(event.key);

}


function playAudio(key){
switch (key) {
    case "w":
        var audio = new Audio('./sounds/tom-1.mp3') ;
       
        break;
    case "a" :
        var audio = new Audio('./sounds/tom-2.mp3') ;
        break;
    case "s" :
        var audio = new Audio('./sounds/tom-3.mp3') ;
        break;
    case "d" :
        var audio = new Audio('./sounds/tom-4.mp3') ;
        break;
    case "j" :
        var audio = new Audio('./sounds/crash.mp3') ;
        break;
    case "k":
        var audio = new Audio('./sounds/kick-bass.mp3') ;
        break;
    case "l":
        var audio = new Audio('./sounds/snare.mp3') ;
        break;


    }

audio.play();
}

function buttonAnimation(currentKey){
    var buttonPressed = document.querySelector("."+currentKey) ;
    buttonPressed.classList.add("pressed");
    setTimeout(function () { 
        buttonPressed.classList.remove("pressed")
     }, 200);
}
