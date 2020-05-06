const intro = build.div({
    class: 'bd-intro',
    children: [
        build.div({
            class: 'bd-introHeader',
            text: 'BetterDiscord but without any UI and RAM eating'
        }),
        build.div({
            class: 'bd-introText',
            text: 'And turtles.\
            \n\n\
            You need to run this one each time after Discord updates. I might bind a separate process so that it catches when it is updated, but for now you may just want to add it to some autorun folder.\
            \n\n\
            Preferably a shortcut. No idea how it\'s done in OSes other than Windows, but there\'s always win+R > "shell:startup" if you are on the greatest OS ever made.'
        })
    ]
});

const appMountWrapper = build.div({
    class: 'bd-appMountWrapper',
    child: appMount
})

const wrapper = build.div({
    class: 'bd-wrapper',
    children: [bdHeader, intro, appMountWrapper, picker]
});

document.body.appendChild(wrapper);

console.log('Everything should be fully loaded at this point.');

const Quickpicker = new quickpicker();