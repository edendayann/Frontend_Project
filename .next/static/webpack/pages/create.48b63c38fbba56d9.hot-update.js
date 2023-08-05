"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./pages/create.tsx":
/*!**************************!*\
  !*** ./pages/create.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nconst Draft = ()=>{\n    _s();\n    _s1();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [video, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const videoInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const titleInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const loggedUserJSON = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"loggedNoteappUser\");\n        if (loggedUserJSON) setUser(JSON.parse(loggedUserJSON));\n    }, []);\n    const submitData = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        if (!user) {\n            setLoading(false);\n            console.error(\"user is not signed in\");\n            return;\n        }\n        try {\n            const metaData = new FormData();\n            metaData.append(\"username\", user.username);\n            metaData.append(\"title\", title);\n            metaData.append(\"content\", content);\n            if (video) {\n                let url = \"\";\n                const videoFile = new FormData();\n                videoFile.append(\"video\", video, video.name);\n                // videoFile.append('upload_preset', 'xgg6txjv');\n                await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:3001/api/upload\", videoFile, {\n                    headers: {\n                        \"Content-Type\": \"multipart/form-data\"\n                    }\n                }).then((result)=>url = result.data.url).catch((error)=>console.log(error));\n                metaData.append(\"videoURL\", url);\n                metaData.append(\"date\", new Date().toString());\n            }\n            await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"http://localhost:3001/api/uploadMetaData\", metaData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\",\n                    Authorization: user.token\n                }\n            });\n            await next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/drafts?username=\".concat(user.username));\n        } catch (error) {\n            console.error(error);\n        }\n        setLoading(false);\n    };\n    const handleChange = (e)=>{\n        const files = e.target.files;\n        if (files) setVideo(files[0]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _titleInputRef_current;\n        (_titleInputRef_current = titleInputRef.current) === null || _titleInputRef_current === void 0 ? void 0 : _titleInputRef_current.focus();\n    }, []);\n    const override = {\n        display: \"block\",\n        margin: \"10 auto\",\n        borderColor: \"red\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-305e1e0c398ec76\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: submitData,\n                    className: \"jsx-305e1e0c398ec76\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-305e1e0c398ec76\",\n                            children: \"New Draft\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: titleInputRef,\n                            onChange: (e)=>setTitle(e.target.value),\n                            placeholder: \"Title\",\n                            type: \"text\",\n                            value: title,\n                            className: \"jsx-305e1e0c398ec76\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            cols: 50,\n                            onChange: (e)=>setContent(e.target.value),\n                            placeholder: \"Content\",\n                            rows: 8,\n                            value: content,\n                            className: \"jsx-305e1e0c398ec76\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            disabled: video ? true : false,\n                            id: \"videoUpload\",\n                            name: \"videoUpload\",\n                            onChange: handleChange,\n                            ref: videoInput,\n                            accept: \"video/*\",\n                            className: \"jsx-305e1e0c398ec76\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-305e1e0c398ec76\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    disabled: !video,\n                                    onClick: ()=>{\n                                        setVideo(undefined);\n                                        if (videoInput.current) videoInput.current.value = \"\";\n                                    },\n                                    className: \"jsx-305e1e0c398ec76\",\n                                    children: \"Reset Video\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    disabled: !content || !title || loading,\n                                    onSubmit: submitData,\n                                    className: \"jsx-305e1e0c398ec76\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"jsx-305e1e0c398ec76\",\n                                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_7__.BarLoader, {\n                                            color: \"black\",\n                                            loading: loading,\n                                            cssOverride: override\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 26\n                                        }, undefined) : \"Create\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\"),\n                                    className: \"jsx-305e1e0c398ec76\" + \" \" + \"back\",\n                                    children: \"or Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"305e1e0c398ec76\",\n                children: '.page.jsx-305e1e0c398ec76{background:white;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}input[type=\"text\"].jsx-305e1e0c398ec76,textarea.jsx-305e1e0c398ec76{width:100%;padding:.5rem;margin:.5rem 0;-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem;border:.125rem solid rgba(0,0,0,.2)}input[type=\"submit\"].jsx-305e1e0c398ec76{background:#ececec;border:0;padding:1rem 2rem}button.jsx-305e1e0c398ec76+button.jsx-305e1e0c398ec76{margin-left:1rem}.back.jsx-305e1e0c398ec76{margin-left:1rem}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\CS Studies\\\\Semester_F\\\\Frontend\\\\HW-4\\\\pages\\\\create.tsx\",\n        lineNumber: 75,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Draft, \"HFi90SfuLjVE8CLR2nw61apQTtA=\");\n_c1 = Draft;\n_s1(Draft, \"HFi90SfuLjVE8CLR2nw61apQTtA=\");\n_c = Draft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Draft);\nvar _c;\n$RefreshReg$(_c, \"Draft\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c1;\n$RefreshReg$(_c1, \"Draft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTQTs0Q0FBU21FLGFBQWF6Qjs7Ozs7d0RBQWUsUUFBUTs7Ozs7Ozs7Ozs7OENBRzdGSSw2REFBQUEsQ0FBQ3NCLEtBQUFBO29DQUFtQkMsTUFBSztvQ0FBSUwsU0FBUyxJQUFNekUsdURBQVcsQ0FBQzs2RUFBM0M7OENBQWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q3hFO0dBdkpNSTtNQUFBQTtJQUFBQSxPQUFBQTtLQUFBQTtBQXlKTiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUudHN4PzIxYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q1NTUHJvcGVydGllcywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQmFyTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBEcmFmdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZpZGVvLCBzZXRWaWRlb10gPSB1c2VTdGF0ZTxGaWxlPigpOyBcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx7dG9rZW46IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBpbWFnZVVSTDogc3RyaW5nfT4oKSBcclxuICBcclxuICBjb25zdCB2aWRlb0lucHV0ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dnZWRVc2VySlNPTiA9IENvb2tpZXMuZ2V0KFwibG9nZ2VkTm90ZWFwcFVzZXJcIik7XHJcbiAgICBpZiAobG9nZ2VkVXNlckpTT04pIFxyXG4gICAgICBzZXRVc2VyKEpTT04ucGFyc2UobG9nZ2VkVXNlckpTT04pKVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIGNvbnN0IHN1Ym1pdERhdGEgPSBhc3luYyAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZighdXNlcil7IFxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICBjb25zb2xlLmVycm9yKFwidXNlciBpcyBub3Qgc2lnbmVkIGluXCIpXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG1ldGFEYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIG1ldGFEYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VyLnVzZXJuYW1lKTtcclxuICAgICAgbWV0YURhdGEuYXBwZW5kKCd0aXRsZScsIHRpdGxlKTtcclxuICAgICAgbWV0YURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XHJcbiAgICAgIGlmICh2aWRlbykge1xyXG4gICAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgICBjb25zdCB2aWRlb0ZpbGUgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICB2aWRlb0ZpbGUuYXBwZW5kKCd2aWRlbycsIHZpZGVvLCB2aWRlby5uYW1lKTtcclxuICAgICAgICAvLyB2aWRlb0ZpbGUuYXBwZW5kKCd1cGxvYWRfcHJlc2V0JywgJ3hnZzZ0eGp2Jyk7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91cGxvYWQnLCB2aWRlb0ZpbGUsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHVybCA9IHJlc3VsdC5kYXRhLnVybClcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICAgICAgbWV0YURhdGEuYXBwZW5kKCd2aWRlb1VSTCcsIHVybCk7XHJcbiAgICAgICAgbWV0YURhdGEuYXBwZW5kKCdkYXRlJywgbmV3IERhdGUoKS50b1N0cmluZygpKTtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VwbG9hZE1ldGFEYXRhJywgbWV0YURhdGEsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHVzZXIudG9rZW5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgYXdhaXQgUm91dGVyLnB1c2goYC9kcmFmdHM/dXNlcm5hbWU9JHt1c2VyLnVzZXJuYW1lfWApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgY29uc29sZS5lcnJvcihlcnJvcikgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICBpZiAoZmlsZXMpIFxyXG4gICAgICBzZXRWaWRlbyhmaWxlc1swXSk7XHJcbiAgfTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge3RpdGxlSW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKX0sIFtdKSBcclxuXHJcbiAgY29uc3Qgb3ZlcnJpZGU6IENTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICBtYXJnaW46IFwiMTAgYXV0b1wiLFxyXG4gICAgYm9yZGVyQ29sb3I6IFwicmVkXCIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdERhdGF9PlxyXG4gICAgICAgICAgPGgxPk5ldyBEcmFmdDwvaDE+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVmPXt0aXRsZUlucHV0UmVmfSAgXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGNvbHM9ezUwfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRlbnRcIlxyXG4gICAgICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZCA9IHt2aWRlbyA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgaWQ9XCJ2aWRlb1VwbG9hZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWRlb1VwbG9hZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlZj17dmlkZW9JbnB1dH1cclxuICAgICAgICAgICAgYWNjZXB0PVwidmlkZW8vKlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQgPSB7IXZpZGVvfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0VmlkZW8odW5kZWZpbmVkKTsgaWYodmlkZW9JbnB1dC5jdXJyZW50KSB2aWRlb0lucHV0LmN1cnJlbnQudmFsdWUgPSBcIlwifX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlc2V0IFZpZGVvXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb250ZW50IHx8ICF0aXRsZSB8fCBsb2FkaW5nfSAgLy8gRGlzYWJsZSBidXR0b24gd2hlbiBmb3JtIGZpZWxkcyBhcmUgZW1wdHkgb3Igd2hlbiB0aGUgZm9ybSBpcyBiZWluZyBzdWJtaXR0ZWRcclxuICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdERhdGF9ICAvLyBDYWxsIGhhbmRsZUNyZWF0ZUJ1dHRvbkNsaWNrIHdoZW4gdGhlIFwiQ3JlYXRlXCIgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7bG9hZGluZz8gPEJhckxvYWRlciBjb2xvcj1cImJsYWNrXCIgbG9hZGluZz17bG9hZGluZ30gY3NzT3ZlcnJpZGU9e292ZXJyaWRlfSAvPiA6ICdDcmVhdGUnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmFja1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvXCIpfT5cclxuICAgICAgICAgICAgb3IgQ2FuY2VsXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnBhZ2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiArIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydMKgZGVmYXVsdMKgRHJhZnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMYXlvdXQiLCJSb3V0ZXIiLCJheGlvcyIsIkJhckxvYWRlciIsIkNvb2tpZXMiLCJEcmFmdCIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidmlkZW8iLCJzZXRWaWRlbyIsInVzZXIiLCJzZXRVc2VyIiwidmlkZW9JbnB1dCIsInRpdGxlSW5wdXRSZWYiLCJsb2dnZWRVc2VySlNPTiIsImdldCIsIkpTT04iLCJwYXJzZSIsInN1Ym1pdERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXRhRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlcm5hbWUiLCJ1cmwiLCJ2aWRlb0ZpbGUiLCJuYW1lIiwicG9zdCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImNhdGNoIiwibG9nIiwiRGF0ZSIsInRvU3RyaW5nIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwicHVzaCIsImNvbmNhdCIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwidGFyZ2V0IiwiY3VycmVudCIsImZvY3VzIiwib3ZlcnJpZGUiLCJkaXNwbGF5IiwibWFyZ2luIiwiYm9yZGVyQ29sb3IiLCJfanN4REVWIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJpbnB1dCIsInJlZiIsIm9uQ2hhbmdlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwiZGlzYWJsZWQiLCJpZCIsImFjY2VwdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiLCJjb2xvciIsImNzc092ZXJyaWRlIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create.tsx\n"));

/***/ })

});