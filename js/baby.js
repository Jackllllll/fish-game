function SmallFish(params) {
    this.x;
    this.y;
    this.angle;
    this.babyeye = new Image();
    this.babybody = new Image();
    this.babywb = new Image();
}
SmallFish.prototype = {
    init: function () {
        this.x = canW * 0.5 - 50;
        this.y = canH * 0.5 - 50;
        this.angle = 0;
        this.babyeye.src = 'img/babyEye0.png';
        this.babybody.src = 'img/babyFade0.png';
        this.babywb.src = 'img/babyTail0.png';
    },
    draw: function () {
        this.x = lerpDistance(bigFish.x, this.x, 0.99);
        this.y = lerpDistance(bigFish.y, this.y, 0.99);
        var deltaX = bigFish.x- this.x;
        var deltaY =bigFish.y - this.y;
        var beta = Math.atan2(deltaY, deltaX) + Math.PI;
        this.angle = lerpAngle(beta, this.angle, 0.9);
        ctx1.save();
        ctx1.translate(this.x, this.y);
        ctx1.rotate(this.angle);
        ctx1.drawImage(this.babywb, -this.babywb.width * 0.5 + 20, -this.babywb.height * 0.5);
        ctx1.drawImage(this.babybody, -this.babybody.width * 0.5, -this.babybody.height * 0.5);
        ctx1.drawImage(this.babyeye, -this.babyeye.width * 0.5, -this.babyeye.height * 0.5);
        ctx1.restore();
    }
}