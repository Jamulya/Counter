var num = document.querySelector(".counter")
var decrease = document.querySelector(".decrease")
var reset = document.querySelector(".reset")
var increase = document.querySelector(".increase")
number = 0;

increase.addEventListener("click", function() {
  number++
  num.innerHTML = number
  if(num.innerHTML > 0){
  num.style.color = "green"
  }
  });

  decrease.addEventListener("click", function() {
    number--
    num.innerHTML = number
    if(num.innerHTML < 0) {
    num.style.color = "red"
    }
    });

    reset.addEventListener("click", function() {
      number = 0;
      num.innerHTML = number; 
      if(num.innerHTML == 0) {
        num.style.color = "grey"
      }   
  });
