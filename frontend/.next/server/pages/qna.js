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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ QNA)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"@mui/material/Breadcrumbs\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Home */ \"@mui/icons-material/Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Whatshot */ \"@mui/icons-material/Whatshot\");\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"@mui/icons-material/ExpandMore\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Collapse */ \"@mui/material/Collapse\");\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nasync function getStaticProps() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Questions/GetQuestions');\n    const Questions = await res.data;\n    const res2 = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Answers/GetAnswers/1');\n    const Answers = await res2.data;\n    return {\n        props: {\n            Questions,\n            Answers\n        }\n    };\n}\nconst ExpandMore = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((props)=>{\n    const { expand , ...other } = props;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default()), {\n        ...other\n    }, void 0, false, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 33,\n        columnNumber: 12\n    }, undefined));\n})(({ theme , expand  })=>({\n        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',\n        marginLeft: 'auto',\n        transition: theme.transitions.create('transform', {\n            duration: theme.transitions.duration.shortest\n        })\n    })\n);\nfunction QNA({ Questions , Answers  }) {\n    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const handleExpandClick = ()=>{\n        setExpanded(!expanded);\n    };\n    async function checkValid(aid) {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://transaction:9231/api/v1/transactions/S10185319');\n        const transactions = await res.data;\n        for(var i = 0; i < transactions.length; i++){\n            if (transactions[i].answerid === aid) {\n                return true;\n            }\n        }\n        return false;\n    }\n    async function makePayment(answer) {\n        const jsonString = JSON.stringify({\n            senderwalletid: S10185319,\n            receiverwalletid: answer.walletid,\n            answerid: answer.answerid,\n            tokenid: \"CM\",\n            numtokens: 1\n        });\n        console.log(jsonString);\n        const res = await fetch('http://payment:9232/api/v1/payment/reveal/', {\n            body: jsonString,\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            mode: 'no-cors'\n        });\n        console.log(res.status);\n        if (res.status === 0) {\n            alert(\"Payment Successful\");\n            router.push('/');\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"EduFI QnA page\"\n                }, void 0, false, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"QnA Payment Service\"\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default()), {\n                \"aria-label\": \"breadcrumb\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            \"Home\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/qna\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this),\n                            \"Questions and Answer\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            Questions ? Questions.map((row1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                    sx: {\n                        minWidth: 345\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        fontSize: 20\n                                    },\n                                    color: \"text.primary\",\n                                    gutterBottom: true,\n                                    children: row1.title\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        mb: 1\n                                    },\n                                    color: \"text.secondary\",\n                                    children: [\n                                        \"Asked by \",\n                                        row1.studentid\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    variant: \"body2\",\n                                    children: [\n                                        row1.content,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 129,\n                                            columnNumber: 19\n                                        }, this),\n                                        \"Module : \",\n                                        row1.module\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default()), {\n                            disableSpacing: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExpandMore, {\n                                expand: expanded,\n                                onClick: handleExpandClick,\n                                \"aria-expanded\": expanded,\n                                \"aria-label\": \"show more\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 141,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 135,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default()), {\n                            in: expanded,\n                            timeout: \"auto\",\n                            unmountOnExit: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                children: Answers ? Answers.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                        sx: {\n                                            minWidth: 180\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    sx: {\n                                                        mb: 1\n                                                    },\n                                                    color: \"text.secondary\",\n                                                    children: [\n                                                        \"Answered by \",\n                                                        row.studentid\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 151,\n                                                    columnNumber: 23\n                                                }, this),\n                                                checkValid(row.answerid) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    variant: \"body2\",\n                                                    children: row.content\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 155,\n                                                    columnNumber: 52\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                                    onClick: ()=>makePayment(row)\n                                                    ,\n                                                    children: \"Request\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 158,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 150,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, row.answerid, false, {\n                                        fileName: \"/app/pages/qna.js\",\n                                        lineNumber: 149,\n                                        columnNumber: 21\n                                    }, this)\n                                ) : null\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 147,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 146,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, row1.studentid, true, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, this)\n            ) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDdkJxQyxDQUFVLGFBQUMsQ0FBVztzSEFFdkI1RCx3RUFBYzs7Ozs7Ozs7Ozs7Ozs7O29HQUtsQkMsZ0VBQVE7NEJBQUNpRixFQUFFLEVBQUUzRCxRQUFROzRCQUFFNEQsT0FBTyxFQUFDLENBQU07NEJBQUNDLGFBQWE7a0hBQ2pEeEYsbUVBQVc7MENBQ1RhLE9BQU8sR0FBR0EsT0FBTyxDQUFDNEQsR0FBRyxFQUFFQyxHQUFHLCtFQUN0QjVFLDREQUFJO3dDQUFDb0UsRUFBRSxFQUFFLENBQUM7NENBQUNTLFFBQVEsRUFBRSxHQUFHO3dDQUFDLENBQUM7OEhBQzFCM0UsbUVBQVc7OzRIQUNURSxrRUFBVTtvREFBQ2dFLEVBQUUsRUFBRSxDQUFDO3dEQUFDVyxFQUFFLEVBQUUsQ0FBRztvREFBQyxDQUFDO29EQUFFUixLQUFLLEVBQUMsQ0FBZ0I7O3dEQUFDLENBQ3hDO3dEQUFDSyxHQUFHLENBQUNJLFNBQVM7Ozs7Ozs7Z0RBR3pCL0MsVUFBVSxDQUFDMkMsR0FBRyxDQUFDdEMsUUFBUSxnRkFBTWxDLGtFQUFVO29EQUFDNkUsT0FBTyxFQUFDLENBQU87OERBQ25ETCxHQUFHLENBQUNNLE9BQU87Ozs7O3VJQUViL0UsOERBQU07b0RBQ1RtRixPQUFPLE1BQU8vQyxXQUFXLENBQUNxQyxHQUFHOzs4REFDOUIsQ0FFRDs7Ozs7Ozs7Ozs7O3VDQWJtQ0EsR0FBRyxDQUFDdEMsUUFBUTs7Ozs7b0NBa0I5QyxJQUFJOzs7Ozs7Ozs7Ozs7bUJBaERvQnNDLElBQUcsQ0FBQ0ksU0FBUzs7Ozs7Z0JBb0Q3QyxJQUFJOzs7Ozs7O0FBTWpCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9xbmEuanM/NTVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnJlYWRjcnVtYnMnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWUnO1xuaW1wb3J0IFdoYXRzaG90SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1doYXRzaG90JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9Db2xsYXBzZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9tb2NrZGI6OTIzMy9hcGkvdjEvUXVlc3Rpb25zL0dldFF1ZXN0aW9ucycpXG4gICAgY29uc3QgUXVlc3Rpb25zID0gYXdhaXQgcmVzLmRhdGE7XG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL21vY2tkYjo5MjMzL2FwaS92MS9BbnN3ZXJzL0dldEFuc3dlcnMvMScpXG4gICAgY29uc3QgQW5zd2VycyA9IGF3YWl0IHJlczIuZGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgIFF1ZXN0aW9ucyAsIEFuc3dlcnMgfVxuICAgIH1cbiAgfVxuXG5jb25zdCBFeHBhbmRNb3JlID0gc3R5bGVkKChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZXhwYW5kLCAuLi5vdGhlciB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIDxJY29uQnV0dG9uIHsuLi5vdGhlcn0gLz47XG4gIH0pKCh7IHRoZW1lLCBleHBhbmQgfSkgPT4gKHtcbiAgICB0cmFuc2Zvcm06ICFleHBhbmQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICAgIH0pLFxuICB9KSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUU5BKHtRdWVzdGlvbnMsQW5zd2Vyc30pIHtcblxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBjaGVja1ZhbGlkKGFpZCl7IFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL3RyYW5zYWN0aW9uOjkyMzEvYXBpL3YxL3RyYW5zYWN0aW9ucy9TMTAxODUzMTknKVxuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IHJlcy5kYXRhO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHJhbnNhY3Rpb25zW2ldLmFuc3dlcmlkID09PSBhaWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFrZVBheW1lbnQoYW5zd2VyKSB7XG4gICAgY29uc3QganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VuZGVyd2FsbGV0aWQgOiBTMTAxODUzMTksXG4gICAgICAgIHJlY2VpdmVyd2FsbGV0aWQgOiBhbnN3ZXIud2FsbGV0aWQsXG4gICAgICAgIGFuc3dlcmlkIDogYW5zd2VyLmFuc3dlcmlkLFxuICAgICAgICB0b2tlbmlkIDogXCJDTVwiLCBcbiAgICAgICAgbnVtdG9rZW5zIDogMSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhqc29uU3RyaW5nKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL3BheW1lbnQ6OTIzMi9hcGkvdjEvcGF5bWVudC9yZXZlYWwvJywge1xuICAgICAgYm9keSA6IGpzb25TdHJpbmcsXG4gICAgICBtZXRob2QgOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzIDoge1xuICAgICAgICAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJyxcblxuICAgICAgfSxcbiAgICAgIG1vZGUgOiAnbm8tY29ycycsXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKTtcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMCl7IFxuICAgICAgYWxlcnQoXCJQYXltZW50IFN1Y2Nlc3NmdWxcIik7XG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxufVxuICBcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVkdUZJIFFuQSBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICBRbkEgUGF5bWVudCBTZXJ2aWNlIFxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxCcmVhZGNydW1icyBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHVuZGVybGluZT1cImhvdmVyXCJcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SG9tZUljb24gc3g9e3sgbXI6IDAuNSB9fSBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdW5kZXJsaW5lPVwiaG92ZXJcIlxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIGhyZWY9XCIvcW5hXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxXaGF0c2hvdEljb24gc3g9e3sgbXI6IDAuNSB9fSBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICAgIFF1ZXN0aW9ucyBhbmQgQW5zd2VyXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQnJlYWRjcnVtYnM+XG5cbiAgICAgIHtRdWVzdGlvbnMgPyBRdWVzdGlvbnMubWFwKCgocm93KSA9PiAoXG4gICAgICAgICAgPENhcmQgc3g9e3sgbWluV2lkdGg6IDM0NSB9fSBrZXk9IHtyb3cuc3R1ZGVudGlkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDIwIH19IGNvbG9yPVwidGV4dC5wcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAge3Jvdy50aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMS4wIH19IGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQXNrZWQgYnkge3Jvdy5zdHVkZW50aWR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICB7cm93LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgTW9kdWxlIDoge3Jvdy5tb2R1bGV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnMgZGlzYWJsZVNwYWNpbmc+XG5cbiAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZVxuICAgICAgICAgICAgICAgICAgZXhwYW5kPXtleHBhbmRlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV4cGFuZENsaWNrfVxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17ZXhwYW5kZWR9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyBtb3JlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEV4cGFuZE1vcmVJY29uIC8+XG5cbiAgICAgICAgICAgICAgICA8L0V4cGFuZE1vcmU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAge0Fuc3dlcnMgPyBBbnN3ZXJzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IG1pbldpZHRoOiAxODAgfX0ga2V5PSB7cm93LmFuc3dlcmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiAxLjAgfX0gY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEFuc3dlcmVkIGJ5IHtyb3cuc3R1ZGVudGlkfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgICAgIHtjaGVja1ZhbGlkKHJvdy5hbnN3ZXJpZCkgPyAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgOiA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBtYWtlUGF5bWVudChyb3cpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSkpOiBudWxsIH1cbiAgICAgIFxuICAgICAgXG5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwic3R5bGVkIiwiQnJlYWRjcnVtYnMiLCJMaW5rIiwiSG9tZUljb24iLCJXaGF0c2hvdEljb24iLCJIZWFkIiwiQ29udGFpbmVyIiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwidXNlUm91dGVyIiwiRXhwYW5kTW9yZUljb24iLCJDb2xsYXBzZSIsIkljb25CdXR0b24iLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImdldCIsIlF1ZXN0aW9ucyIsImRhdGEiLCJyZXMyIiwiQW5zd2VycyIsInByb3BzIiwiRXhwYW5kTW9yZSIsImV4cGFuZCIsIm90aGVyIiwidGhlbWUiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsIlFOQSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJ1c2VTdGF0ZSIsImhhbmRsZUV4cGFuZENsaWNrIiwiY2hlY2tWYWxpZCIsImFpZCIsInRyYW5zYWN0aW9ucyIsImkiLCJsZW5ndGgiLCJhbnN3ZXJpZCIsIm1ha2VQYXltZW50IiwiYW5zd2VyIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kZXJ3YWxsZXRpZCIsIlMxMDE4NTMxOSIsInJlY2VpdmVyd2FsbGV0aWQiLCJ3YWxsZXRpZCIsInRva2VuaWQiLCJudW10b2tlbnMiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJib2R5IiwibWV0aG9kIiwiaGVhZGVycyIsIm1vZGUiLCJzdGF0dXMiLCJhbGVydCIsInJvdXRlciIsInB1c2giLCJjb21wb25lbnQiLCJtYXhXaWR0aCIsInRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwidW5kZXJsaW5lIiwic3giLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiaHJlZiIsIm1yIiwiZm9udFNpemUiLCJtYXAiLCJyb3ciLCJtaW5XaWR0aCIsImd1dHRlckJvdHRvbSIsIm1iIiwic3R1ZGVudGlkIiwidmFyaWFudCIsImNvbnRlbnQiLCJiciIsIm1vZHVsZSIsImRpc2FibGVTcGFjaW5nIiwib25DbGljayIsImFyaWEtZXhwYW5kZWQiLCJpbiIsInRpbWVvdXQiLCJ1bm1vdW50T25FeGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/qna.js\n");

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