function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return "This one is on me!"
  }
  else if (distance >2500){
    return "No can do."
  }
  else return "I will gladly take your thirty bucks."
}

function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip){
  // Write your switch code here
  switch (tip) {
    case "generous" : return "Thank you so much."
    case "not as generous" : return "Thank you."
    default : return "Bye."
  }
}