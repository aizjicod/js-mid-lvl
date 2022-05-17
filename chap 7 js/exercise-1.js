const names = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const btn_submit = document.getElementById("submit");

btn_submit.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = campValidation();
    if(error[0]){
        alert(`error! hay algo incorrecto en este campo`)
    }else{
        alert(`correct!! you may continue your path`)
    }
})