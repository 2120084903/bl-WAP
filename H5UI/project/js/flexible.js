//自适应rem

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 400 & clientWidth <= 500) {
                clientWidth = 400;
            }
            if (clientWidth > 500) {
                clientWidth = 500;
            }
            var fontSize = 20 * (clientWidth / 375);
            docEl.style.fontSize = fontSize + 'px';

            var dpi = window.devicePixelRatio;
            var viewport = document.querySelector('meta[name="viewport"]');

            docEl.setAttribute('data-dpi', dpi);
            var scale = 1 / dpi;
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    if (!win.app) {
        win.app = {};
    }
    win.app.callback = function (options) {
        var methods = {
            'web_view_finished_load': function () {
                CtripUtil.app_init_member_H5_info();
            },

            'init_member_H5_info': function (params) {
                // if(typeof params.userInfo != 'undefined'){
                //     window._memberInfo = params;
                // }
                if (params && params.userInfo) {
                    try {
                        LizardLite.UserStore.setUser(params.userInfo.data);
                    } catch (e) {
                    }
                }

            },

            'web_view_did_appear': function () {
                CtripUtil.app_init_member_H5_info();
            }
        }

        if (options && typeof methods[options.tagname] === 'function') {
            methods[options.tagname](options.param);
        }
    }
})(document, window);