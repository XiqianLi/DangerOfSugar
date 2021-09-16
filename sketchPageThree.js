let x = 200;
let bgRed;
let bgYellow;
let font;

let dic;

function preload() {
  bigCookie = loadImage("img/food/bigCookie.png")
  cheeseCake = loadImage("img/food/cheeseCake.png")
  granalo = loadImage("img/food/granalo.png")
  coke = loadImage("img/food/coke.png")
  energyBar = loadImage("img/food/energyBar.png")
  frappuccino = loadImage("img/food/frappuccino.png")
  greenTea = loadImage("img/food/greenTea.png")
  fruitCup = loadImage("img/food/fruitCup.png")
  iceCreamBar = loadImage("img/food/iceCreamBar.png")
  yogurt = loadImage("img/food/yogurt.png")
  muffin = loadImage("img/food/muffin.png")
  milkTea = loadImage("img/food/milkTea.png")
  sugar = loadImage("img/food/sugar.png")

  aBlackCoffee = loadImage("img/alternative/aBlackCoffee.png")
  aBread = loadImage("img/alternative/aBread.png")
  aCraker = loadImage("img/alternative/aCraker.png")
  aFruit = loadImage("img/alternative/aFruit.png")
  aDarkChocolate = loadImage("img/alternative/aDarkChocolate.png")
  aGreekYogurt = loadImage("img/alternative/aGreekYogurt.png")
  aGreenTea = loadImage("img/alternative/aGreenTea.png")
  aOldFashionedOat = loadImage("img/alternative/aOldFashionedOat.png")
  aWater = loadImage("img/alternative/aWater.png")

}
 
// create canvas, background, and buttons
function setup() {

  bgYellow = color(254,246,223);
  bgBlue = color(156,222,228);
  bgRed = color(255, 85, 91);
  font = "Comic Sans MS";

  createCanvas(1440, 1200);
  background(bgYellow);

  noStroke();
  fill(bgBlue);
  rect(0,0,1440,100)

  fill(0);
  textSize(48);
  textFont(font);
  text("Sugar In Your Drinks And Snacks",340,70);

  let buttonOne = createButton("Reset");
  buttonOne.mousePressed(setup);
  let buttonTwo = createButton("Back");

  buttonProperty(buttonOne,80,24,openLinkTwo);
  buttonProperty(buttonTwo,1200,24,openLinkOne);

}

//set button properties
function buttonProperty(button,x,y,link) {
  button.position(x,y);
  button.size(160,60);
  button.mouseClicked(link);
  button.style("background-color", bgRed);
  button.style("color", "white");
  button.style("strokeWeight", "0");
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "18px");
}

function openLinkOne() {
  window.open("indexPageOne.html","_self")
}

function openLinkTwo() {
window.open("indexPageThree.html","_self")
}


// draw snacks and drinks
function draw() {
  image(bigCookie,150,180,100,100);
  image(cheeseCake,300,180,100,100);
  image(granalo,450,180,100,100);
  image(coke,600,180,100,100);
  image(energyBar,750,180,100,100);
  image(frappuccino,900,180,100,100);


  image(iceCreamBar,150,320,100,100);
  image(yogurt,300,320,100,100);
  image(muffin,450,320,100,100);
  image(milkTea,600,320,100,100);
  image(greenTea,750,320,100,100);
  image(fruitCup,900,320,100,100);

  textSize(24);
  fill(0);
  text("Pick Up One",80,150);
  text("See How Much Sugar Added",80,500);
  text("Your Alternative Option",80,1000);

}

//when mouse on click, show sugar and alternative option
function mouseClicked() {
  drawActive(150,180,"A big cookie (60g) contains 30g added sugar.",8,aCraker,"Roasted Craker");
  drawActive(300,180,"A slice of chessecake(120g) contains 35g added sugar.",9,aBread,"Homemade Bread");
  drawActive(450,180,"A small bowl of granola(136g)contains 18g added sugar.",5,aOldFashionedOat,"Old Fashioned Oat");
  drawActive(600,180,"A can of Coke(330ml) contains 40g added sugar.",10,aWater,"Water");
  drawActive(750,180,"An energy bar(68g)contains 26g added sugar.",7,aDarkChocolate,"Dark Chocolate");
  drawActive(900,180,"A cup of medium-sized coffee Frappuccino(475ml) contains 45g added sugar.",11,aBlackCoffee,"Black Coffee");

  drawActive(150,320,"An ice cream bar(79g) contains 19g added sugar.",4,aGreekYogurt,"Plain Greek Yogurt");
  drawActive(300,320,"A small cup of yogurt(170g) containss 15g added sugar.",3,aGreekYogurt,"Plain Greek Yogurt");
  drawActive(450,320,"Two slices of French Brioche(90g) contain 12g added sugar.",3,aBread,"Homemade Bread");
  drawActive(600,320,"A medium-sized boba milktea contains 37g added sugar.",9,aWater,"Water");
  drawActive(750,320,"A medium-sized sweentened green tea(475ml) contains 34g added sugar.",6,aGreenTea,"Unsweetened Green Tea");
  drawActive(900,320,"A cup of sliced fruit(123g) contains 19g added sugar.",4,aFruit,"Real Fruit");

}

function drawActive(x,y,title,number,alternative,atitle) {
  if (dist(mouseX, mouseY, x+50, y+50)<50) {

    fill(bgYellow);
    noStroke();
    rect(0,160,1440,300);
    rect(0,460,1600,300);
    rect(0,860,1600,400);

    noStroke();
    fill(bgRed);
    ellipse(x+50, y+50, 120);

    fill(bgRed);
    textSize(24);
    textFont("Comic Sans MS");
    text(title,80,680);
    text(atitle,80,1170);

    for (let j=0; j<7; j++){
      image(sugar,150+j*100,750,80,80)
    }
    text("The suggested intake of added sugar is 25 to 50 grams per day based on your daily energy intake.",80,880);
    textSize(16);
    text("In the chart above, a sugar bag is equivalent to 5 grams of added sugar.",80,910);

    for (let i =0; i< number; i++){
      image(sugar,150+i*100,550,80,80)
    }

    image(alternative,150,1030,100,100)
  }
} 

