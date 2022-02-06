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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ QNA)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"@mui/material/Breadcrumbs\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Home */ \"@mui/icons-material/Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Whatshot */ \"@mui/icons-material/Whatshot\");\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nasync function getStaticProps() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Questions/GetQuestions');\n    const Questions = await res.data;\n    return {\n        props: {\n            Questions\n        }\n    };\n}\nfunction QNA({ Questions  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_8___default()), {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"EduFI QnA page\"\n                }, void 0, false, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"QnA Payment Service\"\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3___default()), {\n                \"aria-label\": \"breadcrumb\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            \"Home\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/qna\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            \"Questions and Answer\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            Questions ? Questions.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_9___default()), {\n                    sx: {\n                        minWidth: 275\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                    sx: {\n                                        fontSize: 20\n                                    },\n                                    color: \"text.primary\",\n                                    gutterBottom: true,\n                                    children: row.title\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                    sx: {\n                                        mb: 1\n                                    },\n                                    color: \"text.secondary\",\n                                    children: [\n                                        \"Asked by \",\n                                        row.studentid\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                    variant: \"body2\",\n                                    children: [\n                                        row.content,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"Module : \",\n                                        row.module\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_10___default()), {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                size: \"small\",\n                                onClick: ()=>router.push({\n                                        pathname: '/questions/[id]',\n                                        query: {\n                                            id: row.questionid,\n                                            title: row.title,\n                                            sid: row.studentid,\n                                            content: row.content,\n                                            mod: row.module\n                                        }\n                                    })\n                                ,\n                                children: \" See Answers \"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, row.studentid, true, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            ) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBQyxDQUFPO2dDQUFDQyxPQUFPLE1BQVExQixNQUFNLENBQUMyQixJQUFJLENBQUMsQ0FBQ0M7d0NBQUFBLFFBQVEsRUFBRyxDQUFpQjt3Q0FBRUMsS0FBSyxFQUFHLENBQUNDOzRDQUFBQSxFQUFFLEVBQUVkLEdBQUcsQ0FBQ2UsVUFBVTs0Q0FBRTVCLEtBQUssRUFBRWEsR0FBRyxDQUFDYixLQUFLOzRDQUFFNkIsR0FBRyxFQUFFaEIsR0FBRyxDQUFDSSxTQUFTOzRDQUFFRSxPQUFPLEVBQUVOLEdBQUcsQ0FBQ00sT0FBTzs0Q0FBRVcsR0FBRyxFQUFFakIsR0FBRyxDQUFDUSxNQUFNO3dDQUFBLENBQUM7b0NBQUMsQ0FBQzs7MENBQUksQ0FBYTs7Ozs7Ozs7Ozs7O21CQWYzS1IsR0FBRyxDQUFDSSxTQUFTOzs7OztnQkFrQjdDLElBQUk7Ozs7Ozs7QUFNakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3FuYS5qcz81NWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9CcmVhZGNydW1icyc7XG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZSc7XG5pbXBvcnQgV2hhdHNob3RJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvV2hhdHNob3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL21vY2tkYjo5MjMzL2FwaS92MS9RdWVzdGlvbnMvR2V0UXVlc3Rpb25zJylcbiAgICBjb25zdCBRdWVzdGlvbnMgPSBhd2FpdCByZXMuZGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgIFF1ZXN0aW9ucyB9XG4gICAgfVxuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUU5BKHtRdWVzdGlvbnN9KSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RWR1RkkgUW5BIHBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIFFuQSBQYXltZW50IFNlcnZpY2UgXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdW5kZXJsaW5lPVwiaG92ZXJcIlxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIb21lSWNvbiBzeD17eyBtcjogMC41IH19IGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB1bmRlcmxpbmU9XCJob3ZlclwiXG4gICAgICAgICAgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgaHJlZj1cIi9xbmFcIlxuICAgICAgICA+XG4gICAgICAgICAgPFdoYXRzaG90SWNvbiBzeD17eyBtcjogMC41IH19IGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgUXVlc3Rpb25zIGFuZCBBbnN3ZXJcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9CcmVhZGNydW1icz5cblxuICAgICAge1F1ZXN0aW9ucyA/IFF1ZXN0aW9ucy5tYXAoKChyb3cpID0+IChcbiAgICAgICAgICA8Q2FyZCBzeD17eyBtaW5XaWR0aDogMjc1IH19IGtleT0ge3Jvdy5zdHVkZW50aWR9PlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAyMCB9fSBjb2xvcj1cInRleHQucHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICB7cm93LnRpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuMCB9fSBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBBc2tlZCBieSB7cm93LnN0dWRlbnRpZH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgIHtyb3cuY29udGVudH1cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIE1vZHVsZSA6IHtyb3cubW9kdWxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPEJ1dHRvbiAgc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goe3BhdGhuYW1lIDogJy9xdWVzdGlvbnMvW2lkXScsIHF1ZXJ5IDoge2lkOiByb3cucXVlc3Rpb25pZCwgdGl0bGU6IHJvdy50aXRsZSwgc2lkOiByb3cuc3R1ZGVudGlkLCBjb250ZW50OiByb3cuY29udGVudCwgbW9kOiByb3cubW9kdWxlfSx9KX0gPiBTZWUgQW5zd2VycyA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpKTogbnVsbCB9XG4gICAgICBcbiAgICAgIFxuXG4gICAgPC9Db250YWluZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIkJyZWFkY3J1bWJzIiwiTGluayIsIkhvbWVJY29uIiwiV2hhdHNob3RJY29uIiwiSGVhZCIsIkNvbnRhaW5lciIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsInVzZVJvdXRlciIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZ2V0IiwiUXVlc3Rpb25zIiwiZGF0YSIsInByb3BzIiwiUU5BIiwicm91dGVyIiwiY29tcG9uZW50IiwibWF4V2lkdGgiLCJ0aXRsZSIsImgxIiwiY2xhc3NOYW1lIiwiYXJpYS1sYWJlbCIsInVuZGVybGluZSIsInN4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjb2xvciIsImhyZWYiLCJtciIsImZvbnRTaXplIiwibWFwIiwicm93IiwibWluV2lkdGgiLCJndXR0ZXJCb3R0b20iLCJtYiIsInN0dWRlbnRpZCIsInZhcmlhbnQiLCJjb250ZW50IiwiYnIiLCJtb2R1bGUiLCJzaXplIiwib25DbGljayIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiaWQiLCJxdWVzdGlvbmlkIiwic2lkIiwibW9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/qna.js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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