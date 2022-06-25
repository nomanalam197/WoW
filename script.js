gsap.set(".img",{
    top:"110vh",
})
gsap.to(".img",{
        scrollTrigger:{
            trigger:".two",
            // markers:true,
            scrub:3,
            start:"0% 120%",
            end:"0% 60%",
            //100%, amd 60% is danda and 0% and 0% is mark ki jab danda touchn kre mark ko to start and stop hoe
        },
        top:"-45vh",
        rotate:"460deg",
        duration:2,
        ease: Power0.easeOut,
})
gsap.to("#crcles",{
    scrollTrigger:{
        // markers:true,
        trigger:".two",
        scrub:3,
        start:"0% 95%",
        end:"0% 60%",
    },
    color:"white",
    scale:1.7,
    rotate:"460deg",
    duration:2,
    ease: Power0.easeInOut,
})
gsap.to(".one",{
    scrollTrigger:{
        trigger:".one",
        start:"0% 97%",
        end: "0% 10%",
        scrub:2,
        // markers:true, 
    },
    rotate:"460deg",
    ease:Expo.easeInOut,
    duration:8

})
gsap.to(".two",{
    scrollTrigger:{
        trigger:".one",
        start:"0% 95%",
        end: "0% 10%",
        scrub:2
    },
    rotate:"-760deg",  
    ease:Expo.easeInOut,
    duration:8

})
gsap.to(".three",{
    scrollTrigger:{
        trigger:".one",
        start:"0% 95%",
        end: "0% 10%",
        scrub:2,
    },
    rotate:"-460deg",
    ease:Expo.easeInOut,
    duration:8

})
// var widthOfPhotoDiv =document.querySelector(".photus").getBoundingClientRect().width;
var tl = gsap.timeline({scrollTrigger:{
    trigger:"#slide",
    // markers:true,
    start:"50% 50%",
    end:"80% 50%",
    scrub:3,
    pin:true
}});
tl
.to(".photo",{
    rotate:"720deg",
    ease:Power0.easeOut,
    duration:3,
    top:"50%"
})
.to("#photu",{
    ease:Power0.easeInOut,
    duration:5,
    left:"60%"
},"b")
.to(".photus",{
    ease:Power0.easeInOut,
    duration:5,
    left:"-100%",
},)


document
.querySelectorAll("#right a")
.forEach(function(link){
    link.addEventListener("mouseover",function(dets){
        gsap.to(".imgb",{
            x: dets.target.dataset.index * -100 +"%",
            ease: "power3",
            duration:1,            
        })
    })
})
document
.querySelectorAll("#mtext a")
.forEach(function(link){
    link.addEventListener("mouseover",function(dets){
        gsap.to(".nimg",{
            x: dets.target.dataset.kite * -100 +"%",
            ease: "power3",
            duration:1,            
        })
    })
})
var t2 =gsap.timeline({
    scrollTrigger:{
        trigger: "#hey",
        // markers:true,
        start:"centre centre",
        stop:"centre centre",
        scrub:4,
        pin:true,
    }
})
t2
.to(".strips",{
    ease: Circ.easeInOut,
    opacity: 1,
    stagger:0.7
},"a")
.to("#hey h1 span",{
    y:-20,
    stagger:0.7
},"a") 
// "a" is to run two animation at a time a is just a variable , stagger is use to apply effect on each object having same class like span and stips here




document.querySelector("#open").addEventListener("click",function(){
    // document.querySelector("#menupage").style.top = "0vh";
    $("#menupage").css({
        "width":"100%",
        "height":"100vh",
        "opacity":1,
        "border-radius":"0",
        "right":"0",

    })
    $("#mtext").css({
        "opacity":"1",
    })
})

document.querySelector("#close").addEventListener("click",function(){
    // document.querySelector("#menupage").style.top = "0vh";
    $("#menupage").css({
        "width":"0%",
        "height":"0vh",
        "opacity":0,
        "border-radius":"50%",
        "right":"50%"
    })
    $("#mtext").css({
        "opacity":"0",
    })
})

ScrollTrigger.create({
    onUpdate: function(dets){
        gsap.to("#progress",{
            width: Math.floor(dets.progress *100)+"%",
        });
    }
})
// var classs = "";
// var imageIndex = "";

// var animateFunction = function(classs,imageIndex){
//     document.querySelector("."+classs).addEventListener("mousemove",function(){
//         $("."+classs).css({
//             "transform": "translateY(-40px)"
//         })
//         var t = gsap.timeline(
//         )
//         .to(".animate:nth-child("+imageIndex+")",{
//             opacity:1,
//             stagger:.1,
//             rotate:("-10deg"),
//             ease:Power0.easeInOut
//         },"aa")
        

//         document.querySelector("."+classs).addEventListener("mouseout",function(){
//             $("."+classs).css({
//                 "transition-delay": ".5",
//                 "transform": "translateY(0px)"

//             })
//             t.to(".animate:nth-child("+imageIndex+")",{
                
//                 opacity:0,
//                 stagger:.1,
//                 rotate:("0deg"),
//                 ease:Power0.easeInOut
//             },"aa")
//         })
//     })
// }



// document.querySelector("#main").addEventListener("mousemove",function(dets){
//     switch(dets.target.getAttribute('class')){
//         case "hero":
//             animateFunction("hero","1");
//             break;
//         case "mero":
//             animateFunction("mero","2");
//             break;
//         case "kero":
//             animateFunction("kero","3");
//             break;
//         case "zero":
//             animateFunction("zero","4");
//             break;
//         case "lero":
//             animateFunction("lero","5");
//             break;
//         case "fero":
//             animateFunction("fero","6");
//             break;
//         case "eero":
//             animateFunction("eero","7");
//             break;
//         case "pero":
//             animateFunction("pero","8");
//             break;
//         case "sero":
//             animateFunction("sero","9");
//             break;
//         case "nero":
//             animateFunction("nero","10");
//             break;
//     }
// })

// document
// .querySelectorAll("#hey h1 span")
// .forEach(function(link){
//     link.addEventListener("mouseover",function(dets){
//         document.querySelectorAll("#hey #strip .strips").forEach(function(dety){
//             transform: scale(1.5);
//         })
//     })
// })

// ScrollTrigger.create({
//     onUpdate: function (dets){
//         gsap.to("#main #progress", {
//             width: Math.floor(dets.progress * 100)+"%",
//             ease: "power3.easeInOut"
//         })
//     }
// })