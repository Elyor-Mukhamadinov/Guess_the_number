// let ism = prompt("Ismingizni kiriting:  ")
// let pul = +prompt("Mablag'ingizni kiriting (so'mda):  ")
// let sayohat = 1000000;
// if (pul >= sayohat){
//     alert("Pulingiz yetar ekan " + ism + ". Sayohatga marhamat!")
// }
// else{
//     alert(ism + " sizga " +(sayohat - pul)+ " so'm yetmayapdi. Shunchaki hammasiga kulib qo'ying! ")
// }

alert("O'yinga hush kelibsiz! Men 1 dan 10 gacha sonlardan birini o'yladim. Uni tahmin qila olasizmi?.")
var level = prompt(" Darajani tanlang 'o'-oson  'q'-qiyin.   ")
var randomNumber = Math.floor(Math.random() *10)
// alert(randomNumber)
var choices;
if(level=="o"){
    choices = 8
}else if(level="q"){
    choices = 4
}
var isGameOver=true;
alert("Sizda " + choices + " ta jon bor")
while(isGameOver){
    var guess = +prompt("taxminingizni ayting: ")
    if (guess == randomNumber){
        alert("Siz yutdingiz!")
        isGameOver = false
        break
    }
    else if(choices == 0){
        alert("Sizning urinishlaringaiz tugadi. Yutqazdingiz. Javob " +randomNumber+" edi.")
        break
    }
    else if(guess != randomNumber){
        alert("Yaqin kelmadingiz!")
    }
    choices--
}
