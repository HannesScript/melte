const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            setEventListeners();
        }
    }
});

const config = { childList: true, subtree: true };

observer.observe(document.body, config);

function setEventListeners() {
    // melte-hover
    document.querySelectorAll('[melte-hover]').forEach(element => {
        element.addEventListener('mouseenter', () => {
            const overwriteclasses = element.getAttribute('melte-hover');
            const classes = overwriteclasses.split(' ');
            if (overwriteclasses) {
                classes.forEach(el => {
                    element.classList.add(el);
                });
            }
        });
        element.addEventListener('mouseleave', () => {
            const overwriteclasses = element.getAttribute('melte-hover')
            const classes = overwriteclasses.split(' ');
            if (overwriteclasses) {
                classes.forEach(el => {
                    element.classList.remove(el);
                });
            }
        });
    });

    // melte-focus
    document.querySelectorAll('[melte-focus]').forEach(element => {
        element.addEventListener('click', () => {
            const overwriteclasses = element.getAttribute('melte-focus');
            const classes = overwriteclasses.split(' ');
            if (overwriteclasses) {
                classes.forEach(el => {
                    element.classList.add(el);
                });
            }
        });

        element.addEventListener('blur', () => {
            const overwriteclasses = element.getAttribute('melte-focus');
            const classes = overwriteclasses.split(' ');
            if (overwriteclasses) {
                classes.forEach(el => {
                    element.classList.remove(el);
                });
            }
        });
    });


    // melte-clicked
    document.querySelectorAll('[melte-clicked]').forEach(element => {
        element.addEventListener('mousedown', () => {
            const overwriteclasses = element.getAttribute('melte-clicked');
            const classes = overwriteclasses.split(' ');
            if (overwriteclasses) {
                classes.forEach(el => {
                    element.classList.add(el);
                });
                setTimeout(() => {
                    classes.forEach(el => {
                        element.classList.remove(el);
                    });
                }, 100);
            }
        });

        element.addEventListener('mouseup', () => {
            const overwriteclasses = element.getAttribute('melte-clicked');
            const classes = overwriteclasses.split(' ');
            if (overwriteclasses) {
                classes.forEach(el => {
                    element.classList.remove(el);
                });
            }
        });
    });
}