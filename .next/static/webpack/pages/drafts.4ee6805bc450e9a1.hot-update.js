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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n\n\n\n\n\n\nconst Drafts = (props)=>{\n    //const logged = window.localStorage.getItem('loggedNoteappUser')\n    const { drafts , logged  } = props;\n    if (!logged) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Drafts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"You need to be authenticated to view this page.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n            lineNumber: 77,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-bfa2fcea6c78ec28\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-bfa2fcea6c78ec28\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                            className: \"jsx-bfa2fcea6c78ec28\",\n                            children: \"My Drafts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"jsx-bfa2fcea6c78ec28\",\n                        children: drafts.map((post)=>{\n                            // const video = videos.find(tmp => tmp.postID == post.id)\n                            // let url =\"\";\n                            // if(video)\n                            //   url = video.videoURL;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-bfa2fcea6c78ec28\" + \" \" + \"post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    post: post,\n                                    video: post.video\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, post.id, false, {\n                                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 18\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"bfa2fcea6c78ec28\",\n                children: \".post.jsx-bfa2fcea6c78ec28{background:rgba(238,251,245,.685);-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in}.post.jsx-bfa2fcea6c78ec28:hover{background-color:#e1fbf2;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.post.jsx-bfa2fcea6c78ec28+.post.jsx-bfa2fcea6c78ec28{margin-top:2rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\drafts.tsx\",\n        lineNumber: 82,\n        columnNumber: 10\n    }, undefined);\n};\n_c2 = Drafts;\n_c = Drafts;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Drafts));\nvar _c, _c1;\n$RefreshReg$(_c, \"Drafts\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Drafts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kcmFmdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBRVQ7QUFDVztBQStDcEQsTUFBTUcsU0FBMkJDLENBQUFBLFFBQVU7SUFDekM7SUFDQSxNQUFNLEVBQUNDLE9BQUFBLEVBQVFDLE9BQUFBLEVBQU8sR0FBR0Y7SUFFekIsSUFBSSxDQUFDRSxRQUFRO1FBQ1gscUJBQ0VDLDZEQUFBQSxDQUFDTiwwREFBTUEsRUFBTkE7OzhCQUNDTSw2REFBQUEsQ0FBQ0MsTUFBQUE7OEJBQUc7Ozs7Ozs4QkFDSkQsNkRBQUFBLENBQUNFLE9BQUFBOzhCQUFJOzs7Ozs7Ozs7Ozs7SUFHWDtJQUVBLHFCQUNFRiw2REFBQUEsQ0FBQ04sMERBQU1BLEVBQU5BOzswQkFDQ00sNkRBQUFBLENBQUNFLE9BQUFBOzBEQUFjOztrQ0FDYkYsNkRBQUFBLENBQUNDLE1BQUFBOztrQ0FBRyxjQUFBRCw2REFBQUEsQ0FBQ0csVUFBQUE7O3NDQUFPOzs7Ozs7Ozs7OztrQ0FDWkgsNkRBQUFBLENBQUNJLFFBQUFBOztrQ0FDRU4sT0FBT08sR0FBRyxDQUFFQyxDQUFBQSxPQUFTOzRCQUNwQjs0QkFDQTs0QkFDQTs0QkFDQTs0QkFDQSxxQkFDRU4sNkRBQUFBLENBQUNFLE9BQUFBOzBFQUE0QjswQ0FDM0IsY0FBQUYsNkRBQUFBLENBQUNMLHdEQUFJQSxFQUFKQTtvQ0FBS1csTUFBTUE7b0NBQU9DLE9BQU9ELEtBQUtDLEtBQUs7Ozs7OzsrQkFENUJELEtBQUtFLEVBQUU7Ozs7O3dCQUlyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CVjtNQWhETVo7S0FBQUE7O0FBa0ROLCtEQUFBYSxNQUFBQyxvRkFBQUEsQ0FBZWQsT0FBQUEsRUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kcmFmdHMudHN4PzAzMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFBvc3QsIHsgUG9zdFByb3BzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdFwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uL2xpYi9wcmlzbWEnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcmVzLCBxdWVyeSB9KSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XHJcbiAgY29uc3QgdXNlck5hbWUgPSBxdWVyeS5sb2dnZWRVc2VyO1xyXG5cclxuICBjb25zb2xlLmxvZyh1c2VyTmFtZSlcclxuICBpZiAoIXVzZXJOYW1lKSB7XHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDQwMztcclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRyYWZ0czogW10sIGxvZ2dlZDogZmFsc2UgfSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3Bvc3RzYCx7cHVibGlzaGVkOiBmYWxzZSwgdXNlck5hbWV9KTtcclxuICBpZighcmVzcG9uc2UpXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkcmFmdHM6IFtdLCBsb2dnZWQ6IHRydWUgfSB9O1xyXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZHJhZnRzOiBKU09OLnBhcnNlKHJlc3BvbnNlLmRhdGEpLCBsb2dnZWQ6IHRydWUgfSB9O1xyXG5cclxuICAvLyBjb25zdCBkcmFmdHMgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XHJcbiAgLy8gICB3aGVyZToge1xyXG4gIC8vICAgICBhdXRob3I6IHsgZW1haWw6IHNlc3Npb24udXNlcj8uZW1haWwgfSxcclxuICAvLyAgICAgcHVibGlzaGVkOiBmYWxzZSxcclxuICAvLyAgIH0sXHJcbiAgLy8gICBpbmNsdWRlOiB7XHJcbiAgLy8gICAgIGF1dGhvcjoge1xyXG4gIC8vICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlIH0sXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9LFxyXG4gIC8vIH0pO1xyXG4gIFxyXG4gLy8gY29uc3QgcG9zdElEcyA9IGRyYWZ0cy5tYXAoKHBvc3QpID0+IHBvc3QuaWQpXHJcbiAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3ZpZGVvYCx7cG9zdElEc30pO1xyXG4gIC8vIGlmKEFycmF5LmlzQXJyYXkocmVzdWx0LmRhdGEpKVxyXG4gIC8vICAgcmV0dXJuIHsgcHJvcHM6IHsgZHJhZnRzOiBkcmFmdHMsIHZpZGVvczogcmVzdWx0LmRhdGEgfSB9O1xyXG4gIC8vIGVsc2VcclxuICAvLyAgIHJldHVybiB7IHByb3BzOiB7IGRyYWZ0czogZHJhZnRzLCB2aWRlb3M6IFtdIH0gfTtcclxufTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZHJhZnRzOiBQb3N0UHJvcHNbXTtcclxuICBsb2dnZWQ6IGJvb2xlYW5cclxufTtcclxuXHJcblxyXG5jb25zdCBEcmFmdHM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIC8vY29uc3QgbG9nZ2VkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWROb3RlYXBwVXNlcicpXHJcbiAgY29uc3Qge2RyYWZ0cywgbG9nZ2VkfSA9IHByb3BzO1xyXG5cclxuICBpZiAoIWxvZ2dlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+TXkgRHJhZnRzPC9oMT5cclxuICAgICAgICA8ZGl2PllvdSBuZWVkIHRvIGJlIGF1dGhlbnRpY2F0ZWQgdG8gdmlldyB0aGlzIHBhZ2UuPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICA8aDE+PGNlbnRlcj5NeSBEcmFmdHM8L2NlbnRlcj48L2gxPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAge2RyYWZ0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc3QgdmlkZW8gPSB2aWRlb3MuZmluZCh0bXAgPT4gdG1wLnBvc3RJRCA9PSBwb3N0LmlkKVxyXG4gICAgICAgICAgICAvLyBsZXQgdXJsID1cIlwiO1xyXG4gICAgICAgICAgICAvLyBpZih2aWRlbylcclxuICAgICAgICAgICAgLy8gICB1cmwgPSB2aWRlby52aWRlb1VSTDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgPFBvc3QgcG9zdD17cG9zdH0gIHZpZGVvPXtwb3N0LnZpZGVvfSAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjUxLCAyNDUsIDAuNjg1KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBlYXNlLWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9zdDpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmYmYyO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5wb3N0ICsgLnBvc3Qge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnTCoGRlZmF1bHTCoERyYWZ0czsiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJQb3N0IiwiRHJhZnRzIiwicHJvcHMiLCJkcmFmdHMiLCJsb2dnZWQiLCJfanN4REVWIiwiaDEiLCJkaXYiLCJjZW50ZXIiLCJtYWluIiwibWFwIiwicG9zdCIsInZpZGVvIiwiaWQiLCJfYzEiLCJfd2l0aFN1cGVySlNPTlBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/drafts.tsx\n"));

/***/ })

});