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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ QNA)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"@mui/material/Breadcrumbs\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Home */ \"@mui/icons-material/Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Whatshot */ \"@mui/icons-material/Whatshot\");\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"@mui/icons-material/ExpandMore\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Collapse */ \"@mui/material/Collapse\");\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nasync function getStaticProps() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Questions/GetQuestions');\n    const Questions = await res.data;\n    const res2 = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Answers/GetAnswers/1');\n    const Answers = await res2.data;\n    return {\n        props: {\n            Questions,\n            Answers\n        }\n    };\n}\nconst ExpandMore = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((props)=>{\n    const { expand , ...other } = props;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default()), {\n        ...other\n    }, void 0, false, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 33,\n        columnNumber: 12\n    }, undefined));\n})(({ theme , expand  })=>({\n        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',\n        marginLeft: 'auto',\n        transition: theme.transitions.create('transform', {\n            duration: theme.transitions.duration.shortest\n        })\n    })\n);\nfunction QNA({ Questions , Answers  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();\n    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const handleExpandClick = ()=>{\n        setExpanded(!expanded);\n    };\n    async function makePayment(answer) {\n        const jsonString = JSON.stringify({\n            senderwalletid: \"S10185319\",\n            receiverwalletid: answer.walletid,\n            answerid: answer.answerid,\n            tokenid: \"CM\",\n            numtokens: 1\n        });\n        console.log(jsonString);\n        const res = await fetch('http://payment:9232/api/v1/payment/reveal/', {\n            body: jsonString,\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            mode: 'no-cors'\n        });\n        console.log(res.status);\n        const res1 = await fetch(\"http://mockdb:9233/api/v1/Answers/ChangeStatus/\" + answer.answerid);\n        console.log(res1.status);\n        if (res.status === 0) {\n            alert(\"Payment Successful\");\n            router.push('/');\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"EduFI QnA page\"\n                }, void 0, false, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"QnA Payment Service\"\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default()), {\n                \"aria-label\": \"breadcrumb\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            \"Home\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/qna\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            \"Questions and Answer\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this),\n            Questions ? Questions.map((row1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                    sx: {\n                        minWidth: 345\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        fontSize: 20\n                                    },\n                                    color: \"text.primary\",\n                                    gutterBottom: true,\n                                    children: row1.title\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        mb: 1\n                                    },\n                                    color: \"text.secondary\",\n                                    children: [\n                                        \"Asked by \",\n                                        row1.studentid\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    variant: \"body2\",\n                                    children: [\n                                        row1.content,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 19\n                                        }, this),\n                                        \"Module : \",\n                                        row1.module\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default()), {\n                            disableSpacing: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExpandMore, {\n                                expand: expanded,\n                                onClick: handleExpandClick,\n                                \"aria-expanded\": expanded,\n                                \"aria-label\": \"show more\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 125,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default()), {\n                            in: expanded,\n                            timeout: \"auto\",\n                            unmountOnExit: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                children: Answers ? Answers.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                        sx: {\n                                            minWidth: 180\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    sx: {\n                                                        mb: 1\n                                                    },\n                                                    color: \"text.secondary\",\n                                                    children: [\n                                                        \"Answered by \",\n                                                        row.studentid\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 141,\n                                                    columnNumber: 23\n                                                }, this),\n                                                row.Paid == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    variant: \"body2\",\n                                                    children: row.content\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 145,\n                                                    columnNumber: 41\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                                    onClick: ()=>makePayment(row)\n                                                    ,\n                                                    children: \"Pay\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 148,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, row.answerid, false, {\n                                        fileName: \"/app/pages/qna.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 21\n                                    }, this)\n                                ) : null\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 137,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 136,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, row1.studentid, true, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, this)\n            ) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzRDQUFDUyxRQUFRLEVBQUUsR0FBRzt3Q0FBQyxDQUFDOzhIQUMxQnRFLG1FQUFXOzs0SEFDVEUsa0VBQVU7b0RBQUMyRCxFQUFFLEVBQUUsQ0FBQzt3REFBQ1csRUFBRSxFQUFFLENBQUc7b0RBQUMsQ0FBQztvREFBRVIsS0FBSyxFQUFDLENBQWdCOzt3REFBQyxDQUN4Qzt3REFBQ0ssR0FBRyxDQUFDSSxTQUFTOzs7Ozs7O2dEQUd6QkosR0FBRyxDQUFDZSxJQUFJLElBQUksQ0FBQywrRUFBS2xGLGtFQUFVO29EQUFDd0UsT0FBTyxFQUFDLENBQU87OERBQ3hDTCxHQUFHLENBQUNNLE9BQU87Ozs7O3VJQUViMUUsOERBQU07b0RBQ1Q4RSxPQUFPLE1BQU8vQyxXQUFXLENBQUNxQyxHQUFHOzs4REFDOUIsQ0FFRDs7Ozs7Ozs7Ozs7O3VDQWJtQ0EsR0FBRyxDQUFDN0IsUUFBUTs7Ozs7b0NBa0I5QyxJQUFJOzs7Ozs7Ozs7Ozs7bUJBaERvQjZCLElBQUcsQ0FBQ0ksU0FBUzs7Ozs7Z0JBb0Q3QyxJQUFJOzs7Ozs7O0FBTWpCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9xbmEuanM/NTVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnJlYWRjcnVtYnMnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWUnO1xuaW1wb3J0IFdoYXRzaG90SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1doYXRzaG90JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9Db2xsYXBzZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9tb2NrZGI6OTIzMy9hcGkvdjEvUXVlc3Rpb25zL0dldFF1ZXN0aW9ucycpXG4gICAgY29uc3QgUXVlc3Rpb25zID0gYXdhaXQgcmVzLmRhdGE7XG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL21vY2tkYjo5MjMzL2FwaS92MS9BbnN3ZXJzL0dldEFuc3dlcnMvMScpXG4gICAgY29uc3QgQW5zd2VycyA9IGF3YWl0IHJlczIuZGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgIFF1ZXN0aW9ucyAsIEFuc3dlcnMgfVxuICAgIH1cbiAgfVxuXG5jb25zdCBFeHBhbmRNb3JlID0gc3R5bGVkKChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZXhwYW5kLCAuLi5vdGhlciB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIDxJY29uQnV0dG9uIHsuLi5vdGhlcn0gLz47XG4gIH0pKCh7IHRoZW1lLCBleHBhbmQgfSkgPT4gKHtcbiAgICB0cmFuc2Zvcm06ICFleHBhbmQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICAgIH0pLFxuICB9KSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUU5BKHtRdWVzdGlvbnMsQW5zd2Vyc30pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUV4cGFuZENsaWNrID0gKCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFrZVBheW1lbnQoYW5zd2VyKSB7XG4gICAgY29uc3QganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VuZGVyd2FsbGV0aWQgOiBcIlMxMDE4NTMxOVwiLFxuICAgICAgICByZWNlaXZlcndhbGxldGlkIDogYW5zd2VyLndhbGxldGlkLFxuICAgICAgICBhbnN3ZXJpZCA6IGFuc3dlci5hbnN3ZXJpZCxcbiAgICAgICAgdG9rZW5pZCA6IFwiQ01cIiwgXG4gICAgICAgIG51bXRva2VucyA6IDEsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coanNvblN0cmluZyk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9wYXltZW50OjkyMzIvYXBpL3YxL3BheW1lbnQvcmV2ZWFsLycsIHtcbiAgICAgIGJvZHkgOiBqc29uU3RyaW5nLFxuICAgICAgbWV0aG9kIDogJ1BPU1QnLFxuICAgICAgaGVhZGVycyA6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicsXG5cbiAgICAgIH0sXG4gICAgICBtb2RlIDogJ25vLWNvcnMnLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1cyk7XG4gICAgY29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL21vY2tkYjo5MjMzL2FwaS92MS9BbnN3ZXJzL0NoYW5nZVN0YXR1cy9cIiArIGFuc3dlci5hbnN3ZXJpZClcbiAgICBjb25zb2xlLmxvZyhyZXMxLnN0YXR1cylcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMCl7IFxuICAgICAgYWxlcnQoXCJQYXltZW50IFN1Y2Nlc3NmdWxcIik7XG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxufVxuICBcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVkdUZJIFFuQSBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICBRbkEgUGF5bWVudCBTZXJ2aWNlIFxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxCcmVhZGNydW1icyBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHVuZGVybGluZT1cImhvdmVyXCJcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SG9tZUljb24gc3g9e3sgbXI6IDAuNSB9fSBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdW5kZXJsaW5lPVwiaG92ZXJcIlxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIGhyZWY9XCIvcW5hXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxXaGF0c2hvdEljb24gc3g9e3sgbXI6IDAuNSB9fSBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICAgIFF1ZXN0aW9ucyBhbmQgQW5zd2VyXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQnJlYWRjcnVtYnM+XG5cbiAgICAgIHtRdWVzdGlvbnMgPyBRdWVzdGlvbnMubWFwKCgocm93KSA9PiAoXG4gICAgICAgICAgPENhcmQgc3g9e3sgbWluV2lkdGg6IDM0NSB9fSBrZXk9IHtyb3cuc3R1ZGVudGlkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDIwIH19IGNvbG9yPVwidGV4dC5wcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAge3Jvdy50aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMS4wIH19IGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQXNrZWQgYnkge3Jvdy5zdHVkZW50aWR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICB7cm93LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgTW9kdWxlIDoge3Jvdy5tb2R1bGV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnMgZGlzYWJsZVNwYWNpbmc+XG5cbiAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZVxuICAgICAgICAgICAgICAgICAgZXhwYW5kPXtleHBhbmRlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV4cGFuZENsaWNrfVxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17ZXhwYW5kZWR9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyBtb3JlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEV4cGFuZE1vcmVJY29uIC8+XG5cbiAgICAgICAgICAgICAgICA8L0V4cGFuZE1vcmU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAge0Fuc3dlcnMgPyBBbnN3ZXJzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IG1pbldpZHRoOiAxODAgfX0ga2V5PSB7cm93LmFuc3dlcmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiAxLjAgfX0gY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEFuc3dlcmVkIGJ5IHtyb3cuc3R1ZGVudGlkfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgICAgIHtyb3cuUGFpZCA9PSAxID8gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDogPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gbWFrZVBheW1lbnQocm93KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFBheVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSkpOiBudWxsIH1cbiAgICAgIFxuICAgICAgXG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwic3R5bGVkIiwiQnJlYWRjcnVtYnMiLCJMaW5rIiwiSG9tZUljb24iLCJXaGF0c2hvdEljb24iLCJIZWFkIiwiQ29udGFpbmVyIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwidXNlUm91dGVyIiwiRXhwYW5kTW9yZUljb24iLCJDb2xsYXBzZSIsIkljb25CdXR0b24iLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImdldCIsIlF1ZXN0aW9ucyIsImRhdGEiLCJyZXMyIiwiQW5zd2VycyIsInByb3BzIiwiRXhwYW5kTW9yZSIsImV4cGFuZCIsIm90aGVyIiwidGhlbWUiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsIlFOQSIsInJvdXRlciIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJ1c2VTdGF0ZSIsImhhbmRsZUV4cGFuZENsaWNrIiwibWFrZVBheW1lbnQiLCJhbnN3ZXIiLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbmRlcndhbGxldGlkIiwicmVjZWl2ZXJ3YWxsZXRpZCIsIndhbGxldGlkIiwiYW5zd2VyaWQiLCJ0b2tlbmlkIiwibnVtdG9rZW5zIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiYm9keSIsIm1ldGhvZCIsImhlYWRlcnMiLCJtb2RlIiwic3RhdHVzIiwicmVzMSIsImFsZXJ0IiwicHVzaCIsImNvbXBvbmVudCIsIm1heFdpZHRoIiwidGl0bGUiLCJoMSIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWwiLCJ1bmRlcmxpbmUiLCJzeCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJocmVmIiwibXIiLCJmb250U2l6ZSIsIm1hcCIsInJvdyIsIm1pbldpZHRoIiwiZ3V0dGVyQm90dG9tIiwibWIiLCJzdHVkZW50aWQiLCJ2YXJpYW50IiwiY29udGVudCIsImJyIiwibW9kdWxlIiwiZGlzYWJsZVNwYWNpbmciLCJvbkNsaWNrIiwiYXJpYS1leHBhbmRlZCIsImluIiwidGltZW91dCIsInVubW91bnRPbkV4aXQiLCJQYWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/qna.js\n");

/***/ }),

/***/ "@mui/icons-material/ExpandMore":
/*!*************************************************!*\
  !*** external "@mui/icons-material/ExpandMore" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

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

/***/ "@mui/material/Collapse":
/*!*****************************************!*\
  !*** external "@mui/material/Collapse" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

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

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

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