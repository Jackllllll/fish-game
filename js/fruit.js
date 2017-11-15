function FruitO(params) {
    this.alive = []
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}

FruitO.prototype.num = 30;

FruitO.prototype.init = function () {

    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random() * 0.01 + 0.005; //[0.005,0.15)
        // this.born(i);
    }
    // console.log(this.x, this.y)
    this.blue.src = './img/blue.png';
    this.orange.src = './img/fruit.png';
    // console.log(blue.clientWidth, blue.height)
};
FruitO.prototype.dead = function (i) {
    this.alive[i] = false;
}
FruitO.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            var pic 
            if (this.fruitType[i] == 'blue') {
                pic = this.blue;
            } else {
                pic = this.orange;
            }
            if (this.l[i] <= this.blue.width) {
                this.l[i] += this.spd[i] * deltaTime;
                // console.log( this.l[i]);
            } else {
                this.y[i] -= this.spd[i] * 7 * deltaTime;
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if (this.y[i] <= -this.blue.height) {
                this.alive[i] = false;
            }
        }
    }
};
FruitO.prototype.born = function (i) {
    var aneId = Math.floor(Math.random() * aneO.num)
    this.x[i] = aneO.x[aneId];
    this.y[i] = canH - aneO.len[aneId];
    this.l[i] = 0;
    var rad = Math.random();
    if(rad < 0.3){
        this.fruitType[i] = 'blue';
    }else{
        this.fruitType[i] = 'orange';
    }

    this.alive[i] = true;
};
function fruitMonitor() {
    var num = 0;
    for (var i = 0; i < fruits.num; i++) {
        if (fruits.alive[i]) {
            num++;
        }
    }
    if (num < 15) {
        sendFruit();
        return;
    }
}
function sendFruit() {
    for (var i = 0; i < fruits.num; i++) {
        if (!fruits.alive[i]) {
            fruits.born(i);
            return;
        }
    }
}