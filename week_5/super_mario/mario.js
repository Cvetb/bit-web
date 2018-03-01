
var st = document.querySelector('.stay');
var r = document.querySelector('.run')

.onkeyup = function (event) {
    if (event.keyCode === 39) {
        r.classList.toggle('stay')
        st.classList.toggle('run');
    };

}




