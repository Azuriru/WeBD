const bdLogo = build.div({
    class: 'bd-logo',
    children: [
        build.div({
            class: 'bd-logoInner',
            html: '<svg class="bd-clyde" viewBox="0 0 33 36" style="width: 33px; height: 36px; fill: url(#gradient); position: absolute;"><linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" style="stop-color:#D16BA5; stop-opacity:1"></stop><stop offset="50%" style="stop-color:#86A8E7; stop-opacity:1"></stop><stop offset="100%" style="stop-color:#41dfff; stop-opacity:1"></stop></linearGradient><path d="M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4"></path></svg><svg class="" viewBox="0 0 33 36" style="width: 31px; height: 32px; fill: white; position: absolute;"><ellipse cx="19.6" cy="17.1" rx="1.9" ry="2"></ellipse><ellipse cx="12.8" cy="17.1" rx="1.9" ry="2"></ellipse><path d="M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z"></path></svg>',
        }),
        build.div({
            text: 'BD',
            class: 'bd-text'
        })
    ]
});

const bdHeaderLeft = build.header({
    class: 'bd-headerLeft',
    children: [bdLogo]
});

const downloadBtn = build.a({
    text: 'Download',
    href: 'https://github.com/Dorumin/BetterDorucord/archive/master.zip',
    class: 'bd-download'
});

const bdHeaderRight = build.header({
    class: 'bd-headerRight',
    children: [downloadBtn]
});

const bdHeader = build.div({
    class: 'bd-header',
    children: [bdHeaderLeft, bdHeaderRight]
});

// const svg = build.svg({
//     viewBox: '0 0 33 36',
//     children: [
//         build.path({
//             d: 'M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4'
//         })
//     ]
// }); 

// document.body.appendChild(b); 
// <svg class="bd-clyde" viewBox="0 0 33 36" style="width: 66px; height: 67px; fill: url(#gradient); position: absolute; transform: translateY(0px);"><linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" style="stop-color:#D16BA5; stop-opacity:1"></stop><stop offset="50%" style="stop-color:#86A8E7; stop-opacity:1"></stop><stop offset="100%" style="stop-color:#41dfff; stop-opacity:1"></stop></linearGradient><path d="M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4"></path></svg>

// <svg class="bd-clyde" viewBox="0 0 33 36" style="width: 66px; height: 67px; fill: url(#gradient); position: absolute;"><linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" style="stop-color:#D16BA5; stop-opacity:1"></stop><stop offset="50%" style="stop-color:#86A8E7; stop-opacity:1"></stop><stop offset="100%" style="stop-color:#41dfff; stop-opacity:1"></stop></linearGradient><path d="M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4"></path></svg><svg class="" viewBox="0 0 33 36" style="width: 60px; height: 61px; fill: white; position: absolute;"><ellipse cx="19.6" cy="17.1" rx="1.9" ry="2"></ellipse><ellipse cx="12.8" cy="17.1" rx="1.9" ry="2"></ellipse><path d="M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z"></path></svg>