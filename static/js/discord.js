let guildList = [
    {
        name: 'Laffy',
        icon: '',
    },
    {
        name: 'Lover',
        icon: '',
    },
    {
        name: 'PS',
        icon: '',
    },
    {
        name: 'DM',
        icon: '',
    }
]

const guildNav = build('div', {
    class: 'bd-guilds bd-wrapper',
    html: build('div', {
        class: 'bd-scroller',
        // html: guilds
    })
});

guildList.forEach(g => {
    const guild = build('div', {
        class: 'bd-listItem',
        html: build('div', {
            class: 'bd-guild',
            html: g.name
        })
    });
    guildNav.querySelector('.bd-scroller').appendChild(guild);
});

const base = build('div', {
    class: 'bd-base',
    html: [
        build('div', {
            class: 'bd-sidebar'
        }),
        build('div', {
            class: 'bd-chat',
            html: [
                build('div', {
                    class: 'bd-title'
                }),
                build('div', {
                    class: 'bd-content',
                    html: build('div', {
                        class: 'bd-channelTextArea'
                    })
                })
            ]
        })
    ]
});

const appMount = build('div', {
    class: 'bd-appMount',
    id: 'app-mount',
    html: [guildNav, base]
});

document.getElementById('scrollwrap').appendChild(appMount);