var canva1 = document.getElementById('canvas1'),
    canva2 = document.getElementById('canvas2');
var ctx1 = canva1.getContext('2d'),     //fishtes ,dust,UI,circle 
    ctx2 = canva2.getContext('2d');    //background ane fruits
var bgImage = new Image();
var canW = canva1.clientWidth,
    canH = canva1.clientHeight;

var aneO = new Ane();

var fruits = new FruitO();
var bigFish = new BigFish();
var smallFish = new SmallFish();

var mX = canW * 0.5,mY = canH * 0.5 ;


var deltaTime;

var lastTime = Date.now();


init();
canva1.addEventListener('mousemove', mouseOver, false)

function init() {
    bgImage.src = './img/background.jpg'
    aneO.init();
    fruits.init();
    bigFish.init();
    smallFish.init();
    gameLoop();
}
function mouseOver(e) {
    mX = e.offsetX;
    mY = e.offsetY;
}
function gameLoop() {
    ctx2.clearRect(0, 0, canW, canH);
    ctx1.clearRect(0, 0, canW, canH);

    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackGround();
    aneO.draw();
    fruitMonitor();
    fruits.draw();
    momfruitsCollision();
    bigFish.draw();
    smallFish.draw();
    requestAnimationFrame(gameLoop);
}
