let btn=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset");
let newGame=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".hide");
let turnIndicator = document.querySelector("#turn-indicator");


let turnO=true;
 let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 const resetGame=()=>
 {
turnO=true;
 turnIndicator.innerHTML = `🔵 Turn: <span class="o-turn">O</span>`;
enablebox();
msgContainer.classList.add("hide");
 };

 btn.forEach((box) =>
{
    box.addEventListener("click",()=>
    {
//  console.log("button is clciked");
 //player o
  if(turnO){
    box.innerText="O";
     box.classList.add("o-style");
      turnIndicator.innerHTML = `🟣 Turn: <span class="x-turn">X</span>`;
    turnO=false;
  }
  //player X
  else
  {
    box.innerText="X";
   box.classList.add("x-style");
    turnIndicator.innerHTML = `🔵 Turn: <span class="o-turn">O</span>`;

    turnO=true;
  }
  box.disabled=true;
  checkWinner();
    });

});
const disablebox=()=>
{
  for(let box of btn)
  {
    box.disabled=true;
  }
};
const enablebox=()=>
{
  for(let box of btn)
  {
    box.disabled=false;
    box.innerText="";
      box.classList.remove("win", "o-style","x-style");
  }
}
const showWinner = (winner) =>
{
  msg.innerText=` 🎉 Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disablebox();

};
const checkWinner = ()=>
{
  for(let patterns of winPatterns)
  {
    let pos1Val=btn[patterns[0]].innerText;
    let pos2Val=btn[patterns[1]].innerText;
    let pos3Val=btn[patterns[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "")
    {
      if(pos1Val === pos2Val && pos2Val === pos3Val)
      {
        // console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
}
};
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);