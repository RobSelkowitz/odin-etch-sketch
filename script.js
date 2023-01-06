createGrid(120);
let bkgChoice = "gray";
const colorChoices = document.querySelectorAll('input[name="bkgcolor"]');
for (let i = 0; i<colorChoices.length; i++){
    colorChoices[i].addEventListener("change", () =>{
    bkgChoice = colorChoices[i].value;
});
}
function createGrid(side){

    const gridHolder = document.querySelector('#gridHolder');
    
    for (let i=0; i < side; i++){
        for(j=0; j < side; j++){
     const div = document.createElement("div");
     div.addEventListener('mouseover', function(e) 
        {e.target.style.background = bkgChoice;})
     gridHolder.appendChild(div);
    }
    }
    placeholder = "repeat("+side+", 1fr)";
    gridHolder.style["grid-template-columns"] = placeholder;
}
