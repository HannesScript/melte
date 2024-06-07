const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            setup();
        }
    }
});

const config = { childList: true, subtree: true };

observer.observe(document.body, config);

function setup() {
    
}