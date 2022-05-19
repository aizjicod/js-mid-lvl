const container = document.querySelector(".grid-container")
const send_btn = document.querySelector(".send-btn");

const alumn = [{
    name : "alejandro torres",
    email : "aletv1501@gmail.com",
    subject : "matematica"
},{
    name : "hans weizerber",
    email : "hans@gmail.com",
    subject : "programacion"
},{
    name : "karen weizember",
    email : "karen@gmail.com",
    subject : "catedra"
},{
    name : "don carlos",
    email : "dondoncarlos@gmail.com",
    subject : "geografia"
}];

for (let alumns in alumn){
    container.innerHTML += `<div class="name grid-item">${alumn[alumns]["name"]}</div>
    <div class="email grid-item">${alumn[alumns]["email"]}</div>
    <div class="subject grid-item">${alumn[alumns]["subject"]}</div>
    <div class="week grid-item">
        <select class="select">
            <option value="week-1">week 1</option>
            <option value="week-2">week 2</option>
        </select>
    </div>`;
}
container.innerHTML += `<input type="button" value="send" class="send-btn">`;

send_btn.addEventListener("click",()=>{
    const select = document.querySelectorAll(".select");
    console.log(select)
    container.removeChild(".select");
})