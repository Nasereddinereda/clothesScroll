var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax({ onUpdate: updatePercentage });
var tl3 = new TimelineMax({ onUpdate: updatePercentage });
let bool = true ; 
const controller = new ScrollMagic.Controller();
let h_full = window.innerHeight  ;
let w_full = window.innerWidth  ;


if (w_full >= 568){
    tl.to("#shirt", 1, { y: h_full / 2, x: (w_full / 2) - (w_full / 5), ease: Circ.easeInOut })
    tl2.to("#suit", 1, { y: h_full / 2, x: -((w_full / 2) - (w_full / 5) - (w_full / 100)), ease: Circ.easeInOut })
} else {
    tl.to("#shirt", 1, { y: h_full / 2, x:  (w_full/4) , ease: Circ.easeInOut })
    tl2.to("#suit", 1, { y: h_full / 2, x: -(w_full/4) , ease: Circ.easeInOut })
}





tl3.to("#both", 10000000, { y: h_full , ease: Circ.easeInOut })



// Animation Part 1 


const scene = new ScrollMagic.Scene({
    triggerElement: "#sticky",
    triggerHook: "onLeave",
    duration: "170%"
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
    duration: "200%"
})
    .setTween(tl2)
    .addTo(controller);
    
// Animation Part 3


const scene3 = new ScrollMagic.Scene({
    triggerElement: "#sticky2",
    triggerHook: "onLeave",
    duration: "70%"
})
    .on("end" , function(){
        document.getElementById("body").src ="/img/bodyAF.png";

        if(bool === true){
            setTimeout(function () {
                bool = false;
                document.getElementById("both").className = "d-none";

            }, 100);
        } else{
            document.getElementById("both").className = "d-none";
        }


    })
    .on("progress" , function(){
        document.getElementById("both").className = "";
        document.getElementById("body").src = "/img/bodyBF.png";
    })
    .addIndicators()
    .setTween(tl3)
    .addTo(controller);


function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    tl2.progress();
    tl3.progress();
    // tl4.progress();
}


function runFunction() {
    console.log("hay");
}





