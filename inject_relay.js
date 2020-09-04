
var mic_hot = false;

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

document.addEventListener('keydown', function (e) {
    let mic = document.querySelector('.mic');
    if (e.keyCode === 32) { //  space
        if (mic_hot) {
            mic_hot = false;
            triggerMouseEvent (mic, "mouseup");
        } else {
            mic_hot = true;
            triggerMouseEvent (mic, "mousedown");
        }   
    }
  });
