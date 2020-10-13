const quizque = [
    {
        questions: ' QUE: Which are usually variables that are used internally in object methods and also are globally visible variables?',
        a: 'Object properties',
        b: 'Variable properties',
        c: 'Method properties',
        correct: 'b'
    }, {
        questions: 'QUE: The basic difference between JavaScript and Java is',
        a: 'There is no difference',
        b: 'Functions are considered as fields',
        c: 'functions are values, and there is no hard distinction between methods and fields',
        correct: 'c'
    }, {
        questions: 'QUE: When a class B can extend another class A, we say that',
        a: 'A is the superclass and B is the subclass',
        b: 'B is the superclass and A is the subclass',
        c: ' Both A and B are the superclass',
        correct: 'a'
    }, {
        questions: 'QUE:Consider the following code snippet <br>console.log(p) If p is not defined, what would be the result or type of error?',
        a: 'Zero',
        b: ' Null',
        c: 'ReferenceError',
        correct: 'c'
    }, {
        questions: 'QUE:Why was “The Good Parts” designed as a language subset in JavaScript?',
        a: 'To improve programmer flexibility',
        b: 'To balance the work load of the programmer',
        c: 'To improve programmer productivity',
        correct: 'c'
    }

]
let currentquiz = 0;
const quiz=document.getElementById('quiz');
let questionE1 = document.getElementById('question');
let a = document.getElementById('a_text');
let b = document.getElementById('b_text');
let c = document.getElementById('c_text');
let submit = document.getElementById('submit');
let answer = undefined;
let score=0;

loadquiz();

function loadquiz() {
    deselectanswers();
    const currentquizdata = quizque[currentquiz];
    questionE1.innerHTML = currentquizdata.questions;
    a.innerHTML = currentquizdata.a;
    b.innerHTML = currentquizdata.b;
    c.innerHTML = currentquizdata.c;
}
function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let answer=undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;

}
function deselectanswers(){
    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach((answerEl) => {
      answerEl.checked=false;
    });

}
submit.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if(answer==quizque[currentquiz].correct){
            score++;
        }
        currentquiz++;
        if (currentquiz < quizque.length) {
            loadquiz();
        }
        else {
            quiz.innerHTML=`<h2>You answered correctly ${score}/${quizque.length} questions</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});

