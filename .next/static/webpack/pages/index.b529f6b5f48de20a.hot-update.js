"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.tsx\");\n\n\n\n\n\n\n\nconst Blog = (props)=>{\n    const { feed , page , pageCount  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-3d951a5be01bb78a\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-3d951a5be01bb78a\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            className: \"jsx-3d951a5be01bb78a\",\n                            children: \"Public Feed\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-3d951a5be01bb78a\",\n                        children: feed.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-3d951a5be01bb78a\" + \" \" + \"post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    post: post\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, post.id, false, {\n                                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        className: \"jsx-3d951a5be01bb78a\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            className: \"jsx-3d951a5be01bb78a\",\n                            children: pageCount === 0 ? \"no data\" : \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 12\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-3d951a5be01bb78a\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            page: page,\n                            pageCount: pageCount\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3d951a5be01bb78a\",\n                children: \"p.jsx-3d951a5be01bb78a{font-size:50px;font-weight:bold}.post.jsx-3d951a5be01bb78a{background:rgba(238,251,245,.864);-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-3d951a5be01bb78a:hover{background-color:#e1fbf2;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-3d951a5be01bb78a+.post.jsx-3d951a5be01bb78a{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\hw1-blog\\\\pages\\\\index.tsx\",\n        lineNumber: 76,\n        columnNumber: 10\n    }, undefined);\n};\n_c2 = Blog;\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Blog));\nvar _c, _c1;\n$RefreshReg$(_c, \"Blog\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBRWdCO0FBQ1c7QUFFSDtBQXdEakQsTUFBTUksT0FBeUJDLENBQUFBLFFBQVU7SUFDdkMsTUFBTSxFQUFFQyxLQUFBQSxFQUFNQyxLQUFBQSxFQUFNQyxVQUFBQSxFQUFXLEdBQUdIO0lBRWxDLHFCQUNFSSw2REFBQUEsQ0FBQ1IsMERBQU1BLEVBQU5BOzswQkFDQ1EsNkRBQUFBLENBQUNDLE9BQUFBOzBEQUFjOztrQ0FDYkQsNkRBQUFBLENBQUNFLE1BQUFBOztrQ0FBRyxjQUFBRiw2REFBQUEsQ0FBQ0csVUFBQUE7O3NDQUFPOzs7Ozs7Ozs7OztrQ0FDWkgsNkRBQUFBLENBQUNJLFFBQUFBOztrQ0FDRVAsS0FBS1EsR0FBRyxDQUFFQyxDQUFBQSxPQUFBQSxXQUFBQSxHQUNUTiw2REFBQUEsQ0FBQ0MsT0FBQUE7MEVBQTRCOzBDQUMzQixjQUFBRCw2REFBQUEsQ0FBQ1Asd0RBQUlBLEVBQUpBO29DQUFLYSxNQUFNQTs7Ozs7OytCQURKQSxLQUFLQyxFQUFFOzs7Ozs7Ozs7O2tDQVdyQlAsNkRBQUFBLENBQUNRLEtBQUFBOztrQ0FBRSxjQUFBUiw2REFBQUEsQ0FBQ0csVUFBQUE7O3NDQUFRSixjQUFjLElBQUksWUFBWSxFQUFFOzs7Ozs7Ozs7OztrQ0FDNUNDLDZEQUFBQSxDQUFDQyxPQUFBQTs7a0NBQ0QsY0FBQUQsNkRBQUFBLENBQUNOLDhEQUFVQSxFQUFWQTs0QkFBV0ksTUFBTUE7NEJBQU1DLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QjNDO01BN0NNSjtLQUFBQTs7QUErQ04sK0RBQUFjLE1BQUFDLG9GQUFBQSxDQUFlZixLQUFBQSxFQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vbGliL3ByaXNtYSdcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcXVlcnksIHJlcSB9KSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UgYXMgc3RyaW5nLCAxMCkgfHwgMTtcclxuICBjb25zdCBwZXJQYWdlID0gMTA7XHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwZXJQYWdlO1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pO1xyXG5cclxuICBjb25zdCBmZWVkID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZE1hbnkoe1xyXG4gICAgdGFrZTogcGVyUGFnZSxcclxuICAgIHNraXA6IHNraXAsXHJcbiAgICB3aGVyZTogIXNlc3Npb24gPyB7IHB1Ymxpc2hlZDogdHJ1ZSB9IDpcclxuICAgIHsgICAgICBcclxuICAgIE9SOiBbXHJcbiAgICAgIHsgcHVibGlzaGVkOiB0cnVlIH0sXHJcbiAgICAgIHsgcHVibGlzaGVkOiBmYWxzZSxcclxuICAgICAgICBhdXRob3I6IHsgZW1haWw6IHNlc3Npb24udXNlcj8uZW1haWwgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB9LFxyXG4gICAgaW5jbHVkZToge1xyXG4gICAgICBhdXRob3I6IHtcclxuICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgIG5hbWU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvdW50ID0gYXdhaXQgcHJpc21hLnBvc3QuY291bnQoeyB3aGVyZTogIXNlc3Npb24gPyB7IHB1Ymxpc2hlZDogdHJ1ZSB9IDpcclxuICAgIHsgICAgICBcclxuICAgIE9SOiBbXHJcbiAgICAgIHsgcHVibGlzaGVkOiB0cnVlIH0sXHJcbiAgICAgIHsgcHVibGlzaGVkOiBmYWxzZSxcclxuICAgICAgICBhdXRob3I6IHsgZW1haWw6IHNlc3Npb24udXNlcj8uZW1haWwgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmZWVkLFxyXG4gICAgICBwYWdlLFxyXG4gICAgICBwYWdlQ291bnQ6IE1hdGguY2VpbChjb3VudCAvIHBlclBhZ2UpLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBmZWVkOiBQb3N0UHJvcHNbXTtcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgcGFnZUNvdW50OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBCbG9nOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGZlZWQsIHBhZ2UsIHBhZ2VDb3VudCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8aDE+PGNlbnRlcj5QdWJsaWMgRmVlZDwvY2VudGVyPjwvaDE+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICB7ZmVlZC5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgey8qIHtmZWVkLm1hcCgocG9zdCwgaW5kZXgsIGFycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKVxyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdC1sZWZ0XCI+IDxQb3N0IHBvc3Q9e3Bvc3R9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9XCJwb3N0LXJpZ2h0XCI+IDxQb3N0IHBvc3Q9e3Bvc3R9IC8+IDwvZGl2PlxyXG4gICAgICAgICAgfSl9ICovfVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Yj48Y2VudGVyPntwYWdlQ291bnQgPT09IDAgPyBcIm5vIGRhdGFcIiA6IFwiXCJ9PC9jZW50ZXI+PC9iPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZX0gcGFnZUNvdW50PXtwYWdlQ291bnR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIDxzdHlsZSBqc3g+e2BcclxucCB7XHJcbiAgZm9udC1zaXplOjUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG4gIC5wb3N0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyNTEsIDI0NSwgMC44NjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XHJcbiAgfVxyXG4gIC5wb3N0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWZiZjI7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gIH1cclxuXHJcbiAgLnBvc3QgKyAucG9zdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiUG9zdCIsIlBhZ2luYXRpb24iLCJCbG9nIiwicHJvcHMiLCJmZWVkIiwicGFnZSIsInBhZ2VDb3VudCIsIl9qc3hERVYiLCJkaXYiLCJoMSIsImNlbnRlciIsIm1haW4iLCJtYXAiLCJwb3N0IiwiaWQiLCJiIiwiX2MxIiwiX3dpdGhTdXBlckpTT05QYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});