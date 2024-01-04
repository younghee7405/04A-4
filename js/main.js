$(function(){
// 메뉴

// $(".main > li, .sub_bg").mouseover(function(){
//     $(".sub, .sub_bg").stop().slideDown();
// })//mouseover

// $(".main > li, .sub_bg").mouseout(function(){
//     $(".sub, .sub_bg").stop().slideUp();
// })//mouseout

$(".main > li, .sub_bg").hover(function(){
    $(".sub, .sub_bg").stop().slideDown();
}, function(){
    $(".sub, .sub_bg").stop().slideUp();
})


// 이미지 슬라이드
// 첫번째 그림이 나오게 

    $(".move li:gt(0)").hide();

    // $(".move li").hide();
    // $(".move li").eq(0).show();

    // $(".move li").eq(0).show();
    // $(".move li").eq(1).hide();
    // $(".move li").eq(2).hide();


    // $(".move li").eq(0).siblings().hide();

    // var n = 0; // 0     1      2  현재보이는 그림인덱스번호

    // setInterval( move ,  2000);

    // function move(){

    //     console.log("N1 : " , n);
    //     $(".move li").eq(n).fadeOut();

    //     if(  n < 2    ) {
    //         n++;
    //     }else {
    //         n=0;
    //     }//
    //     console.log("N2 : " , n);

    //     $(".move li").eq(n).fadeIn();

    // }//move


    var j =0; // 0 1 2 

    setInterval(function(){

        if(j == 2){
            j =0;
        }else{
            j++;
        }//

        $(".move li").eq(j).siblings().fadeOut();
        $(".move li").eq(j).fadeIn();

    }, 3000)//


    // 팝업

    $(".p_click").click(function(){
        $(".pop").fadeIn()
    })//

    $(".close").click(function(){
        $(".pop").fadeOut()
    })//












})//jquery