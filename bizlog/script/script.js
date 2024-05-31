
document.getElementById("mobile-menu").addEventListener("click", () => {
    document.querySelector(".sidenav").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
  
    document.getElementById("overlay").addEventListener("click", () => {
      document.querySelector(".sidenav").classList.remove("active");
      document.getElementById("overlay").classList.remove("active");
    });
  });
  
  document.getElementById("cross-menu").addEventListener("click", () => {
    document.querySelector(".sidenav").classList.toggle("active");
  });
  
  console.log("hello world from script")