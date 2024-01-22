let questionNumber = 0;
let score = 0;
let quizStatus;
let answerCorrection;
const quiz = document.getElementById('quiz');
const correctAnswer = document.getElementById('correctAnswer');
const wrongAnswer = document.getElementById('wrongAnswer');
const correction = document.getElementById('correction');
const nextQuestion = document.getElementById('nextQuestion');

function loadQuestion() {
    quiz.innerHTML = '';
    if (!questions[questionNumber].isLast) {
        questions.forEach(function (value, index) {
            index += 1;
            const questionIndex = index;
            const questionContainer = document.createElement('div');
            const question = document.createElement('p');
            question.innerHTML = value.question;
            const answersContainer = document.createElement('div');
            answersContainer.classList.add('d-flex');
            answersContainer.classList.add('justify-content-center');
            answersContainer.classList.add('align-items-center');
            answersContainer.classList.add('flex-column');
            quiz.appendChild(questionContainer);
            value.answers.forEach(function (value, index) {
                index += 1;
                const answer = document.createElement('input');
                answer.type = 'button';
                answer.name = 'question' + questionIndex;
                answer.id = 'question' + questionIndex + 'Answer' + index;
                answer.value = value.text;
                if (value.correct === true) {
                    answer.setAttribute('correctness', 'true');
                } else {
                    answer.setAttribute('correctness', 'false');
                }
                answer.classList.add('btn');
                answer.classList.add('btn-primary');
                answer.classList.add('m-2');
                answersContainer.appendChild(answer);
            });
            if (value.isShow) {
                questionContainer.appendChild(question);
                questionContainer.appendChild(answersContainer);
            }
        });
    } else {
        questions.forEach(function (value) {
            if (value.answerCorrect) {
                score += 12.5;
            }
        });
        document.getElementById('quizDone').classList.remove('d-none');
        document.getElementById('score').classList.remove('d-none');
        document.getElementById('score').innerHTML = 'Nilaimu: ' + score;
    }
}

quiz.addEventListener('click', function (event) {
    const target = event.target;
    if (target.matches('input[type="button"]')) {
        const correctness = target.getAttribute('correctness');
        if (correctness === 'true') {
            correctAnswer.classList.remove('d-none');
            quizStatus = true;
        } else {
            wrongAnswer.classList.remove('d-none');
            questions[questionNumber].answers.forEach(function (value) {
                if (value.correct === true) {
                    answerCorrection = value.text;
                }
            });
            correction.innerHTML = 'Jawaban yang benar: ' + answerCorrection;
            correction.classList.remove('d-none')
            answerCorrection = null;
            quizStatus = false;
        }
        nextQuestion.classList.remove('d-none');
    }
});

nextQuestion.addEventListener('click', function () {
    nextQuestion.classList.add('d-none');
    correctAnswer.classList.add('d-none');
    wrongAnswer.classList.add('d-none');
    correction.classList.add('d-none');
    questionNumber += 1;
    questions[questionNumber - 1].isShow = false;
    if (quizStatus === true) {
        questions[questionNumber - 1].answerCorrect = true;
    } else {
        questions[questionNumber - 1].answerCorrect = false;
    }
    questions[questionNumber].isShow = true;
    loadQuestion();
});

loadQuestion();