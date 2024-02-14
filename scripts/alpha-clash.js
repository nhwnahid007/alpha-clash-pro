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

// function handleKeyboardButtonPress(){
//     console.log('Button pressed');
// }
// //capture keyboard keypress
// document.addEventListener('keyup', handleKeyboardButtonPress);

function handleKeyboardKeyUpEvent(event){
    // console.log(event.key); //jet click korbo seta dekhabe

    const playerPressed=event.key;

    console.log('Player pressed', playerPressed);


    //get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    console.log(playerPressed,currentAlphabet);

    //check matched or not

    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
    }
    else{
        console.log('You missed. You lost life');
    }

    

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


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
