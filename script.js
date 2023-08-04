var tl = gsap.timeline();

tl.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:100,
    scrollTrigger:{
        trigger:"#page1",
        scrooler:"body",
        start:"top 0",
        end:"top -300%",
        scrub:2,
        pin:true
    }
})