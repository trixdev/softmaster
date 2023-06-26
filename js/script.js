// THIS PROJECT IS PART OF A UDEMY TUTORIAL ON GREENSOCK JAVASCRIPT ANIMATIONS
// LEARN HOW TO ANIMATE WITH JAVASCRIPT BY ENROLLING IN THE COURSE: https://www.udemy.com/javascript-animations-using-greensock/
// USE DISCOUNT CODE 'CODEPEN' TO TAKE THE COURSE FOR JUST $9.99! 

//NAV
 
//HERO SECTION

TweenMax.fromTo('#hero h1', 0.6, { y: 80, opacity: 0 }, {y: 0, opacity:1, delay:1 });

TweenMax.fromTo('#hero .learnMoreButton', 0.6, { y: 80, opacity:0 }, {y: 0, opacity:1, delay: 1.6, ease:Back.easeOut });

//Four column section

$('.fourColItem').hover(function() {
    TweenMax.to($(this), 0.5, { y:-10, scale: 1.03 });
    TweenMax.to($(this), 0.5, { boxShadow: '0 0 20px rgba(0,0,0,0.36)'  });
},
function() {
    TweenMax.to($(this), 0.5, { y:0, scale: 1 });
    TweenMax.to($(this), 0.5, { boxShadow: '0 0 20px rgba(0,0,0,0.06)'  });
});

//Services Section

TweenMax.set('.serviceBoxInner', { y: 200, opacity:0 });

$('.serviceBox').hover(function() {
    TweenMax.to($(this).find('.serviceBoxInner'), 0.5, { y: 0, opacity:1, ease: Power2.easeOut });
},
function() {
    TweenMax.to($(this).find('.serviceBoxInner'), 0.5, { y: 200, opacity:0 });
});

//Cog Section

TweenMax.to('.cogLeft', 8, { rotation:360, repeat:-1, ease: Linear.easeNone });
TweenMax.to('.cogRight', 8, { rotation:-360, repeat:-1, ease: Linear.easeNone });