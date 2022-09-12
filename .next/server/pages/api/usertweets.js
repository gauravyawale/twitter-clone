"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 2345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./db/data.json
const data_namespaceObject = JSON.parse('{"userTweets":[{"message":"During development, you’re building and running the application on your local machine. Going to production is the process of making your application ready to be deployed and consumed by users.","file":"","username":"User 1","userProfile":"","createdAt":1661777578545,"likes":4,"dislikes":1},{"message":"Compiling refers to the process of taking code in one language and outputting it in another language or another version of that language.","file":"","username":"User 2","userProfile":"","createdAt":1661777578543,"likes":3,"dislikes":2},{"message":"Developers write code that is optimized for human readability. This code might contain extra information that is not necessary for the code to run, such as comments, spaces, indents, and multiple lines.","file":"","username":"User 3","userProfile":"","createdAt":1661777578546,"likes":7,"dislikes":0},{"message":"Developers break up their application into modules, components, and functions that can be used to build larger pieces of their application. Exporting and importing these internal modules, as well as external third-party packages, creates a complex web of file dependencies.","file":"","username":"User 4","userProfile":"","createdAt":1661777578553,"likes":8,"dislikes":0},{"message":"Code-splitting is the process of splitting the application’s bundle into smaller chunks required by each entry point.","file":"","username":"User 5","userProfile":"","createdAt":1661777578524,"likes":0,"dislikes":5},{"message":"Build time (or build step) is the name given to a series of steps that prepare your application code for production.","file":"","username":"User 6","userProfile":"","createdAt":1661777578541,"likes":9,"dislikes":1},{"message":"client refers to the browser on a users device that sends a request to a server for your application code.","file":"","username":"User 7","userProfile":"","createdAt":1661777578523,"likes":0,"dislikes":0},{"message":"With Next.js, three types of rendering methods are available: Server-Side Rendering, Static Site Generation, and Client-Side Rendering.","file":"","username":"User 8","userProfile":"","createdAt":1661777578537,"likes":0,"dislikes":0},{"message":"CDNs store static content (such as HTML and image files) in multiple locations around the world","file":"","username":"User 9","userProfile":"","createdAt":1661777578533,"likes":0,"dislikes":0}]}');
;// CONCATENATED MODULE: ./pages/api/usertweets.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// type UserTweets = {
//   message: string
//   file: string
//   username: string
//   userProfile: string
//   createdAt: any
//   likes: number
//   dislikes: number
// }
function handler(req, res) {
    res.status(200).json({
        data: data_namespaceObject
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2345));
module.exports = __webpack_exports__;

})();