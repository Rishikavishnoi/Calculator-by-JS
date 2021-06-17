let screen=document.getElementById("screen");
let screenValue=" ";
let button=document.querySelectorAll('button');
for( item of button){
  item.addEventListener('click',(e)=>{
    buttontext=e.target.innerText;
    if(buttontext=='X'){
      buttontext='*';
      screenValue+=buttontext;
      screen.value= screenValue;
    }
    else if(buttontext=='C'){
      screenValue="";
      screen.value =screenValue;
    }
    else if(buttontext=='='){
       screen.value=eval(screenValue);
    }
    else{
      screenValue+=buttontext;
      screen.value =screenValue;
    }


  }
)

}
