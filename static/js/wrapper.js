const picker = build.div({
    class: 'bd-picker'
});

const appMountWrapper = build.div({
    class: 'bd-appMountWrapper',
    child: appMount
})

const wrapper = build.div({
    class: 'bd-wrapper',
    children: [appMountWrapper, picker]
});

document.body.appendChild(wrapper);