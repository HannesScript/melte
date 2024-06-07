function run() {
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                setup();
            }
        }
    });

    const config = { childList: true, subtree: true };

    observer.observe(document.body, config);
}

function setup() {

    function change(els, interval, el) {
        el.innerHTML = els[0] || '<h3>Please add elements to the carousel!</h3>';
        setTimeout(() => {
            els.shift();
            change(els, interval, el);
        }, interval || 1500);
    }

    var carousels = [];
    /* 
        {
            id: 'id',
            interval: 1500,
            elements: [
                'html',
                'html',
                'html',
                'html',
                'html'
            ]
        }
    */

    document.querySelectorAll('[melte-carousel]').forEach(carousel => {
        const attrs = carousel.getAttribute('melte-carousel').split(' ');

        var els = [];

        carousel.querySelectorAll('melte-carousel-item').forEach(item => {
            els.push(item.outerHTML);
        });

        carousels.push({
            id: attrs[0],
            interval: eval(attrs[1]),
            elements: els
        });

        change(els, eval(attrs[1]), carousel)
    });

}

run();