beatlescounter = 0
zeppelincounter = 0
queencounter = 0
nirvanacounter= 0
greatestcount = 0
winners = ["The Beatles" ,  "Led Zeppelin", "Queen" , " Nirvana"]
userstorage= []
artistcountstorage = {"A" : beatlescounter,"B" : zeppelincounter,"C" : queencounter,"D" : nirvanacounter }
artistgeneralstorage= { "A": "The Beatles", "B":"Led Zeppelin","C" : "Queen" , "D" :"Nirvana" }
useranswers = ["C", "C" , "A" , "A", "C"]

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

     print(calculateresult())
     return calculateresult()
     
     

    
processdata(useranswers)    
    







