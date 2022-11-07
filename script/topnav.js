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

    if (window.location.pathname == '/') {
        const someEl = document.querySelector('.com');
        myObserver.observe(someEl);
    }


    function typeText(id, text, startingDelay, inputDelay, removeElements, removeElementsDelay) {

        const length = text.length - 1;
        var current = 0;

        const insertChar = function (char) {
            var target = document.getElementById(id);
            if (target !== null) {
                target.innerHTML += char
                var event = new window.Event('change', { bubbles: true });
                target.dispatchEvent(event);
            } else {
                console.log(`No element with id "${id}" found.`)
            };
        };

        const clearErrorChar = function (wrong, correct) {
            var target = document.getElementById(id);
            if (target !== null) {
                target.innerHTML += wrong

                setTimeout(function () {
                    target.innerHTML = target.innerText.slice(0, -1)
                }, inputDelay + removeElementsDelay)

                setTimeout(function () {
                    target.innerHTML += correct
                }, inputDelay + removeElementsDelay)


            } else {
                console.log(`No element with id "${id}" found.`)
            };
        }

        const write = function () {
            if (removeElements[current]) {
                // think about multiple string instead single char!
                clearErrorChar(text[current], removeElements[current])
            }
            else {
                insertChar(text[current]);
            }
            if (current < length) {
                current++;

                removeElements[current - 1] ? setTimeout(function () { write() }, inputDelay + removeElementsDelay * 2) : setTimeout(function () { write() }, inputDelay);
            };
        };
        setTimeout(function () {
            setTimeout(function () { write() }, inputDelay)
        }, startingDelay);
    }

    homePageWelcomeText = "Weloome to my Weesite"
    homePageWelcomeErrors = {
        3: "c",
        16: "b"
    }


    if (window.location.pathname == '/') {
        typeText("welcome", homePageWelcomeText, 2000, 50, homePageWelcomeErrors, 200);
    }




}
