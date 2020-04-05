const appMount = build('div', {
    class: 'bd-appMount',
    id: 'app-mount',
    html: [guildNav, base]
})

document.getElementById('scrollwrap').appendChild(appMount);