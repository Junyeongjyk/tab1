
//스크립트 위로 튕기는것 (a태그 눌렀을때 위로 튕기는거 막아줌)
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});

// 스크롤애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: true
    });
});

$(document).ready(function($) {
    $(".header_bottom").click(function(event){
        console.log(".header_bottom");         
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

});

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $(".content").length;

$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});


// $(function(){
//     $('.animate').scrolla({
//         mobile: true,
//         once: false
//     });
// });

// $(document).ready(function(){

//     var navHeight = $(".visual").height(); 
//     //navHeight 의 높이를 구하기

//     $(".visual2").hide();
//     //스크롤시 나타날 객체 미리 숨기기

//     $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
//         var rollIt = $(this).scrollTop() >= navHeight; 
// // 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

// /*
// scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
// 스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
// */

//     if(rollIt){ 
// 		//윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
//             $(".visual2").show().css();
//         }
//         else{
//             $(".visual2").hide();
//         }
//     });
    
// }); 


// 메뉴 
$(function(){
    $('.menuOpen button.open').on('click' , function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click' , function(){
        $('.menuOpen .menuWrap').removeClass('on');
    })    
});

$(function(){
    gsap.registerPlugin(ScrollTrigger);

// x축 horizontalscroll
    let list = gsap.utils.toArray(".cording .list li, .ncs .list li");
    let listA = gsap.utils.toArray(".cording .list .a, .ncs .list li.a");
    let listB = gsap.utils.toArray(".cording .list .b, .ncs .list li.b");
    let listC = gsap.utils.toArray(".cording .list .c, .ncs .list li.c");

    let scrollTween = gsap.to(list, {
    xPercent: -100 * (list.length - 1),
    ease: "none",
    scrollTrigger: {
    trigger: ".cording, .ncs",
    pin: true,
    scrub: 1,
    end: "200%",
        // markers: true,
        }
    });
    gsap.to(listA, {
        y: 0,
        rotation: 0,
        scrollTrigger: {
        trigger: ".cording, .ncs",
        pin: true,
        scrub: 1,
        end: "200%",
    }
});
    gsap.to(listB, {
    y: 0,
    rotation: 0,
    scrollTrigger: {
    trigger: ".cording, .ncs",
    pin: true,
    scrub: 1,
    end: "200%",
    }
});
    gsap.to(listC, {
    rotation: 0,
    scrollTrigger: {
    trigger: ".cording, .ncs",
    pin: true,
    scrub: 1,
    end: "200%",
    }
});
});






