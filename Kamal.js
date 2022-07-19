let againBtn = document.getElementById('yeni-oyun')
let chekbtn = document.getElementById('yoxla')
let message = document.getElementById('mesaj')
let scoretext = document.getElementById('xal')
let score = 25
let highscoretext = document.getElementById('yüksək-xal')
let highscore = 0
let inputnumber;
guessNumber = document.getElementById('eded')
let random = Math.trunc(Math.random() * 25 + 1)

chekbtn.addEventListener('click', function (){
    inputnumber = document.getElementById('input').value;
    if(random == inputnumber){
        message.innerText = 'Təbriklər'
        document.body.style.backgroundColor = 'red'
        if(score > highscore){
            highscore = score
            highscore.innerText = score
        }
        
    }
    
    else if(random > inputnumber) {
        message.innerText = 'Yuxarı qalxın...'
        score--;
        scoretext.innerText = score
    }
    else if(random < inputnumber){
        message.innerText = 'Aşağı düşün...'
        score--;
        scoretext.innerText = score
    }
})

againBtn.addEventListener('click', function(){
    document.getElementById('input').value = ' ';
    random =  Math.trunc(Math.random() * 25 + 1)
    scoretext.innerText = 25;
    score = 25
    guessNumber = document.getElementById('eded')
    message.innerText = 'Ağlımdakı ədədi tapın...'
    document.body.style.backgroundColor = 'rgb(8, 61, 206)'
})