"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/components/ProfileInfo/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProfileInfo/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Profile() {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Please sign in\"\n        }, void 0, false, {\n            fileName: \"/root/spiced/capstone-project/src/components/ProfileInfo/index.js\",\n            lineNumber: 7,\n            columnNumber: 12\n        }, this);\n    }\n    const { user } = session;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Profile\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/components/ProfileInfo/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.image,\n                        alt: \"Profile Picture\"\n                    }, void 0, false, {\n                        fileName: \"/root/spiced/capstone-project/src/components/ProfileInfo/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/spiced/capstone-project/src/components/ProfileInfo/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Email: \",\n                            user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/spiced/capstone-project/src/components/ProfileInfo/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/spiced/capstone-project/src/components/ProfileInfo/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/spiced/capstone-project/src/components/ProfileInfo/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Profile, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlSW5mby9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBRTlCLFNBQVNDOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHSCwyREFBVUE7SUFFcEMsSUFBSSxDQUFDRyxTQUFTO1FBQ1oscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO0lBRWpCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNFOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNGOztrQ0FDQyw4REFBQ0c7d0JBQUlDLEtBQUtILEtBQUtJLEtBQUs7d0JBQUVDLEtBQUk7Ozs7OztrQ0FDMUIsOERBQUNDOzs0QkFBRTs0QkFBT04sS0FBS08sSUFBSTs7Ozs7OztrQ0FDbkIsOERBQUNEOzs0QkFBRTs0QkFBUU4sS0FBS1EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtHQXBCd0JaOztRQUNJRCx1REFBVUE7OztLQURkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlSW5mby9pbmRleC5qcz80NWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiA8ZGl2PlBsZWFzZSBzaWduIGluPC9kaXY+O1xuICB9XG5cbiAgY29uc3QgeyB1c2VyIH0gPSBzZXNzaW9uO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Qcm9maWxlPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPXt1c2VyLmltYWdlfSBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIiAvPlxuICAgICAgICA8cD5OYW1lOiB7dXNlci5uYW1lfTwvcD5cbiAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgey8qIEFkZCBtb3JlIHByb2ZpbGUgaW5mb3JtYXRpb24gYXMgbmVlZGVkICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsIlByb2ZpbGUiLCJkYXRhIiwic2Vzc2lvbiIsImRpdiIsInVzZXIiLCJoMSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwicCIsIm5hbWUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProfileInfo/index.js\n"));

/***/ })

});