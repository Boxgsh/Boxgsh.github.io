/**
 * Created by wcs on 2016/9/25.
 */

//调用全屏的方法
$(function(){
    $('#dowebok').fullpage({
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        afterLoad:function (link,index) {
            $(".section").removeClass("current");
            //用一个类名作为开始动画的标记，滚动后加上该类名，然后触发该动画
            setTimeout(function () {
                $(".section").eq(index-1).addClass("current");
            },200);
        }
    });
});