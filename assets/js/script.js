const element_array = $(".main_info")
let active_element = [];



$(function() {
    initHome();
});
function navigate(query){
    let section_query = $("#"+query);
    if(section_query.hasClass("d-none")){
    section_query[0].classList.toggle("d-none");
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
if(source === "info"){
    gsap.to($("#about_me"), {
        opacity:0,
        delay:0,
        duration: .75,
        x:0,
        y:-100,
        ease:"power7.in(1.7)",
        stagger:.5,
        display:"none"
    });
    $(".main_info").each(function(){
        $(this).addClass("d-none");
    })
    
}
if(source === "home"){
    $(".main_info").each(function(){
        $(this).addClass("d-none");
    })
}
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
    event.preventDefault();
    emptyInfo(event.target.dataset.type);
    navigate(event.target.dataset.section);
});
$(".home_button").click(function(event){
    event.preventDefault();
    emptyInfo(event.target.dataset.type);
    home();
})