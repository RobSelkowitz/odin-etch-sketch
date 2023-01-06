createGrid(120);


function createGrid(side){

    const gridHolder = document.querySelector('#gridHolder');
    
    for (let i=0; i < side; i++){
        for(j=0; j < side; j++){
     const div = document.createElement("div");
     div.addEventListener('mouseover', function(e) 
        {e.target.style.background = 'grey';})
     gridHolder.appendChild(div);
    }
    }
    placeholder = "repeat("+side+", 1fr)";
    gridHolder.style["grid-template-columns"] = placeholder;
}
