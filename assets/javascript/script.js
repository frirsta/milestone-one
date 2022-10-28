var menu = document.getElementById('menu');
var icon = document.getElementsByClassName('icon');

function hamburger(){
    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
        

    }
}