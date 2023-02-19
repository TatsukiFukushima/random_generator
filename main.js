let beforeWindowHeight;
let beforeWindowWidth;
let r = 0;
let heightWithoutBar = 0;
const allArc = 300;
let lengthArc = allArc;
let size = 0;
let barHeight = 0
let rand = Math.floor(Math.random()*100);
let lastTouched = 0;

function setup() {
  if (windowHeight > windowWidth) {
      barHeight = windowWidth*0.08;
      heightWithoutBar = windowHeight - barHeight;
      r = windowWidth*0.87;
  } else {
      barHeight = windowHeight*0.06;
      heightWithoutBar = windowHeight - barHeight;
      r = heightWithoutBar*0.87;
  }
  size = r*0.5;

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  lengthArc--;
  if (lengthArc == 0) {
    reset();
  }

  // 画面サイズが変わった場合
  if (beforeWindowHeight != windowHeight || beforeWindowWidth != windowWidth) {
    setup();
    beforeWindowHeight = windowHeight;
    beforeWindowWidth = windowWidth;
  }

  // 画面リセット
  noStroke();
  fill(20);
  rect(0, 0, windowWidth, windowHeight);

  // 中央の描画
  fill(60);
  arc(windowWidth*0.5, heightWithoutBar*0.5, r, r, (1.5 - 2*(lengthArc/allArc))*PI, 1.5*PI);
  fill(20);
  ellipse(windowWidth*0.5, heightWithoutBar*0.5, r*0.85, r*0.85);
  fill("#5ab966");
  textSize(size);
  textAlign(CENTER, CENTER);
  text(rand, windowWidth*0.5, heightWithoutBar*0.5);

  // 下部の描画
  fill(60);
  rect(0, heightWithoutBar, windowWidth, windowHeight);
  fill("#5ab966");
  rect(0, heightWithoutBar, windowWidth*(rand/100), windowHeight);
}

function touchStarted() {
  // 普通のタップで touchStarted() はなぜか2回発火してしまうので、調整。
  if (millis()-lastTouched > 300) {
    lastTouched = millis();
    reset();
  }
}

// 乱数と周囲の輪をリセット
function reset() {
  lengthArc = allArc;
  rand = Math.floor(Math.random()*100);
}
