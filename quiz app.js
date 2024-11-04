const quiz=[{question:"What does Html stand for?",
    choies:["Hyper Text Marking Language",
        "Hyper Text Marketing Language",
        "Hyper Text Markup Language",
        "Hyper Text Mark Language"
    ],
    answer:"Hyper Text Markup Language"
},
{question:"Which of the following is not primitive data type?",
    choies:["Number",
        "String",
        "Boolean",
        "Object"
    ],
    answer:"Object"
},
{question:"Which of the following is not a loop in javascript",
    choies:["for",
        "next",
        "while",
        "do-while"
    ],
    answer:"next"
},
{question:"Which of the foollowing is not vaild javascript array method",
    choies:["push()",
        "pop()",
        "shift()",
        "slice()"
    ],
    answer:"slice()"
},
];
let currentQuestionIndex=0;
let score=0;
let timeLeft=10;
let timer;
const question1=document.getElementById("question");
const choies1=document.getElementById("choies");
const timeleft1=document.getElementById("timeleft");
const result1=document.getElementById("result");
const start1=document.getElementById("start");
const next1=document.getElementById("next-btn");
const cont=document.getElementById("container");
next1.style.display="none";

start1.addEventListener('click',()=>{
    start1.style.display="none";
    
    loadQuestion();
});

function loadQuestion(){
    next1.style.display="block";
    choies1.innerHTML="";
    timeLeft = 10;
    const currentQuestion=quiz[currentQuestionIndex];
    question1.textContent=currentQuestion.question;
    currentQuestion.choies.forEach(choice=>
    {
        const button=document.createElement("button");
        button.textContent=choice;
        button.addEventListener('click',()=>checkAns(choice));
        choies1.appendChild(button);
        button.className="button1";
        
    });
    startTimer();
}
function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < quiz.length){
        loadQuestion();
    }else{
        showResult();
    }
}
function startTimer(){
    timeleft1.textContent = timeLeft;
    // console.log(timeleft1.textContent = timeLeft)
    timer=setInterval(()=>{
        timeLeft--;
        timeleft1.textContent=timeLeft;
        // console.log(timeleft1.textContent = timeLeft)
        if(timeLeft === 0){
            clearInterval(timer);
            nextQuestion();
        }
    },1000);
}
function checkAns(choice){
    clearInterval(timer);
    const currentQuestion=quiz[currentQuestionIndex];
    if(choice===currentQuestion.answer){
        score++;
    }
    nextQuestion();
}

function showResult(){
    result1.innerHTML=`Quiz Finished! You Scored ${score} out of ${quiz.length}.`;
    document.getElementById("question").style.display="none";
    document.getElementById("choies").style.display="none";
    document.getElementById("next-btn").style.display="none";
    document.getElementById("timeleft").style.display="none";
}
