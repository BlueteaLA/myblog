$(function(){
    $(".fullpage").fullpage({
        // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#menu',
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