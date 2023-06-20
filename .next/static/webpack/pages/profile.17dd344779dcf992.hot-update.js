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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nvar _s = $RefreshSig$();\n\nvar _s1 = $RefreshSig$();\n\n\n\n\n// This function retrieves the post data from the database based on the provided id.\n// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {\n//   const { name, email, username , imageURL } = context.query;\n//   // You can access the id, email, and username values here and use them as needed\n//   return {\n//     props: {\n//       name,\n//       email,\n//       username,\n//       imageURL,\n//     },\n//   };\n// };\n// type Props = {\n//   name: string;\n//   email: string;\n//   username: string;\n//   imageURL: string,\n// };\n// // The Post component displays the details of a blog post.\nconst Profile = ()=>{\n    _s();\n    _s1();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        username: \"\",\n        name: \"\",\n        email: \"\",\n        imageURL: \"\"\n    });\n    const [profileImage, setProfileImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    //const [url, setURL] = useState(\"\")\n    const imageInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const loggedUserJSON = window.localStorage.getItem(\"loggedNoteappUser\");\n        if (loggedUserJSON) {\n            setUser(JSON.parse(loggedUserJSON));\n        }\n    }, []);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"My Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"You need to be authenticated to view this page.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, undefined);\n    }\n    const handleImage = async (e)=>{\n        const files = e.target.files;\n        if (files) setProfileImage(files[0]);\n    };\n    const handleReset = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/resetPicture/\".concat(user.email));\n        setProfileImage(undefined);\n        if (imageInput.current) imageInput.current.value = \"\";\n        setUser((prevUser)=>({\n                ...prevUser,\n                imageURL: \"\"\n            }));\n        window.localStorage.setItem(\"loggedNoteappUser\", JSON.stringify(user));\n    };\n    const handleSubmit = async ()=>{\n        if (profileImage) {\n            const imageFile = new FormData();\n            imageFile.append(\"image\", profileImage, profileImage.name);\n            imageFile.append(\"email\", user.email);\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/uploadPicture\", imageFile, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            }).then((result)=>{\n                console.log(result.data);\n                setUser((prevUser)=>({\n                        ...prevUser,\n                        imageURL: result.data\n                    }));\n                window.localStorage.setItem(\"loggedNoteappUser\", JSON.stringify(user));\n            }).catch((error)=>{\n                var _error_response, _error_response_data;\n                return console.log((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-e53fd7887495feba\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-e53fd7887495feba\",\n                        children: [\n                            \"Welcome \",\n                            user.name,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-e53fd7887495feba\",\n                        children: [\n                            \"Username: \",\n                            user.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"jsx-e53fd7887495feba\",\n                        children: [\n                            \"Email: \",\n                            user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    user.imageURL === \"\" ? \"no image\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.imageURL,\n                        alt: \"unable to load photo\",\n                        className: \"jsx-e53fd7887495feba\" + \" \" + \"image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 46\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-e53fd7887495feba\",\n                children: user.imageURL != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleReset,\n                    className: \"jsx-e53fd7887495feba\",\n                    children: \"Reset Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 34\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"jsx-e53fd7887495feba\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"jsx-e53fd7887495feba\",\n                            children: \"Add profile image: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            id: \"imageUpload\",\n                            name: \"imageUpload\",\n                            onChange: handleImage,\n                            ref: imageInput,\n                            accept: \"image/*\",\n                            className: \"jsx-e53fd7887495feba\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: !profileImage,\n                            onClick: handleSubmit,\n                            className: \"jsx-e53fd7887495feba\",\n                            children: \"Upload\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"e53fd7887495feba\",\n                children: \"div.jsx-e53fd7887495feba{background:#e1fbf2;-webkit-transition:box-shadow.1s ease-in;-moz-transition:box-shadow.1s ease-in;-o-transition:box-shadow.1s ease-in;transition:box-shadow.1s ease-in;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa;padding:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:350px;margin:auto}.page.jsx-e53fd7887495feba{background:white;padding:2rem}.image.jsx-e53fd7887495feba{width:200px;height:auto}.actions.jsx-e53fd7887495feba{margin-top:2rem}a.jsx-e53fd7887495feba{text-decoration:none;color:#000;background:transpparent;display:inline-block}a.jsx-e53fd7887495feba+a.jsx-e53fd7887495feba{margin-left:1rem;background:transparent}button.jsx-e53fd7887495feba+button.jsx-e53fd7887495feba{margin-left:1rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\pages\\\\profile.tsx\",\n        lineNumber: 90,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Profile, \"OLZWctOvN8HCVxhdwqVU87wSl6U=\");\n_c1 = Profile;\n_s1(Profile, \"vqrpynC6xLhHsl18tI8LehAvWlQ=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n(function() {\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== \"undefined\" && // AMP / No-JS mode does not inject these helpers:\n    \"$RefreshHelpers$\" in self) {\n        // @ts-ignore __webpack_module__ is global\n        var currentExports = module.exports;\n        // @ts-ignore __webpack_module__ is global\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function(data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            // @ts-ignore importMeta is replaced in the loader\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                } else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        } else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n})();\nvar _c1;\n$RefreshReg$(_c1, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQ0NrQiw2REFBQUEsQ0FBQ0UsT0FBQUE7OztrQ0FDQ0YsNkRBQUFBLENBQUM4QixNQUFBQTs7OzRCQUFHOzRCQUFTN0MsS0FBS0csSUFBSTs0QkFBQzs7Ozs7OztrQ0FDdkJZLDZEQUFBQSxDQUFDK0IsTUFBQUE7Ozs0QkFBRzs0QkFBVzlDLEtBQUtFLFFBQVE7Ozs7Ozs7a0NBQzVCYSw2REFBQUEsQ0FBQytCLE1BQUFBOzs7NEJBQUc7NEJBQVE5QyxLQUFLSSxLQUFLOzs7Ozs7O29CQUNyQkosS0FBS0ssUUFBUSxLQUFLLEtBQUssMkJBQWFVLDZEQUFBQSxDQUFDZ0MsT0FBQUE7d0JBQUlDLEtBQUtoRCxLQUFLSyxRQUFRO3dCQUFFNEMsS0FBSTtrRUFBaUM7Ozs7O2lDQUFjOzs7Ozs7OzBCQUVuSGxDLDZEQUFBQSxDQUFDRSxPQUFBQTs7MEJBQ0lqQixLQUFLSyxRQUFRLElBQUksbUJBQ2hCVSw2REFBQUEsQ0FBQ21DLFVBQUFBO29CQUNHQyxTQUFTN0I7OzhCQUNWOzs7Ozs4Q0FHSFAsNkRBQUFBLENBQUNxQyxLQUFBQTs7O3NDQUNDckMsNkRBQUFBLENBQUNzQyxTQUFBQTs7c0NBQU07Ozs7OztzQ0FDUHRDLDZEQUFBQSxDQUFDdUMsU0FBQUE7NEJBQ0NDLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hyRCxNQUFLOzRCQUNMc0QsVUFBVXZDOzRCQUNWd0MsS0FBS2xEOzRCQUNMbUQsUUFBTzs7Ozs7OztzQ0FFVDVDLDZEQUFBQSxDQUFDbUMsVUFBQUE7NEJBQ0NVLFVBQVUsQ0FBQ3REOzRCQUNYNkMsU0FBU3BCOztzQ0FDVjs7Ozs7Ozs7Ozs7NkJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ2hCO0dBcklNaEM7TUFBQUE7SUFBQUEsU0FBQUE7S0FBQUE7QUF1SU4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3g/ZGNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlckFnZW50IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgcG9zdCBkYXRhIGZyb20gdGhlIGRhdGFiYXNlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBpZC5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQpID0+IHtcclxuLy8gICBjb25zdCB7IG5hbWUsIGVtYWlsLCB1c2VybmFtZSAsIGltYWdlVVJMIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4vLyAgIC8vIFlvdSBjYW4gYWNjZXNzIHRoZSBpZCwgZW1haWwsIGFuZCB1c2VybmFtZSB2YWx1ZXMgaGVyZSBhbmQgdXNlIHRoZW0gYXMgbmVlZGVkXHJcbiAgXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG5hbWUsXHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICB1c2VybmFtZSxcclxuLy8gICAgICAgaW1hZ2VVUkwsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vLyB0eXBlIFByb3BzID0ge1xyXG4vLyAgIG5hbWU6IHN0cmluZztcclxuLy8gICBlbWFpbDogc3RyaW5nO1xyXG4vLyAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbi8vICAgaW1hZ2VVUkw6IHN0cmluZyxcclxuLy8gfTtcclxuXHJcbi8vIC8vIFRoZSBQb3N0IGNvbXBvbmVudCBkaXNwbGF5cyB0aGUgZGV0YWlscyBvZiBhIGJsb2cgcG9zdC5cclxuY29uc3QgUHJvZmlsZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8eyB1c2VybmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsICBpbWFnZVVSTDogc3RyaW5nIH0gPih7IHVzZXJuYW1lOiAnJywgbmFtZTogJycsIGVtYWlsOiAnJywgaW1hZ2VVUkw6ICcnIH0pXHJcbiAgY29uc3QgW3Byb2ZpbGVJbWFnZSwgc2V0UHJvZmlsZUltYWdlXSA9IHVzZVN0YXRlPEZpbGU+KCk7IFxyXG4gIC8vY29uc3QgW3VybCwgc2V0VVJMXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2dlZFVzZXJKU09OID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWROb3RlYXBwVXNlcicpXHJcbiAgICBpZiAobG9nZ2VkVXNlckpTT04pIHtcclxuICAgICAgc2V0VXNlcihKU09OLnBhcnNlKGxvZ2dlZFVzZXJKU09OKSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMT5NeSBQcm9maWxlPC9oMT5cclxuICAgICAgICA8ZGl2PllvdSBuZWVkIHRvIGJlIGF1dGhlbnRpY2F0ZWQgdG8gdmlldyB0aGlzIHBhZ2UuPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlID0gYXN5bmMgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgaWYgKGZpbGVzKSBcclxuICAgICAgIHNldFByb2ZpbGVJbWFnZShmaWxlc1swXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3Jlc2V0UGljdHVyZS8ke3VzZXIuZW1haWx9YCk7XHJcbiAgICBzZXRQcm9maWxlSW1hZ2UodW5kZWZpbmVkKTtcclxuICAgIGlmKGltYWdlSW5wdXQuY3VycmVudClcclxuICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgIHNldFVzZXIoKHByZXZVc2VyKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZVc2VyLFxyXG4gICAgICAgIGltYWdlVVJMOiBcIlwiXHJcbiAgICAgIH0pKTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkTm90ZWFwcFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAocHJvZmlsZUltYWdlKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlRmlsZSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBpbWFnZUZpbGUuYXBwZW5kKCdpbWFnZScsIHByb2ZpbGVJbWFnZSwgcHJvZmlsZUltYWdlLm5hbWUpO1xyXG4gICAgICBpbWFnZUZpbGUuYXBwZW5kKCdlbWFpbCcsIHVzZXIuZW1haWwpXHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXBsb2FkUGljdHVyZScsaW1hZ2VGaWxlLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxyXG4gICAgICAgIHNldFVzZXIoKHByZXZVc2VyKSA9PiAoe1xyXG4gICAgICAgICAgLi4ucHJldlVzZXIsXHJcbiAgICAgICAgICBpbWFnZVVSTDogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dnZWROb3RlYXBwVXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UpKSBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5XZWxjb21lIHt1c2VyLm5hbWV9ITwvaDI+XHJcbiAgICAgICAgPGgzPlVzZXJuYW1lOiB7dXNlci51c2VybmFtZX08L2gzPlxyXG4gICAgICAgIDxoMz5FbWFpbDoge3VzZXIuZW1haWx9PC9oMz5cclxuICAgICAgICB7dXNlci5pbWFnZVVSTCA9PT0gXCJcIiA/IFwibm8gaW1hZ2VcIiA6IDxpbWcgc3JjPXt1c2VyLmltYWdlVVJMfSBhbHQ9XCJ1bmFibGUgdG8gbG9hZCBwaG90b1wiIGNsYXNzTmFtZT1cImltYWdlXCI+PC9pbWc+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIHt1c2VyLmltYWdlVVJMICE9IFwiXCIgPyBcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVzZXQgSW1hZ2VcclxuICAgICAgICAgICAgPC9idXR0b24+IDpcclxuICAgICAgICAgICAgPGE+IFxyXG4gICAgICAgICAgICAgIDxsYWJlbD5BZGQgcHJvZmlsZSBpbWFnZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VVcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlVXBsb2FkXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9maWxlSW1hZ2V9ICAvLyBEaXNhYmxlIGJ1dHRvbiB3aGVuIGZvcm0gZmllbGRzIGFyZSBlbXB0eSBvciB3aGVuIHRoZSBmb3JtIGlzIGJlaW5nIHN1Ym1pdHRlZFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fSAgLy8gQ2FsbCBoYW5kbGVDcmVhdGVCdXR0b25DbGljayB3aGVuIHRoZSBcIkNyZWF0ZVwiIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgICAgICAgPlVwbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTFmYmYyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjYWFhO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZXtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDsgXHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BwYXJlbnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEgKyBhIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24gKyBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0wqBkZWZhdWx0wqBQcm9maWxlO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMYXlvdXQiLCJheGlvcyIsIlByb2ZpbGUiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJuYW1lIiwibmFtZSIsImVtYWlsIiwiaW1hZ2VVUkwiLCJwcm9maWxlSW1hZ2UiLCJzZXRQcm9maWxlSW1hZ2UiLCJpbWFnZUlucHV0IiwibG9nZ2VkVXNlckpTT04iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiX2pzeERFViIsImgxIiwiZGl2IiwiaGFuZGxlSW1hZ2UiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJoYW5kbGVSZXNldCIsInBvc3QiLCJjb25jYXQiLCJ1bmRlZmluZWQiLCJjdXJyZW50IiwidmFsdWUiLCJwcmV2VXNlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVTdWJtaXQiLCJpbWFnZUZpbGUiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiaDIiLCJoMyIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVmIiwiYWNjZXB0IiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});