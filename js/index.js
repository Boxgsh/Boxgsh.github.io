/**
 * Created by wcs on 2016/9/25.
 */

//����ȫ���ķ���
$(function(){
    $('#dowebok').fullpage({
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        afterLoad:function (link,index) {
            $(".section").removeClass("current");
            //��һ��������Ϊ��ʼ�����ı�ǣ���������ϸ�������Ȼ�󴥷��ö���
            setTimeout(function () {
                $(".section").eq(index-1).addClass("current");
            },200);
        }
    });
});