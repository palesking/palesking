(function(){var e,o,t,n,r,s,i,a,l,c;o=null,e=null,t=0,n=!1,l=function(e){switch(e){case"on":return chrome.browserAction.setIcon({path:{19:"image/icon_19.png",38:"image/icon_38.png"}});case"on_sec":return chrome.browserAction.setIcon({path:{19:"image/icon_19.png",38:"image/icon_38.png"}});case"off_alt":return chrome.browserAction.setIcon({path:{19:"image/off_icon_19.png",38:"image/off_icon_38.png"}}),chrome.browserAction.setTitle({title:"Proxy disabled, use system settings"});default:return chrome.browserAction.setIcon({path:{19:"image/off_icon_19.png",38:"image/off_icon_38.png"}}),chrome.browserAction.setTitle({title:"Proxy disabled."})}},a=function(e){return chrome.browserAction.setTitle({title:"Connect to "+e})},r=function(e,o){return chrome.proxy.settings.get({incognito:!1},function(t){return c(t),e===!1&&setTimeout(r,3e4),o?o(t):void 0})},c=function(e){var o;return o=!1,"controlled_by_this_extension"===e.levelOfControl&&(l("fixed_servers"===e.value.mode&&"https"===e.value.rules.singleProxy.scheme?"on_sec":"system"===e.value.mode?"off_alt":"on"),o=!0),"controllable_by_this_extension"===e.levelOfControl&&(l("off"),o=!0),o?"direct"===e.value.mode?l("off"):void 0:l("off")},i=function(e){e.use_auth&&(o=e),n=!1},s=function(){var e,t;return o?o:(e=localStorage.getItem("Profile"),t=localStorage.getItem("selected"),e&&t?(e=JSON.parse(e))?(e=e.filter(function(e){return e.name===t?!0:void 0}),e.length>0?(i(e[0]),o):(console.log("No profile found."),null)):(console.log("Unable to parse profile from localStorage."),null):void 0)},chrome.webRequest.onAuthRequired.addListener(function(o,r){var i;return o.isProxy&&o.challenger?(console.log("Proxy authorization request: "+JSON.stringify(o)),n?(console.log("Blocking proxy authorization request due to too many failure."),r()):(e||(e=o.challenger),JSON.stringify(e)!==JSON.stringify(o.challenger)&&(console.log("Proxy authorization challenger changed from "+JSON.stringify(e)+" to "+JSON.stringify(o.challenger)),e=o.challenger,t=0),t++,i=s(),i&&i.use_auth?-1===i.host.indexOf(o.challenger.host)?(console.log('Challenger dismatch, should be "'+i.host+'", got "'+o.challenger.host('", skip this request.')),r()):t>3?(alert("Incorrect username or password, please change your proxy settings or contact with administrator."),t=0,n=!0,r()):r({authCredentials:{username:i.username,password:i.password}}):(console.log("Authorization profile not set, skip this request."),r()))):r()},{urls:["<all_urls>"]},["asyncBlocking"]),chrome.runtime.onMessage.addListener(function(e,o,t){switch(e.msg){case"update_status":r(!1,function(e){return t({status:"ok",config:JSON.stringify(e)})});break;case"set_icon":l(e.name),t({status:"ok"});break;case"set_conn_stat":a(e.name),t({status:"ok"});break;case"set_auth":i(e.profile),t({status:"ok"})}return!0})}).call(this);