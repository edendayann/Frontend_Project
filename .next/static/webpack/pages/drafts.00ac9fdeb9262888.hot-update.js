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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\nconst Drafts = (props)=>{\n    _s();\n    _s1();\n    const { drafts , count  } = props;\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const loggedUserJSON = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"loggedNoteappUser\");\n        if (loggedUserJSON) setUser(JSON.parse(loggedUserJSON));\n    }, []);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Drafts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"You need to be authenticated to view this page.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n            lineNumber: 56,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-bfa2fcea6c78ec28\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-bfa2fcea6c78ec28\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            className: \"jsx-bfa2fcea6c78ec28\",\n                            children: \"My Drafts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-bfa2fcea6c78ec28\",\n                        children: count == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            className: \"jsx-bfa2fcea6c78ec28\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                                className: \"jsx-bfa2fcea6c78ec28\",\n                                children: \"No drafts available!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 28\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 25\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"jsx-bfa2fcea6c78ec28\",\n                            children: \"hiiiii\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 72\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bfa2fcea6c78ec28\",\n                children: \".post.jsx-bfa2fcea6c78ec28{background:rgba(238,251,245,.685);-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-bfa2fcea6c78ec28:hover{background-color:#e1fbf2;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-bfa2fcea6c78ec28+.post.jsx-bfa2fcea6c78ec28{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\HW-4\\\\pages\\\\drafts.tsx\",\n        lineNumber: 61,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Drafts, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c2 = Drafts;\n_s1(Drafts, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = Drafts;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Drafts));\nvar _c, _c1;\n$RefreshReg$(_c, \"Drafts\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Drafts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kcmFmdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFVDtBQUdWO0FBaUIvQixNQUFNSyxTQUEyQkMsQ0FBQUEsUUFBVTs7O0lBQ3pDLE1BQU0sRUFBQ0MsT0FBQUEsRUFBUUMsTUFBQUEsRUFBTSxHQUFHRjtJQUN4QixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBO0lBRWhDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVUsaUJBQWlCUCxxREFBVyxDQUFDO1FBQ25DLElBQUlPLGdCQUNGRCxRQUFRRyxLQUFLQyxLQUFLLENBQUNIO0lBQ3ZCLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0YsTUFBTTtRQUNULHFCQUNFTSw2REFBQUEsQ0FBQ1osMERBQU1BLEVBQU5BOzs4QkFDQ1ksNkRBQUFBLENBQUNDLE1BQUFBOzhCQUFHOzs7Ozs7OEJBQ0pELDZEQUFBQSxDQUFDRSxPQUFBQTs4QkFBSTs7Ozs7Ozs7Ozs7O0lBR1g7SUFFQSxxQkFDRUYsNkRBQUFBLENBQUNaLDBEQUFNQSxFQUFOQTs7MEJBQ0NZLDZEQUFBQSxDQUFDRSxPQUFBQTswREFBYzs7a0NBQ2JGLDZEQUFBQSxDQUFDQyxNQUFBQTs7a0NBQUcsY0FBQUQsNkRBQUFBLENBQUNHLFVBQUFBOztzQ0FBTzs7Ozs7Ozs7Ozs7a0NBQ1pILDZEQUFBQSxDQUFDSSxRQUFBQTs7a0NBQ0VYLFNBQVMsa0JBQ1ZPLDZEQUFBQSxDQUFDSyxLQUFBQTs7c0NBQUUsY0FBQUwsNkRBQUFBLENBQUNHLFVBQUFBOzswQ0FBTzs7Ozs7Ozs7OztzREFBb0NILDZEQUFBQSxDQUFDTSxLQUFBQTs7c0NBQUU7Ozs7O3FDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJ0RTtHQXJETWhCO01BQUFBO0lBQUFBLFFBQUFBO0tBQUFBOztBQXVETiwrREFBQWlCLE1BQUFDLG9GQUFBQSxDQUFlbEIsT0FBQUEsRUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kcmFmdHMudHN4PzAzMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFBvc3QsIHsgUG9zdFByb3BzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzLCBxdWVyeSB9KSA9PiB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBxdWVyeS51c2VybmFtZTtcclxuICBpZiAoIXVzZXJuYW1lKSB7XHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwMztcclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRyYWZ0czogW10sIGNvdW50OiAwIH0gfTtcclxuICB9XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3Bvc3RzYCx7cHVibGlzaGVkOiBmYWxzZSwgdXNlcm5hbWV9KTtcclxuICByZXR1cm4geyBwcm9wczogeyBkcmFmdHM6IHJlc3BvbnNlLmRhdGEucG9zdHMsIGNvdW50OiByZXNwb25zZS5kYXRhLmNvdW50fSB9O1xyXG59O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBkcmFmdHM6IFBvc3RQcm9wc1tdO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBEcmFmdHM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtkcmFmdHMsIGNvdW50fSA9IHByb3BzO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPHt0b2tlbjogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIGltYWdlVVJMOiBzdHJpbmd9PigpXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2dlZFVzZXJKU09OID0gQ29va2llcy5nZXQoXCJsb2dnZWROb3RlYXBwVXNlclwiKTtcclxuICAgIGlmIChsb2dnZWRVc2VySlNPTilcclxuICAgICAgc2V0VXNlcihKU09OLnBhcnNlKGxvZ2dlZFVzZXJKU09OKSlcclxuICB9LCBbXSlcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5NeSBEcmFmdHM8L2gxPlxyXG4gICAgICAgIDxkaXY+WW91IG5lZWQgdG8gYmUgYXV0aGVudGljYXRlZCB0byB2aWV3IHRoaXMgcGFnZS48L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxoMT48Y2VudGVyPk15IERyYWZ0czwvY2VudGVyPjwvaDE+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICB7Y291bnQgPT0gMCA/IFxyXG4gICAgICAgICAgPGI+PGNlbnRlcj5ObyBkcmFmdHMgYXZhaWxhYmxlITwvY2VudGVyPjwvYj4gOiA8cD5oaWlpaWk8L3A+fVxyXG4gICAgICAgICAgey8qIC8vIDogZHJhZnRzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgLy8gICBpZih1c2VyLnRva2VuID09IHBvc3QuYXV0aG9yPy50b2tlbilcclxuICAgICAgICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgLy8gICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgIC8vICAgICAgICAgPFBvc3QgcG9zdD17cG9zdH0gIHZpZGVvPXtwb3N0LnZpZGVvfSAgLz5cclxuICAgICAgICAgIC8vICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgLy8gICAgIClcclxuICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgLy8gKX0gKi99XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyNTEsIDI0NSwgMC42ODUpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0OmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWZiZjI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLnBvc3QgKyAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydMKgZGVmYXVsdMKgRHJhZnRzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiQ29va2llcyIsIkRyYWZ0cyIsInByb3BzIiwiZHJhZnRzIiwiY291bnQiLCJ1c2VyIiwic2V0VXNlciIsImxvZ2dlZFVzZXJKU09OIiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwiX2pzeERFViIsImgxIiwiZGl2IiwiY2VudGVyIiwibWFpbiIsImIiLCJwIiwiX2MxIiwiX3dpdGhTdXBlckpTT05QYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/drafts.tsx\n"));

/***/ })

});