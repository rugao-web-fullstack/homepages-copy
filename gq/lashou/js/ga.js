function getAText(t){var e=$(t).clone();$("span",e).remove();var s=e.text().toString();return s.replace(/\s|\xA0/g,"").replace("：","").replace(/\(\S?\)/g,"")}function seo_request_fun(t,e,s){""!=t&&""!=e&&""!=s&&_gaq.push(["_trackEvent",t,e,s,1])}$(document).ready(function(){function t(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="http://f1.lashouimg.com/public/js/dc.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}$(".sortnav-warp .newga.ga .sort a").bind("click",function(){var t="分类导航",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),$(this).parents(".sort-cen").length>0&&$(this).parents(".shop-sort").length>0&&i.push("购物首页"),$(this).parents(".sort-cen").length>0&&$(this).parents(".sort-cen").parents(".index_nav_out").length>0&&i.push($(this).parents(".index-sort").attr("p")?$(this).parents(".index-sort").attr("p"):"新版首页"),$(this).parents(".ga").children("h3").length>0&&i.push($(this).parents(".ga").children("h3").text()),$(this).parents(".sort").children(".sort-menu").length>0&&i.push($(this).parents(".sort").children(".sort-menu").children(".title").text()),i.push($(this).parents(".sort-con").length>0?"分类展开":"热门分类"),a.push(getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#nav.newga.ga a").bind("click",function(){var t="分类导航",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("新版首页|顶部导航栏"),a.push(getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#header .search-hot.newga.ga a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("新版首页|搜索推荐词"),a.push(getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .filter-strip.newga.ga a").bind("click",function(){var t="分类导航",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("新版首页|顶部分类导航"),$(this).parents(".ga").children("h3").length>0&&i.push($(this).parents(".ga").children("h3").text()),a.push(getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .index-floor .index-floor-sort a,#main .index-floor .index-floor-title a,#main .index-floor .floor-title a").bind("click",function(){var t="分类导航",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push($(this).parents(".index-floor").attr("p")?$(this).parents(".index-floor").attr("p"):"新版首页|楼层分类导航"),$(this).parents(".index-floor").children("h2").length>0&&i.push($(this).parents(".index-floor").children("h2").text()),a.push($(this).hasClass("if-sortmore")?"分类查看更多":$(this).hasClass("floor-toall")?"右侧查看全部":$(this).hasClass("ft-brandsale")?"右侧品牌特卖":getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .index-floor .floor-warp .floor-goods a").bind("click",function(){var t="九宫格",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push($(this).parents(".floor-goods").attr("p")?$(this).parents(".floor-goods").attr("p"):"新版首页"),$(this).parents(".index-floor").children("h2").length>0&&i.push($(this).parents(".index-floor").children("h2").text()),$(this).parents(".floor-warp").find("a.current").length>0&&i.push($(this).parents(".floor-warp").find("a.current").text()),a.push($(this).parents(".floor-con-show").children(".floor-goods").index($(this).parents(".floor-goods"))+1),a.push($(this).parents(".floor-goods").children("h3").children(".floor-goods-name").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#header .slider-warp .slider-ul li a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("首页banner"),$(this).parents(".slider-warp").children("h2").length>0&&i.push($(this).parents(".slider-warp").children("h2").text()),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):getAText($(this))),a.push($(this).parents(".slider-ul").children("li").children("a").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .recommend-goods .slider-ulwarp .small-goods a,#main #shop-recommend .slider-ulwarp .small-goods a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push($(this).parents(".slider-ulwarp").attr("p")?$(this).parents(".slider-ulwarp").attr("p"):"新版首页"),$(this).parents(".slider-warp").children("h2").length>0&&i.push($(this).parents(".slider-warp").children("h2").text()),a.push($(this).parents(".small-goods").children("h4").children(".small-goods-name").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main #hot-goods ul li a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("新版首页"),$(this).parents("#hot-goods").children("h2").length>0&&i.push($(this).parents("#hot-goods").children("h2").text()),a.push($(this).parents(".big-goods").find(".big-goods-name").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main #sidebar-lottery ul li a,#main .sidebar-zero a,#main #sidebar-set ul li a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push($(this).parents(".index-sidebar").attr("p")?"详情页面"==template_page?"商家库详情页":"评论页面"==template_page?"商家库评论页":"搜索页面"==template_page?"商家库搜索页":$(this).parents(".index-sidebar").attr("p"):"新版首页"),$(this).parents(".slider-warp").attr("p")&&i.push($(this).parents(".slider-warp").attr("p")),$(this).attr("p")&&i.push($(this).attr("p")),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main #other-lottery ul li a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push($(this).parents(".index-sidebar").attr("p")?"详情页面"==template_page?"商家库详情页":"评论页面"==template_page?"商家库评论页":"搜索页面"==template_page?"商家库搜索页":$(this).parents(".index-sidebar").attr("p"):"新版首页"),$(this).parents(".slider-warp").attr("p")&&i.push($(this).parents(".slider-warp").attr("p")),a.push("fl"==$(this).attr("class")?getAText($(this)):getAText($(this).prev())+"|"+getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .sidebar-recommend .sr-goods a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),$(this).parents(".index-sidebar").attr("p")&&i.push($(this).parents(".index-sidebar").attr("p")),$(this).parents(".sidebar-recommend").attr("p")&&i.push($(this).parents(".sidebar-recommend").attr("p")),$(this).parents(".sr-goods").hasClass("his")?i.push("浏览历史"):$(this).parents(".sr-goods").hasClass("nohis")&&i.push("热门推荐"),$(this).parents(".sr-goods").children(".sr-goods-icon").children("a").length>0&&a.push($(this).parents(".sr-goods").children(".sr-goods-icon").children("a").attr("title")),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .goods-list.newga.ga .goods a").bind("click",function(){var t="九宫格",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("gouwu"==_switch?"购物列表页":"新版列表页"),a.push($(this).parents(".goods-list").children(".goods").index($(this).parents(".goods"))+1),a.push($(this).parents(".goods").children("h3").children(".goods-name").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .sort-filter.newga.ga a").bind("click",function(){var t="分类导航",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("gouwu"==_switch?"购物列表页":"新版列表页"),$(this).parents(".sf-hot").children("h3").length>0&&i.push(getAText($(this).parents(".sf-hot").children("h3"))),$(this).parents(".sf-breadcrumbs").length>0&&i.push("面包屑"),$(this).parents(".sf-content").children("h3").length>0&&i.push(getAText($(this).parents(".sf-content").children("h3"))),$(this).parents(".sf-firstsub").length>0?(i.push(getAText($(this).parents(".sf-firstsub").prev().children("h3"))),a.push(getAText($(this).parents(".sf-firstsub").prev().find("a.current")))):a.push($(this).parents(".sf-secondsub").length>0?getAText($(this).parents(".sf-secondsub").prev().find("a.current")):"default"==$(this).attr("sort")?"默认排序":"rate"==$(this).attr("sort")?"销量从高到低排序":"price"==$(this).attr("sort")?"价格从低到高排序":"price2"==$(this).attr("sort")?"价格从高到低排序":"time"==$(this).attr("sort")?"按发布时间排序":$(this).hasClass("item-close")?"关闭":$(this).hasClass("filter-more")?"更多":getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .sort-filter .sf-push span").bind("click",function(){var t="分类导航",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("gouwu"==_switch?"购物列表页":"新版列表页"),a.push($(this).hasClass("sf-pushopen")?"查看更多筛选":"收起更多筛选"),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".list-sidebarcen.newga.ga a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),$(this).parents(".newga").attr("p")&&i.push($(this).parents(".newga").attr("p")),$(this).parents(".list-sidebarcen").children("h3").length>0&&i.push($(this).parents(".list-sidebarcen").children("h3").children("span").text()),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):$("img",$(this).parents(".small-goods")).attr("alt")&&""!=$("img",$(this).parents(".small-goods")).attr("alt")?$("img",$(this).parents(".small-goods")).attr("alt"):$("img",$(this).parents(".sr-goods")).attr("alt")&&""!=$("img",$(this).parents(".sr-goods")).attr("alt")?$("img",$(this).parents(".sr-goods")).attr("alt"):$(this).text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".otherinfo-module.newga.ga a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),$(this).parents(".newga").attr("p")&&i.push($(this).parents(".newga").attr("p")),$(this).parent().children(".current").length>0&&a.push($(this).parent().children(".current").text()),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):$(this).text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".dn-mapbig.newga.ga a,.dn-list.newga.ga").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("附近团购推荐"),$(this).parents(".newga").attr("p")&&i.push($(this).parents(".newga").attr("p")),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):$("img",$(this).parents(".dn-mapbig")).attr("alt")&&""!=$("img",$(this).parents(".dn-mapbig")).attr("alt")?$("img",$(this).parents(".dn-mapbig")).attr("alt"):$("img",$(this).parents(".sr-goods")).attr("alt")&&""!=$("img",$(this).parents(".sr-goods")).attr("alt")?$("img",$(this).parents(".sr-goods")).attr("alt"):$(this).text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".together-buy.newga.ga .small-goods a").bind("click",function(){var t="一起购",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("新版非首页"),$(this).parents(".together-buy").length>0&&i.push($(this).parents(".together-buy").children("h2").text()),a.push($(this).parents(".together-buy").children(".tb-self").find(".small-goods-name").text()),a.push($("img",$(this).parents(".small-goods")).attr("alt")&&""!=$("img",$(this).parents(".small-goods")).attr("alt")?$("img",$(this).parents(".small-goods")).attr("alt"):$(this).text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".together-buy.newga.ga .tb-button a").bind("click",function(){var t="一起购",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("新版非首页"),$(this).parents(".together-buy").length>0&&i.push($(this).parents(".together-buy").children("h2").text()),a.push($(this).parents(".together-buy").children(".tb-self").find(".small-goods-name").text()),a.push($(this).text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".groupbuying-end.newga.ga a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),$(this).parents(".newga").attr("p")&&i.push($(this).parents(".newga").attr("p")),$(this).parents(".other-list").children("h5").length>0&&i.push($(this).parents(".other-list").children("h5").text()),a.push($("img",$(this).parents(".small-goods")).attr("alt")&&""!=$("img",$(this).parents(".small-goods")).attr("alt")?$("img",$(this).parents(".small-goods")).attr("alt"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".other-gp.newga.ga a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("新版非首页"),$(this).parents(".other-gp").children("h3").length>0&&i.push($(this).parents(".other-gp").children("h3").children("span").text());var h=$(this).parents(".main-content").children(".detail-intro").children(".roduct-name").children("span").text(),n=$(this).parents(".main-content").children(".detail-intro").children(".roduct-name").children("h1").text();a.push(h+n),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):$("img",$(this).parents(".small-goods")).attr("alt")&&""!=$("img",$(this).parents(".small-goods")).attr("alt")?$("img",$(this).parents(".small-goods")).attr("alt"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .shop-hot .slider-ulwarp.newga.ga ul li a").bind("click",function(){var t="推荐版块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("购物首页|购物广告位"),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .shop-sidebar.newga.ga .ad img").bind("click",function(){var t="推荐版块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("购物首页|右侧广告位"),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .limited-buy.newga.ga a").bind("click",function(){var t="推荐版块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("购物首页|限量秒杀"),$(this).parents(".limited-buy").children("a").length>0&&i.push($(this).parents(".limited-buy").children("a").text()),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .shop-hotcon a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("购物首页|热门商品"),$(this).parents("#shop-hotcon").children("h2").length>0&&i.push($(this).parents("#shop-hotcon").children("h2").text()),a.push($(this).text()),a.push($(this).parents(".small-goods").find(".small-goods-name").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .index-floor .shop-floor-ad.newga.ga a").bind("click",function(){var t="推荐版块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("购物首页|专题专场广告位"),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .remind.newga a,#main .search-tips.newga a").bind("click",function(){var t="搜索页结果",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("商家搜索"),$(this).parents(".newga").attr("p")&&i.push($(this).parents(".newga").attr("p")),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .list-sidebar .list-sidebarcen .small-goods a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("搜索结果页"),i.push($(this).parents(".list-sidebar").find("h3 span").text()),a.push($(this).parents(".small-goods").children("h4").children(".small-goods-name").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .store-warp .store .store-list-gp a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("商家库列表页|该商家正在团购"),a.push($(this).parents(".store-list-gp").find(".sl-gp-name a").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .store-warp .small-goods a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("商家库详情页"),i.push($(this).parents(".store-nearby").children("h2").length>0?$(this).parents(".store-nearby").children("h2").text():$(this).parents(".store-gp").find(".store-tab-title a.current span").text()),a.push($(this).parents(".small-goods").children("h4").children(".small-goods-name").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .store-sidebar .store-sidebar-list ul li a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("商家库详情页"),$(this).parents("ul").hasClass("ssl-con01")?i.push("附近商家"):$(this).parents("ul").hasClass("ssl-con02")&&i.push("同类商家"),a.push($(this).parents("li").find(".ssl-info h5 a").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .seller-right .seller-infosmall a,#main .seller-right .sidebar-hot.newga.ga .sidebar-hottag a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("商家库评论页"),$(this).parents("div").hasClass("sidebar-hottag")?i.push("热门团购推荐"):$(this).parents("h3")&&i.push("商家"),a.push($(this).text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("#main .seller-right .sidebar-hot.newga.ga ul li a").bind("click",function(){var t="推荐板块",e="",s="",i=[],a=[];$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push("商家库评论页"),i.push("猜你喜欢的团购"),a.push($(this).parents("li").find("h5 a").text()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".qiukaituan.newga.ga,.sidebar-ad .newga.ga").bind("click",function(){var t="",e="",s="",i=[],a=[];t=$(this).attr("t"),$("#header .city h2").text()&&i.push($("#header .city h2").text()),$(this).attr("p")&&i.push($(this).attr("p")),a.push($(this).attr("ga_t")),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".nearby-food.newga.ga .nearby a").bind("click",function(){var t="",e="",s="",i=[],a=[];t=$(this).parents(".ga").attr("t"),$("#header .city h2").text()&&i.push($("#header .city h2").text()),$(this).parents(".ga").attr("p")&&i.push($(this).parents(".ga").attr("p")),$(this).hasClass("nearby-change")&&i.push("换一换"),a.push($(this).parents(".ga").attr("shop")),a.push($(this).parents(".nearby").attr("shop")),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".pay-bank .bank ul li input,.pay-bank .bank ul li img").bind("click",function(){var t="支付",e="",s="",i=[],a=[];gacity&&i.push(gacity);var h=$(this).parents(".bank");h.hasClass("bank01")?i.push("普通支付"):h.hasClass("bank02")?i.push("平台支付"):h.hasClass("bank03")?i.push("扫码支付"):h.hasClass("bank04")&&i.push("快捷支付"),i.push($(this).attr("bank-name")),a.push("other"),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".ga_movie").bind("click",function(t){var e=$(t.currentTarget),s=e.attr("data-gatype"),i=s.split("|");if(1==i[0])var a="推荐板块";else var a="分类导航";var h="",n="",r=[],o=[];switch(r.push($(".city h2").html()),i[1]){case"1":r.push("新版电影首页");break;case"2":r.push("影院列表页");break;case"3":r.push("影片列表页");break;case"4":r.push("影片详情页");break;case"5":r.push("影院详情页");break;default:r.push("新版电影通用组件")}switch(r.push($(this).attr("data-gatext")),i[1]){case"1":o.push("标签");break;case"2":o.push("商家");break;case"3":o.push("标签&商家");break;default:o.push("标签")}h=r.join("|"),n=o.join("|"),seo_request_fun(a,h,n)}),$("#footer a").bind("click",function(){var t="分类导航",e="",s="",i=[],a=[];i.push($("#header .city h2").text()?$("#header .city h2").text():$(".logo a").attr("city")),$(".login-main").length>0?(i.push("新版登录"),i.push($(".login-main .login-title a.current").text())):(i.push("新版注册"),i.push($(".create-main .create-title a.current").text())),a.push(getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".login-more a").bind("click",function(){var t="登录注册",e="",s="",i=[],a=[];i.push($("#header .city h2").text()?$("#header .city h2").text():$(".logo a").attr("city")),i.push($(".login-main").length>0?"新版登录":"单品页"),i.push("合作网站登录"),a.push(getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".login-main .insubmit,.create-main .insubmit").bind("click",function(){var t="登录注册",e="",s="",i=[],a=[];i.push($("#header .city h2").text()?$("#header .city h2").text():$(".logo a").attr("city")),$(".login-main").length>0?(i.push("新版登录"),i.push($(".login-main .login-title a.current").text())):(i.push("新版注册"),i.push($(".create-main .create-title a.current").text())),a.push($(this).val()),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$(".login-item .link a").bind("click",function(){var t="登录注册",e="",s="",i=[],a=[];i.push($("#header .city h2").text()?$("#header .city h2").text():$(".logo a").attr("city")),i.push($(".login-main").length>0?"新版登录":"单品页"),i.push($(".login-title a.current").text()),a.push(getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),$("a.newga.ga").bind("click",function(){var t="",e="",s="",i=[],a=[];t=$(this).hasClass("aga")?"广告位":$(this).attr("t"),$("#header .city h2").text()&&i.push($("#header .city h2").text()),i.push($(this).parents(".index-sidebar").attr("p")?$(this).parents(".index-sidebar").attr("p"):$(this).parents(".scroll-floor").attr("p")?$(this).parents(".scroll-floor").attr("p"):"新版首页"),$(this).attr("p")&&i.push($(this).attr("p")),a.push($(this).attr("ga_t")?$(this).attr("ga_t"):getAText($(this))),e=i.join("|"),s=a.join("|"),seo_request_fun(t,e,s)}),setTimeout(function(){t()},500)});