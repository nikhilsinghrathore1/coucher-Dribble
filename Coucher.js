console.log("working"); 
let tl = gsap.timeline();
// tl.from("nav",{
//                duration:1,
//                opacity:0,
// })
// tl.from(".img , .home , .login",{
//                y:-10,
//                opacity:0,
//                stagger:0.4,
// })
// tl.from(".left h1",{
//                x:-100,
//                opacity:0,
//                stagger:0.3,
// })
// tl.from(".leftLast h2,.leftLast h3",{
//                duration:0.5,
//                opacity:0,
// })
// tl.from(".Rimg img",{
//                scale:0,
//                opacity:0
// })
// tl.from(".text h1",{
//                x:-100,
//                opacity:0,
//                opacity:0,
//                stagger:0.5,
// })
// tl.from(".input input,.incrl",{
//                opacity:0,
//                stagger:0.5,
//                duration:1,
// })
// tl.from(".whiteDot, .whiteDotHollow",{
//                opacity:0,
// })
gsap.from(".page2-left,.orange,.white,.yellow",{
               opacity:0,
               duration:0.5,
               stagger:0.6,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 550px",
                              // markers:true,

               }
})