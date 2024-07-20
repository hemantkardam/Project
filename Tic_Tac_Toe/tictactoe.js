let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("BOX WAS CLICKED");
        if(turnO){
            box.innerText="O";
            turnO=false;            
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinners();
    })
})

    const disableBoxes =()=>{
        for (let box of boxes){
            box.disabled=true;
        }
    }
    const enableBoxes =()=>{
        for (let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
    const resetGame=()=>{
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");
    }
const showWinner =(winner)=>{
    msg.innerText=`Congratultion,Winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinners =()=>{
    for(pattern of winpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        } 
}
}
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);