'use strict';
// const testList = [
// 	{questionText: "this is the first question";
// 		answers: [answeroption1, answeroption2, answeroption3];
// 		correctAnswers: 1;}
// ]

const questionList = [
  { 
    number: 1,
    text: `Who lives at 1600 Pennsylvania Ave. NW?`,
    ans1: `Spongebob Squarepants`,
    ans2: `Jay-Z and Beyoncé `, 
    ans3: `The President`, //answer
    ans4: `The House Speaker`,
    funFact: `1600 Pennsylvania Ave. SOUTH EAST is a 77-unit apartment building that began leasing in 2015. It is about 3½ miles from the White House. `
  }, 

  {
    number: 2,
    text: `Which two houses of government make up Congress?`,
    ans1: `Birch and Cedar`, 
    ans2: `Executive and Judicial`, 
    ans3: `Judicial and House`, 
    ans4: `House and Senate`, //answer
    funFact: `To ensure a separation of powers, the U.S. Federal Government is made up of three branches: legislative, executive and judicial. To ensure the government is effective and citizens’ rights are protected, each branch has its own powers and responsibilities, including working with the other branches.`
  }, 

  {
    number: 3,
    text: `How old must you be before you can run for president?`,
    ans1: `35`, //answer
    ans2: `27`, 
    ans3: `46`, 
    ans4: `79`,
    funFact: `At 42 years old, Theodore Roosevelt was the youngest president to assume the office of the Presidency after the assassination of William McKinley in 1901. At 43 years old, John F. Kennedy was the youngest ELECTED president.`
  }, 

  {
    number: 4, 
    text: `Who said:
“We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.”
`,
    ans1: `Abraham Lincoln`, 
    ans2: `John F. Kennedy`, //answer
    ans3: `Benjamin Franklin`, 
    ans4: `Ruth Bader Ginsburg`,
    funFact: `JFK uttered these infamous words Sept. 12th, 1962 in Houston, Texas while drumming up support for the largest-scale space project every conducted.`
  }, 
  {
    number: 5,
    text: `During which war did the American government force the internment and relocation of nearly 120,000 Japanese Americans?`,
    ans1: `World War I`, 
    ans2: `Battle of Fort Sumter`,
    ans3: `World War II`, //answer
    ans4: `American Revolutionary War`,
    funFact: `Japanese internment camps were established during World War II by President Franklin Roosevelt through Executive Order 9066. From 1942 to 1945, it was the policy of the U.S. government that people of Japanese descent would be interred in isolated camps. Enacted in reaction to Pearl Harbor and the ensuing war, the Japanese internment camps also inspired similar action from Canada, Mexico, Peru, Chile, Argentina, and others.`
  }, 

  {
    number: 6,
    text: `How long was the American Civil War?`,
    ans1: `17 years`, 
    ans2: `8 months `, 
    ans3: `40 days and 40 nights`, 
    ans4: `4 years`, //answer
    funFact: `The Civil War was fought from 1861 to 1865 and was originally thought to be “quick battle” with confederates believing they could quickly vanquish their "soft Yankee” opponents. The North, who had a considerably larger population, more wealth, more food/supplies, and better infrastructure also believed the fight to be a “no-brainer.” The South, however, received the added advantage of being frequently on the offensive and much more resourceful than their Union counterparts had anticipated.`
  }, 

  {
    number: 7,
    text: `How many elected officials currently make up Congress?`,
    ans1: `800`, 
    ans2: `45`, 
    ans3: `535`, //answer
    ans4: `2`,
    funFact: `There are 100 officials who serve in the U.S. Senate and 435 serve in the U.S. House of Representatives.`
  }, 

  {
    number: 8,
    text: `What is the “hopper”?`,
    ans1: `How laws are made`, 
    ans2: `How proposed legislative bills are officially introduced`, //answer
    ans3: `A bunny rabbit that lives on Capitol Hill`, 
    ans4: `When bills are vetoed and not allowed to become law`,
    funFact: `The term derives from a funnel-shaped storage bin filled from the top and emptied from the bottom, which is often used to house grain or coal. Bills are retrieved from the hopper and referred to committees with the appropriate jurisdiction.`
  }, 
  {
    number: 9,
    text: `Which president led America into the Korean War?`,
    ans1: `Dwight D. Eisenhower`, 
    ans2: `Harry S. Truman`, //answer
    ans3: `Paul Bunyan`, 
    ans4: `Ronald Reagan`,
    funFact: `The Korean War began on June 25, 1950 and was never factually concluded with an official peace treaty. This is why North Korea and South Korea are still divided at the 38th parallel, which was decided by the USA in 1945. To this day, soldiers from each country are still stationed at this point to “hold the line” of the last battle fought on July 1953 known at the Battle of Kumsong.`
  }, 

  {
    number: 10,
    text: `Select the text of the 19th Amendment`,
    ans1: `“The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any state on account of sex.”`, //answer
    ans2: `Search and Seizure`, 
    ans3: `“Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.”`, 
    ans4: `“The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any state on account of race, color, or previous condition of servitude.”`,
    funFact: `On August 18, 1920, Tennessee became the 36th state to ratify the amendment, giving it the two-thirds majority of state ratification necessary to make it the law of the land. Eight days later, the 19th Amendment took effect.`
  }
];

const answerBank = [ 
  `The President`, 
  `House and Senate`, 
  `35`, 
  `John F. Kennedy`, 
  `World War II`, 
  `4 years`, 
  `535`, 
  `How proposed legislative bills are officially introduced`, 
  `Harry S. Truman`, 
  `“The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any state on account of sex.”`
];

let questionNumber = 1;
let correctAnswers = 0;
function getCurrentIndex() { return questionNumber - 1 }

//event handlers


//function move to start quiz page
function testMyKnowledgeButton() {
	//hide start page and show form
	$(".welcome").click(function() {
   		$(".welcome-page").hide();
   		$(".start-page", ).show(`<img src="https://media.giphy.com/media/uKxH9YcrnJaG4/giphy.gif" alt="Frank Underwood 'Hunt or be Hunted' GIF">`);
});
}

//function startQuiz
function startQuizButton() {
	//hide start page and show form
	$(".start").click(function() {
   		//involking a function that shows the first question
   		nextQuestion();
		 console.log(showQuizTemplate(correctAnswers, questionList[getCurrentIndex()], questionNumber));
	});

}

//Render current question and matching answers to the form
function showQuizTemplate(correctAnswers, question, questionNumber) {
// question per my function nextQuestion() is from the questionList array of objects
	return `
	<form> <h2 id="question">${question.text}</h2>
    <fieldset>
        <legend>Select one answer:</legend>
    <ul>
        <li>
            <input type="radio" id="optionA" name="answer" value="${question.ans1}">
            <label for="optionA">${question.ans1}</label>
        </li>

        <li>
            <input type="radio" id="optionB" name="answer" value="${question.ans2}">
            <label for="optionB">${question.ans2}</label>
       </li>

        <li>
            <input type="radio" id="optionC" name="answer" value="${question.ans3}">
            <label for="optionC">${question.ans3}</label>
        </li>

        <li>
            <input type="radio" id="optionD" name="answer" value="${question.ans4}">
            <label for="optionD">${question.ans4}</label>
        </li>

        <li >
            <input type="submit" id="submit-button" name="selection-submit" />
        </li>
        </ul>

    </fieldset>
</form> 

<div id="status-bar">
	
	<section class="results">Score: ${correctAnswers}/${questionNumber} </section>
	<section class="feedback">Feedback Section 
		<span id="question-count"> Question: ${question.number}/10 </span>
	</section>

</div>
`;

}

//function to govern submit button and provide feedback
function handleSubmitButton() {
  $('#container').on('submit', 'form', function(event) {
    event.preventDefault()
//instead do the below
//userAnswer is a variable that listens for which input is selected within the span sibilings
    const userAnswer = $('input:checked').siblings('label');
    console.log(userAnswer.length);
    if (userAnswer.length == 0) {
	alert("Please select an answer");
}
else {
// create a variable that listens for a function that checks the user's answer
    const userIsCorrect = checkUserAnswer(userAnswer);
//if the user is correct assign +1 to their score
    if(userIsCorrect) {
    	// console.log("correct")
      $('#container').html(generateCorrectFeedback());
      iterateCorrectAnswers();
//if the user is incorrect assign nothing to their overall score
    } else {
      // generateIncorrectFeedback();
      //render this function into the html
      $('#container').html(generateIncorrectFeedback());
    }}
  });
}

// function for moving to the next question
function nextQuestion() {
	// debugger
	let currentQuestion = questionList[getCurrentIndex()];
	let questionsAnswered = getCurrentIndex();
	//.html is a setter
	$('#container').html(showQuizTemplate(correctAnswers, currentQuestion, questionNumber));
	console.log(nextQuestion);
}

//function to handle when the next button is clicked
function handleNextButton() {
  //when "next" button is clicked in HTML container
  $('#container').on('click', '#next-button', function(event) {
//if the number of the question we're on is the final question
 //then display results page with correct answer score count
    if(questionNumber === 10) {
      renderResultsPage(correctAnswers);
//if not, go to the next question
    } else {
      iterateQuestion();
      nextQuestion();
  }
  });
}

function iterateQuestion() {
  questionNumber++;
}

function iterateCorrectAnswers() {
  correctAnswers++;
}

//function to give correct Feedback
function generateCorrectFeedback(questionNumber) {
  return `
    <section class="feedback-page" role="main">
      <h2>Obviously, "${answerBank[getCurrentIndex()]}" was the right answer!</h2>
      <button id="next-button">Next</button>
      <p> Fun Fact: ${questionList[getCurrentIndex()].funFact} </p>
      <img src="https://media.giphy.com/media/9Z7Tpg54OXR8Q/giphy.gif" alt="sassy woman explaining you should already know this GIF">
    </section>
`;
}

//function to give incorrect feedback
function generateIncorrectFeedback(questionNumber) {
  return `
    <section class="feedback-page" role="main">
      <h2>If you'd been a good student you'd know "${answerBank[getCurrentIndex()]}" was the right answer</h2>
      <button id="next-button">Next</button>

       <p> Fun Fact: ${questionList[getCurrentIndex()].funFact} </p>
       <img src="https://media.giphy.com/media/EFMWkEFCFGFvq/giphy.gif" alt="It's you that's not enough Claire Underwood GIF">      
    </section>
`;
}

function renderResultsPage(correctAnswers) {
  $('main').html(`
    <section id="final-page">
      <h2>Final Score: ${correctAnswers} out of 10</h2>
       <button id="restart-button">Try Again?</button>
       <img src="https://media.giphy.com/media/26BROOh3LJBK5PcWc/giphy.gif" alt="Frank and Claire Underwood GIF">     
    </section>
  `);

}

//create a function that checks a user's answers 
function checkUserAnswer(answer) {
//when the user selects an answer and it is exactly equal to an index in the ANSWERS array,
	if(answer.text() === answerBank[getCurrentIndex()]) {
    return true;
    console.log(true);
  } else {
    return false;
    console.log(false);
  }
}

// define a function to handle a restart button
function handleRestartButton() {
  //when the container with the restart button is clicked
  $(document).on('click', '#restart-button', function(event) {
	location.reload();
});
}

function handleButtons() {
  testMyKnowledgeButton()
  startQuizButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

handleButtons();




