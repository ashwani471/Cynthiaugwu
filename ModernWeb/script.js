const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageanim(){
    var tl = gsap.timeline();
    tl.from("#nav a , #nav h5",{
        y:-100,
        opacity:0,
        duration:1,
        delay:1,
        stagger:0.5
    })
     .to(".boundingelem",{
        y:0,
        duration:1,
        delay:-.5,
        stagger:0.2
     })

     .from("#smallHeading",{
        opacity:0,
        x:100,
        duration:0.5,
        delay:-0.4,
     })

     .from("#heroFooter",{
        opacity:0,
        y:-10,
        duration:0.5,
        ease:Expo.easeInOut,
     })
}

function circleMousefoloowing(){
    window.addEventListener('mousemove', function(deta){
        document.querySelector('#circle').style.transform = `translate(${deta.clientX}px , ${deta.clientY}px)`;
    })
}

document.querySelectorAll('.elem').forEach(function(elem){
    elem.addEventListener('mouseleave',function(deta){
      gsap.to(elem.querySelector("img"),{
          display:'none',
      });
    });
  });

document.querySelectorAll('.elem').forEach(function(elem){
  elem.addEventListener('mousemove',function(deta){
    var diff = deta.clientY - elem.getBoundingClientRect().top;
    gsap.to(elem.querySelector("img"),{
        display:'flex',
        y:diff,
        x:deta.clientX,
    });
  });
});



circleMousefoloowing();
firstPageanim();