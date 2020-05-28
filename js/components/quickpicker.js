import build from '../ui';
import {pickerTextValues, pickerValues} from '../data/quickpicker';

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
                        build.div({
                            class: 'bd-pickerValue',
                            child: build.input({
                                class: 'bd-input',
                                value: v.value,
                                'data-var': v.var
                            })
                        })
                    ]
                })
            })
        })
    ]
});

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
                            child: build.div({
                                class: 'bd-colorPreview',
                                style: {
                                    backgroundColor: `rgba(${v.value})`
                                }
                            })
                        })
                    ]
                })
            })
        })
    ]
});

export default build.div({
    class: 'bd-picker',
    children: [pickerText, pickerColors]
});