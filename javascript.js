const container = document.querySelector('#container');

//Create 16x16 grid
function createGrid (size){
//const container = document.querySelector('#container');
for (let i = 1; i < size * size + 1; i++){
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    div.classList.add('square');
    div.setAttribute("id", "square");
    container.appendChild(div);
}
}
//function that creates hover effect
function hover(){ 
    let items = document.querySelectorAll('.square');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "blue"; 
        });
    });
}


//create button
function buttonPush() { //create button
    let btn = document.createElement("button");
    btn.classList.add('button');
    btn.innerHTML= "Click to adjust grid size";
    document.body.appendChild(btn);
}

buttonPush();

//button event that will take user input
document.querySelector('.button').addEventListener('click', promptMe);

function promptMe(){
    var userInput = prompt("Enter Grid Size (Limit is 100)");
    createGrid(userInput); 
    hover();
}

//create another button that will remove grid 
function buttonPushErase() { //create button
    let btn = document.createElement("button");
    btn.classList.add('button2');
    btn.setAttribute("id","button2");
    btn.innerHTML= "Erase grid";
    document.body.appendChild(btn);

    button2.onclick = () => {
        const myNode = document.getElementById("container");
        myNode.innerHTML = '';
    }
}

buttonPushErase();




