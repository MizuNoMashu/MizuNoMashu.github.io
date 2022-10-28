/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

window.onload = (event) => {
    main()
};

function main() {


    document.getElementById("ham-menu").addEventListener("click", openNav)

    function openNav() {
        if (document.getElementById("ham-menu").checked) {
            document.getElementById("topNav").style.height = "250px";
            // document.getElementById("main").style.marginTop = "15px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
        else {
            document.getElementById("topNav").style.height = "0";
            // document.getElementById("main").style.marginTop = "2%";
            document.body.style.backgroundColor = "white";
        }
    }


    function scaleParent(width, height) {
        a = width
        b = height
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
        document.getElementById("portrait").style.height = c.toString() + "px"
    }
    const myObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            width = entry.contentRect.width;
            height = entry.contentRect.height;
            scaleParent(width, height)
        });
    });

    const someEl = document.querySelector('.com');
    myObserver.observe(someEl);
}
