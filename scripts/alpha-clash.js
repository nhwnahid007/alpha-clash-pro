// function play(){
// //step:1 Hide the home screen to hide the screen add the class hidden to the home section
// const homeSection = document.getElementById("home-screen");
// //add class
// homeSection.classList.add('hidden');

// //show the playground
// const playgroundSection = document.getElementById("play-ground");

// playgroundSection.classList.remove('hidden')

// //  console.log(playgroundSection.classList);


// }

//hide play
function play(){
    hideElementById('home-screen');
    ShowElementById("play-ground");
    continuGame();
}

function continuGame(){
    //step-1 : generate a randome alpahabet
    const alphabet= getARandomAlphabet();
    console.log('Your random alphabet is: ',alphabet);

    //set randomly generated alphabet to the string

    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;

    //set background color
    
    setBackgroundColorById(alphabet)

}
