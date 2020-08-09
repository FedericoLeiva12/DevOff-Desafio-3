function EventListener(element) {
    this.mouseDown = false;
    this.lastPos = [0, 0];

    this.downCB = () => {};
    this.moveCB = () => {};
    this.upCB = () => {};

    element.addEventListener('mousedown', e => {
        this.mouseDown = true;
        this.lastPos = [e.clientX, e.clientY];
        this.downCB(this.lastPos);
    });

    element.addEventListener('mousemove', e => {
        if(this.mouseDown) {
            let temp = [e.clientX, e.clientY];
            this.moveCB(this.lastPos, temp);
            this.lastPos = temp;
            debugger;
        }
    })

    element.addEventListener('mouseup', e => {
        this.mouseDown = false;
        this.upCB();
    });

    element.addEventListener('mouseout', e => {
        this.mouseDown = false;
        this.upCB();
    });

    element.addEventListener('mouseleave', e => {
        this.mouseDown = false;
        this.upCB();
    });
}

EventListener.prototype.onMouseDown = function(cb) {
    this.downCB = (cb);
}

EventListener.prototype.onMouseMove = function(cb) {
    this.moveCB = (cb);
}

EventListener.prototype.onMouseUp = function(cb) {
    this.upCB = (cb);
}

export default EventListener;