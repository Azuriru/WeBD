/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/pages/developers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/bdheader.js":
/*!***********************************!*\
  !*** ./js/components/bdheader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui */ \"./js/ui.js\");\n\n\nconst clyde = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].svg({\n    class: 'bd-clyde',\n    viewBox: '0 0 33 36',\n    style: {\n        width: '33px',\n        height: '36px',\n        fill: 'url(#gradient)',\n        position: 'absolute'\n    },\n    children: [\n        _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].path({\n            d: 'M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0Z'\n        }),\n        _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].linearGradient({\n            id: 'gradient',\n            x1: '0%',\n            x2: '100%',\n            y1: '0%',\n            y2: '100%',\n            children: [\n                _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stop({\n                    offset: '0%',\n                    style: {\n                        stopColor: '#D16BA5',\n                        stopOpacity: 1\n                    }\n                }),\n                _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stop({\n                    offset: '50%',\n                    style: {\n                        stopColor: '#86A8E7',\n                        stopOpacity: 1\n                    }\n                }),\n                _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stop({\n                    offset: '100%',\n                    style: {\n                        stopColor: '#41dfff',\n                        stopOpacity: 1\n                    }\n                })\n            ]\n        })\n    ]\n});\n\nconst bdLogo = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n    class: 'bd-logoInner',\n    children: [\n        _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n            class: 'bd-logoIcon',\n            // child: clyde\n            html: '<svg class=\"bd-clyde\" viewBox=\"0 0 33 36\" style=\"width: 33px; height: 36px; fill: url(#gradient); position: absolute;\"><linearGradient id=\"gradient\" x1=\"0%\" x2=\"100%\" y1=\"0%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:#D16BA5; stop-opacity:1\"></stop><stop offset=\"50%\" style=\"stop-color:#86A8E7; stop-opacity:1\"></stop><stop offset=\"100%\" style=\"stop-color:#41dfff; stop-opacity:1\"></stop></linearGradient><path d=\"M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0Z\"></path></svg><svg class=\"\" viewBox=\"0 0 33 36\" style=\"width: 31px; height: 32px; fill: white; position: absolute;\"><ellipse cx=\"19.6\" cy=\"17.1\" rx=\"1.9\" ry=\"2\"></ellipse><ellipse cx=\"12.8\" cy=\"17.1\" rx=\"1.9\" ry=\"2\"></ellipse><path d=\"M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z\"></path></svg>',\n        }),\n        _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n            text: 'BD',\n            class: 'bd-text'\n        })\n    ]\n});\n\nconst bdLogoWrap = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav({\n    class: 'bd-logo',\n    child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({\n        child: bdLogo,\n        href: '/'\n    })\n});\n\nconst whyBD = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav({\n    child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({\n        child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span({\n            text: 'Why BD?'\n        })\n    })\n});\n\nconst support = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav({\n    child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({\n        child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span({\n            text: 'Support'\n        })\n    })\n});\n\nconst github = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav({\n    child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({\n        child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span({\n            text: 'GitHub'\n        }),\n        href: 'https://github.com/Dorumin/BetterDorucord',\n        target: '_blank'\n    })\n});\n\nconst designer = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav({\n    child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({\n        child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span({\n            text: 'BD Designer'\n        }),\n        href: '/designer',\n        target: '_blank'\n    })\n});\n\nconst developers = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nav({\n    child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({\n        child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span({\n            text: 'Developers'\n        }),\n        href: '/developers',\n        target: '_blank'\n    })\n});\n\nconst downloadBtn = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({\n    text: 'Download',\n    href: 'https://github.com/Dorumin/BetterDorucord/archive/master.zip',\n    class: 'bd-download',\n    target: '_blank'\n});\n\nconst bdHeaderLeft = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header({\n    class: 'bd-headerLeft',\n    children: [bdLogoWrap, whyBD, support, github, designer, developers]\n});\n\nconst bdHeaderRight = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header({\n    class: 'bd-headerRight',\n    children: [downloadBtn]\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n    class: 'bd-header',\n    children: [bdHeaderLeft, bdHeaderRight]\n}));\n\n//# sourceURL=webpack:///./js/components/bdheader.js?");

/***/ }),

/***/ "./js/pages/developers.js":
/*!********************************!*\
  !*** ./js/pages/developers.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui */ \"./js/ui.js\");\n/* harmony import */ var _components_bdheader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/bdheader */ \"./js/components/bdheader.js\");\n\n\n\nconst devs = [\n    {\n        name: 'Doru',\n        avatar: 'Opal.png',\n        desc: `Hey, I'm Doru, developer extraordinaire.`\n    },\n    {\n        name: 'Robyn',\n        avatar: 'Whimsicott.jpg',\n        desc: `Designer extraordinaire!`\n    },\n];\n\nconst developers = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n    class: 'bd-developers',\n    children: devs.map(d => {\n        return _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n            class: 'bd-dev',\n            children: [\n                _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n                    class: 'bd-avatarWrapper',\n                    child: _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({\n                        classes: ['bd-avatar', 'bd-img'],\n                        src: `./img/avatars/${d.avatar}`\n                    }),\n                }),\n                _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n                    class: 'bd-info',\n                    children: [\n                        _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n                            classes: ['bd-userHeader'],\n                            text: d.name\n                        }),\n                        _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n                            class: 'bd-userDesc',\n                            text: d.desc\n                        })\n                    ]\n                })\n            ]\n        })\n    })\n});\n\nconst wrapper = _ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div({\n    class: 'bd-wrapper',\n    children: [_components_bdheader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], developers]\n});\n\ndocument.body.appendChild(wrapper);\n\n//# sourceURL=webpack:///./js/pages/developers.js?");

/***/ }),

/***/ "./js/ui.js":
/*!******************!*\
  !*** ./js/ui.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst knownTags = [\n    'div',\n    'span',\n    'a',\n    'img',\n    'input',\n    'button',\n    'textarea',\n    'canvas',\n    'form',\n    'pre',\n    'code',\n    'style',\n    'script',\n\n    'br',\n    'hr',\n\n    'b',\n    'i',\n    's',\n\n    'nav',\n    'article',\n    'header',\n    'footer',\n\n    'svg',\n    'path',\n    'g',\n    'linearGradient',\n    'ellipse',\n    'stop'\n];\n\nconst svgTags = [\n    'svg',\n    'circle',\n    'path',\n    'use',\n    'path',\n    'g',\n    'linearGradient',\n    'stop',\n];\n\nfunction build(attr) {\n    if (!attr.tag) throw new Error('No tag found');\n    if (attr.hasOwnProperty('if') && !attr.if) return document.createDocumentFragment();\n\n    let el;\n\n    if (svgTags.includes(attr.tag)) {\n        el = document.createElementNS(\n            'http://www.w3.org/2000/svg',\n            attr.tag\n        );\n    } else {\n        el = document.createElement(attr.tag);\n    }\n\n    for (let property in attr) {\n        const val = attr[property];\n\n        switch (property) {\n            case 'html':\n                if (Array.isArray(val)) {\n                    throw new Error('Array in html');\n                } else if (val instanceof Node) {\n                    throw new Error('Node in html');\n                } else {\n                    el.innerHTML = val;\n                }\n                break;\n            case 'text':\n                el.appendChild(document.createTextNode(val));\n                break;\n            case 'child':\n                if (val) {\n                    el.appendChild(val);\n                }\n                break;\n            case 'children':\n                const fag = document.createDocumentFragment();\n                for (const elem of val) {\n                    fag.appendChild(elem);\n                }\n\n                el.appendChild(fag);\n                break;\n            case 'classes':\n                el.setAttribute('class', val.join(' '));\n                break;\n            case 'events':\n                for (const key in val) {\n                    el.addEventListener(key, val[key]);\n                }\n                break;\n            case 'style':\n                for (const key in val) {\n                    el.style[key] = val[key];\n                }\n                break;\n            case 'props':\n                for (const key in val) {\n                    console.log(el, val);\n                    el[key] = val[key];\n                }\n                break;\n            case 'if':\n            case 'tag':\n                break;\n\n            default:\n                el.setAttribute(property, val);\n        }\n    }\n\n    return el;\n}\n\nfunction boundTag(tag) {\n    return function(attr) {\n        attr = attr || {};\n        attr.tag = tag;\n\n        return build(attr);\n    };\n}\n\nbuild.text = function(text) {\n    return document.createTextNode(text);\n};\n\nfor (const tag of knownTags) {\n    build[tag] = boundTag(tag);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (build);\n\n//# sourceURL=webpack:///./js/ui.js?");

/***/ })

/******/ });