ScrollOut({
    threshold: 0.5,

    // onShown: function (el) {
    //     // use the web animation API
    //     el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    // },
    // onHidden: function (el) {
    //     // hide the element initially
    //     el.style.opacity = 0;
    // }

    onShown: function (el) {
        var qs = $(el).attr("data-class");
        el.classList.add("animated");
        $(el).addClass(qs);
    },
    onHidden: function (el) {
        var qs = $(el).attr("data-class");
        el.classList.remove("animated");
        $(el).removeClass(qs);
    }
})
$(document).ready(function () {
    $('.header-1__text').typewrite({
        actions: [
            { speed: 8 },
            { delay: 1100 },
            { type: "Hi! I'm Sowmya." },
            { delay: 500 },
            { type: '<br>' },
            { type: "A student who loves exploring emerging technologies." },
        ]
    });
});

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        console.log(startTime);
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
        console.log('timeElapsed : ' + timeElapsed + 'duration: ' + duration);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);

}

var education = document.getElementsByClassName('education-1');
var projects = document.getElementsByClassName('project-1');

education[0].addEventListener('click', function () {
    smoothScroll('.education', 1000);
})
projects[0].addEventListener('click', function () {
    smoothScroll('.projects', 1000);
})





window.addEventListener('load', () => {
    init();

});

const loader = document.querySelector('.preload');
const main = document.querySelector('.container');

function init() {
    setTimeout(() => {
        loader.style.display = 'none';
        loader.style.opacity = 0;

        main.style.display = 'grid';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 1000);


}

// init();

particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});


