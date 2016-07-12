const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  
});

 
rl.question('Enter your age? ', (answer) => {
var age = parseInt(answer);
addyears(age,5);
addyears(age,20);
addyears(age,30)
 rl.close();
 });
function addyears(age,increment){
    var test = age + increment;
    if (test<15){
    console.log('After:'+ increment + ':I dont have to think about my life yet');
}
if (test>=15 && test <30){
   console.log('After:'+ increment +':Need to finish studies and find a job');
}

if (test>=30 && test < 35){
    console.log('After:'+ increment + "I need to marry");
   
}
if (test>=35 && test < 40){
    console.log('After:'+ increment +  "I will rear children");
}
if (test>=40 && test <= 59){
    console.log('After:'+ increment + "Prepare to Retire");
}
if (test==60){
    console.log('After:'+ increment + "I will now retire");
}
}
