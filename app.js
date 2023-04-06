const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li');

  // Set nav active status with boolean
  let isActive = false;
  console.log("nav-active : " + isActive)
  

  burger.addEventListener("click", ()=>{

      //Toggle nav
      nav.classList.toggle("nav-active");

      // Toggle nav active status to true/false
      isActive = !isActive;
      console.log("nav-active : " + isActive)
      
      //Animate link
      navLinks.forEach((link, index)=>{
          if(isActive) {
              link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
              console.log("nav li: "+ index + " in");
          } else {
              // link.style.animation = "";
              link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
              // link.style.animation = "";
              console.log("nav li: "+ index + " out");
          }
          console.log(link.style.animation);
      });
      
      //Burger animation
      burger.classList.toggle('toggle');
  });

}
navSlide();

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);