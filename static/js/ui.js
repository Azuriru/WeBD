(function() {
    const knownTags = [
        'div',
        'span',
        'img',
        'input',
        'textarea',
        'canvas',
        'form',
        'pre',
        'code',
        'style',
        'script',
        'nav',
        'article',
        'header',
        'footer'
    ];

    function build(attr) {
        if (!attr.tag) throw new Error('No tag found');
        if (attr.hasOwnProperty('if') && !attr.if) return document.createDocumentFragment();

        const el = document.createElement(attr.tag);

        for (let property in attr) {
            const val = attr[property];

            switch (property) {
                case 'html':
                    if (Array.isArray(val)) {
                        throw new Error('Array in html');
                    } else if (val instanceof Node) {
                        throw new Error('Node in html');
                    } else {
                        el.innerHTML = val;
                    }
                    break;
                case 'text':
                    el.appendChild(document.createTextNode(val));
                    break;
                case 'child':
                    if (val) {
                        el.appendChild(val);
                    }
                    break;
                case 'children':
                    for (const elem of val) {
                        el.appendChild(elem);
                    }
                    break;
                case 'classes':
                    el.setAttribute('class', val.join(' '));
                    break;
                case 'events':
                    for (const key in val) {
                        el.addEventListener(key, val[key]);
                    }
                case 'if':
                case 'tag':
                    break;

                default:
                    el.setAttribute(property, val);
            }
        }

        return el;
    }

    function boundTag(tag) {
        return function(attr) {
            attr.tag = tag;

            return build(attr);
        };
    }

    build.text = function(text) {
        return document.createTextNode(text);
    };

    for (const tag of knownTags) {
        build[tag] = boundTag(tag);
    }

    window.build = build;
})();