from flask import Flask , request , jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



beatlescounter = 0
zeppelincounter = 0
queencounter = 0
nirvanacounter= 0
greatestcount = 0
winners = ["The Beatles" ,  "Led Zeppelin", "Queen" , " Nirvana"]
userstorage= []
artistcountstorage = {"A" : beatlescounter,"B" : zeppelincounter,"C" : queencounter,"D" : nirvanacounter }
artistgeneralstorage= { "A": "The Beatles", "B":"Led Zeppelin","C" : "Queen" , "D" :"Nirvana" }
##useranswers = ["C", "C" , "A" , "A", "C"]
useranswers=[]

## receives data from frontend to update tally on counters 



#Sends the winner data to online storage for future refence for the user 
# def firebasesend(winner):
    
## Calculates the results that have been tallied. Calls a winner for the one with the highest votes 
def calculateresult(): ## may add parmaters but not needed
     winner = max(artistcountstorage, key = artistcountstorage.get)
     return artistgeneralstorage[winner]
     



## receives data from frontend to update tally on counters 
def processdata(useranswers):
     global artistcountstorage

     for key in artistcountstorage:
          artistcountstorage[key] = 0

     for answer in useranswers:
        if answer in artistcountstorage:
            artistcountstorage[answer] +=1

     #print(calculateresult())
     return calculateresult()
     
     

    
##processdata(useranswers)   

@app.route('/submit', methods=['POST'])

def submit():
     try:
        data= request.json
        selected_option = data.get('answer',)
        
        if not selected_option:
            return jsonify({'error': " No answer provided"}) , 400
       
       
        useranswers.append(selected_option)

        winner = processdata(useranswers)
        return jsonify({"message": f"Answers {selected_option} received! Your artist is {winner}"})
     
     
     except Exception as e:
         return jsonify({"error": str(e)}), 500

    
    
    
    




if __name__ == "__main__":
     app.run(debug=True)





    


# # Initialize the answer variable
# answer = ""

# # Function to update the answer
# def update_answer(selected_option):
#     global answer  # Ensure we modify the global answer variable
#     answer = selected_option
#     print(f"Selected Answer: {answer}")  # Debugging, you can remove it later

# def get_answer():
#     return answer  # Simply return the current answer

# # Function to update the HTML content to display the selected answer
# def display_answer():
#     current_answer = get_answer()  # Get the current answer
#     Element("display-answer").write(f'Your selected answer is: {current_answer}')

# # Function to setup the event listeners
# def setup_event_listeners():
#     # Add event listeners for each button
#     Element("option1").element.onclick = lambda event: update_answer(Element("option1").element.dataset['option'])
#     Element("option2").element.onclick = lambda event: update_answer(Element("option2").element.dataset['option'])
#     Element("option3").element.onclick = lambda event: update_answer(Element("option3").element.dataset['option'])
#     Element("option4").element.onclick = lambda event: update_answer(Element("option4").element.dataset['option'])

# # Set up event listeners when PyScript is ready
# setup_event_listeners()
# display_answer()



