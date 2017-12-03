/**
 * Created by Administrator on 2017/12/3.
 */

/*文本框*/
$("#inputSearch").on("focus",function () {
    if(this.value == this.defaultValue){
        this.value = "";
    }
}).on("blur",function(){
    if(this.value == ""){
        this.value = this.defaultValue;
    }
})
/*文本框结束*/


//换肤
$("#skin li").on("click",function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    $("#cssfile").attr("href","styles/skin/"+ this.id +".css");
})
//换肤结束

//首页列表
$(".nav li").on("mouseover",function(){
    $(this).find(".jnNav").show().end().siblings().find(".jnNav").hide();
})
//首页列表结束


//轮播图
setInterval(function(){


},1000);
$("#lunbo-box a").on("mouseover",function(){
    $(this).addClass("chos").siblings().removeClass("chos");
    $("#jnImageroll img").eq($(this).index()).fadeIn().siblings().fadeOut();
})
$("#lunbo-box a").eq(0).trigger("mouseover");


//轮播图结束

//a标签title
$("#jnNoticeInfo a").on("mouseover",function(){



    return false;
})


//a标签title

//滑动广告
$("#jnBrandTab li").on("click",function(){
    $(this).addClass("chos").siblings().removeClass("chos");
    var $index = $(this).index();
    $("#jnBrandList").animate({left:-$index * 780});
})
$("#jnBrandTab li").eq(0).trigger("click");
//滑动广告结束




