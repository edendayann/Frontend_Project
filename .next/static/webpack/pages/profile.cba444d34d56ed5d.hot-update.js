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

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n// This function retrieves the post data from the database based on the provided id.\n// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {\n//   const { name, email, username , imageURL } = context.query;\n//   // You can access the id, email, and username values here and use them as needed\n//   return {\n//     props: {\n//       name,\n//       email,\n//       username,\n//       imageURL,\n//     },\n//   };\n// };\n// type Props = {\n//   name: string;\n//   email: string;\n//   username: string;\n//   imageURL: string,\n// };\n// // The Post component displays the details of a blog post.\nconst Profile = ()=>{\n    _s();\n    _s1();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [profileImage, setProfileImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    var _user_imageURL;\n    const [url, setURL] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((_user_imageURL = user === null || user === void 0 ? void 0 : user.imageURL) !== null && _user_imageURL !== void 0 ? _user_imageURL : \"\");\n    const imageInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const loggedUserJSON = window.localStorage.getItem(\"loggedNoteappUser\");\n        if (loggedUserJSON) {\n            setUser(JSON.parse(loggedUserJSON));\n        }\n    }, []);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"You need to be authenticated to view this page.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    const handleImage = async (e)=>{\n        const files = e.target.files;\n        if (files) setProfileImage(files[0]);\n    };\n    const handleReset = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/resetPicture/\".concat(user.email));\n        setURL(\"\");\n        setProfileImage(undefined);\n        if (imageInput.current) imageInput.current.value = \"\";\n    };\n    const handleSubmit = async ()=>{\n        if (profileImage) {\n            const imageFile = new FormData();\n            imageFile.append(\"image\", profileImage, profileImage.name);\n            imageFile.append(\"email\", user.email);\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/uploadPicture\", imageFile, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            }).then((result)=>setURL(result.data)).catch((error)=>{\n                var _error_response, _error_response_data;\n                return console.log((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-e53fd7887495feba\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-e53fd7887495feba\",\n                        children: [\n                            \"Welcome \",\n                            user.name,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-e53fd7887495feba\",\n                        children: [\n                            \"Username: \",\n                            user.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-e53fd7887495feba\",\n                        children: [\n                            \"Email: \",\n                            user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    url === \"\" ? \"no image\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: url,\n                        alt: \"unable to load photo\",\n                        className: \"jsx-e53fd7887495feba\" + \" \" + \"image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 36\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-e53fd7887495feba\",\n                children: url != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleReset,\n                    className: \"jsx-e53fd7887495feba\",\n                    children: \"Reset Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 24\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-e53fd7887495feba\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"jsx-e53fd7887495feba\",\n                            children: \"Add profile image: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            id: \"imageUpload\",\n                            name: \"imageUpload\",\n                            onChange: handleImage,\n                            ref: imageInput,\n                            accept: \"image/*\",\n                            className: \"jsx-e53fd7887495feba\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: !profileImage,\n                            onClick: handleSubmit,\n                            className: \"jsx-e53fd7887495feba\",\n                            children: \"Upload\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"e53fd7887495feba\",\n                children: \"div.jsx-e53fd7887495feba{background:#e1fbf2;-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa;padding:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:350px;margin:auto}.page.jsx-e53fd7887495feba{background:white;padding:2rem}.image.jsx-e53fd7887495feba{width:200px;height:auto}.actions.jsx-e53fd7887495feba{margin-top:2rem}a.jsx-e53fd7887495feba{text-decoration:none;color:#000;background:transpparent;display:inline-block}a.jsx-e53fd7887495feba+a.jsx-e53fd7887495feba{margin-left:1rem;background:transparent}button.jsx-e53fd7887495feba+button.jsx-e53fd7887495feba{margin-left:1rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n        lineNumber: 74,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Profile, \"Sek//Z2CgiHQthHFIBv37hIshmw=\");\n_c1 = Profile;\n_s1(Profile, \"MLbv5KTPwc5bMwO7qBFOz8701bw=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c1;\n$RefreshReg$(_c1, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxDQUFDOEIsTUFBQUE7Ozs0QkFBRzs0QkFBUTVDLEtBQUt3QixLQUFLOzs7Ozs7O29CQUNyQnBCLFFBQVEsS0FBSywyQkFBYVUsNkRBQUFBLENBQUNnQyxPQUFBQTt3QkFBSUMsS0FBSzNDO3dCQUFLNEMsS0FBSTtrRUFBaUM7Ozs7O2lDQUFjOzs7Ozs7OzBCQUUvRmxDLDZEQUFBQSxDQUFDRSxPQUFBQTs7MEJBQ0laLE9BQU8sbUJBQ05VLDZEQUFBQSxDQUFDbUMsVUFBQUE7b0JBQ0dDLFNBQVM3Qjs7OEJBQ1Y7Ozs7OzhDQUdIUCw2REFBQUEsQ0FBQ3FDLEtBQUFBOzs7c0NBQ0NyQyw2REFBQUEsQ0FBQ3NDLFNBQUFBOztzQ0FBTTs7Ozs7O3NDQUNQdEMsNkRBQUFBLENBQUN1QyxTQUFBQTs0QkFDQ0MsTUFBSzs0QkFDTEMsSUFBRzs0QkFDSHZCLE1BQUs7NEJBQ0x3QixVQUFVdkM7NEJBQ1Z3QyxLQUFLbEQ7NEJBQ0xtRCxRQUFPOzs7Ozs7O3NDQUVUNUMsNkRBQUFBLENBQUNtQyxVQUFBQTs0QkFDQ1UsVUFBVSxDQUFDekQ7NEJBQ1hnRCxTQUFTdEI7O3NDQUNWOzs7Ozs7Ozs7Ozs2QkFDQzs7Ozs7Ozs7Ozs7Ozs7OztBQTJDaEI7R0E1SE03QjtNQUFBQTtJQUFBQSxTQUFBQTtLQUFBQTtBQThITiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLnRzeD9kY2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VyQWdlbnQgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gcmV0cmlldmVzIHRoZSBwb3N0IGRhdGEgZnJvbSB0aGUgZGF0YWJhc2UgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGlkLlxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHVzZXJuYW1lICwgaW1hZ2VVUkwgfSA9IGNvbnRleHQucXVlcnk7XHJcbi8vICAgLy8gWW91IGNhbiBhY2Nlc3MgdGhlIGlkLCBlbWFpbCwgYW5kIHVzZXJuYW1lIHZhbHVlcyBoZXJlIGFuZCB1c2UgdGhlbSBhcyBuZWVkZWRcclxuICBcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbmFtZSxcclxuLy8gICAgICAgZW1haWwsXHJcbi8vICAgICAgIHVzZXJuYW1lLFxyXG4vLyAgICAgICBpbWFnZVVSTCxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIHR5cGUgUHJvcHMgPSB7XHJcbi8vICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgIGVtYWlsOiBzdHJpbmc7XHJcbi8vICAgdXNlcm5hbWU6IHN0cmluZztcclxuLy8gICBpbWFnZVVSTDogc3RyaW5nLFxyXG4vLyB9O1xyXG5cclxuLy8gLy8gVGhlIFBvc3QgY29tcG9uZW50IGRpc3BsYXlzIHRoZSBkZXRhaWxzIG9mIGEgYmxvZyBwb3N0LlxyXG5jb25zdCBQcm9maWxlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx7IHVzZXJuYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgIGltYWdlVVJMOiBzdHJpbmd9PigpXHJcbiAgY29uc3QgW3Byb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlXSA9IHVzZVN0YXRlPEZpbGU+KCk7IFxyXG4gIGNvbnN0IFt1cmwsIHNldFVSTF0gPSB1c2VTdGF0ZSh1c2VyPy5pbWFnZVVSTCA/PyBcIlwiKVxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2dlZFVzZXJKU09OID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWROb3RlYXBwVXNlcicpXHJcbiAgICBpZiAobG9nZ2VkVXNlckpTT04pIHtcclxuICAgICAgc2V0VXNlcihKU09OLnBhcnNlKGxvZ2dlZFVzZXJKU09OKSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5NeSBQcm9maWxlPC9oMT5cclxuICAgICAgICA8ZGl2PllvdSBuZWVkIHRvIGJlIGF1dGhlbnRpY2F0ZWQgdG8gdmlldyB0aGlzIHBhZ2UuPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSBhc3luYyAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICBpZiAoZmlsZXMpIFxyXG4gICAgICAgc2V0UHJvZmlsZUltYWdlKGZpbGVzWzBdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvcmVzZXRQaWN0dXJlLyR7dXNlci5lbWFpbH1gKTtcclxuICAgIHNldFVSTChcIlwiKTtcclxuICAgIHNldFByb2ZpbGVJbWFnZSh1bmRlZmluZWQpO1xyXG4gICAgaWYoaW1hZ2VJbnB1dC5jdXJyZW50KVxyXG4gICAgICBpbWFnZUlucHV0LmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICBcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChwcm9maWxlSW1hZ2UpIHtcclxuICAgICAgY29uc3QgaW1hZ2VGaWxlID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGltYWdlRmlsZS5hcHBlbmQoJ2ltYWdlJywgcHJvZmlsZUltYWdlLCBwcm9maWxlSW1hZ2UubmFtZSk7XHJcbiAgICAgIGltYWdlRmlsZS5hcHBlbmQoJ2VtYWlsJywgdXNlci5lbWFpbClcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91cGxvYWRQaWN0dXJlJyxpbWFnZUZpbGUsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJyA6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KS50aGVuKHJlc3VsdCA9PiBzZXRVUkwocmVzdWx0LmRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSkpIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPldlbGNvbWUge3VzZXIubmFtZX0hPC9oMj5cclxuICAgICAgICA8aDM+VXNlcm5hbWU6IHt1c2VyLnVzZXJuYW1lfTwvaDM+XHJcbiAgICAgICAgPGgzPkVtYWlsOiB7dXNlci5lbWFpbH08L2gzPlxyXG4gICAgICAgIHt1cmwgPT09IFwiXCIgPyBcIm5vIGltYWdlXCIgOiA8aW1nIHNyYz17dXJsfSBhbHQ9XCJ1bmFibGUgdG8gbG9hZCBwaG90b1wiIGNsYXNzTmFtZT1cImltYWdlXCI+PC9pbWc+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIHt1cmwgIT0gXCJcIiA/IFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZXNldCBJbWFnZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gOlxyXG4gICAgICAgICAgICA8YT4gXHJcbiAgICAgICAgICAgICAgPGxhYmVsPkFkZCBwcm9maWxlIGltYWdlOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VVcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXByb2ZpbGVJbWFnZX0gIC8vIERpc2FibGUgYnV0dG9uIHdoZW4gZm9ybSBmaWVsZHMgYXJlIGVtcHR5IG9yIHdoZW4gdGhlIGZvcm0gaXMgYmVpbmcgc3VibWl0dGVkXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9ICAvLyBDYWxsIGhhbmRsZUNyZWF0ZUJ1dHRvbkNsaWNrIHdoZW4gdGhlIFwiQ3JlYXRlXCIgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICAgICAgICA+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvYT59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWZiZjI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZS1pbjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdle1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4OyBcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcHBhcmVudDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYSArIGEge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiArIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnTCoGRlZmF1bHTCoFByb2ZpbGU7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxheW91dCIsImF4aW9zIiwiUHJvZmlsZSIsInVzZXIiLCJzZXRVc2VyIiwicHJvZmlsZUltYWdlIiwic2V0UHJvZmlsZUltYWdlIiwidXJsIiwic2V0VVJMIiwiaW1hZ2VVUkwiLCJpbWFnZUlucHV0IiwibG9nZ2VkVXNlckpTT04iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiX2pzeERFViIsImgxIiwiZGl2IiwiaGFuZGxlSW1hZ2UiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJoYW5kbGVSZXNldCIsInBvc3QiLCJjb25jYXQiLCJlbWFpbCIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImltYWdlRmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibmFtZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiaDIiLCJoMyIsInVzZXJuYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayIsImEiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZWYiLCJhY2NlcHQiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});