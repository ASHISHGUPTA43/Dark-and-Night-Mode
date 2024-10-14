let btn =document.querySelector("#mode")
let body = document.querySelector("body")
let currentmode = "light";

btn.addEventListener("click", ()=>{
    if(currentmode === "light"){
        currentmode = "dark";
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currentmode = "light";
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currentmode);
})