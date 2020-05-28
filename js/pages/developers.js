import build from '../ui';
import bdHeader from '../components/bdheader';

const devs = [
    {
        name: 'Doru',
        avatar: 'Opal.png',
        desc: `Hey, I'm Doru, developer extraordinaire.`
    },
    {
        name: 'Robyn',
        avatar: 'Whimsicott.jpg',
        desc: `Designer extraordinaire!`
    },
];

const developers = build.div({
    class: 'bd-developers',
    children: devs.map(d => {
        return build.div({
            class: 'bd-dev',
            children: [
                build.div({
                    class: 'bd-avatarWrapper',
                    child: build.img({
                        classes: ['bd-avatar', 'bd-img'],
                        src: `./img/avatars/${d.avatar}`
                    }),
                }),
                build.div({
                    class: 'bd-info',
                    children: [
                        build.div({
                            classes: ['bd-userHeader'],
                            text: d.name
                        }),
                        build.div({
                            class: 'bd-userDesc',
                            text: d.desc
                        })
                    ]
                })
            ]
        })
    })
});

const wrapper = build.div({
    class: 'bd-wrapper',
    children: [bdHeader, developers]
});

document.body.appendChild(wrapper);