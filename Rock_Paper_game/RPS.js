let userscore = 0;
let compscore = 0;
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgcontainer=document.querySelector(".msg-container");
const genCompchoice =()=>{
    const options=["Rock","Paper","Scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const draw=()=>{
    console.log("Match Draw");
    msg.innerText="Match Draw";
    msgcontainer.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("You win");
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msgcontainer.style.backgroundColor="green";
        userscore++;
        userScore.innerText=userscore;
    }
    else{
        compscore++;
        console.log("You lose");
        msg.innerText="You Lose";
        msg.innerText=`You lose. ${compchoice} beats your ${userchoice}`;
        msgcontainer.style.backgroundColor="red";
        compScore.innerText=compscore;
    }
}
const playgame =(userchoice)=>{
    console.log("User choose the ",userchoice);
    const compchoice = genCompchoice();
    console.log("Computer choose the",compchoice);

    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice=="Rock"){
            userwin = compchoice=="Paper"?false:true;
        }
        else if(userchoice=="Paper"){
            userwin=compchoice=="Scissor"?false:true;
        }
        else{
            userwin=compchoice=="Rock"?false:true;
        }showWinner(userwin,userchoice,compchoice);
        }
};

 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
 })