const readline =require('readline');
const quizgame =[
    {
        question:"who is the first blackafrican president of america",
        options:['barack obama','Louis Napoleon Bonaparte','joe biden'],
        answer:'barack obama'
        
    },
    {
     question:"which country have large popularity",
     options:['rwanda','china','india'],
     answer:"india",
    },
    {
        question:"where is the city called tokyo is??",
        options:['rwanda','japan','nigeria'],
        answer:"japan"
    },
    { 
        question:"what is the capital of rwanda?",
        options:["berlin","kigali","mumbai","kampala"],
        answer:"kigali",
    },
]
let questionanswered=0;
let correctanswer=0;
let wronganswer=0;
let displayQuestions=[];
function displayRandomQuestion(){
    if(questionanswered === quizgame.length){
        const totalpossiblescore=questionanswered;
        console.log('All answered');
        const scores=correctanwer/totalpossiblescore;
        console.log(scores);
        Process.exit();
    }
}
while(true){
    randomIndex=Math.floor(Math.random() * quizgame.length)
    if(!displayQuestions.includes(randomIndex)){
break;
    }
}
displayQuestions.push(randomIndex);
const randomQuestion=quizgame[randomIndex];
console.log(randomQuestion.question);
randomQuestion.options.forEach((option,index)=> {
    console.log(`${index ++}. ${option}`)
})
displayRandomQuestion();
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter the number of your answer:",(userAnswer)=> {
const parseudUserAnswer=parseInt(userAnswer);
rl.close();
if(userAnswer >=0 && userAnswer <=randomQuestion.options.length){
    const userOption=randomQuestion.options[userAnswer-0];
   if(userOption === randomQuestion.answer){
    console.log("correct!");
    correctanswer ++;
   } 
 else  {
    console.log(`Incorrect! Correct answer is: ${randomQuestion.answer}`);
   wronganswer++;
}}

displayQuestions.push(randomIndex);
rl.close();
displayRandomQuestion();
}),
displayRandomQuestion

