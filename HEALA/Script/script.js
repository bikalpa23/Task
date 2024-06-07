const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate() {
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed
        if (count < target) {
            counter.innerText = Math.floor(inc + count)
            setTimeout(upDate, 15)
        } else {
            counter.innerText = target
        }
    }
    upDate()
})


// ..........................SCROLL...................

// scripts.js

document.getElementById('scrollUp').addEventListener('click', function () {
    window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});

document.getElementById('scrollDown').addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});
