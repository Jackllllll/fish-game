function BigFish() {
    this.x = canW * 0.5;
    this.y = canH * 0.5;
    this.eye = new Image();
    this.body = new Image();
    this.wb = new Image();
    this.angle = 0;
}
BigFish.prototype.init = function () {
    this.eye.src = './img/bigEye0.png';
    this.body.src = './img/bigSwim0.png';
    this.wb.src = './img/bigTail0.png';
}

BigFish.prototype.draw = function () {
    ctx1.save();
    this.x = lerpDistance(mX, this.x, 0.99);
    this.y = lerpDistance(mY, this.y, 0.99);
    var deltaX = mX - this.x;
    var deltaY = mY - this.y;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;
    this.angle = lerpAngle(beta, this.angle, 0.9);
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);

    ctx1.drawImage(this.eye, -this.eye.width * 0.5, -this.eye.height * 0.5);
    ctx1.drawImage(this.body, -this.body.width * 0.5, -this.body.height * 0.5);
    ctx1.drawImage(this.wb, -this.wb.width * 0.5 + 30, -this.wb.height * 0.5);
    ctx1.restore();

}