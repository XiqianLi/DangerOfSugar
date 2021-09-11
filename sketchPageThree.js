let x = 200;
let red;
let yellow;
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
 

function setup() {

  yellow = color(254,246,223);
  blue = color(156,222,228);
  red = color(255, 85, 91);
  font = "Comic Sans MS";

  createCanvas(1440, 1200);
  background(yellow);

  noStroke();
  fill(blue);
  rect(0,0,1440,100)

  fill(0);
  textSize(48);
  textFont(font);
  text("Danger Of Sugar",540,70);

  let buttonOne = createButton("Reset");
  buttonOne.mousePressed(setup);
  let buttonTwo = createButton("Back To Homepage");

  buttonProperty(buttonOne,80,20,openLinkTwo);
  buttonProperty(buttonTwo,1150,20,openLinkOne);

}

function buttonProperty(button,x,y,link) {
  button.position(x,y);
  button.size(200,60);
  button.mouseClicked(link);
  button.style("background-color", red);
  button.style("color", "white");
  button.style("strokeWeight", "0");
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "18px");
}

function openLinkOne() {
  window.open("indexPageOne.html")
}

function openLinkTwo() {
window.open("indexPageThree.html")
}



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
  text("Pick Up A Snack",80,150);
  text("See How Much Sugar",80,500);
  text("Your Alternative Option",80,950);




  // fill(255,85,91);
  // noStroke();
  // rect(100,700,160,80);
  // textSize(48);
  // fill(0);
  // text("Reset",115,755);

}

function mouseClicked() {
  drawActive(150,180,"30g added sugar in one 60g cookie.",5,aCraker,"Roasted Craker");
  drawActive(300,180,"35g added sugar in slice of chessecake.",6,aBread,"Homemade Bread");
  drawActive(450,180,"17g added sugar in small bowl of granola.",3,aOldFashionedOat,"Old Fashioned Oat");
  drawActive(600,180,"40g added sugar in a can of 330ml Coke.",7,aWater,"Water");
  drawActive(750,180,"31g added sugar in an energy bar.",5,aDarkChocolate,"Dark Chocolate");
  drawActive(900,180,"45g added sugar in a grande coffee Frappuccino",8,aBlackCoffee,"Black Coffee");

  drawActive(150,320,"19g added sugar in an ice cream bar.",3,aGreekYogurt,"Plain Greek Yogurt");
  drawActive(300,320,"15g added sugar in a yogurt.",2,aGreekYogurt,"Plain Greek Yogurt");
  drawActive(450,320,"37g added sugar in a muffin.",6,aBread,"Homemade Bread");
  drawActive(600,320,"37g added sugar in a milktea.",6,aWater,"Water");
  drawActive(750,320,"34g added sugar in a sweetened green tea.",6,aGreenTea,"Green Tea");
  drawActive(900,320,"26g added sugar in a peach fruit cup.",4,aFruit,"Real Fruit");

}

function drawActive(x,y,title,number,alternative,atitle) {
  if (dist(mouseX, mouseY, x+50, y+50)<50) {

    fill(yellow);
    noStroke();
    rect(0,160,1440,300);
    rect(0,460,1600,300);
    rect(0,860,1600,300);

    noStroke();
    fill(red);
    ellipse(x+50, y+50, 120);

    fill(red);
    textSize(24);
    textFont("Comic Sans MS");
    text(title,80,680);
    text(atitle,80,1120);

    for (let j=0; j<4; j++){
      image(sugar,150+j*100,750,80,80)
    }
    text("Suggested daily maximum of added sugar intake is 25g.",80,880);

    for (let i =0; i< number; i++){
      image(sugar,150+i*100,550,80,80)
    }

    image(alternative,150,980,100,100)
  }
} 




// function mousePressed() {
//   clicked(mouseX,mouseY)
// }

// function clicked(px,py) {
//   fill(254,246,223)
//   rect(0,100,windowWidth,200)
//   if (px >125 && px<275 && py>125 && py<275 ) {
//       // background(200);
//       fill(red);
//       ellipse(200,200,120);

//       for (var i = 100; i<500; i=i+75) {
//           image(img4,i,500,50,50)
//       }
//       textSize(36);
//       fill(0);
//       text("17 grams added suagr in a single serving of granolas",100,600);
      


//   } else if (px >325 && px<475 && py>125 && py<275) {
//       // background(200);
//       fill(red);
//       ellipse(400,200,120);
//       for (var i = 100; i<1000; i=i+75) {
//           image(img4,i,500,50,50)
//       textSize(36);
//       fill(0);
//       text("39 grams added suagr in a 12 oz Coca-Cola can",100,600);
//       }

//   } else if (px>100 && px<260 && py>700 && py<780) {
//       background(200);
//   }
// }