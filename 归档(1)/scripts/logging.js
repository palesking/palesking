(function(){var o,n;o=function(){function o(){}return o.log=function(o){return console?console.log(o):void 0},o.error=function(o){return console?console.error(o):void 0},o.warn=function(o){return console?console.warn(o):void 0},o.info=function(o,n){var r;return null==n&&(n=0),r=function(o){var n,r,e,t;for(t="",n=r=0,e=o;e>=0?e>r:r>e;n=e>=0?++r:--r)t+="  ";return t},console?console.log((new Date).toLocaleTimeString(),r(n),o):void 0},o}(),n="undefined"!=typeof exports&&null!==exports?exports:this,n.Logging=o}).call(this);