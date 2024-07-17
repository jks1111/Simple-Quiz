const questions = [
  {
    question: "Which is binary operator?",
    answers: [
      { text: "++", correct:false},
      { text: "+", correct:true},
      { text: "--", correct:false},
      { text: "None of the above", correct:false},
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "Integer", correct:true},
      { text: "Boolean", correct:false},
      { text: "String", correct:false},
      { text: "Array", correct:false},
    ]
  },
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    answers: [
      { text: "Array", correct:false},
      { text: "Object", correct:false},
      { text: "Null", correct:true},
      { text: "Function", correct:false},
    ]
  },
  {
    question: `Waht is the output of following JavaScript code? console.log(2+"2"): `,
    answers: [
      { text: "22", correct:true},
      { text: "4", correct:false},
      { text: `"4"`, correct:false},
      { text: "None of the above", correct:false},
    ]
  },
];

 const questionElement = document.getElementById("question");
 const answerBtn = document.getElementById("answer-btn");
 const nextBtn = document.getElementById("next_btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
 }

 function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ") " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });

 }

 function resetState(){
  nextBtn.style.display = "none";
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild);

  }
 }
 function selectAnswer(e){
  const selectedbtn = e.target;
  const isCorrect = selectedbtn.dataset.correct === "true";
  if(isCorrect){
    selectedbtn.classList.add("correct");
    score++;
  } else {
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    } button.disabled = true;
  });
  nextBtn.style.display = "block";

 }

 function showScore(){
  resetState();
  questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
 }

 function handleNextBtn(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  } else {
    showScore();
  }
 }
 nextBtn.addEventListener("click",()=> {
  if(currentQuestionIndex<questions.length){
    handleNextBtn();
  } else {
    startQuiz();
  }
 })
 startQuiz();