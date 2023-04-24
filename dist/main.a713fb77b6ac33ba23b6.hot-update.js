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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\n/* harmony import */ var components_Tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Tree */ \"./src/components/Tree/index.tsx\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/esm/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./src/style.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst baseURL = \"http://localhost:3000/api/v1/parsedhtml/?url=\";\nconst App = () => {\n  const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"https://github.com/\");\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [treeData, setTreeData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const onSubmit = async () => {\n    if (link) {\n      setLoading(true);\n      const data = await fetch(baseURL + link);\n      const jsonData = await data.json();\n      if (jsonData.code == 'ENOTFOUND') {\n        alert(\"please input valid url\");\n        setLoading(false);\n        return;\n      }\n      setTreeData(jsonData.html.__children);\n      setLoading(false);\n    } else {\n      alert(\"Enter the link!\");\n    }\n  };\n  const onClear = async () => {\n    setTreeData(\"\");\n    setLink(\"\");\n    setLoading(false);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.PipeContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.StructureContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.StructureWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Title, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"HTML Folder Structure\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Tree__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    treeData: treeData\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.InputContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Title, null, \"Input\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.CustomInput, {\n    type: \"text\",\n    value: link,\n    onChange: e => setLink(e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.ButtonContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.CustomButton, {\n    onClick: onClear,\n    btn_mode: true\n  }, \"Clear\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.CustomButton, {\n    onClick: onSubmit\n  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.ColorRing, {\n    height: \"30\",\n    width: \"30\",\n    ariaLabel: \"loading\"\n  }) : \"Submit\"))));\n};\n__signature__(App, \"useState{[link, setLink](\\\"https://github.com/\\\")}\\nuseState{[loading, setLoading](false)}\\nuseState{[treeData, setTreeData](\\\"\\\")}\");\nconst HotApp = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__.hot)(App);\nconst root = document.getElementById(\"root\");\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HotApp, null), root);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(baseURL, \"baseURL\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\index.tsx\");\n  reactHotLoader.register(App, \"App\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\index.tsx\");\n  reactHotLoader.register(HotApp, \"HotApp\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\index.tsx\");\n  reactHotLoader.register(root, \"root\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\index.tsx\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://frontend-take-home/./src/index.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7ba64a88c5c1febc74d5")
/******/ })();
/******/ 
/******/ }
);