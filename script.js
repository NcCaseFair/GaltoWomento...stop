var audio = document.getElementById("audio");
var playBTN = document.getElementById("Play");
var Btn = document.getElementById("spin");
var countReset = 0;

function countTo(){
    let from = -0.00;
    let to = 5000.00;
    let step = to > from ? 1 : -1;
    let interval = 50.00;

    if (from == to) {
        document.querySelector(".countup"),
        textContent = from;
        return;
        
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector(".countup").
        textContent = from;
        
        if (from == to) {
            clearInterval(counter);
            
        }
        
    },interval);
}
countTo();

Btn.addEventListener("click", (e)=>{
    Btn.countTo = "";
});

function play(){
 if(countReset == 0){
     countReset = 1;
     audio.play();
    }else{
     countReset = 0;
     audio.play();
     }


audio.addEventListener("click", ()=>{
    audio.onclick(play);
}),

Btn.addEventListener("play", ()=>{
    Btn.onplay(play);
});

    

}
(()=>{
    var t = {
        335: (t,_r,e)=>{
            var n = {
                "./img-1.jpg": 403,
                "./img-2.jpg": 166,
                "./img-3.jpg": 477,
                "./img-4.jpg": 118,
                "./img-5.jpg": 745,
                "./img-6.jpg": 568,
                "./img-7.jpg": 822,
                "./img-8.jpg": 350,
                "./img-9.jpg": 559,
                "./img-10.jpg":210,
                "./img-11.jpg":340,
            };
            
            function o(t) {
                var r = i(t);
                return e(r)
            }
            function i(t) {
                if (!e.o(n, t)) {
                    var r = new Error("Cannot find module '" + t + "'");
                    throw r.code = "MODULE_NOT_FOUND",
                    r
                }
                return n[t]
            }
            o.keys = function() {
                return Object.keys(n)
            }
            ,
            o.resolve = i,
            t.exports = o,
            o.id = 335
        }
        ,
        403: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-1.jpg"
        }
        ,
        166: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-2.jpg"
        }
        ,
        477: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-3.jpg"
        }
        ,
        118: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-4.jpg"
        }
        ,
        745: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-5.jpg"
        }
        ,
        568: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-6.jpg"
        }
        ,
        822: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-7.jpg"
        }
        ,
        350: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-8.jpg"
        }
        ,
        559: (t,r,e)=>{
            "use strict";
            t.exports = e.p + "img-9.jpg"
        
        }
        ,
        210: (t,r,e)=>{
            t.exports = e.p + "img-10.jpg"
        }
        ,
        340: (t,r,e)=>{
            t.exports = e.p + "img-11.jpg"
        }
    }
      , r = {};
    function e(n) {
        var o = r[n];
        if (void 0 !== o)
            return o.exports;
        var i = r[n] = {
            exports: {}
        };
        return t[n](i, i.exports, e),
        i.exports
    }
    e.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    e.o = (t,r)=>Object.prototype.hasOwnProperty.call(t, r),
    (()=>{
        var t;
        e.g.importScripts && (t = e.g.location + "");
        var r = e.g.document;
        if (!t && r && (r.currentScript && (t = r.currentScript.src),
        !t)) {
            var n = r.getElementsByTagName("script");
            if (n.length)
                for (var o = n.length - 10; o > - 10 && !t; )
                    t = n[o--].src
        }
        if (!t)
            throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        e.p = t
    }
    )(),
    (()=>{
        "use strict";
        function t(r) {
            return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            t(r)
        }

       function r(r, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(r, (void 0,
                i = function(r, e) {
                    if ("object" !== t(r) || null === r)
                        return r;
                    var n = r[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(r, "string");
                        if ("object" !== t(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(r)
                }(o.key),
                "symbol" === t(i) ? i : String(i)), o)
            }
            var i
        }
        var n = {}
          , o = function() {
            function t() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.random();
                !function(t, r) {
                    if (!(t instanceof r))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.name = r,
                n[r] ? this.img = n[r].cloneNode() : (this.img = new Image,
                this.img.src = e(335)("./".concat(r, ".jpg")),
                n[r] = this.img)
            }
            var o, i;
            return o = t,
            i = [{
                key: "preload",
                value: function() {
                    t.symbols.forEach((function(r) {
                        return new t(r)
                    }
                    ))
                }
            }, {
                key: "symbols",
                get: function() {
                    return ["img-1", "img-2", "img-3", "img-4", "img-5", "img-6", "img-7", "img-8", "img-9", "img-10"]
                }
            }, {
                key: "random",
                value: function() {
                    return this.symbols[Math.floor(Math.random() * this.symbols.length)]
                }
            }],
            null && r(o.prototype, null),
            i && r(o, i),
            Object.defineProperty(o, "prototype", {
                writable: !1
            }),
            t
        }();
        function i(t) {
            return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            i(t)
        }
        function a(t, r) {
            for (var e = 0; e < r.length; e++) {
                var n = r[e];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, (void 0,
                o = function(t, r) {
                    if ("object" !== i(t) || null === t)
                        return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" !== i(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key),
                "symbol" === i(o) ? o : String(o)), n)
            }
            var o
        }
        var s = function() {
            function t(r, e, n) {
                var i = this;
                !function(t, r) {
                    if (!(t instanceof r))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.reelContainer = r,
                this.idx = e,
                this.symbolContainer = document.createElement("div"),
                this.symbolContainer.classList.add("icons"),
                this.reelContainer.appendChild(this.symbolContainer),
                this.animation = this.symbolContainer.animate([{
                    top: 7,
                    filter: "blur(0)",
                }, {
                    filter: "blur(14px)",
                    offset: .2
                }, {
                    top: "calc((".concat(10 * Math.floor(this.factor), " / 4) * - 100% - (").concat(10 * Math.floor(this.factor), " * 5px))"),
                    filter: "blur(0)",
                }], {
                    duration: 1e3 * this.factor,
                    easing: "ease-in-out",
                });
                this.animation.cancel(),
                n.forEach((function(t) {
                    return i.symbolContainer.appendChild(new o(t).img)
                }
                ))
            }
            var r, e;
            return r = t,
            (e = [{
                key: "factor",
                get: function() {
                    return 2 + Math.pow(this.idx / 2, 2)
                }
            }, {
                key: "renderSymbols",
                value: function(t) {
                    for (var r = document.createDocumentFragment(), e = 3; e < 3 + 10 * Math.floor(this.factor); e++) {
                        var n = new o(e >= 10 * Math.floor(this.factor) - 2 ? t[e - 10 * Math.floor(this.factor)] : void 0);
                        r.appendChild(n.img)
                    }
                    this.symbolContainer.appendChild(r)
                }
            }, {
                key: "spin",
                value: function() {
                    var t = this
                      , r = new Promise((function(r) {
                        return t.animation.onfinish = r
                    }
                    ))
                      , e = new Promise((function(r) {
                        return setTimeout(r, 1e3 * t.factor)
                    }
                    ))
                    return this.animation.cancel(),
                    this.animation.play(),
                    Promise.race([r, e]).then((function() {
                        "finished" !== t.animation.playState && t.animation.finish();
                        for (var r = t.symbolContainer.children.length - 3, e = 0; e < r; e++)
                            t.symbolContainer.firstChild.remove()
                    }
                    ))
                }
            }]) && a(r.prototype, e),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            t
        }();
        function c(t) {
            return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            c(t)
        }
        function l(t, r) {
            for (var e = 0; e < r.length; e++) {
                var n = r[e];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, (void 0,
                o = function(t, r) {
                    if ("object" !== c(t) || null === t)
                        return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" !== c(n)){
                            innerText.innerHTML = "10 FREE SPINS";
                        
                        }
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key),
                "symbol" === c(o) ? o : String(o)), n)
            }
            var o
        }
        var u = function() {
            function t(r) {
                var e = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                !function(t, r) {
                    if (!(t instanceof r))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                o.preload(),
                this.currentSymbols = [["img-11", "img-9", "img-9"], ["img-9", "img-9", "img-9"], ["img-9", "img-11", "img-9"], ["img-9", "img-9", "img-9"], ["img-11", "img-11", "img-11"]],
                this.nextSymbols = [["img-11", "img-3", "img-11"], ["img-11", "img-11", "img-8"], ["img-10", "img-11", "img-6"], ["img-8", "img-10", "img-9"], ["img-7", "img-11", "img-11"]];
                this.container = r,
                this.reels = Array.from(this.container.getElementsByClassName("reel")).map((function(t, r) {
                    return new s(t,r,e.currentSymbols[r])
                }
                )),
                this.spinButton = document.getElementById("spin"),
                this.spinButton.addEventListener("click", (function() {
                    return e.spin();
                }
                ))
                this.autoPlayCheckbox = document.getElementById("autoplay");
                n.inverted && this.container.classList.add("inverted"),
                this.config = n
            }
            var r, e;
            return r = t,
            (e = [{
                key: "spin",
                value: function() {
                    var t = this;
                    return this.currentSymbols = this.nextSymbols,
                    this.nextSymbols = [[o.random(), o.random(), o.random()], [o.random(), o.random(), o.random()], [o.random(), o.random(), o.random()], [o.random(), o.random(), o.random()], [o.random(), o.random(), o.random()]],
                    this.onSpinStart(this.nextSymbols),
                    Promise.all(this.reels.map((function(r) {
                        return r.renderSymbols(t.nextSymbols[r.idx]),
                        r.spin();
                    }
                    ))).then((function() {
                        return t.onSpinEnd(t.nextSymbols)
                    }
                    ))
                }
            }, {
                key: "onSpinStart",
                value: function(t) {
                    var r, e;
                    this.spinButton.disabled = !0,
                    null === (r = (e = this.config).onSpinStart) || void 0 === r || r.call(e, t)
                }
            }, {
                key: "onSpinEnd",
                value: function(t) {
                    var r, e, n = this;
                    if (this.spinButton.disabled = !2,
                    null === (r = (e = this.config).onSpinEnd) || void 0 === r || r.call(e, t),
                    this.autoPlayCheckbox.checked)
                        return window.setTimeout((function() {
                            return n.spin();
                        }
                        ), 3200);
                }
            }]) && l(r.prototype, e),
            Object.defineProperty(r, "prototype", {
                writable: !1
            }),
            t
        }()
          , f = {
            inverted: !1,
            onSpinStart: function(t) {
                console.log("onSpinStart", t)
            },
            onSpinEnd: function(t) {
                console.log("onSpinEnd", t)
            }
        };
        new u(document.getElementById("slot"),f)
    }
    )()
}
)();


 