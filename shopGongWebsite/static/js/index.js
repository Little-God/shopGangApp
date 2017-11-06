/******wangmu by2016 7-21********/
$(function() {
    //四周年banner
	var flag=false;
    //if(JudgeTime()){
    if(flag){
		var actWindowStrVar = "";
			actWindowStrVar += "<section class=\"actWindow\" style=\"background-color:#000;left:0;right:0;bottom:0;opacity:.8;position:fixed;top:0;z-index:2000;filter:alpha(opacity=80);-moz-opacity:.8;-khtml-opacity:.8;display:block;z-index:1000;width:100%\"><div class=\"thisActMod\" style=\"position:fixed;width:629px;height:390px;top:50%;left:50%;margin-left:-315px;margin-top:-195px\"><em class=\"pa\" onclick=\"$(&quot;.actWindow&quot;).hide()\" style=\"right:0;top:0;width:37px;height:37px;display:block;position:absolute;cursor:pointer;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAw1BMVEUcHBwAAAD///8nJyf///8eHh45OTlRUVFdXV2SkpK0tLSwsLDb29vZ2dn+/v7///////////////////////////////////9KSkr7+/v19fWDg4M0NDQoKChJSUn////////y8vKhoaH////4+Pjq6urW1tbBwcG+vr6jo6OSkpJ6enpiYmJSUlJCQkIlJSVMTEz////////9/f3m5ubi4uLd3d3a2tpra2tmZmZYWFg4ODjt7e3Kysqenp6YmJj///+o9GcmAAAAQHRSTlPUAMXTttXS0dDMysrIyMW6qpeJZFssIxrc/v3m2NbRbT/8y3D9+vby8ezp5ODd2tbRa0D++fn49+Hg3tn79OvpiJfuYQAAAadJREFUOMuVlNdyg0AMRWXh3rsxDrZxiXtN4hKn6P+/KloWIiCZwT4vDOKOdCW0C4kgrWa9WsFKtd5sheIBVWeQRCE56PyjatcwSq0dVQ3dPKVcNm2Akc7mSm6+Y1jV4Fg53wehny9zrBFUjTlQzECYTJGjY1GpTAUDohgFPxsoT/wySsFfUiP+MtSqdpIziSgk42zJtquqsScpFynK3mpK1eHuxHiUDHfaYdUBMa8jtg2C3dPPPOKBVexqr03MzzfweXqmJSj27CwBLZ44uHwRTU3QbN+ISL+UEFvQRMyBy6pLZF1BsfkgevFK5hCbUEfMgmbteN/WFtHkAposYh2qiGnwMF+JaJFSSZ13P5hGrEIF0Qh6JjqRGGQMxAogIgi7OSlONxBY4eUSmWquq8tJLvHlYn+SwloDBH25PYqvM0tmFmdTrUqPMi9mq3pcgjl1WwWZV2D2sHE4ycpvdb4Dmb36j31dTs3yqu3NVOXAf0wMfndiSc7GX78FTUzZidB+fW+ltd5F9uvuXY3f+3vO0PGB8xh/tuPviXvvnPj76/G7MP5e/QHdTi2w8g/BFgAAAABJRU5ErkJggg==) no-repeat\"><\/em> <a href=\"http://www.pigcms.com/special/years4/\" target=\"_blank\" style=\"display:block;height:100%;width:100%;background:url(https://pigmcsdotcom.b0.upaiyun.com/statics/images/www/banner/actwindow.png) no-repeat\"><\/a><\/div><\/section>\n";
        $('body').append(actWindowStrVar);
		$(".banner .bannerList").prepend('<li class="banner-year4" style="background: url(http://static.pigcms.com/o2o/newo2o/images/ban/year4-1.png)"> <a href="http://www.pigcms.com/special/years4/" target="_blank"> <div class="warp pr"> <img src="http://static.pigcms.com/o2o/newo2o/images/ban/year4-2.png" class="pa" style="position: absolute;top: 50%;left: 50%;margin-left: -405.5px;margin-top: -215px"> </div> </a> </li>');

        var strVar = "";
        strVar += "<aside class=\"asideBanner\"><div class=\"asideBannerIcon\"><\/div><section class=\"foorterBanner\" style=\"\"><div class=\"width1200\"><i><\/i> <input type=\"text\" name=\"phoneNum\" placeholder=\"留下联系方式 立即预约折扣 \"> <button id=\"yuyue\"><\/button> <a href=\"http://crm2.qq.com/page/portalpage/wpa.php?uin=800022936&aty=0&a=0&curl=&ty=1\" target=\"_blank\" class=\"a2\"><em><\/em>在线咨询<\/a> <a href=\"http://www.pigcms.com/special/years4/\" target=\"_blank\" class=\"a3\"><em><\/em>活动详情<\/a><\/div><\/section><\/aside>\n";

    $("body").append(strVar);

    };
    banner(".bannerList >li", ".bannerSpot li", "15000", ".switchButton ", ".switchButton .prov", ".switchButton .next") //轮播图切换 微信营销页面

    notice(".noticeTxt li");

    $(".menuList ul li.indexActive ol li:last-child").css({ "border-bottom": "0", 'padding': '16px 15px' });
    $(".menuList ul li.indexActive").hover(function() {
        $(this).find('ol').stop().slideDown('400');
    }, function() {
        $(this).find('ol').stop().slideUp('1');
    });
    $(".menuList ul li.indexActive ol li").hover(function() {
        console.log('12');
        $(".menuList ul li.indexActive ol").css('overflow', 'visible');
        $(this).find('dl').animate({
            'width': '427px'
        }, 300);
    }, function() {
        $(this).find('dl').animate({
            'width': '300px'
        }, 1);
    });
    var windowWidth = document.body.scrollWidth;
    $(".dropDownList").css({ "width": windowWidth, "left": '-' + (windowWidth - 1000) / 2 })
    $(".menuList ul li").hover(function() { //收银页面子菜单效果
        $(this).find('.dropDownList').stop().slideDown('300');
    }, function() {
        $(this).find('.dropDownList').stop().hide();
    });
})

var brightness = function(el, delta) {
    var canvas = document.createElement('canvas');
    var w = canvas.width = el.offsetWidth,
        h = canvas.height = el.offsetHeight;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(el, 0, 0);

    // 对像素作处理
    var imgData = ctx.getImageData(0, 0, w, h),
        d = imgData.data;
    var len = d.length;
    for (var i = 0; i < len; i += 4) {
        var r = d[i],
            g = d[i + 1],
            b = d[i + 2];
        d[i] = r + delta;
        d[i + 1] = g + delta;
        d[i + 2] = b + delta;
    }
    ctx.putImageData(imgData, 0, 0);
    var img = new Image();
    img.src = ctx.toDataURL("images/*");
    return img;
};



function notice(a) {
    var i = 1;
    var len = $(a).length;
    $(a).eq(0).show();
    setInterval(function() {
        $(a).eq(i).slideDown('200').siblings().hide();
        i++;
        if (i == len) {
            i = 0
        }
    }, 5000)
}

function jsRect() {
    $(".jsRect").each(function() {
        var i = 0;
        var time = 800;
        var li = $(this).find("ul li");
        var iOdd = $(this).find("ul li:odd");
        var iEven = $(this).find("ul li:even");

        $(iOdd).hover(function() {
            $(this).addClass('on');
            $(this).prev().stop().animate({ 'width': '100px' }, time).find(".desc").hide();
            $(this).stop().animate({ 'width': '800px' }, time);
        }, function() {
            $(this).removeClass('on');
            $(this).prev().stop().animate({ 'width': '50%' }, time).find(".desc").show();
            $(this).animate({ 'width': '50%' }, time);
        });
        $(iEven).hover(function() {
            $(this).addClass('on');
            $(this).next().stop().animate({ 'width': '100px' }, time).find(".desc").hide();
            $(this).stop().animate({ 'width': '800px' }, time);
        }, function() {
            $(this).removeClass('on');
            $(this).next().stop().animate({ 'width': '50%' }, time).find(".desc").show();
            $(this).stop().animate({ 'width': '50%' }, time);
        });
    });
};
function switchingImg(a, b, c) { //点击切换 按需加载
    var i = 0;
    // $(b).eq(0).show();
    var len = $(a).length - 1;
   // zhixing(num);
    $(a).click(function() {
        var index = $(this).index();
        $(this).addClass(c).siblings().removeClass(c);
        $(this).parent().parent().children("article").children('section').hide();
        $(this).parent().parent().children("article").children('section').eq(index).show();
        $(this).parent().parent().children("article").children('section').eq(index).find("img.lazy").each(function(i, item) {
            var self = $(this);
            var dataImg = self.data('original');
            self.attr("src", dataImg);
            console.log(44);
        });
    });
};
function switching(a, b, c, d) { //切换
    var i = 0;
    // $(b).eq(0).show();
    var len = $(a).length - 1;

    function zhixing(index) {
        $(a).eq(index).addClass(c).siblings().removeClass(c);
        $(b).eq(index).addClass(d).show().siblings().hide().removeClass(d);
    }

    $(a).click(function() {
        var index = $(this).index();
        zhixing(index);
    setTimeout(function(){       $('.detailsLeft').find('li.active').trigger('click');},300)
    });
};
//a:滚动切换列表 //b:点击切换 t:切换时间,s:切换按钮,p:切换上一页,n:切换下一页
function banner(a, b, t, s, p, n) {
    var time = 0;
    var dd = $(a).length;
    var ht = "<li></li>";
    $(a).eq(0).show();
    for (var i = 0; i < dd - 1; i++) {
        ht += "<li></li>";
    }
    var i = 0;
    $(b).parent().html(ht);
    $(b).eq(0).addClass("active");

    function table() {
        $(a).eq(i).addClass("active").fadeIn(500).siblings().fadeOut(500).removeClass('active');
        $(b).eq(i).addClass("active").siblings('').removeClass('active');
    }
    $(a).parent().parent().hover(function() {
        $(s).fadeIn('400');
        clearInterval(time);
    }, function() {
        $(s).fadeOut('400');
        dingshi();
    });

    function right() {
        if (i == dd - 1) {
            i = 0;
        } else {
            i++;
        }
    }

    function left() {
        if (i == 0) {
            i = dd - 1;
        } else {
            i--;
        }
    }
    function dingshi() {
        time = setInterval(function() {
            right();
            table();
        }, t);
    };
    $(b).click(function() {
        i = $(this).index();
        table();
    });
    $(b).eq(0).trigger("click");
    $(p).click(function() {
        left();
        table();
    });
    $(n).click(function() {
        right();
        table();
    });
}
