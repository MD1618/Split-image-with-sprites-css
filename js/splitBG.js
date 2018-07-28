//window.onload = function(){
document.addEventListener("DOMContentLoaded", function(event) {
  splitSpin();


});
//}
function splitSpin() {
  let splitImgs = document.getElementsByClassName('bgCont');

  setTimeout(() => {
    document.getElementsByClassName('bgCont')[0].classList.add("spinCont");
  }, 400);
  setTimeout(() => {
    document.getElementsByClassName('bgCont')[1].classList.add("spinCont");
  }, 800);
  setTimeout(() => {
    document.getElementsByClassName('bgCont')[2].classList.add("spinCont");
  }, 1200);

  setTimeout(() => {
    document.getElementsByClassName('bgCont')[0].classList.remove("spinCont");
  }, 5000);
  setTimeout(() => {
    document.getElementsByClassName('bgCont')[1].classList.remove("spinCont");
  }, 5800);
  setTimeout(() => {
    document.getElementsByClassName('bgCont')[2].classList.remove("spinCont");
  }, 6200);
  setTimeout(() => {
    splitSpin();

  }, 10000);

}
