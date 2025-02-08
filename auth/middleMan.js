// Run setup immediately after script loads
let counter = 0;
const answerChoosen = "";
const text = document.getElementById("output");

function traverseAnswer(answer){
     if(counter === 0)
     {
          counter++; 
          text.textContent = "You choosed " + answer;
          answerChoosen = answer;
     }
}


//--- add something down here to traverse the data from JavaScript -> Python

function sendToPython()
{
     ///You could do something here
}