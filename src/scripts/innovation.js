import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'


export const initScrollMagicInnovation = () => {
    const innovationSec = document.getElementsByClassName('ns-innovation__section');
    const controller = new ScrollMagic.Controller();

    for (let i = 0; i < innovationSec.length; i++) {
        const element = innovationSec[i];
        const panelImage = element.getElementsByClassName('ns-innovation__image')[0];
        const panelWrap = element.getElementsByClassName('ns-innovation__panelWrap')[0];
        const panelMain = element.getElementsByClassName('ns-innovation__panel')[0];
        const panelContent = element.getElementsByClassName('ns-innovation__content')[0];
        const panelTitle = panelContent.getElementsByTagName('h3');
        const panelSubTitle = panelContent.getElementsByTagName('h4');
        const panelParagraph = panelContent.getElementsByTagName('p');
        const bordersInside = element.getElementsByClassName('ns-innovation__bordersInside')[0];
        const bordersInsideLateral = bordersInside.querySelectorAll('.ns-innovation__border--right, .ns-innovation__border--left');
        const bordersInsideTopBottom = bordersInside.querySelectorAll('.ns-innovation__border--top, .ns-innovation__border--bottom');
        /* TIMELINE AND TWEEN */
        const elementTween = new TimelineMax();
        elementTween.to(panelTitle, 2, {
                opacity: 1,
                y: -60,
                ease: Expo.easeOut
            })
            .to(panelParagraph, 2, {
                opacity: 1,
                y: -60,
                ease: Expo.easeOut
            }, '-=1.9')
            .to(panelSubTitle, 2, {
                opacity: 1,
                y: -60,
                ease: Expo.easeOut
            }, '-=1.9')

        const borderTweenTimeline = new TimelineMax();
        borderTweenTimeline
            .to(bordersInsideLateral, 1.5, {
                width: 40,
                ease: Power0.easeNone
            })
            .to(bordersInsideTopBottom, 1.5, {
                height: 40,
                ease: Power0.easeNone
            }, '-=1.5')
        const panelImageParallax = TweenMax.to(panelImage, 1, {
            y: 100,
            ease: Power0.easeNone
        }, .1);
        /* end TIMELINE AND TWEEN */
        new ScrollMagic.Scene({
                triggerElement: element,
                duration: ((window.innerHeight) / 2), // window height - header - sticky anchor
                triggerHook: 'onLeave',
            })
            .setPin(panelWrap, {
                pushFollowers: false
            })
            .setClassToggle(element, 'ns-innovation__section--inAction')
            //.addIndicators()
            .addTo(controller)

        new ScrollMagic.Scene({
                triggerElement: element,
                offset: -100,
                triggerHook: 'onLeave'
            })
            //.addIndicators()
            .setClassToggle(panelMain, 'ns-innovation__panel--inAction')
            .setTween(elementTween)
            .addTo(controller)

        new ScrollMagic.Scene({
                triggerElement: element,
                duration: 100,
                offset: -145,
                triggerHook: 'onLeave'
            })
            //.addIndicators()
            .setClassToggle(element, 'ns-innovation__section--bordersActive')
            .setTween(borderTweenTimeline)
            .addTo(controller)

        new ScrollMagic.Scene({
                triggerElement: element,
                duration: (window.innerHeight) / 2.5,
                offset: (window.innerHeight) / 2,
                triggerHook: 'onLeave'
            })
            //.addIndicators()
            .setTween(panelImageParallax)
            .addTo(controller)
    }
}