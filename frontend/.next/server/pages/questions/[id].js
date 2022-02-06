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
exports.id = "pages/questions/[id]";
exports.ids = ["pages/questions/[id]"];
exports.modules = {

/***/ "./pages/questions/[id].js":
/*!*********************************!*\
  !*** ./pages/questions/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (/* binding */ Question)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nasync function getAllQuestionIds() {\n    const questions = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://mockdb:9233/api/v1/Questions/GetQuestions\");\n    return questions.data.map((question)=>{\n        return {\n            params: {\n                id: question.id.toString()\n            }\n        };\n    });\n}\nasync function getStaticPaths() {\n    const paths = getAllQuestionIds();\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps() {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get('http://mockdb:9233/api/v1/Answers/GetAnswers/{id}');\n    const Questions = await res.data;\n    return {\n        props: {\n            Questions\n        }\n    };\n}\nfunction Question() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id , title  } = router.query;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_5___default()), {\n        component: \"main\",\n        maxWidth: \"xs\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: [\n                    \"EduFI QnA \",\n                    id,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/questions/[id].js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/app/pages/questions/[id].js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/pages/questions/[id].js\",\n        lineNumber: 47,\n        columnNumber: 10\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWVzdGlvbnMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNUO0FBQ0w7QUFDRztBQUNtQjtBQUNWO0FBQ2M7QUFDQTtBQUNWO0FBQ1E7ZUFHbENVLGlCQUFpQixHQUFFLENBQUM7SUFDakMsS0FBSyxDQUFDQyxTQUFTLEdBQUcsS0FBSyxDQUFDVCxnREFBUyxDQUFDLENBQWtEO0lBQ3BGLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDRSxJQUFJLENBQUNDLEdBQUcsRUFBQ0MsUUFBUSxHQUFJLENBQUM7UUFDckMsTUFBTSxDQUFDLENBQUM7WUFDTkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1BDLEVBQUUsRUFBR0YsUUFBUSxDQUFDRSxFQUFFLENBQUNDLFFBQVE7WUFDM0IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBRUgsQ0FBQztBQUVNLGVBQWVDLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHVixpQkFBaUI7SUFDL0IsTUFBTSxDQUFDLENBQUM7UUFDTlUsS0FBSztRQUNMQyxRQUFRLEVBQUUsS0FBSztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQUVNLGVBQWVDLGNBQWMsR0FBRyxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ3JCLGdEQUFTLENBQUMsQ0FBbUQ7SUFDL0UsS0FBSyxDQUFDc0IsU0FBUyxHQUFHLEtBQUssQ0FBQ0QsR0FBRyxDQUFDVixJQUFJO0lBQ2hDLE1BQU0sQ0FBQyxDQUFDO1FBQ05ZLEtBQUssRUFBRSxDQUFDO1lBQUVELFNBQVM7UUFBQyxDQUFDO0lBQ3ZCLENBQUM7QUFDSCxDQUFDO0FBRWMsUUFBUSxDQUFDRSxRQUFRLEdBQUUsQ0FBQztJQUNqQyxLQUFLLENBQUNDLE1BQU0sR0FBRzNCLHNEQUFTO0lBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUNpQixFQUFFLEdBQUNXLEtBQUssRUFBQyxDQUFDLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUlqQyxNQUFNLDZFQUFFekIsZ0VBQVM7UUFBQzBCLFNBQVMsRUFBQyxDQUFNO1FBQUNDLFFBQVEsRUFBQyxDQUFJOzhGQUMzQzVCLGtEQUFJO2tHQUNGeUIsQ0FBSzs7b0JBQUMsQ0FBVTtvQkFBQ1gsRUFBRTtvQkFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcXVlc3Rpb25zL1tpZF0uanM/OWE0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUXVlc3Rpb25JZHMoKXtcbiAgY29uc3QgcXVlc3Rpb25zID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL21vY2tkYjo5MjMzL2FwaS92MS9RdWVzdGlvbnMvR2V0UXVlc3Rpb25zXCIpXG4gIHJldHVybiBxdWVzdGlvbnMuZGF0YS5tYXAocXVlc3Rpb24gPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQgOiBxdWVzdGlvbi5pZC50b1N0cmluZygpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBnZXRBbGxRdWVzdGlvbklkcygpXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9tb2NrZGI6OTIzMy9hcGkvdjEvQW5zd2Vycy9HZXRBbnN3ZXJzL3tpZH0nKVxuICBjb25zdCBRdWVzdGlvbnMgPSBhd2FpdCByZXMuZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyAgUXVlc3Rpb25zIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVzdGlvbigpe1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkLHRpdGxlIH0gPSByb3V0ZXIucXVlcnlcblxuXG5cbiAgcmV0dXJuIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RWR1RkkgUW5BIHtpZH0gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgPC9Db250YWluZXI+XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJheGlvcyIsIkhlYWQiLCJDb250YWluZXIiLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJnZXRBbGxRdWVzdGlvbklkcyIsInF1ZXN0aW9ucyIsImdldCIsImRhdGEiLCJtYXAiLCJxdWVzdGlvbiIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsIlF1ZXN0aW9ucyIsInByb3BzIiwiUXVlc3Rpb24iLCJyb3V0ZXIiLCJ0aXRsZSIsInF1ZXJ5IiwiY29tcG9uZW50IiwibWF4V2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/questions/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/questions/[id].js"));
module.exports = __webpack_exports__;

})();