define(["jquery","helpers","datatables-extend","extend-moment"],function(e,t,a,n){var i=e("#buildQueueTotal"),r=e("#buildSlavesTotal"),l=e("#verticalProgressBar"),s=e("#buildLoad"),o=s.find("span"),u={init:function(){requirejs(["realtimePages"],function(e){u.initDataTable();var t=e.defaultRealtimeFunctions();e.initRealtime(t)})},processGlobalInfo:function(e){n.setServerTime(e.utc);var a=e.build_load;i.show(),r.show(),l.show();var u=100>=a?"green":a>=101&&200>=a?"yellow":"red";s.attr({"class":"info-box "+u}).show();var d=e.slaves_count,b=e.slaves_busy/d*100,c=d-e.slaves_busy,v=e.running_builds;t.verticalProgressBar(l.children(),b),l.attr("title","{0} builds are running, {1}, agents are idle".format(v,c)),r.text(d),o.text(a)},initDataTable:function(){var t=e(".tablesorter-js");0===t.length&&(t=e("#tablesorterRt")),e.each(t,function(t,n){a.initTable(e(n),{})})}};return u});
//# sourceMappingURL=rtGlobal.js.map