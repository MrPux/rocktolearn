// Run setup immediately after script loads
let counter = 0;
// Changes from constant to variable so it can be updated 
let answerChoosen = "";
const text = document.getElementById("output");

function traverseAnswer(answer) {
     // Only allow selection once (if needed, reset counter elsewhere)
     if (counter === 0) {
          counter++;
          // Display answer choice
          text.textContent = "You chose: " + answer;
          answerChoosen = answer;

          // Send the chosen answer to Flask
          sendAnswerToFlask(answerChoosen);
     }
}

// Send selected answer to Flask
function sendAnswerToFlask(answer) {
     console.log("Sending answer to Flask:", answer);  // Debug log
     fetch('http://127.0.0.1:5000/submit', {  // Ensure this matches Flask's port
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answer: answer })  // Send the answer as JSON
     })
     .then(response => response.json())  // Parse JSON response from Flask
     .then(data => {
          console.log("Flask Response:", data);  // Log Flask response for debugging
          console.log(data.message);  // Log message from Flask
          
          // Display Flask message in the UI
          text.textContent = data.message;
     })
     .catch(error => {
          console.error('Error:', error);  // Handle any errors in the fetch request
     });
}

// Get all buttons and add click event listeners
const buttons = document.querySelectorAll('.option');
console.log(buttons);  // Debug log to check buttons

buttons.forEach(button => {
     button.addEventListener('click', function() {
          const selectedOption = this.dataset.option;  // Get selected answer option (A, B, C, D)
          traverseAnswer(selectedOption);  // Send the selected answer to Flask
     });
});
