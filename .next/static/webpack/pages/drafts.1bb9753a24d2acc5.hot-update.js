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

/***/ "./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n\n\n\n\n\n\nconst Post = (param)=>{\n    let { post , video  } = param;\n    var _post_author, _post_author1, _post_author2;\n    const authorName = post.author ? post.author.name : \"Unknown author\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/p/\".concat(post.id)),\n        className: \"jsx-a6857e7dd76abc78\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"jsx-a6857e7dd76abc78\",\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Post.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                className: \"jsx-a6857e7dd76abc78\",\n                children: [\n                    \"By \",\n                    authorName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Post.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Post.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            ((_post_author = post.author) === null || _post_author === void 0 ? void 0 : _post_author.imageURL) && ((_post_author1 = post.author) === null || _post_author1 === void 0 ? void 0 : _post_author1.imageURL) != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: (_post_author2 = post.author) === null || _post_author2 === void 0 ? void 0 : _post_author2.imageURL,\n                alt: \"cannot to load photo\",\n                className: \"jsx-a6857e7dd76abc78\" + \" \" + \"image\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Post.tsx\",\n                lineNumber: 28,\n                columnNumber: 63\n            }, undefined) : \"\",\n            video ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: video,\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                onClick: (event)=>event.stopPropagation(),\n                className: \"jsx-a6857e7dd76abc78\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiCameraMovie, {\n                    style: {\n                        fontSize: \"30px\",\n                        color: \"black\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Post.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 23\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Post.tsx\",\n                lineNumber: 30,\n                columnNumber: 21\n            }, undefined) : \"No video\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"a6857e7dd76abc78\",\n                children: \"div.jsx-a6857e7dd76abc78{color:inherit;padding:2rem}.image.jsx-a6857e7dd76abc78{width:auto;height:150px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\zohar\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Post.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNVO0FBQ0k7QUFnQi9DLE1BQU1JLE9BQWlELFNBQXFCO1FBQXBCLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFO1FBUWhFRCxjQUF5QkEsZUFBd0NBO0lBUHRFLE1BQU1FLGFBQWFGLEtBQUtHLE1BQU0sR0FBR0gsS0FBS0csTUFBTSxDQUFDQyxJQUFJLEdBQUcsZ0JBQWdCO0lBRWxFLHFCQUNBLDhEQUFDQztRQUFJQyxTQUFTLElBQU1WLHVEQUFXLENBQUMsTUFBYyxPQUFSSSxLQUFLUSxFQUFFOzs7MEJBQzNDLDhEQUFDQzs7MEJBQUlULEtBQUtVLEtBQUs7Ozs7OzswQkFDZiw4REFBQ0M7OztvQkFBTTtvQkFBSVQ7Ozs7Ozs7MEJBQ1gsOERBQUNMLHNEQUFhQTtnQkFBQ2UsVUFBVVosS0FBS2EsT0FBTzs7Ozs7O1lBQ3BDYixDQUFBQSxDQUFBQSxlQUFBQSxLQUFLRyxNQUFNLGNBQVhILDBCQUFBQSxLQUFBQSxJQUFBQSxhQUFhYyxRQUFRLEtBQUlkLENBQUFBLENBQUFBLGdCQUFBQSxLQUFLRyxNQUFNLGNBQVhILDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFhYyxRQUFRLEtBQUksbUJBQUssOERBQUNDO2dCQUFJQyxLQUFLaEIsQ0FBQUEsZ0JBQUFBLEtBQUtHLE1BQU0sY0FBWEgsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWFjLFFBQVE7Z0JBQUVHLEtBQUk7MERBQWlDOzs7Ozs0QkFBaUIsRUFBRTtZQUNoSmhCLHNCQUNhLDhEQUFDaUI7Z0JBQUVDLE1BQU1sQjtnQkFBT21CLFFBQU87Z0JBQVNDLEtBQUk7Z0JBQXNCZixTQUFTLENBQUNnQixRQUFVQSxNQUFNQyxlQUFlOzswQkFDakcsNEVBQUN6Qix5REFBYUE7b0JBQUMwQixPQUFPO3dCQUFFQyxVQUFVO3dCQUFTQyxPQUFPO29CQUFPOzs7Ozs7Ozs7OzRCQUUzRCxVQUFVOzs7Ozs7Ozs7OztBQWM5QjtLQTNCTTNCO0FBNkJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC50c3g/NzcyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgeyBCaUNhbWVyYU1vdmllIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcblxyXG5leHBvcnQgdHlwZSBQb3N0UHJvcHMgPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGF1dGhvcjoge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcbiAgICBpbWFnZVVSTDogc3RyaW5nO1xyXG4gIH0gfCBudWxsO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBwdWJsaXNoZWQ6IGJvb2xlYW47XHJcbiAgdmlkZW86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPHsgcG9zdDogUG9zdFByb3BzLCB2aWRlbzogYW55fT4gPSAoeyBwb3N0LCB2aWRlbyB9KSA9PiB7XHJcbiAgY29uc3QgYXV0aG9yTmFtZSA9IHBvc3QuYXV0aG9yID8gcG9zdC5hdXRob3IubmFtZSA6IFwiVW5rbm93biBhdXRob3JcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL3AvJHtwb3N0LmlkfWApfT5cclxuICAgICAgPGgyPntwb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgIDxzbWFsbD5CeSB7YXV0aG9yTmFtZX08L3NtYWxsPlxyXG4gICAgICA8UmVhY3RNYXJrZG93biBjaGlsZHJlbj17cG9zdC5jb250ZW50fS8+XHJcbiAgICAgIHtwb3N0LmF1dGhvcj8uaW1hZ2VVUkwgJiYgcG9zdC5hdXRob3I/LmltYWdlVVJMICE9IFwiXCIgPyA8aW1nIHNyYz17cG9zdC5hdXRob3I/LmltYWdlVVJMfSBhbHQ9XCJjYW5ub3QgdG8gbG9hZCBwaG90b1wiIGNsYXNzTmFtZT1cImltYWdlXCI+PC9pbWc+IDogXCJcIn1cclxuICAgICAge3ZpZGVvID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZpZGVvfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgb25DbGljaz17KGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QmlDYW1lcmFNb3ZpZSBzdHlsZT17eyBmb250U2l6ZTogJzMwcHgnICwgY29sb3I6ICdibGFjayd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkgOiBcIk5vIHZpZGVvXCJ9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2V7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bzsgXHJcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnTCoGRlZmF1bHTCoFBvc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiUmVhY3RNYXJrZG93biIsIkJpQ2FtZXJhTW92aWUiLCJQb3N0IiwicG9zdCIsInZpZGVvIiwiYXV0aG9yTmFtZSIsImF1dGhvciIsIm5hbWUiLCJkaXYiLCJvbkNsaWNrIiwicHVzaCIsImlkIiwiaDIiLCJ0aXRsZSIsInNtYWxsIiwiY2hpbGRyZW4iLCJjb250ZW50IiwiaW1hZ2VVUkwiLCJpbWciLCJzcmMiLCJhbHQiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwic3R5bGUiLCJmb250U2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.tsx\n"));

/***/ })

});