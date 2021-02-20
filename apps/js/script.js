window.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("scrollnav")[0].addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
    });
    document.getElementsByClassName("scrollup")[0].addEventListener("click", function () {
        scrollUp();
    });
    document.getElementsByClassName("scrolldown")[0].addEventListener("click", function () {
        scrollDown();
    });
    window.onscroll = function () {
        hide();
    }

}, {
    passive: true
});

const aCard = document.getElementById("tips");
const bCard = document.getElementById("receitas");
const cCard = document.getElementById("fun");
const dCard = document.getElementById("roupeiro");

const navWrap = document.getElementsByClassName("bg_wrap")[0];
const aWrap = document.getElementsByClassName("bg_wrap")[1];
const bWrap = document.getElementsByClassName("bg_wrap")[2];
const cWrap = document.getElementsByClassName("bg_wrap")[3];
const dWrap = document.getElementsByClassName("bg_wrap")[4];

const btn = document.getElementById("scroll");
const bhome = document.getElementsByClassName("scrollnav")[0];
const bup = document.getElementsByClassName("scrollup")[0];
const bdown = document.getElementsByClassName("scrolldown")[0];





const scrollUp = () => {
    const currentP = Math.round(window.scrollY) - 5;
    if (isInViewport(aWrap) >= currentP) {
        return;
    }
    else if (isInViewport(bWrap) >= currentP) {
        aCard.scrollIntoView();
    }
    else if (isInViewport(cWrap) >= currentP) {
        bCard.scrollIntoView();
    }
    else if (isInViewport(dWrap) >= currentP) {
        cCard.scrollIntoView();
    }
    else {
        dCard.scrollIntoView();
    }
}
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (Math.round(rect.top + window.scrollY));
}
const scrollDown = () => {
    const currentP = Math.round(window.scrollY) + 5;
    if (isInViewport(dWrap) <= currentP) {
        return;
    }
    else if (isInViewport(cWrap) <= currentP) {
        dCard.scrollIntoView();
    }
    else if (isInViewport(bWrap) <= currentP) {
        cCard.scrollIntoView();
    }
    else if (isInViewport(aWrap) <= currentP) {
        bCard.scrollIntoView();
    }
    else if (isInViewport(aWrap) > currentP) {
        aCard.scrollIntoView();
    }
}

const hide = () => {
    if (document.body.scrollTop >= (isInViewport(aWrap) * 0.8) || document.documentElement.scrollTop >= (isInViewport(aWrap)) * 0.8) {
        btn.style.display = "block";
        if (document.body.scrollTop >= (isInViewport(bWrap) * 0.6) || document.documentElement.scrollTop >= (isInViewport(bWrap)) * 0.6) {
            bup.style.display = "block";
        }
        else {
            bup.style.display = "none";
        }
        if (document.body.scrollTop >= (isInViewport(dWrap) * 1) || document.documentElement.scrollTop >= (isInViewport(dWrap)) * 1) {
            bdown.style.display = "none";
        }
        else {
            bdown.style.display = "block";
        }

    } else {
        btn.style.display = "none";
    }
}


/*

const play = () => {
    const html = document.getElementsByClassName("pa1")[0].innerHTML
    document.getElementsByClassName("pa1")[0].innerHTML = `<div class="video">
                                                            <img class="close" src="images/red.png" alt="image">
                                                            <video autoplay loop controls>
                                                                <source src="images/example.mp4" type="video/mp4">
                                                            </video>
                                                            </div>`
    document.getElementsByClassName("close")[0].addEventListener("click", function () {
        document.getElementsByClassName("pa1")[0].innerHTML = html;
    })

}*/