document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                setup()
            }
        }
    });

    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);

    setup()
});

function setup() {
    
}