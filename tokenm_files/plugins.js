/* eslint-disable func-names */
window.isMobileApp = function() {
    return typeof window.cordova !== "undefined";
};

window.common = {
    hideSplashScreen() {
        if (window.isMobileApp()) {
            // eslint-disable-next-line no-undef
            app.hideSplashScreen();
        }
    },
    showSplashScreen() {
        if (window.isMobileApp()) {
            // eslint-disable-next-line no-undef
            app.showSplashScreen();
        }
    },
};

window.addEventListener("load", () => {
    window.addEventListener("beforeinstallprompt", () => {});
});
