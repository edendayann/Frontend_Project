"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/drafts",{

/***/ "./pages/drafts.tsx":
/*!**************************!*\
  !*** ./pages/drafts.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst Drafts = (props)=>{\n    _s();\n    _s1();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    const { drafts , videos  } = props;\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Drafts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"You need to be authenticated to view this page.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n            lineNumber: 70,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-bfa2fcea6c78ec28\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-bfa2fcea6c78ec28\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            className: \"jsx-bfa2fcea6c78ec28\",\n                            children: \"My Drafts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-bfa2fcea6c78ec28\",\n                        children: drafts.map((post)=>{\n                            const video = videos.find((tmp)=>tmp.postID == post.id);\n                            let url = \"\";\n                            if (video) url = video.videoURL;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-bfa2fcea6c78ec28\" + \" \" + \"post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    post: post,\n                                    video: url\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, post.id, false, {\n                                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 18\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bfa2fcea6c78ec28\",\n                children: \".post.jsx-bfa2fcea6c78ec28{background:rgba(238,251,245,.685);-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-bfa2fcea6c78ec28:hover{background-color:#e1fbf2;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-bfa2fcea6c78ec28+.post.jsx-bfa2fcea6c78ec28{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n        lineNumber: 75,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Drafts, \"tcjGvUFUNK+bT1YCyNWOa+IBK0o=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession\n    ];\n});\n_c2 = Drafts;\n_s1(Drafts, \"90sCfFLkOu0XWr0Qr7d+mUVbZmM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession\n    ];\n});\n_c = Drafts;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Drafts));\nvar _c, _c1;\n$RefreshReg$(_c, \"Drafts\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Drafts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kcmFmdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUVUO0FBQ1c7QUFDSTtBQW9DeEQsTUFBTUksU0FBMkJDLENBQUFBLFFBQVU7OztJQUN6QyxNQUFNLEVBQUNDLE1BQU1DLFFBQUFBLEVBQVEsR0FBRUosMkRBQVVBO0lBQ2pDLE1BQU0sRUFBQ0ssT0FBQUEsRUFBUUMsT0FBQUEsRUFBTyxHQUFHSjtJQUV6QixJQUFJLENBQUNFLFNBQVM7UUFDWixxQkFDRUcsNkRBQUFBLENBQUNULDBEQUFNQSxFQUFOQTs7OEJBQ0NTLDZEQUFBQSxDQUFDQyxNQUFBQTs4QkFBRzs7Ozs7OzhCQUNKRCw2REFBQUEsQ0FBQ0UsT0FBQUE7OEJBQUk7Ozs7Ozs7Ozs7OztJQUdYO0lBRUEscUJBQ0VGLDZEQUFBQSxDQUFDVCwwREFBTUEsRUFBTkE7OzBCQUNDUyw2REFBQUEsQ0FBQ0UsT0FBQUE7MERBQWM7O2tDQUNiRiw2REFBQUEsQ0FBQ0MsTUFBQUE7O2tDQUFHLGNBQUFELDZEQUFBQSxDQUFDRyxVQUFBQTs7c0NBQU87Ozs7Ozs7Ozs7O2tDQUNaSCw2REFBQUEsQ0FBQ0ksUUFBQUE7O2tDQUNFTixPQUFPTyxHQUFHLENBQUVDLENBQUFBLE9BQVM7NEJBQ3BCLE1BQU1DLFFBQVFSLE9BQU9TLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsTUFBTSxJQUFJSixLQUFLSyxFQUFFOzRCQUN0RCxJQUFJQyxNQUFLOzRCQUNULElBQUdMLE9BQ0RLLE1BQU1MLE1BQU1NLFFBQVE7NEJBQ3RCLHFCQUNFYiw2REFBQUEsQ0FBQ0UsT0FBQUE7MEVBQTRCOzBDQUMzQixjQUFBRiw2REFBQUEsQ0FBQ1Isd0RBQUlBLEVBQUpBO29DQUFLYyxNQUFNQTtvQ0FBT0MsT0FBT0s7Ozs7OzsrQkFEbEJOLEtBQUtLLEVBQUU7Ozs7O3dCQUlyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CVjtHQWhETWpCOztRQUNtQkQsdURBQVVBOzs7TUFEN0JDO0lBQUFBLFFBQUFBLGdDQUFBQSxLQUFBQSxFQUFBQSxXQUFBQTs7UUFDbUJELHVEQUFVQTs7O0tBRDdCQzs7QUFrRE4sK0RBQUFvQixNQUFBQyxvRkFBQUEsQ0FBZXJCLE9BQUFBLEVBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJhZnRzLnRzeD8wMzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0LCB7IFBvc3RQcm9wcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHByaXNtYSBmcm9tICcuLi9saWIvcHJpc21hJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDM7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkcmFmdHM6IFtdLCB2aWRlb3M6IFtdIH0gfTtcclxuICB9XHJcbiAgY29uc3QgZHJhZnRzID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IHtcclxuICAgICAgYXV0aG9yOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXI/LmVtYWlsIH0sXHJcbiAgICAgIHB1Ymxpc2hlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBhdXRob3I6IHtcclxuICAgICAgICBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICBcclxuICBjb25zdCBwb3N0SURzID0gZHJhZnRzLm1hcCgocG9zdCkgPT4gcG9zdC5pZClcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3ZpZGVvYCx7cG9zdElEc30pO1xyXG4gIGlmKEFycmF5LmlzQXJyYXkocmVzdWx0LmRhdGEpKVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZHJhZnRzOiBkcmFmdHMsIHZpZGVvczogcmVzdWx0LmRhdGEgfSB9O1xyXG4gIGVsc2VcclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRyYWZ0czogZHJhZnRzLCB2aWRlb3M6IFtdIH0gfTtcclxufTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZHJhZnRzOiBQb3N0UHJvcHNbXTtcclxuICB2aWRlb3M6IGFueVtdO1xyXG59O1xyXG5cclxuY29uc3QgRHJhZnRzOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7ZGF0YTogc2Vzc2lvbn09IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCB7ZHJhZnRzLCB2aWRlb3N9ID0gcHJvcHM7XHJcblxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TXkgRHJhZnRzPC9oMT5cclxuICAgICAgICA8ZGl2PllvdSBuZWVkIHRvIGJlIGF1dGhlbnRpY2F0ZWQgdG8gdmlldyB0aGlzIHBhZ2UuPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8aDE+PGNlbnRlcj5NeSBEcmFmdHM8L2NlbnRlcj48L2gxPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAge2RyYWZ0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSB2aWRlb3MuZmluZCh0bXAgPT4gdG1wLnBvc3RJRCA9PSBwb3N0LmlkKVxyXG4gICAgICAgICAgICBsZXQgdXJsID1cIlwiO1xyXG4gICAgICAgICAgICBpZih2aWRlbylcclxuICAgICAgICAgICAgICB1cmwgPSB2aWRlby52aWRlb1VSTDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgPFBvc3QgcG9zdD17cG9zdH0gIHZpZGVvPXt1cmx9ICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyNTEsIDI0NSwgMC42ODUpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0OmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWZiZjI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLnBvc3QgKyAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydMKgZGVmYXVsdMKgRHJhZnRzOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlBvc3QiLCJ1c2VTZXNzaW9uIiwiRHJhZnRzIiwicHJvcHMiLCJkYXRhIiwic2Vzc2lvbiIsImRyYWZ0cyIsInZpZGVvcyIsIl9qc3hERVYiLCJoMSIsImRpdiIsImNlbnRlciIsIm1haW4iLCJtYXAiLCJwb3N0IiwidmlkZW8iLCJmaW5kIiwidG1wIiwicG9zdElEIiwiaWQiLCJ1cmwiLCJ2aWRlb1VSTCIsIl9jMSIsIl93aXRoU3VwZXJKU09OUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/drafts.tsx\n"));

/***/ })

});