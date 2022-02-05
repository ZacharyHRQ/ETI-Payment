"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/qna";
exports.ids = ["pages/qna"];
exports.modules = {

/***/ "./pages/qna.js":
/*!**********************!*\
  !*** ./pages/qna.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ QNA)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"@mui/material/Breadcrumbs\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Home */ \"@mui/icons-material/Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Whatshot */ \"@mui/icons-material/Whatshot\");\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nasync function getStaticProps() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:9233/api/v1/Questions/GetQuestions');\n    const Questions = await res.data;\n    return {\n        props: {\n            Questions\n        }\n    };\n}\nfunction QNA({ Questions  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_8___default()), {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"EduFI QnA Transactions page\"\n                }, void 0, false, {\n                    fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"QnA Payment Service\"\n            }, void 0, false, {\n                fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3___default()), {\n                \"aria-label\": \"breadcrumb\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            \"Home\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/qna\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            \"Questions and Answer\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            Questions.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    sx: {\n                        minWidth: 275\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                    sx: {\n                                        fontSize: 14\n                                    },\n                                    color: \"text.secondary\",\n                                    gutterBottom: true,\n                                    children: row.Title\n                                }, void 0, false, {\n                                    fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                    sx: {\n                                        mb: 1.5\n                                    },\n                                    color: \"text.secondary\",\n                                    children: row.StudentId\n                                }, void 0, false, {\n                                    fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                    variant: \"body2\",\n                                    children: [\n                                        Questions.content,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this),\n                                        Questions.module\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10___default()), {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                size: \"small\",\n                                children: \" See Answers\"\n                            }, void 0, false, {\n                                fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, row.QuestionId, true, {\n                    fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zachary/ETI-Payment/frontend/pages/qna.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0IzRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcW5hLmpzPzU1ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICdAbXVpL21hdGVyaWFsL0JyZWFkY3J1bWJzJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XG5pbXBvcnQgSG9tZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ib21lJztcbmltcG9ydCBXaGF0c2hvdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9XaGF0c2hvdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6OTIzMy9hcGkvdjEvUXVlc3Rpb25zL0dldFF1ZXN0aW9ucycpXG4gICAgY29uc3QgUXVlc3Rpb25zID0gYXdhaXQgcmVzLmRhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7ICBRdWVzdGlvbnMgfVxuICAgIH1cbiAgfVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFFOQSh7UXVlc3Rpb25zfSkge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVkdUZJIFFuQSBUcmFuc2FjdGlvbnMgcGFnZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgUW5BIFBheW1lbnQgU2VydmljZSBcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8QnJlYWRjcnVtYnMgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB1bmRlcmxpbmU9XCJob3ZlclwiXG4gICAgICAgICAgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICA+XG4gICAgICAgICAgPEhvbWVJY29uIHN4PXt7IG1yOiAwLjUgfX0gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHVuZGVybGluZT1cImhvdmVyXCJcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBocmVmPVwiL3FuYVwiXG4gICAgICAgID5cbiAgICAgICAgICA8V2hhdHNob3RJY29uIHN4PXt7IG1yOiAwLjUgfX0gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICBRdWVzdGlvbnMgYW5kIEFuc3dlclxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0JyZWFkY3J1bWJzPlxuXG4gICAgICB7UXVlc3Rpb25zLm1hcCgoKHJvdykgPT4gKFxuICAgICAgICAgIDxDYXJkIHN4PXt7IG1pbldpZHRoOiAyNzUgfX0ga2V5PSB7cm93LlF1ZXN0aW9uSWR9PlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNCB9fSBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICB7cm93LlRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuNSB9fSBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICB7cm93LlN0dWRlbnRJZH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgIHtRdWVzdGlvbnMuY29udGVudH1cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIHtRdWVzdGlvbnMubW9kdWxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj4gU2VlIEFuc3dlcnM8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpKX1cbiAgICAgIFxuICAgICAgXG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiQnJlYWRjcnVtYnMiLCJMaW5rIiwiSG9tZUljb24iLCJXaGF0c2hvdEljb24iLCJIZWFkIiwiQ29udGFpbmVyIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJnZXQiLCJRdWVzdGlvbnMiLCJkYXRhIiwicHJvcHMiLCJRTkEiLCJjb21wb25lbnQiLCJtYXhXaWR0aCIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwidW5kZXJsaW5lIiwic3giLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiaHJlZiIsIm1yIiwiZm9udFNpemUiLCJtYXAiLCJyb3ciLCJtaW5XaWR0aCIsImd1dHRlckJvdHRvbSIsIlRpdGxlIiwibWIiLCJTdHVkZW50SWQiLCJ2YXJpYW50IiwiY29udGVudCIsImJyIiwibW9kdWxlIiwic2l6ZSIsIlF1ZXN0aW9uSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/qna.js\n");

/***/ }),

/***/ "@mui/icons-material/Home":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Home" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ "@mui/icons-material/Whatshot":
/*!***********************************************!*\
  !*** external "@mui/icons-material/Whatshot" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Whatshot");

/***/ }),

/***/ "@mui/material/Breadcrumbs":
/*!********************************************!*\
  !*** external "@mui/material/Breadcrumbs" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Breadcrumbs");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ "@mui/material/CardContent":
/*!********************************************!*\
  !*** external "@mui/material/CardContent" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/qna.js"));
module.exports = __webpack_exports__;

})();