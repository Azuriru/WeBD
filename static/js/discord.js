const guildNav = build.div({
    class: 'bd-guilds bd-wrapper',
    html: build.div({
        class: 'bd-scroller bd-hidden',
        html: guildList.map(guild => {
            return build.div({
                class: 'bd-listItem',
                html: [
                    build.div({
                        class: 'bd-pillWrapper',
                        html: build.div({
                            class: guild.pill ? `${guild.pill + ' bd-pill'}` : 'bd-pill'
                        })
                    }), 
                    build.div({
                        class: 'bd-guildWrapper',
                        html: !guild.icon
                        ? build.div({
                            class: guild.class ? guild.class : 'bd-guild',
                            html: guild.name
                        })
                        : build.img({
                            class: 'bd-img bd-guild',
                            src: `./img/avatars/${guild.icon}`
                            // src: user.icon ? `${'./img/users' + user.icon}` : './img/users/placeholder.png'
                        })
                    })
                ]
            });
        })
    })
});

const guildSeparator = build.div({
    class: 'bd-listItem',
    html: build.div({
        class: 'bd-guildSeparator'
    })
});

const privateSearch = build.div({
    class: 'bd-searchBar',
    html: build.div({
        class: 'bd-searchInner',
        html: 'Find or start a conversation'
    })
});

const privateList = build.div({
    class: 'bd-scroller bd-hidden',
    html: dmList.map(user => {
        return user.header 
        ? build.div({
            class: 'bd-header',
            html: build.div({
                class: 'bd-headerText',
                html: user.header
            })
        })
        : build.div({
            class: 'bd-channel',
            html: [
                build.div({
                    class: 'bd-avatar',
                    html: user.icon.indexOf('svg') > -1
                        ? user.icon
                        : build.img({
                            class: 'bd-img',
                            src: user.icon
                                ? `./img/avatars/${user.icon}`
                                : `./img/avatars/placeholder.png`,
                            // src: user.icon ? `${'./img/users' + user.icon}` : './img/users/placeholder.png'
                        })
                }),
                build.div({
                    class: 'bd-content',
                    html: [
                        build.div({
                            class: 'bd-username',
                            html: user.name
                        }),
                        build.div({
                            class: 'bd-status',
                            if: user.status,
                            html: user.status && build.span({
                                class: 'bd-status-text',
                                html: [
                                    build.text(`${user.status.type} `),
                                    build.span({
                                        class: 'bd-status-name',
                                        html: user.status.name
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    })
});

const privateChannels = build.div({
    class: 'bd-privateChannels',
    html: [privateSearch, privateList]
});

const voiceBox = build.div({
    class: 'bd-panel'
});

const base = build.div({
    class: 'bd-base',
    html: [
        build.div({
            class: 'bd-sidebar',
            html: [privateChannels, voiceBox]
        }),
        build.div({
            class: 'bd-chat',
            html: [
                build.div({
                    class: 'bd-title'
                }),
                build.div({
                    class: 'bd-content',
                    html: build.div({
                        class: 'bd-channelTextArea'
                    })
                })
            ]
        })
    ]
});

const appMount = build.div({
    class: 'bd-appMount',
    id: 'app-mount',
    html: [guildNav, base]
});

document.body.appendChild(appMount);

const guildScroller = document.querySelector('.bd-guilds .bd-scroller');
guildScroller.insertBefore(guildSeparator, guildScroller.children[1]);