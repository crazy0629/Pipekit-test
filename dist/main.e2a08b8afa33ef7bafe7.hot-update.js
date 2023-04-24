"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend_take_home"]("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\n/* harmony import */ var components_Tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Tree */ \"./src/components/Tree/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst App = () => {\n  const onSubmit = async () => {\n    const data = await fetch(`http://localhost:3000/api/v1/parsedhtml/?url=asdf`);\n    const jsonData = await data.json();\n    console.log(jsonData.html);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Tree__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Replace me with application code\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Use the \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: folderIcon,\n    alt: \"folder icon\"\n  }), \" icon for HTML elements with children\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Use the \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: fileIcon,\n    alt: \"file icon\"\n  }), \" icon for HTML elements without children\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: onSubmit\n  }, \"asfdasdf\"));\n};\nconst HotApp = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__.hot)(App);\nconst root = document.getElementById(\"root\");\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HotApp, null), root);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(App, \"App\", \"D:\\\\frontend-take-home\\\\src\\\\index.tsx\");\n  reactHotLoader.register(HotApp, \"HotApp\", \"D:\\\\frontend-take-home\\\\src\\\\index.tsx\");\n  reactHotLoader.register(root, \"root\", \"D:\\\\frontend-take-home\\\\src\\\\index.tsx\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://frontend-take-home/./src/index.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("108e43e3cd197da85576")
/******/ })();
/******/ 
/******/ }
);