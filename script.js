// selectors 
var quiz = document.getElementById('quiz')
var startButton = document.getElementById('startGameBtn');
startButton.addEventListener('click', startGame);
var playAgainbtn = document.getElementById('playAgainbtn')
playAgainbtn.addEventListener('click', playAgain)
var header = document.getElementById('header')
var countdownEl = document.getElementById('timer')
var questions = document.getElementById('question')
var results = document.getElementById('results')
var finalScore = document.getElementById('finalScore')


// global variables
quiz.style.visibility = 'hidden';
results.style.visibility = 'hidden';
var startingTime = 1/6;
var time = startingTime * 60;
var yourScore = 0;
var score = 9;
// var maxQ = 4;
var selectedQuestion = 0;
var selecetdAnswer = 0;
var answer;
// var correctAnswer = true;
var theQuestions =[
    {
        questions: 'What is 2+2',
        btn1: '4',
        btn2: '0',
        btn3: '7',
        btn4: '80',
        answer: '4',
    },
    {
        questions: 'What is 10*8',
        btn1: '2',
        btn2: '0',
        btn3: '7',
        btn4: '80',
        answer: '80',
    },
    {
        questions: 'What is 2+5',
        btn1: '2',
        btn2: '0',
        btn3: '7',
        btn4: '80',
        answer: '7',
    },
    {
        questions: 'What is 2-3',
        btn1: '2',
        btn2: '0',
        btn3: '7',
        btn4: '-1',
        answer: '-1',
    },
    {
        questions: 'What is 22-3',
        btn1: '2',
        btn2: '19',
        btn3: '7',
        btn4: '-1',
        answer: '19',
    },
    {
        questions: 'What is 4562*3',
        btn1: '24534',
        btn2: '13686',
        btn3: '7345',
        btn4: '-1345',
        answer: '13686',
    },
    {
        questions: 'What is 2+3',
        btn1: '2',
        btn2: '5',
        btn3: '7',
        btn4: '6',
        answer: '5',
    },
    {
        questions: 'What is 2*3',
        btn1: '2',
        btn2: '6',
        btn3: '5',
        btn4: '-1',
        answer: '6',
    },
    {
        questions: 'What is 6*6',
        btn1: '2',
        btn2: '0',
        btn3: '7',
        btn4: '36',
        answer: '36',
    },
];
// var answer = ['4','80', '7', '-1']






// functions
function mainPage(){
    quiz.style.visibility = 'hidden';
    header.style.visibility = 'visible';
    results.style.visibility = 'hidden';
}

function updateTime(){
    var quizInterval = setInterval(() => {
        time--;
        var minutes = Math.floor(time / 60, 10);
        var seconds = time % 60
        seconds = seconds < 10 ? '0' + seconds : seconds
    
        // countdownEl.innerHTML = `${minutes}: ${seconds}`;
        document.getElementById("timer").textContent =  `${minutes}: ${seconds}`;
        if(time <= 0 || theQuestions.length === 0 ){
            clearInterval(quizInterval);
            showScores();
        }
    }, 1000);
}

function showQuestion() {
    console.log("I am showing a question")
    document.getElementById("question").textContent = theQuestions[selectedQuestion].questions

    document.getElementById("btn1").textContent = theQuestions[selectedQuestion].btn1
    document.getElementById("btn2").textContent = theQuestions[selectedQuestion].btn2
    document.getElementById("btn3").textContent = theQuestions[selectedQuestion].btn3
    document.getElementById("btn4").textContent = theQuestions[selectedQuestion].btn4
}

function checkAnswer() {
    // once I check the answer
    // correctAnswer = theQuestions[selectedQuestion].answer
    // console.log(correctAnswer)
    if (this.textContent == theQuestions[selectedQuestion].answer){
        yourScore++
    } else{
        time -= 5
    }
    // I go up by one selectedQuestion
    selectedQuestion++;
    //and then I show my questions again
    showQuestion()
}

function startGame(){
    header.style.visibility = 'hidden';
    results.style.visibility = 'hidden';
    quiz.style.visibility = 'visible';
    showQuestion();
    updateTime();
}

function showScores(){
    quiz.style.visibility = 'hidden';
    header.style.visibility = 'hidden';
    results.style.visibility = 'visible';
    finalScore.innerHTML = 'You scored '+ yourScore + " out of " +score;
}

function playAgain(){
    startingTime = 1/6
    time = startingTime * 60;
    selectedQuestion = 0;
    yourScore = 0;
    startGame()
}
// execute code

// startButton.addEventListener("click", startGame)
document.getElementById("btn1").addEventListener("click", checkAnswer)
document.getElementById("btn2").addEventListener("click", checkAnswer)
document.getElementById("btn3").addEventListener("click", checkAnswer)
document.getElementById("btn4").addEventListener("click", checkAnswer)
