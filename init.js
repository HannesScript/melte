// const i = document.createElement(item);
// i.defer = true;
// i.href = href || '';
// i.src = src || '';
// document.head.appendChild(i);

// https://www.hannesscript.dev/software/melte/code/src/css/

const utility = document.createElement('link');
utility.href = 'https://www.hannesscript.dev/software/melte/code/src/css/utility.css';
utility.rel = 'stylesheet'
utility.defer = true;
document.head.appendChild(utility);

const base = document.createElement('link');
base.href = 'https://www.hannesscript.dev/software/melte/code/src/css/base.css';
base.rel = 'stylesheet'
base.defer = true;
document.head.appendChild(base);