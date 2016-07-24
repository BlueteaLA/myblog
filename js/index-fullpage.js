$(function(){
    $(".fullpage").fullpage({
        navigation:true,
        navigationTooltips:["首页","个人简介","作品展示","联系我"],
        afterLoad: function(anchorLink, index){
            if(index==1){
                $('.section').eq(0).attr("id","active");
            }else{
                $('.section').eq(0).removeAttr("id");
            }
        },
    });
})