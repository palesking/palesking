(function(){var e,t,r=function(e,t){return function(){return e.apply(t,arguments)}},i=function(e,t){function r(){this.constructor=e}for(var i in t)n.call(t,i)&&(e[i]=t[i]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},n={}.hasOwnProperty;e=function(e){function t(){this.remove=r(this.remove,this),this.selectProfile=r(this.selectProfile,this),this.addProfile=r(this.addProfile,this),this.add=r(this.add,this),this.render=r(this.render,this),t.__super__.constructor.apply(this,arguments),Profile.bind("change refresh",this.render)}return i(t,e),t.prototype.events={"click #add_proxy_button":"addProfile","click .mochi_radio":"selectProfile","click .edit":"editProfile"},t.prototype.render=function(){var e;return e=[],Profile.each(function(t){return function(r){return 0===t.el.find('.profile[name="'+r.name+'"]').length?e.push(function(){return t.add(r,function(){return $(window).dequeue("profile")})}):void 0}}(this)),e.push(function(e){return function(){var t,r,i,n;for(n=e.el.find(".profile"),t=0,r=n.length;r>t;t++)i=n[t],0===Profile.getByName($(i).attr("name")).length&&$(i).attr("delete",!0);return e.el.find(".profile[delete]").remove(),$(window).dequeue("profile")}}(this)),e.push(function(e){return function(){var t,r,i,n,o;for(o=e.el.find(".profile"),i=[],t=0,r=o.length;r>t;t++)n=o[t],-1!==i.indexOf($(n).attr("name"))?$(n).remove():i.push($(n).attr("name"));return $(window).dequeue("profile")}}(this)),e.push(function(e){return function(){return e.el.find(".profile").show(),$(window).dequeue("profile")}}(this)),$(window).queue("profile",e),$(window).dequeue("profile")},t.prototype.add=function(e,t){var r;return r=localStorage.getItem("selected"),this.sandbox.mandate("render",{tmpl:"profile",data:e.toTemplateMapping()},function(i){return function(n){return i.el.prepend(n),e.name===r&&i.el.find('.mochi_radio[value="'+e.name+'"]').attr("checked",!0).prop("checked",!0),t()}}(this))},t.prototype.addProfile=function(e){return app.profileDetail.reset(),app.profileDetail.show(),this.hide()},t.prototype.selectProfile=function(e){var t,r;return t=$(e.currentTarget),r=Profile.getByName(t.val()),0!==r.length?(r=r[0],t.prop("checked")?(localStorage.setItem("selected",t.val()),app.state&&Agent.enable(r.name),this.parentCtrl.updateProxyStatus()):void 0):void 0},t.prototype.editProfile=function(e){var t,r;return t=$(e.currentTarget),r=Profile.getByName(t.attr("href").substring(1))[0],app.profileDetail.setProfile(r),app.profileDetail.show(),this.hide()},t.prototype.remove=function(e){return this.el.find("profile[name="+e.name+"]").remove(),Profile.destroy(e.id)},t.prototype.getEl=function(){return this.el},t.prototype.getCurrentEl=function(){return this.el.find(".mochi_radio:checked").closest("li")},t.prototype.getCurrent=function(){var e;return e=this.el.find(".mochi_radio:checked").val()},t.prototype.saveSpeedtestResult=function(e){var t;return t=Profile.getByName(e),0!==t.length?(t=t[0],t.ping=$('.mochi_list_item[name="'+e+'"]').find(".ping").text(),t.rate=$('.mochi_list_item[name="'+e+'"]').find(".rate").text(),t.save()):void 0},t.prototype.setPingText=function(e,t){return $('.mochi_list_item[name="'+e+'"]').find(".ping").text(t),-1===t.indexOf("testing")?this.saveSpeedtestResult(e):void 0},t.prototype.setRateText=function(e,t){return $('.mochi_list_item[name="'+e+'"]').find(".rate").text(t),-1===t.indexOf("testing")?this.saveSpeedtestResult(e):void 0},t.prototype.show=function(){return $("#profile_list_page").slideDown()},t.prototype.hide=function(){return $("#profile_list_page").slideUp()},t}(Spine.Controller),t="undefined"!=typeof exports&&null!==exports?exports:this,t.ProfileList=e}).call(this);