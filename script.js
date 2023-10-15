//Create a webpage with 16x16 grid of Square Divs
const divContainer = document.querySelector("#container");
const gridButton = document.createElement('button');
const body = document.querySelector("body");

gridButton.textContent="Change Grid Size";
body.prepend(gridButton)

createGrid(16);

function getGridSize(){
    let gridSize = Number(prompt("How many squares per side for the new grid?"));
    if(typeof gridSize==Number){
        if(gridSize>100){
            gridSize = alert("Grid size too large. No values larger than 100. Please Retry");
            getGridSize()
        } else {
            return gridSize;
        }
    }// else {
    //     alert("Invalid grid size input");
    //     getGridSize();
    // }
}   

function createGrid(size){
    for(i = 0; i<size;i++){ // create a  new row
        const divRowContainer = document.createElement('div');
        divRowContainer.setAttribute('id','divRowContainer');
        divContainer.appendChild(divRowContainer);
        
        for(j = 0; j<size;j++){ //populate a full row
            const div = document.createElement('div');
            div.setAttribute('id','gridDiv');
            divRowContainer.appendChild(div);
        }


    }    
    
}

gridButton.addEventListener('click', function (e){
    createGrid(getGridSize())
});

const gridList = document.querySelectorAll('#gridDiv');
gridList.forEach((grid) => {
    grid.addEventListener('mouseenter', function (e){
        grid.setAttribute('style','background-color: black');
    });
    grid.addEventListener('mouseleave', function (e){
        grid.setAttribute('style','background-color: white');
    });
});



