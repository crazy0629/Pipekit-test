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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tree_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree.style */ \"./src/components/Tree/tree.style.tsx\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var assets_folder_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/folder-icon.svg */ \"./assets/folder-icon.svg\");\n/* harmony import */ var assets_file_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/file-icon.svg */ \"./assets/file-icon.svg\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst File = ({\n  name\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tree_style__WEBPACK_IMPORTED_MODULE_1__.StyledFile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: assets_file_icon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    alt: \"folder icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, name));\n};\nconst Folder = ({\n  name,\n  children\n}) => {\n  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const handleToggle = () => {\n    setIsOpen(!isOpen);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tree_style__WEBPACK_IMPORTED_MODULE_1__.StyledFolder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"folder--label\",\n    onClick: handleToggle\n  }, !isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowForward, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowDown, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: assets_folder_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    alt: \"folder icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tree_style__WEBPACK_IMPORTED_MODULE_1__.Collapsible, {\n    isOpen: isOpen\n  }, children));\n};\n__signature__(Folder, \"useState{[isOpen, setIsOpen](false)}\");\nconst TreeRecursive = ({\n  data\n}) => {\n  return data.map((item, key) => {\n    if (item[Object.keys(data[key])[0]].__children.length > 0) {\n      /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Folder, {\n        key: key,\n        name: Object.keys(data[key])\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeRecursive, {\n        data: item[Object.keys(data[key])[0]].__children\n      }));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(File, {\n        key: key,\n        name: Object.keys(data[key])\n      });\n    }\n  });\n};\nconst Tree = ({\n  data,\n  children\n}) => {\n  const isImparative = data && !children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tree_style__WEBPACK_IMPORTED_MODULE_1__.StyledTree, null, isImparative ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeRecursive, {\n    data: data\n  }) : children);\n};\nTree.File = File;\nTree.Folder = Folder;\nconst TreeView = ({\n  treeData\n}) => {\n  return treeData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tree, {\n    data: treeData\n  }));\n};\nconst _default = TreeView;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  }\n  reactHotLoader.register(File, \"File\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(Folder, \"Folder\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(TreeRecursive, \"TreeRecursive\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(Tree, \"Tree\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(TreeView, \"TreeView\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n  reactHotLoader.register(_default, \"default\", \"D:\\\\work Space\\\\frontend-take-home\\\\src\\\\components\\\\Tree\\\\index.tsx\");\n})();\n;\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://frontend-take-home/./src/components/Tree/index.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c02d1a5ba6c5d8f02590")
/******/ })();
/******/ 
/******/ }
);