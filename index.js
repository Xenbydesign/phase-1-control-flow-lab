function scuberGreetingForFeet(ride){
  // Write your code here!
  let result
  if (ride <= 199) {
  return 'This one is on me!';
}

 else if (ride >= 400 && ride <= 2000) {
  return 'That will be twenty bucks.';
 }
  
 else if (ride >= 2000 && ride <= 2500) {
  return 'I will gladly take your thirty bucks.';
 }
  else if (ride >= 2500) {
  return 'No can do.';
}
return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result
  city === 'NYC'?(result = 'Ok, sounds good.'):(result = 'No go.')
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
let result
switch (tip){
case 'generous':
  result = 'Thank you so much.';
  break;

case 'not as generous':
  result = 'Thank you.';

break;
default: 
result = 'Bye.';
}
return result; 
}
