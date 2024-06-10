document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                setup();
            }
        }
    });

    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);

    setup();
});

function setup() {
    const carousels = document.querySelectorAll('[melte-carousel]');
    carousels.forEach(carousel => {
        if (carousel.getAttribute('data-initialized')) return;
        carousel.setAttribute('data-initialized', 'true');

        const interval = parseInt(carousel.getAttribute('melte-carousel').split(' ')[1]);
        const items = carousel.querySelectorAll('[melte-carousel-item]');
        if (items.length > 0) {
            carousel.classList.add('carousel');
            const inner = document.createElement('div');
            inner.classList.add('carousel-inner');
            items.forEach(item => {
                inner.appendChild(item);
            });
            carousel.innerHTML = '';
            carousel.appendChild(inner);

            let index = 0;
            const next = () => {
                index = (index + 1) % items.length;
                inner.style.transform = `translateX(-${index * 100}%)`;
            };

            setInterval(next, interval);
            
            // Adding navigation controls
            const controls = document.createElement('div');
            controls.classList.add('carousel-controls');
            
            const prevButton = document.createElement('button');
            prevButton.classList.add('carousel-control-prev');
            prevButton.textContent = '<';
            prevButton.onclick = () => {
                index = (index - 1 + items.length) % items.length;
                inner.style.transform = `translateX(-${index * 100}%)`;
            };
            
            const nextButton = document.createElement('button');
            nextButton.classList.add('carousel-control-next');
            nextButton.textContent = '>';
            nextButton.onclick = next;

            controls.appendChild(prevButton);
            controls.appendChild(nextButton);
            carousel.appendChild(controls);
        }
    });
}