let count=0;
let displayCount=document.getElementById("count");
let displayError=document.getElementById("error");
let clearBtn=document.getElementById("clearBtn");

function updateUi(){
    displayCount.innerText=count;
    if(displayCount===0){
        clearBtn.style.display="none";
    }else{
        clearBtn.style.display="inline-block";
    }
}

function increment(){
    count++;
    displayError.style.display="none";
    updateUi();
}

function decrement(){
    if(count>0){
        count--;
        displayError.style.display="none";
        updateUi();
    }else{
        displayError.style.display="block";
    }
}

function clearCount(){
    count=0;
    displayError.style.display="none";
    updateUi();
}

updateUi();
