export function createButtons(gomaClick, pincelClick, colorSelection) {
    let gomaButton = document.createElement('button');
    let pincelButton = document.createElement('button');
    gomaButton.innerText = 'Goma';
    pincelButton.innerText = 'Pincel';
    gomaButton.onclick = gomaClick;
    pincelButton.onclick = pincelClick;
    gomaButton.style.position = 'absolute';
    pincelButton.style.position = 'absolute';
    gomaButton.style.top = '0px';
    pincelButton.style.top = '0px';
    gomaButton.style.left = '0px';
    pincelButton.style.right = '0px';
    document.body.appendChild(gomaButton);
    document.body.appendChild(pincelButton);

    let colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.addEventListener('change',function(e) {
        let color = colorPicker.value;
        colorSelection(color);
    });
    colorPicker.style.position = 'absolute';
    colorPicker.style.right = '0px';
    colorPicker.style.bottom = '0px';
    document.body.appendChild(colorPicker)
}