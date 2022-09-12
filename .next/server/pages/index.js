"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_CreateTweet)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
;// CONCATENATED MODULE: ./components/TextFields.tsx



const MyTextArea = ({ label , ...props })=>{
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = (0,external_formik_namespaceObject.useField)(props);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: props.id || props.name,
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                className: "create-message",
                ...field,
                ...props,
                placeholder: "enter your text here.."
            })
        ]
    });
};
/* harmony default export */ const TextFields = (MyTextArea);

;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/CreateTweet.tsx
/* eslint-disable react-hooks/rules-of-hooks */ 







const placeholder = "https://imgs.search.brave.com/jcaF8tRD_eoNPU17tIdF3_L_uuDtfugd3aeESYC7zQ0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/VG1rSUgzLURtaWlK/cl9IZ05CaUhnSGFI/YSZwaWQ9QXBp";
const supportedFormats = [
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "video/mp4",
    "image/png", 
];
const CreateTweet = ({ setIsCreate  })=>{
    const { 0: fileU , 1: setFile  } = (0,external_react_.useState)();
    const { 0: type , 1: setType  } = (0,external_react_.useState)("");
    const { 0: abc , 1: setAbc  } = (0,external_react_.useState)();
    const { 0: previewUrl , 1: setPreviewUrl  } = (0,external_react_.useState)();
    const { user  } = (0,nextjs_auth0_.useUser)();
    const { 0: data , 1: setData  } = (0,external_react_.useState)();
    console.log("file", type);
    const getBase64 = (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = ()=>resolve(reader.result);
            reader.onerror = (error)=>reject(error);
            reader.readAsDataURL(file);
        });
    };
    (0,external_react_.useEffect)(()=>{
        if (fileU) {
            getBase64(fileU).then((base64)=>{
                setAbc(base64);
            // console.debug("file stored",base64);
            });
        }
    }, [
        fileU
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log();
        const localData = localStorage.getItem("tweets");
        if (localData !== null) {
            setData(JSON.parse(localData));
        }
    }, []);
    const validate = external_yup_namespaceObject.object({
        message: external_yup_namespaceObject.string().max(200).required("Required."),
        file: external_yup_namespaceObject.mixed().test("FILE_SIZE", "Uploaded file is too big.", (value)=>value || value && value.size <= 7 * 1024 * 1024).test("FILE_FORMAT", "uploaded file has unsupported format", (value)=>value || value && supportedFormats.includes(value?.type.split("/")[1]))
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "main-container",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_namespaceObject.Formik, {
            initialValues: {
                message: "",
                file: new Blob()
            },
            validationSchema: validate,
            onSubmit: (values)=>{
                // console.log(values);
                const userTweet = {
                    message: values.message,
                    file: abc,
                    username: user?.name,
                    userProfile: user?.picture,
                    createdAt: new Date().getTime(),
                    likes: 0,
                    dislikes: 0
                };
                if (data?.length) {
                    localStorage.setItem("tweets", JSON.stringify([
                        ...data,
                        userTweet
                    ]));
                } else {
                    localStorage.setItem("tweets", JSON.stringify([
                        userTweet
                    ]));
                }
                setIsCreate(false);
                router_default().reload();
            },
            children: ({ values , setFieldValue  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_namespaceObject.Form, {
                        className: "create-container",
                        "data-testid": "form",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "message-container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(TextFields, {
                                        name: "message",
                                        type: "text-area",
                                        rows: "5",
                                        maxLength: "201"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "error",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_namespaceObject.ErrorMessage, {
                                            name: "message"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "input-file",
                                name: "file",
                                type: "file",
                                hidden: true,
                                onChange: (event)=>{
                                    setFieldValue("file", event.target.files[0]);
                                    setFile(event.target.files[0]);
                                    setType(event.target.files[0].type);
                                    setPreviewUrl(URL.createObjectURL(event.target.files[0]));
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "image-container",
                                children: [
                                    type !== "video/mp4" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: previewUrl ? previewUrl : placeholder,
                                        alt: "preview image",
                                        className: "image-preview"
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                                        width: "300",
                                        controls: true,
                                        className: "image-preview",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                src: previewUrl ? previewUrl : placeholder,
                                                type: "video/mp4"
                                            }),
                                            "Your browser does not support HTML video."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "error",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_namespaceObject.ErrorMessage, {
                                            name: "file"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "input-file",
                                className: "fileIcon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsImages, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "button-container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        className: "create-button",
                                        onClick: ()=>setIsCreate(false),
                                        children: "Close"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "submit",
                                        className: "create-button",
                                        children: "Tweet"
                                    })
                                ]
                            })
                        ]
                    })
                })
        })
    });
};
/* harmony default export */ const components_CreateTweet = (CreateTweet);


/***/ }),

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "Right",
        children: "Copyright 2022 Twitter Clone"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 9643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/twitterLogo.png
/* harmony default export */ const twitterLogo = ({"src":"/_next/static/media/twitterLogo.8b38ea2b.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEUBr/4CrvwDl9sDltoCltkCjMwCgLsCf7oCb6MCZJMBU3oCUnkBOFUBN1MALEMAHC0AGCgAEyEAEyAAEB0ADBUACxYAChMACRMACBIACBEABQwABQsABAoAAQEAAAEAAABQPh0WAAAAO0lEQVR42hXBhREAIQAEsXt3V3T775IhEda74wU5MouYt7WdMGIsm2LgEqFSvePF3XcLHyL7QcTnNEACzDEFv36LZvEAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
;// CONCATENATED MODULE: ./components/Header.tsx






const Header = ()=>{
    const { user , error , isLoading  } = (0,nextjs_auth0_.useUser)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "Left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hero-img",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: twitterLogo,
                    alt: "logo"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-buttons",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/profile/${user?.email?.split("@")[0]}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-buttons",
                    children: "Profile"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/api/auth/logout",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-buttons",
                    children: "Logout"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 2118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);
uuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const profilePhoto = "https://imgs.search.brave.com/s_KtUzyCL39A07JRD-ZDGyewFjqaGaSaqWvvakNskpc/rs:fit:666:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/OHl1bnZyUUE4YTBN/WTVraHhoX2lRSGFG/UiZwaWQ9QXBp";
const Tweets = ({ isCreate , userTweets  })=>{
    const { 0: tweetsArray , 1: setTweetsArray  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(userTweets);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: tweetsPerPage , 1: setTweetsPerPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);
    const indexofLastTweet = tweetsPerPage * currentPage;
    let currentTweetsList = [];
    currentTweetsList = currentTweetsList.concat(tweetsArray?.slice(0, indexofLastTweet));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (false) {}
    }, []);
    const handleScroll = ()=>{
        setCurrentPage(currentPage + 1);
    };
    const handleLikes = (id)=>{
        const addLikes = tweetsArray?.map((tweet)=>{
            if (id === tweet.createdAt) {
                return {
                    ...tweet,
                    likes: tweet.likes + 1
                };
            }
            return tweet;
        });
        localStorage.setItem("tweets", JSON.stringify(addLikes));
        setTweetsArray(addLikes);
    };
    const handleDislikes = (id)=>{
        const addLikes = tweetsArray?.map((tweet)=>{
            if (id === tweet.createdAt) {
                return {
                    ...tweet,
                    dislikes: tweet.dislikes + 1
                };
            }
            return tweet;
        });
        localStorage.setItem("tweets", JSON.stringify(addLikes));
        setTweetsArray(addLikes);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "Middle",
        children: [
            currentTweetsList?.length && currentTweetsList.map((tweet)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "tweet-container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: tweet?.userProfile || profilePhoto,
                                alt: "profile picture",
                                className: "profile-photo"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "tweet-details",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "tweet-username",
                                    children: [
                                        tweet?.username,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "tweet-time",
                                            children: new Date(tweet?.createdAt).toLocaleString()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "tweet-message",
                                    children: tweet?.message
                                }),
                                tweet?.file && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "tweet-image",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: tweet?.file,
                                        alt: "post picture",
                                        layout: "fill"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "icon-container",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "tweet-icons",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegThumbsDown, {
                                                    className: "icon",
                                                    onClick: ()=>handleDislikes(tweet.createdAt)
                                                }),
                                                tweet?.dislikes
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "tweet-icons",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegThumbsUp, {
                                                    className: "icon",
                                                    onClick: ()=>handleLikes(tweet.createdAt)
                                                }),
                                                tweet?.likes
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)());
            }),
            tweetsArray?.length !== currentTweetsList?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    textAlign: "center",
                    marginTop: "8px",
                    marginBottom: "8px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: handleScroll,
                    type: "button",
                    style: {
                        cursor: "pointer"
                    },
                    children: "Load More"
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    textAlign: "center",
                    marginTop: "8px",
                    marginBottom: "8px"
                },
                children: "No more tweets found!"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tweets);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Tweets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2118);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9643);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2980);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_CreateTweet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6823);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3149);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Tweets__WEBPACK_IMPORTED_MODULE_2__]);
_components_Tweets__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const metaData = {
    title: "Home Page",
    keywords: "tweets, create Tweet, homepage, social",
    description: "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
    canonical: "/"
};
const Home = ({ userTweets  })=>{
    const { 0: isCreate , 1: setIsCreate  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { user , error , isLoading  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_7__.useUser)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        // console.log(user);
        if (!(user || isLoading)) {
            router.push("/api/auth/login");
        }
    // eslint-disable-next-line
    }, [
        user,
        isLoading
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                metaData: metaData
            }),
            user || isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    isCreate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CreateTweet__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        setIsCreate: setIsCreate
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tweet-toggle",
                        onClick: ()=>setIsCreate(!isCreate),
                        "data-testid": "toggle-icon",
                        children: "+"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "Container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tweets__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                isCreate: isCreate,
                                userTweets: userTweets
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "logIn",
                children: "You are not logged in. Redirecting to login..."
            })
        ]
    });
};
async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch("https://twitter-clone-gsyawale-gmailcom.vercel.app/api/usertweets");
    let userTweets = await res.json();
    userTweets = userTweets.data.userTweets;
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            userTweets
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,149], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();