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

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  console.log(currentQuizData);
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;


}

submitBtn.addEventListener('click', () => {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert('Ты ответил на все вопросы !')
  }
  
})