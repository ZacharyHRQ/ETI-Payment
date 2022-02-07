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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ QNA)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Breadcrumbs */ \"@mui/material/Breadcrumbs\");\n/* harmony import */ var _mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Home */ \"@mui/icons-material/Home\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Whatshot */ \"@mui/icons-material/Whatshot\");\n/* harmony import */ var _mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"@mui/icons-material/ExpandMore\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Collapse */ \"@mui/material/Collapse\");\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nasync function getStaticProps() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Questions/GetQuestions');\n    const Questions = await res.data;\n    const res2 = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://mockdb:9233/api/v1/Answers/GetAnswers/1');\n    const Answers = await res2.data;\n    console.log(res2.data);\n    return {\n        props: {\n            Questions,\n            Answers\n        }\n    };\n}\nconst ExpandMore = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((props)=>{\n    const { expand , ...other } = props;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_18___default()), {\n        ...other\n    }, void 0, false, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 34,\n        columnNumber: 12\n    }, undefined));\n})(({ theme , expand  })=>({\n        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',\n        marginLeft: 'auto',\n        transition: theme.transitions.create('transform', {\n            duration: theme.transitions.duration.shortest\n        })\n    })\n);\nfunction QNA({ Questions , Answers  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();\n    const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const handleExpandClick = ()=>{\n        setExpanded(!expanded);\n    };\n    async function makePayment(answer) {\n        const jsonString = JSON.stringify({\n            senderwalletid: \"S10185319\",\n            receiverwalletid: answer.studentid,\n            answerid: answer.answerid,\n            tokenid: \"CM\",\n            numtokens: 1\n        });\n        console.log(answer.Paid);\n        console.log(jsonString);\n        const res = await fetch('http://localhost:9232/api/v1/payment/reveal/', {\n            body: jsonString,\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            mode: 'no-cors'\n        });\n        console.log(res.status);\n        const res1 = await fetch(\"http://localhost:9233/api/v1/Answers/ChangeStatus/\" + answer.answerid, {\n            method: 'POST'\n        });\n        console.log(res1.status);\n        if (res.status === 0) {\n            alert(\"Payment Successful\");\n            router.push('/');\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_9___default()), {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"EduFI QnA page\"\n                }, void 0, false, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"title\",\n                children: \"QnA Payment Service\"\n            }, void 0, false, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Breadcrumbs__WEBPACK_IMPORTED_MODULE_4___default()), {\n                \"aria-label\": \"breadcrumb\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            \"Home\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        underline: \"hover\",\n                        sx: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        color: \"inherit\",\n                        href: \"/qna\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Whatshot__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                sx: {\n                                    mr: 0.5\n                                },\n                                fontSize: \"inherit\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            \"Questions and Answer\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/qna.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/qna.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            Questions ? Questions.map((row1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                    sx: {\n                        minWidth: 345\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        fontSize: 20\n                                    },\n                                    color: \"text.primary\",\n                                    gutterBottom: true,\n                                    children: row1.title\n                                }, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    sx: {\n                                        mb: 1\n                                    },\n                                    color: \"text.secondary\",\n                                    children: [\n                                        \"Asked by \",\n                                        row1.studentid\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                    variant: \"body2\",\n                                    children: [\n                                        row1.content,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 19\n                                        }, this),\n                                        \"Module : \",\n                                        row1.module\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_11___default()), {\n                            disableSpacing: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExpandMore, {\n                                expand: expanded,\n                                onClick: handleExpandClick,\n                                \"aria-expanded\": expanded,\n                                \"aria-label\": \"show more\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {\n                                    fileName: \"/app/pages/qna.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 129,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17___default()), {\n                            in: expanded,\n                            timeout: \"auto\",\n                            unmountOnExit: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                children: Answers ? Answers.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                        sx: {\n                                            minWidth: 180\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    sx: {\n                                                        mb: 1\n                                                    },\n                                                    color: \"text.secondary\",\n                                                    children: [\n                                                        \"Answered by \",\n                                                        row.studentid\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 145,\n                                                    columnNumber: 23\n                                                }, this),\n                                                row.paid === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14___default()), {\n                                                    variant: \"body2\",\n                                                    children: row.content\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 149,\n                                                    columnNumber: 42\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {\n                                                    onClick: ()=>makePayment(row)\n                                                    ,\n                                                    children: \"Pay\"\n                                                }, void 0, false, {\n                                                    fileName: \"/app/pages/qna.js\",\n                                                    lineNumber: 152,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/app/pages/qna.js\",\n                                            lineNumber: 144,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, row.answerid, false, {\n                                        fileName: \"/app/pages/qna.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 21\n                                    }, this)\n                                ) : null\n                            }, void 0, false, {\n                                fileName: \"/app/pages/qna.js\",\n                                lineNumber: 141,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/app/pages/qna.js\",\n                            lineNumber: 140,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, row1.studentid, true, {\n                    fileName: \"/app/pages/qna.js\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this)\n            ) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/qna.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVuRCxRQUFROzRCQUFFb0QsT0FBTyxFQUFDLENBQU07NEJBQUNDLGFBQWE7a0hBQ2pEbkYsbUVBQVc7MENBQ1RhLE9BQU8sR0FBR0EsT0FBTyxDQUFDd0QsR0FBRyxFQUFFQyxHQUFHLCtFQUN0QnhFLDREQUFJO3dDQUFDZ0UsRUFBRSxFQUFFLENBQUM7NENBQUNTLFFBQVEsRUFBRSxHQUFHO3dDQUFDLENBQUM7OEhBQzFCdkUsbUVBQVc7OzRIQUNURSxrRUFBVTtvREFBQzRELEVBQUUsRUFBRSxDQUFDO3dEQUFDVyxFQUFFLEVBQUUsQ0FBRztvREFBQyxDQUFDO29EQUFFUixLQUFLLEVBQUMsQ0FBZ0I7O3dEQUFDLENBQ3hDO3dEQUFDSyxHQUFHLENBQUM3QixTQUFTOzs7Ozs7O2dEQUd6QjZCLEdBQUcsQ0FBQ2MsSUFBSSxLQUFLLENBQUMsK0VBQUtsRixrRUFBVTtvREFBQ3dFLE9BQU8sRUFBQyxDQUFPOzhEQUN6Q0osR0FBRyxDQUFDSyxPQUFPOzs7Ozt1SUFFYjFFLDhEQUFNO29EQUNUOEUsT0FBTyxNQUFPN0MsV0FBVyxDQUFDb0MsR0FBRzs7OERBQzlCLENBRUQ7Ozs7Ozs7Ozs7Ozt1Q0FibUNBLEdBQUcsQ0FBQzVCLFFBQVE7Ozs7O29DQWtCOUMsSUFBSTs7Ozs7Ozs7Ozs7O21CQWhEb0I0QixJQUFHLENBQUM3QixTQUFTOzs7OztnQkFvRDdDLElBQUk7Ozs7Ozs7QUFNakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3FuYS5qcz81NWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9CcmVhZGNydW1icyc7XG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSG9tZSc7XG5pbXBvcnQgV2hhdHNob3RJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvV2hhdHNob3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlJztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbXVpL21hdGVyaWFsL0NvbGxhcHNlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL21vY2tkYjo5MjMzL2FwaS92MS9RdWVzdGlvbnMvR2V0UXVlc3Rpb25zJylcbiAgICBjb25zdCBRdWVzdGlvbnMgPSBhd2FpdCByZXMuZGF0YTtcbiAgICBjb25zdCByZXMyID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbW9ja2RiOjkyMzMvYXBpL3YxL0Fuc3dlcnMvR2V0QW5zd2Vycy8xJylcbiAgICBjb25zdCBBbnN3ZXJzID0gYXdhaXQgcmVzMi5kYXRhO1xuICAgIGNvbnNvbGUubG9nKHJlczIuZGF0YSlcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgIFF1ZXN0aW9ucyAsIEFuc3dlcnMgfVxuICAgIH1cbiAgfVxuXG5jb25zdCBFeHBhbmRNb3JlID0gc3R5bGVkKChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZXhwYW5kLCAuLi5vdGhlciB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIDxJY29uQnV0dG9uIHsuLi5vdGhlcn0gLz47XG4gIH0pKCh7IHRoZW1lLCBleHBhbmQgfSkgPT4gKHtcbiAgICB0cmFuc2Zvcm06ICFleHBhbmQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoMTgwZGVnKScsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICAgIH0pLFxuICB9KSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUU5BKHtRdWVzdGlvbnMsQW5zd2Vyc30pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUV4cGFuZENsaWNrID0gKCkgPT4ge1xuICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gbWFrZVBheW1lbnQoYW5zd2VyKSB7XG4gICAgY29uc3QganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VuZGVyd2FsbGV0aWQgOiBcIlMxMDE4NTMxOVwiLFxuICAgICAgICByZWNlaXZlcndhbGxldGlkIDogYW5zd2VyLnN0dWRlbnRpZCxcbiAgICAgICAgYW5zd2VyaWQgOiBhbnN3ZXIuYW5zd2VyaWQsXG4gICAgICAgIHRva2VuaWQgOiBcIkNNXCIsIFxuICAgICAgICBudW10b2tlbnMgOiAxLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGFuc3dlci5QYWlkKVxuICAgIGNvbnNvbGUubG9nKGpzb25TdHJpbmcpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjkyMzIvYXBpL3YxL3BheW1lbnQvcmV2ZWFsLycsIHtcbiAgICAgIGJvZHkgOiBqc29uU3RyaW5nLFxuICAgICAgbWV0aG9kIDogJ1BPU1QnLFxuICAgICAgaGVhZGVycyA6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicsXG5cbiAgICAgIH0sXG4gICAgICBtb2RlIDogJ25vLWNvcnMnLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzLnN0YXR1cyk7XG4gICAgY29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo5MjMzL2FwaS92MS9BbnN3ZXJzL0NoYW5nZVN0YXR1cy9cIiArIGFuc3dlci5hbnN3ZXJpZCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhyZXMxLnN0YXR1cylcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMCl7IFxuICAgICAgYWxlcnQoXCJQYXltZW50IFN1Y2Nlc3NmdWxcIik7XG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxufVxuICBcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVkdUZJIFFuQSBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICBRbkEgUGF5bWVudCBTZXJ2aWNlIFxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxCcmVhZGNydW1icyBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHVuZGVybGluZT1cImhvdmVyXCJcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SG9tZUljb24gc3g9e3sgbXI6IDAuNSB9fSBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdW5kZXJsaW5lPVwiaG92ZXJcIlxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgIGhyZWY9XCIvcW5hXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxXaGF0c2hvdEljb24gc3g9e3sgbXI6IDAuNSB9fSBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxuICAgICAgICAgIFF1ZXN0aW9ucyBhbmQgQW5zd2VyXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQnJlYWRjcnVtYnM+XG5cbiAgICAgIHtRdWVzdGlvbnMgPyBRdWVzdGlvbnMubWFwKCgocm93KSA9PiAoXG4gICAgICAgICAgPENhcmQgc3g9e3sgbWluV2lkdGg6IDM0NSB9fSBrZXk9IHtyb3cuc3R1ZGVudGlkfT5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDIwIH19IGNvbG9yPVwidGV4dC5wcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAge3Jvdy50aXRsZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMS4wIH19IGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgQXNrZWQgYnkge3Jvdy5zdHVkZW50aWR9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICB7cm93LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgTW9kdWxlIDoge3Jvdy5tb2R1bGV9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZEFjdGlvbnMgZGlzYWJsZVNwYWNpbmc+XG5cbiAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZVxuICAgICAgICAgICAgICAgICAgZXhwYW5kPXtleHBhbmRlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV4cGFuZENsaWNrfVxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17ZXhwYW5kZWR9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvdyBtb3JlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEV4cGFuZE1vcmVJY29uIC8+XG5cbiAgICAgICAgICAgICAgICA8L0V4cGFuZE1vcmU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAge0Fuc3dlcnMgPyBBbnN3ZXJzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IG1pbldpZHRoOiAxODAgfX0ga2V5PSB7cm93LmFuc3dlcmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiAxLjAgfX0gY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEFuc3dlcmVkIGJ5IHtyb3cuc3R1ZGVudGlkfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgICAgIHtyb3cucGFpZCA9PT0gMSA/ICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICA6IDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IG1ha2VQYXltZW50KHJvdyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQYXlcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICApKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpKTogbnVsbCB9XG4gICAgICBcbiAgICAgIFxuXG4gICAgPC9Db250YWluZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsInN0eWxlZCIsIkJyZWFkY3J1bWJzIiwiTGluayIsIkhvbWVJY29uIiwiV2hhdHNob3RJY29uIiwiSGVhZCIsIkNvbnRhaW5lciIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsInVzZVJvdXRlciIsIkV4cGFuZE1vcmVJY29uIiwiQ29sbGFwc2UiLCJJY29uQnV0dG9uIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJnZXQiLCJRdWVzdGlvbnMiLCJkYXRhIiwicmVzMiIsIkFuc3dlcnMiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJFeHBhbmRNb3JlIiwiZXhwYW5kIiwib3RoZXIiLCJ0aGVtZSIsInRyYW5zZm9ybSIsIm1hcmdpbkxlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJkdXJhdGlvbiIsInNob3J0ZXN0IiwiUU5BIiwicm91dGVyIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsInVzZVN0YXRlIiwiaGFuZGxlRXhwYW5kQ2xpY2siLCJtYWtlUGF5bWVudCIsImFuc3dlciIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZGVyd2FsbGV0aWQiLCJyZWNlaXZlcndhbGxldGlkIiwic3R1ZGVudGlkIiwiYW5zd2VyaWQiLCJ0b2tlbmlkIiwibnVtdG9rZW5zIiwiUGFpZCIsImZldGNoIiwiYm9keSIsIm1ldGhvZCIsImhlYWRlcnMiLCJtb2RlIiwic3RhdHVzIiwicmVzMSIsImFsZXJ0IiwicHVzaCIsImNvbXBvbmVudCIsIm1heFdpZHRoIiwidGl0bGUiLCJoMSIsImNsYXNzTmFtZSIsImFyaWEtbGFiZWwiLCJ1bmRlcmxpbmUiLCJzeCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJocmVmIiwibXIiLCJmb250U2l6ZSIsIm1hcCIsInJvdyIsIm1pbldpZHRoIiwiZ3V0dGVyQm90dG9tIiwibWIiLCJ2YXJpYW50IiwiY29udGVudCIsImJyIiwibW9kdWxlIiwiZGlzYWJsZVNwYWNpbmciLCJvbkNsaWNrIiwiYXJpYS1leHBhbmRlZCIsImluIiwidGltZW91dCIsInVubW91bnRPbkV4aXQiLCJwYWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/qna.js\n");

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