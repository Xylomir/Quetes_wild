(function(g){g.fn.toggles=function(i){var i=i||{},b={dragable:!0,clickable:!0,ontext:"ON",offtext:"OFF",on:!0,animtime:300},e;for(e in i)i.hasOwnProperty(e)&&(b[e]=i[e]);e="margin-left "+b.animtime/1E3+"s ease-in-out";var n={"-webkit-transition":e,"-moz-transition":e,transition:e},o={"-webkit-transition":"","-moz-transition":"",transition:""};this.each(function(){function e(g){c.off("mousemove");j.off("mouseleave");h.off("mouseup");0!==f?j.hasClass("active")?f<(-d+a)/2?c.trigger("toggle"):
k.animate({marginLeft:0},b.animtime/2):f>(d-a)/2?c.trigger("toggle"):k.animate({marginLeft:-d+a},b.animtime/2):b.clickable&&"mouseleave"!=g.type&&c.trigger("toggle")}var c=g(this);b.click=i.click||c;var a=c.height(),d=c.width();if(0===a||0===d)c.height(a=20),c.width(d=50);var j=g('<div class="slide" />'),k=g('<div class="inner" />'),l=g('<div class="on" />'),m=g('<div class="off" />'),h=g('<div class="blob" />');l.css({height:a,width:d-a/2,textAlign:"center",textIndent:-a/2,lineHeight:a+"px"}).text(b.ontext);
m.css({height:a,width:d-a/2,marginLeft:-a/2,textAlign:"center",textIndent:a/2,lineHeight:a+"px"}).text(b.offtext);h.css({height:a,width:a,marginLeft:-a/2});k.css({width:2*d-a,marginLeft:b.on?0:-d+a});b.on&&(j.addClass("active"),b.checkbox&&g(b.checkbox).attr("checked",!0));c.html("");c.append(j.append(k.append(l,h,m)));var f=0;c.on("toggle",function(){var c=j,e=d,f=a,h=c.find(".inner");h.css(n);var i=c.toggleClass("active").hasClass("active");h.css({marginLeft:i?0:-e+f});b.checkbox&&g(b.checkbox).attr("checked",
i);setTimeout(function(){h.css({marginLeft:i?0:-e+f});h.css(o)},b.animtime)});b.clickable&&b.click.click(function(a){(a.target!=h[0]||!b.dragable)&&c.trigger("toggle")});if(b.dragable)h.on("mousedown",function(b){f=0;h.off("mouseup");j.off("mouseleave");var g=b.pageX;c.on("mousemove",h,function(b){f=b.pageX-g;j.hasClass("active")?k.css({marginLeft:f<0?f<-d+a?-d+a:f:0}):k.css({marginLeft:f>0?f>d-a?0:f-d+a:-d+a})});h.on("mouseup",e);j.on("mouseleave",e)})})}})(jQuery);