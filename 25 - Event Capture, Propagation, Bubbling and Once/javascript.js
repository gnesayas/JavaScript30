const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    // this prevents the browser from bubbling up and calling this
    // functions on the outer elements that we have a listener on.
    // if capture is set to true, this stops propogation inward.
    // e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
    // run the logText function on the way down, starting from the
    // outermost element, by default this is false
    // capture: true
    // removes the eventListener on this element after the event
    // has occurred, so the logText method only runs once
    once: true
}));