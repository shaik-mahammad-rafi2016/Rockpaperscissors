 let userScore = 0;
 let compScore = 0;

// const choices = document.querySelectorAll(".choice");

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     console.log("Choice was clicked:", userChoice);
//   });
// });

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreMsg=document.querySelector("#user-score");
const compScoreMsg=document.querySelector("#comp-score");
const draw=()=>{
  console.log("it is a draw");
  msg.innerText="The match is draw play again!"
  msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScoreMsg.innerText=userScore;
    console.log("you won");
    msg.innerText=`YOU WON ! yours ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor="green";
  }
  else{
    compScore++;
    compScoreMsg.innerText=compScore;
    console.log("you lost");
    msg.innerText=`YOU LOST ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
}
const genCompScore=()=>{
  const options=["rock","paper","scissors"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
}
const playGame=(userChoice)=>{
  console.log("userchoice is",userChoice);
  const compChoice=genCompScore();
  console.log("comp choice=",compChoice);
  if(userChoice===compChoice){
    draw();
  }else{
    let userWin=true;
    if(userChoice==="rock"){
      userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
      userWin=compChoice==="scissors"?false:true;
    }else{
      userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};
choices.forEach((choic)=>{
// console.log(choic);
 choic.addEventListener("click",()=>{
  const userChoice=choic.getAttribute("id");
 // console.log("choice was clicked");
  //console.log(choiceId);
  playGame(userChoice);

 })
 });