(function() {
    const knownTags = [
        'div',
        'span',
        'img',
        'input',
        'textarea',
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

    function build(tag, attr) {
        if (attr.hasOwnProperty('if') && !attr.if) return document.createDocumentFragment();

        const el = document.createElement(tag);

        for (let property in attr) {
            const val = attr[property];

            switch (property) {
                case 'html':
                    if (Array.isArray(val)) {
                        val.forEach(val => el.appendChild(val));
                    } else if (val instanceof Node) {
                        el.appendChild(val);
                    } else {
                        el.innerHTML = val;
                    }
                    break;
                case 'classes':
                    el.setAttribute('class', val.join(' '));
                    break;
                case 'if':
                    break;

                default:
                    el.setAttribute(property, val);
            }
        }

        return el;
    }

    build.text = function(text) {
        return document.createTextNode(text);
    };

    for (const tag of knownTags) {
        build[tag] = build.bind(this, tag);
    }

    window.build = build;
})();