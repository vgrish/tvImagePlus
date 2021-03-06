var ImagePlus = function(config) {
    config = config || {};
    ImagePlus.superclass.constructor.call(this,config);
};
Ext.extend(ImagePlus,Ext.Component,{
    page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {},
    mediaSourceUrlMap: {
        1: '/',
    },

    /**
     * Strip the last part of a file path and return the rest
     *
     * @param p {String}
     * @returns {String}
     */
    getPathDir: function(p){
        if(p == undefined){
            return undefined;
        }
        var bits = p.split('/');
        bits.pop();
        return bits.join('/');
    },

    getMediaSourceRelativeUrl: function(ms,path){
        return this.mediaSourceUrlMap[ms]+path;
    },


    showRegenerateCacheWindow: function(){

        if(!this.regenerateCacheWindow){
            this.regenerateCacheWindow = MODx.load({
                xtype: 'imageplus-window-regeneratecache'
            })
        }
        this.regenerateCacheWindow.show();

    }
});
Ext.reg('ImagePlus',ImagePlus);
ImagePlus = new ImagePlus();


/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-canvas-file_api
 */
window.Modernizr=window.Modernizr||function(a,b,c){function t(a){i.cssText=a}function u(a,b){return t(prefixes.join(a+";")+(b||""))}function v(a,b){return typeof a===b}function w(a,b){return!!~(""+a).indexOf(b)}function x(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:v(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l={},m={},n={},o=[],p=o.slice,q,r={}.hasOwnProperty,s;!v(r,"undefined")&&!v(r.call,"undefined")?s=function(a,b){return r.call(a,b)}:s=function(a,b){return b in a&&v(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=p.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(p.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(p.call(arguments)))};return e}),l.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};for(var y in l)s(l,y)&&(q=y.toLowerCase(),e[q]=l[y](),o.push((e[q]?"":"no-")+q));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)s(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},t(""),h=j=null,e._version=d,e}(this,this.document),Modernizr.addTest("filereader",function(){return!!(window.File&&window.FileList&&window.FileReader)});


/**
 * Returns a new event handler that can be limited
 * to only fire once every n seconds, where
 * n is set using the threshold parameter
 *
 * @param fn {Function} The actual event handler
 * @param threshhold {Number} Interval in ms to force between events
 * @param scope
 * @returns {Function}
 */
ImagePlus.throttle = function (fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
};