function build(element, attr) {
    el = document.createElement(element);
    for (let property in attr) {
        const val = attr[property];
        if (property == 'html') {
            if (Array.isArray(val)) {
                val.forEach(val => el.appendChild(val));
            } else if (typeof val == 'string') {
                el.innerHTML = val;
            } else {
                el.appendChild(val);
            }
        } else {
            el.setAttribute(property, val);
        }
    }
    return el;
}