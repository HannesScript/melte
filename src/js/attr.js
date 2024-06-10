document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                setEventListeners();
            }
        }
    });

    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);

    setEventListeners();
});

const originalClasses = new Map();
const removedClasses = new Map();

function setEventListeners() {
    document.querySelectorAll('[melte-hover]').forEach(element => {
        element.addEventListener('mouseenter', () => {
            handleHover(element, true);
        });
        element.addEventListener('mouseleave', () => {
            handleHover(element, false);
        });
    });

    document.querySelectorAll('[melte-focus]').forEach(element => {
        element.addEventListener('focus', () => {
            handleFocus(element, true);
        });
        element.addEventListener('blur', () => {
            handleFocus(element, false);
        });
    });

    document.querySelectorAll('[melte-clicked]').forEach(element => {
        element.addEventListener('mousedown', () => {
            handleClick(element, true);
        });
        element.addEventListener('mouseup', () => {
            handleClick(element, false);
        });
    });
}

function handleHover(element, isMouseEnter) {
    const classes = element.getAttribute('melte-hover')?.split(' ') || [];
    if (isMouseEnter) {
        addClasses(element, classes);
    } else {
        removeClasses(element, classes);
    }
}

function handleFocus(element, isFocused) {
    const classes = element.getAttribute('melte-focus')?.split(' ') || [];
    if (isFocused) {
        addClasses(element, classes);
    } else {
        removeClasses(element, classes);
    }
}

function handleClick(element, isMouseDown) {
    const classes = element.getAttribute('melte-clicked')?.split(' ') || [];
    if (isMouseDown) {
        addClasses(element, classes);
    } else {
        removeClasses(element, classes);
    }
}

function addClasses(element, classes) {
    if (!originalClasses.has(element)) {
        originalClasses.set(element, new Set(element.classList));
    }
    if (!removedClasses.has(element)) {
        removedClasses.set(element, []);
    }
    classes.forEach(cls => {
        if (cls.includes("bg") || cls.includes("border") || cls.includes("line") || cls.includes("text") || cls.includes("list")) {
            addClass(element, cls);
        } else {
            element.classList.add(cls);
        }
    });
}

function removeClasses(element, classes) {
    classes.forEach(cls => {
        if (cls.includes("bg") || cls.includes("border") || cls.includes("line") || cls.includes("text") || cls.includes("list")) {
            removeClass(element, cls);
        } else {
            element.classList.remove(cls);
        }
    });

    // Re-add original classes that were removed
    if (originalClasses.has(element)) {
        originalClasses.get(element).forEach(cls => element.classList.add(cls));
        originalClasses.delete(element);
    }
}

function addClass(element, cls) {
    const elementRemovedClasses = removedClasses.get(element);
    element.classList.forEach(currClass => {
        if (currClass.includes("bg")) {
            element.classList.remove(currClass);
            elementRemovedClasses.push(currClass);
        }
    });
    element.classList.add(cls);
    removedClasses.set(element, elementRemovedClasses);
}

function removeClass(element, cls) {
    const elementRemovedClasses = removedClasses.get(element);
    element.classList.remove(cls);
    if (elementRemovedClasses.includes(cls)) {
        element.classList.add(cls);
        removedClasses.set(element, elementRemovedClasses.filter(item => item !== cls));
    }
}
