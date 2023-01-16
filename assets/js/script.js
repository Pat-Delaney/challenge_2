const element_array = $(".main_info").toArray()
let active_element = [];
console.log(element_array);
// element.getBoundingClientRect().top < window.innerHeight - 500 ? navigate(element): ""
function scrollReveal(){
    element_array.forEach(element => function(){
        $("#element").scroll(navigate(element));
    })}
$(function(){
    initHome();

})
$(window).scroll(
    scrollReveal()
)
function navigate(query){
    let section_query = $("#"+query);
    if(section_query.hasClass("hidden")){
    section_query[0].classList.toggle("hidden");
    gsap.from(section_query, {
        opacity:0,
        delay:1,
        x:0,
        y:20,
        ease:"power7.Out",
    });
    
}
}
async function emptyInfo(source){
    console.log(source);
    $("#"+source).addClass("hidden");
}
function home(){

    gsap.fromTo($("#about_me"), {
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

    gsap.from($("#about_me"), {
        opacity:0,
        delay:1.5,
        duration:1.5,
        x:0,
        y:-100,
        ease:"power7.Out",
        stagger:.2
    });
}

$("#navbar a").click( function(event){

    navigate(event.target.dataset.section);
})