(function(){$(document).ready(function(){return $(".mochi_toggle").click(function(){$(this).attr("checked",this.checked)}),$(".mochi_button_group_item").click(function(){var t;return t=$(this).attr("name"),$(".mochi_button_group_item[name="+t+"]").not(this).removeClass("selected"),$(this).addClass("selected")})})}).call(this);