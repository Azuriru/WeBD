const buildInput = v => {
    return v.inlineValue 
    ? v.inlineValue
    : build.input({
        class: 'bd-input',
        value: v.value,
        'data-var': v.var
    })
}

const buildColorValue = v => {
    return build.div({
        class: 'bd-colorPreview',
        style: `background-color: rgba(${v.value})`
    })
}

const buildEditIcon = () => {
    return build.span({
        classes: ['material-icons', 'bd-editIcon'],
        text: 'edit',
    });
}

const pickerInput = v => {
    return v.editable != false
        ? build.div({
            class: 'bd-pickerValue bd-pickerInline', 
            children: [
                buildInput(v),
                buildEditIcon()
            ],
            'data-var': v.var,
        })
        : build.div({
            class: 'bd-pickerValue', 
            child: buildInput(v)
        })
}

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
                                    classes: ['material-icons', 'bd-helpIcon'],
                                    text: 'help',
                                    title: v.tip
                                })
                            ]
                        }),
                        pickerInput(v)
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