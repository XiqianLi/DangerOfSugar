let title = "Danger of Sugar";
let blue;
let yellow;

let content = {
    oneSubtitle:"What is added sugar",
    one: "Added sugars are sugar carbohydrates (caloric sweeteners) added to food and beverages during their production (industrial processing). Added sugars include sucrose, dextrose, table sugar, syrups, honey, and sugars from concentrated fruit or vegetable juices.",
    twoSubtitle:"Americans overeat added suagr",
    two: "Americans are eating and drinking too many added sugars, which can contribute to health problems such as weight gain and obesity, type 2 diabetes, and heart disease. According to CDC, from 2017 to 2018, the average intake of added sugars was 17 teaspoons for children and adults in America.",
    threeSubtitle:"Americans overeat added suagr",
    three: "Americans are eating and drinking too many added sugars, which can contribute to health problems such as weight gain and obesity, type 2 diabetes, and heart disease. According to CDC, from 2017 to 2018, the average intake of added sugars was 17 teaspoons for children and adults in America."

}
function setup() {
    createCanvas(1440, 900);

    let buttonOne = createButton("Sugar On Your Body");
    let buttonTwo = createButton("How Much Sugar in Your Snacks");

    buttonProperty(buttonOne,150,520,openLinkOne);
    buttonProperty(buttonTwo,150,650,openLinkTwo);

    blue = color(156, 222, 228);
    yellow = color(254,246,223);
  
  }

function buttonProperty(button,x,y,link) {
  noStroke();
  button.position(x,y);
  button.size(400,80);
  button.mouseClicked(link);
  button.style("background-color", "ff555b");
  button.style("color", "FFFFFF");
  button.style("strokeWeight", "0");
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "24px");

}

  function openLinkOne() {
      window.open("indexPageTwo.html")
  }

  function openLinkTwo() {
    window.open("indexPageThree.html")
}
  
  function draw() {
    // blue = color(156, 222, 228);
    // yellow = color(254,246,223);

    background(yellow);
    
    fill(blue);
    noStroke();
    rect(0,0,720,900);
    triangle(720, 400, 780, 450, 720, 500);
    
    fill(0);
    textSize(112);
    textFont("Helvetica");
    text(title,150,150,600,400);

    fill(0);
    textSize(18);
    textFont("Helvetica");
    text(content.oneSubtitle,800,160,600,400);
    text(content.one,800,200,600,400);
    text(content.twoSubtitle,800,400,600,400);
    text(content.two,800,440,600,400);
    text(content.threeSubtitle,800,640,600,400);
    text(content.three,800,680,600,400);
  }


  