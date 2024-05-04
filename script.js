let boxes=document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let new1=document.querySelector("#new-btn");
let turn=true;
let c=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
new1.addEventListener("click",()=>
{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
      }
      c=0;
      msgContainer.classList.add("hide");
})
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turn)
        {
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        c++;
        let check=checkWinner();
        if(check)
        {   
            disableBoxes();
        }
        if(c==9 && !check)
        showDraw();
    })
})
showDraw = () => {
    msg.innerText = `Its a draw!!!`;
    msgContainer.classList.remove("hide");
  };  
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
  };  
checkWinner=()=>
{
    for(let p of winPatterns)
    {
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1==p2 && p2==p3)
            {
                showWinner(p1);
                return true;
            }
        }
    }
}