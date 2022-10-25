/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    if (document.getElementById("ham-menu").checked) {
        document.getElementById("topNav").style.height = "250px";
        document.getElementById("main").style.marginTop = "15px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    else {
        document.getElementById("topNav").style.height = "0";
        document.getElementById("main").style.marginTop = "0";
        document.body.style.backgroundColor = "white";
    }
}
