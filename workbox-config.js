module.exports = {
  "globDirectory": "./dist/",
  "globPatterns": [
    "assets/images/**.*",
    "assets/images/favicon/**.*",
    "assets/images/logos/**.*",
    "*.html",
  ],
  "swSrc": "source/misc/sw-raw.js",
  "swDest": "source/misc/sw.js",
  "globIgnores": [
    "./workbox-config.js"
  ]
};
