// form 
let fullName=document.querySelector(`#name`);
let password=document.querySelector(`#pw`);
let button=document.querySelector(`.button`);
let passwordBtn=document.querySelector(`.passwordBtn`);

function hide(){
  if(password.type==`password`)
  {
    password.type=`text`;
    passwordBtn.innerHTML=`<i class="bi bi-eye-slash"></i>`;
  }
  else{
    password.type=`password`;
    passwordBtn.innerHTML=`<i class="bi bi-eye"></i>`;

  }
}




passwordBtn.addEventListener("click",hide);


function submit(){
if(fullName.value.length>0 && password.value.length>0){
    button.innerHTML=`Sucess`;
    button.style.backgroundColor=`green`;
}
else{
    button.innerHTML=`Error`;
    button.style.backgroundColor=`red`;
    
}
}

button.addEventListener(`click`,submit);
// form end

// counter start
let countValue=document.querySelector(`.count_value`);
let increase=document.querySelector(`.increase`);
let decrease=document.querySelector(`.decrease`);
let reset=document.querySelector(`.reset`);


function increaseValue(){

    countValue.innerHTML= Number(countValue.innerHTML)+1;

}


increase.addEventListener(`click`,increaseValue)

function decreaseValue(){
        countValue.innerHTML= Number(countValue.innerHTML)-1;
    
}


decrease.addEventListener(`click`,decreaseValue)

function resetValue(){
    countValue.innerHTML= 0;
}


reset.addEventListener(`click`,resetValue)
// counter end