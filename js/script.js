//스크립트 위로 튕기는것 (a태그 눌렀을때 위로 튕기는거 막아줌)
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// 메뉴 
$(function(){
    $('.menuOpen button.open').on('click' , function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click' , function(){
        $('.menuOpen .menuWrap').removeClass('on');
    })    
});

//splitting
$(function() { Splitting(); });

// Scroll animaition
$(function(){
    $('.animate').scrolla({
        mobile: true,  // 모바일버전시 활성화
        once: true // 스크롤시 딱 한번만 하고 싶을 땐 true
    });
 });

 //SVG길이 구하기
 $(function(){
    $('.svgAni').find('#svgAni01').each(function(i, path){
        var length = path.getTotalLength();
        //alert(length);  
    });
});


//gsap -> con01비디오모션
$(function(){
    gsap.timeline({ //순서대로 이벤트가 진행될 수 있도록 만들어 줌.
        scrollTrigger: {
            trigger: '.con01', // 트리거 대상
            start: '0% 80%', // 0% -> 트리거 대상의 시작지점 (start) / 50% -> 시작 지점 scroller-start  이두개가 만났을때 시작
            end: '100% 100%', // 앞에 100% -> 트리거 대상의 종료지점 (end) / 뒤에 100% -> 종료 지점 scroller-end 이두개가 만났을때 애니 종료
            scrub: 1, // scrub은 GSAP ScrollTrigger의 이벤트가 스크롤이 사용될때만 재생되도록 만들어주는 속성
            //markers: true, // 시작위치 끝위치 확인 가능한 마커 
        }
    })

    .to('.wrap',{backgroundColor:"#fff", color:"#000",ease: 'none',duration: 5},0)

    .to ('.svgAni path', {stroke:"#000", ease:"none", duration:5 },0)

    .to ('.scroll', {opacity:"0", ease:"none", duration:5} ,0)

    .fromTo('.videoWrap video', {'clip-path': 'inset(60% 60% 60% 60% round 30%)'},{'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10},0)

    gsap.timeline({
        scrollTrigger: {
            trigger:'.con02',
            start :'0% 100%',
            end:'0% 20%',
            scrub:1,
           // markers:true
        }
    })

  .fromTo('.con02 .title .a', {x:  '-100%'}, { x : '0%', ease:'none', duration: 5 },0)
  .fromTo('.con02 .title .b', {x:  '100%'}, { x : '0%', ease:'none', duration: 5 },0)

  gsap.timeline({
    scrollTrigger: {
        trigger:'.workList',
        start :'0% 100%',
        end:'0% 100%',
        scrub:1,
       // markers:true
    }
})

  .to ('.wrap', {backgroundColor:'#EEEDE9', ease:'none', duration:5},0)

  .to ('.con02 .title', {position: 'fixed', ease: 'none', left:'0', top:'0', width:'100%', duration:5},0)

 .fromTo ('.workList', {margin:'0 auto'}, {margin: '100vh auto 0',  position: 'relative' ,zIndex:'10', duration:1},0)

   gsap.timeline ({
    scrollTrigger: {
        trigger:'.workList',
        start:'100% 50%',
        end:'100% 0%',
        scrub:1,
       // markers: true
    }
   })

   .to('.con02 .title .a',{x: '-100%',ease: 'none',duration: 5},0)
    .to('.con02 .title .b',{x: '100%',ease: 'none',duration: 5},0) 

});


$(function() {
    $(".con03 .list").simplyScroll({
        speed: 4,
        pauseOnHover : false, // 마우스 오버시 멈추지 않도록  
        pauseOnTouch :	false // 터치시 멈추지 않도록  
    });
});













