
function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function ShowElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getARandomAlphabet(){
    //get or create an alphabet array
    const alpahabetString='abcdefghijklmnopqrstuvwxyz' ;
    const alpahabets=alpahabetString.split('');
    // console.log(alpahabets); 
    //get a random index between 0-25
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    // console.log(index);

    const alphabet =alpahabets[index];
    // console.log(index,alphabet);

    return alphabet;

}

//  function setBackgroundColorById(elementId) {
//    const element = document.getElementById(elementId);
//    element.classList.add('bg-orange-400');
//  }

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("bg-orange-400");

}

function removeBackgroundColorById(elementId){

    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400')

}