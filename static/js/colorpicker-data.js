const pickerValues = [
    {
        name: 'Default',
        value: 'var(--bd-default)'
    },
    {
        name: 'Default Border',
        value: 'var(--bd-default-border)'
    },
    {
        name: 'Lightest',
        value: 'var(--bd-lightest)'
    },
    {
        name: 'Lighter',
        value: 'var(--bd-lighter)'
    },
    {
        name: 'Light',
        value: 'var(--bd-light)'
    },
    {
        name: 'Dark',
        value: 'var(--bd-dark)'
    },
    {
        name: 'Darker',
        value: 'var(--bd-darker)'
    },
];

const buildColorValue = v => {
    return build.div({
        class: 'bd-colorPreview',
        style: `background-color: rgba(${v.value})`
    })
}

const pickerColors = build.div({
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
            ],
            events: {
                click: function(e) {
                    const me = e.currentTarget;
                    let hasFocused;
                    if (me.classList.contains('bd-focused')) {
                        hasFocused = true;
                    };

                    const all = document.querySelectorAll('.bd-pickerSet.bd-focused');

                    let i = all.length;
                    while (i--) {
                        all[i].classList.remove('bd-focused');
                    }

                    hasFocused ? me.classList.remove('bd-focused'): me.classList.add('bd-focused');
                }
            },
        })
    })
})