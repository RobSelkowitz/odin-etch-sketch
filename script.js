/*setup*/

let gridSide = 120;
const resetButton = document.querySelector('#resetButton');
let bkgChoice = "gray";
createGrid(gridSide);


/*set event listeners*/

resetButton.addEventListener('click', () =>{
    createGrid(gridSide);

});

const colorChoices = document.querySelectorAll('input[name="bkgcolor"]');
for (let i = 0; i<colorChoices.length; i++){
    colorChoices[i].addEventListener("change", () =>{
    bkgChoice = colorChoices[i].value;
});
}
const sideInput = document.querySelector('#side');
    sideInput.addEventListener("input", () =>{
    gridSide = sideInput.value;
});


/* function defs*/
function createGrid(side){

    const gridHolder = document.querySelector('#gridHolder');
    clearOldGrid();
    drawNewGrid(side);
    return;
}

function clearOldGrid(){
     const oldGridToClear = document.querySelectorAll('#gridDiv');
    for (let gridDiv = 0; gridDiv<oldGridToClear.length; gridDiv++){
            oldGridToClear[gridDiv].remove();
    }
    
}
function drawNewGrid(side){

    for (let i=0; i < side; i++){
        for(j=0; j < side; j++){
     const div = document.createElement("div");
     div.setAttribute('id', 'gridDiv');
     div.addEventListener('mouseover', function(e) 
        {e.target.style.background = bkgChoice;})
     gridHolder.appendChild(div);
    }
    }
    placeholder = "repeat("+side+", 1fr)";
    gridHolder.style["grid-template-columns"] = placeholder;

}
