// melte-hover
document.querySelectorAll('[melte-hover]').forEach(element => {
    element.addEventListener('mouseenter', () => {
        const hoverClasses = element.getAttribute('melte-hover');
        const classes = hoverClasses.split(' ');
        if (hoverClasses) {
            classes.forEach(el => {
                element.classList.add(el);
            });
        }
    });
    element.addEventListener('mouseleave', () => {
        const hoverClasses = element.getAttribute('melte-hover')
        const classes = hoverClasses.split(' ');
        if (hoverClasses) {
            classes.forEach(el => {
                element.classList.remove(el);
            });
        }
    });
});

// melte-focus
document.querySelectorAll('[melte-focus]').forEach(element => {
    element.addEventListener('click', () => {
        const hoverClasses = element.getAttribute('melte-focus');
        const classes = hoverClasses.split(' ');
        if (hoverClasses) {
            classes.forEach(el => {
                element.classList.add(el);
            });
        }
    });

    element.addEventListener('blur', () => {
        const hoverClasses = element.getAttribute('melte-focus');
        const classes = hoverClasses.split(' ');
        if (hoverClasses) {
            classes.forEach(el => {
                element.classList.remove(el);
            });
        }
    });
});


// melte-clicked
document.querySelectorAll('[melte-clicked]').forEach(element => {
    element.addEventListener('click', () => {
        const hoverClasses = element.getAttribute('melte-clicked');
        const classes = hoverClasses.split(' ');
        if (hoverClasses) {
            classes.forEach(el => {
                element.classList.add(el);
            });
            setTimeout(() => {
                classes.forEach(el => {
                    element.classList.remove(el);
                });
            }, 150);
        }
    });
});