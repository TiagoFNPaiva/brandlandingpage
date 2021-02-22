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

const btn = document.getElementById("scroll");
const bhome = document.getElementsByClassName("scrollnav")[0];
const bup = document.getElementsByClassName("scrollup")[0];
const bdown = document.getElementsByClassName("scrolldown")[0];





const scrollUp = () => {
    const currentP = Math.round(window.scrollY) - 5;
    if (isInViewport(aCard) >= currentP) {
        return;
    }
    else if (isInViewport(bCard) >= currentP) {
        aCard.scrollIntoView();
    }
    else if (isInViewport(cCard) >= currentP) {
        bCard.scrollIntoView();
    }
    else if (isInViewport(dCard) >= currentP) {
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
    if (isInViewport(dCard) <= currentP) {
        return;
    }
    else if (isInViewport(cCard) <= currentP) {
        dCard.scrollIntoView();
    }
    else if (isInViewport(bCard) <= currentP) {
        cCard.scrollIntoView();
    }
    else if (isInViewport(aCard) <= currentP) {
        bCard.scrollIntoView();
    }
    else if (isInViewport(aCard) > currentP) {
        aCard.scrollIntoView();
    }
}

const hide = () => {
    if (document.body.scrollTop >= (isInViewport(aCard) * 0.8) || document.documentElement.scrollTop >= (isInViewport(aCard)) * 0.8) {
        btn.style.display = "block";
        if (document.body.scrollTop >= (isInViewport(aCard) * 1.05) || document.documentElement.scrollTop >= (isInViewport(aCard)) * 1.05) {
            bup.style.visibility = "unset";
        }
        else {
            bup.style.visibility = "hidden";
        }
        if (document.body.scrollTop >= (isInViewport(dCard) * 1) || document.documentElement.scrollTop >= (isInViewport(dCard)) * 1) {
            bdown.style.visibility = "hidden";
        }
        else {
            bdown.style.visibility = "unset";
        }

    } else {
        btn.style.display = "none";
    }
}
