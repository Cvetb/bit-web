var background = document.querySelector("body");
var r = document.querySelector("#run");
var st = document.querySelector("#stay");
r.classList.add("invisible");

var run = false;
var interval;

function moveBackground() {
    var x = 0;
    interval = setInterval(function () {
        x -= 10;
        background.style.backgroundPosition = x + "px 500px";
    }, 10);
}

background.addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight" && run == false) {
        st.classList.add("invisible");
        r.classList.add("visible");
        moveBackground();
    }
    run = true;
});

background.addEventListener("keyup", function (event) {
    r.classList.remove("visible");
    st.classList.remove("invisible");
    clearInterval(interval);
    run = false;
});