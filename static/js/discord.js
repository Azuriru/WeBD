const guildNav = build.div({
    class: 'bd-guilds bd-wrapper',
    html: build.div({
        class: 'bd-scroller bd-hidden',
        html: guildList.map(guild => {
            return build.div({
                class: 'bd-listItem',
                events: {
                    click: function(e) {
                        const me = e.currentTarget;
                        
                        if (me.classList.contains('bd-focused')) return;

                        const all = document.querySelectorAll('.bd-listItem.bd-focused');

                        let i = all.length;
                        while (i--) {
                            all[i].classList.remove('bd-focused');
                        }

                        me.classList.add('bd-focused');
                    }
                },
                html: [
                    build.div({
                        class: 'bd-pillWrapper',
                        html: build.div({
                            class: 'bd-pill'
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

const buildDMHeader = user => {
    return build.div({
        class: 'bd-header',
        html: build.div({
            class: 'bd-headerText',
            html: user.header
        })
    });
}

const buildDMUser = user => {
    return build.div({
        class: 'bd-channel',
        events: {
            click: function(e) {
                const me = e.currentTarget;
                        
                if (me.classList.contains('bd-selected')) return;

                const all = document.querySelectorAll('.bd-channel.bd-selected');

                let i = all.length;
                while (i--) {
                    all[i].classList.remove('bd-selected');
                }

                me.classList.add('bd-selected');
            }
        },
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
}

const privateList = build.div({
    class: 'bd-scroller bd-thinner',
    html: dmList.map(user => {
        return user.header 
            ? buildDMHeader(user)
            : buildDMUser(user)
    })
});

const privateChannels = build.div({
    class: 'bd-privateChannels',
    html: [privateSearch, privateList]
});

const userSettingsGroup = userboxSettings.map(button => {
    return build.div({
        class: 'bd-button',
        html: build.div({
            class: 'bd-icon',
            html: button.icon
        }),
        'data-name': button.name
    });
})

const userBox = build.div({
    class: 'bd-panel',
    html: [
        build.div({
            class: 'bd-avatarWrapper',
            html: build.div({
                class: 'bd-avatar',
                html: build.img({
                    class: 'bd-img',
                    src: 'https://cdn.discordapp.com/attachments/565867288167841792/696760861192093696/avatar.png'
                })
            })
        }),
        build.div({
            class: 'bd-nameTag',
            html: [
                build.div({
                    class: 'bd-username',
                    html: 'Hellbent'
                }),
                build.div({
                    class: 'bd-subtext',
                    html: 'I love you.'
                })
            ]
        }),
        build.div({
            class: 'bd-userSettingsGroup',
            html: userSettingsGroup
        })
    ]
});

const base = build.div({
    class: 'bd-base',
    html: [
        build.div({
            class: 'bd-sidebar',
            html: [privateChannels, userBox]
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