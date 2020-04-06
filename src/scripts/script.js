console.log(
    '%c Coded by: Nicolò Simioni',
    'background: darkgoldenrod; color: #fff; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px;'
);
console.log(
    '%c This webpack boilerplate has been developed by Tristan Lawrence => https://twitter.com/triscodes',
    'background: lavenderblush; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px;'
);
import {
    TweenMax
} from "gsap/TweenMax";
import {
    loaderAnim,
    animaNow,
    moveTitle,
    resetMoveTitle,
    randomRed
} from "./animation.js";
import {
    initScrollMagicInnovation
} from "./innovation.js";
import {
    pressingDown,
    notPressingDown,
    doSomething,
    responsiveBackgroundIMage,
    detectElementsInDOM,
    elemInViewport,
    splitWords,
    splitWordsInner,
    initCarousel
} from "./utils.js";



const initClickHold = () => {
    const item = document.querySelector('#item');
    const movingElems = document.getElementsByClassName('ns-moveOnHover');
    for (let index = 0; index < movingElems.length; index++) {
        //const element = array[index];
        movingElems[index].addEventListener('mousemove', moveTitle, false);
        movingElems[index].addEventListener('mouseleave', resetMoveTitle, false);
    }


    // Listening for the mouse and touch events    
    item.addEventListener('mousedown', pressingDown, false);
    item.addEventListener('mouseup', notPressingDown, false);
    item.addEventListener('mouseleave', notPressingDown, false);

    item.addEventListener('touchstart', pressingDown, false);
    item.addEventListener('touchend', notPressingDown, false);

    // Listening for our custom pressHold event
    item.addEventListener('pressHold', doSomething, false);

    window.addEventListener("resize", detectElementsInDOM, false);
    window.addEventListener("scroll", detectElementsInDOM, false);
}





let last_known_scroll_position = 0;
let ticking = false;


window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            animaNow(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});

let position = document.documentElement.scrollTop;
const init = () => {
    window.addEventListener("scroll", detectDirection, false);
    initClickHold();
    const global = new TimelineMax();
    global // global Timeline
        .add(loaderAnim)

    splitWords();
    initScrollMagicInnovation();
    randomRed();
}

const detectDirection = () => {
    let scroll = document.documentElement.scrollTop;

    if (scroll > position) {
        TweenLite.to('.ns-paragraph__spanInner', 1, {
            clearProps: 'transitionDelay'
        });
    } else {
        TweenLite.set('.ns-paragraph__spanInner', {
            transitionDelay: '0s'
        });
    }

    position = scroll;
}

window.addEventListener('load', function() {

    init();
    responsiveBackgroundIMage();
    initCarousel();
})