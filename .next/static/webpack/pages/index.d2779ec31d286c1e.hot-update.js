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

/***/ "./components/Pagination.tsx":
/*!***********************************!*\
  !*** ./components/Pagination.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Pagination = (props)=>{\n    _s();\n    const { page , pageCount  } = props;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(page);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-13962df5caf06b5a\" + \" \" + \"pagination\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            router.push(\"/?page=\".concat(Math.max(currentPage - 5, 1)));\n                            setCurrentPage(Math.max(currentPage - 5, 1));\n                        },\n                        className: \"jsx-13962df5caf06b5a\" + \" \" + \"pagination__item\",\n                        children: \"<<\"\n                    }, \"<<\", false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Pagination.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            if (currentPage > 1) {\n                                router.push(\"/?page=\".concat(currentPage - 1));\n                                setCurrentPage(currentPage - 1);\n                            }\n                        },\n                        className: \"jsx-13962df5caf06b5a\" + \" \" + \"pagination__item\",\n                        children: \"<\"\n                    }, \"<\", false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Pagination.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined),\n                    Array.from({\n                        length: currentPage + 5 <= pageCount ? 5 : pageCount - currentPage + 1\n                    }, (_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                router.push(\"/?page=\".concat(currentPage + i));\n                                setCurrentPage(currentPage + i);\n                            },\n                            className: \"jsx-13962df5caf06b5a\" + \" \" + \"pagination__item\".concat(i === 0 ? \" pagination__item--active\" : \"\"),\n                            children: currentPage + i\n                        }, currentPage + i, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Pagination.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            if (currentPage < pageCount) {\n                                router.push(\"/?page=\".concat(currentPage + 1));\n                                setCurrentPage(currentPage + 1);\n                            }\n                        },\n                        className: \"jsx-13962df5caf06b5a\" + \" \" + \"pagination__item\",\n                        children: \">\"\n                    }, \">\", false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Pagination.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            router.push(\"/?page=\".concat(Math.min(currentPage + 5, pageCount)));\n                            setCurrentPage(Math.min(currentPage + 5, pageCount));\n                        },\n                        className: \"jsx-13962df5caf06b5a\" + \" \" + \"pagination__item\",\n                        children: \">>\"\n                    }, \">>\", false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Pagination.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Documents\\\\GitHub\\\\Meni-Adler-Course\\\\components\\\\Pagination.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"13962df5caf06b5a\",\n                children: \".pagination.jsx-13962df5caf06b5a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:2rem;margin-bottom:2rem}.pagination__item.jsx-13962df5caf06b5a{-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-color:#fff;border:1px solid#ddd;color:#666;cursor:pointer;font-size:15px;padding:8px 16px;text-align:center;text-decoration:none;-webkit-transition:background-color.3s ease-in-out;-moz-transition:background-color.3s ease-in-out;-o-transition:background-color.3s ease-in-out;transition:background-color.3s ease-in-out;margin:0 4px}.pagination__item.jsx-13962df5caf06b5a:hover{background-color:#e1fbf2;-webkit-box-shadow:1px 1px 3px#aaa;-moz-box-shadow:1px 1px 3px#aaa;box-shadow:1px 1px 3px#aaa}.pagination__item--active.jsx-13962df5caf06b5a{background-color:rgb(210,210,210);border-color:black}\"\n            }, void 0, false, void 0, undefined),\n            \" \"\n        ]\n    }, void 0, true);\n};\n_s(Pagination, \"C5IIhKMgrAUJBEuCIoJx64Sd8kE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNBO0FBUXhDLE1BQU1HLGFBQThCLENBQUNDLFFBQVU7O0lBQzNDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxVQUFTLEVBQUUsR0FBR0Y7SUFDNUIsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDSTtJQUMvQyxNQUFNSSxTQUFTUCxzREFBU0E7SUFFeEIscUJBQ0k7OzBCQUNBLDhEQUFDUTswREFBYzs7a0NBQ1gsOERBQUNDO3dCQUdHQyxTQUFTLElBQU07NEJBQ1hILE9BQU9JLElBQUksQ0FBQyxVQUFzQyxPQUE1QkMsS0FBS0MsR0FBRyxDQUFDUixjQUFjLEdBQUU7NEJBQy9DQyxlQUFlTSxLQUFLQyxHQUFHLENBQUNSLGNBQWMsR0FBRTt3QkFDNUM7a0VBSlk7a0NBTVg7dUJBUEk7Ozs7O2tDQVNULDhEQUFDSTt3QkFHR0MsU0FBUyxJQUFNOzRCQUNYLElBQUlMLGNBQWMsR0FBRztnQ0FDakJFLE9BQU9JLElBQUksQ0FBQyxVQUEwQixPQUFoQk4sY0FBYztnQ0FDcENDLGVBQWVELGNBQWM7NEJBQ2pDLENBQUM7d0JBQ0w7a0VBTlk7a0NBUVg7dUJBVEk7Ozs7O29CQVlSUyxNQUFNQyxJQUFJLENBQUM7d0JBQUNDLFFBQVFYLGNBQWMsS0FBS0QsWUFBWSxJQUFJQSxZQUFZQyxjQUFjLENBQUM7b0JBQUEsR0FBRyxDQUFDWSxHQUFHQyxrQkFDdEYsOERBQUNUOzRCQUdHQyxTQUFTLElBQU07Z0NBQ1hILE9BQU9JLElBQUksQ0FBQyxVQUEwQixPQUFoQk4sY0FBY2E7Z0NBQ3BDWixlQUFlRCxjQUFjYTs0QkFDakM7c0VBSlcsbUJBQThELE9BQTNDQSxNQUFNLElBQUksOEJBQThCLEVBQUU7c0NBTXZFYixjQUFjYTsyQkFQVmIsY0FBY2E7Ozs7O2tDQVczQiw4REFBQ1Q7d0JBR0dDLFNBQVMsSUFBTTs0QkFDWCxJQUFJTCxjQUFjRCxXQUFXO2dDQUN6QkcsT0FBT0ksSUFBSSxDQUFDLFVBQTBCLE9BQWhCTixjQUFjO2dDQUNwQ0MsZUFBZUQsY0FBYzs0QkFDakMsQ0FBQzt3QkFDTDtrRUFOWTtrQ0FRWDt1QkFUSTs7Ozs7a0NBV1QsOERBQUNJO3dCQUdHQyxTQUFTLElBQU07NEJBQ1hILE9BQU9JLElBQUksQ0FBQyxVQUE4QyxPQUFwQ0MsS0FBS08sR0FBRyxDQUFDZCxjQUFjLEdBQUVEOzRCQUMvQ0UsZUFBZU0sS0FBS08sR0FBRyxDQUFDZCxjQUFjLEdBQUVEO3dCQUM1QztrRUFKWTtrQ0FNWDt1QkFQSTs7Ozs7Ozs7Ozs7Ozs7O1lBeUNQOzs7QUFFZDtHQXBHTUg7O1FBR2FELGtEQUFTQTs7O0tBSHRCQztBQXNHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2luYXRpb24udHN4PzhjYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgICBwYWdlQ291bnQ6IG51bWJlcjtcclxuICB9O1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHBhZ2UsIHBhZ2VDb3VudCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKHBhZ2UpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9eyc8PCd9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdpbmF0aW9uX19pdGVtYH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgLz9wYWdlPSR7TWF0aC5tYXgoY3VycmVudFBhZ2UgLSA1LDEpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlKE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gNSwxKSk7XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9eyc8J31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2luYXRpb25fX2l0ZW1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC8/cGFnZT0ke2N1cnJlbnRQYWdlIC0gMX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyc8J31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICB7QXJyYXkuZnJvbSh7bGVuZ3RoOiBjdXJyZW50UGFnZSArIDUgPD0gcGFnZUNvdW50ID8gNSA6IHBhZ2VDb3VudCAtIGN1cnJlbnRQYWdlICsgMX0sIChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjdXJyZW50UGFnZSArIGl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGFnaW5hdGlvbl9faXRlbSR7aSA9PT0gMCA/IFwiIHBhZ2luYXRpb25fX2l0ZW0tLWFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC8/cGFnZT0ke2N1cnJlbnRQYWdlICsgaX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFBhZ2UgKyBpfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXsnPid9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdpbmF0aW9uX19pdGVtYH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCBwYWdlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC8/cGFnZT0ke2N1cnJlbnRQYWdlICsgMX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyc+J31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17Jz4+J31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2luYXRpb25fX2l0ZW1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvP3BhZ2U9JHtNYXRoLm1pbihjdXJyZW50UGFnZSArIDUscGFnZUNvdW50KX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGFnZShNYXRoLm1pbihjdXJyZW50UGFnZSArIDUscGFnZUNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICB9IH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PjxzdHlsZSBqc3g+e2BcclxuXHJcbiAgLnBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbl9faXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb25fX2l0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZmJmMjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbl9faXRlbS0tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gICAgYH08L3N0eWxlPiA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlBhZ2luYXRpb24iLCJwcm9wcyIsInBhZ2UiLCJwYWdlQ291bnQiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicm91dGVyIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJNYXRoIiwibWF4IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination.tsx\n"));

/***/ })

});