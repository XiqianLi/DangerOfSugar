let bgBlue;
let bgYellow;

let content = {
    oneSubtitle:"What Is Added Sugar",
    one: "Added sugars are sugar carbohydrates (caloric sweeteners) added to food and beverages during their production (industrial processing). Added sugars include sucrose, dextrose, table sugar, syrups, honey, and sugars from concentrated fruit or vegetable juices.",
    twoSubtitle:"WHO Sugar Recommendations",
    two: " A WHO guideline recommends adults and children reduce their daily intake of free sugars to less than 10% of their total energy intake, which is around 50 grams. A further reduction to below 5% or roughly 25 grams (6 teaspoons) per day would provide additional health benefits.",
    threeSubtitle:"Americans Overeat Added Suagr",
    three: "Americans are eating and drinking too much added sugar, which can contribute to health problems such as weight gain and obesity, type 2 diabetes, and heart disease. According to CDC, from 2017 to 2018, the average intake of added sugars was 17 teaspoons for children and adults in America."

}
function setup() {
    createCanvas(1440, 900);

    let buttonOne = createButton("Sugar On Your Body");
    let buttonTwo = createButton("Sugar In Your Drinks And Snacks");

    buttonProperty(buttonOne,100,520,openLinkOne);
    buttonProperty(buttonTwo,100,650,openLinkTwo);

    bgBlue = color(156, 222, 228);
    bgYellow = color(254,246,223);
    bgRed = color(255, 85, 91);
  }

function buttonProperty(button,x,y,link) {
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
      window.open("indexPageTwo.html","_self")
  }

  function openLinkTwo() {
    window.open("indexPageThree.html","_self")
}
  
  function draw() {

    background(bgYellow);
    
    fill(bgBlue);
    noStroke();
    rect(0,0,720,900);
    triangle(720, 420, 760, 450, 720, 480);
    
    fill(0);
    textSize(112);
    textFont("Comic Sans MS");
    text("Danger",100,260);
    text("Of Sugar",100,400);

    fill(0);
    textSize(18);
    textFont("Comic Sans MS");
    text(content.oneSubtitle,800,160,600,400);
    text(content.one,800,200,600,400);
    text(content.twoSubtitle,800,390,600,400);
    text(content.two,800,430,600,400);
    text(content.threeSubtitle,800,640,600,400);
    text(content.three,800,680,600,400);
  }


  