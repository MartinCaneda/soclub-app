/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/profile"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Froot%2Fspiced%2Fcapstone-project%2Fsrc%2Fpages%2Fprofile%2Findex.js&page=%2Fprofile!":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Froot%2Fspiced%2Fcapstone-project%2Fsrc%2Fpages%2Fprofile%2Findex.js&page=%2Fprofile! ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/profile\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/profile/index.js */ \"./src/pages/profile/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/profile\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZyb290JTJGc3BpY2VkJTJGY2Fwc3RvbmUtcHJvamVjdCUyRnNyYyUyRnBhZ2VzJTJGcHJvZmlsZSUyRmluZGV4LmpzJnBhZ2U9JTJGcHJvZmlsZSEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBOEI7QUFDckQ7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzU0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9wcm9maWxlXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvcHJvZmlsZVwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Froot%2Fspiced%2Fcapstone-project%2Fsrc%2Fpages%2Fprofile%2Findex.js&page=%2Fprofile!\n"));

/***/ }),

/***/ "./src/components/AddEventForm/index.js":
/*!**********************************************!*\
  !*** ./src/components/AddEventForm/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddEventForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction AddEventForm() {\n    _s();\n    const { mutate } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/events\");\n    async function handleSubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.target);\n        const data = Object.fromEntries(formData);\n        console.log(data);\n        const response = await fetch(\"/api/events\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        if (response.ok) {\n            mutate();\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"name\",\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/components/AddEventForm/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"name\",\n                name: \"name\",\n                type: \"text\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/components/AddEventForm/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"location\",\n                children: \"Location\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/components/AddEventForm/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"location\",\n                name: \"location\",\n                type: \"text\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/components/AddEventForm/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"description\",\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/components/AddEventForm/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"description\",\n                id: \"description\",\n                cols: \"30\",\n                rows: \"10\",\n                maxLength: \"100\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/components/AddEventForm/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Add event\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/components/AddEventForm/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/root/spiced/capstone-project/src/components/AddEventForm/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(AddEventForm, \"xxLXVqErftMS8Fu4ZE2XAQ1/NX4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = AddEventForm;\nvar _c;\n$RefreshReg$(_c, \"AddEventForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRFdmVudEZvcm0vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRVYsU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdGLCtDQUFNQSxDQUFDO0lBQzFCLGVBQWVHLGFBQWFDLEtBQUs7UUFDL0JBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsV0FBVyxJQUFJQyxTQUFTSCxNQUFNSSxNQUFNO1FBQzFDLE1BQU1DLE9BQU9DLE9BQU9DLFdBQVcsQ0FBQ0w7UUFDaENNLFFBQVFDLEdBQUcsQ0FBQ0o7UUFFWixNQUFNSyxXQUFXLE1BQU1DLE1BQU0sZUFBZTtZQUMxQ0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNYO1FBQ3ZCO1FBRUEsSUFBSUssU0FBU08sRUFBRSxFQUFFO1lBQ2ZuQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ29CO1FBQUtDLFVBQVVwQjs7MEJBQ2QsOERBQUNxQjtnQkFBTUMsU0FBUTswQkFBTzs7Ozs7OzBCQUN0Qiw4REFBQ0M7Z0JBQU1DLElBQUc7Z0JBQU9DLE1BQUs7Z0JBQU9DLE1BQUs7Z0JBQU9DLFFBQVE7Ozs7OzswQkFDakQsOERBQUNOO2dCQUFNQyxTQUFROzBCQUFXOzs7Ozs7MEJBQzFCLDhEQUFDQztnQkFBTUMsSUFBRztnQkFBV0MsTUFBSztnQkFBV0MsTUFBSztnQkFBT0MsUUFBUTs7Ozs7OzBCQUN6RCw4REFBQ047Z0JBQU1DLFNBQVE7MEJBQWM7Ozs7OzswQkFDN0IsOERBQUNNO2dCQUNDSCxNQUFLO2dCQUNMRCxJQUFHO2dCQUNISyxNQUFLO2dCQUNMQyxNQUFLO2dCQUNMQyxXQUFVOzs7Ozs7MEJBRVosOERBQUNDO2dCQUFPTixNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFHNUI7R0F2Q3dCNUI7O1FBQ0hELDJDQUFNQTs7O0tBREhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZEV2ZW50Rm9ybS9pbmRleC5qcz82YTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRFdmVudEZvcm0oKSB7XG4gIGNvbnN0IHsgbXV0YXRlIH0gPSB1c2VTV1IoXCIvYXBpL2V2ZW50c1wiKTtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ldmVudHNcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIG11dGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9jYXRpb25cIj5Mb2NhdGlvbjwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJsb2NhdGlvblwiIG5hbWU9XCJsb2NhdGlvblwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgIG1heExlbmd0aD1cIjEwMFwiXG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBldmVudDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJBZGRFdmVudEZvcm0iLCJtdXRhdGUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhcmdldCIsImRhdGEiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJtYXhMZW5ndGgiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddEventForm/index.js\n"));

/***/ }),

/***/ "./src/pages/profile/index.js":
/*!************************************!*\
  !*** ./src/pages/profile/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateEventPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddEventForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AddEventForm */ \"./src/components/AddEventForm/index.js\");\n\n\nfunction CreateEventPage() {\n    async function createEvent(event) {\n        const response = await fetch(\"/api/events\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(event)\n        });\n        if (response.ok) {\n            router.push(\"/\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Profile info\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/pages/profile/index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Create an event\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/pages/profile/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddEventForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onSubmit: createEvent,\n                formName: \"create-event\"\n            }, void 0, false, {\n                fileName: \"/root/spiced/capstone-project/src/pages/profile/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = CreateEventPage;\nvar _c;\n$RefreshReg$(_c, \"CreateEventPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxRDtBQUV0QyxTQUFTQztJQUN0QixlQUFlQyxZQUFZQyxLQUFLO1FBQzlCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxlQUFlO1lBQzFDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1FBQ3ZCO1FBQ0EsSUFBSUMsU0FBU08sRUFBRSxFQUFFO1lBQ2ZDLE9BQU9DLElBQUksQ0FBQztRQUNkO0lBQ0Y7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNBOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNkLGdFQUFZQTtnQkFBQ2UsVUFBVWI7Z0JBQWFjLFVBQVM7Ozs7Ozs7O0FBR3BEO0tBbEJ3QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2ZpbGUvaW5kZXguanM/ZmRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkRXZlbnRGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvQWRkRXZlbnRGb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUV2ZW50UGFnZSgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9ldmVudHNcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGV2ZW50KSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPlByb2ZpbGUgaW5mbzwvaDI+XG4gICAgICA8aDI+Q3JlYXRlIGFuIGV2ZW50PC9oMj5cbiAgICAgIDxBZGRFdmVudEZvcm0gb25TdWJtaXQ9e2NyZWF0ZUV2ZW50fSBmb3JtTmFtZT1cImNyZWF0ZS1ldmVudFwiIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQWRkRXZlbnRGb3JtIiwiQ3JlYXRlRXZlbnRQYWdlIiwiY3JlYXRlRXZlbnQiLCJldmVudCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInJvdXRlciIsInB1c2giLCJoMiIsIm9uU3VibWl0IiwiZm9ybU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Froot%2Fspiced%2Fcapstone-project%2Fsrc%2Fpages%2Fprofile%2Findex.js&page=%2Fprofile!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);