/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
const supportedVersions = {
    "Microsoft Edge": 17,
    Safari: 11,
    Chrome: 69,
    "Chrome Mobile": 69,
    Firefox: 62,
    "Firefox Mobile": 62,
    "Firefox for iOS": 14,
};
const getUrl = window.location;
const endUrl = window.innerWidth >= 768 ? "notSupported/NSDesktop.html" : "notSupported/NSMobile.html";
const isLocalhost = getUrl.hostname === "127.0.0.1" || getUrl.hostname === "localhost";
const url =
    (getUrl.pathname.split("/")[1] !== "" && !isLocalhost ? "".concat(getUrl.pathname.split("/")[1], "/") : "") +
    endUrl;

if (
    (window.cordova === undefined && supportedVersions[platform.name] === undefined) ||
    platform.version.split(".")[0] < supportedVersions[platform.name]
) {
    location.href = "".concat(location.origin, "/").concat(url);
}
