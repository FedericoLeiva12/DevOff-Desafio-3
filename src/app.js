import Canvas from './canvas';
import EventListener from './events';
import { createButtons } from './dom-elements';

const App = new Canvas('app');
const events = new EventListener(App.canvas);

function main() {
    createButtons(setGoma, setPincel, setColor);
    events.onMouseMove((lastPos, currentPos) => {
        App.drawLine(lastPos[0], lastPos[1], currentPos[0], currentPos[1]);
    });
}

function setGoma() {
    App.setColor('#FFFFFF');
}

function setPincel() {
    App.setColor('#000000');
}

function setColor(color) {
    App.setColor(color)
}

main();