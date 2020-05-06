const pickerTextValues = [
    {
        name: 'Image',
        value: 'https://media.discordapp.net/attachments/595506142126538753/602478618001801216/Hopal.png',
        var: '--bd-background-image',
        tip: 'You can leave it blank or insert an image URL',
        editable: false,
    },
    {
        name: 'Position',
        value: 'left top',
        var: '--bd-background-position',
        tip: 'x% y% or center',
        editable: false,
    },
    {
        name: 'Color',
        value: 'rgba(56, 8, 49)',
        var: '--bd-background-color',
        tip: 'Can be anything from rgba to hsla or hex',
        editable: false,
    },
    // Probably a better way to do this but whatever
    {
        name: 'Brightness',
        inlineValue: build.div({
            children: [
                build.text('brightness('),
                build.input({
                    class: 'bd-input',
                    value: '.85',
                    style: 'width: 3ch'
                }),
                build.text(')')
            ]
        }),
        var: '--bd-background-brightness',
        tip: 'Linear multiplier to the background, making it appear brighter or darker',
    },
    {
        name: 'Contrast',
        inlineValue: build.div({
            children: [
                build.text('contrast('),
                build.input({
                    class: 'bd-input',
                    value: '1',
                    style: 'width: 1ch'
                }),
                build.text(')')
            ]
        }),
        var: '--bd-background-contrast',
        tip: 'Adjusts the contrast of the background'
    },
    {
        name: 'Blur',
        inlineValue: build.div({
            children: [
                build.text('blur('),
                build.input({
                    class: 'bd-input',
                    value: '0',
                    style: 'width: 1ch'
                }),
                build.text(')')
            ]
        }),
        var: '--bd-background-blur',
        tip: 'Applies a Gaussian blur to the background. Value is decided by length ie. 1px, 20rem, etc',
    }
]

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
] 