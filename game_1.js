var words = [
    "программист",
    "прогрмамма",
    "ноутбук",
    "компьютер",
    "приложение",
    "код",
    "язык",
    "планшет",
    "мобильный"
];
var word = words[Math.floor(Math.random() * words.length)];//язык
var answerArray = []; 

for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
}
var remainingLetters = word.length; //0

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    guess = guess.toLowerCase();
    if (guess === null) {
         break;
    } else if (guess.length !== 1) {
         alert("Пожалуйста, введите только одну букву.");
    } else {
        for (var j = 0; j < word.length; j++) { 
            if (word[j] === guess) {
                answerArray[j] = guess; 
                remainingLetters--;
            } 
        }
    }
}


alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
