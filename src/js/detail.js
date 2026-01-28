

// 一度のみ実行
window.setTimeout(function(){

    const text1 = document.getElementById('ta01-main-text');
    text1.classList.add('is-active');

}, 100);

// main text switch
let policySwitch = true;
let worksSwitch = false;
let aboutSwitch = false;
let contactSwitch = false;

window.addEventListener('scroll', () => {

    // main text
    let mainText = document.getElementById('ta01-main-text');
    let contactText = document.getElementById('ta01-contact-text');

    // main text char
    let mainChar1 = document.getElementById('main-text01');
    let mainChar2 = document.getElementById('main-text02');
    let mainChar3 = document.getElementById('main-text03');
    let mainChar4 = document.getElementById('main-text04');
    let mainChar5 = document.getElementById('main-text05');
    let mainChar6 = document.getElementById('main-text06');
    let mainChar7 = document.getElementById('main-text07');

    // scroll Position
    let scrollPosition = window.scrollY;

    // ============ fadeIn ===============
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
    let fadeInElement12 = document.getElementById("fadein_element12");
    let fadeInElement13 = document.getElementById("fadein_element13");
    let fadeInElement14 = document.getElementById("fadein_element14");
    let fadeInElement15 = document.getElementById("fadein_element15");
    let fadeInElement16 = document.getElementById("fadein_element16");
    let fadeInElement17 = document.getElementById("fadein_element17");
    let fadeInElement18 = document.getElementById("fadein_element18");
    let fadeInElement19 = document.getElementById("fadein_element19");
    let fadeInElement20 = document.getElementById("fadein_element20");
    let fadeInElement21 = document.getElementById("fadein_element21");
    let fadeInElement22 = document.getElementById("fadein_element22");
    let fadeInElement23 = document.getElementById("fadein_element23");
    let fadeInElement24 = document.getElementById("fadein_element24");

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
    let fadeInElementTop12 = (fadeInElement12.offsetTop) - (windowHight);
    let fadeInElementTop13 = (fadeInElement13.offsetTop) - (windowHight);
    let fadeInElementTop14 = (fadeInElement14.offsetTop) - (windowHight);
    let fadeInElementTop15 = (fadeInElement15.offsetTop) - (windowHight);
    let fadeInElementTop16 = (fadeInElement16.offsetTop) - (windowHight);
    let fadeInElementTop17 = (fadeInElement17.offsetTop) - (windowHight);
    let fadeInElementTop18 = (fadeInElement18.offsetTop) - (windowHight);
    let fadeInElementTop19 = (fadeInElement19.offsetTop) - (windowHight);
    let fadeInElementTop20 = (fadeInElement20.offsetTop) - (windowHight);
    let fadeInElementTop21 = (fadeInElement21.offsetTop) - (windowHight);
    let fadeInElementTop22 = (fadeInElement22.offsetTop) - (windowHight);
    let fadeInElementTop23 = (fadeInElement23.offsetTop) - (windowHight);
    let fadeInElementTop24 = (fadeInElement24.offsetTop) - (windowHight);

    // setting class
    const animateFadeIn = "animate__fadeIn";
    const opacity0 = "opacity-0";

    // ========== scroll events ==========
    // Fade In
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
    if ( scrollPosition > fadeInElementTop12 ){
        fadeInElement12.classList.remove(opacity0);
        fadeInElement12.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop13 ){
        fadeInElement13.classList.remove(opacity0);
        fadeInElement13.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop14 ){
        fadeInElement14.classList.remove(opacity0);
        fadeInElement14.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop15 ){
        fadeInElement15.classList.remove(opacity0);
        fadeInElement15.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop16 ){
        fadeInElement16.classList.remove(opacity0);
        fadeInElement16.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop17 ){
        fadeInElement17.classList.remove(opacity0);
        fadeInElement17.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop18 ){
        fadeInElement18.classList.remove(opacity0);
        fadeInElement18.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop19 ){
        fadeInElement19.classList.remove(opacity0);
        fadeInElement19.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop20 ){
        fadeInElement20.classList.remove(opacity0);
        fadeInElement20.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop21 ){
        fadeInElement21.classList.remove(opacity0);
        fadeInElement21.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop22 ){
        fadeInElement22.classList.remove(opacity0);
        fadeInElement22.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop23 ){
        fadeInElement23.classList.remove(opacity0);
        fadeInElement23.classList.add(animateFadeIn);
    }
    if ( scrollPosition > fadeInElementTop24 ){
        fadeInElement24.classList.remove(opacity0);
        fadeInElement24.classList.add(animateFadeIn);
    }

    // change text
    // policy
    if (scrollPosition < fadeInElementTop11 && policySwitch === false){

        // change switch
        policySwitch = true;
        worksSwitch = false;
        aboutSwitch = false;
        contactSwitch = false;

        mainText.classList.remove('is-active');
        window.setTimeout(function(){
            mainChar1.innerText = "p";
            mainChar2.innerText = "o";
            mainChar3.innerText = "l";
            mainChar4.innerText = "i";
            mainChar5.innerText = "c";
            mainChar6.innerText = "y";
            mainChar7.innerText = " ";
            mainText.classList.add('is-active');
        }, 600);
    }

    // works
    if ( scrollPosition > fadeInElementTop11 && scrollPosition < fadeInElementTop15 && worksSwitch === false){

        // change switch
        policySwitch = false;
        worksSwitch = true;
        aboutSwitch = false;
        contactSwitch = false;

        mainText.classList.remove('is-active');
        window.setTimeout(function(){
            mainChar1.innerText = "w";
            mainChar2.innerText = "o";
            mainChar3.innerText = "r";
            mainChar4.innerText = "k";
            mainChar5.innerText = "s";
            mainChar6.innerText = " ";
            mainChar7.innerText = " ";
            mainText.classList.add('is-active');
        }, 600);
    }

    // about
    if ( scrollPosition > fadeInElementTop15 && scrollPosition < fadeInElementTop24 && aboutSwitch === false ){

        // change switch
        policySwitch = false;
        worksSwitch = false;
        aboutSwitch = true;
        contactSwitch = false;

        mainText.classList.remove('is-active');
        window.setTimeout(function(){
            mainChar1.innerText = "a";
            mainChar2.innerText = "b";
            mainChar3.innerText = "o";
            mainChar4.innerText = "u";
            mainChar5.innerText = "t";
            mainChar6.innerText = " ";
            mainChar7.innerText = " ";
            mainText.classList.add('is-active');
        }, 600);
    }

    // contact
    if ( scrollPosition > fadeInElementTop24 && contactSwitch === false ){

        // change switch
        policySwitch = false;
        worksSwitch = false;
        aboutSwitch = false;
        contactSwitch = true;

        mainText.classList.remove('is-active');
        contactText.classList.add('is-active');
        window.setTimeout(function(){
            mainChar1.innerText = "c";
            mainChar2.innerText = "o";
            mainChar3.innerText = "n";
            mainChar4.innerText = "t";
            mainChar5.innerText = "a";
            mainChar6.innerText = "c";
            mainChar7.innerText = "t";
            mainText.classList.add('is-active');
        }, 600);
    }

});

