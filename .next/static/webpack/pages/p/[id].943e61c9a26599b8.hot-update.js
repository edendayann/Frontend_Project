"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p/[id]",{

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"./node_modules/babel-plugin-superjson-next/tools.js\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nasync function deletePost(id) {\n    await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:3001/api/post/delete/\".concat(id));\n    await next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/\");\n}\n// This function is used to publish a post by making a PUT request to the server.\nasync function publishPost(id) {\n    await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:3001/api/post/publish/\".concat(id));\n    await next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/\");\n}\n// // The Post component displays the details of a blog post.\nconst Post = (props)=>{\n    _s();\n    var _post_author, _post_author1, _post_author2, _post_author3, _post_author4;\n    _s1();\n    const { post  } = props;\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const loggedUserJSON = window.localStorage.getItem(\"loggedNoteappUser\");\n        if (loggedUserJSON) setUser(JSON.parse(loggedUserJSON));\n    }, []);\n    const postBelongsToUser = (user === null || user === void 0 ? void 0 : user.token) == ((_post_author = post.author) === null || _post_author === void 0 ? void 0 : _post_author.token);\n    // Append \"(Draft)\" to the title if the post is not published\n    let title = post.title;\n    if (!post.published) {\n        title = \"\".concat(title, \" (Draft)\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-4a5beaab38c6594c\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-4a5beaab38c6594c\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-4a5beaab38c6594c\",\n                        children: [\n                            \"By \",\n                            (post === null || post === void 0 ? void 0 : (_post_author1 = post.author) === null || _post_author1 === void 0 ? void 0 : _post_author1.name) || \"Unknown author\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        children: post.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    ((_post_author2 = post.author) === null || _post_author2 === void 0 ? void 0 : _post_author2.imageURL) && ((_post_author3 = post.author) === null || _post_author3 === void 0 ? void 0 : _post_author3.imageURL) != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: (_post_author4 = post.author) === null || _post_author4 === void 0 ? void 0 : _post_author4.imageURL,\n                        alt: \"cannot to load photo\",\n                        className: \"jsx-4a5beaab38c6594c\" + \" \" + \"image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 71,\n                        columnNumber: 65\n                    }, undefined) : \"\",\n                    post.video ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: post.video,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        onClick: (event)=>event.stopPropagation(),\n                        className: \"jsx-4a5beaab38c6594c\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__.BiCameraMovie, {\n                            style: {\n                                fontSize: \"30px\",\n                                color: \"black\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                            lineNumber: 73,\n                            columnNumber: 23\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 72,\n                        columnNumber: 23\n                    }, undefined) : \"No video\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-4a5beaab38c6594c\",\n                        children: [\n                            !post.published && user && postBelongsToUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>publishPost(post.id),\n                                className: \"jsx-4a5beaab38c6594c\",\n                                children: \"Publish\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                                lineNumber: 79,\n                                columnNumber: 60\n                            }, undefined),\n                            user && postBelongsToUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>deletePost(post.id),\n                                className: \"jsx-4a5beaab38c6594c\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                                lineNumber: 81,\n                                columnNumber: 41\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4a5beaab38c6594c\",\n                children: \"div.jsx-4a5beaab38c6594c{background:#e1fbf2;-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa;padding:1rem}.image.jsx-4a5beaab38c6594c{width:auto;height:150px;display:block;margin-left:auto;-o-object-fit:cover;object-fit:cover;-o-object-position:80%100%;object-position:80%100%;float:right}.page.jsx-4a5beaab38c6594c{background:white;padding:2rem}.actions.jsx-4a5beaab38c6594c{margin-top:2rem}a.jsx-4a5beaab38c6594c{text-decoration:none;color:#000;background:transpparent;display:inline-block}a.jsx-4a5beaab38c6594c+a.jsx-4a5beaab38c6594c{margin-left:1rem;background:transparent}button.jsx-4a5beaab38c6594c+button.jsx-4a5beaab38c6594c{margin-left:1rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\p\\\\[id].tsx\",\n        lineNumber: 66,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Post, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c2 = Post;\n_s1(Post, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_2__.withSuperJSONPage)(Post));\nvar _c, _c1;\n$RefreshReg$(_c, \"Post\");\n$RefreshReg$(_c1, \"%default%\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c2;\n$RefreshReg$(_c2, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7a0NBQ3RCckIsNkRBQUFBLENBQUNHLEtBQUFBOzs7NEJBQ0UsQ0FBQ3RCLEtBQUtrQixTQUFTLElBQUlaLFFBQVFRLHFCQUFBQSxXQUFBQSxHQUMxQkssNkRBQUFBLENBQUNzQixVQUFBQTtnQ0FBT04sU0FBUyxJQUFNaEMsWUFBWUgsS0FBS0QsRUFBRTs7MENBQUc7Ozs7Ozs0QkFHOUNPLFFBQVFRLHFCQUFBQSxXQUFBQSxHQUNQSyw2REFBQUEsQ0FBQ3NCLFVBQUFBO2dDQUFPTixTQUFTLElBQU1yQyxXQUFXRSxLQUFLRCxFQUFFOzswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDeEQ7R0FsRk1LO01BQUFBO0lBQUFBLE1BQUFBO0tBQUFBOztBQW9GTiwrREFBQXNDLE1BQUFDLG9GQUFBQSxDQUFldkMsS0FBQUEsRUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wL1tpZF0udHN4PzQzOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBvc3RQcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBCaUNhbWVyYU1vdmllIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVQb3N0KGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3Bvc3QvZGVsZXRlLyR7aWR9YCk7XHJcbiAgYXdhaXQgUm91dGVyLnB1c2goXCIvXCIpO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcHVibGlzaCBhIHBvc3QgYnkgbWFraW5nIGEgUFVUIHJlcXVlc3QgdG8gdGhlIHNlcnZlci5cclxuYXN5bmMgZnVuY3Rpb24gcHVibGlzaFBvc3QoaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvcG9zdC9wdWJsaXNoLyR7aWR9YCk7XHJcbiAgYXdhaXQgUm91dGVyLnB1c2goXCIvXCIpO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgcG9zdCBkYXRhIGZyb20gdGhlIGRhdGFiYXNlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBpZC5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvcG9zdC8ke3BhcmFtcz8uaWR9YCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBwb3N0OiByZXN1bHQuZGF0YSB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycilcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3Q6IFwiXCIgfSxcclxuICB9O1xyXG4gIFxyXG59O1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBwb3N0OiBQb3N0UHJvcHM7XHJcbn07XHJcbi8vIC8vIFRoZSBQb3N0IGNvbXBvbmVudCBkaXNwbGF5cyB0aGUgZGV0YWlscyBvZiBhIGJsb2cgcG9zdC5cclxuY29uc3QgUG9zdDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx7dG9rZW46IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nfT4oKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dnZWRVc2VySlNPTiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nZ2VkTm90ZWFwcFVzZXInKVxyXG4gICAgaWYgKGxvZ2dlZFVzZXJKU09OKVxyXG4gICAgICBzZXRVc2VyKEpTT04ucGFyc2UobG9nZ2VkVXNlckpTT04pKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBwb3N0QmVsb25nc1RvVXNlciA9IHVzZXI/LnRva2VuID09IHBvc3QuYXV0aG9yPy50b2tlblxyXG4gIC8vIEFwcGVuZCBcIihEcmFmdClcIiB0byB0aGUgdGl0bGUgaWYgdGhlIHBvc3QgaXMgbm90IHB1Ymxpc2hlZFxyXG4gIGxldCB0aXRsZSA9IHBvc3QudGl0bGU7XHJcbiAgaWYgKCFwb3N0LnB1Ymxpc2hlZCkge1xyXG4gICAgdGl0bGUgPSBgJHt0aXRsZX0gKERyYWZ0KWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPHA+Qnkge3Bvc3Q/LmF1dGhvcj8ubmFtZSB8fCBcIlVua25vd24gYXV0aG9yXCJ9PC9wPlxyXG4gICAgICAgIDxSZWFjdE1hcmtkb3duIGNoaWxkcmVuPXtwb3N0LmNvbnRlbnR9IC8+XHJcbiAgICAgICAge3Bvc3QuYXV0aG9yPy5pbWFnZVVSTCAmJiBwb3N0LmF1dGhvcj8uaW1hZ2VVUkwgIT0gXCJcIiA/IDxpbWcgc3JjPXtwb3N0LmF1dGhvcj8uaW1hZ2VVUkx9IGFsdD1cImNhbm5vdCB0byBsb2FkIHBob3RvXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIj48L2ltZz4gOiBcIlwifVxyXG4gICAgICAgIHtwb3N0LnZpZGVvID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QudmlkZW99IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCaUNhbWVyYU1vdmllIHN0eWxlPXt7IGZvbnRTaXplOiAnMzBweCcgLCBjb2xvcjogJ2JsYWNrJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IFwiTm8gdmlkZW9cIn1cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHshcG9zdC5wdWJsaXNoZWQgJiYgdXNlciAmJiBwb3N0QmVsb25nc1RvVXNlciAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHVibGlzaFBvc3QocG9zdC5pZCl9PlB1Ymxpc2g8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge3VzZXIgJiYgcG9zdEJlbG9uZ3NUb1VzZXIgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QocG9zdC5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWZiZjI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZS1pbjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2V7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bzsgXHJcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA4MCUgMTAwJTtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BwYXJlbnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGEgKyBhIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24gKyBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0wqBkZWZhdWx0wqBQb3N0O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWFjdE1hcmtkb3duIiwiTGF5b3V0IiwiUm91dGVyIiwiYXhpb3MiLCJCaUNhbWVyYU1vdmllIiwiZGVsZXRlUG9zdCIsImlkIiwicG9zdCIsImNvbmNhdCIsInB1c2giLCJwdWJsaXNoUG9zdCIsIlBvc3QiLCJwcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwibG9nZ2VkVXNlckpTT04iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicG9zdEJlbG9uZ3NUb1VzZXIiLCJ0b2tlbiIsImF1dGhvciIsInRpdGxlIiwicHVibGlzaGVkIiwiX2pzeERFViIsImRpdiIsImgyIiwicCIsIm5hbWUiLCJjaGlsZHJlbiIsImNvbnRlbnQiLCJpbWFnZVVSTCIsImltZyIsInNyYyIsImFsdCIsInZpZGVvIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdHlsZSIsImZvbnRTaXplIiwiY29sb3IiLCJidXR0b24iLCJfYzEiLCJfd2l0aFN1cGVySlNPTlBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/p/[id].tsx\n"));

/***/ })

});