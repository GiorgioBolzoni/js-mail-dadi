const btnCheck = document.getElementById('btn-check');
// creo evento al click del bottone
btnCheck.addEventListener('click', function(){
    // inserisco una lista di mail
    const users = ['giorgio@gmail.com', 'clelia@gmail.com', 'stefano@gmail.com', 'marco@gmail.com'];
    const emlCheck = document.querySelector('input').value;
    console.log(emlCheck)
    // console.log(users)
    let checkMex = document.getElementById('check-mex')
    
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
        if(userCorrente === emlCheck){
            checkMex.classList.remove('d-none');
            checkMex.innerHTML = 'Presente!';
            // console.log(checkMex)
        } else{
            checkMex.classList.remove('d-none');
            checkMex.innerHTML = 'La mail indicata non è registrata!';
            // console.log(checkMex)
        }
    
    }
})

//utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}