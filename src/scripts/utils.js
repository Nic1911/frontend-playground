import {
    firstAniim
} from "./animation.js";
import Swiper from 'swiper';

let timerID;
let counter = 0;

const pressHoldEvent = new CustomEvent('pressHold');


let pressHoldDuration = 40;

export function pressingDown(e) {
    // Start the timer
    requestAnimationFrame(timer);
    e.preventDefault();
}

export function notPressingDown(e) {
    // Stop the timer
    cancelAnimationFrame(timerID);
    counter = 0;
}

//
// Runs at 60fps when you are pressing down
//
export function timer() {
    if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        counter++;
    } else {
        item.dispatchEvent(pressHoldEvent);
    }
}


export function doSomething(e) {
    firstAniim();
}


/* Repsonsive IMG */
export class ResponsiveBackgroundImage {
    constructor(element) {
        this.element = element;
        this.img = element.querySelector('img');
        this.src = '';

        this.img.addEventListener('load', () => {
            this.update();
        });

        if (this.img.complete) {
            this.update();
        }
    }
    update() {
        let src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
        if (this.src !== src) {
            this.src = src;
            this.element.style.backgroundImage = 'url("' + this.src + '")';

        }
    }
}
export const responsiveBackgroundIMage = () => {
    const elements = document.querySelectorAll('.responsive-background-image');
    for (let i = 0; i < elements.length; i++) {
        new ResponsiveBackgroundImage(elements[i]);
    }
}

/* Detect element in viewport */

export const detectElementsInDOM = () => {
    const sections = document.querySelectorAll('.ns-paragraph__span');

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('ns-paragraph__span--showElem');
            } else {
                entry.target.classList.remove('ns-paragraph__span--showElem');
            }
        });
    });
    sections.forEach(section => {
        observer.observe(section);
    });
}

/* Slip words in Span */

export const splitWords = () => {
    const paragraph = document.getElementsByClassName('ns-paragraph');
    for (let index = 0; index < paragraph.length; index++) {
        const element = paragraph[index];
        const words = element.innerHTML;
        const splitted = words.split(' ');
        element.innerHTML = '';

        for (let i = 0; i < splitted.length; i++) {
            //console.log(splitted[i], splitted[i].innerHTML === '');
            const innerSpan = document.createElement('span');
            innerSpan.className = 'ns-paragraph__span';
            innerSpan.innerHTML = splitted[i];
            element.appendChild(innerSpan);
        }
    }
    splitWordsInner()
}
export const splitWordsInner = () => {
    const paragraphInner = document.getElementsByClassName('ns-paragraph__span');
    for (let index = 0; index < paragraphInner.length; index++) {
        const element = paragraphInner[index];
        const words = element.innerHTML;
        const splitted = words.split(' ');
        element.innerHTML = '';
        for (let i = 0; i < splitted.length; i++) {
            const innerSpan = document.createElement('span');
            innerSpan.className = 'ns-paragraph__spanInner';
            innerSpan.innerHTML = splitted[i];
            element.appendChild(innerSpan);
        }
    }
}

/* Carousel */
export const initCarousel = () => {
    const sliderTL = new TimelineMax({
        ease: Power3.easeIn
    });
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: '-5%',
        loop: true,
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 640px
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        on: {
            touchMove: function(event) {
                const theCircle = document.getElementsByClassName('ns-cursor')[0];
                TweenLite.to(theCircle, 0.3, {
                    css: {
                        left: event.clientX,
                        top: event.clientY
                    }
                });
            },
            slideChange: function() {
                sliderTL
                    .to('.swiper-slide .ns-carousel__title', .6, {
                        y: 100,
                        alpha: 0
                    })
                    .to('.swiper-slide .ns-carousel__desc p', .5, {
                        y: 100,
                        alpha: 0
                    }, '-=.3')
                    .to('.swiper-slide .ns-carousel__desc svg', .4, {
                        y: 100,
                        x: 100,
                        alpha: 0
                    }, '-=.4')
            },
            slideChangeTransitionEnd: function() {
                sliderTL
                    .to('.swiper-slide-active .ns-carousel__title', .3, {
                        y: 0,
                        alpha: 1
                    })
                    .to('.swiper-slide-active .ns-carousel__desc p', .3, {
                        y: 0,
                        alpha: 1
                    }, '-=.3')
                    .to('.swiper-slide-active .ns-carousel__desc svg', .3, {
                        y: 0,
                        x: 0,
                        alpha: 1
                    }, '-=.2')

            },
        },

    });
}