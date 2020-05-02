const buildInput = v => {
    return build.div({
        class: 'bd-input',
        text: v.value
    });
}

const buildColorValue = v => {
    return build.div({
        class: 'bd-colorPreview',
        style: `background-color: rgba(${v.value})`
    })
}

const picker = build.div({
    class: 'bd-picker',
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
                    child: v.type > 1
                    ? buildColorValue(v)
                    : buildInput(v)
                })
            ]
        })
    })
});