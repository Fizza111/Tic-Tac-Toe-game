


let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector("#new-button");
let turn0=true;
let patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        
    })
})

const checkwinner=()=>{
    for(let pattern of patterns){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                document.getElementById("win").innerHTML=` Congratulations! ${pos1} is winner &#128515`;
                boxdisable();
            }
           
        }
    }
}
 

const boxdisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
 const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
    document.getElementById("win").innerText="";
    for(let box of boxes){
        box.innerHTML='';
    }
 }

 newbtn.addEventListener("click",()=>{
    enablebox();
    nowinner();
 })
function nowinner(){
const msg=document.getElementById("win");

if(msg.innerText==""){
    msg.innerText="No winner";
}
}
nowinner();