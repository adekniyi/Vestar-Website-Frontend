const menu_type = document.querySelectorAll(".menu-type");
const hum = document.querySelector(".fa-bars");


function toggleDisplay(myUl){
    // console.dir(this);
    myUl.classList.toggle("close");
}

function toggleHumburger(){
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show")
}

menu_type.forEach(element => {
    const myEl = element.querySelector("h6");
    const myUl = element.querySelector("ul");
    myEl.addEventListener("click",()=>toggleDisplay(myUl));
})


hum.addEventListener("click", () => toggleHumburger());