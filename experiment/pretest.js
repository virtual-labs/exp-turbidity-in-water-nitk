
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
      question: "According to World Health Organization, the Turbidity of drinking water should not be more than ",
      answers: {
        a: "8 NTU",
        b: "5 NTU",
        c: "12 NTU",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Turbidity in water is caused mainly due to",
      answers: {
        a: "Silt",
        b: "Clay",
        c: "Fine organic matters",
        d: "All of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "In a Nephelometer the light detectors are at ",
      answers: {
        a: "60&deg;",
        b: "120&deg;",
        c: "90&deg;",
        d: "180&deg;"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the unit of Turbidity?",
      answers: {
        a: "NTU",
        b: "ATU",
        c: "MTU",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Turbidity is a measure of passage of light through the solution.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
