let title = "Danger of Sugar"

let content = {
    oneSubtitle:"What is added sugar",
    one: "Added sugars are sugar carbohydrates (caloric sweeteners) added to food and beverages during their production (industrial processing). Added sugars include sucrose, dextrose, table sugar, syrups, honey, and sugars from concentrated fruit or vegetable juices.",
    twoSubtitle:"Americans overeat added suagr",
    two: "Americans are eating and drinking too many added sugars, which can contribute to health problems such as weight gain and obesity, type 2 diabetes, and heart disease. According to CDC, from 2017 to 2018, the average intake of added sugars was 17 teaspoons for children and adults in America.",
    threeSubtitle:"Americans overeat added suagr",
    three: "Americans are eating and drinking too many added sugars, which can contribute to health problems such as weight gain and obesity, type 2 diabetes, and heart disease. According to CDC, from 2017 to 2018, the average intake of added sugars was 17 teaspoons for children and adults in America."

}
function setup() {
    createCanvas(windowWidth, windowHeight);

    let buttonOne = createButton("Sugar On Your Body");
    let buttonTwo = createButton("How Much Sugar in Your Snacks");
    

    buttonOne.position(150,600);
    buttonOne.size(500,100);
    buttonOne.mouseClicked(openLinkOne);
    buttonOne.style("background-color", "ff555b");
    buttonOne.style("color", "FFFFFF");
    buttonOne.style("strokeWeight", "0");
    buttonOne.style("font-family", "Comic Sans MS");
    buttonOne.style("font-size", "36px");

    buttonTwo.position(150,800);
    buttonTwo.size(700,100);
    buttonTwo.mouseClicked(openLinkTwo);
    buttonTwo.style("background-color", "ff555b");
    buttonTwo.style("color", "FFFFFF");
    buttonTwo.style("strokeWeight", "0");
    buttonTwo.style("font-family", "Comic Sans MS");
    buttonTwo.style("font-size", "36px");
  }

  function openLinkOne() {
      window.open("indexPageTwo.html")
  }

  function openLinkTwo() {
    window.open("indexPageThree.html")
}
  
  function draw() {
    background(254,246,223);
    fill(156, 222, 228);
    noStroke();
    rect(0,0,windowWidth/2,windowHeight);
    triangle(windowWidth/2, windowHeight/2-50, windowWidth/2+60, windowHeight/2, windowWidth/2, windowHeight/2+50);
    
    fill(0);
    textSize(112);
    textFont("Helvetica");
    text(title,150,200,600,400);

    fill(0);
    textSize(24);
    textFont("Helvetica");
    text(content.oneSubtitle,windowWidth/2+200,200,600,400);
    text(content.one,windowWidth/2+200,250,600,400);
    text(content.twoSubtitle,windowWidth/2+200,500,600,400);
    text(content.two,windowWidth/2+200,550,600,400);
    text(content.threeSubtitle,windowWidth/2+200,800,600,400);
    text(content.three,windowWidth/2+200,850,600,400);



  }


  