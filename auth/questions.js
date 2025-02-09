const surveyData = [
    { question: "What's your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
    { question: "What's your preferred type of music?", options: ["Rock", "Classical", "Jazz", "Pop"] },
    { question: "Which medium do you prefer for art?", options: ["Painting", "Sculpture", "Photography", "Digital"] },
    { question: "What inspires you the most?", options: ["Nature", "Emotions", "History", "Dreams"] }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const options = [document.getElementById("option1"), document.getElementById("option2"), document.getElementById("option3"), document.getElementById("option4")];
    const outputElement = document.getElementById("output");  // Get the output paragraph

    if (currentQuestionIndex >= surveyData.length) {
        questionElement.textContent = "Survey completed! Thank you!";
        options.forEach(button => button.style.display = "none");
        outputElement.textContent = "Survey completed!";
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
