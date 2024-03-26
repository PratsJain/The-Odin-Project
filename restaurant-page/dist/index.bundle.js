/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SAMAN.ttf */ "./src/SAMAN.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icon.png */ "./src/assets/icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'samark';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: 600;
    font-style: normal;
}


body {
    height: 100vh;
    margin: 0;
    /* padding: 10px; */
    font-family: Roboto, Oxygen, Ubuntu, sans-serif, sans-serif, sans-serif;
    box-sizing: border-box;
    font-size: 15px;
}

header,
footer {
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0px 40px 0px 40px;
    background-color: #fef3c7;
}

.heading {
    display: flex;
    font-family: 'samark';
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bolder;
    color: #451a03;
}

header>nav {
    display: flex;
    gap: 30px;
    justify-content: center;
    /* align-items: center; */
    /* box-shadow: 0px 5px 2px 0px #4314072f; */
}

/* header>nav {
    box-shadow: 0px 5px 2px 0px #4314072f;
} */

button {
    /* padding-bottom: 20px; */
    margin-top: 10px;
    /* margin-bottom: 2px; */
    font-size: 20px;
    width: 100px;
    border-radius: 20px 20px 0px 0px;
    color: white;
    background-color: #92400e;
    outline: none;
    border: none;
    /* background-color: white; */
}

.unselected {
    color: white;
    background-color: #92400e;
    border: none;
    font-weight: 500;
}

.selected {
    color: #92400e;
    background-color: white;
    border: solid #fbbf24;
    border-width: 5px 5px 0px 5px;
    font-weight: bold;
}


button:focus {
    border: solid 4px #451a03;
}

button:hover {
    background-color: #fbbf24;
    cursor: pointer;
}

.content {
    /* height: 100%; */
    position: relative;
    display: flex;
    justify-content: center;
    padding: 50px;
}

.content::before {
    content: "";
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: 350px 350px;
    background-position: 0px -5px;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.25;
}

.container {
    position: relative;
    /* height: 500px; */
    width: 800px;
    background-color: #fcd34db9;
    border-radius: 30px;
    padding: 30px;
    display: flex;
    gap: 75px;
    flex-direction: column;
    align-items: center;
}

.content-box,
.title-box,
.name-card {

    border-radius: 25px;
    padding: 20px;
    border: solid #d97706;
    border-width: 3px;

}

.title-box {
    font-family: 'samark';
    background-color: white;
    width: 75%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    /* color: #451a03; */
    color: #92400e;
    font-weight: bold;
}

/* .title {
    font-size: 20px;
    font-weight: bold;
} */

.content-box,
.name-card {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-weight: 450;
    background-color: #fffbeb;
    color: #451a03;
}


.name-card {
    position: relative;
    align-items: flex-start;
}

.name-card-photo {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 100px;
    width: 100px;
    border-radius: 25px;
}

.box-title {
    font-family: 'samark';
    font-size: 25px;
    font-weight: bold;
    color: #92400e;
}

.item-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 4fr 1fr;
    gap: 10px;
    /* gap: 10px; */
    /* font-weight: 450;
    background-color: #fffbeb;
    color: #451a03; */
}

.price {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-weight: 900;
}

.item-info {padding-top: 5px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

.item-photo {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    max-height: 200px;
    max-width: 200px;
    border-radius: 25px;
    border: solid 1px #d97706;
}

p {
    margin: 0;
    padding: 0;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,+DAA0C;IAC1C,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uEAAuE;IACvE,sBAAsB;IACtB,eAAe;AACnB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,yBAAyB;IACzB,2CAA2C;AAC/C;;AAEA;;GAEG;;AAEH;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,wBAAwB;IACxB,eAAe;IACf,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,uBAAuB;IACvB,qBAAqB;IACrB,6BAA6B;IAC7B,iBAAiB;AACrB;;;AAGA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,yDAA0C;IAC1C,4BAA4B;IAC5B,6BAA6B;IAC7B,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,WAAW;IACX,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;;;IAII,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,iBAAiB;;AAErB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,UAAU;IACV,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,iBAAiB;AACrB;;AAEA;;;GAGG;;AAEH;;IAEI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;AAClB;;;AAGA;IACI,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,8BAA8B;IAC9B,SAAS;IACT,eAAe;IACf;;qBAEiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;;AAEA,YAAY,gBAAgB;IACxB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,UAAU;AACd","sourcesContent":["@font-face {\n    font-family: 'samark';\n    src: url('./SAMAN.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n\nbody {\n    height: 100vh;\n    margin: 0;\n    /* padding: 10px; */\n    font-family: Roboto, Oxygen, Ubuntu, sans-serif, sans-serif, sans-serif;\n    box-sizing: border-box;\n    font-size: 15px;\n}\n\nheader,\nfooter {\n    height: 50px;\n    display: flex;\n    justify-content: space-between;\n    padding: 0px 40px 0px 40px;\n    background-color: #fef3c7;\n}\n\n.heading {\n    display: flex;\n    font-family: 'samark';\n    justify-content: center;\n    align-items: center;\n    font-size: 30px;\n    font-weight: bolder;\n    color: #451a03;\n}\n\nheader>nav {\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n    /* align-items: center; */\n    /* box-shadow: 0px 5px 2px 0px #4314072f; */\n}\n\n/* header>nav {\n    box-shadow: 0px 5px 2px 0px #4314072f;\n} */\n\nbutton {\n    /* padding-bottom: 20px; */\n    margin-top: 10px;\n    /* margin-bottom: 2px; */\n    font-size: 20px;\n    width: 100px;\n    border-radius: 20px 20px 0px 0px;\n    color: white;\n    background-color: #92400e;\n    outline: none;\n    border: none;\n    /* background-color: white; */\n}\n\n.unselected {\n    color: white;\n    background-color: #92400e;\n    border: none;\n    font-weight: 500;\n}\n\n.selected {\n    color: #92400e;\n    background-color: white;\n    border: solid #fbbf24;\n    border-width: 5px 5px 0px 5px;\n    font-weight: bold;\n}\n\n\nbutton:focus {\n    border: solid 4px #451a03;\n}\n\nbutton:hover {\n    background-color: #fbbf24;\n    cursor: pointer;\n}\n\n.content {\n    /* height: 100%; */\n    position: relative;\n    display: flex;\n    justify-content: center;\n    padding: 50px;\n}\n\n.content::before {\n    content: \"\";\n    background-image: url('./assets/icon.png');\n    background-size: 350px 350px;\n    background-position: 0px -5px;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    opacity: 0.25;\n}\n\n.container {\n    position: relative;\n    /* height: 500px; */\n    width: 800px;\n    background-color: #fcd34db9;\n    border-radius: 30px;\n    padding: 30px;\n    display: flex;\n    gap: 75px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.content-box,\n.title-box,\n.name-card {\n\n    border-radius: 25px;\n    padding: 20px;\n    border: solid #d97706;\n    border-width: 3px;\n\n}\n\n.title-box {\n    font-family: 'samark';\n    background-color: white;\n    width: 75%;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 40px;\n    /* color: #451a03; */\n    color: #92400e;\n    font-weight: bold;\n}\n\n/* .title {\n    font-size: 20px;\n    font-weight: bold;\n} */\n\n.content-box,\n.name-card {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    font-weight: 450;\n    background-color: #fffbeb;\n    color: #451a03;\n}\n\n\n.name-card {\n    position: relative;\n    align-items: flex-start;\n}\n\n.name-card-photo {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    height: 100px;\n    width: 100px;\n    border-radius: 25px;\n}\n\n.box-title {\n    font-family: 'samark';\n    font-size: 25px;\n    font-weight: bold;\n    color: #92400e;\n}\n\n.item-info-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-columns: 4fr 1fr;\n    gap: 10px;\n    /* gap: 10px; */\n    /* font-weight: 450;\n    background-color: #fffbeb;\n    color: #451a03; */\n}\n\n.price {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    font-weight: 900;\n}\n\n.item-info {padding-top: 5px;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.item-photo {\n    grid-column: 2 / 3;\n    grid-row: 1 / 3;\n    max-height: 200px;\n    max-width: 200px;\n    border-radius: 25px;\n    border: solid 1px #d97706;\n}\n\np {\n    margin: 0;\n    padding: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _assets_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/chef.png */ "./src/assets/chef.png");


function home() {
    document.getElementById("home").setAttribute("class", "unselected");
    document.getElementById("menu").setAttribute("class", "unselected");
    document.getElementById("about").setAttribute("class", "selected");
    const cont = document.getElementById("container");
    cont.innerHTML = "";
    const createEL = (divClass, title, istitle = false, content = null, img = null) => {
        const box = document.createElement("div");
        box.setAttribute("class", divClass);
        const title1 = document.createElement("p");
        title1.innerText = title;
        box.appendChild(title1);
        if (!istitle) {
            title1.setAttribute("class", "box-title");
            if (content !== null) {
                const content1 = document.createElement("p");
                content1.innerText = content;
                box.appendChild(content1);
            }
            if (img !== null) {
                const mydp = new Image();
                mydp.src = img;
                mydp.setAttribute("class", "name-card-photo");
                box.appendChild(mydp);
            }
        }
        cont.appendChild(box);
    };
    createEL("title-box", "Our Lineup", true);
    let content = "Chef\n555-555-5554\nmotu@spiceParadise.com";
    createEL("name-card", "Motabhai", false, content, _assets_chef_png__WEBPACK_IMPORTED_MODULE_0__);
    content = "Manager\n555-555-5555\njetha@spiceParadise.com";
    createEL("name-card", "Jethalal", false, content, _assets_chef_png__WEBPACK_IMPORTED_MODULE_0__);
    content = "Waiter\n555-555-5556\niter@spiceParadise.com";
    createEL("name-card", "Iyer", false, content, _assets_chef_png__WEBPACK_IMPORTED_MODULE_0__);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
    document.getElementById("home").setAttribute("class", "selected");
    document.getElementById("menu").setAttribute("class", "unselected");
    document.getElementById("about").setAttribute("class", "unselected");
    const cont = document.getElementById("container");
    cont.innerHTML = "";
    const createEL = (divClass, title, istitle = false, content = null) => {
        const box = document.createElement("div");
        box.setAttribute("class", divClass);
        const title1 = document.createElement("p");
        title1.innerText = title;
        box.appendChild(title1);
        if (!istitle) {
            title1.setAttribute("class", "box-title");
            if (content !== null) {
                const content1 = document.createElement("p");
                content1.innerText = content;
                box.appendChild(content1);
            }
        }
        cont.appendChild(box);
    };
    createEL("title-box", "Spice Paradise of India", true);
    let content = "Embark on a tantalizing journey through the vibrant flavors of India at 'Spice Paradise,' our pure veg haven. Indulge in aromatic curries, delicate dosas, and tantalizing tandoori delights meticulously crafted to tantalize your taste buds. Join us in celebrating the rich heritage and culinary artistry of Indian vegetarian cuisine.";
    createEL("content-box", "Foundation", false, content);
    content = "Sunday \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 8am - 8pm\nMonday\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa06am - 6pm\nTuesday\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa06am - 6pm\nWednesday\xa0\xa0\xa0\xa0\xa0\xa0\xa06am - 6pm\nThursday\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa06am - 10pm\nFriday \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 6am - 10pm\nSaturday\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa08am - 10pm";
    createEL("content-box", "Timings", false, content);
    content = "123-A, Connaught Place\nNew Delhi-110001\nBharat";
    createEL("content-box", "Visit Us", false, content);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _assets_dosa_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/dosa.jpg */ "./src/assets/dosa.jpg");
/* harmony import */ var _assets_lassi_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/lassi.jpeg */ "./src/assets/lassi.jpeg");
/* harmony import */ var _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pav.jpg */ "./src/assets/pav.jpg");




function home() {
    document.getElementById("home").setAttribute("class", "unselected");
    document.getElementById("menu").setAttribute("class", "selected");
    document.getElementById("about").setAttribute("class", "unselected");
    const cont = document.getElementById("container");
    cont.innerHTML = "";
    const createEL = (divClass, title, istitle = false, content = null, price = null, img = null) => {
        const box = document.createElement("div");
        box.setAttribute("class", divClass);
        const title1 = document.createElement("p");
        title1.innerText = title;
        box.appendChild(title1);
        if (!istitle) {
            title1.setAttribute("class", "box-title");
            if (content !== null && price !== null && img !== null) {
                const grid = document.createElement("div");
                grid.setAttribute("class", "item-info-grid");
                const content1 = document.createElement("p");
                content1.setAttribute("class", "item-info");
                content1.innerText = content;
                grid.appendChild(content1);
                const price1 = document.createElement("p");
                price1.setAttribute("class", "price");
                price1.innerText = price;
                grid.appendChild(price1);
                const mydp = new Image();
                mydp.src = img;
                mydp.setAttribute("class", "item-photo");
                grid.appendChild(mydp);
                box.appendChild(grid);
            }
        }
        cont.appendChild(box);
    };
    createEL("title-box", "Menu", true);
    createEL("content-box", "Beverages", false);
    let content = "Quench your thirst with our refreshing Lassi, a traditional Indian yogurt-based drink.\nAvailable in various flavors.";
    let price = "₹250";
    createEL("name-card", "Lassi", false, content, price, _assets_lassi_jpeg__WEBPACK_IMPORTED_MODULE_1__);
    content = "Experience the tangy delight of Shikanji, a traditional Indian lemonade infused with spices and sweetness.\nPerfect for a refreshing sip.";
    price = "₹100";
    createEL("name-card", "Jain Shikanji", false, content, price, _assets_lassi_jpeg__WEBPACK_IMPORTED_MODULE_1__);
    createEL("content-box", "Breakfast", false);
    content =
        "Delight in our comforting Poha, a fragrant and flavorful Indian breakfast dish made with flattened rice, vegetables, and aromatic spices.";
    price = "₹250";
    createEL("name-card", "Poha", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
    content = 
    "Savor the South Indian classic, Idli Sambar, soft and fluffy steamed rice cakes served with a flavorful lentil-based vegetable stew.";
    price = "₹250";
    createEL("name-card", "Idli Sambar", false, content, price, _assets_dosa_jpg__WEBPACK_IMPORTED_MODULE_0__);
    createEL("content-box", "Main Course", false);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, _assets_pav_jpg__WEBPACK_IMPORTED_MODULE_2__);
}

/***/ }),

/***/ "./src/SAMAN.ttf":
/*!***********************!*\
  !*** ./src/SAMAN.ttf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcba438bef1049a04a96.ttf";

/***/ }),

/***/ "./src/assets/chef.png":
/*!*****************************!*\
  !*** ./src/assets/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "727d790be747fbc6bc98.png";

/***/ }),

/***/ "./src/assets/dosa.jpg":
/*!*****************************!*\
  !*** ./src/assets/dosa.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2445bceb2dbdd814ec78.jpg";

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d8d974b6ab42102e367.png";

/***/ }),

/***/ "./src/assets/lassi.jpeg":
/*!*******************************!*\
  !*** ./src/assets/lassi.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "964dd54b9d49280fb588.jpeg";

/***/ }),

/***/ "./src/assets/pav.jpg":
/*!****************************!*\
  !*** ./src/assets/pav.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1618f661374c3f0752bb.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");






const output = (function mainfn() {
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    console.log("Hello!! Welcome to Spice Paradise of India!!");
    document.querySelector("#home").addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    document.querySelector("#menu").addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    document.querySelector("#about").addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1U7QUFDRTtBQUNGOzs7QUFHL0I7QUFDQSxJQUFJLG9EQUFNO0FBQ1Y7QUFDQSw4REFBOEQsZ0RBQU07QUFDcEUsOERBQThELGdEQUFNO0FBQ3BFLCtEQUErRCxpREFBTztBQUN0RSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vU0FNQU4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3NhbWFyayc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIHNhbnMtc2VyaWYsIHNhbnMtc2VyaWYsIHNhbnMtc2VyaWY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmhlYWRlcixcbmZvb3RlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDBweCA0MHB4IDBweCA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWYzYzc7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiAnc2FtYXJrJztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiAjNDUxYTAzO1xufVxuXG5oZWFkZXI+bmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMzBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCA1cHggMnB4IDBweCAjNDMxNDA3MmY7ICovXG59XG5cbi8qIGhlYWRlcj5uYXYge1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMnB4IDBweCAjNDMxNDA3MmY7XG59ICovXG5cbmJ1dHRvbiB7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDIwcHg7ICovXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAycHg7ICovXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyNDAwZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbn1cblxuLnVuc2VsZWN0ZWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI0MDBlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjOTI0MDBlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgI2ZiYmYyNDtcbiAgICBib3JkZXItd2lkdGg6IDVweCA1cHggMHB4IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5idXR0b246Zm9jdXMge1xuICAgIGJvcmRlcjogc29saWQgNHB4ICM0NTFhMDM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYmYyNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNTBweDtcbn1cblxuLmNvbnRlbnQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzNTBweCAzNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgb3BhY2l0eTogMC4yNTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2QzNGRiOTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDc1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC1ib3gsXG4udGl0bGUtYm94LFxuLm5hbWUtY2FyZCB7XG5cbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjZDk3NzA2O1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuXG59XG5cbi50aXRsZS1ib3gge1xuICAgIGZvbnQtZmFtaWx5OiAnc2FtYXJrJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAvKiBjb2xvcjogIzQ1MWEwMzsgKi9cbiAgICBjb2xvcjogIzkyNDAwZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59ICovXG5cbi5jb250ZW50LWJveCxcbi5uYW1lLWNhcmQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJlYjtcbiAgICBjb2xvcjogIzQ1MWEwMztcbn1cblxuXG4ubmFtZS1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5uYW1lLWNhcmQtcGhvdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmJveC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdzYW1hcmsnO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzkyNDAwZTtcbn1cblxuLml0ZW0taW5mby1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIC8qIGdhcDogMTBweDsgKi9cbiAgICAvKiBmb250LXdlaWdodDogNDUwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWI7XG4gICAgY29sb3I6ICM0NTFhMDM7ICovXG59XG5cbi5wcmljZSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uaXRlbS1pbmZvIHtwYWRkaW5nLXRvcDogNXB4O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5pdGVtLXBob3RvIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZDk3NzA2O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsK0RBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsdUVBQXVFO0lBQ3ZFLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDJDQUEyQztBQUMvQzs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseURBQTBDO0lBQzFDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7O0lBSUksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7OztHQUdHOztBQUVIOztJQUVJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsZUFBZTtJQUNmOztxQkFFaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQSxZQUFZLGdCQUFnQjtJQUN4QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdzYW1hcmsnO1xcbiAgICBzcmM6IHVybCgnLi9TQU1BTi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIHNhbnMtc2VyaWYsIHNhbnMtc2VyaWYsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwcHggNDBweCAwcHggNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjNjNztcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ3NhbWFyayc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiAjNDUxYTAzO1xcbn1cXG5cXG5oZWFkZXI+bmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDVweCAycHggMHB4ICM0MzE0MDcyZjsgKi9cXG59XFxuXFxuLyogaGVhZGVyPm5hdiB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMnB4IDBweCAjNDMxNDA3MmY7XFxufSAqL1xcblxcbmJ1dHRvbiB7XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAyMHB4OyAqL1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAycHg7ICovXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI0MDBlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG4udW5zZWxlY3RlZCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyNDAwZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBjb2xvcjogIzkyNDAwZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogc29saWQgI2ZiYmYyNDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDBweCA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgICBib3JkZXI6IHNvbGlkIDRweCAjNDUxYTAzO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiZjI0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4uY29udGVudDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvaWNvbi5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzNTBweCAzNTBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC01cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDM0ZGI5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDc1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LWJveCxcXG4udGl0bGUtYm94LFxcbi5uYW1lLWNhcmQge1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IHNvbGlkICNkOTc3MDY7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcblxcbn1cXG5cXG4udGl0bGUtYm94IHtcXG4gICAgZm9udC1mYW1pbHk6ICdzYW1hcmsnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgLyogY29sb3I6ICM0NTFhMDM7ICovXFxuICAgIGNvbG9yOiAjOTI0MDBlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59ICovXFxuXFxuLmNvbnRlbnQtYm94LFxcbi5uYW1lLWNhcmQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0NTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZiZWI7XFxuICAgIGNvbG9yOiAjNDUxYTAzO1xcbn1cXG5cXG5cXG4ubmFtZS1jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm5hbWUtY2FyZC1waG90byB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uYm94LXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdzYW1hcmsnO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzkyNDAwZTtcXG59XFxuXFxuLml0ZW0taW5mby1ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICAvKiBmb250LXdlaWdodDogNDUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmViO1xcbiAgICBjb2xvcjogIzQ1MWEwMzsgKi9cXG59XFxuXFxuLnByaWNlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5pdGVtLWluZm8ge3BhZGRpbmctdG9wOiA1cHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4uaXRlbS1waG90byB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2Q5NzcwNjtcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2hlZmltZyBmcm9tICcuL2Fzc2V0cy9jaGVmLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidW5zZWxlY3RlZFwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ1bnNlbGVjdGVkXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG4gICAgY29udC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGNyZWF0ZUVMID0gKGRpdkNsYXNzLCB0aXRsZSwgaXN0aXRsZSA9IGZhbHNlLCBjb250ZW50ID0gbnVsbCwgaW1nID0gbnVsbCkgPT4ge1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGl2Q2xhc3MpO1xuICAgICAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGl0bGUxLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQodGl0bGUxKTtcbiAgICAgICAgaWYgKCFpc3RpdGxlKSB7XG4gICAgICAgICAgICB0aXRsZTEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3gtdGl0bGVcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgY29udGVudDEuaW5uZXJUZXh0ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQoY29udGVudDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGltZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG15ZHAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBteWRwLnNyYyA9IGltZztcbiAgICAgICAgICAgICAgICBteWRwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZS1jYXJkLXBob3RvXCIpO1xuICAgICAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZChteWRwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250LmFwcGVuZENoaWxkKGJveCk7XG4gICAgfTtcbiAgICBjcmVhdGVFTChcInRpdGxlLWJveFwiLCBcIk91ciBMaW5ldXBcIiwgdHJ1ZSk7XG4gICAgbGV0IGNvbnRlbnQgPSBcIkNoZWZcXG41NTUtNTU1LTU1NTRcXG5tb3R1QHNwaWNlUGFyYWRpc2UuY29tXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJNb3RhYmhhaVwiLCBmYWxzZSwgY29udGVudCwgY2hlZmltZyk7XG4gICAgY29udGVudCA9IFwiTWFuYWdlclxcbjU1NS01NTUtNTU1NVxcbmpldGhhQHNwaWNlUGFyYWRpc2UuY29tXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJKZXRoYWxhbFwiLCBmYWxzZSwgY29udGVudCwgY2hlZmltZyk7XG4gICAgY29udGVudCA9IFwiV2FpdGVyXFxuNTU1LTU1NS01NTU2XFxuaXRlckBzcGljZVBhcmFkaXNlLmNvbVwiO1xuICAgIGNyZWF0ZUVMKFwibmFtZS1jYXJkXCIsIFwiSXllclwiLCBmYWxzZSwgY29udGVudCwgY2hlZmltZyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3RlZFwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ1bnNlbGVjdGVkXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ1bnNlbGVjdGVkXCIpO1xuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbiAgICBjb250LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgY3JlYXRlRUwgPSAoZGl2Q2xhc3MsIHRpdGxlLCBpc3RpdGxlID0gZmFsc2UsIGNvbnRlbnQgPSBudWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBkaXZDbGFzcyk7XG4gICAgICAgIGNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0aXRsZTEuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aXRsZTEpO1xuICAgICAgICBpZiAoIWlzdGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJveC10aXRsZVwiKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50MS5pbm5lclRleHQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZChjb250ZW50MSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udC5hcHBlbmRDaGlsZChib3gpO1xuICAgIH07XG4gICAgY3JlYXRlRUwoXCJ0aXRsZS1ib3hcIiwgXCJTcGljZSBQYXJhZGlzZSBvZiBJbmRpYVwiLCB0cnVlKTtcbiAgICBsZXQgY29udGVudCA9IFwiRW1iYXJrIG9uIGEgdGFudGFsaXppbmcgam91cm5leSB0aHJvdWdoIHRoZSB2aWJyYW50IGZsYXZvcnMgb2YgSW5kaWEgYXQgJ1NwaWNlIFBhcmFkaXNlLCcgb3VyIHB1cmUgdmVnIGhhdmVuLiBJbmR1bGdlIGluIGFyb21hdGljIGN1cnJpZXMsIGRlbGljYXRlIGRvc2FzLCBhbmQgdGFudGFsaXppbmcgdGFuZG9vcmkgZGVsaWdodHMgbWV0aWN1bG91c2x5IGNyYWZ0ZWQgdG8gdGFudGFsaXplIHlvdXIgdGFzdGUgYnVkcy4gSm9pbiB1cyBpbiBjZWxlYnJhdGluZyB0aGUgcmljaCBoZXJpdGFnZSBhbmQgY3VsaW5hcnkgYXJ0aXN0cnkgb2YgSW5kaWFuIHZlZ2V0YXJpYW4gY3Vpc2luZS5cIjtcbiAgICBjcmVhdGVFTChcImNvbnRlbnQtYm94XCIsIFwiRm91bmRhdGlvblwiLCBmYWxzZSwgY29udGVudCk7XG4gICAgY29udGVudCA9IFwiU3VuZGF5IFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMCA4YW0gLSA4cG1cXG5Nb25kYXlcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMDZhbSAtIDZwbVxcblR1ZXNkYXlcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTA2YW0gLSA2cG1cXG5XZWRuZXNkYXlcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMDZhbSAtIDZwbVxcblRodXJzZGF5XFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMDZhbSAtIDEwcG1cXG5GcmlkYXkgXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMCA2YW0gLSAxMHBtXFxuU2F0dXJkYXlcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwXFx4YTA4YW0gLSAxMHBtXCI7XG4gICAgY3JlYXRlRUwoXCJjb250ZW50LWJveFwiLCBcIlRpbWluZ3NcIiwgZmFsc2UsIGNvbnRlbnQpO1xuICAgIGNvbnRlbnQgPSBcIjEyMy1BLCBDb25uYXVnaHQgUGxhY2VcXG5OZXcgRGVsaGktMTEwMDAxXFxuQmhhcmF0XCI7XG4gICAgY3JlYXRlRUwoXCJjb250ZW50LWJveFwiLCBcIlZpc2l0IFVzXCIsIGZhbHNlLCBjb250ZW50KTtcbn0iLCJpbXBvcnQgZG9zYSBmcm9tICcuL2Fzc2V0cy9kb3NhLmpwZyc7XG5pbXBvcnQgbGFzc2kgZnJvbSAnLi9hc3NldHMvbGFzc2kuanBlZyc7XG5pbXBvcnQgcGF2IGZyb20gJy4vYXNzZXRzL3Bhdi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInVuc2VsZWN0ZWRcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInVuc2VsZWN0ZWRcIik7XG4gICAgY29uc3QgY29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuICAgIGNvbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBjcmVhdGVFTCA9IChkaXZDbGFzcywgdGl0bGUsIGlzdGl0bGUgPSBmYWxzZSwgY29udGVudCA9IG51bGwsIHByaWNlID0gbnVsbCwgaW1nID0gbnVsbCkgPT4ge1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGl2Q2xhc3MpO1xuICAgICAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGl0bGUxLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQodGl0bGUxKTtcbiAgICAgICAgaWYgKCFpc3RpdGxlKSB7XG4gICAgICAgICAgICB0aXRsZTEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3gtdGl0bGVcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudCAhPT0gbnVsbCAmJiBwcmljZSAhPT0gbnVsbCAmJiBpbWcgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXRlbS1pbmZvLWdyaWRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50MS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIml0ZW0taW5mb1wiKTtcbiAgICAgICAgICAgICAgICBjb250ZW50MS5pbm5lclRleHQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY29udGVudDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIHByaWNlMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByaWNlXCIpO1xuICAgICAgICAgICAgICAgIHByaWNlMS5pbm5lclRleHQgPSBwcmljZTtcbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKHByaWNlMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlkcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIG15ZHAuc3JjID0gaW1nO1xuICAgICAgICAgICAgICAgIG15ZHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpdGVtLXBob3RvXCIpO1xuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQobXlkcCk7XG4gICAgICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICB9O1xuICAgIGNyZWF0ZUVMKFwidGl0bGUtYm94XCIsIFwiTWVudVwiLCB0cnVlKTtcbiAgICBjcmVhdGVFTChcImNvbnRlbnQtYm94XCIsIFwiQmV2ZXJhZ2VzXCIsIGZhbHNlKTtcbiAgICBsZXQgY29udGVudCA9IFwiUXVlbmNoIHlvdXIgdGhpcnN0IHdpdGggb3VyIHJlZnJlc2hpbmcgTGFzc2ksIGEgdHJhZGl0aW9uYWwgSW5kaWFuIHlvZ3VydC1iYXNlZCBkcmluay5cXG5BdmFpbGFibGUgaW4gdmFyaW91cyBmbGF2b3JzLlwiO1xuICAgIGxldCBwcmljZSA9IFwi4oK5MjUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJMYXNzaVwiLCBmYWxzZSwgY29udGVudCwgcHJpY2UsIGxhc3NpKTtcbiAgICBjb250ZW50ID0gXCJFeHBlcmllbmNlIHRoZSB0YW5neSBkZWxpZ2h0IG9mIFNoaWthbmppLCBhIHRyYWRpdGlvbmFsIEluZGlhbiBsZW1vbmFkZSBpbmZ1c2VkIHdpdGggc3BpY2VzIGFuZCBzd2VldG5lc3MuXFxuUGVyZmVjdCBmb3IgYSByZWZyZXNoaW5nIHNpcC5cIjtcbiAgICBwcmljZSA9IFwi4oK5MTAwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJKYWluIFNoaWthbmppXCIsIGZhbHNlLCBjb250ZW50LCBwcmljZSwgbGFzc2kpO1xuICAgIGNyZWF0ZUVMKFwiY29udGVudC1ib3hcIiwgXCJCcmVha2Zhc3RcIiwgZmFsc2UpO1xuICAgIGNvbnRlbnQgPVxuICAgICAgICBcIkRlbGlnaHQgaW4gb3VyIGNvbWZvcnRpbmcgUG9oYSwgYSBmcmFncmFudCBhbmQgZmxhdm9yZnVsIEluZGlhbiBicmVha2Zhc3QgZGlzaCBtYWRlIHdpdGggZmxhdHRlbmVkIHJpY2UsIHZlZ2V0YWJsZXMsIGFuZCBhcm9tYXRpYyBzcGljZXMuXCI7XG4gICAgcHJpY2UgPSBcIuKCuTI1MFwiO1xuICAgIGNyZWF0ZUVMKFwibmFtZS1jYXJkXCIsIFwiUG9oYVwiLCBmYWxzZSwgY29udGVudCwgcHJpY2UsIHBhdik7XG4gICAgY29udGVudCA9IFxuICAgIFwiU2F2b3IgdGhlIFNvdXRoIEluZGlhbiBjbGFzc2ljLCBJZGxpIFNhbWJhciwgc29mdCBhbmQgZmx1ZmZ5IHN0ZWFtZWQgcmljZSBjYWtlcyBzZXJ2ZWQgd2l0aCBhIGZsYXZvcmZ1bCBsZW50aWwtYmFzZWQgdmVnZXRhYmxlIHN0ZXcuXCI7XG4gICAgcHJpY2UgPSBcIuKCuTI1MFwiO1xuICAgIGNyZWF0ZUVMKFwibmFtZS1jYXJkXCIsIFwiSWRsaSBTYW1iYXJcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBkb3NhKTtcbiAgICBjcmVhdGVFTChcImNvbnRlbnQtYm94XCIsIFwiTWFpbiBDb3Vyc2VcIiwgZmFsc2UpO1xuICAgIGNvbnRlbnQgPSBcIkluZHVsZ2UgaW4gb3VyIHNhdm9yeSBQYXYgQmhhamksIGEgZGVsZWN0YWJsZSBibGVuZCBvZiBtYXNoZWQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBidXR0ZXJlZCBicmVhZCByb2xscy5cXG5BIE11bWJhaSBmYXZvcml0ZSFcIjtcbiAgICBwcmljZSA9IFwi4oK5MzUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJQYXYgQmhhamlcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBwYXYpO1xuICAgIGNvbnRlbnQgPSBcIkluZHVsZ2UgaW4gb3VyIHNhdm9yeSBQYXYgQmhhamksIGEgZGVsZWN0YWJsZSBibGVuZCBvZiBtYXNoZWQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBidXR0ZXJlZCBicmVhZCByb2xscy5cXG5BIE11bWJhaSBmYXZvcml0ZSFcIjtcbiAgICBwcmljZSA9IFwi4oK5MzUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJQYXYgQmhhamlcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBwYXYpO1xuICAgIGNvbnRlbnQgPSBcIkluZHVsZ2UgaW4gb3VyIHNhdm9yeSBQYXYgQmhhamksIGEgZGVsZWN0YWJsZSBibGVuZCBvZiBtYXNoZWQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBidXR0ZXJlZCBicmVhZCByb2xscy5cXG5BIE11bWJhaSBmYXZvcml0ZSFcIjtcbiAgICBwcmljZSA9IFwi4oK5MzUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJQYXYgQmhhamlcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBwYXYpO1xuICAgIGNvbnRlbnQgPSBcIkluZHVsZ2UgaW4gb3VyIHNhdm9yeSBQYXYgQmhhamksIGEgZGVsZWN0YWJsZSBibGVuZCBvZiBtYXNoZWQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBidXR0ZXJlZCBicmVhZCByb2xscy5cXG5BIE11bWJhaSBmYXZvcml0ZSFcIjtcbiAgICBwcmljZSA9IFwi4oK5MzUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJQYXYgQmhhamlcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBwYXYpO1xuICAgIGNvbnRlbnQgPSBcIkluZHVsZ2UgaW4gb3VyIHNhdm9yeSBQYXYgQmhhamksIGEgZGVsZWN0YWJsZSBibGVuZCBvZiBtYXNoZWQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBidXR0ZXJlZCBicmVhZCByb2xscy5cXG5BIE11bWJhaSBmYXZvcml0ZSFcIjtcbiAgICBwcmljZSA9IFwi4oK5MzUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJQYXYgQmhhamlcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBwYXYpO1xuICAgIGNvbnRlbnQgPSBcIkluZHVsZ2UgaW4gb3VyIHNhdm9yeSBQYXYgQmhhamksIGEgZGVsZWN0YWJsZSBibGVuZCBvZiBtYXNoZWQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBidXR0ZXJlZCBicmVhZCByb2xscy5cXG5BIE11bWJhaSBmYXZvcml0ZSFcIjtcbiAgICBwcmljZSA9IFwi4oK5MzUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJQYXYgQmhhamlcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBwYXYpO1xuICAgIGNvbnRlbnQgPSBcIkluZHVsZ2UgaW4gb3VyIHNhdm9yeSBQYXYgQmhhamksIGEgZGVsZWN0YWJsZSBibGVuZCBvZiBtYXNoZWQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBidXR0ZXJlZCBicmVhZCByb2xscy5cXG5BIE11bWJhaSBmYXZvcml0ZSFcIjtcbiAgICBwcmljZSA9IFwi4oK5MzUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJQYXYgQmhhamlcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBwYXYpO1xuICAgIGNvbnRlbnQgPSBcIkluZHVsZ2UgaW4gb3VyIHNhdm9yeSBQYXYgQmhhamksIGEgZGVsZWN0YWJsZSBibGVuZCBvZiBtYXNoZWQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBidXR0ZXJlZCBicmVhZCByb2xscy5cXG5BIE11bWJhaSBmYXZvcml0ZSFcIjtcbiAgICBwcmljZSA9IFwi4oK5MzUwXCI7XG4gICAgY3JlYXRlRUwoXCJuYW1lLWNhcmRcIiwgXCJQYXYgQmhhamlcIiwgZmFsc2UsIGNvbnRlbnQsIHByaWNlLCBwYXYpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZWZuIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgYWJvdXRmbiBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCBtZW51Zm4gZnJvbSAnLi9tZW51LmpzJztcblxuXG5jb25zdCBvdXRwdXQgPSAoZnVuY3Rpb24gbWFpbmZuKCkge1xuICAgIGhvbWVmbigpO1xuICAgIGNvbnNvbGUubG9nKFwiSGVsbG8hISBXZWxjb21lIHRvIFNwaWNlIFBhcmFkaXNlIG9mIEluZGlhISFcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaG9tZWZuKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51Zm4pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhYm91dGZuKTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9