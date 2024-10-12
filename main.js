// When the page is fully loaded, hide the loader and show the content
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
   this.setTimeout(() =>{
    loader.style.display = "none"; // Hide the loader
    content.style.display = "block"; // Show the content
    // this.document.querySelectorAll(".for_loding").forEach((div) => {
    //   div.style.display="block"
    // })
   }, 3500)
  });

  const hidden_nav = document.getElementById("hidden_nav")
  function showNav(){
    hidden_nav.classList.toggle("active")
  }