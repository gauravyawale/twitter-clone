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
exports.id = "pages/api/usertweets";
exports.ids = ["pages/api/usertweets"];
exports.modules = {

/***/ "(api)/./pages/api/usertweets.ts":
/*!*********************************!*\
  !*** ./pages/api/usertweets.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db/data.json */ \"(api)/./db/data.json\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n// type UserTweets = {\n//   message: string\n//   file: string\n//   username: string\n//   userProfile: string\n//   createdAt: any\n//   likes: number\n//   dislikes: number\n// }\nfunction handler(req, res) {\n    res.status(200).json({\n        data: _db_data_json__WEBPACK_IMPORTED_MODULE_0__\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnR3ZWV0cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZFQUE2RTtBQUV2QztBQU10QyxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLElBQUk7QUFFVyxTQUFTQyxPQUFPLENBQzdCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQUEsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFTCxJQUFJLEVBQUVBLDBDQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQ3RDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRlci1jbG9uZS8uL3BhZ2VzL2FwaS91c2VydHdlZXRzLnRzPzY3OTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGIvZGF0YS5qc29uXCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgZGF0YTogYW55O1xufTtcblxuLy8gdHlwZSBVc2VyVHdlZXRzID0ge1xuLy8gICBtZXNzYWdlOiBzdHJpbmdcbi8vICAgZmlsZTogc3RyaW5nXG4vLyAgIHVzZXJuYW1lOiBzdHJpbmdcbi8vICAgdXNlclByb2ZpbGU6IHN0cmluZ1xuLy8gICBjcmVhdGVkQXQ6IGFueVxuLy8gICBsaWtlczogbnVtYmVyXG4vLyAgIGRpc2xpa2VzOiBudW1iZXJcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IGRhdGEgfSk7XG59XG4iXSwibmFtZXMiOlsiZGF0YSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/usertweets.ts\n");

/***/ }),

/***/ "(api)/./db/data.json":
/*!**********************!*\
  !*** ./db/data.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"userTweets":[{"message":"During development, you’re building and running the application on your local machine. Going to production is the process of making your application ready to be deployed and consumed by users.","file":"","username":"User 1","userProfile":"","createdAt":1661777578545,"likes":4,"dislikes":1},{"message":"Compiling refers to the process of taking code in one language and outputting it in another language or another version of that language.","file":"","username":"User 2","userProfile":"","createdAt":1661777578543,"likes":3,"dislikes":2},{"message":"Developers write code that is optimized for human readability. This code might contain extra information that is not necessary for the code to run, such as comments, spaces, indents, and multiple lines.","file":"","username":"User 3","userProfile":"","createdAt":1661777578546,"likes":7,"dislikes":0},{"message":"Developers break up their application into modules, components, and functions that can be used to build larger pieces of their application. Exporting and importing these internal modules, as well as external third-party packages, creates a complex web of file dependencies.","file":"","username":"User 4","userProfile":"","createdAt":1661777578553,"likes":8,"dislikes":0},{"message":"Code-splitting is the process of splitting the application’s bundle into smaller chunks required by each entry point.","file":"","username":"User 5","userProfile":"","createdAt":1661777578524,"likes":0,"dislikes":5},{"message":"Build time (or build step) is the name given to a series of steps that prepare your application code for production.","file":"","username":"User 6","userProfile":"","createdAt":1661777578541,"likes":9,"dislikes":1},{"message":"client refers to the browser on a users device that sends a request to a server for your application code.","file":"","username":"User 7","userProfile":"","createdAt":1661777578523,"likes":0,"dislikes":0},{"message":"With Next.js, three types of rendering methods are available: Server-Side Rendering, Static Site Generation, and Client-Side Rendering.","file":"","username":"User 8","userProfile":"","createdAt":1661777578537,"likes":0,"dislikes":0},{"message":"CDNs store static content (such as HTML and image files) in multiple locations around the world","file":"","username":"User 9","userProfile":"","createdAt":1661777578533,"likes":0,"dislikes":0}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/usertweets.ts"));
module.exports = __webpack_exports__;

})();