const picker = build.div({
    class: 'bd-picker'
});

const wrapper = build.div({
    class: 'bd-wrapper',
    children: [appMount, picker]
});

document.body.appendChild(wrapper);