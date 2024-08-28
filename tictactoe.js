let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset");
let newbutton = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector("#winner");

let turn0 = true;
const winpatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach(box=> {
    box.addEventListener('click',()=>{
       
        if(turn0){
            box.innerText = "o";
            turn0  = false;
        }else{
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkgamestatus();

    })
    
});
const boxesDisabled = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const resetgame = () =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const showmessage = (message) =>{
    msg.innerText = message;
    boxesDisabled();
    msgcontainer.classList.remove("hide");
}
const checkgamestatus = () =>{
    
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!==""&&pos1===pos2&&pos2===pos3){
           
            
                
            showmessage(`congratulations! winner is ${pos1}`);
            return;
            
        }
    }
    let isdraw = true;
        for(let box of boxes){
            if(box.innerText===""){
                isdraw = false;
                break;

            }
        }
        if(isdraw){
            showmessage(`its a draw`);
        }

    
}
newbutton.addEventListener('click',resetgame);
resetbutton.addEventListener('click',resetgame);