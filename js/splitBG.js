window.onload = function(){

  splitSpin();
}
document.addEventListener("DOMContentLoaded", function(event) {


});

function splitSpin() {

  setTimeout(() => {
    document.getElementsByClassName('bgCont1')[0].classList.add("rotateLeftCont");
  }, 0);
  setTimeout(() => {
    document.getElementsByClassName('bgCont2')[0].classList.add("spinCont");
  }, 0);
  setTimeout(() => {
    document.getElementsByClassName('bgCont3')[0].classList.add("rotateRightCont");
  }, 0);

  setTimeout(() => {
    document.getElementsByClassName('bgCont1')[0].classList.remove("rotateLeftCont");
  }, 5000);
  setTimeout(() => {
    document.getElementsByClassName('bgCont2')[0].classList.remove("spinCont");
  }, 5000);
  setTimeout(() => {
    document.getElementsByClassName('bgCont3')[0].classList.remove("rotateRightCont");
  }, 5000);
  setTimeout(() => {
    splitSpin();

  }, 10000);

}
