console.log("Hello World!");

var greenButton = document.getElementById("button1");

console.log(greenButton);

greenButton.addEventListener('click', banana);

function banana() {
    alert("You called? What do you want!?")
}

var greenButton = document.getElementById("button2");

console.log(greenButton);

greenButton.addEventListener('click', banana);

function banana() {
    alert("Hello!?")
}

let theMarginLeft = 20;
document.addEventListener("keydown", (evt) => {
    console.log("key pressed", evt)
    const spriteThingy = document.getElementById("sprite-thingy")
    if (evt.key === "ArrowRight") {
        theMarginLeft += 20
    }
    else if (evt.key === "ArrowLeft") {
        theMarginLeft -= 20
    }
    console.log({ spriteThingy, theMarginLeft })
    spriteThingy.style.borderColor = "blue";
    spriteThingy.style.padding = "20px 20px 20px" + theMarginLeft + "px";
})