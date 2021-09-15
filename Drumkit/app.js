// const boom = document.getElementById("boom");
// const clap = document.getElementById("clap");
// const hiHat = document.getElementById("hihat")
// const kick = document.getElementById("kick")
// const openHat = document.getElementById("openhat")
// const ride = document.getElementById("ride")
// const snare = document.getElementById("snare")
// const tink = document.getElementById("tink")

document.addEventListener("keydown", function(e){
    if (e.keyCode == 49) {
        if(document.getElementById('boom').paused){
        document.getElementById('boom').play();
       }
       else{
        document.getElementById('boom').pause;
      }
    };
    if (e.keyCode == 50) {
        if(document.getElementById('clap').paused){
        document.getElementById('clap').play();
       }
       else{
        document.getElementById('clap').pause;
      }
    };
    if (e.keyCode == 51) {
        if(document.getElementById('hihat').paused){
        document.getElementById('hihat').play();
       }
       else{
        document.getElementById('hihat').pause;
      }
    };
    if (e.keyCode == 52) {
        if(document.getElementById('kick').paused){
        document.getElementById('kick').play();
       }
       else{
        document.getElementById('kick').pause;
      }
    };
    if (e.keyCode == 53) {
        if(document.getElementById('openhat').paused){
        document.getElementById('openhat').play();
       }
       else{
        document.getElementById('openhat').pause;
      }
    };
    if (e.keyCode == 54) {
        if(document.getElementById('ride').paused){
        document.getElementById('ride').play();
       }
       else{
        document.getElementById('ride').pause;
      }
    };
    if (e.keyCode == 55) {
        if(document.getElementById('snare').paused){
        document.getElementById('snare').play();
       }
       else{
        document.getElementById('snare').pause;
      }
    };
    if (e.keyCode == 56) {
        if(document.getElementById('tink').paused){
        document.getElementById('tink').play();
       }
       else{
        document.getElementById('tink').pause;
      }
    };
});