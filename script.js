const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'who are you??',
    answers: [
      { text: 'I am Jhon Snow', correct: false },
      { text: 'Joker', correct: false },
      { text: 'I am Iron Man', correct: true },
      { text: 'I am GOD'}
    ]
  },
  {
    question: 'Jhon know what??',
    answers: [
      { text: 'You know nothing Jhon Snow', correct: true },
      { text: 'Dany is the queen', correct: false },
      { text: 'that, he is a targarian', correct: false },
      { text: 'He is going to be king', correct: false }
    ]
  },
  {
    question: 'Rating of GOT S8?',
    answers: [
      { text: '10/10', correct: false },
      { text: '5/10', correct: true },
      { text: '12/10', correct: false },
      { text: '1/10', correct: false }
    ]
  },
  {
    question: 'Who is the savior of Universe',
    answers: [
      { text: 'Iron Man', correct: false },
      { text: 'Avengers', correct: true },
      { text: 'Thor', correct: false },
      { text: 'Captain America', correct: false }
    ]
  },
  {
    question: 'Who is friendly neihbourhood superhero??',
    answers: [
      { text: 'Venom', correct: false },
      { text: 'Spider-man', correct: true },
      { text: 'Thor', correct: false },
      { text: 'Captain Marvel', correct: false }
    ]
  },
  {
    question: 'Who is son of great ODIN?',
    answers: [
      { text: 'Hiemdal', correct: false },
      { text: 'Hela', correct: false },
      { text: 'Thor', correct: true },
      { text: 'Captain America', correct: false }
    ]
  },
  {
    question: 'How Human Race is going to be erase?',
    answers: [
      { text: 'Thanos snap', correct: false },
      { text: 'Coronavirus', correct: true },
      { text: 'Nightwalkers', correct: false },
      { text: 'Alien Invasion', correct: false }
    ]
  },
  {
    question: 'We should go to...',
    answers: [
      { text: 'Mars', correct: true },
      { text: 'Moon', correct: false },
      { text: 'Heaven', correct: false },
      { text: 'Hell', correct: false }
    ]
  },
  {
    question: 'Basic Nessesity of Cracking The Coding Interview',
    answers: [
      { text: 'Gaming', correct: false },
      { text: 'Data Structures and Algorithm', correct: true },
      { text: 'Web Development', correct: false },
      { text: 'Machine Learning', correct: false }
    ]
  },
  {
    question: 'How can we improve DS and Algo??',
    answers: [
      { text: 'Colleges', correct: false },
      { text: 'Tests', correct: false },
      { text: 'Coding Tutions', correct: false },
      { text: 'Leetcode', correct: true }
    ]
  }
]