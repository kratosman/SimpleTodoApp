var btn = document.getElementById("btnTodo");
var containerList = document.querySelector(".todo-log");
//button 
btn.addEventListener("click", () => {
    var textNode = document.getElementById('inputTodo').value;
    var div = document.createElement('div');
    var divTwo = document.createElement('div');
    var span = document.createElement('span');
    var checkList = document.createElement('button');
    var trash = document.createElement('img');
    var getText = document.createTextNode(textNode);


    span.appendChild(getText);
    span.textThrought = 'spanText';
    div.className = 'todo-list-item';
    checkList.className = "buttonList";
    trash.className = 'trashButton';
    trash.src = './images/trash.svg';
    divTwo.className = 'newItem';

    divTwo.appendChild(span);
    div.appendChild(divTwo);
    divTwo.appendChild(checkList);
    div.appendChild(trash);
    containerList.appendChild(div);

    checkList.addEventListener('click', () => {
        checkList.classList.toggle("active");
        span.classList.toggle("textStrike");
    
        trash.addEventListener('click', () => {
            containerList.removeChild(div);
        })
    
    });
    
})