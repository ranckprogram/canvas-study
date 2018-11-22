var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = '800'
canvas.height = '600'
canvas.style.border = '1px solid #ddd'


function Circle(x, y, r, c) {
    this.x = x
    this.y = y
    this.r = r
    this.color = c
}

Circle.prototype.render = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true); // 绘制
    ctx.fillStyle = this.color
    ctx.fill();

}

Circle.prototype.update = function () {
    this.x < 600 && (this.x += 10)
}


var c = new Circle(50, 50, 30, '#f90')

setInterval(function () {
    ctx.clearRect(0, 0, 800, 800)
    c.render()
    c.update()
}, 20)