console.log("this is linked"); 

$(document).ready(function() {

  
  var pierreSays = [
    "You're a wonderful teacher and your students are lucky to have you.",
    "You're an incredibly capable and beautiful person",
    "Chaos reigns and I am its agent", 
    "Let go of the things outside your control, and focus on what is within your control", 
    "It's okay to make mistakes, just don't let them drag you down", 
    "You are loved, and you are worthy of love", 
    "Feed me", 
    "Not everything you do has to be perfect, don't let the persuit of perfection stop you from greatness", 
    "Don't let the small things build into something greater",
    "Seriously, feed me", 
    "I love you",
    "Ang pag-ibig ko ay walang hangganan."

]; 


var toniSays = [
  "I did not pee on the floor", 
  "You're an easy person to love", 
  "You're absolutely brilliant", 
  "You're my favorite person",
  "I love you",
  "Nothing brings me more joy that seeing you at the end of the day", 
  "Pierre did it", 
  "My love for you grows more and more each day", 
  "You become more beautiful each and every day", 
  "There isn't a single thing better in this world than waking up next to you.", 
  "I must not fear. Fear is the mind-killer. Fear is the little death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.And when it has gone past, I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain",


]; 


  var countDown = 0; 
 

  $("#pierreButton").on("click", ()=> {
    var pierreSpeaks = pierreSays[Math.floor(Math.random() *pierreSays.length)]; 

    $("#textHeader").text("Pierre says: "); 
    
    

    $("#textBox").text(pierreSpeaks); 
  }); 

  $("#toniButton").on("click", () => {

    var toniSpeaks = toniSays[Math.floor(Math.random() * toniSays.length)]; 

    $("#textHeader").text("Toni says: ")

    $("#textBox").text(toniSpeaks); 
  }); 

})