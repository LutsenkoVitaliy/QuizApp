const quizData = [
  {
    question: 'Какая планета ближе к Земле ?',
    a: "Венера",
    b: "Юпитер",
    c: "Меркурий",
    d: "Солнце",
    correct: 'c'
  }, {
    question: 'Какая самая маленькая страна Европы ?',
    a: "Монако",
    b: "Люксембург",
    c: "Ватикан",
    d: "Молдова",
    correct: 'c'
  }, {
    question: 'Столица США :',
    a: "Вашингтон",
    b: "Чикаго",
    c: "Нью-Йорк",
    d: "Техас",
    correct: 'a'
  }, {
    question: 'Сколько элементов в таблице Менделеева ?',
    a: "97",
    b: "118",
    c: "141",
    d: "108",
    correct: 'b'
  }, {
    question: 'Самая высокая вершина Земли ?',
    a: "Макалу",
    b: "Канченджанга",
    c: "Манаслу",
    d: "Джомолунгма",
    correct: 'd'
  }
]

const quizContainerEl = document.querySelector('.quiz-container')
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submit')
const answersEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  
  answersEls.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    } 
  })

  return answer;
}

function deselectAnswer() {
  answersEls.forEach((answersEl) => {
    answersEl.checked = false;
  })
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  console.log(answer);
  
  if (answer) {

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
      quizContainerEl.innerHTML = `
      <h2>Ты ответил правильно на ${score} из ${quizData.length} вопросов</h2>
      <button onclick="location.reload()">Заново</button>`;
    }
  }
})