import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css"
import "onsenui/css/ionicons/css/ionicons.css"

import ons from "onsenui";
export function init(){
    var os = ""
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        os = "wp";
    }

    else if (/android/i.test(userAgent)) {
        os = "android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "ios";
    }

    else {
        os = "wp"
    }
    console.log("OS:",os)
    ons.platform.select(os)
    window.ons = ons;
}