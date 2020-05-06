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