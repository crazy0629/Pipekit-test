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

/***/ "./src/components/Tree/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Tree/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.tree */ \"./src/components/Tree/style.tree.jsx\");\n/* harmony import */ var _assets_file_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/file-icon.svg */ \"./assets/file-icon.svg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst File = ({\n  name\n}) => {\n  //   let ext = name.split(\".\")[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_tree__WEBPACK_IMPORTED_MODULE_1__.StyledFile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets_file_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    alt: \"folder icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, name));\n};\nconst Folder = ({\n  name,\n  children\n}) => {\n  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const handleToggle = e => {\n    e.preventDefault();\n    setIsOpen(!isOpen);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_tree__WEBPACK_IMPORTED_MODULE_1__.StyledFolder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"folder--label\",\n    onClick: handleToggle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_tree__WEBPACK_IMPORTED_MODULE_1__.Collapsible, {\n    isOpen: isOpen\n  }, children));\n};\n__signature__(Folder, \"useState{[isOpen, setIsOpen](false)}\");\nconst TreeRecursive = ({\n  data\n}) => {\n  return data.map((item, key) => {\n    if (item.type === \"file\") {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(File, {\n        key: key,\n        name: item.name\n      });\n    }\n    if (item.type === \"folder\") {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Folder, {\n        key: key,\n        name: item.name\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeRecursive, {\n        data: item.childrens\n      }));\n    }\n  });\n};\nconst Tree = ({\n  data,\n  children\n}) => {\n  const isImparative = data && !children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style_tree__WEBPACK_IMPORTED_MODULE_1__.StyledTree, null, isImparative ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeRecursive, {\n    data: data\n  }) : children);\n};\nTree.File = File;\nTree.Folder = Folder;\nconst structure = [{\n  type: \"folder\",\n  name: \"src\",\n  childrens: [{\n    type: \"folder\",\n    name: \"Components\",\n    childrens: [{\n      type: \"file\",\n      name: \"Modal.js\"\n    }, {\n      type: \"file\",\n      name: \"Modal.css\"\n    }]\n  }, {\n    type: \"file\",\n    name: \"index.js\"\n  }, {\n    type: \"file\",\n    name: \"index.html\"\n  }]\n}, {\n  type: \"file\",\n  name: \"package.json\"\n}];\nconst TreeView = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tree, {\n    data: structure\n  }));\n};\nconst _default = TreeView;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(File, \"File\", \"D:\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(Folder, \"Folder\", \"D:\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(TreeRecursive, \"TreeRecursive\", \"D:\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(Tree, \"Tree\", \"D:\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(structure, \"structure\", \"D:\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(TreeView, \"TreeView\", \"D:\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(_default, \"default\", \"D:\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://frontend-take-home/./src/components/Tree/index.tsx?");

/***/ }),

/***/ "./assets/file-icon.svg":
/*!******************************!*\
  !*** ./assets/file-icon.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8cf93aa2b363edf4999f2e77692953d2.svg\");\n\n//# sourceURL=webpack://frontend-take-home/./assets/file-icon.svg?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9902c783ff930acb482f")
/******/ })();
/******/ 
/******/ }
);