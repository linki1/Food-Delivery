"use strict";
const logHedBtn= document.querySelector('#logHedBtn');
const singUpBtn = document.querySelector('#singHedBtn');
console.log(logHedBtn)
const wraperform = document.createElement('div');
const closerform = document.createElement('div');
const formbutton = document.createElement('button');
const logRegForm = document.createElement('form');
wraperform.classList.add('form_wraper');
formbutton.classList.add('button');
logRegForm.classList.add('form');
closerform.classList.add('form_close');
formbutton.type = 'button';
let arrinputs = [];

if(localStorage.getItem('uer_login')){
    logHedBtn.remove();
    singUpBtn.remove();
}
logHedBtn.addEventListener('click',()=>{
createForm("reg");
document.body.style.overflow ='hidden';
})

singUpBtn.addEventListener('click',()=>{
createForm("log");
document.body.style.overflow ='hidden';
})

closerform.addEventListener('click',()=>{
 cleenForm();
})

formbutton.addEventListener('click',()=>{
    let varning = cheackValidation(arrinputs);
    if(!varning){
    localStorage.setItem("uer_login",arrinputs[0].value);
    localStorage.setItem("user_pasword",arrinputs[1].value);
    cleenForm();
    location.reload();
}
})

function createForm(method){
    let inputcount = method =='log'?2:method=='reg'?3:undefined; 
    if(!inputcount)return inputcount;
    document.body.appendChild(wraperform); 
    wraperform.appendChild(closerform)
     wraperform.appendChild(logRegForm);
    addInputs(inputcount,logRegForm)
    formbutton.textContent = method== 'reg'?"sing up":"login";
    logRegForm.appendChild(formbutton);
    return true;
}

function addInputs(count,elem){
    let inputcount = count;
        for(let i = inputcount;i>0;i--){
        const forminput = document.createElement('input');
        forminput.classList.add('inputform');
        if(i<inputcount){
            forminput.type = 'password';
            forminput.placeholder = 'take your password';
        }
        else{
            forminput.type = 'text';
            forminput.placeholder = 'take your login';
        } 
        arrinputs.push(forminput)
        elem.appendChild(forminput);
    }
}

function cleenForm(){
    wraperform.remove();
    formbutton.remove();
    for (const element of arrinputs) {
        element.style.display = 'none'
        element.remove();
    }
    arrinputs.length = 0;
    logRegForm.remove();
    document.body.style.overflowY ='scroll';
}

function cheackValidation(inputs){
    let catchvarning = false;
    let isreg = inputs.length>2?true:false;
    if(inputs){
   for (let i = 0; i < inputs.length; i++) {
    let validinput = '';
    if(i == 0){
       validinput = checkInputsVarning(inputs[i].value,false,isreg) 
    }
    else if(i == 1){
    validinput = checkInputsVarning(inputs[i].value,inputs[i+1]?inputs[i+1].value:false,isreg);
    }
    else if(i==inputs.length-1){
        validinput = checkInputsVarning(inputs[i].value,inputs[i-1]?inputs[i-1].value:false,isreg);
    }
    if(validinput){
        catchvarning =true;
        addVarning(inputs[i],validinput,2000);
    }
   }
    }
    else{
 return false;
    }
return catchvarning;
}

function checkInputsVarning(elem,checkelem = false,reg=false){
   
const login = localStorage.getItem('uer_login');
const password = localStorage.getItem('user_pasword')
if(!elem.trim()){
    return'empty fill';
}
if(checkelem){
 if(elem == checkelem){
 return false;
 }
 else{
 return "password not same";
 }
}
else if(elem == login||elem == password){
    if(reg){
    return ' login taken';
    }      
    else{ 
    return 'password or login not fopund';
    }

}
else if((login==null&&!reg)||(password==null&&!reg)){
return 'you are first sing up pls';
}
else{
 return null;
}
}

function addVarning(elem,messedg,time=1000){
    if(typeof(messedg) != 'string'||!elem){
      return false;
    }
    let defolttupe = elem.type;
    elem.value = messedg;
    elem.type = 'text';
    elem.style.color = 'red';
    setTimeout(() => {
    elem.value = '';
    elem.style.color = 'var(--btnColor)';
    elem.type = defolttupe;
    }, time);
}
