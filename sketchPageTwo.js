let img;
function preload() {
    img = loadImage("/Users/xiqianli/Documents/school/MM621/P1/code_page1/pic.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    createCanvas(windowWidth, windowHeight);
    background(254,246,223);
    fill(156, 222, 228);
    noStroke();
    rect(windowWidth/2,0,windowWidth/2,windowHeight);
    triangle(windowWidth/2, windowHeight/2-50, windowWidth/2-60, windowHeight/2, windowWidth/2, windowHeight/2+50);
    image(img,windowWidth/2+100,windowHeight/2-50)
  }