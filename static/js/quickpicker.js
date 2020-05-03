const buildInput = v => {
    return build.input({
        class: 'bd-input',
        value: v.value
    });
}

const buildColorValue = v => {
    return build.div({
        class: 'bd-colorPreview',
        style: `background-color: rgba(${v.value})`
    })
}

// const pickerTextTitle = 
const pickerText = build.div({
    class: 'bd-pickerText',
    children: [
        build.div({
            class: 'bd-pickerTitle',
            text: 'Background'
        }),
        build.div({
            class: 'bd-pickerSetWrapper',
            children: pickerTextValues.map(v => {
                return build.div({
                    class: 'bd-pickerSet',
                    children: [
                        build.div({
                            class: 'bd-pickerName',
                            children: [
                                build.text(v.name),
                                build.span({
                                    class: 'material-icons',
                                    text: 'help',
                                    title: v.tip
                                })
                            ]
                        }),
                        build.div({
                            class: 'bd-pickerValue',
                            children: [
                                buildInput(v),
                                build.span({
                                    class: 'material-icons',
                                    text: 'edit',
                                })
                            ]
                        })
                    ]
                })
            })
        })
    ]
})

const pickerColors = build.div({
    class: 'bd-pickerColors',
    children: [
        build.div({
            class: 'bd-pickerTitle',
            text: 'Colors'
        }),
        build.div({
            class: 'bd-pickerSetWrapper',
            children: pickerValues.map(v => {
                return build.div({
                    class: 'bd-pickerSet',
                    children: [
                        build.div({
                            class: 'bd-pickerName',
                            text: v.name
                        }),
                        build.div({
                            class: 'bd-pickerValue',
                            child: buildColorValue(v)
                        })
                    ]
                })
            })
        })
    ]
})

const picker = build.div({
    class: 'bd-picker',
    children: [pickerText, pickerColors]
});

const resize = () => {
    let width = window.innerWidth * .6,
        scale = `.${width.toString().substring(0, 2)}`,
        root = document.documentElement;

    root.style.setProperty('--appMountScale', scale);
}

resize();

window.addEventListener('resize', function() {
    resize();
});