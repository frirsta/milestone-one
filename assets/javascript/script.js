var menu = document.getElementById('menu');

function hamburger(){
    if(menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        

    }
}