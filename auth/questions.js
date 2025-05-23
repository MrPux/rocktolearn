const surveyData = [
    { question: "What's your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
    { question: "What's your preferred type of music?", options: ["Rock", "Classical", "Jazz", "Pop"] },
    { question: "Which medium do you prefer for art?", options: ["Painting", "Sculpture", "Photography", "Digital"] },
    { question: "What inspires you the most?", options: ["Nature", "Emotions", "History", "Dreams"] }
];

let currentQuestionIndex = 0;

function getRandomElement(list) {
    if (!list || list.length === 0) {
      return undefined; // Return undefined for empty or invalid input
    }
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
  
  // Example usage:
  const myArray = ["The Beatles" ,  "Led Zeppelin", "Queen" , " Nirvana"];
  const randomElement = getRandomElement(myArray);
  

function displayQuestion() {
    const new_survey_button = document.getElementById("new_survey_button");
    const questionElement = document.getElementById("question");
    const options = [document.getElementById("option1"), document.getElementById("option2"), document.getElementById("option3"), document.getElementById("option4")];
    const outputElement = document.getElementById("output");  // Get the output paragraph

    new_survey_button.style.display = "none";
    if (currentQuestionIndex >= surveyData.length) {
        questionElement.textContent = randomElement;
        options.forEach(button => button.style.display = "none");
        outputElement.textContent = "Survey completed!";
        new_survey_button.style.display = "block";
        return;
    }
    
    const questionData = surveyData[currentQuestionIndex];
    questionElement.textContent = questionData.question;
    
    questionData.options.forEach((option, i) => {
        options[i].textContent = option;
        options[i].style.display = "block";
        options[i].onclick = () => {
            outputElement.textContent = `You chosed answer: ${option}`; // Update output text
            nextQuestion();
        };
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

document.addEventListener("DOMContentLoaded", displayQuestion);
