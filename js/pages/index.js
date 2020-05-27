import build from '../ui';
import appMount from '../components/discord'
import bdHeader from '../components/bdheader'
import picker from '../components/quickpicker'

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

class quickpicker {
    constructor() {
        this.init();
        this.resize();
    }

    init() {
        window.addEventListener('resize', () => {
            this.resize();
        });

        document.querySelectorAll('.bd-pickerInline .bd-input').forEach(e => {
            e.addEventListener('input', e => {
                e.srcElement.style.width = `${e.srcElement.value.length}ch`;
            });
        });

        document.querySelectorAll('.bd-input').forEach(e => {
            e.addEventListener('input', e => {
                this.changeVar(e.srcElement.dataset['var'], e.srcElement.value);
            });
        });
    }

    resize() {
        let width = window.innerWidth * .6,
            scale = `.${width.toString().substring(0, 2)}`,
            root = document.documentElement;

        root.style.setProperty('--appMountScale', scale);
    }

    changeVar(property, value) {
        const root = document.documentElement;
        root.style.setProperty(property, value);
    }
}

const Quickpicker = new quickpicker();