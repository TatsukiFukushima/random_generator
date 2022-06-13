let r = 0;
let heightWithoutBar = 0;
const allArc = 300;
let lengthArc = allArc;
let size = 0;
let barWeight = 0
let rand = Math.floor(Math.random()*100);

function setup() {
  if (windowHeight > windowWidth) {
      barWeight = windowWidth*0.08;
      heightWithoutBar = windowHeight - barWeight;
      r = windowWidth*0.87;
  } else {
      barWeight = windowHeight*0.06;
      heightWithoutBar = windowHeight - barWeight;
      r = heightWithoutBar*0.87;
  }
  size = r*0.4;

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
  arc(windowWidth*0.5, heightWithoutBar*0.5, r, r, (1.5 - 2*(lengthArc/allArc))*PI, 1.5*PI);
  fill(30);
  ellipse(windowWidth*0.5, heightWithoutBar*0.5, r*0.85, r*0.85);
  fill("#5ab966");
  textSize(size);
  textAlign(CENTER, CENTER);
  text(rand, windowWidth*0.5, heightWithoutBar*0.5);

  // 下部の描画
  fill(100);
  rect(0, heightWithoutBar, windowWidth, windowHeight);
  fill("#5ab966");
  rect(0, heightWithoutBar, windowWidth*(rand/100), windowHeight);
}

function mouseClicked() {
  reset();
}

function reset() {
  lengthArc = allArc;
  rand = Math.floor(Math.random()*100);
}
