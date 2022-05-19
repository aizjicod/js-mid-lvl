const names = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const btn_submit = document.getElementById("submit");
const respond = document.querySelector(".respond");

btn_submit.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = campValidation();
    if(error[0]){
        respond.innerHTML =`error! hay algo incorrecto en "${error[1]}"`;
        respond.classList.add("red")
        respond.classList.remove("green")
    }else{
        respond.innerHTML = `correct!! you may continue your path`;
        respond.classList.remove("red")
        respond.classList.add("green")
    }
})

const campValidation = ()=>{
    if(names.value.length < 2 || names.value.length > 15){
        return [true,names.value]
    }else if(email.value.indexOf("@") == -1 ||
            email.value.indexOf("." ) == -1 ){
            return [true,email.value]
    }else if(subject.value.length < 2 || subject.value.length > 15){
        return [true,subject.value]
    }else{
        return [false,names.value]
    }
};