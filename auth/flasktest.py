import requests
import json
url = 'http://127.0.0.1:5000/submit-answer'

data = {
    "answer": "A"
}

# Send a POST request to the Flask server
response = requests.post(url, json=data)


# Print the response from Flask
if response.status_code == 200:
    print("Respones received!" ,response.json())  # This will print the 
else:
    print("Error")