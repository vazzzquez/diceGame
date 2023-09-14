//Need a function to generate a random number between 1 and 6
let p1=0;
let p2=0;
function random(){
    let number = Math.floor((Math.random() * 6)+1);
    return number; 
}
//Make a function to decide the winner
function game(p1, p2){
    if(p1>p2){
    document.querySelector(".header").innerHTML = "Player 1 wins"    
    }else if (p1<p2){
        document.querySelector(".header").innerHTML = "Player 2 wins"
    }else{
        document.querySelector(".header").innerHTML = "Tie"
    }
}
//Need to assign the random number generated to player 1 and player 2;
p1 = random();
p2 = random();

//Change the image depending on the random number by changing the src attribute;
if(p1===1){
    document.querySelector(".p1 img").setAttribute("src","./images/1.png");
}else if(p1===2){
    document.querySelector(".p1 img").setAttribute("src","./images/2.png"); 
}else if(p1===3){
    document.querySelector(".p1 img").setAttribute("src","./images/3.png");
}else if(p1===4){
    document.querySelector(".p1 img").setAttribute("src","./images/4.png");
}else if(p1===5){
    document.querySelector(".p1 img").setAttribute("src","./images/5.png");
}else {
    document.querySelector(".p1 img").setAttribute("src","./images/6.png");
}
//Do the same for p2
if(p2===1){
    document.querySelector(".p2 img").setAttribute("src","./images/1.png");
}else if(p2===2){
    document.querySelector(".p2 img").setAttribute("src","./images/2.png"); 
}else if(p2===3){
    document.querySelector(".p2 img").setAttribute("src","./images/3.png");
}else if(p2===4){
    document.querySelector(".p2 img").setAttribute("src","./images/4.png");
}else if(p2===5){
    document.querySelector(".p2 img").setAttribute("src","./images/5.png");
}else {
    document.querySelector(".p2 img").setAttribute("src","./images/6.png");
}
game(p1,p2);
