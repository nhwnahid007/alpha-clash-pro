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

    // console.log('Player pressed', playerPressed);


    //get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    // console.log(playerPressed,currentAlphabet);

    //check matched or not

    if(playerPressed === expectedAlphabet){
      // console.log('You get a point!');

      const currentScore = getTextElementValueById("current-score");
      const updatedScore=currentScore+1;
      setTextElementValueById("current-score",updatedScore);





      //!xxxxxxxxxxxxxxxxxxxxxxxx

      // console.log('You have pressed correctly',expectedAlphabet);

      //update score:
      //1. Get the current score

      // const currentScoreElement=document.getElementById('current-score');
      // const currentScoreText=currentScoreElement.innerText;
      // const currentScore=parseInt(currentScoreText);

      // console.log('current score', currentScore);

      // //2. increase the score by 1

      // const newScore=currentScore+1;
      // //3. show the updated score
      // currentScoreElement.innerText=newScore;
      //4.
      

      //start a new round

      removeBackgroundColorById(expectedAlphabet);
      continueGame();
    }
    else{
        console.log('You missed. You lost life');

        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life',updatedLife);
        






        //!xxxxxxxxxxxxxxxxx
        //step-1: get the current life number
    //     const currentLifeElement=document.getElementById('current-life');
    //    const currentLifeText=currentLifeElement.innerText;
    //    const CurrentLife=parseInt(currentLifeText);
    //     //step-2: reduce the life count
    //     const newLife=CurrentLife-1;


    //     //step-3: display updated life count

    //     currentLifeElement.innerText=newLife;

    //#Alternative

    }

    

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


//hide play
function play(){
    hideElementById('home-screen');
    ShowElementById("play-ground");
    continueGame();
}

function continueGame(){
    //step-1 : generate a randome alpahabet
    const alphabet= getARandomAlphabet();

    // console.log('Your random alphabet is: ',alphabet);

    //set randomly generated alphabet to the string

    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;

    //set background color
    
    setBackgroundColorById(alphabet)

}
