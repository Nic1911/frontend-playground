import {
    TweenMax
} from "gsap/TweenMax";

export const loaderAnim = () => {
    const firstHead = document.getElementsByClassName('ns-first__head')[0];
    const loader = document.getElementsByClassName('ns-loader')[0];
    const square = loader.querySelectorAll('.ns-loaderSquare span')[0];
    const firstHeadparagraphSpan = firstHead.getElementsByClassName('ns-paragraph__span');
    const coverTitleWrap = document.getElementsByClassName('ns-cover__btnWrapper')[0];
    const cover = document.getElementsByClassName('ns-cover')[0];
    const first = document.getElementsByClassName('ns-first')[0];
    const coverTL = new TimelineMax({
        ease: Power3.easeIn
    });
    coverTL
        .to(square, .4, {
            height: 100
        }, '+=.3')
        .to(square, .4, {
            top: 'auto',
            bottom: 0,
            height: 0
        }, '+=.3')
        .to(cover, .5, {
            height: '100vh'
        }, '+=.3')
        .to(loader, .2, {
            alpha: 0,
        }, '-=.5')
        .set(loader, {
            display: 'none'
        })
        .to(firstHead, .5, {
            alpha: 1
        })
        .to(firstHeadparagraphSpan, .5, {
            alpha: 1,
            y: 0,
        }, '-=.4')
        /* .staggerTo(firstHeadparagraphSpan, .4, {
            alpha: 1,
            y: 0,
            transitionDelay: '0s'
        }, .3) */
        .to(coverTitleWrap, .5, {
            scale: 1,
            alpha: 1
        }, '-=.4')
        .set(first, {
            alpha: 1
        })

    return coverTL;
}

export const firstAniim = () => {
    const firstHead = document.getElementsByClassName('ns-first__head')[0];
    const firstHeadparagraphSpan = firstHead.getElementsByClassName('ns-paragraph__span');
    const cover = document.getElementsByClassName('ns-cover')[0];
    const coverTitle = document.getElementsByClassName('ns-cover__titleWrapper')[0];
    const titleWrap = document.getElementsByClassName('ns-first__titleWrap')[0];
    const first = document.getElementsByClassName('ns-first')[0];
    const mainCont = document.getElementsByClassName('main-container')[0];
    const firstTL = new TimelineMax();
    firstTL
        .set(document.getElementById('item'), {
            className: '+=active',
        })
        .to(coverTitle, 1, {
            y: 20,
            alpha: 0
        }, '+=.8')
        .to(cover, .3, {
            transformOrigin: 'bottom right',
            rotation: '90deg'
        })
        .to(firstHeadparagraphSpan, .2, {
            transitionDelay: '0s',
        })
        .to(firstHead, .4, {
            color: '#09090e',
        })
        .set(mainCont, {
            className: '+=main-container--endAnima',
            height: 'auto'
        })
        .set(titleWrap, {
            className: '+=ns-first__titleWrap--showInner',
        }, '-=1')
        .add(slideMouseEvent)

}

export const moveTitle = () => {
    const title = document.getElementsByClassName('ns-moveOnHover');
    for (let index = 0; index < title.length; index++) {
        const element = title[index];
        let xPos = (event.clientX / window.innerWidth) - 0.5,
            yPos = (event.clientY / window.innerHeight) - 0.5;

        TweenLite.to(element, 1, {
            rotationY: xPos * 5,
            rotationX: yPos * 5,
            y: xPos * 100,
            x: yPos * 100,
            ease: Power1.easeOut,
        });
    }
}
export const resetMoveTitle = () => {
    const title = document.getElementsByClassName('ns-moveOnHover');
    for (let index = 0; index < title.length; index++) {
        const element = title[index];

        TweenLite.to(element, 1, {
            rotationY: 0,
            rotationX: 0,
            y: 0,
            x: 0,
            ease: Power1.easeOut,
        });
    }
}

export const animaNow = (scroll_pos) => {
    const titles = document.getElementsByClassName('ns-first__title--lefter')[0];
    const titlesRight = document.getElementsByClassName('ns-first__title--righter')[0];
    //const introCopy = document.getElementsByClassName('ns-first__copy')[0];
    TweenMax.to(titles, .5, {
        x: scroll_pos / 5
    });
    TweenMax.to(titlesRight, .5, {
        x: -(scroll_pos / 5)
    });
}

export const animaCursoOnSlide = (e) => {
    const theCircle = document.getElementsByClassName('ns-cursor')[0];

    let x = event.clientX;
    let y = event.clientY;
    let newposX = x - 30;
    let newposY = y - 30;

    TweenLite.to(theCircle, 0.3, {
        css: {
            left: newposX,
            top: newposY
        }
    });
}

export const slideMouseEvent = () => {
    const slide = document.getElementsByClassName('ns-magicCursor');
    const theCircle = document.getElementsByClassName('ns-cursor')[0];
    let flag = false;

    for (let index = 0; index < slide.length; index++) {
        const element = slide[index];

        element.addEventListener('mousemove', function() {
            flag = true;
            TweenLite.to(theCircle, 0.4, {
                scale: 1,
                autoAlpha: 1
            })
            animaCursoOnSlide();
        });
        element.addEventListener('click', function() {
            flag = true;
            TweenLite.to(theCircle, 0.4, {
                scale: .5
            })
            animaCursoOnSlide();
        });
        element.addEventListener('mousedown', function() {
            flag = false;
            TweenLite.to(theCircle, 0.4, {
                scale: 0.1,
                autoAlpha: 0
            })
            animaCursoOnSlide();
        });
        element.addEventListener('mouseout', function() {
            flag = false;
            TweenLite.to(theCircle, 0.4, {
                scale: 0.1,
                autoAlpha: 0
            })
            animaCursoOnSlide();
git fetch        });
    }
}

export const randomRed = () => {
    const parag = document.getElementsByClassName('ns-coloredSpan');

    for (let index = 0; index < parag.length; index++) {
        const element = parag[index];
        const span = element.getElementsByClassName('ns-paragraph__span');
        let randomItem = span[Math.floor(Math.random() * span.length)];
        let randomItemBis = span[Math.floor(Math.random() * span.length)];
        TweenMax.to(randomItem, .5, {
            color: '#ff4435',
        });
        TweenMax.to(randomItemBis, .5, {
            color: '#ff4435',
        });
    }
}