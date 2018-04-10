function lis() {

    var a = document.querySelector('#sec');
    a.className = 'second';

}; lis();

function bg() {

    var list = document.getElementsByTagName('li');
for (var i =0; i< list.length; i++){
    list[i].className = "colors";
}
    

}; bg();

function last() {
    var b = document.querySelectorAll('ul:last-of-type>li');
    b.className = "upp";

}; last();
