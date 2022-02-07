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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ QNA)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"@mui/material/Breadcrumbs\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Home */ \"@mui/icons-material/Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Whatshot */ \"@mui/icons-material/Whatshot\");\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"@mui/icons-material/ExpandMore\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Collapse */ \"@mui/material/Collapse\");\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nasync function getStaticProps() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Questions/GetQuestions');\n    const Questions = await res.data;\n    const res2 = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Answers/GetAnswers/1');\n    const Answers = await res2.data;\n    console.log(res2.data);\n    return {\n        props: {\n            Questions,\n            Answers\n        }\n    };\n}\nconst ExpandMore = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((props)=>{\n    const { expand , ...other } = props;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default()), {\n        ...other\n    }, void 0, false, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 34,\n        columnNumber: 12\n    }, undefined));\n})(({ theme , expand  })=>({\n        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',\n        marginLeft: 'auto',\n        transition: theme.transitions.create('transform', {\n            duration: theme.transitions.duration.shortest\n        })\n    })\n);\nfunction QNA({ Questions , Answers  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();\n    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const handleExpandClick = ()=>{\n        setExpanded(!expanded);\n    };\n    async function makePayment(answer) {\n        const jsonString = JSON.stringify({\n            senderwalletid: \"S10185319\",\n            receiverwalletid: answer.studentid,\n            answerid: answer.answerid,\n            tokenid: \"CM\",\n            numtokens: 1\n        });\n        console.log(jsonString);\n        const res = await fetch('http://localhost:9232/api/v1/payment/reveal/', {\n            method: \"POST\",\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: jsonString,\n            mode: 'no-cors'\n        });\n        console.log(res.status);\n        const res1 = await fetch(\"http://localhost:9233/api/v1/Answers/ChangeStatus/\" + answer.answerid, {\n            method: 'POST'\n        });\n        console.log(res1.status);\n        if (res.status === 200) {\n            alert(\"Payment Successful\");\n            router.push('/');\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"EduFI QnA page\"\n                }, void 0, false, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"QnA Payment Service\"\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default()), {\n                \"aria-label\": \"breadcrumb\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            \"Home\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/qna\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            \"Questions and Answer\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this),\n            Questions ? Questions.map((row1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                    sx: {\n                        minWidth: 345\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        fontSize: 20\n                                    },\n                                    color: \"text.primary\",\n                                    gutterBottom: true,\n                                    children: row1.title\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        mb: 1\n                                    },\n                                    color: \"text.secondary\",\n                                    children: [\n                                        \"Asked by \",\n                                        row1.studentid\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    variant: \"body2\",\n                                    children: [\n                                        row1.content,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 19\n                                        }, this),\n                                        \"Module : \",\n                                        row1.module\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default()), {\n                            disableSpacing: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExpandMore, {\n                                expand: expanded,\n                                onClick: handleExpandClick,\n                                \"aria-expanded\": expanded,\n                                \"aria-label\": \"show more\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 127,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default()), {\n                            in: expanded,\n                            timeout: \"auto\",\n                            unmountOnExit: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                children: Answers ? Answers.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                        sx: {\n                                            minWidth: 180\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    sx: {\n                                                        mb: 1\n                                                    },\n                                                    color: \"text.secondary\",\n                                                    children: [\n                                                        \"Answered by \",\n                                                        row.studentid\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 143,\n                                                    columnNumber: 23\n                                                }, this),\n                                                row.paid === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    variant: \"body2\",\n                                                    children: row.content\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 147,\n                                                    columnNumber: 42\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                                    onClick: ()=>makePayment(row)\n                                                    ,\n                                                    children: \"Pay\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 150,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, row.answerid, false, {\n                                        fileName: \"/app/pages/qna.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 21\n                                    }, this)\n                                ) : null\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 139,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 138,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, row1.studentid, true, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, this)\n            ) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqRGxGLG1FQUFXOzBDQUNUYSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3VELEdBQUcsRUFBRUMsR0FBRywrRUFDdEJ2RSw0REFBSTt3Q0FBQytELEVBQUUsRUFBRSxDQUFDOzRDQUFDUyxRQUFRLEVBQUUsR0FBRzt3Q0FBQyxDQUFDOzhIQUMxQnRFLG1FQUFXOzs0SEFDVEUsa0VBQVU7b0RBQUMyRCxFQUFFLEVBQUUsQ0FBQzt3REFBQ1csRUFBRSxFQUFFLENBQUc7b0RBQUMsQ0FBQztvREFBRVIsS0FBSyxFQUFDLENBQWdCOzt3REFBQyxDQUN4Qzt3REFBQ0ssR0FBRyxDQUFDNUIsU0FBUzs7Ozs7OztnREFHekI0QixHQUFHLENBQUNjLElBQUksS0FBSyxDQUFDLCtFQUFLakYsa0VBQVU7b0RBQUN1RSxPQUFPLEVBQUMsQ0FBTzs4REFDekNKLEdBQUcsQ0FBQ0ssT0FBTzs7Ozs7dUlBRWJ6RSw4REFBTTtvREFDVDZFLE9BQU8sTUFBTzVDLFdBQVcsQ0FBQ21DLEdBQUc7OzhEQUM5QixDQUVEOzs7Ozs7Ozs7Ozs7dUNBYm1DQSxHQUFHLENBQUMzQixRQUFROzs7OztvQ0FrQjlDLElBQUk7Ozs7Ozs7Ozs7OzttQkFoRG9CMkIsSUFBRyxDQUFDNUIsU0FBUzs7Ozs7Z0JBb0Q3QyxJQUFJOzs7Ozs7O0FBTWpCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9xbmEuanM/NTVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnJlYWRjcnVtYnMnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWUnO1xuaW1wb3J0IFdoYXRzaG90SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1doYXRzaG90JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9Db2xsYXBzZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9tb2NrZGI6OTIzMy9hcGkvdjEvUXVlc3Rpb25zL0dldFF1ZXN0aW9ucycpXG4gICAgY29uc3QgUXVlc3Rpb25zID0gYXdhaXQgcmVzLmRhdGE7XG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL21vY2tkYjo5MjMzL2FwaS92MS9BbnN3ZXJzL0dldEFuc3dlcnMvMScpXG4gICAgY29uc3QgQW5zd2VycyA9IGF3YWl0IHJlczIuZGF0YTtcbiAgICBjb25zb2xlLmxvZyhyZXMyLmRhdGEpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7ICBRdWVzdGlvbnMgLCBBbnN3ZXJzIH1cbiAgICB9XG4gIH1cblxuY29uc3QgRXhwYW5kTW9yZSA9IHN0eWxlZCgocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGV4cGFuZCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuICAgIHJldHVybiA8SWNvbkJ1dHRvbiB7Li4ub3RoZXJ9IC8+O1xuICB9KSgoeyB0aGVtZSwgZXhwYW5kIH0pID0+ICh7XG4gICAgdHJhbnNmb3JtOiAhZXhwYW5kID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDE4MGRlZyknLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdCxcbiAgICB9KSxcbiAgfSkpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFFOQSh7UXVlc3Rpb25zLEFuc3dlcnN9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVFeHBhbmRDbGljayA9ICgpID0+IHtcbiAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG1ha2VQYXltZW50KGFuc3dlcikge1xuICAgIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHNlbmRlcndhbGxldGlkIDogXCJTMTAxODUzMTlcIixcbiAgICAgICAgcmVjZWl2ZXJ3YWxsZXRpZCA6IGFuc3dlci5zdHVkZW50aWQsXG4gICAgICAgIGFuc3dlcmlkIDogYW5zd2VyLmFuc3dlcmlkLFxuICAgICAgICB0b2tlbmlkIDogXCJDTVwiLCBcbiAgICAgICAgbnVtdG9rZW5zIDogMSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhqc29uU3RyaW5nKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo5MjMyL2FwaS92MS9wYXltZW50L3JldmVhbC8nLCB7XG4gICAgICBtZXRob2QgOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnMgOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keSA6IGpzb25TdHJpbmcsXG4gICAgICBtb2RlIDogJ25vLWNvcnMnLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1cyk7XG4gICAgY29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo5MjMzL2FwaS92MS9BbnN3ZXJzL0NoYW5nZVN0YXR1cy9cIiArIGFuc3dlci5hbnN3ZXJpZCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhyZXMxLnN0YXR1cylcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKXsgXG4gICAgICBhbGVydChcIlBheW1lbnQgU3VjY2Vzc2Z1bFwiKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG59XG4gIFxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RWR1RkkgUW5BIHBhZ2U8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIFFuQSBQYXltZW50IFNlcnZpY2UgXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdW5kZXJsaW5lPVwiaG92ZXJcIlxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIb21lSWNvbiBzeD17eyBtcjogMC41IH19IGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB1bmRlcmxpbmU9XCJob3ZlclwiXG4gICAgICAgICAgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgaHJlZj1cIi9xbmFcIlxuICAgICAgICA+XG4gICAgICAgICAgPFdoYXRzaG90SWNvbiBzeD17eyBtcjogMC41IH19IGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgUXVlc3Rpb25zIGFuZCBBbnN3ZXJcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9CcmVhZGNydW1icz5cblxuICAgICAge1F1ZXN0aW9ucyA/IFF1ZXN0aW9ucy5tYXAoKChyb3cpID0+IChcbiAgICAgICAgICA8Q2FyZCBzeD17eyBtaW5XaWR0aDogMzQ1IH19IGtleT0ge3Jvdy5zdHVkZW50aWR9PlxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMjAgfX0gY29sb3I9XCJ0ZXh0LnByaW1hcnlcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgICAgICB7cm93LnRpdGxlfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiAxLjAgfX0gY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBBc2tlZCBieSB7cm93LnN0dWRlbnRpZH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgIHtyb3cuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICBNb2R1bGUgOiB7cm93Lm1vZHVsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBkaXNhYmxlU3BhY2luZz5cblxuICAgICAgICAgICAgICAgIDxFeHBhbmRNb3JlXG4gICAgICAgICAgICAgICAgICBleHBhbmQ9e2V4cGFuZGVkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXhwYW5kQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtleHBhbmRlZH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZUljb24gLz5cblxuICAgICAgICAgICAgICAgIDwvRXhwYW5kTW9yZT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICA8Q29sbGFwc2UgaW49e2V4cGFuZGVkfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICB7QW5zd2VycyA/IEFuc3dlcnMubWFwKChyb3cpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc3g9e3sgbWluV2lkdGg6IDE4MCB9fSBrZXk9IHtyb3cuYW5zd2VyaWR9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuMCB9fSBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgQW5zd2VyZWQgYnkge3Jvdy5zdHVkZW50aWR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgICAge3Jvdy5wYWlkID09PSAxID8gIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDogPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gbWFrZVBheW1lbnQocm93KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFBheVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSkpOiBudWxsIH1cbiAgICAgIFxuICAgICAgXG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwic3R5bGVkIiwiQnJlYWRjcnVtYnMiLCJMaW5rIiwiSG9tZUljb24iLCJXaGF0c2hvdEljb24iLCJIZWFkIiwiQ29udGFpbmVyIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwidXNlUm91dGVyIiwiRXhwYW5kTW9yZUljb24iLCJDb2xsYXBzZSIsIkljb25CdXR0b24iLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImdldCIsIlF1ZXN0aW9ucyIsImRhdGEiLCJyZXMyIiwiQW5zd2VycyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIkV4cGFuZE1vcmUiLCJleHBhbmQiLCJvdGhlciIsInRoZW1lIiwidHJhbnNmb3JtIiwibWFyZ2luTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImR1cmF0aW9uIiwic2hvcnRlc3QiLCJRTkEiLCJyb3V0ZXIiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwidXNlU3RhdGUiLCJoYW5kbGVFeHBhbmRDbGljayIsIm1ha2VQYXltZW50IiwiYW5zd2VyIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kZXJ3YWxsZXRpZCIsInJlY2VpdmVyd2FsbGV0aWQiLCJzdHVkZW50aWQiLCJhbnN3ZXJpZCIsInRva2VuaWQiLCJudW10b2tlbnMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwibW9kZSIsInN0YXR1cyIsInJlczEiLCJhbGVydCIsInB1c2giLCJjb21wb25lbnQiLCJtYXhXaWR0aCIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwidW5kZXJsaW5lIiwic3giLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiaHJlZiIsIm1yIiwiZm9udFNpemUiLCJtYXAiLCJyb3ciLCJtaW5XaWR0aCIsImd1dHRlckJvdHRvbSIsIm1iIiwidmFyaWFudCIsImNvbnRlbnQiLCJiciIsIm1vZHVsZSIsImRpc2FibGVTcGFjaW5nIiwib25DbGljayIsImFyaWEtZXhwYW5kZWQiLCJpbiIsInRpbWVvdXQiLCJ1bm1vdW50T25FeGl0IiwicGFpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/qna.js\n");

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