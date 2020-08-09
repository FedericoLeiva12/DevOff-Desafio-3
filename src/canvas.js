function Canvas(canvasId, width=window.innerWidth, height=window.innerHeight) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;
    this.context = this.canvas.getContext('2d');
    this.color = 'rgb(0,0,0)';
    this.size = 10;
}

Canvas.prototype.setColor = function(hex) {
    this.color = hex;
}

Canvas.prototype.setSize = function(size) {
    this.size = size;
}

Canvas.prototype.drawLine = function(x1, y1, x2, y2) {
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.size;
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
    this.context.closePath();
}

export default Canvas;