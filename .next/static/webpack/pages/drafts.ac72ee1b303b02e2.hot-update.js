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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\nconst Drafts = (props)=>{\n    _s();\n    _s1();\n    const { drafts , count  } = props;\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const loggedUserJSON = window.localStorage.getItem(\"loggedNoteappUser\");\n        if (loggedUserJSON) setUser(JSON.parse(loggedUserJSON));\n    }, []);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Drafts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"You need to be authenticated to view this page.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n            lineNumber: 54,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-bfa2fcea6c78ec28\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-bfa2fcea6c78ec28\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            className: \"jsx-bfa2fcea6c78ec28\",\n                            children: \"My Drafts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-bfa2fcea6c78ec28\",\n                        children: count == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            className: \"jsx-bfa2fcea6c78ec28\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                                className: \"jsx-bfa2fcea6c78ec28\",\n                                children: \"No drafts available!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 28\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, undefined) : drafts.map((post)=>{\n                            var _post_author;\n                            if (user.token == ((_post_author = post.author) === null || _post_author === void 0 ? void 0 : _post_author.token)) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-bfa2fcea6c78ec28\" + \" \" + \"post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    post: post,\n                                    video: post.video\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, post.id, false, {\n                                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 56\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bfa2fcea6c78ec28\",\n                children: \".post.jsx-bfa2fcea6c78ec28{background:rgba(238,251,245,.685);-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-bfa2fcea6c78ec28:hover{background-color:#e1fbf2;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-bfa2fcea6c78ec28+.post.jsx-bfa2fcea6c78ec28{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n        lineNumber: 59,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Drafts, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c2 = Drafts;\n_s1(Drafts, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = Drafts;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Drafts));\nvar _c, _c1;\n$RefreshReg$(_c, \"Drafts\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Drafts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kcmFmdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFFVDtBQUNXO0FBb0JwRCxNQUFNSyxTQUEyQkMsQ0FBQUEsUUFBVTs7O0lBQ3pDLE1BQU0sRUFBQ0MsT0FBQUEsRUFBUUMsTUFBQUEsRUFBTSxHQUFHRjtJQUN4QixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBO0lBRWhDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVUsaUJBQWlCQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQztRQUNuRCxJQUFJSCxnQkFDRkQsUUFBUUssS0FBS0MsS0FBSyxDQUFDTDtJQUN2QixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNGLE1BQU07UUFDVCxxQkFDRVEsNkRBQUFBLENBQUNkLDBEQUFNQSxFQUFOQTs7OEJBQ0NjLDZEQUFBQSxDQUFDQyxNQUFBQTs4QkFBRzs7Ozs7OzhCQUNKRCw2REFBQUEsQ0FBQ0UsT0FBQUE7OEJBQUk7Ozs7Ozs7Ozs7OztJQUdYO0lBRUEscUJBQ0VGLDZEQUFBQSxDQUFDZCwwREFBTUEsRUFBTkE7OzBCQUNDYyw2REFBQUEsQ0FBQ0UsT0FBQUE7MERBQWM7O2tDQUNiRiw2REFBQUEsQ0FBQ0MsTUFBQUE7O2tDQUFHLGNBQUFELDZEQUFBQSxDQUFDRyxVQUFBQTs7c0NBQU87Ozs7Ozs7Ozs7O2tDQUNaSCw2REFBQUEsQ0FBQ0ksUUFBQUE7O2tDQUNFYixTQUFTLGtCQUNWUyw2REFBQUEsQ0FBQ0ssS0FBQUE7O3NDQUFFLGNBQUFMLDZEQUFBQSxDQUFDRyxVQUFBQTs7MENBQU87Ozs7Ozs7Ozs7d0NBQ1RiLE9BQU9nQixHQUFHLENBQUVDLENBQUFBLE9BQVM7Z0NBQ0pBOzRCQUFqQixJQUFHZixLQUFLZ0IsS0FBSyxJQUFJRCxDQUFBQSxDQUFBQSxlQUFBQSxLQUFLRSxNQUFNLGNBQVhGLGlCQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxJQUFBQSxhQUFhQyxLQUFBQSxHQUM1QixxQkFDRVIsNkRBQUFBLENBQUNFLE9BQUFBOzBFQUE0QjswQ0FDM0IsY0FBQUYsNkRBQUFBLENBQUNiLHdEQUFJQSxFQUFKQTtvQ0FBS29CLE1BQU1BO29DQUFPRyxPQUFPSCxLQUFLRyxLQUFLOzs7Ozs7K0JBRDVCSCxLQUFLSSxFQUFFOzs7Ozt3QkFJdkIsRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CYjtHQXJETXZCO01BQUFBO0lBQUFBLFFBQUFBO0tBQUFBOztBQXVETiwrREFBQXdCLE1BQUFDLG9GQUFBQSxDQUFlekIsT0FBQUEsRUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kcmFmdHMudHN4PzAzMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFBvc3QsIHsgUG9zdFByb3BzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcywgcXVlcnkgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gcXVlcnkudXNlcm5hbWU7XHJcbiAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDM7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkcmFmdHM6IFtdLCBjb3VudDogMCB9IH07XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvcG9zdHNgLHtwdWJsaXNoZWQ6IGZhbHNlLCB1c2VybmFtZX0pO1xyXG4gIHJldHVybiB7IHByb3BzOiB7IGRyYWZ0czogcmVzcG9uc2UuZGF0YS5wb3N0cywgY291bnQ6IHJlc3BvbnNlLmRhdGEuY291bnR9IH07XHJcbn07XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGRyYWZ0czogUG9zdFByb3BzW107XHJcbiAgY291bnQ6IG51bWJlcjtcclxufTtcclxuXHJcblxyXG5jb25zdCBEcmFmdHM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtkcmFmdHMsIGNvdW50fSA9IHByb3BzO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPHt0b2tlbjogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmd9PigpXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2dlZFVzZXJKU09OID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWROb3RlYXBwVXNlcicpXHJcbiAgICBpZiAobG9nZ2VkVXNlckpTT04pXHJcbiAgICAgIHNldFVzZXIoSlNPTi5wYXJzZShsb2dnZWRVc2VySlNPTikpXHJcbiAgfSwgW10pXHJcblxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TXkgRHJhZnRzPC9oMT5cclxuICAgICAgICA8ZGl2PllvdSBuZWVkIHRvIGJlIGF1dGhlbnRpY2F0ZWQgdG8gdmlldyB0aGlzIHBhZ2UuPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8aDE+PGNlbnRlcj5NeSBEcmFmdHM8L2NlbnRlcj48L2gxPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAge2NvdW50ID09IDAgPyBcclxuICAgICAgICAgIDxiPjxjZW50ZXI+Tm8gZHJhZnRzIGF2YWlsYWJsZSE8L2NlbnRlcj48L2I+XHJcbiAgICAgICAgICA6IGRyYWZ0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlci50b2tlbiA9PSBwb3N0LmF1dGhvcj8udG9rZW4pXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9ICB2aWRlbz17cG9zdC52aWRlb30gIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyNTEsIDI0NSwgMC42ODUpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0OmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWZiZjI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLnBvc3QgKyAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydMKgZGVmYXVsdMKgRHJhZnRzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiUG9zdCIsIkRyYWZ0cyIsInByb3BzIiwiZHJhZnRzIiwiY291bnQiLCJ1c2VyIiwic2V0VXNlciIsImxvZ2dlZFVzZXJKU09OIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIl9qc3hERVYiLCJoMSIsImRpdiIsImNlbnRlciIsIm1haW4iLCJiIiwibWFwIiwicG9zdCIsInRva2VuIiwiYXV0aG9yIiwidmlkZW8iLCJpZCIsIl9jMSIsIl93aXRoU3VwZXJKU09OUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/drafts.tsx\n"));

/***/ })

});