let r = 0;
let halfWidth = 0;
let halfHeight = 0;
const allArc = 300;
let lengthArc = allArc;
let size = 0;
let barWeight = 0
let rand = Math.floor(Math.random()*100);

function setup() {
  halfWidth = windowWidth*0.5;
  halfHeight = windowHeight*0.5;
  if (halfHeight > halfWidth) {
      r = halfWidth*0.9;
  } else {
      r = halfHeight*0.9;
  }
  size = r*0.8;
  barWeight = r*0.18;

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  lengthArc--;
  if (lengthArc == 0) {
    reset();
  }

  // 画面リセット
  noStroke();
  fill(30);
  rect(0, 0, windowWidth, windowHeight);

  // 中央の描画
  fill(100);
  arc(halfWidth, halfHeight, r*2, r*2, (1.5 - 2*(lengthArc/allArc))*PI, 1.5*PI);
  fill(30);
  ellipse(halfWidth, halfHeight, r*1.7, r*1.7);
  fill("#5ab966");
  textSize(size);
  textAlign(CENTER, CENTER);
  text(rand, halfWidth, halfHeight);

  // 下部の描画
  fill(100);
  rect(0, windowHeight-barWeight, windowWidth, windowHeight);
  fill("#5ab966");
  rect(0, windowHeight-barWeight, windowWidth*(rand/100), windowHeight);
}

function mouseClicked() {
  reset();
}

function reset() {
  lengthArc = allArc;
  rand = Math.floor(Math.random()*100);
}
