function getPin(){
    const random=Math.random()*10000;
    const pin =(random + "").split('.')[0];
    if(pin.length===4){
        return pin;
    }
    else{
        return getPin();
    }
}


//display genenrated pin
let generatePinInput=document.getElementById("generatePin").addEventListener("click",function(){
    let pinInput=document.getElementById("pin");
    pinInput.value=getPin();
   
})

//handle calsulator

const buttonContainer=document.getElementById("digit-container");
buttonContainer.addEventListener("click",function(event){
   const digit = event.target.innerText;
   if(isNaN(digit)){
       if(digit==='C'){
        const typedInput=document.getElementById("typed-pin");
        typedInput.value='';
       }

   }else{
       const typedInput=document.getElementById("typed-pin");
       typedInput.value=typedInput.value+digit;
   }
})
 
document.getElementById("verify-pin").addEventListener("click",function(){
    
    let pin =document.getElementById("pin").value;
    const typedPin=document.getElementById("typed-pin").value;
    if(pin===typedPin){
        const correct=document.getElementById('correct-pin');
        correct.style.display='block';
        const inCorrect=document.getElementById('incorrect-pin');
       inCorrect.style.display='none';
    }else{
        const inCorrect=document.getElementById('incorrect-pin');
       inCorrect.style.display='block';
       const correct=document.getElementById('correct-pin');
       correct.style.display='none';
    }
})





