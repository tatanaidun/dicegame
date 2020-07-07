
function randomNumberGenerator(){
  var number=Math.floor(Math.random()*6)+1;
  return number;
}

function displayImages(number1,number2){
  document.querySelector(".img1").setAttribute("src","images/dice"+number1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+number2+".png");
}

function changeHeading(number1,number2){
  var output="";
  if(number1>number2){
    output="🚩Player1 Wins";
  }
  else if(number1<number2){
    output="Player2 Wins🚩";
  }
  else{
    output="It's draw";
  }
  document.querySelector(".container h1").textContent=output;
}

function onRefresh(){
  var dice1=randomNumberGenerator();
  var dice2=randomNumberGenerator();
  changeHeading(dice1,dice2);
  displayImages(dice1,dice2);
}
