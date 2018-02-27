function r (){

    var a = document.getElementsByClassName('active');

    a.className = '';
    var b = document.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
b.className = "active";



} r();