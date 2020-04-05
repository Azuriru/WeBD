const guildNav = build.div({
    class: 'bd-guilds bd-wrapper',
    html: build.div({
        class: 'bd-scroller bd-hidden',
        html: guildList.map(guild => {
            return build.div({
                class: 'bd-listItem',
                html: build.div({
                    class: 'bd-guildWrapper',
                    html: build.div({
                        class: guild.class ? guild.class : 'bd-guild',
                        html: guild.name
                    })
                })
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

const privateChannels = build.div({
    class: 'bd-privateChannels',
    html:[
        build.div({
            class: 'bd-searchBar',
            html: build.div({
                class: 'bd-searchInner',
                html: 'Find or start a conversation'
            })
        }),
        build.div({
            class: 'bd-scroller bd-hidden',
            html: dmList.map(user => {
                return build.div({
                    class: 'bd-channel',
                    html: [
                        build.div({
                            class: 'bd-avatar',
                            html: build.img({
                                class: 'bd-img',
                                src: user.icon
                                    ? `./img/${user.icon}`
                                    : `./img/placeholder.png`
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
        })
    ]
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