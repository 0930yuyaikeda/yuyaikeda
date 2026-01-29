// 一度のみ実行
window.setTimeout(function(){

    const text1 = document.getElementById('ta01-main-text');
    text1.classList.add('is-active');

}, 100);


window.addEventListener('scroll', () => {

    // ============ fadeIn ===============
    // scroll Position
    let scrollPosition = window.scrollY;

    let fadeInElement01 = document.getElementById("fadein_element01");
    let fadeInElement02 = document.getElementById("fadein_element02");
    let fadeInElement03 = document.getElementById("fadein_element03");
    let fadeInElement04 = document.getElementById("fadein_element04");
    let fadeInElement05 = document.getElementById("fadein_element05");
    let fadeInElement06 = document.getElementById("fadein_element06");
    let fadeInElement07 = document.getElementById("fadein_element07");
    let fadeInElement08 = document.getElementById("fadein_element08");
    let fadeInElement09 = document.getElementById("fadein_element09");
    let fadeInElement10 = document.getElementById("fadein_element10");
    let fadeInElement11 = document.getElementById("fadein_element11");

    // window size
    let windowHight = (window.innerHeight) * 0.85;

    // get element offset top
    let fadeInElementTop01 = (fadeInElement01.offsetTop) - (windowHight);
    let fadeInElementTop02 = (fadeInElement02.offsetTop) - (windowHight);
    let fadeInElementTop03 = (fadeInElement03.offsetTop) - (windowHight);
    let fadeInElementTop04 = (fadeInElement04.offsetTop) - (windowHight);
    let fadeInElementTop05 = (fadeInElement05.offsetTop) - (windowHight);
    let fadeInElementTop06 = (fadeInElement06.offsetTop) - (windowHight);
    let fadeInElementTop07 = (fadeInElement07.offsetTop) - (windowHight);
    let fadeInElementTop08 = (fadeInElement08.offsetTop) - (windowHight);
    let fadeInElementTop09 = (fadeInElement09.offsetTop) - (windowHight);
    let fadeInElementTop10 = (fadeInElement10.offsetTop) - (windowHight);
    let fadeInElementTop11 = (fadeInElement11.offsetTop) - (windowHight);

    // setting class
    const animateFadeIn = "animate__fadeIn";
    const opacity0 = "opacity-0";

    // ========== scroll events ==========
    // Fade In
    if ( scrollPosition > fadeInElementTop01 ){
        fadeInElement01.classList.remove(opacity0);
        fadeInElement01.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop02 ){
        fadeInElement02.classList.remove(opacity0);
        fadeInElement02.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop03 ){
        fadeInElement03.classList.remove(opacity0);
        fadeInElement03.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop04 ){
        fadeInElement04.classList.remove(opacity0);
        fadeInElement04.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop05 ){
        fadeInElement05.classList.remove(opacity0);
        fadeInElement05.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop06 ){
        fadeInElement06.classList.remove(opacity0);
        fadeInElement06.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop07 ){
        fadeInElement07.classList.remove(opacity0);
        fadeInElement07.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop08 ){
        fadeInElement08.classList.remove(opacity0);
        fadeInElement08.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop09 ){
        fadeInElement09.classList.remove(opacity0);
        fadeInElement09.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop10 ){
        fadeInElement10.classList.remove(opacity0);
        fadeInElement10.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop11 ){
        fadeInElement11.classList.remove(opacity0);
        fadeInElement11.classList.add(animateFadeIn);
    }
});
