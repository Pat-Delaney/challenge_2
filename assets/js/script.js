
$(function(){
    initHome();

})
function home(){

    gsap.fromTo($(".card"), {
        opacity:0,
        x:0,
        y:-100,

        stagger:.5
    },{
        display:"flex",
        opacity:1,
        delay:0,
        duration: .5,
        y:0,
        ease:"power7.in(1.7)",
    });
}
function initHome(){

    gsap.from($(".card"), {
        opacity:0,
        delay:.1,
        duration:.4,
        x:0,
        y:-100,
        ease:"power7.Out",
        stagger:.2
    });
}

