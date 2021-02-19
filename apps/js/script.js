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



//aCard.scrollIntoView();

const scrollUp = () => {
    const currentP = window.scrollY;
    if (isInViewport(aWrap) >= currentP) {
        return;
    }
    else if (isInViewport(bWrap) >= currentP) {
        aCard.scrollIntoView();
    }
    else if (isInViewport(cWrap) >= currentP) {
        bCard.scrollIntoView();
    }
    else {
        cCard.scrollIntoView();
    }
}
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (Math.round(rect.top + window.scrollY));
}
const scrollDown = () => {
    const currentP = Math.round(window.scrollY);
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
}

const hide = () => {
    if (document.body.scrollTop >= isInViewport(aWrap) || document.documentElement.scrollTop >= isInViewport(aWrap)) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


/*

document.addEventListener('scroll', function () {
        animateCard();
    })

function isInViewport2(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom - 250 <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

const animateCard = () => {
    if (isInViewport(aCard)) {
        aCard.classList.add("animate");
        document.getElementsByClassName("pa1")[0].classList.add("animate");
    }
    if (isInViewport2(bCard)) {
        bCard.classList.add("animate")
        document.getElementsByClassName("pa2")[0].classList.add("animate");
    }
    if (isInViewport(cCard)) {
        cCard.classList.add("animate")
        document.getElementsByClassName("pa3")[0].classList.add("animate");
    }
    if (isInViewport2(dCard)) {
        dCard.classList.add("animate")
        document.getElementsByClassName("pa4")[0].classList.add("animate");
    }
}


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