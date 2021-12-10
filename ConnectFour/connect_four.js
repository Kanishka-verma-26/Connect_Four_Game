var a =prompt("Player 1, Enter Your Name : ")
alert(a+" will be pink")
var b =prompt("Player 1, Enter Your Name : ")
alert(b+" will be blue")
var aColor = 'rgb(168, 50, 72)';
var bColor = 'rgb(121, 173, 189)';

var game_on = true;
var table = $('table tr');


function changeColor(ri,ci,c){
    return table.eq(ri).find('td').eq(ci).find('button').css("background-color",c);
}

function returnColor(ri,ci){
    return table.eq(ri).find('td').eq(ci).find("button").css("background-color");
}

function chkBottom(ci){
    var colorReport = returnColor(5,ci);
    for (var i=5;i>-1;i--){
        colorReport = returnColor(i,ci);
        if (colorReport === "rgb(212, 172, 152)"){
            return i
        }
    }
}

function colorMatchChk(one,two,three,four){
    return (one === two && one === three && one === four && one !== 'rgb(212, 172, 152)' && one !== undefined )
}

function horizontalWinChk(){
    for (var row =0; row <6; row++){
        for (var col = 0; col<4; col++){
            if (colorMatchChk(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row ,col+3))){
                console.log('horizontal');
                reportWin(row,col);
                return true;
            } else {
                continue;
            }
        }
    }
}


function verticalWinChk(){
    for (var col =0; col <7; col++){
        for (var row = 0; row<3; row++){
            if (colorMatchChk(returnColor(row,col), returnColor(row+1,col), returnColor(row+2,col), returnColor(row+3 ,col))){
                console.log('vertical');
                reportWin(row,col);
                return true;
            } else {
                continue;
            }
        }
    }
}


function diagonalWinChk(){
    for (var col =0; col <5; col++){
        for (var row = 0; row<7; row++){
            if (colorMatchChk(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2,col+2), returnColor(row+3 ,col+3))){
                console.log('diagonal');
                reportWin(row,col);
                return true;
            } else if (colorMatchChk(returnColor(row,col), returnColor(row-1,col+1), returnColor(row-2,col+2), returnColor(row-3 ,col+3))){
                console.log('diagonal');
                reportWin(row,col);
                return true;
            }else {
                continue;
            }
        }
    }
}

function reportWin(ri,ci){
    console.log("Congratulations!, you won starting at this row,col");
    console.log(ri)
    console.log(ci)
}

// main code

// start with player 1

var currentPlayer = 1;
var currName = a;
var currColor = aColor;

$('h5').text(a+" , It's your turn, pick a column to drop in!!");
$('table button').on('click',function (){
    var col = $(this).closest('td').index();
    var bottomAvail = chkBottom(col);
    changeColor(bottomAvail,col,currColor);
    if (horizontalWinChk() || verticalWinChk() || diagonalWinChk()){
        $('h1').text("Congratulations! "+currName+", You have WON !")
        $("h4").fadeOut("fast");
        $("h5").fadeOut("fast");

    }
    currentPlayer = currentPlayer * -1;

    if (currentPlayer === 1){
        currName = a;
        $('h5').text(currName+" ,its your turn.")
        currColor = aColor;
    } else {
        currName = b;
        $('h5').text(currName+" ,its your turn.")
        currColor = bColor;
    }
})