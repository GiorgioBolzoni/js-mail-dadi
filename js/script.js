const btnCheck = document.getElementById('btn-check');
const btnPlay = document.getElementById('btn-play');
const botScore = document.getElementById('bot-result');
const playerScore = document.getElementById('player-result');

// creo evento al click del bottone
btnCheck.addEventListener('click', function(){
    // inserisco una lista di mail
    const users = ['giorgio@gmail.com', 'clelia@gmail.com', 'stefano@gmail.com', 'marco@gmail.com'];
    const emlCheck = document.querySelector('input').value;
    console.log(emlCheck)
    // console.log(users)
    let checkMex = document.getElementById('check-mex')
    let presente = 'false'
    // const confirm = document.createElement('div')
    // if(users.includes(emlCheck)){
    //     checkMex.classList.remove('d-none');
    //     checkMex.innerHTML = 'Presente!';
    //     console.log(checkMex)

    // }else{
    //     checkMex.classList.remove('d-none');
    //     checkMex.innerHTML = 'La mail indicata non è registrata!';
    //     console.log(checkMex)
    // }
//inserisco check
    for (let i = 0; i < users.length; i++) {
        let userCorrente = users[i];
        if(emlCheck.includes(users[i])){
            presente = true
        } 
    
    }
    let text;
    if(presente){
        text = 'Presente!';
    } else {
        text = 'La mail indicata non è registrata!';
    }
    checkMex.innerText = text
    checkMex.classList.remove('d-none');
})


//esercizio dadi

btnPlay.addEventListener('click', function(){
    // inserisco una lista di mail
    const results = ['1', '2', '3', '4' , '5', '6'];
    console.log(results)
    const resultsBot = getRndInteger(0, results.length-1);
    results[resultsBot];
    console.log(results[resultsBot])
    const resultsPlayer = getRndInteger(0, results.length-1);
    results[resultsPlayer];
    console.log(results[resultsPlayer])
    if (resultsBot === resultsPlayer){
        botScore.innerHTML = `${resultsBot} ---- bot:  DRAW`
        playerScore.innerText = `${resultsPlayer} ---- player:  DRAW`
    } else if(resultsBot > resultsPlayer){
        botScore.innerText = `${resultsBot} ---- bot:  WIN`
        playerScore.innerText = `${resultsPlayer} ---- player:  LOST`
    } else if(resultsBot < resultsPlayer){
        botScore.innerText = `${resultsBot} ---- bot:  LOST`
        playerScore.innerText = `${resultsPlayer} ---- player:  WIN`
    }

})


//utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}