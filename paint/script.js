let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let colorSelection = 0xe; // startvalue color selection
let jsonObj = "";
let ega = ["#000000", "#0000aa", "#00aa00", "#00aaaa", "#aa0000", "#aa00aa", "#aa5500", "#aaaaaa", "#ffffff", "#5555ff", "#55ff55", "#55ffff", "#ff5555", "#ff55ff", "#ffff55", "#555555"]; // colors
let pallet = [];
let drawing = []; // drawing object global
let boxWidth = boxHeigt = 80;
let preloadjsonthing = "preload.json"
let url = preloadjsonthing;
let put = "&put=";
let jsonWritephp = "jsonWrite.php";
let url2 = jsonWritephp + put;
 let refreshTimer = window.setInterval(serverGetJson, 2000); // timer get data from server
class Bit {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.colorBit = false;
    addEventListener('mousedown', (e) => {
      let box = canvas.getBoundingClientRect();
      let mouseX = e.clientX - box.left; // is mouse in the box?
      let mouseY = e.clientY - box.top; // is mouse in the box?
      if (mouseX > this.x && mouseX < this.x + boxWidth && mouseY > this.y && mouseY < this.y + boxHeigt) {
        if (this.colorBit) {
          colorSelection = this.color;
        } else {
          this.color = colorSelection;
          this.draw(context);
          serverWriteJson(drawing);

        }
      }
    })
  }
  draw(context) {
    context.beginPath();
    context.fillStyle = ega[this.color];
    context.rect(this.x, this.y, boxWidth, boxHeigt);
    context.stroke();
    context.fill();
    context.closePath();
  }
}



function init() {
  context.canvas.width = 12 * boxWidth; // set canvas width
  context.canvas.height = 8 * boxHeigt; // set canvas height
  for (let i = 0; i < 0x10; i++) {
    let numOnRow = 2;
    let bitWidth = boxWidth;
    let x = 800 + (i % numOnRow) * bitWidth;
    let y = Math.floor(i / numOnRow) * bitWidth;
    let bit = new Bit(x, y, i);
    bit.colorBit = true;
    bit.draw(context);
    pallet.push(bit);
  }
  for (i = 0; i < 80; i++) {
    //grid 80 col x 10 row
    let numOnRow = 10;
    let bitWidth = boxWidth;
    let x = (i % numOnRow) * bitWidth;
    let y = Math.floor(i / numOnRow) * bitWidth;
    let bit = new Bit(x, y, 0xf); // 0xf background color from ega array

    bit.draw(context);
    drawing[i] = bit; //opslag van de tekening tbv export naar json
  }
}
init();
serverGetJson();
function readJson(jsonString)
{
  for (i = 0; i < 80; i++) {
    drawing[i].color = jsonString[i].color;
    drawing[i].draw(context);
  }
}
