function item(item, href, src ) {
    const i = document.createElement(item);
    i.defer = true;
    i.href = href || '';
    i.src = src || '';
    document.head.appendChild(i);
}

item('link', 'https://cdn.jsdelivr.net/npm/melte@latest/src/css/utility.css');