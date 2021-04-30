let lo = Math.round(Math.random() * 2);
let detect = new MobileDetect(window.navigator.userAgent)



if (detect.os() == 'AndroidOS') {
    document.querySelector('.main').addEventListener('touchstart', function(){
        lo = Math.round(Math.random() * 2);
        document.querySelector('.popcat').classList.add('op');
        soundClick();
        document.querySelector('.score').innerHTML++;
        if(lo === 0) {
            document.querySelector('.score').classList.add('wtf');
        } else if(lo === 1) {
            document.querySelector('.score').classList.add('wtf1');
        } else {
            document.querySelector('.score').classList.add('wtf2');
        }
    })


    document.querySelector('.main').addEventListener('touchend', function(){
        document.querySelector('.popcat').classList.remove('op');
        if(lo === 0) {
            document.querySelector('.score').classList.remove('wtf');
        } else if(lo === 1) {
            document.querySelector('.score').classList.remove('wtf1');
        } else {
            document.querySelector('.score').classList.remove('wtf2');
        }
    })
} else {
    document.querySelector('.main').addEventListener('mousedown', function(){
        lo = Math.round(Math.random() * 2);
        document.querySelector('.popcat').classList.add('op');
        soundClick();
        document.querySelector('.score').innerHTML++;
        if(lo === 0) {
            document.querySelector('.score').classList.add('wtf');
        } else if(lo === 1) {
            document.querySelector('.score').classList.add('wtf1');
        } else {
            document.querySelector('.score').classList.add('wtf2');
        }
    })

    document.querySelector('.main').addEventListener('mouseup', function(){
        document.querySelector('.popcat').classList.remove('op');
        if(lo === 0) {
            document.querySelector('.score').classList.remove('wtf');
        } else if(lo === 1) {
            document.querySelector('.score').classList.remove('wtf1');
        } else {
            document.querySelector('.score').classList.remove('wtf2');
        }
    })
}


function pop() {

}

function soundClick() {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'img/pop.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
