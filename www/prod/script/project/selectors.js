define(["jquery","select2"],function(e){var t;return t={init:function(){var n=e(".select-tools-js"),c=e("#commonBranch_select");n.removeClass("hide"),n.select2({width:t.getMaxChildWidth(n),minimumResultsForSearch:10}),n.add(c).on("select2-open",function(){t.clickSort()}),t.comboBox(n,c),c.select2({width:t.getMaxChildWidth(c),placeholder:"Select a branch"}),c.add(n).on("select2-close",function(){e(".sort-name").unbind("click"),e(".select2-container").removeClass("select2-container-active")}),n.on("select2-selecting",function(){c.select2("val","")})},getMaxChildWidth:function(t){var n=80;return t.each(function(){var t=e(this).width();t>n&&(n=t+30)}),n},comboBox:function(t,n){e("option",t).each(function(){e(this).clone().prop("selected",!1).appendTo(n)});var c={};e("option",n).each(function(){var t=e(this).text();void 0===c[t]?c[t]=!0:e(this).remove()});var o=[];e(t).each(function(t,n){var c=e("option[selected]",n);o.push(c.html().trim())}),n.on("change",function(){var n=e(this);e(t).each(function(t,c){e("option",c).each(function(){return e(this).val()===e(n).val()?(e(this).parent().children("option").prop("selected",!1),e(this).prop("selected",!0),!1):!0}),e(c).val()!==n.val()&&e(c).val(o[t])}),t.trigger("change")})},clickSort:function(){var t=e("#select2-drop"),n=t.children(".select2-results"),c=t.children(".sort-name");c.bind("click",function(t){t.preventDefault(),c.toggleClass("direction-up"),n.children("li").sort(function(t,n){var o=e(t).text().toUpperCase(),i=e(n).text().toUpperCase();return c.hasClass("direction-up")?o>i?-1:i>o?1:0:i>o?-1:o>i?1:0}).appendTo(n),n.prop({scrollTop:0})})}}});
//# sourceMappingURL=selectors.js.map