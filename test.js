
let menuItems = document.getElementById('menuItems');
menuItems.style.maxHeight = "0";
function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = "0px";
    }
}