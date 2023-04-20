const quizData =[{
    questions: 'How old is John?',
    a: '10',
    b: '17',
    c: '26',
    d: '105',
    correct: 'c' 
},
{
    questions: 'What is best most used programming language in 2019?',
    a:'Java',
    b:'Phyton',
    c:'C',
    d:'JavaScript',
    correct:'d'
},
{
    questions:'Who is the president of US?',
    a:'Donald Trump',
    b:'Putin',
    c:'Ivan Saldano',
    d:'Queen Elizabeth',
    correct:'a'
},
{
    questions:'What does HTML stand for?',
    a:'Hyper Text Markup Language',
    b:'Jason Object Notation',
    c:'Casting Style Sheet',
    d:'Helicopters Terminals Motorboats Lamborginis',
    correct:'a'
},{
    questions:'What year was JavaScript launched',
    a:'1996',
    b:'1997',
    c:'1998',
    d:'none above them',
    correct:'d'
}
];
const quiz=document.getElementById('quiz');
const questionsEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submit =document.getElementById('sub');
let currentQuiz =0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectedAnswers();
    const currentQuizData =quizData[currentQuiz];
   questionsEl.innerText= currentQuizData.questions;
   a_text.innerText=currentQuizData.a;
   b_text.innerText=currentQuizData.b;
   c_text.innerText=currentQuizData.c;
   d_text.innerText=currentQuizData.d;
   
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    let answer=undefined;
    answerEls.forEach((answerEl)=>{
       if(answerEl.checked){
         answer=answerEl.id;
       }
    });
    return answer;
}
function deselectedAnswers(){
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl)=>{
       answerEl.checked=false;
     });
}

submit.addEventListener("click",() => {
     
    const answer = getSelected();
   
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
     
     if(currentQuiz<quizData.length){
         loadQuiz();
     }
     else{
        quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions </h2> <button onClick="location.reload()">Reload</button>`;
     }
    }
    
    
})