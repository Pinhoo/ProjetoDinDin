let actualImage = 0;
const images = document.getElementsByClassName('imgList');

setInterval(carrocel, 1500 );

function carrocel(){
    console.log("foi Antes")
    const selected = document.getElementsByClassName('atual');
    selected[0].classList.remove('atual');

    actualImage++;

    if(actualImage >= images.length){
        actualImage = 0;
    }

    images[actualImage].classList.add('atual');
    console.log("foi DPS")
    
}