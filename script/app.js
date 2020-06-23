var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax({ onUpdate: updatePercentage });
var tl3 = new TimelineMax({ onUpdate: updatePercentage });

const controller = new ScrollMagic.Controller();
let h_full = window.innerHeight  ;
let w_full = window.innerWidth  ;


console.log(w_full);
console.log((w_full / 5) + ((w_full / 33.33)));

if (w_full >= 568){
    tl.to("#shirt", 1, { y: h_full / 4, x:   (w_full / 5) + ((w_full / 33.33)), ease: Circ.easeInOut })
    tl2.to("#suit", 1, { y: h_full / 4, x: - ((w_full / 5) + (w_full / 60)), ease: Circ.easeInOut })
    document.getElementById("suit").className = "";
    document.getElementById("shirt").className = "";
} else {
    tl.to("#shirt", 1, { y: h_full / 2, x:  (w_full/4) , ease: Circ.easeInOut })
    tl2.to("#suit", 1, { y: h_full / 2, x: -(w_full/4) , ease: Circ.easeInOut })
    document.getElementById("suit").className = "";
    document.getElementById("shirt").className = "";
}





tl3.to("#both", 10000000, { y: h_full , ease: Circ.easeInOut })



// Animation Part 1 


const scene = new ScrollMagic.Scene({
    triggerElement: "#sticky",
    triggerHook: "onLeave",
    duration: "140%"
})
    .addIndicators()
    .setPin("#sticky")
    .setTween(tl)
    .on("end", function () {
        document.getElementById("suit").className = "d-none";
        document.getElementById("shirt").className = "d-none";
        document.getElementById("both").className = "";

    })
    .on("progress", function () {
        document.getElementById("suit").className = "";
        document.getElementById("shirt").className = "";
        document.getElementById("both").className = "d-none";
    })
    .addTo(controller);
    

// Animation Part 2

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#sticky",
    triggerHook: "onLeave",
    duration: "140%"
})
    .setTween(tl2)
    .addTo(controller);
    
// Animation Part 3


const scene3 = new ScrollMagic.Scene({
    triggerElement: "#sticky2",
    triggerHook: "onLeave",
    duration: "45%"
})
    .on("end" , function(){
        document.getElementById("bodyAF").className ="";
        document.getElementById("bodyBF").className ="d-none";
        document.getElementById("both").className = "d-none";
        


    })
    .on("progress" , function(){
        document.getElementById("bodyAF").className = "d-none";
        document.getElementById("bodyBF").className = "";
        document.getElementById("both").className = "";
    })
    .addIndicators()
    .setTween(tl3)
    .addTo(controller);


function updatePercentage() {

    tl.progress();
    tl2.progress();
    tl3.progress();
  
}


