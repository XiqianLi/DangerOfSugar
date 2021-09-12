let img;
let content = {
  brain:"When we are motivated to improve our diets, it’s usually because of food’s effect on our bodies: We want better digestion, body composition, or energy levels. But we often overlook our diet’s effect on our brains and vice versa. Once your brain receives a signal that sugar is on the way, its reward system lights up like 4th of July fireworks. As a result, it is remarkably addictive – even more so than cocaine.",
  skin:"Celebrity dermatologists are fond of saying that reducing your sugar intake can make you look younger and improve the overall appearance of your skin. Don’t dismiss this notion as a quasi-scientific myth that needs to be debunked. It’s well supported by scientific research.Sugar intake causes your insulin levels to spike (see 'Pancreas', below) which in turn prompts inflammation. Inflammation, among other things, produces enzymes that break down skin-supporting collagen and elastin in a process known as glycation. In this manner, glycation accelerates the effects of aging and exacerbates pre-existing conditions like acne and rosacea.",
  mouth:"Sugar on your tongue triggers the beginning of a full-body reaction. As soon as your taste buds detect sweetness, they start sending signals to your brain and body that a reward is on the way. Sugar also has immediate effects on your mouth itself. Sugar consumption leads to tooth decay by feeding the bacteria in your mouth. Bacteria eats sugar and produces acid as a waste product, which breaks down tooth enamel over time.", 
  joints:"If you have joint pain, here’s more reason to lay off the candy. - eating lots of sweets has been shown to worsen joint pain because of the inflammation they cause in the body. Plus, studies show that sugar consumption can increase your risk of developing rheumatoid arthritis",
  liver:"An abundance of added sugar likely contains fructose or high fructose corn syrup. Fructose is process in the liver and in large amounts can damage the liver. When fructose is broken down in the liver it is transformed into fat. In turn this causes: Non-alcoholic fatty liver disease (NAFLD): This is seen as excess fat build-up in the liver. Non-alcoholic steatohepatitis (NASH): is a fatty liver, inflammation and steatosis, which is scarring of the liver. Scarring eventually cuts off blood supply to the liver. Many of these develop into cirrhosis and will need a liver transplant.",
  heart:"When you eat excess sugar, the extra insulin in your bloodstream can affect your arteries all over your body. It causes their walls to get inflamed, grow thicker than normal and more stiff, this stresses your heart and damages it over time. This can lead to heart disease, like heart failure, heart attacks, and strokes. Research also suggests that eating less sugar can help lower blood pressure, a major risk factor for heart disease. Plus, people who eat a lot of added sugar (where at least 25% of their calories comes from added sugar) are twice as likely to die of heart disease as those whose diets include less than 10% of total calories from added sugar.",
  pancreas:"When you eat, your pancreas pumps out insulin. But if you’re eating way too much sugar and your body stops responding properly to insulin, your pancreas starts pumping out even more insulin. Eventually, your overworked pancreas will break down and your blood sugar levels will rise, setting you up for type 2 diabetes and heart disease.",
  kidneys:"If you have diabetes, too much sugar can lead to kidney damage. The kidneys play an important role in filtering your blood. Once blood sugar levels reach a certain amount, the kidneys start to release excess sugar into your urine. If left uncontrolled, diabetes can damage the kidneys, which prevents them from doing their job in filtering out waste in your blood. This can lead to kidney failure.",
  bodyWeight:"This probably isn’t news to you, but the more sugar you eat, the more you’ll weigh. Research shows that people who drink sugar-sweetened beverages tend to weigh more -- and be at higher risk for type 2 diabetes -- than those who don’t. One study even found that people who increased their sugar intake gained about 1.7 pounds in less than 2 months. Excess amounts of sugar can inflame fat cells causing them to release chemicals that increase weight."
}
let bgRed;
let redActive;
let bgBlue;
let bgYellow;

// preload image
function preload() {
    img = loadImage("pic4.png");
}

// create canvas, draw background and titles on the left
function setup() {
    createCanvas(1440, 900);
    background(254,246,223);

    bgRed = color(255, 85, 91);
    bgBlue = color(156, 222, 228);
    redActive = color(255, 85, 91, 80);
    bgYellow = color(254,246,223);

    fill(bgBlue);
    noStroke();
    rect(600,0,900,900);
    triangle(600, 420, 560, 450, 600, 480);

    fill(0);
    textSize(64);
    textFont("Comic Sans MS");
    text("How Does",60,300);
    text("Too Much",60,400);
    text("Added Sugar",60,500);
    text("Affects",60,600);
    text("Your Body",60,700);

// create buttons and set properties
    let buttonOne = createButton("Reset");
    let buttonTwo = createButton("Back");
    buttonOne.mousePressed(setup);

    buttonProperty(buttonOne,60,120,openLinkTwo);
    buttonProperty(buttonTwo,320,120,openLinkOne);
  }

function openLinkOne() {
    window.open("indexPageOne.html","_self")
}

function openLinkTwo() {
  window.open("indexPageTwo.html","_self")
}

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

// draw bullet points
function draw() {
  drawRedEllipse(700,100,"Brain");
  drawRedEllipse(700,250,"Skin");
  drawRedEllipse(700,400,"Liver");
  drawRedEllipse(700,550,"Kidneys");
  drawRedEllipse(700,700,"Weight");

  drawRedEllipse(1300,100,"Teeth")
  drawRedEllipse(1300,250,"Heart")
  drawRedEllipse(1300,400,"Pancreas")
  drawRedEllipse(1300,550,"Joints")
  
  image(img,800,60,550,800)
}

// when mouse on click, highlight bullet points and create content
function mouseClicked() {
  drawActive(700,100,"Brain",content.brain);
  drawActive(700,250,"Skin",content.skin);
  drawActive(700,400,"Liver",content.liver);
  drawActive(700,550,"Kidneys",content.kidneys);
  drawActive(700,700,"Weight",content.bodyWeight);

  drawActive(1300,100,"Teeth",content.mouth);
  drawActive(1300,250,"Heart",content.heart);
  drawActive(1300,400,"Pancreas",content.pancreas);
  drawActive(1300,550,"Joint",content.joints);
}


function drawRedEllipse(x,y,i) {
  noStroke();
  fill(bgRed);
  ellipse(x, y, 40);

  fill(12, 107, 166);
  textSize(18);
  textFont("Comic Sans MS");
  text(i,x+30,y+8)
}

function drawActive(x,y,title,content) {
  if (dist(mouseX, mouseY, x, y)<30) {

    fill(bgBlue);
    noStroke();
    rect(600,0,900,900);
    
    noStroke();
    fill(redActive);
    ellipse(x, y, 60);

    fill(bgYellow);
    rect(0,0,550,900);
    fill(0);
    textSize(64);
    textFont("Comic Sans MS");
    text(title,80,300);
    textSize(18);
    textFont("Comic Sans MS");
    text(content,80,360,400,800)
  }
} 


