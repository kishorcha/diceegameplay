var randomnumber1= Math.floor(Math.random()*6+1);


var randomimage= "dice"+randomnumber1+".png";

var random= "images/"+randomimage;

document.querySelectorAll("img")[0].setAttribute("src",random);

var ramdomnumber2= Math.floor(Math.random()*6+1);

var randomimage2= "dice"+ramdomnumber2+".png";
var random2= "images/"+randomimage2;
document.querySelectorAll("img")[1].setAttribute("src",random2);

if(randomnumber1>ramdomnumber2){
    document.querySelector("h1").innerHTML="Player A has won";
}else if(randomnumber1<ramdomnumber2){
    document.querySelector("h1").innerHTML="Player B has won"
}else{
    document.querySelector("h1").innerHTML="Match is tie";
}