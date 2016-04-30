var FLIPBOOK = FLIPBOOK || {}; {
    (function(t, n, r, s) {
        t.fn.flipBook = function(e) {
            var t = new o;
            t.init(e, this);
            return t
        };
        t.fn.flipBook.options = {
            pdfUrl: "pdf/book2.pdf",
            pdfPageScale: 1.5,
            rightToLeft: false,
            pages: [],
            tableOfContent: [],
            adds: [],
            deeplinking: {
                enabled: false,
                prefix: ""
            },
            rootFolder: "",
            assets: {
                preloader: "images/preloader.jpg",
                left: "images/left.png",
                overlay: "images/overlay.png",
                flipMp3: "mp3/turnPage.mp3"
            },
            startPage: 0,
            sound: true,
            backgroundColor: "#818181",
            backgroundPattern: "",
            pageWidth: 1e3,
            pageHeight: 1414,
            thumbnailWidth: 100,
            thumbnailHeight: 141,
            loadAllPages: false,
            currentPage: {
                enabled: true,
                title: "Current page"
            },
            btnNext: {
                enabled: true,
                title: "Next page",
                icon: "fa-chevron-right"
            },
            btnPrev: {
                enabled: true,
                title: "Previous page",
                icon: "fa-chevron-left"
            },
            btnZoomIn: {
                enabled: true,
                title: "Zoom in",
                icon: "fa-plus"
            },
            btnZoomOut: {
                enabled: true,
                title: "Zoom out",
                icon: "fa-minus"
            },
            btnToc: {
                enabled: true,
                title: "Table of content",
                icon: "fa-list-ol"
            },
            btnThumbs: {
                enabled: true,
                title: "Pages",
                icon: "fa-th-large"
            },
            btnShare: {
                enabled: true,
                title: "Share",
                icon: "fa-link"
            },
            btnDownloadPages: {
                enabled: true,
                title: "Download pages",
                icon: "fa-download",
                url: "images/pages.zip"
            },
            btnDownloadPdf: {
                enabled: true,
                title: "Download PDF",
                icon: "fa-file",
                url: "pdf/book2.pdf"
            },
            btnSound: {
                enabled: true,
                title: "Volume",
                icon: "fa-volume-up"
            },
            btnExpand: {
                enabled: true,
                title: "Toggle fullscreen",
                icon: "fa-expand",
                iconAlt: "fa-compress"
            },
            btnExpandLightbox: {
                enabled: true,
                title: "Toggle fullscreen",
                icon: "fa-expand",
                iconAlt: "fa-compress"
            },
            socialShare: [],
            flipType: "3d",
            zoom: 1,
            zoomMin: .85,
            zoomMax: 6,
            zoomLevels: [.8, 1, 1.5, 2.5, 4, 6],
            zoomDisabled: false,
            time1: 300,
            transition1: "easeInSine",
            time2: 400,
            transition2: "easeOutSine",
            lightBox: false,
            lightBoxOpened: false,
            lightBoxFullscreen: false,
            lightboxTransparent: true,
            lightboxPadding: 0,
            lightboxMargin: 20,
            lightboxWidth: "75%",
            lightboxHeight: 600,
            lightboxMinWidth: 400,
            lightboxMinHeight: 100,
            lightboxMaxWidth: 9999,
            lightboxMaxHeight: 9999,
            lightboxAutoSize: true,
            lightboxAutoHeight: false,
            lightboxAutoWidth: false,
            webgl: true,
            renderer: "webgl",
            cameraDistance: 2500,
            pan: 0,
            panMax: 10,
            panMin: -10,
            tilt: 0,
            tiltMax: 5,
            tiltMin: -30,
            bookX: 0,
            bookY: 0,
            bookZ: 0,
            pageMaterial: "phong",
            pageShadow: true,
            pageHardness: 2,
            coverHardness: 2,
            pageSegmentsW: 10,
            pageSegmentsH: 1,
            pageShininess: 25,
            pageFlipDuration: 2,
            pointLight: true,
            pointLightX: 0,
            pointLightY: 200,
            pointLightZ: 1500,
            pointLightColor: 16777215,
            pointLightIntensity: .04,
            directionalLight: false,
            directionalLightX: 0,
            directionalLightY: 0,
            directionalLightZ: 2e3,
            directionalLightColor: 16777215,
            directionalLightIntensity: .01,
            ambientLight: true,
            ambientLightColor: 16777215,
            ambientLightIntensity: 1,
            spotLight: false,
            spotLightX: 0,
            spotLightY: 0,
            spotLightZ: 5e3,
            spotLightColor: 16777215,
            spotLightIntensity: .2,
            spotLightShadowCameraNear: .1,
            spotLightShadowCameraFar: 1e4,
            spotLightCastShadow: true,
            spotLightShadowDarkness: .5,
            skin: "light",
            contentOnStart: false,
            thumbnailsOnStart: false
        };
        var o = function() {};
        o.prototype = {
            init: function(e, s) {
                var o = this;
                o.elem = s;
                o.jQueryelem = t(s);
                o.options = {};
                var u = r.createElement("div").style,
                    a = function() {
                        var e = "t,webkitT,MozT,msT,OT".split(","),
                            t, n = 0,
                            r = e.length;
                        for (; n < r; n++) {
                            t = e[n] + "ransform";
                            if (t in u) {
                                return e[n].substr(0, e[n].length - 1)
                            }
                        }
                        return false
                    }(),
                    f = function(e) {
                        if (a === "") return e;
                        e = e.charAt(0).toUpperCase() + e.substr(1);
                        return a + e
                    },
                    l = /android/gi.test(navigator.appVersion),
                    c = /iphone|ipad/gi.test(navigator.appVersion),
                    h = /hp-tablet/gi.test(navigator.appVersion),
                    p = f("perspective") in u,
                    d = "ontouchstart" in n && !h,
                    v = "onorientationchange" in n ? "orientationchange" : "resize",
                    m = d ? "touchend" : "click",
                    g = d ? "touchstart" : "mousedown",
                    y = d ? "touchmove" : "mousemove",
                    b = d ? "touchend" : "mouseup",
                    w = d ? "touchcancel" : "mouseup",
                    E = f("transform"),
                    S = f("perspective"),
                    x = f("transition"),
                    T = f("transitionProperty"),
                    N = f("transitionDuration"),
                    C = f("transformOrigin"),
                    k = f("transformStyle"),
                    L = f("transitionTimingFunction"),
                    A = f("transitionDelay"),
                    O = f("backfaceVisibility");
                o.has3d = p;
                o.hasWebGl = Detector.webgl;
                o.hasTouch = d;
                o.RESIZE_EV = v;
                o.CLICK_EV = m;
                o.START_EV = g;
                o.MOVE_EV = y;
                o.END_EV = b;
                o.CANCEL_EV = w;
                o.transform = E;
                o.transitionProperty = T;
                o.transitionDuration = N;
                o.transformOrigin = C;
                o.transitionTimingFunction = L;
                o.transitionDelay = A;
                o.perspective = S;
                o.transformStyle = k;
                o.transition = x;
                o.backfaceVisibility = O;
                o.options = t.extend({}, t.fn.flipBook.options, e);
                o.options.main = o;
                o.p = false;
                if (o.options.pdfUrl != "") o.options.pages = [];
                o.pages = o.options.pages;
                var M = o.options.zoomLevels;
                if (typeof M == "string") M = M.split(",");
                for (i = 0; i < M.length; i++) {
                    M[i] = Number(M[i])
                }
                o.options.zoomLevels = M;
                o.options.zoomMin = M[0];
                o.options.zoomMax = M[M.length - 1];
                o.wrapper = t(r.createElement("div")).addClass("flipbook-main-wrapper");
                if (o.options.backgroundColor != "") o.wrapper.css("background", o.options.backgroundColor);
                if (o.options.backgroundPattern != "") o.wrapper.css("background", "url(" + o.options.backgroundPattern + ") repeat");
                o.bookLayer = t(r.createElement("div")).addClass("flipbook-bookLayer").appendTo(o.wrapper);
                o.bookLayer[0].style[o.transformOrigin] = "100% 100%";
                o.book = t(r.createElement("div")).addClass("book").appendTo(o.bookLayer);
                this.createLoadingBar();
                if (o.options.deeplinking.enabled) {
                    function _() {
                        var e = parseInt(n.location.hash.replace(/#/g, "").replace(o.options.deeplinking.prefix, ""));
                        if (isNaN(e)) e = 0;
                        return e
                    }
                    n.onhashchange = function(e) {
                        var t = _() - 1;
                        if (o.options.rightToLeft) t = o.options.pages.length - t;
                        if (typeof o.Book != "undefined" && t >= 0) o.Book.goToPage(t, true)
                    };
                    o.options.startPage = _();
                    var D = o.options.startPage == 0 ? 1 : o.options.startPage;
                    if (!o.options.lightBox) n.location.hash = "#" + this.options.deeplinking.prefix + String(D)
                }
                if (o.options.pdfUrl == "") {
                    o.wrapper.appendTo(o.jQueryelem);
                    o.start()
                } else {
                    o.initPdf();
                    if (!o.options.lightBox) {
                        o.wrapper.appendTo(o.jQueryelem)
                    }
                }
                this.flipsound = r.createElement("audio");
                this.flipsound.setAttribute("src", this.options.assets.flipMp3);
                this.flipsound.setAttribute("type", "audio/mpeg")
            },
            start: function() {
                if (this.started) return;
                this.started = true;
                var e = this;
                if (e.options.lightBox) {
                    e.lightbox = new FLIPBOOK.Lightbox(this, e.wrapper, e.options);
                    if (e.options.lightboxTransparent == true) {
                        e.wrapper.css("background", "none");
                        e.bookLayer.css("background", "none");
                        e.book.css("background", "none")
                    }
                }
                if (e.options.rightToLeft) {
                    e.pagesReversed = [];
                    for (var t = e.options.pages.length - 1; t >= 0; t--) {
                        e.pagesReversed.push(e.options.pages[t])
                    }
                    e.options.pages = e.pagesReversed
                }
                if (!e.has3d) e.options.flipType = "2d";
                this.createBook()
            },
            lightboxStart: function() {
                var e = this;
                if (!this.started) this.start();
                if (typeof this.Book == "undefined") {
                    setTimeout(function() {
                        e.lightboxStart()
                    }, 100);
                    return
                }
                this.Book.enable();
                if (this.options.contentOnStart) this.toggleToc(true);
                if (this.options.thumbnailsOnStart) this.toggleThumbs(true);
                if (e.options.deeplinking.enabled) {
                    var t = parseInt(n.location.hash.replace(/#/g, "").replace(e.options.deeplinking.prefix, ""));
                    if (isNaN(t)) n.location.hash = "#" + this.options.deeplinking.prefix + String(e.currentPageNumber)
                }
                e.initColors()
            },
            initColors: function() {
                t(".skin-color-bg").removeClass("flipbook-bg-light").removeClass("flipbook-bg-dark").addClass("flipbook-bg-" + this.options.skin);
                t(".skin-color").removeClass("flipbook-color-light").removeClass("flipbook-color-dark").addClass("flipbook-color-" + this.options.skin)
            },
            lightboxEnd: function() {
                this.Book.disable();
                if (THREEx.FullScreen.available()) {
                    if (THREEx.FullScreen.activated()) {
                        THREEx.FullScreen.cancel()
                    }
                }
                if (n.location.hash) {
                    var e = r.location.href.replace(location.hash, "");
                    n.location.hash = ""
                }
            },
            turnPageComplete: function() {
                this.animating = false;
                this.updateCurrentPage();
                if (this.options.deeplinking.enabled) n.location.hash = "#" + this.options.deeplinking.prefix + String(this.currentPageNumber);
                t(this).trigger("onTurnPageComplete")
            },
            updateCurrentPage: function() {
                if (typeof this.currentPage === "undefined") return;
                var e, t = this.Book.rightIndex,
                    e = t == 0 ? "1" : String(t);
                this.enableButton(this.btnPrev, t > 0);
                this.enableButton(this.btnNext, t < this.pages.length - 1);
                if (this.options.rightToLeft) {
                    e = String(this.options.pages.length - parseInt(e) + 1)
                }
                this.currentPageNumber = parseInt(e);
                this.currentPage.attr("value", e);
                if (this.p && this.options.pages.length != 24 && this.options.pages.length != 16 && this.options.pages.length != 8 && this.options.pages.length != 192) this.Book.goToPage(0)
            },
            initPdf: function() {
                function t(t) {
                    console.log(t.loaded / t.total);
                    e.setLoadingProgress(t.loaded / t.total)
                }
                var e = this;
                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.compatibilityjsSrc]) {
                    e.loadScript(FLIPBOOK.compatibilityjsSrc, e.initPdf);
                    return
                }
                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfjsSrc]) {
                    e.loadScript(FLIPBOOK.pdfjsSrc, e.initPdf);
                    return
                }
                var e = this;
                PDFJS.disableWorker = true;
                PDFJS.workerSrc = FLIPBOOK.pdfjsworkerSrc;
                PDFJS.getDocument(e.options.pdfUrl, null, false, t).then(function(t) {
                    e.onPdfOpen(t)
                })
            },
            onPdfOpen: function(e) {
                var t = this;
                t.pdfDocument = e;
                var n = e.pdfInfo.numPages;
                for (var r = 0; r < n; r++) {
                    t.pages.push({
                        title: "Page " + String(r + 1)
                    })
                }
                t.loadPagesFromPdf([0], t.start)
            },
            loadPagesFromPdf: function(e, t) {
                var n = e[0],
                    r = this;
                e.shift();
                if (e.length > 0) {
                    this.loadPageFromPdf(n, function() {
                        r.loadPagesFromPdf(e, t)
                    })
                } else this.loadPageFromPdf(n, t)
            },
            loadPageFromPdf: function(e, t) {
                function f(e, t) {
                    var r = e.toDataURL("image/jpeg");
                    n.pages[t].src = r
                }
                var n = this;
                var i = n.pdfDocument;
                var s = i.pdfInfo,
                    o = s.numPages,
                    u, a = this.options.pdfPageScale;
                n.setLoadingProgress(.3);
                i.getPage(e + 1).then(function(s) {
                    n.setLoadingProgress(.6);
                    var o = s.getViewport(a);
                    var u = r.createElement("canvas");
                    var l = u.getContext("2d");
                    u.width = o.width;
                    u.height = o.height;
                    n.options.pageWidth = o.width;
                    n.options.pageHeight = o.height;
                    var c = {
                        canvasContext: l,
                        viewport: o,
                        intent: "print"
                    };
                    s.render(c).then(function() {
                        f(u, e);
                        t.call(n);
                        n.setLoadingProgress(1)
                    })
                })
            },
            loadScript: function(e, t) {
                var n = this.getScriptBySrc(e),
                    r = this;
                var i = n.onload;
                n.onload = function() {
                    FLIPBOOK.scriptsLoaded[e] = true;
                    if (t) t.call(r);
                    if (i) i()
                }
            },
            getScriptBySrc: function(e) {
                var t = r.getElementsByTagName("script");
                for (var n = t.length; n--;) {
                    if (t[n].src == e) return t[n]
                }
                var i = r.createElement("script");
                i.setAttribute("src", e);
                r.getElementsByTagName("head")[0].appendChild(i);
                return i
            },
            createBook: function() {
                var e = this;
                if (e.options.webgl && e.hasWebGl) {
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.threejsSrc]) {
                        e.loadScript(FLIPBOOK.threejsSrc, e.createBook);
                        return
                    }
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookWebGlSrc]) {
                        e.loadScript(FLIPBOOK.flipbookWebGlSrc, e.createBook);
                        return
                    }
                    var i = e.options;
                    i.pagesArr = e.options.pages;
                    i.scroll = e.scroll;
                    i.parent = e;
                    e.Book = new FLIPBOOK.BookWebGL(e.book[0], i);
                    e.webglMode = true
                } else {
                    e.Book = new FLIPBOOK.Book(e.book[0], e.options);
                    e.scroll = new iScroll(e.bookLayer[0], {
                        wheelAction: "none",
                        zoom: true,
                        zoomMin: e.options.zoomMin,
                        zoomMax: e.options.zoomMax,
                        keepInCenterH: true,
                        keepInCenterV: true,
                        bounce: true
                    });
                    e.webglMode = false
                }
                if (e.options.startPage % 2 == 1) e.options.startPage -= 1;
                if (e.options.rightToLeft) {
                    e.Book.goToPage(Number(e.options.pages.length - Number(e.options.startPage)), true)
                } else {
                    e.Book.goToPage(Number(e.options.startPage), true)
                }
                t(n).resize(function() {
                    e.resize()
                });
                r.onkeydown = function(t) {
                    t = t || n.event;
                    switch (t.keyCode) {
                        case 37:
                            e.Book.prevPage();
                            break;
                        case 38:
                            e.zoomIn();
                            break;
                        case 39:
                            e.Book.nextPage();
                            break;
                        case 40:
                            e.zoomOut();
                            break
                    }
                };
                if (!e.options.zoomDisabled) {
                    t(this.wrapper).on("DOMMouseScroll", function(e) {
                        e.preventDefault()
                    });
                    t(this.wrapper).on("mousewheel", function(e) {
                        e.preventDefault()
                    })
                }
                this.Book.updateVisiblePages();
                this.createToc(this.options.tableOfContent);
                if (e.options.pdfUrl == "" && e.options.btnThumbs.enabled) {
                    this.createThumbs()
                } else {
                    e.options.btnThumbs = {
                        enabled: false
                    }
                }
                this.createMenu();
                if (this.options.currentPage.enabled) {
                    this.createCurrentPage();
                    this.updateCurrentPage()
                }
                this.resize();
                this.zoom = this.options.zoom;
                if (!this.options.zoomDisabled) {
                    this.bookLayer.bind("DOMMouseScroll", function(t) {
                        if (t.originalEvent.detail > 0) {
                            e.zoomOut()
                        } else {
                            e.zoomIn()
                        }
                        return false
                    });
                    this.bookLayer.bind("mousewheel", function(t) {
                        if (t.originalEvent.wheelDelta < 0) {
                            e.zoomOut()
                        } else {
                            e.zoomIn()
                        }
                        return false
                    })
                }
                if (e.options.lightBox && !e.options.lightBoxOpened) e.Book.disable();
                else {
                    if (e.options.contentOnStart) e.toggleToc(true);
                    if (e.options.thumbnailsOnStart) e.toggleThumbs(true)
                }
                e.initColors()
            },
            createButton: function(e) {
                return t(r.createElement("span")).attr("aria-hidden", "true").appendTo(this.menu).addClass(e.icon).addClass("flipbook-icon-general flipbook-menu-btn skin-color fa").attr("title", e.title)
            },
            createMenu: function() {
                function s(e, t) {
                    var n = 0,
                        r, s;
                    while (n < i.length && !e[r]) {
                        r = t;
                        if (i[n] == "") {
                            r = r.substr(0, 1).toLowerCase() + r.substr(1)
                        }
                        r = i[n] + r;
                        s = typeof e[r];
                        if (s != "undefined") {
                            i = [i[n]];
                            return s == "function" ? e[r]() : e[r]
                        }
                        n++
                    }
                }
                if (this.p && this.options.pages.length != 24 && this.options.pages.length != 16 && this.options.pages.length != 8 && this.options.pages.length != 192) return;
                var e = this;
                this.menuWrapper = t(r.createElement("div")).addClass("flipbook-menuWrapper").appendTo(this.wrapper);
                this.menu = t(r.createElement("div")).addClass("flipbook-menu").addClass("skin-color-bg").appendTo(this.menuWrapper);
                if (this.options.lightboxTransparent) {}
                if (e.options.btnPrev.enabled) this.btnPrev = this.createButton(e.options.btnPrev).bind(this.CLICK_EV, function() {
                    e.Book.prevPage()
                });
                if (e.options.btnNext.enabled) this.btnNext = this.createButton(e.options.btnNext).bind(this.CLICK_EV, function() {
                    e.Book.nextPage()
                });
                if (e.options.btnZoomIn.enabled) this.btnZoomIn = this.createButton(e.options.btnZoomIn).bind(this.CLICK_EV, function() {
                    e.zoomIn()
                });
                if (e.options.btnZoomOut.enabled) this.btnZoomOut = this.createButton(e.options.btnZoomOut).bind(this.CLICK_EV, function() {
                    e.zoomOut()
                });
                if (e.options.btnToc.enabled) this.btnToc = this.createButton(e.options.btnToc).bind(this.CLICK_EV, function() {
                    e.toggleToc()
                });
                if (e.options.btnThumbs.enabled) this.btnThumbs = this.createButton(e.options.btnThumbs).bind(this.CLICK_EV, function() {
                    e.toggleThumbs()
                });
                if (e.options.btnShare.enabled && this.options.socialShare.length > 0) {
                    this.btnShare = this.createButton(e.options.btnShare).bind(this.CLICK_EV, function() {
                        e.toggleShare()
                    });
                    this.createShareButtons()
                }
                if (e.options.btnDownloadPages.enabled) this.btnDownloadPages = this.createButton(e.options.btnDownloadPages).bind(this.CLICK_EV, function() {
                    n.location = e.options.btnDownloadPages.url
                });
                if (e.options.btnDownloadPdf.enabled) this.btnDownloadPdf = this.createButton(e.options.btnDownloadPdf).bind(this.CLICK_EV, function() {
                    if (e.options.pdfUrl != "") e.options.btnDownloadPdf.url = e.options.pdfUrl;
                    //n.location = e.options.btnDownloadPdf.url
                    window.open(e.options.btnDownloadPdf.url,'_blank');
                });
                if (e.options.sound && e.options.btnSound.enabled) {
                    this.btnSound = this.createButton(e.options.btnSound).bind(this.CLICK_EV, function() {
                        if (e.options.sound) {
                            e.options.sound = false;
                            t(this).addClass("fa-volume-off").removeClass("fa-volume-up")
                        } else {
                            e.options.sound = true;
                            t(this).addClass("fa-volume-up").removeClass("fa-volume-off")
                        }
                    })
                }
                if (e.options.btnExpand.enabled) {
                    this.btnExpand = this.createButton(e.options.btnExpand).addClass("btnExpand").bind(this.CLICK_EV, function(t) {
                        if (s(r, "FullScreen") || s(r, "IsFullScreen") || s(r, "msFullscreenElement ")) {
                            s(r, "CancelFullScreen")
                        } else {
                            s(e.wrapper[0], "RequestFullScreen");
                            s(e.wrapper[0], "RequestFullscreen")
                        }
                    })
                }
                var i = ["webkit", "moz", "ms", "o", ""];
                handleFsChange = function() {
                    if (r.fullscreenElement || r.webkitFullscreenElement || r.mozFullScreenElement || r.msFullscreenElement) {
                        t(".btnExpand").addClass(e.options.btnExpand.iconAlt).removeClass(e.options.btnExpand.icon)
                    } else {
                        t(".btnExpand").addClass(e.options.btnExpand.icon).removeClass(e.options.btnExpand.iconAlt)
                    }
                };
                r.addEventListener("MSFullscreenChange", function(e) {
                    handleFsChange()
                });
                r.addEventListener("mozfullscreenchange", function(e) {
                    handleFsChange()
                });
                r.addEventListener("webkitfullscreenchange", function(e) {
                    handleFsChange()
                });
                r.addEventListener("fullscreenchange", function(e) {
                    handleFsChange()
                })
            },
            createLoadingBar: function() {
                this.loadingBar = t(r.createElement("div")).addClass("flipbook-loading-bar").appendTo(this.wrapper);
                this.progressBar = t(r.createElement("div")).addClass("flipbook-progress-bar").appendTo(this.loadingBar);
                this.loadingGif = t('<div id="floatingCirclesG"><div class="f_circleG" id="frotateG_01"></div><div class="f_circleG" id="frotateG_02"></div><div class="f_circleG" id="frotateG_03"></div><div class="f_circleG" id="frotateG_04"></div><div class="f_circleG" id="frotateG_05"></div><div class="f_circleG" id="frotateG_06"></div><div class="f_circleG" id="frotateG_07"></div><div class="f_circleG" id="frotateG_08"></div></div>').appendTo(this.wrapper);
                this.setLoadingProgress(0)
            },
            setLoadingProgress: function(e) {
                if (e > 0 && e < 1) {
                    this.loadingBar.css("display", "block");
                    this.loadingGif.css("display", "block")
                } else {
                    this.loadingBar.css("display", "none");
                    this.loadingGif.css("display", "none")
                }
                this.progressBar.css("width", (e * 100).toString() + "%")
            },
            createNavigation: function() {
                var e = this;
                this.navLeft = t("<div />");
                this.navLeft.css("background", "#f00").css("left", "0").css("top", "200px").attr("aria-hidden", "true").addClass("skin-color fa fa-chevron-left fa-5x").css("margin-top", this.navLeft.height() + "px").bind(this.CLICK_EV, function() {
                    e.Book.prevPage()
                });
                this.navRight = t("<div />").appendTo(this.bookLayer).css("position", "absolute").css("width", "200px").css("height", "200px").css("margin-top", "-100px").css("background", "#f00").css("right", "0").css("top", "200px").bind(this.CLICK_EV, function() {
                    e.Book.nextPage()
                })
            },
            createShareButtons: function() {
                function s(i) {
                    if (typeof i.target == "undefined") i.target = "_self";
                    if (typeof i.name == "undefined") i.name = "";
                    var s = t(r.createElement("span")).attr("aria-hidden", "true").attr("title", i.name).appendTo(e.shareButtons).addClass("fa").addClass("flipbook-shareBtn").addClass(i.icon).addClass("flipbook-icon-general").addClass("skin-color").bind(e.CLICK_EV, function(e) {
                        n.open(i.url, i.target)
                    })
                }
                var e = this;
                this.shareButtons = t(r.createElement("span")).appendTo(this.bookLayer).addClass("flipbook-shareButtons").addClass("skin-color-bg").addClass("invisible").addClass("transition");
                var i;
                for (i = 0; i < e.options.socialShare.length; i++) {
                    s(e.options.socialShare[i])
                }
            },
            playFlipSound: function() {
                if (this.options.sound && this.Book.enabled) {
                    try {
                        this.flipsound.currentTime = 0;
                        this.flipsound.play()
                    } catch (e) {
                        console.log(e)
                    }
                }
            },
            onMouseWheel: function(e) {
                console.log(e);
                if ("wheelDeltaX" in e) {
                    wheelDeltaX = e.wheelDeltaX / 12;
                    wheelDeltaY = e.wheelDeltaY / 12
                } else if ("wheelDelta" in e) {
                    wheelDeltaX = wheelDeltaY = e.wheelDelta / 12
                } else if ("detail" in e) {
                    wheelDeltaX = wheelDeltaY = -e.detail * 3
                } else {
                    return
                }
                if (wheelDeltaX > 0) this.zoomIn();
                else this.zoomOut()
            },
            zoomOut: function() {
                var e = this.options.zoomLevels;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (this.zoom == n && t > 0) {
                        this.zoom = e[t - 1];
                        break
                    }
                }
                if (!this.webglMode) this.scroll.zoom(this.bookLayer.width() / 2, this.bookLayer.height() / 2, this.zoom * this.ratio, 400);
                else this.Book.zoomTo(this.zoom)
            },
            zoomIn: function() {
                var e = this.options.zoomLevels;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (this.zoom == n && t < e.length - 1) {
                        this.zoom = e[t + 1];
                        break
                    }
                }
                if (!this.webglMode) this.scroll.zoom(this.bookLayer.width() / 2, this.bookLayer.height() / 2, this.zoom * this.ratio, 400);
                else this.Book.zoomTo(this.zoom)
            },
            onZoom: function(e) {
                this.enableButton(this.btnZoomIn, e < this.options.zoomMax);
                this.enableButton(this.btnZoomOut, e > this.options.zoomMin)
            },
            toggleShare: function() {
                this.shareButtons.toggleClass("invisible")
            },
            createCurrentPage: function() {
                var e = this;
                this.currentPage = t(r.createElement("input")).addClass("flipbook-currentPage").attr("type", "text").addClass("skin-color").appendTo(this.menuWrapper).keyup(function(n) {
                    if (n.keyCode == 13) {
                        var r = parseInt(t(this).val()) - 1;
                        r = r > e.pages.length ? e.pages.length : r;
                        if (e.options.rightToLeft) {
                            r = e.options.pages.length - r - 1
                        }
                        e.updateCurrentPage();
                        e.Book.goToPage(r)
                    }
                }).focus(function(e) {
                    t(this).val("")
                }).focusout(function(n) {
                    var r = parseInt(t(this).val()) - 1;
                    e.updateCurrentPage()
                });
                this.totalPages = t("<span/>").text("/ " + this.options.pages.length).appendTo(this.menuWrapper).addClass("skin-color").addClass("skin-color-bg").addClass("flipbook-totalPages")
            },
            createToc: function(e) {
                var n = this;
                this.tocHolder = t(r.createElement("div")).addClass("flipbook-tocHolder invisible skin-color-bg").appendTo(this.wrapper);
                this.toc = t(r.createElement("div")).addClass(".flipbook-toc").appendTo(this.tocHolder);
                n.tocScroll = new iScroll(n.tocHolder[0], {
                    bounce: false,
                    wheelAction: "scroll"
                });
                var i = t(r.createElement("span")).addClass("flipbook-tocTitle").addClass("skin-color").appendTo(this.toc);
                var s = t(r.createElement("span")).attr("aria-hidden", "true").appendTo(i).addClass("flipbook-btn-close fa fa-times flipbook-icon-general skin-color").bind(n.START_EV, function(e) {
                    n.toggleToc()
                });
                if (e.length > 0) {
                    var o = this.pages;
                    for (var u = 0; u < e.length; u++) {
                        var a = t(r.createElement("a")).attr("class", "flipbook-tocItem").addClass("skin-color").attr("title", e[u].page).appendTo(this.toc).bind(n.CLICK_EV, function(e) {
                            if (!n.tocScroll.moved) {
                                var r = Number(t(this).attr("title")) - 1;
                                if (n.options.rightToLeft) r = n.pages.length - r - 1;
                                if (n.Book.goingToPage != r) n.Book.goToPage(r)
                            }
                        });
                        t(r.createElement("span")).appendTo(a).text(e[u].title);
                        t(r.createElement("span")).appendTo(a).attr("class", "right").text(e[u].page)
                    }
                } else {
                    var o = this.pages;
                    for (var u = 0; u < o.length; u++) {
                        if (o[u].title == "") continue;
                        if (typeof o[u].title === "undefined") continue;
                        var a = t(r.createElement("a")).attr("class", "flipbook-tocItem").addClass("skin-color").attr("title", String(u + 1)).appendTo(this.toc).bind(n.CLICK_EV, function(e) {
                            if (!n.tocScroll.moved) {
                                var r = Number(t(this).attr("title")) - 1;
                                if (n.options.rightToLeft) r = n.pages.length - r - 1;
                                if (n.Book.goingToPage != r) n.Book.goToPage(r)
                            }
                        });
                        t(r.createElement("span")).appendTo(a).text(o[u].title);
                        t(r.createElement("span")).appendTo(a).attr("class", "right").text(u + 1)
                    }
                }
                n.tocScroll.refresh()
            },
            enableButton: function(e, t) {
                if (typeof e == "undefined") return;
                if (t) {
                    e.css("opacity", "1");
                    e.css("pointer-events", "auto")
                } else {
                    e.css("opacity", ".3");
                    e.css("pointer-events", "none")
                }
            },
            resize: function() {
                var e = this.bookLayer.width(),
                    t = this.bookLayer.height(),
                    n = this.book.width(),
                    r = this.book.height(),
                    i = this.menuWrapper.width();
                var s = this;
                if (e == 0 || t == 0 || n == 0 || r == 0) {
                    setTimeout(function() {
                        s.resize()
                    }, 1e3);
                    return
                }
                if (e / t >= n / r) this.fitToHeight(true);
                else this.fitToWidth(true);
                if (this.btnShare) {
                    var o = this.btnShare.offset().left;
                    var u = this.bookLayer.offset().left;
                    this.shareButtons.css("left", String(o - u) + "px")
                }
            },
            fitToHeight: function(e) {
                var t = this.bookLayer.height();
                var n = this.book.height();
                if (e) this.ratio = t / n;
                this.fit(this.ratio, e);
                this.thumbsVertical()
            },
            fitToWidth: function(e) {
                var t = this.bookLayer.width();
                var n = this.book.width();
                if (e) this.ratio = t / n;
                this.fit(this.ratio, e);
                this.thumbsVertical()
            },
            fit: function(e, t) {
                if (!this.webglMode) {
                    e = t ? this.ratio : this.scroll.scale;
                    if (t) {
                        this.scroll.options.zoomMin = e * this.options.zoomMin;
                        this.scroll.options.zoomMax = e * this.options.zoomMax
                    }
                    this.scroll.zoom(this.bookLayer.width() / 2, this.bookLayer.height() / 2, e * this.options.zoom, 0)
                }
            },
            createThumbs: function() {
                var e = this,
                    n, i;
                if (e.options.pdfUrl != "" || !e.options.btnThumbs.enabled) {
                    return
                }
                e.thumbsCreated = true;
                e.thumbHolder = t(r.createElement("div")).addClass("flipbook-thumbHolder").addClass("invisible").addClass("skin-color-bg").appendTo(e.wrapper);
                e.thumbsContainer = t(r.createElement("div")).appendTo(e.thumbHolder).addClass("flipbook-thumbContainer").width(2 * e.options.thumbnailWidth + 45);
                var s = t(r.createElement("span")).addClass("flipbook-tocTitle").addClass("skin-color").appendTo(this.thumbHolder);
                var o = t(r.createElement("span")).attr("aria-hidden", "true").appendTo(s).addClass("flipbook-btn-close").addClass("fa fa-times").addClass("flipbook-icon-general").addClass("skin-color").bind(e.START_EV, function(t) {
                    e.toggleThumbs()
                });
                e.thumbs = [];
                var u = e.pages;
                var a = t('<div class="flipbook-thumb">').appendTo(e.thumbsContainer).width(e.options.thumbnailWidth);
                for (var f = 0; f < u.length; f++) {
                    var l = u[f].thumb;
                    var a = t('<div class="flipbook-thumb">').appendTo(e.thumbsContainer);
                    var c = t("<img/>").attr("src", l).appendTo(a).width(e.options.thumbnailWidth).height(e.options.thumbnailHeight).attr("title", f + 1).bind(e.CLICK_EV, function(n) {
                        if (!e.thumbScroll.moved) {
                            var r = Number(t(this).attr("title")) - 1;
                            if (e.options.rightToLeft) r = u.length - r - 1;
                            if (e.Book.goingToPage != r) e.Book.goToPage(r)
                        }
                    });
                    var h = t("<span/>").text(f + 1).appendTo(a).addClass("skin-color").addClass("flipbook-thumb-num").width(e.options.thumbnailWidth)
                }
                e.thumbScroll = new iScroll(e.thumbHolder[0], {
                    bounce: false,
                    wheelAction: "scroll"
                })
            },
            toggleThumbs: function(e) {
                if (!this.thumbsCreated) {
                    return
                }
                if (e) {
                    this.thumbHolder.removeClass("invisible")
                } else {
                    this.thumbHolder.toggleClass("invisible")
                }
                this.thumbsVertical();
                this.thumbsShowing = !this.thumbHolder.hasClass("invisible");
                if (this.tocShowing) this.tocHolder.toggleClass("invisible")
            },
            toggleToc: function(e) {
                if (e) {
                    this.tocHolder.removeClass("invisible")
                } else {
                    this.tocHolder.toggleClass("invisible")
                }
                this.tocShowing = !this.tocHolder.hasClass("invisible");
                this.tocScroll.refresh();
                if (this.thumbsShowing) this.thumbHolder.toggleClass("invisible")
            },
            thumbsVertical: function() {
                if (!this.thumbsCreated) return;
                this.thumbScroll.hScroll = false;
                this.thumbScroll.vScroll = true;
                this.thumbScroll.refresh()
            },
            toggleExpand: function() {
                if (THREEx.FullScreen.available()) {
                    if (THREEx.FullScreen.activated()) {
                        THREEx.FullScreen.cancel()
                    } else {
                        THREEx.FullScreen.request(this.wrapper[0])
                    }
                }
            }
        };
        t.extend(t.easing, {
            def: "easeOutQuad",
            swing: function(e, n, r, i, s) {
                return t.easing[t.easing.def](e, n, r, i, s)
            },
            easeInQuad: function(e, t, n, r, i) {
                return r * (t /= i) * t + n
            },
            easeOutQuad: function(e, t, n, r, i) {
                return -r * (t /= i) * (t - 2) + n
            },
            easeInOutQuad: function(e, t, n, r, i) {
                if ((t /= i / 2) < 1) return r / 2 * t * t + n;
                return -r / 2 * (--t * (t - 2) - 1) + n
            },
            easeInCubic: function(e, t, n, r, i) {
                return r * (t /= i) * t * t + n
            },
            easeOutCubic: function(e, t, n, r, i) {
                return r * ((t = t / i - 1) * t * t + 1) + n
            },
            easeInOutCubic: function(e, t, n, r, i) {
                if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
                return r / 2 * ((t -= 2) * t * t + 2) + n
            },
            easeInQuart: function(e, t, n, r, i) {
                return r * (t /= i) * t * t * t + n
            },
            easeOutQuart: function(e, t, n, r, i) {
                return -r * ((t = t / i - 1) * t * t * t - 1) + n
            },
            easeInOutQuart: function(e, t, n, r, i) {
                if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
                return -r / 2 * ((t -= 2) * t * t * t - 2) + n
            },
            easeInQuint: function(e, t, n, r, i) {
                return r * (t /= i) * t * t * t * t + n
            },
            easeOutQuint: function(e, t, n, r, i) {
                return r * ((t = t / i - 1) * t * t * t * t + 1) + n
            },
            easeInOutQuint: function(e, t, n, r, i) {
                if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
                return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
            },
            easeInSine: function(e, t, n, r, i) {
                return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
            },
            easeOutSine: function(e, t, n, r, i) {
                return r * Math.sin(t / i * (Math.PI / 2)) + n
            },
            easeInOutSine: function(e, t, n, r, i) {
                return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
            },
            easeInExpo: function(e, t, n, r, i) {
                return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
            },
            easeOutExpo: function(e, t, n, r, i) {
                return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
            },
            easeInOutExpo: function(e, t, n, r, i) {
                if (t == 0) return n;
                if (t == i) return n + r;
                if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
                return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
            },
            easeInCirc: function(e, t, n, r, i) {
                return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
            },
            easeOutCirc: function(e, t, n, r, i) {
                return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
            },
            easeInOutCirc: function(e, t, n, r, i) {
                if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
                return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
            },
            easeInElastic: function(e, t, n, r, i) {
                var s = 1.70158;
                var o = 0;
                var u = r;
                if (t == 0) return n;
                if ((t /= i) == 1) return n + r;
                if (!o) o = i * .3;
                if (u < Math.abs(r)) {
                    u = r;
                    var s = o / 4
                } else var s = o / (2 * Math.PI) * Math.asin(r / u);
                return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
            },
            easeOutElastic: function(e, t, n, r, i) {
                var s = 1.70158;
                var o = 0;
                var u = r;
                if (t == 0) return n;
                if ((t /= i) == 1) return n + r;
                if (!o) o = i * .3;
                if (u < Math.abs(r)) {
                    u = r;
                    var s = o / 4
                } else var s = o / (2 * Math.PI) * Math.asin(r / u);
                return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
            },
            easeInOutElastic: function(e, t, n, r, i) {
                var s = 1.70158;
                var o = 0;
                var u = r;
                if (t == 0) return n;
                if ((t /= i / 2) == 2) return n + r;
                if (!o) o = i * .3 * 1.5;
                if (u < Math.abs(r)) {
                    u = r;
                    var s = o / 4
                } else var s = o / (2 * Math.PI) * Math.asin(r / u);
                if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
                return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
            },
            easeInBack: function(e, t, n, r, i, o) {
                if (o == s) o = 1.70158;
                return r * (t /= i) * t * ((o + 1) * t - o) + n
            },
            easeOutBack: function(e, t, n, r, i, o) {
                if (o == s) o = 1.70158;
                return r * ((t = t / i - 1) * t * ((o + 1) * t + o) + 1) + n
            },
            easeInOutBack: function(e, t, n, r, i, o) {
                if (o == s) o = 1.70158;
                if ((t /= i / 2) < 1) return r / 2 * t * t * (((o *= 1.525) + 1) * t - o) + n;
                return r / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
            },
            easeInBounce: function(e, n, r, i, s) {
                return i - t.easing.easeOutBounce(e, s - n, 0, i, s) + r
            },
            easeOutBounce: function(e, t, n, r, i) {
                if ((t /= i) < 1 / 2.75) {
                    return r * 7.5625 * t * t + n
                } else if (t < 2 / 2.75) {
                    return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
                } else if (t < 2.5 / 2.75) {
                    return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
                } else {
                    return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
                }
            },
            easeInOutBounce: function(e, n, r, i, s) {
                if (n < s / 2) return t.easing.easeInBounce(e, n * 2, 0, i, s) * .5 + r;
                return t.easing.easeOutBounce(e, n * 2 - s, 0, i, s) * .5 + i * .5 + r
            }
        })
    })(jQuery, window, document)
} {
    FLIPBOOK.Lightbox = function(e, t, n) {
        var r = this;
        this.context = e;
        this.options = n;
        jQuery(e.elem).css("cursor", "pointer").bind(e.START_EV, function() {
            r.openLightbox();
            if (r.context.options.lightBoxFullscreen) {
                if (THREEx.FullScreen.available()) {
                    THREEx.FullScreen.request(r.context.wrapper[0])
                }
            }
        });
        var i = jQuery(e.elem).find("img");
        r.overlay = jQuery(document.createElement("div")).attr("class", "flipbook-overlay").css("display", "none").css("z-index", "999999").bind(e.START_EV, function(e) {
            if (jQuery(e.target).hasClass("flipbook-overlay")) {
                r.closeLightbox()
            }
        }).appendTo("body");
        r.wrapper = jQuery(document.createElement("div")).css("width", r.options.lightboxWidth).css("height", "auto").appendTo(r.overlay);
        if (r.options.lightboxTransparent == true) {
            r.wrapper.attr("class", "flipbook-wrapper-transparent").css("margin", "0px auto").css("padding", "0px").css("height", "100%").css("width", "100%")
        } else {
            r.wrapper.attr("class", "flipbook-wrapper").css("margin", String(r.options.lightboxMargin) + "px auto").css("padding", String(r.options.lightboxPadding) + "px");
            t.css("margin", String(r.options.lightboxPadding) + "px")
        }
        t.appendTo(r.wrapper);
        var s = jQuery("<div/>").appendTo(r.wrapper).addClass("flipbook-lightbox-toolbar");
        var o = jQuery('<span title="Press Esc tp close"/>').appendTo(s).bind(e.CLICK_EV, function(e) {
            r.closeLightbox()
        }).addClass("flipbook-lightbox-close fa fa-times skin-color skin-color-bg");
        if (n.btnExpandLightbox.enabled) {
            var u = jQuery('<span title="Enter Fullscreen"/>').appendTo(s).addClass(".btnExpand").bind(e.CLICK_EV, function(t) {
                e.toggleExpand()
            }).addClass("flipbook-lightbox-fullscreen fa skin-color skin-color-bg").addClass(n.btnExpandLightbox.icon)
        }
        r.resize();
        jQuery(window).resize(function() {
            r.resize()
        });
        if (n.lightBoxOpened) r.openLightbox();
        else if (n.deeplinking.enabled) {
            if (window.location.hash && window.location.hash.indexOf(n.deeplinking.prefix) > -1) r.openLightbox()
        }
    };
    FLIPBOOK.Lightbox.prototype = {
        openLightbox: function() {
            var e = this;
            this.overlay.css("visibility", "visible");
            this.overlay.css("display", "none");
            this.wrapper.css("display", "none");
            this.overlay.fadeIn("fast", function() {
                e.wrapper.css("display", "block");
                e.context.lightboxStart()
            });
            jQuery("body").css("overflow", "hidden")
        },
        closeLightbox: function() {
            var e = this;
            this.overlay.fadeOut("fast");
            jQuery("body").css("overflow", "auto");
            e.context.lightboxEnd()
        },
        resize: function() {
            var e = this;
            var t = jQuery(window),
                n = t.width(),
                r = t.height();
            if (e.options.lightboxTransparent == true) {
                e.wrapper.css("width", "100%")
            } else {
                e.wrapper.css("width", e.options.lightboxWidth);
                if (e.wrapper.width() + 2 * e.options.lightboxMargin + 2 * e.options.lightboxPadding < e.options.lightboxMinWidth) {
                    e.wrapper.css("width", String(n - 2 * e.options.lightboxMargin - 2 * e.options.lightboxPadding) + "px")
                }
            }
        }
    }
} {
    FLIPBOOK.Book = function(e, t) {
        var n = this,
            r, i = t.main;
        this.main = t.main;
        this.hasTouch = i.hasTouch;
        this.perspective = i.perspective;
        this.transform = i.transform;
        this.transformOrigin = i.transformOrigin;
        this.transformStyle = i.transformStyle;
        this.transition = i.transition;
        this.transitionDuration = i.transitionDuration;
        this.transitionDelay = i.transitionDelay;
        this.transitionProperty = i.transitionProperty;
        this.backfaceVisibility = i.backfaceVisibility;
        this.wrapper = typeof e == "object" ? e : document.getElementById(e);
        jQuery(this.wrapper).addClass("flipbook-book");
        this.options = {
            flipType: "2d",
            shadow1opacity: .7,
            shadow2opacity: .7
        };
        for (r in t) this.options[r] = t[r];
        this.pages = [];
        this.pageWidth = this.options.pageWidth;
        this.pageHeight = this.options.pageHeight;
        this.animating = false;
        this.rightIndex = 0;
        var s = this.wrapper.style;
        s.width = String(2 * this.pageWidth) + "px";
        s.height = String(this.pageHeight) + "px";
        this.flipType = this.options.flipType;
        this.shadow1opacity = this.options.shadow1opacity;
        this.shadow2opacity = this.options.shadow2opacity;
        var o, u;
        this.shadowL = document.createElement("div");
        jQuery(this.shadowL).addClass("flipbook-shadowLeft").css("width", String(this.pageWidth) + "px").css("height", String(this.pageHeight) + "px");
        this.wrapper.appendChild(this.shadowL);
        this.shadowLVisible = true;
        this.shadowR = document.createElement("div");
        jQuery(this.shadowR).addClass("flipbook-shadowRight").css("width", String(this.pageWidth) + "px").css("height", String(this.pageHeight) + "px");
        this.wrapper.appendChild(this.shadowR);
        this.shadowRVisible = true;
        this.shadowRight();
        for (r = 0; r < n.options.pages.length; r++) {
            this.addPage(r);
            jQuery(this.pages[r].wrapper).attr("title", r + 1).bind(n.main.CLICK_EV, function(e) {
                function a(e, t) {
                    return Math.abs(e - t) < 10
                }
                var t, r, i, s, o, u;
                t = n.main.scroll.x;
                r = n.xOnMouseDown;
                i = n.main.scroll.y;
                s = n.yOnMouseDown;
                o = n.zoomOnMouseUp;
                u = n.zoomOnMouseDown;
                if (n.main.scroll.moved || n.main.scroll.animating || n.main.scroll.zoomed || n.zoomOnMouseDown != n.main.scroll.scale) return;
                if (e.target.className == "flipbook-page-link") return;
                if (a(t, r) && a(i, s) && o === u) {
                    var f = Number(jQuery(this).attr("title")) - 1;
                    if (f == n.rightIndex) {
                        n.nextPage()
                    } else {
                        n.prevPage()
                    }
                }
            }).bind(n.main.START_EV, function(e) {
                n.zoomOnMouseDown = n.main.scroll.scale;
                n.xOnMouseDown = n.main.scroll.x;
                n.yOnMouseDown = n.main.scroll.y
            }).bind(n.main.END_EV, function(e) {
                n.zoomOnMouseUp = n.main.scroll.scale;
                n.xOnMouseUp = n.main.scroll.x;
                n.yOnMouseUp = n.main.scroll.y
            });
            if (n.options.loadAllPages) this.pages[r].loadPage()
        }
        this.pages[0].loadPage();
        this.updateVisiblePages()
    };
    FLIPBOOK.Book.prototype.constructor = FLIPBOOK.Book;
    FLIPBOOK.Book.prototype = {
        addPage: function(e) {
            var t = new FLIPBOOK.Page(this.options.pages[e], this.pageWidth, this.pageHeight, this.pages.length, this);
            this.wrapper.appendChild(t.wrapper);
            this.pages.push(t)
        },
        goToPage: function(e, t) {
            if (e < 0 || e > this.pages.length) return;
            if (this.animating) return;
            if (isNaN(e)) return;
            this.goingToPage = e;
            e = e % 2 == 1 ? e + 1 : e;
            if (e == 0) {
                this.rightIndex == this.pages.length ? this.shadowNone() : this.shadowRight()
            } else if (e == this.pages.length) {
                this.rightIndex == 0 ? this.shadowNone() : this.shadowLeft()
            }
            var n, r, i, s;
            if (e < this.rightIndex) {
                n = this.pages[this.rightIndex - 1];
                r = this.pages[e];
                if (e > 0) {
                    i = this.pages[e - 1];
                    if (this.flipType == "2d") i.expand();
                    i.show()
                }
                if (this.flipType == "2d") {
                    r.contract();
                    this.animatePages(n, r, t, i, this.pages[e + 2])
                } else {
                    this.animatePages(n, r, t, i, this.pages[e + 2])
                }
                this.main.playFlipSound()
            } else if (e > this.rightIndex) {
                n = this.pages[e - 1];
                r = this.pages[this.rightIndex];
                if (e < this.pages.length) {
                    s = this.pages[e];
                    if (this.flipType == "2d") s.expand();
                    s.show()
                }
                if (this.flipType == "2d") {
                    n.contract();
                    this.animatePages(r, n, t, s, this.pages[e - 3])
                } else this.animatePages(r, n, t, s, this.pages[e - 3]);
                this.main.playFlipSound()
            }
            this.rightIndex = e
        },
        animatePages: function(e, t, n, r, i) {
            this.animating = true;
            var s = this,
                o = s.options.time1,
                u = s.options.time2,
                a = s.options.transition1,
                f = s.options.transition2;
            if (typeof n != "undefined" && n) {
                o = u = 0
            }
            e.show();
            if (this.flipType == "3d") {
                t.show();
                jQuery(t.wrapper).css("visibility", "hidden");
                jQuery(e.wrapper).css("visibility", "visible");
                jQuery(e.wrapper).css("text-indent", "0px");
                jQuery(e.wrapper).css(s.transform, "rotateY(0deg)");
                e.translateZ(true);
                var l = e.index < t.index ? "-90" : "90";
                jQuery(e.wrapper).animate({
                    textIndent: l
                }, {
                    step: function(e, t) {
                        jQuery(this).css(s.transform, "rotateY(" + Math.round(e) + "deg)")
                    },
                    duration: o,
                    easing: a,
                    complete: function() {
                        e.translateZ(false);
                        t.translateZ(true);
                        e.hide();
                        e.hideVisibility();
                        jQuery(t.wrapper).css("visibility", "visible");
                        jQuery(t.wrapper).css(s.transform, "rotateY(" + l + "deg)");
                        jQuery(t.wrapper).css("text-indent", String(-l) + "px");
                        jQuery(t.wrapper).animate({
                            textIndent: 0
                        }, {
                            step: function(e, t) {
                                jQuery(this).css(s.transform, "rotateY(" + Math.round(e) + "deg)")
                            },
                            complete: function() {
                                jQuery(e.wrapper).css(s.transform, "rotateY(0deg)");
                                jQuery(e.wrapper).css("visibility", "visible");
                                jQuery(t.wrapper).css(s.transform, "rotateY(0deg)");
                                jQuery(t.wrapper).css("visibility", "visible");
                                t.translateZ(false)
                            },
                            duration: u,
                            easing: f
                        })
                    }
                })
            } else {
                if (r) {}
                e.translateZ(true);
                jQuery(e.wrapper).animate({
                    width: 0
                }, o, a, function() {
                    e.translateZ(false);
                    t.translateZ(true);
                    t.show();
                    if (i) {}
                    jQuery(t.wrapper).animate({
                        width: t.width
                    }, u, f, function() {
                        t.translateZ(false)
                    })
                })
            }
            setTimeout(function() {
                s.main.turnPageComplete();
                s.animating = false;
                s.updateVisiblePages();
                if (s.flipType == "3d") {
                    jQuery(e.wrapper).css(s.transform, "rotateY(0deg)");
                    jQuery(t.wrapper).css(s.transform, "rotateY(0deg)")
                }
            }, Number(o) + Number(u))
        },
        updateVisiblePages: function() {
            if (this.animating) return;
            for (var e = 0; e < this.pages.length; e++) {
                if (e < this.rightIndex - 1 || e > this.rightIndex) {
                    if (this.pages[e]) {
                        if (this.flipType == "2d") this.pages[e].contract();
                        this.pages[e].hide()
                    }
                } else {
                    if (this.pages[e]) {
                        if (this.flipType == "2d") this.pages[e].expand();
                        this.pages[e].show()
                    }
                }
                if (this.rightIndex == 0) {
                    if (this.pages[1]) {
                        if (this.flipType == "2d") this.pages[1].contract();
                        this.pages[1].hide()
                    }
                }
            }
            var t = this.rightIndex,
                n = this.pages;
            if (t > 0) {
                if (n[t - 1]) n[t - 1].loadPage()
            }
            if (t < n.length) {
                if (n[t]) n[t].loadPage()
            }
            if (t > 0 && t < this.pages.length) {
                this.shadowBoth()
            } else if (t == 0) {
                this.shadowRight()
            } else {
                this.shadowLeft()
            }
        },
        nextPage: function() {
            if (this.rightIndex == this.pages.length || this.animating) return;
            this.goToPage(this.rightIndex + 2)
        },
        prevPage: function() {
            if (this.rightIndex == 0 || this.animating) return;
            this.goToPage(this.rightIndex - 2)
        },
        enable: function() {
            this.enabled = true
        },
        disable: function() {
            this.enabled = false
        },
        shadowRight: function() {
            if (this.shadowLVisible) {
                this.shadowLVisible = false;
                this.shadowL.style.display = "none"
            }
            if (!this.shadowRVisible) {
                this.shadowRVisible = true;
                this.shadowR.style.display = "block"
            }
        },
        shadowLeft: function() {
            if (this.shadowRVisible) {
                this.shadowRVisible = false;
                this.shadowR.style.display = "none"
            }
            if (!this.shadowLVisible) {
                this.shadowLVisible = true;
                this.shadowL.style.display = "block"
            }
        },
        shadowBoth: function() {
            if (!this.shadowRVisible) {
                this.shadowRVisible = true;
                this.shadowR.style.display = "block"
            }
            if (!this.shadowLVisible) {
                this.shadowLVisible = true;
                this.shadowL.style.display = "block"
            }
        },
        shadowNone: function() {
            if (this.shadowRVisible) {
                this.shadowRVisible = false;
                this.shadowR.style.display = "none"
            }
            if (this.shadowLVisible) {
                this.shadowLVisible = false;
                this.shadowL.style.display = "none"
            }
        }
    }
} {
    FLIPBOOK.Page = function(e, t, n, r, i) {
        this.wrapper = document.createElement("div");
        jQuery(this.wrapper).addClass("flipbook-page");
        this.s = this.wrapper.style;
        this.s.width = String(t) + "px";
        this.s.height = String(n) + "px";
        this.index = r;
        this.book = i;
        this.width = t;
        this.height = n;
        this.invisible = false;
        this.image = new Image;
        this.image.src = i.options.assets.preloader;
        this.imageSrc = e.src;
        this.wrapper.appendChild(this.image);
        this.imageLoader = new Image;
        this.expanded = true;
        this.htmlContent = e.htmlContent;
        if (this.index % 2 == 0) {
            this.s.zIndex = String(100 - this.index);
            this.s.left = "50%";
            this.right(this.image)
        } else {
            this.shadow = new Image;
            this.wrapper.appendChild(this.shadow);
            this.shadow.src = i.options.assets.left;
            this.left(this.shadow);
            this.s.zIndex = String(100 + this.index);
            this.s.right = "50%";
            this.left(this.image)
        }
        if (typeof this.htmlContent !== "undefined") {
            this.htmlContainer = document.createElement("div");
            jQuery(this.htmlContainer).addClass("flipbook-page-htmlContainer");
            this.wrapper.appendChild(this.htmlContainer);
            this.index % 2 == 0 ? this.right(this.htmlContainer) : this.left(this.htmlContainer)
        }
        if (this.shadow) {
            this.shadow.style["pointer-events"] = "none"
        }
        this.s.top = "0px";
        if (this.book.flipType == "3d") {
            this.wrapper.style[this.book.transformOrigin] = this.index % 2 != 0 ? "100% 50%" : "0% 50%"
        }
        if (e.links) {
            var s = this;
            for (var o = 0; o < e.links.length; o++) {
                var u = e.links[o];

                function a(e) {
                    var t = document.createElement("div");
                    s.wrapper.appendChild(t);
                    t.className += " flipbook-page-link";
                    t.style.position = "absolute";
                    t.style.left = String(e.x) + "px";
                    t.style.top = String(e.y) + "px";
                    t.style.width = String(e.width) + "px";
                    t.style.height = String(e.height) + "px";
                    t.style.backgroundColor = e.color;
                    t.style.opacity = e.alpha;
                    t.style.cursor = "pointer";
                    jQuery(t).click(function(t) {
                        if (Number(e.page) > 0) {
                            i.goToPage(Number(e.page))
                        } else if (String(e.url) != "") {
                            setTimeout(function() {
                                window.open(e.url, "_blank")
                            }, 100)
                        }
                    }).mouseenter(function() {
                        t.style.backgroundColor = e.hoverColor;
                        t.style.opacity = e.hoverAlpha
                    }).mouseleave(function() {
                        t.style.backgroundColor = e.color;
                        t.style.opacity = e.alpha
                    })
                }
                a(u)
            }
        }
    };
    FLIPBOOK.Page.prototype = {
        loadPage: function() {
            if (this.loaded == true) return;
            this.loaded = true;
            var e = this,
                t = this.book.main;
            if (t.options.pdfUrl != "") {
                if (typeof this.imageSrc == "undefined") {
                    t.loadPageFromPdf(this.index, function() {
                        e.imageLoader.src = t.pages[e.index].src;
                        jQuery(e.imageLoader).load(function() {
                            e.image.src = e.imageLoader.src
                        })
                    });
                    return
                }
            }
            e.imageLoader.src = this.imageSrc;
            jQuery(e.imageLoader).load(function() {
                e.image.src = e.imageSrc
            });
            if (typeof this.htmlContent !== "undefined") {
                this.htmlContainer.innerHTML = this.htmlContent
            }
        },
        translateZ: function(e) {
            if (e) {
                this.image.style[this.book.transform] = "translateZ(0)";
                if (this.shadow) {
                    this.shadow.style[this.book.transform] = "translateZ(0)"
                }
            } else {
                this.image.style[this.book.transform] = "";
                if (this.shadow) {
                    this.shadow.style[this.book.transform] = ""
                }
            }
        },
        flipView: function() {},
        expand: function() {
            if (!this.expanded) this.s.width = String(this.width) + "px";
            this.expanded = true
        },
        contract: function() {
            if (this.expanded) this.s.width = "0px";
            this.expanded = false
        },
        show: function() {
            if (this.hidden) {
                this.s.display = "block"
            }
            this.hidden = false
        },
        hide: function() {
            if (!this.hidden) {
                this.s.display = "none"
            }
            this.hidden = true
        },
        hideVisibility: function() {
            if (!this.invisible) this.s.visibility = "hidden";
            this.invisible = true
        },
        left: function(e) {
            var t = e.style;
            t.width = String(this.width) + "px";
            t.height = String(this.height) + "px";
            t.position = "absolute";
            t.top = "0px";
            t.right = "0px"
        },
        right: function(e) {
            var t = e.style;
            t.width = String(this.width) + "px";
            t.height = String(this.height) + "px";
            t.position = "absolute";
            t.top = "0px";
            t.left = "0px"
        }
    }
} {
    (function(e, t) {
        function A(e) {
            if (i === "") return e;
            e = e.charAt(0).toUpperCase() + e.substr(1);
            return i + e
        }
        var n = Math,
            r = t.createElement("div").style,
            i = function() {
                var e = "t,webkitT,MozT,msT,OT".split(","),
                    t, n = 0,
                    i = e.length;
                for (; n < i; n++) {
                    t = e[n] + "ransform";
                    if (t in r) {
                        return e[n].substr(0, e[n].length - 1)
                    }
                }
                return false
            }(),
            s = i ? "-" + i.toLowerCase() + "-" : "",
            o = A("transform"),
            u = A("transitionProperty"),
            a = A("transitionDuration"),
            f = A("transformOrigin"),
            l = A("transitionTimingFunction"),
            c = A("transitionDelay"),
            h = /android/gi.test(navigator.appVersion),
            p = /iphone|ipad/gi.test(navigator.appVersion),
            d = /hp-tablet/gi.test(navigator.appVersion),
            v = A("perspective") in r,
            m = "ontouchstart" in e && !d,
            g = i !== false,
            y = A("transition") in r,
            b = "onorientationchange" in e ? "orientationchange" : "resize",
            w = m ? "touchstart" : "mousedown",
            E = m ? "touchmove" : "mousemove",
            S = m ? "touchend" : "mouseup",
            x = m ? "touchcancel" : "mouseup",
            T = function() {
                if (i === false) return false;
                var e = {
                    "": "transitionend",
                    webkit: "webkitTransitionEnd",
                    Moz: "transitionend",
                    O: "otransitionend",
                    ms: "MSTransitionEnd"
                };
                return e[i]
            }(),
            N = function() {
                return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
                    return setTimeout(e, 1)
                }
            }(),
            C = function() {
                return e.cancelRequestAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
            }(),
            k = v ? " translateZ(0)" : "",
            L = function(n, r) {
                var i = this,
                    c;
                i.wrapper = typeof n == "object" ? n : t.getElementById(n);
                i.wrapper.style.overflow = "hidden";
                i.scroller = i.wrapper.children[0];
                i.options = {
                    hScroll: true,
                    vScroll: true,
                    x: 0,
                    y: 0,
                    bounce: true,
                    bounceLock: false,
                    momentum: true,
                    lockDirection: true,
                    useTransform: true,
                    useTransition: false,
                    topOffset: 0,
                    checkDOMChanges: false,
                    handleClick: true,
                    hScrollbar: true,
                    vScrollbar: true,
                    fixedScrollbar: h,
                    hideScrollbar: p,
                    fadeScrollbar: p && v,
                    scrollbarClass: "",
                    zoom: false,
                    zoomMin: 1,
                    zoomMax: 4,
                    doubleTapZoom: 2,
                    wheelAction: "scroll",
                    snap: false,
                    snapThreshold: 1,
                    onRefresh: null,
                    onBeforeScrollStart: function(e) {
                        e.preventDefault()
                    },
                    onScrollStart: null,
                    onBeforeScrollMove: null,
                    onScrollMove: null,
                    onBeforeScrollEnd: null,
                    onScrollEnd: null,
                    onTouchEnd: null,
                    onDestroy: null,
                    onZoomStart: null,
                    onZoom: null,
                    onZoomEnd: null,
                    keepInCenterH: false,
                    keepInCenterV: false
                };
                for (c in r) i.options[c] = r[c];
                i.x = i.options.x;
                i.y = i.options.y;
                i.options.useTransform = g && i.options.useTransform;
                i.options.hScrollbar = i.options.hScroll && i.options.hScrollbar;
                i.options.vScrollbar = i.options.vScroll && i.options.vScrollbar;
                i.options.zoom = i.options.useTransform && i.options.zoom;
                i.options.useTransition = y && i.options.useTransition;
                i.keepInCenterH = i.options.keepInCenterH;
                i.keepInCenterV = i.options.keepInCenterV;
                if (i.options.zoom && h) {
                    k = ""
                }
                i.scroller.style[u] = i.options.useTransform ? s + "transform" : "top left";
                i.scroller.style[a] = "0";
                i.scroller.style[f] = "0 0";
                if (i.options.useTransition) i.scroller.style[l] = "cubic-bezier(0.33,0.66,0.66,1)";
                if (i.options.useTransform) i.scroller.style[o] = "translate(" + i.x + "px," + i.y + "px)" + k;
                else i.scroller.style.cssText += ";position:absolute;top:" + i.y + "px;left:" + i.x + "px";
                if (i.options.useTransition) i.options.fixedScrollbar = true;
                i.refresh();
                i._bind(b, e);
                i._bind(w);
                if (!m) {
                    if (i.options.wheelAction != "none") {
                        i._bind("DOMMouseScroll");
                        i._bind("mousewheel")
                    }
                }
                if (i.options.checkDOMChanges) i.checkDOMTime = setInterval(function() {
                    i._checkDOMChanges()
                }, 500)
            };
        L.prototype = {
            enabled: true,
            x: 0,
            y: 0,
            steps: [],
            scale: 1,
            currPageX: 0,
            currPageY: 0,
            pagesX: [],
            pagesY: [],
            aniTime: null,
            wheelZoomCount: 0,
            handleEvent: function(e) {
                var t = this;
                switch (e.type) {
                    case w:
                        if (!m && e.button !== 0) return;
                        t._start(e);
                        break;
                    case E:
                        t._move(e);
                        break;
                    case S:
                    case x:
                        t._end(e);
                        break;
                    case b:
                        t._resize();
                        break;
                    case "DOMMouseScroll":
                    case "mousewheel":
                        t._wheel(e);
                        break;
                    case T:
                        t._transitionEnd(e);
                        break
                }
            },
            _checkDOMChanges: function() {
                if (this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale) return;
                this.refresh()
            },
            _scrollbar: function(e) {
                var r = this,
                    i;
                if (!r[e + "Scrollbar"]) {
                    if (r[e + "ScrollbarWrapper"]) {
                        if (g) r[e + "ScrollbarIndicator"].style[o] = "";
                        r[e + "ScrollbarWrapper"].parentNode.removeChild(r[e + "ScrollbarWrapper"]);
                        r[e + "ScrollbarWrapper"] = null;
                        r[e + "ScrollbarIndicator"] = null
                    }
                    return
                }
                if (!r[e + "ScrollbarWrapper"]) {
                    i = t.createElement("div");
                    if (r.options.scrollbarClass) i.className = r.options.scrollbarClass + e.toUpperCase();
                    else i.style.cssText = "position:absolute;z-index:100;" + (e == "h" ? "height:7px;bottom:1px;left:2px;right:" + (r.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (r.hScrollbar ? "7" : "2") + "px;top:2px;right:1px");
                    i.style.cssText += ";pointer-events:none;" + s + "transition-property:opacity;" + s + "transition-duration:" + (r.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (r.options.hideScrollbar ? "0" : "1");
                    r.wrapper.appendChild(i);
                    r[e + "ScrollbarWrapper"] = i;
                    i = t.createElement("div");
                    if (!r.options.scrollbarClass) {
                        i.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + s + "background-clip:padding-box;" + s + "box-sizing:border-box;" + (e == "h" ? "height:100%" : "width:100%") + ";" + s + "border-radius:3px;border-radius:3px"
                    }
                    i.style.cssText += ";pointer-events:none;" + s + "transition-property:" + s + "transform;" + s + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + s + "transition-duration:0;" + s + "transform: translate(0,0)" + k;
                    if (r.options.useTransition) i.style.cssText += ";" + s + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)";
                    r[e + "ScrollbarWrapper"].appendChild(i);
                    r[e + "ScrollbarIndicator"] = i
                }
                if (e == "h") {
                    r.hScrollbarSize = r.hScrollbarWrapper.clientWidth;
                    r.hScrollbarIndicatorSize = n.max(n.round(r.hScrollbarSize * r.hScrollbarSize / r.scrollerW), 8);
                    r.hScrollbarIndicator.style.width = r.hScrollbarIndicatorSize + "px";
                    r.hScrollbarMaxScroll = r.hScrollbarSize - r.hScrollbarIndicatorSize;
                    r.hScrollbarProp = r.hScrollbarMaxScroll / r.maxScrollX
                } else {
                    r.vScrollbarSize = r.vScrollbarWrapper.clientHeight;
                    r.vScrollbarIndicatorSize = n.max(n.round(r.vScrollbarSize * r.vScrollbarSize / r.scrollerH), 8);
                    r.vScrollbarIndicator.style.height = r.vScrollbarIndicatorSize + "px";
                    r.vScrollbarMaxScroll = r.vScrollbarSize - r.vScrollbarIndicatorSize;
                    r.vScrollbarProp = r.vScrollbarMaxScroll / r.maxScrollY
                }
                r._scrollbarPos(e, true)
            },
            _resize: function() {
                var e = this;
                setTimeout(function() {
                    e.refresh()
                }, h ? 200 : 0)
            },
            _pos: function(e, t) {
                if (this.zoomed) return;
                if (this.scrollerW < this.wrapperW && this.keepInCenterH) {
                    e = (this.wrapperW - this.scrollerW) / 2;
                    this.moved = false
                }
                if (this.scrollerH < this.wrapperH && this.keepInCenterV) {
                    t = (this.wrapperH - this.scrollerH) / 2;
                    this.moved = false
                }
                e = n.round(e);
                t = n.round(t);
                if (this.options.useTransform) {
                    this.scroller.style[o] = "translate(" + e + "px," + t + "px) scale(" + this.scale + ")" + k
                } else {
                    this.scroller.style.left = e + "px";
                    this.scroller.style.top = t + "px"
                }
                this.x = e;
                this.y = t;
                this._scrollbarPos("h");
                this._scrollbarPos("v")
            },
            _scrollbarPos: function(e, t) {
                var r = this,
                    i = e == "h" ? r.x : r.y,
                    s;
                if (!r[e + "Scrollbar"]) return;
                i = r[e + "ScrollbarProp"] * i;
                if (i < 0) {
                    if (!r.options.fixedScrollbar) {
                        s = r[e + "ScrollbarIndicatorSize"] + n.round(i * 3);
                        if (s < 8) s = 8;
                        r[e + "ScrollbarIndicator"].style[e == "h" ? "width" : "height"] = s + "px"
                    }
                    i = 0
                } else if (i > r[e + "ScrollbarMaxScroll"]) {
                    if (!r.options.fixedScrollbar) {
                        s = r[e + "ScrollbarIndicatorSize"] - n.round((i - r[e + "ScrollbarMaxScroll"]) * 3);
                        if (s < 8) s = 8;
                        r[e + "ScrollbarIndicator"].style[e == "h" ? "width" : "height"] = s + "px";
                        i = r[e + "ScrollbarMaxScroll"] + (r[e + "ScrollbarIndicatorSize"] - s)
                    } else {
                        i = r[e + "ScrollbarMaxScroll"]
                    }
                }
                r[e + "ScrollbarWrapper"].style[c] = "0";
                r[e + "ScrollbarWrapper"].style.opacity = t && r.options.hideScrollbar ? "0" : "1";
                r[e + "ScrollbarIndicator"].style[o] = "translate(" + (e == "h" ? i + "px,0)" : "0," + i + "px)") + k
            },
            _start: function(t) {
                var r = this,
                    i = m ? t.touches[0] : t,
                    s, u, a, f, l;
                if (!r.enabled) return;
                if (r.options.onBeforeScrollStart) r.options.onBeforeScrollStart.call(r, t);
                if (r.options.useTransition || r.options.zoom) r._transitionTime(0);
                r.moved = false;
                r.animating = false;
                r.zoomed = false;
                r.distX = 0;
                r.distY = 0;
                r.absDistX = 0;
                r.absDistY = 0;
                r.dirX = 0;
                r.dirY = 0;
                if (r.options.zoom && m && t.touches.length > 1) {
                    f = n.abs(t.touches[0].pageX - t.touches[1].pageX);
                    l = n.abs(t.touches[0].pageY - t.touches[1].pageY);
                    r.touchesDistStart = n.sqrt(f * f + l * l);
                    r.originX = n.abs(t.touches[0].pageX + t.touches[1].pageX - r.wrapperOffsetLeft * 2) / 2 - r.x;
                    r.originY = n.abs(t.touches[0].pageY + t.touches[1].pageY - r.wrapperOffsetTop * 2) / 2 - r.y;
                    if (r.options.onZoomStart) r.options.onZoomStart.call(r, t)
                }
                if (r.options.momentum) {
                    if (r.options.useTransform) {
                        s = getComputedStyle(r.scroller, null)[o].replace(/[^0-9\-.,]/g, "").split(",");
                        u = +(s[12] || s[4]);
                        a = +(s[13] || s[5])
                    } else {
                        u = +getComputedStyle(r.scroller, null).left.replace(/[^0-9-]/g, "");
                        a = +getComputedStyle(r.scroller, null).top.replace(/[^0-9-]/g, "")
                    }
                    if (u != r.x || a != r.y) {
                        if (r.options.useTransition) r._unbind(T);
                        else C(r.aniTime);
                        r.steps = [];
                        r._pos(u, a);
                        if (r.options.onScrollEnd) r.options.onScrollEnd.call(r)
                    }
                }
                r.absStartX = r.x;
                r.absStartY = r.y;
                r.startX = r.x;
                r.startY = r.y;
                r.pointX = i.pageX;
                r.pointY = i.pageY;
                r.startTime = t.timeStamp || Date.now();
                if (r.options.onScrollStart) r.options.onScrollStart.call(r, t);
                r._bind(E, e);
                r._bind(S, e);
                r._bind(x, e)
            },
            _move: function(e) {
                var t = this,
                    r = m ? e.touches[0] : e,
                    i = r.pageX - t.pointX,
                    s = r.pageY - t.pointY,
                    u = t.x + i,
                    a = t.y + s,
                    f, l, c, h = e.timeStamp || Date.now();
                if (t.options.onBeforeScrollMove) t.options.onBeforeScrollMove.call(t, e);
                if (t.options.zoom && m && e.touches.length > 1) {
                    f = n.abs(e.touches[0].pageX - e.touches[1].pageX);
                    l = n.abs(e.touches[0].pageY - e.touches[1].pageY);
                    t.touchesDist = n.sqrt(f * f + l * l);
                    t.zoomed = true;
                    c = 1 / t.touchesDistStart * t.touchesDist * this.scale;
                    if (c < t.options.zoomMin) c = .5 * t.options.zoomMin * Math.pow(2, c / t.options.zoomMin);
                    else if (c > t.options.zoomMax) c = 2 * t.options.zoomMax * Math.pow(.5, t.options.zoomMax / c);
                    t.lastScale = c / this.scale;
                    u = this.originX - this.originX * t.lastScale + this.x, a = this.originY - this.originY * t.lastScale + this.y;
                    this.scroller.style[o] = "translate(" + u + "px," + a + "px) scale(" + c + ")" + k;
                    if (t.options.onZoom) t.options.onZoom.call(t, e);
                    return
                }
                t.pointX = r.pageX;
                t.pointY = r.pageY;
                if (u > 0 || u < t.maxScrollX) {
                    u = t.options.bounce ? t.x + i / 2 : u >= 0 || t.maxScrollX >= 0 ? 0 : t.maxScrollX
                }
                if (a > t.minScrollY || a < t.maxScrollY) {
                    a = t.options.bounce ? t.y + s / 2 : a >= t.minScrollY || t.maxScrollY >= 0 ? t.minScrollY : t.maxScrollY
                }
                t.distX += i;
                t.distY += s;
                t.absDistX = n.abs(t.distX);
                t.absDistY = n.abs(t.distY);
                if (t.absDistX < 6 && t.absDistY < 6) {
                    return
                }
                if (t.options.lockDirection) {
                    if (t.absDistX > t.absDistY + 5) {
                        a = t.y;
                        s = 0
                    } else if (t.absDistY > t.absDistX + 5) {
                        u = t.x;
                        i = 0
                    }
                }
                t.moved = true;
                t._pos(u, a);
                t.dirX = i > 0 ? -1 : i < 0 ? 1 : 0;
                t.dirY = s > 0 ? -1 : s < 0 ? 1 : 0;
                if (h - t.startTime > 300) {
                    t.startTime = h;
                    t.startX = t.x;
                    t.startY = t.y
                }
                if (t.options.onScrollMove) t.options.onScrollMove.call(t, e)
            },
            _end: function(r) {
                if (m && r.touches.length !== 0) return;
                var i = this,
                    s = m ? r.changedTouches[0] : r,
                    u, f, l = {
                        dist: 0,
                        time: 0
                    },
                    c = {
                        dist: 0,
                        time: 0
                    },
                    h = (r.timeStamp || Date.now()) - i.startTime,
                    p = i.x,
                    d = i.y,
                    v, g, y, b, w;
                i._unbind(E, e);
                i._unbind(S, e);
                i._unbind(x, e);
                if (i.options.onBeforeScrollEnd) i.options.onBeforeScrollEnd.call(i, r);
                if (i.zoomed) {
                    w = i.scale * i.lastScale;
                    w = Math.max(i.options.zoomMin, w);
                    w = Math.min(i.options.zoomMax, w);
                    i.lastScale = w / i.scale;
                    i.scale = w;
                    i.x = i.originX - i.originX * i.lastScale + i.x;
                    i.y = i.originY - i.originY * i.lastScale + i.y;
                    i.scroller.style[a] = "200ms";
                    i.scroller.style[o] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + ")" + k;
                    i.zoomed = false;
                    i.refresh();
                    if (i.options.onZoomEnd) i.options.onZoomEnd.call(i, r, w);
                    return
                }
                if (!i.moved) {
                    if (true) {
                        if (i.doubleTapTimer && i.options.zoom) {
                            clearTimeout(i.doubleTapTimer);
                            i.doubleTapTimer = null;
                            if (i.options.onZoomStart) i.options.onZoomStart.call(i, r);
                            if (i.options.onZoomEnd) {
                                setTimeout(function() {
                                    i.options.onZoomEnd.call(i, r, w)
                                }, 200)
                            }
                        } else if (this.options.handleClick) {
                            i.doubleTapTimer = setTimeout(function() {
                                i.doubleTapTimer = null;
                                u = s.target;
                                while (u.nodeType != 1) u = u.parentNode;
                                if (u.tagName != "SELECT" && u.tagName != "INPUT" && u.tagName != "TEXTAREA") {
                                    f = t.createEvent("MouseEvents");
                                    f.initMouseEvent("click", true, true, r.view, 1, s.screenX, s.screenY, s.clientX, s.clientY, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, 0, null);
                                    f._fake = true;
                                    u.dispatchEvent(f)
                                }
                                if (i.options.onTouchEnd) i.options.onTouchEnd.call(i, r)
                            }, i.options.zoom ? 250 : 0)
                        }
                    }
                    i._resetPos(400);
                    return
                }
                if (h < 300 && i.options.momentum) {
                    l = p ? i._momentum(p - i.startX, h, -i.x, i.scrollerW - i.wrapperW + i.x, i.options.bounce ? i.wrapperW : 0) : l;
                    c = d ? i._momentum(d - i.startY, h, -i.y, i.maxScrollY < 0 ? i.scrollerH - i.wrapperH + i.y - i.minScrollY : 0, i.options.bounce ? i.wrapperH : 0) : c;
                    p = i.x + l.dist;
                    d = i.y + c.dist;
                    if (i.x > 0 && p > 0 || i.x < i.maxScrollX && p < i.maxScrollX) l = {
                        dist: 0,
                        time: 0
                    };
                    if (i.y > i.minScrollY && d > i.minScrollY || i.y < i.maxScrollY && d < i.maxScrollY) c = {
                        dist: 0,
                        time: 0
                    }
                }
                if (l.dist || c.dist) {
                    y = n.max(n.max(l.time, c.time), 10);
                    if (i.options.snap) {
                        v = p - i.absStartX;
                        g = d - i.absStartY;
                        if (n.abs(v) < i.options.snapThreshold && n.abs(g) < i.options.snapThreshold) {
                            i.scrollTo(i.absStartX, i.absStartY, 200)
                        } else {
                            b = i._snap(p, d);
                            p = b.x;
                            d = b.y;
                            y = n.max(b.time, y)
                        }
                    }
                    i.scrollTo(n.round(p), n.round(d), y);
                    if (i.options.onTouchEnd) i.options.onTouchEnd.call(i, r);
                    return
                }
                if (i.options.snap) {
                    v = p - i.absStartX;
                    g = d - i.absStartY;
                    if (n.abs(v) < i.options.snapThreshold && n.abs(g) < i.options.snapThreshold) i.scrollTo(i.absStartX, i.absStartY, 200);
                    else {
                        b = i._snap(i.x, i.y);
                        if (b.x != i.x || b.y != i.y) i.scrollTo(b.x, b.y, b.time)
                    }
                    if (i.options.onTouchEnd) i.options.onTouchEnd.call(i, r);
                    return
                }
                i._resetPos(200);
                if (i.options.onTouchEnd) i.options.onTouchEnd.call(i, r)
            },
            _resetPos: function(e) {
                var t = this;
                if (t.keepInCenterH && t.scrollerW < t.wrapperW) {
                    resetX = t.x >= 0 ? (t.wrapperW - t.scrollerW) / 2 : t.x < t.maxScrollX ? t.maxScrollX : t.x
                } else resetX = t.x >= 0 ? 0 : t.x < t.maxScrollX ? t.maxScrollX : t.x;
                if (t.keepInCenterV && t.scrollerH < t.wrapperH) {
                    resetY = t.y >= t.minScrollY || t.maxScrollY > 0 ? t.minScrollY : t.y < t.maxScrollY ? t.maxScrollY : t.y;
                    resetY = t.y > 0 ? (t.wrapperH - t.scrollerH) / 2 : resetY
                } else resetY = t.y >= t.minScrollY || t.maxScrollY > 0 ? t.minScrollY : t.y < t.maxScrollY ? t.maxScrollY : t.y;
                if (resetX == t.x && resetY == t.y) {
                    if (t.moved) {
                        t.moved = false;
                        if (t.options.onScrollEnd) t.options.onScrollEnd.call(t)
                    }
                    if (t.hScrollbar && t.options.hideScrollbar) {
                        if (i == "webkit") t.hScrollbarWrapper.style[c] = "300ms";
                        t.hScrollbarWrapper.style.opacity = "0"
                    }
                    if (t.vScrollbar && t.options.hideScrollbar) {
                        if (i == "webkit") t.vScrollbarWrapper.style[c] = "300ms";
                        t.vScrollbarWrapper.style.opacity = "0"
                    }
                    return
                }
                t.scrollTo(resetX, resetY, e || 0)
            },
            _wheel: function(e) {
                var t = this,
                    n, r, i, s, o;
                if ("wheelDeltaX" in e) {
                    n = e.wheelDeltaX / 12;
                    r = e.wheelDeltaY / 12
                } else if ("wheelDelta" in e) {
                    n = r = e.wheelDelta / 12
                } else if ("detail" in e) {
                    n = r = -e.detail * 3
                } else {
                    return
                }
                if (t.options.wheelAction == "zoom") {
                    o = t.scale * Math.pow(2, 1 / 3 * (r ? r / Math.abs(r) : 0));
                    if (o < t.options.zoomMin) o = t.options.zoomMin;
                    if (o > t.options.zoomMax) o = t.options.zoomMax;
                    if (o != t.scale) {
                        if (!t.wheelZoomCount && t.options.onZoomStart) t.options.onZoomStart.call(t, e);
                        t.wheelZoomCount++;
                        t.zoom(e.pageX, e.pageY, o, 400);
                        setTimeout(function() {
                            t.wheelZoomCount--;
                            if (!t.wheelZoomCount && t.options.onZoomEnd) t.options.onZoomEnd.call(t, e, t.scale)
                        }, 400)
                    }
                    return
                }
                i = t.x + n;
                s = t.y + r * 5;
                if (i > 0) i = 0;
                if (s > t.minScrollY) s = t.minScrollY;
                else if (s < t.maxScrollY) s = t.maxScrollY;
                if (t.maxScrollY < 0) {
                    t.scrollTo(i, s, 0)
                }
            },
            _transitionEnd: function(e) {
                var t = this;
                if (e.target != t.scroller) return;
                t._unbind(T);
                t._startAni()
            },
            _startAni: function() {
                var e = this,
                    t = e.x,
                    r = e.y,
                    i = Date.now(),
                    s, o, u;
                if (e.animating) return;
                if (!e.steps.length) {
                    e._resetPos(400);
                    return
                }
                s = e.steps.shift();
                if (s.x == t && s.y == r) s.time = 0;
                e.animating = true;
                e.moved = true;
                if (e.options.useTransition) {
                    e._transitionTime(s.time);
                    e._pos(s.x, s.y);
                    e.animating = false;
                    if (s.time) e._bind(T);
                    else e._resetPos(0);
                    return
                }
                u = function() {
                    var a = Date.now(),
                        f, l;
                    if (a >= i + s.time) {
                        e._pos(s.x, s.y);
                        e.animating = false;
                        if (e.options.onAnimationEnd) e.options.onAnimationEnd.call(e);
                        e._startAni();
                        return
                    }
                    a = (a - i) / s.time - 1;
                    o = n.sqrt(1 - a * a);
                    f = (s.x - t) * o + t;
                    l = (s.y - r) * o + r;
                    e._pos(f, l);
                    if (e.animating) e.aniTime = N(u)
                };
                u()
            },
            _transitionTime: function(e) {
                e += "ms";
                this.scroller.style[a] = e;
                if (this.hScrollbar) this.hScrollbarIndicator.style[a] = e;
                if (this.vScrollbar) this.vScrollbarIndicator.style[a] = e
            },
            _momentum: function(e, t, r, i, s) {
                var o = 6e-4,
                    u = n.abs(e) / t,
                    a = u * u / (2 * o),
                    f = 0,
                    l = 0;
                if (e > 0 && a > r) {
                    l = s / (6 / (a / u * o));
                    r = r + l;
                    u = u * r / a;
                    a = r
                } else if (e < 0 && a > i) {
                    l = s / (6 / (a / u * o));
                    i = i + l;
                    u = u * i / a;
                    a = i
                }
                a = a * (e < 0 ? -1 : 1);
                f = u / o;
                return {
                    dist: a,
                    time: n.round(f)
                }
            },
            _offset: function(e) {
                var t = -e.offsetLeft,
                    n = -e.offsetTop;
                while (e = e.offsetParent) {
                    t -= e.offsetLeft;
                    n -= e.offsetTop
                }
                if (e != this.wrapper) {
                    t *= this.scale;
                    n *= this.scale
                }
                return {
                    left: t,
                    top: n
                }
            },
            _snap: function(e, t) {
                var r = this,
                    i, s, o, u, a, f;
                o = r.pagesX.length - 1;
                s = r.pagesX.length;
                for (i = 0; i < s; i++) {
                    if (e >= r.pagesX[i]) {
                        o = i;
                        break
                    }
                }
                if (o == r.currPageX && o > 0 && r.dirX < 0) o--;
                e = r.pagesX[o];
                a = n.abs(e - r.pagesX[r.currPageX]);
                a = a ? n.abs(r.x - e) / a * 500 : 0;
                r.currPageX = o;
                o = r.pagesY.length - 1;
                for (i = 0; i < o; i++) {
                    if (t >= r.pagesY[i]) {
                        o = i;
                        break
                    }
                }
                if (o == r.currPageY && o > 0 && r.dirY < 0) o--;
                t = r.pagesY[o];
                f = n.abs(t - r.pagesY[r.currPageY]);
                f = f ? n.abs(r.y - t) / f * 500 : 0;
                r.currPageY = o;
                u = n.round(n.max(a, f)) || 200;
                return {
                    x: e,
                    y: t,
                    time: u
                }
            },
            _bind: function(e, t, n) {
                if (this.scroller.addEventListener)(t || this.scroller).addEventListener(e, this, !!n);
                else(t || this.scroller).attachEvent(e, this, !!n)
            },
            _unbind: function(e, t, n) {
                if (this.scroller.removeEventListener)(t || this.scroller).removeEventListener(e, this, !!n);
                else(t || this.scroller).detachEvent(e, this, !!n)
            },
            destroy: function() {
                var t = this;
                t.scroller.style[o] = "";
                t.hScrollbar = false;
                t.vScrollbar = false;
                t._scrollbar("h");
                t._scrollbar("v");
                t._unbind(b, e);
                t._unbind(w);
                t._unbind(E, e);
                t._unbind(S, e);
                t._unbind(x, e);
                if (!t.options.hasTouch) {
                    t._unbind("DOMMouseScroll");
                    t._unbind("mousewheel")
                }
                if (t.options.useTransition) t._unbind(T);
                if (t.options.checkDOMChanges) clearInterval(t.checkDOMTime);
                if (t.options.onDestroy) t.options.onDestroy.call(t)
            },
            refresh: function() {
                var e = this,
                    t, r, i, s, o = 0,
                    u = 0;
                if (e.scale < e.options.zoomMin) e.scale = e.options.zoomMin;
                e.wrapperW = e.wrapper.clientWidth || 1;
                e.wrapperH = e.wrapper.clientHeight || 1;
                e.minScrollY = -e.options.topOffset || 0;
                e.scrollerW = n.round(e.scroller.offsetWidth * e.scale);
                e.scrollerH = n.round((e.scroller.offsetHeight + e.minScrollY) * e.scale);
                e.maxScrollX = e.wrapperW - e.scrollerW;
                e.maxScrollY = e.wrapperH - e.scrollerH + e.minScrollY;
                e.dirX = 0;
                e.dirY = 0;
                if (e.options.onRefresh) e.options.onRefresh.call(e);
                e.hScroll = e.options.hScroll && e.maxScrollX < 0;
                e.vScroll = e.options.vScroll && (!e.options.bounceLock && !e.hScroll || e.scrollerH > e.wrapperH);
                e.hScrollbar = e.hScroll && e.options.hScrollbar;
                e.vScrollbar = e.vScroll && e.options.vScrollbar && e.scrollerH > e.wrapperH;
                t = e._offset(e.wrapper);
                e.wrapperOffsetLeft = -t.left;
                e.wrapperOffsetTop = -t.top;
                if (typeof e.options.snap == "string") {
                    e.pagesX = [];
                    e.pagesY = [];
                    s = e.scroller.querySelectorAll(e.options.snap);
                    i = s.length;
                    for (r = 0; r < i; r++) {
                        o = e._offset(s[r]);
                        o.left += e.wrapperOffsetLeft;
                        o.top += e.wrapperOffsetTop;
                        e.pagesX[r] = o.left < e.maxScrollX ? e.maxScrollX : o.left * e.scale;
                        e.pagesY[r] = o.top < e.maxScrollY ? e.maxScrollY : o.top * e.scale
                    }
                } else if (e.options.snap) {
                    e.pagesX = [];
                    while (o >= e.maxScrollX) {
                        e.pagesX[u] = o;
                        o = o - e.wrapperW;
                        u++
                    }
                    if (e.maxScrollX % e.wrapperW) e.pagesX[e.pagesX.length] = e.maxScrollX - e.pagesX[e.pagesX.length - 1] + e.pagesX[e.pagesX.length - 1];
                    o = 0;
                    u = 0;
                    e.pagesY = [];
                    while (o >= e.maxScrollY) {
                        e.pagesY[u] = o;
                        o = o - e.wrapperH;
                        u++
                    }
                    if (e.maxScrollY % e.wrapperH) e.pagesY[e.pagesY.length] = e.maxScrollY - e.pagesY[e.pagesY.length - 1] + e.pagesY[e.pagesY.length - 1]
                }
                e._scrollbar("h");
                e._scrollbar("v");
                if (!e.zoomed) {
                    e.scroller.style[a] = "0";
                    e._resetPos(400)
                }
            },
            scrollTo: function(e, t, n, r) {
                var i = this,
                    s = e,
                    o, u;
                i.stop();
                if (!s.length) s = [{
                    x: e,
                    y: t,
                    time: n,
                    relative: r
                }];
                u = s.length;
                for (o = 0; o < u; o++) {
                    if (s[o].relative) {
                        s[o].x = i.x - s[o].x;
                        s[o].y = i.y - s[o].y
                    }
                    i.steps.push({
                        x: s[o].x,
                        y: s[o].y,
                        time: s[o].time || 0
                    })
                }
                i._startAni()
            },
            scrollToElement: function(e, t) {
                var r = this,
                    i;
                e = e.nodeType ? e : r.scroller.querySelector(e);
                if (!e) return;
                i = r._offset(e);
                i.left += r.wrapperOffsetLeft;
                i.top += r.wrapperOffsetTop;
                i.left = i.left > 0 ? 0 : i.left < r.maxScrollX ? r.maxScrollX : i.left;
                i.top = i.top > r.minScrollY ? r.minScrollY : i.top < r.maxScrollY ? r.maxScrollY : i.top;
                t = t === undefined ? n.max(n.abs(i.left) * 2, n.abs(i.top) * 2) : t;
                r.scrollTo(i.left, i.top, t)
            },
            scrollToPage: function(e, t, n) {
                var r = this,
                    i, s;
                n = n === undefined ? 400 : n;
                if (r.options.onScrollStart) r.options.onScrollStart.call(r);
                if (r.options.snap) {
                    e = e == "next" ? r.currPageX + 1 : e == "prev" ? r.currPageX - 1 : e;
                    t = t == "next" ? r.currPageY + 1 : t == "prev" ? r.currPageY - 1 : t;
                    e = e < 0 ? 0 : e > r.pagesX.length - 1 ? r.pagesX.length - 1 : e;
                    t = t < 0 ? 0 : t > r.pagesY.length - 1 ? r.pagesY.length - 1 : t;
                    r.currPageX = e;
                    r.currPageY = t;
                    i = r.pagesX[e];
                    s = r.pagesY[t]
                } else {
                    i = -r.wrapperW * e;
                    s = -r.wrapperH * t;
                    if (i < r.maxScrollX) i = r.maxScrollX;
                    if (s < r.maxScrollY) s = r.maxScrollY
                }
                r.scrollTo(i, s, n)
            },
            disable: function() {
                this.stop();
                this._resetPos(0);
                this.enabled = false;
                this._unbind(E, e);
                this._unbind(S, e);
                this._unbind(x, e)
            },
            enable: function() {
                this.enabled = true
            },
            stop: function() {
                if (this.options.useTransition) this._unbind(T);
                else C(this.aniTime);
                this.steps = [];
                this.moved = false;
                this.animating = false
            },
            zoom: function(e, t, n, r) {
                var i = this,
                    s = n / i.scale;
                if (!i.options.useTransform) return;
                i.zoomed = true;
                r = r === undefined ? 200 : r;
                e = e - i.wrapperOffsetLeft - i.x;
                t = t - i.wrapperOffsetTop - i.y;
                i.x = e - e * s + i.x;
                i.y = t - t * s + i.y;
                i.scale = n;
                i.refresh();
                i.x = i.x > 0 ? 0 : i.x < i.maxScrollX ? i.maxScrollX : i.x;
                i.y = i.y > i.minScrollY ? i.minScrollY : i.y < i.maxScrollY ? i.maxScrollY : i.y;
                if (i.keepInCenterH) {
                    if (i.scrollerW < i.wrapperW) {
                        i.x = (i.wrapperW - i.scrollerW) / 2
                    }
                }
                if (i.keepInCenterV) {
                    if (i.scrollerH < i.wrapperH) {
                        i.y = (i.wrapperH - i.scrollerH) / 2
                    }
                }
                i.scroller.style[a] = r + "ms";
                i.scroller.style[o] = "translate(" + i.x + "px," + i.y + "px) scale(" + n + ")" + k;
                i.zoomed = false
            },
            isReady: function() {
                return !this.moved && !this.zoomed && !this.animating
            },
            setX: function(e) {
                this.x = e
            }
        };
        r = null;
        if (typeof exports !== "undefined") exports.iScroll = L;
        else e.iScroll = L
    })(window, document)
} {
    Detector = {
        canvas: !!window.CanvasRenderingContext2D,
        webgl: function() {
            try {
                return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl")
            } catch (e) {
                return false
            }
        }(),
        workers: !!window.Worker,
        fileapi: window.File && window.FileReader && window.FileList && window.Blob,
        getWebGLErrorMessage: function() {
            var e = document.createElement("div");
            e.id = "webgl-error-message";
            e.style.fontFamily = "monospace";
            e.style.fontSize = "13px";
            e.style.fontWeight = "normal";
            e.style.textAlign = "center";
            e.style.background = "#fff";
            e.style.color = "#000";
            e.style.padding = "1.5em";
            e.style.width = "400px";
            e.style.margin = "5em auto 0";
            if (!this.webgl) {
                e.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")
            }
            return e
        },
        addGetWebGLMessage: function(e) {
            var t, n, r;
            e = e || {};
            t = e.parent !== undefined ? e.parent : document.body;
            n = e.id !== undefined ? e.id : "oldie";
            r = Detector.getWebGLErrorMessage();
            r.id = n;
            t.appendChild(r)
        }
    }
} {
    var THREEx = THREEx || {};
    THREEx.FullScreen = THREEx.FullScreen || {};
    THREEx.FullScreen.available = function() {
        return this._hasWebkitFullScreen || this._hasMozFullScreen || this._hasIEFullScreen || this._hasFullScreen
    };
    THREEx.FullScreen.activated = function() {
        if (this._hasWebkitFullScreen) {
            return document.webkitIsFullScreen
        } else if (this._hasMozFullScreen) {
            return document.mozFullScreen
        } else if (this._hasIEFullScreen) {
            return document.msFullscreenElement != null
        } else if (this._hasFullScreen) {
            return document.fullscreenElement != null
        } else {
            console.assert(false)
        }
    };
    THREEx.FullScreen.request = function(e) {
        e = e || document.body;
        if (this._hasWebkitFullScreen) {
            e.webkitRequestFullScreen()
        } else if (this._hasMozFullScreen) {
            e.mozRequestFullScreen()
        } else if (this._hasIEFullScreen) {
            e.msRequestFullscreen()
        } else if (this._hasFullScreen) {
            e.requestFullscreen()
        } else {
            console.assert(false)
        }
    };
    THREEx.FullScreen.cancel = function() {
        if (this._hasWebkitFullScreen) {
            document.webkitCancelFullScreen()
        } else if (this._hasMozFullScreen) {
            document.mozCancelFullScreen()
        } else if (this._hasIEFullScreen) {
            document.msExitFullscreen()
        } else if (this._hasFullScreen) {
            document.exitFullscreen()
        } else {
            console.assert(false)
        }
    };
    THREEx.FullScreen._hasWebkitFullScreen = "webkitCancelFullScreen" in document ? true : false;
    THREEx.FullScreen._hasMozFullScreen = "mozCancelFullScreen" in document ? true : false;
    THREEx.FullScreen._hasIEFullScreen = "msExitFullscreen" in document ? true : false;
    THREEx.FullScreen._hasFullScreen = "exitFullscreen" in document ? true : false
} {
    var TWEEN = TWEEN || function() {
        var e, t, n = 60,
            r = false,
            i = [];
        return {
            setFPS: function(e) {
                n = e || 60
            },
            start: function(e) {
                arguments.length != 0 && this.setFPS(e);
                t = setInterval(this.update, 1e3 / n)
            },
            stop: function() {
                clearInterval(t)
            },
            setAutostart: function(e) {
                (r = e) && !t && this.start()
            },
            add: function(e) {
                i.push(e);
                r && !t && this.start()
            },
            getAll: function() {
                return i
            },
            removeAll: function() {
                i = []
            },
            remove: function(t) {
                e = i.indexOf(t);
                e !== -1 && i.splice(e, 1)
            },
            update: function(t) {
                e = 0;
                num_tweens = i.length;
                for (t = t || Date.now(); e < num_tweens;)
                    if (i[e].update(t)) e++;
                    else {
                        i.splice(e, 1);
                        num_tweens--
                    }
                num_tweens == 0 && r == true && this.stop()
            }
        }
    }();
    TWEEN.Tween = function(e) {
        var t = {},
            n = {},
            r = {},
            i = 1e3,
            s = 0,
            o = null,
            u = TWEEN.Easing.Linear.EaseNone,
            a = null,
            f = null,
            l = null;
        this.to = function(t, n) {
            if (n !== null) i = n;
            for (var s in t)
                if (e[s] !== null) r[s] = t[s];
            return this
        };
        this.start = function(i) {
            TWEEN.add(this);
            o = i ? i + s : Date.now() + s;
            for (var u in r)
                if (e[u] !== null) {
                    t[u] = e[u];
                    n[u] = r[u] - e[u]
                }
            return this
        };
        this.stop = function() {
            TWEEN.remove(this);
            return this
        };
        this.delay = function(e) {
            s = e;
            return this
        };
        this.easing = function(e) {
            u = e;
            return this
        };
        this.chain = function(e) {
            a = e
        };
        this.onUpdate = function(e) {
            f = e;
            return this
        };
        this.onComplete = function(e) {
            l = e;
            return this
        };
        this.update = function(r) {
            var s, p;
            if (r < o) return true;
            r = (r - o) / i;
            r = r > 1 ? 1 : r;
            p = u(r);
            for (s in n) e[s] = t[s] + n[s] * p;
            f !== null && f.call(e, p);
            if (r == 1) {
                l !== null && l.call(e);
                a !== null && a.start();
                return false
            }
            return true
        }
    };
    TWEEN.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    TWEEN.Easing.Linear.EaseNone = function(e) {
        return e
    };
    TWEEN.Easing.Quadratic.EaseIn = function(e) {
        return e * e
    };
    TWEEN.Easing.Quadratic.EaseOut = function(e) {
        return -e * (e - 2)
    };
    TWEEN.Easing.Quadratic.EaseInOut = function(e) {
        if ((e *= 2) < 1) return .5 * e * e;
        return -.5 * (--e * (e - 2) - 1)
    };
    TWEEN.Easing.Cubic.EaseIn = function(e) {
        return e * e * e
    };
    TWEEN.Easing.Cubic.EaseOut = function(e) {
        return --e * e * e + 1
    };
    TWEEN.Easing.Cubic.EaseInOut = function(e) {
        if ((e *= 2) < 1) return .5 * e * e * e;
        return .5 * ((e -= 2) * e * e + 2)
    };
    TWEEN.Easing.Quartic.EaseIn = function(e) {
        return e * e * e * e
    };
    TWEEN.Easing.Quartic.EaseOut = function(e) {
        return -(--e * e * e * e - 1)
    };
    TWEEN.Easing.Quartic.EaseInOut = function(e) {
        if ((e *= 2) < 1) return .5 * e * e * e * e;
        return -.5 * ((e -= 2) * e * e * e - 2)
    };
    TWEEN.Easing.Quintic.EaseIn = function(e) {
        return e * e * e * e * e
    };
    TWEEN.Easing.Quintic.EaseOut = function(e) {
        return (e -= 1) * e * e * e * e + 1
    };
    TWEEN.Easing.Quintic.EaseInOut = function(e) {
        if ((e *= 2) < 1) return .5 * e * e * e * e * e;
        return .5 * ((e -= 2) * e * e * e * e + 2)
    };
    TWEEN.Easing.Sinusoidal.EaseIn = function(e) {
        return -Math.cos(e * Math.PI / 2) + 1
    };
    TWEEN.Easing.Sinusoidal.EaseOut = function(e) {
        return Math.sin(e * Math.PI / 2)
    };
    TWEEN.Easing.Sinusoidal.EaseInOut = function(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    };
    TWEEN.Easing.Exponential.EaseIn = function(e) {
        return e == 0 ? 0 : Math.pow(2, 10 * (e - 1))
    };
    TWEEN.Easing.Exponential.EaseOut = function(e) {
        return e == 1 ? 1 : -Math.pow(2, -10 * e) + 1
    };
    TWEEN.Easing.Exponential.EaseInOut = function(e) {
        if (e == 0) return 0;
        if (e == 1) return 1;
        if ((e *= 2) < 1) return .5 * Math.pow(2, 10 * (e - 1));
        return .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
    };
    TWEEN.Easing.Circular.EaseIn = function(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    };
    TWEEN.Easing.Circular.EaseOut = function(e) {
        return Math.sqrt(1 - --e * e)
    };
    TWEEN.Easing.Circular.EaseInOut = function(e) {
        if ((e /= .5) < 1) return -.5 * (Math.sqrt(1 - e * e) - 1);
        return .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    };
    TWEEN.Easing.Elastic.EaseIn = function(e) {
        var t, n = .1,
            r = .4;
        if (e == 0) return 0;
        if (e == 1) return 1;
        r || (r = .3);
        if (!n || n < 1) {
            n = 1;
            t = r / 4
        } else t = r / (2 * Math.PI) * Math.asin(1 / n);
        return -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r))
    };
    TWEEN.Easing.Elastic.EaseOut = function(e) {
        var t, n = .1,
            r = .4;
        if (e == 0) return 0;
        if (e == 1) return 1;
        r || (r = .3);
        if (!n || n < 1) {
            n = 1;
            t = r / 4
        } else t = r / (2 * Math.PI) * Math.asin(1 / n);
        return n * Math.pow(2, -10 * e) * Math.sin((e - t) * 2 * Math.PI / r) + 1
    };
    TWEEN.Easing.Elastic.EaseInOut = function(e) {
        var t, n = .1,
            r = .4;
        if (e == 0) return 0;
        if (e == 1) return 1;
        r || (r = .3);
        if (!n || n < 1) {
            n = 1;
            t = r / 4
        } else t = r / (2 * Math.PI) * Math.asin(1 / n);
        if ((e *= 2) < 1) return -.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r);
        return n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) * .5 + 1
    };
    TWEEN.Easing.Back.EaseIn = function(e) {
        return e * e * (2.70158 * e - 1.70158)
    };
    TWEEN.Easing.Back.EaseOut = function(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
    };
    TWEEN.Easing.Back.EaseInOut = function(e) {
        if ((e *= 2) < 1) return .5 * e * e * (3.5949095 * e - 2.5949095);
        return .5 * ((e -= 2) * e * (3.5949095 * e + 2.5949095) + 2)
    };
    TWEEN.Easing.Bounce.EaseIn = function(e) {
        return 1 - TWEEN.Easing.Bounce.EaseOut(1 - e)
    };
    TWEEN.Easing.Bounce.EaseOut = function(e) {
        return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    };
    TWEEN.Easing.Bounce.EaseInOut = function(e) {
        if (e < .5) return TWEEN.Easing.Bounce.EaseIn(e * 2) * .5;
        return TWEEN.Easing.Bounce.EaseOut(e * 2 - 1) * .5 + .5
    }
}
if (!FLIPBOOK.threejsSrc && typeof document !== "undefined") {
    FLIPBOOK.threejsSrc = function() {
        var e = document.body || document.getElementsByTagName("head")[0];
        var t = e.lastChild.src;
        return t && t.replace("/flipbook", "/three66")
    }()
}
if (!FLIPBOOK.flipbookWebGlSrc && typeof document !== "undefined") {
    FLIPBOOK.flipbookWebGlSrc = function() {
        var e = document.body || document.getElementsByTagName("head")[0];
        var t = e.lastChild.src;
        return t && t.replace("/flipbook", "/flipbook.webgl")
    }()
}
if (!FLIPBOOK.pdfjsSrc && typeof document !== "undefined") {
    FLIPBOOK.pdfjsSrc = function() {
        var e = document.body || document.getElementsByTagName("head")[0];
        var t = e.lastChild.src;
        return t && t.replace("/flipbook", "/pdf")
    }()
}
if (!FLIPBOOK.compatibilityjsSrc && typeof document !== "undefined") {
    FLIPBOOK.compatibilityjsSrc = function() {
        var e = document.body || document.getElementsByTagName("head")[0];
        var t = e.lastChild.src;
        return t && t.replace("/flipbook", "/compatibility")
    }()
}
if (!FLIPBOOK.pdfjsworkerSrc && typeof document !== "undefined") {
    FLIPBOOK.pdfjsworkerSrc = function() {
        var e = document.body || document.getElementsByTagName("head")[0];
        var t = e.lastChild.src;
        return t && t.replace("/flipbook", "/pdf.worker")
    }()
}
FLIPBOOK.scriptsLoaded = []