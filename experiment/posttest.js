
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The good quality of water should have dissolved solids of? ",
      answers: {
        a: "25mg/l to 30mg/l",
        b: "30mg/l to 55mg/l",
        c: "60mg/l to 75mg/l",
        d: "5mg/l to 20mg/l"
      },
      correctAnswer: "b"
    },
    {
      question: "When the sewage becomes stronger, the Turbidity of waste water",
      answers: {
        a: "Increases",
        b: "Decreases",
        c: "Remains same",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Light source - Tungsten filament lamp operated at a colour temperature between?",
      answers: {
        a: "2230&deg;K and 3000&deg;K",
        b: "2200&deg;K and 3500&deg;K",
        c: "2200&deg;K and 3000&deg;K",
        d: "2230&deg;K and 3300&deg;K"
      },
      correctAnswer: "c"
    },
    {
      question: "The Formazin Suspension is defined as ___________ Nephelometric Turbidity Units (NTU).",
      answers: {
        a: "1000",
        b: "2000",
        c: "3000",
        d: "4000"
      },
      correctAnswer: "d"
    },
    {
      question: "Water sample has a Turbidity value of 8 JTU. What is your comment on this?",
      answers: {
        a: "Suitable for drinking",
        b: "Not Suitable for drinking",
        c: "Suitable for domestic use",
        d: "None of the above"
      },
      correctAnswer: "b"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
