// restart button functionality

var restart_but = document.querySelector("#reset");

var squares = document.querySelectorAll("td");

function clear() {
    console.log("in function");
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}
restart_but.addEventListener("click",clear)

// square markers

function changeMarker() {
    if(this.textContent===""){
        this.textContent = "X";
    } else if (this.textContent==="X"){
        this.textContent = "O";
    }else {
        this.textContent = "";
    }
}

for (var i=0;i<squares.length;i++){
    squares[i].addEventListener('click',changeMarker)
}