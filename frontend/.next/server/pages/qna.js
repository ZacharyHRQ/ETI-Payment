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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ QNA)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"@mui/material/Breadcrumbs\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Home */ \"@mui/icons-material/Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Whatshot */ \"@mui/icons-material/Whatshot\");\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"@mui/icons-material/ExpandMore\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Collapse */ \"@mui/material/Collapse\");\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nasync function getStaticProps() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Questions/GetQuestions');\n    const Questions = await res.data;\n    const res2 = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Answers/GetAnswers/1');\n    const Answers = await res2.data;\n    console.log(res2.data);\n    return {\n        props: {\n            Questions,\n            Answers\n        }\n    };\n}\nconst ExpandMore = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((props)=>{\n    const { expand , ...other } = props;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default()), {\n        ...other\n    }, void 0, false, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 34,\n        columnNumber: 12\n    }, undefined));\n})(({ theme , expand  })=>({\n        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',\n        marginLeft: 'auto',\n        transition: theme.transitions.create('transform', {\n            duration: theme.transitions.duration.shortest\n        })\n    })\n);\nfunction QNA({ Questions , Answers  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();\n    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const handleExpandClick = ()=>{\n        setExpanded(!expanded);\n    };\n    async function makePayment(answer) {\n        const jsonString = JSON.stringify({\n            senderwalletid: \"S10185319\",\n            receiverwalletid: answer.studentid,\n            answerid: answer.answerid,\n            tokenid: \"CM\",\n            numtokens: 1\n        });\n        console.log(answer.Paid);\n        console.log(jsonString);\n        const res = await fetch('http://localhost:9232/api/v1/payment/reveal/', {\n            body: jsonString,\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            mode: 'no-cors'\n        });\n        console.log(res.status);\n        const res1 = await fetch(\"http://localhost:9233/api/v1/Answers/ChangeStatus/\" + answer.answerid, {\n            method: 'POST'\n        });\n        console.log(res1.status);\n        if (res.status === 0) {\n            alert(\"Payment Successful\");\n            router.push('/');\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"EduFI QnA page\"\n                }, void 0, false, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"QnA Payment Service\"\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default()), {\n                \"aria-label\": \"breadcrumb\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            \"Home\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/qna\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            \"Questions and Answer\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            Questions ? Questions.map((row1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                    sx: {\n                        minWidth: 345\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        fontSize: 20\n                                    },\n                                    color: \"text.primary\",\n                                    gutterBottom: true,\n                                    children: row1.title\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        mb: 1\n                                    },\n                                    color: \"text.secondary\",\n                                    children: [\n                                        \"Asked by \",\n                                        row1.studentid\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    variant: \"body2\",\n                                    children: [\n                                        row1.content,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 19\n                                        }, this),\n                                        \"Module : \",\n                                        row1.module\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default()), {\n                            disableSpacing: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExpandMore, {\n                                expand: expanded,\n                                onClick: handleExpandClick,\n                                \"aria-expanded\": expanded,\n                                \"aria-label\": \"show more\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 129,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default()), {\n                            in: expanded,\n                            timeout: \"auto\",\n                            unmountOnExit: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                children: Answers ? Answers.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                        sx: {\n                                            minWidth: 180\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    sx: {\n                                                        mb: 1\n                                                    },\n                                                    color: \"text.secondary\",\n                                                    children: [\n                                                        \"Answered by \",\n                                                        row.studentid\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 145,\n                                                    columnNumber: 23\n                                                }, this),\n                                                row.Paid == 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    variant: \"body2\",\n                                                    children: row.content\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 149,\n                                                    columnNumber: 41\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                                    onClick: ()=>makePayment(row)\n                                                    ,\n                                                    children: \"Pay\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 152,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 144,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, row.answerid, false, {\n                                        fileName: \"/app/pages/qna.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 21\n                                    }, this)\n                                ) : null\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 141,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 140,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, row1.studentid, true, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this)\n            ) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVuRCxRQUFROzRCQUFFb0QsT0FBTyxFQUFDLENBQU07NEJBQUNDLGFBQWE7a0hBQ2pEbkYsbUVBQVc7MENBQ1RhLE9BQU8sR0FBR0EsT0FBTyxDQUFDd0QsR0FBRyxFQUFFQyxHQUFHLCtFQUN0QnhFLDREQUFJO3dDQUFDZ0UsRUFBRSxFQUFFLENBQUM7NENBQUNTLFFBQVEsRUFBRSxHQUFHO3dDQUFDLENBQUM7OEhBQzFCdkUsbUVBQVc7OzRIQUNURSxrRUFBVTtvREFBQzRELEVBQUUsRUFBRSxDQUFDO3dEQUFDVyxFQUFFLEVBQUUsQ0FBRztvREFBQyxDQUFDO29EQUFFUixLQUFLLEVBQUMsQ0FBZ0I7O3dEQUFDLENBQ3hDO3dEQUFDSyxHQUFHLENBQUM3QixTQUFTOzs7Ozs7O2dEQUd6QjZCLEdBQUcsQ0FBQ3pCLElBQUksSUFBSSxDQUFDLCtFQUFLM0Msa0VBQVU7b0RBQUN3RSxPQUFPLEVBQUMsQ0FBTzs4REFDeENKLEdBQUcsQ0FBQ0ssT0FBTzs7Ozs7dUlBRWIxRSw4REFBTTtvREFDVDhFLE9BQU8sTUFBTzdDLFdBQVcsQ0FBQ29DLEdBQUc7OzhEQUM5QixDQUVEOzs7Ozs7Ozs7Ozs7dUNBYm1DQSxHQUFHLENBQUM1QixRQUFROzs7OztvQ0FrQjlDLElBQUk7Ozs7Ozs7Ozs7OzttQkFoRG9CNEIsSUFBRyxDQUFDN0IsU0FBUzs7Ozs7Z0JBb0Q3QyxJQUFJOzs7Ozs7O0FBTWpCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9xbmEuanM/NTVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnJlYWRjcnVtYnMnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWUnO1xuaW1wb3J0IFdoYXRzaG90SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1doYXRzaG90JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9Db2xsYXBzZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9tb2NrZGI6OTIzMy9hcGkvdjEvUXVlc3Rpb25zL0dldFF1ZXN0aW9ucycpXG4gICAgY29uc3QgUXVlc3Rpb25zID0gYXdhaXQgcmVzLmRhdGE7XG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL21vY2tkYjo5MjMzL2FwaS92MS9BbnN3ZXJzL0dldEFuc3dlcnMvMScpXG4gICAgY29uc3QgQW5zd2VycyA9IGF3YWl0IHJlczIuZGF0YTtcbiAgICBjb25zb2xlLmxvZyhyZXMyLmRhdGEpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7ICBRdWVzdGlvbnMgLCBBbnN3ZXJzIH1cbiAgICB9XG4gIH1cblxuY29uc3QgRXhwYW5kTW9yZSA9IHN0eWxlZCgocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGV4cGFuZCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuICAgIHJldHVybiA8SWNvbkJ1dHRvbiB7Li4ub3RoZXJ9IC8+O1xuICB9KSgoeyB0aGVtZSwgZXhwYW5kIH0pID0+ICh7XG4gICAgdHJhbnNmb3JtOiAhZXhwYW5kID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDE4MGRlZyknLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdCxcbiAgICB9KSxcbiAgfSkpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFFOQSh7UXVlc3Rpb25zLEFuc3dlcnN9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVFeHBhbmRDbGljayA9ICgpID0+IHtcbiAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG1ha2VQYXltZW50KGFuc3dlcikge1xuICAgIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHNlbmRlcndhbGxldGlkIDogXCJTMTAxODUzMTlcIixcbiAgICAgICAgcmVjZWl2ZXJ3YWxsZXRpZCA6IGFuc3dlci5zdHVkZW50aWQsXG4gICAgICAgIGFuc3dlcmlkIDogYW5zd2VyLmFuc3dlcmlkLFxuICAgICAgICB0b2tlbmlkIDogXCJDTVwiLCBcbiAgICAgICAgbnVtdG9rZW5zIDogMSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhhbnN3ZXIuUGFpZClcbiAgICBjb25zb2xlLmxvZyhqc29uU3RyaW5nKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MjMyL2FwaS92MS9wYXltZW50L3JldmVhbC8nLCB7XG4gICAgICBib2R5IDoganNvblN0cmluZyxcbiAgICAgIG1ldGhvZCA6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnMgOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXG4gICAgICB9LFxuICAgICAgbW9kZSA6ICduby1jb3JzJyxcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlcy5zdGF0dXMpO1xuICAgIGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6OTIzMy9hcGkvdjEvQW5zd2Vycy9DaGFuZ2VTdGF0dXMvXCIgKyBhbnN3ZXIuYW5zd2VyaWQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzMS5zdGF0dXMpXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDApeyBcbiAgICAgIGFsZXJ0KFwiUGF5bWVudCBTdWNjZXNzZnVsXCIpO1xuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cbn1cbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FZHVGSSBRbkEgcGFnZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgUW5BIFBheW1lbnQgU2VydmljZSBcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8QnJlYWRjcnVtYnMgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB1bmRlcmxpbmU9XCJob3ZlclwiXG4gICAgICAgICAgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICA+XG4gICAgICAgICAgPEhvbWVJY29uIHN4PXt7IG1yOiAwLjUgfX0gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHVuZGVybGluZT1cImhvdmVyXCJcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBocmVmPVwiL3FuYVwiXG4gICAgICAgID5cbiAgICAgICAgICA8V2hhdHNob3RJY29uIHN4PXt7IG1yOiAwLjUgfX0gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICBRdWVzdGlvbnMgYW5kIEFuc3dlclxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0JyZWFkY3J1bWJzPlxuXG4gICAgICB7UXVlc3Rpb25zID8gUXVlc3Rpb25zLm1hcCgoKHJvdykgPT4gKFxuICAgICAgICAgIDxDYXJkIHN4PXt7IG1pbldpZHRoOiAzNDUgfX0ga2V5PSB7cm93LnN0dWRlbnRpZH0+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAyMCB9fSBjb2xvcj1cInRleHQucHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICAgIHtyb3cudGl0bGV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuMCB9fSBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIEFza2VkIGJ5IHtyb3cuc3R1ZGVudGlkfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAge3Jvdy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgIE1vZHVsZSA6IHtyb3cubW9kdWxlfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxuXG4gICAgICAgICAgICAgICAgPEV4cGFuZE1vcmVcbiAgICAgICAgICAgICAgICAgIGV4cGFuZD17ZXhwYW5kZWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFeHBhbmRDbGlja31cbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxFeHBhbmRNb3JlSWNvbiAvPlxuXG4gICAgICAgICAgICAgICAgPC9FeHBhbmRNb3JlPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17ZXhwYW5kZWR9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIHtBbnN3ZXJzID8gQW5zd2Vycy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyBtaW5XaWR0aDogMTgwIH19IGtleT0ge3Jvdy5hbnN3ZXJpZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMS4wIH19IGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICBBbnN3ZXJlZCBieSB7cm93LnN0dWRlbnRpZH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7cm93LlBhaWQgPT0gMSA/ICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA6IDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IG1ha2VQYXltZW50KHJvdyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQYXlcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICApKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpKTogbnVsbCB9XG4gICAgICBcbiAgICAgIFxuXG4gICAgPC9Db250YWluZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsInN0eWxlZCIsIkJyZWFkY3J1bWJzIiwiTGluayIsIkhvbWVJY29uIiwiV2hhdHNob3RJY29uIiwiSGVhZCIsIkNvbnRhaW5lciIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsInVzZVJvdXRlciIsIkV4cGFuZE1vcmVJY29uIiwiQ29sbGFwc2UiLCJJY29uQnV0dG9uIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJnZXQiLCJRdWVzdGlvbnMiLCJkYXRhIiwicmVzMiIsIkFuc3dlcnMiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJFeHBhbmRNb3JlIiwiZXhwYW5kIiwib3RoZXIiLCJ0aGVtZSIsInRyYW5zZm9ybSIsIm1hcmdpbkxlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJkdXJhdGlvbiIsInNob3J0ZXN0IiwiUU5BIiwicm91dGVyIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsInVzZVN0YXRlIiwiaGFuZGxlRXhwYW5kQ2xpY2siLCJtYWtlUGF5bWVudCIsImFuc3dlciIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZGVyd2FsbGV0aWQiLCJyZWNlaXZlcndhbGxldGlkIiwic3R1ZGVudGlkIiwiYW5zd2VyaWQiLCJ0b2tlbmlkIiwibnVtdG9rZW5zIiwiUGFpZCIsImZldGNoIiwiYm9keSIsIm1ldGhvZCIsImhlYWRlcnMiLCJtb2RlIiwic3RhdHVzIiwicmVzMSIsImFsZXJ0IiwicHVzaCIsImNvbXBvbmVudCIsIm1heFdpZHRoIiwidGl0bGUiLCJoMSIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWwiLCJ1bmRlcmxpbmUiLCJzeCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJocmVmIiwibXIiLCJmb250U2l6ZSIsIm1hcCIsInJvdyIsIm1pbldpZHRoIiwiZ3V0dGVyQm90dG9tIiwibWIiLCJ2YXJpYW50IiwiY29udGVudCIsImJyIiwibW9kdWxlIiwiZGlzYWJsZVNwYWNpbmciLCJvbkNsaWNrIiwiYXJpYS1leHBhbmRlZCIsImluIiwidGltZW91dCIsInVubW91bnRPbkV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/qna.js\n");

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