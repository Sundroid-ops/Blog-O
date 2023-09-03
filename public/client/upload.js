const temp_area = document.querySelector("#body")
const context_area = document.querySelector(".Article_body")

temp_area.addEventListener("input",()=>{
    console.log("fok");
    if(temp_area.value.trim() !== ""){
        const NewText_area = document.createElement("p");
        NewText_area.value = temp_area.value;
        context_area.removeChild(temp_area);
        return;
    }
    context_area.removeChild(p);
    context_area.appendChild(temp_area);
})