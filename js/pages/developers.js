import build from '../ui';
import bdHeader from '../components/bdheader';

const wrapper = build.div({
    class: 'bd-wrapper',
    children: [bdHeader]
});

document.body.appendChild(wrapper);