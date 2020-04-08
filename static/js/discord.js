const guildScroller = build.div({
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
                        src: `./img/guild/${guild.icon}`
                    })
                })
            ]
        });
    })
});

const guildSeparator = build.div({
    class: 'bd-listItem',
    html: build.div({
        class: 'bd-guildSeparator'
    })
});

const guildNav = build.div({
    class: 'bd-guilds bd-wrapper',
    html: guildScroller
});

guildScroller.insertBefore(guildSeparator, guildScroller.children[1]);

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

                const header = document.querySelector('.bd-chat .bd-title .bd-children');
                header.querySelector('.bd-username').innerHTML = me.querySelector('.bd-username').textContent;
                // header.querySelector('.bd-status')
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
        events: {
            click: function(e) {
                const me = e.currentTarget;

                if (me.dataset['name'] == 'Settings') return;

                me.classList.contains('bd-muted') 
                    ? me.classList.remove('bd-muted')
                    : me.classList.add('bd-muted');
            }
        },
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
                    src: `./img/avatars/${me.avatar}`
                })
            })
        }),
        build.div({
            class: 'bd-nameTag',
            html: [
                build.div({
                    class: 'bd-username',
                    html: me.name
                }),
                build.div({
                    class: me.status ? 'bd-subtextWrapper' : 'bd-subtextWrapper bd-noStatus',
                    html: build.div({
                        class: 'bd-subtext',
                        html: [
                            build.div({
                                class: 'bd-status',
                                html: me.status
                            }),
                            build.div({
                                class: 'bd-discrim',
                                html: `${'#' + me.discrim}`
                            })
                        ]
                    })
                })
            ]
        }),
        build.div({
            class: 'bd-userSettingsGroup',
            html: userSettingsGroup
        })
    ]
});

const children = build.div({
    class: 'bd-children',
    html: [
        build.div({
            class: 'bd-iconWrapper',
            html: '<svg x="0" y="0" class="bd-icon icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4 15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6 12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 13.434 14.599 12 14.599Z"></path></svg>'
        }),
        build.div({
            class: 'bd-username',
            html: 'Dorumin'
        }),
        build.div({
            class: 'bd-status bd-online'
        }),
        build.div({
            class: 'bd-akaWrapper',
            html: [
                build.div({
                    class: 'bd-divider',
                }),
                build.div({
                    class: 'bd-akaBadge',
                    html: 'aka'
                }),
                build.div({
                    class: 'bd-nicknames',
                    html: 'Digital Programming Overlord'
                })
            ]
        })
    ]
});

const toolbar = build.div({
    class: 'bd-toolbar',
    html: toolbarIconsDM.map(icon => {
        return build.div({
            class: 'bd-iconWrapper',
            html: build.div({
                class: 'bd-icon',
                html: icon.icon
            }),
            'data-name': icon.name
        });
    })
});

const toolbarSearch = build.div({
    class: 'bd-search',
    html: [
        build.input({
            class: 'bd-searchBar',
            placeholder: 'Search'
        }),
        build.div({
            class: 'bd-searchIcon',
            html: '<svg class="bd-icon bd-visible icon-3cZ1F_ visible-3V0mGj" aria-hidden="false" width="18" height="18" viewBox="0 0 18 18"><g fill="none" fill-rule="evenodd" aria-hidden="true"><path fill="currentColor" d="M3.60091481,7.20297313 C3.60091481,5.20983419 5.20983419,3.60091481 7.20297313,3.60091481 C9.19611206,3.60091481 10.8050314,5.20983419 10.8050314,7.20297313 C10.8050314,9.19611206 9.19611206,10.8050314 7.20297313,10.8050314 C5.20983419,10.8050314 3.60091481,9.19611206 3.60091481,7.20297313 Z M12.0057176,10.8050314 L11.3733562,10.8050314 L11.1492281,10.5889079 C11.9336764,9.67638651 12.4059463,8.49170955 12.4059463,7.20297313 C12.4059463,4.32933105 10.0766152,2 7.20297313,2 C4.32933105,2 2,4.32933105 2,7.20297313 C2,10.0766152 4.32933105,12.4059463 7.20297313,12.4059463 C8.49170955,12.4059463 9.67638651,11.9336764 10.5889079,11.1492281 L10.8050314,11.3733562 L10.8050314,12.0057176 L14.8073185,16 L16,14.8073185 L12.2102538,11.0099776 L12.0057176,10.8050314 Z"></path></g></svg>'
        })
    ],
    events: {
        click: function(e) {
            const me = e.currentTarget;

            me.classList.contains('bd-focused') 
                ? me.classList.remove('bd-focused')
                : me.classList.add('bd-focused');
        }
    },
});

toolbar.insertBefore(toolbarSearch, toolbar.children[4])

const placeholderDM = fakeDM.map(message => {
    return build.div({
        class: 'bd-message',
        html: [
            build.div({
                class: 'bd-header',
                html: [
                    build.img({
                        class: 'bd-img',
                        src: `./img/avatars/${message.avatar}`,
                        width: 40,
                        height: 40
                    }),
                    build.div({
                        class: 'bd-username',
                        html: [
                            build.span({
                                html: message.name
                            })
                        ]
                    })
                ]
            }), 
            build.div({
                class: 'bd-messageContent',
                html: build.div({
                    html: message.message
                })
            })
        ]
    });
});

const content = build.div({
    class: 'bd-chatContent',
    html: [
        build.div({
            class: 'bd-messagesWrapper',
            html: build.div({
                class: 'bd-scroller',
                html: placeholderDM
            })
        }),
        build.div({
            class: 'bd-channelTextArea',
            html: build.div({
                class: 'bd-inner',
                html: build.textarea({
                    class: 'bd-textarea'
                })
            })
        })
    ]
});

const membersWrap = build.div({
    class: 'bd-membersWrapper',
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
                    class: 'bd-title',
                    html: [children, toolbar]
                }),
                build.div({
                    class: 'bd-content bd-dm',
                    html: [content, membersWrap]
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