function getComputerChoices() {

    const inputCom = Math.random();

    if( inputCom < 0.34 ) return 'gunting';
    if( inputCom < 0.68 ) return 'batu';
    return 'kertas';
    
}

function getResult(player, com) {
    
    if( player == com ) return 'DRAW!';
    if( player == 'gunting' ) return ( com == 'kertas' ) ? 'YOU WIN!' : 'YOU LOSE!';
    if( player == 'batu' ) return ( com == 'gunting' ) ? 'YOU WIN!' : 'YOU LOSE!';
    if( player == 'kertas' ) return ( com == 'batu' ) ? 'YOU WIN!' : 'YOU LOSE!';
    
}

function imgShuffle() {
    
    const imgCom = document.querySelector('.computer-image');
    const img = ['gunting', 'batu', 'kertas'];
    let i = 0;
    const playTime = new Date().getTime();
    
    setInterval(function() {
        if(new Date().getTime() - playTime > 1000 ) {
            clearInterval;
            return;
        }
        imgCom.setAttribute('src', 'img/' + img[i++] + '.png')
        if(i == img.length) i = 0;
    }, 100);
    
}

var scoreP = 0;
var scoreC = 0;
var resultStyle = document.querySelector('.info');

// when player click the img
const choice = document.querySelectorAll('li img');
choice.forEach(function(c) {
    c.addEventListener('click', function() {
        
        const playerChoices = c.className;
        const computerChoices = getComputerChoices();
        const result = getResult(playerChoices, computerChoices);
        const sPlayer = document.querySelector('.sPlayer p');
        const sCom = document.querySelector('.sCom p');
        
        resultStyle.classList.remove('d');
        resultStyle.classList.remove('w');
        resultStyle.classList.remove('l');
        resultStyle.innerHTML = 'VS.';
        sPlayer.removeAttribute('style');
        sCom.removeAttribute('style');

        imgG = document.querySelector('.gunting');
        imgG.removeAttribute('style');
        imgB = document.querySelector('.batu');
        imgB.removeAttribute('style');
        imgK = document.querySelector('.kertas');
        imgK.removeAttribute('style');

        c.classList.add('animated');
        c.classList.add('bounce');

        imgShuffle();
        
        setTimeout(function() {
            // result
            const info = document.querySelector('.info');
            info.innerHTML = result;

            // computer image
            const imgCom = document.querySelector('.computer-area img')
            imgCom.setAttribute('src', 'img/' + computerChoices + '.png');

            // scoring and styling
            if (result == 'YOU WIN!') { 
                scoreP = sPlayer.innerHTML = scoreP + 1;
                resultStyle.classList.remove('l');
                resultStyle.classList.remove('d');
                resultStyle.classList.add('w');
                sPlayer.style.backgroundColor = 'coral';
                sPlayer.style.color = 'white';
                c.style.borderBottom = '2px solid #dad8d8';
                
            }else if (result == 'YOU LOSE!') {
                scoreC = sCom.innerHTML = scoreC + 1;
                resultStyle.classList.remove('w');
                resultStyle.classList.remove('d');
                resultStyle.classList.add('l');
                sCom.style.backgroundColor = 'coral';
                sCom.style.color = 'white';
                c.style.borderBottom = '2px solid #dad8d8';
            }else {
                resultStyle.classList.remove('w');
                resultStyle.classList.remove('l');
                resultStyle.classList.add('d');
                c.style.borderBottom = '2px solid #dad8d8';
            }
            c.classList.remove('animated');
            c.classList.remove('bounce');

        }, 1000);
    });
});
