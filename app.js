let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let turn0 =true; //playerX, player0

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const restGame =()=>{
   turn0=true;
   enableBoxes();
   msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
     
     if (turn0) {//player0
        box.innerText="0";
        turn0 =false;

     }
     else{//playerx
        box.innerText = "X";
        turn0=true;
     }

     box.disabled= true;

     checkwinner();


     
});
});

const disableBoxes =() =>{
   for(let box of boxes){
      box.disabled=true;
   }
};

const enableBoxes =() =>{
   for(let box of boxes){
      box.disabled = false;
      box.innerText="";
   }
};

const showWinner =(Winner) => {
   msg.innerText ='Congratulations, Winner is ${winner}';
   msgContainer.classList.remove("hide");
   disableBoxes();

};

const checkwinner=()=>{
   for(let pattern of winPatterns){
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;

      if(pos1val !="" && pos1val !="" && pos3val !=""){
         if(pos1val === pos2val && pos2val===pos3val ){
            console.log("winner", pos1val);
            showwinner(pos1val);
         }
      }
   }
};


newGameBtn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);

