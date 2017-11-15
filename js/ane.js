function Ane() {
    this.x = [];
    this.len = [];
    this.y = [];
}
Ane.prototype = {
    num: 50,
    init: function () {

        for (var i = 0; i < this.num; i++) {
            this.x[i] = parseInt(i * 20 + Math.random() * 20);
            this.len[i] = parseInt(150 + Math.random() * 50);
            this.y[i] = canH - this.len[i];
            // console.log( this.y[i], this.x[i])
        }
        // console.log(this.x,this.y);
    },
    draw: function () {
        ctx2.save();
        ctx2.globalAlpha = 0.3;
        ctx2.lineCap = "round";
        ctx2.lineWidth = 15;
        ctx2.strokeStyle = '#cccccc';
        for (var i = 0; i < this.num; i++) {
            ctx2.beginPath();
            ctx2.moveTo(this.x[i], canH);
            // console.log(ctx2)
            ctx2.lineTo(this.x[i], canH - this.len[i]);
            ctx2.stroke();
            ctx2.closePath();
        }
        ctx2.restore();
    }
}