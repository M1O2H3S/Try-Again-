// Get the button
  let backToTopBtn = document.getElementById("backToTopBtn");
  
  // When the user scrolls down 200px from the top of the document, show the button
  window.onscroll = function() { scrollFunction() };
  
  function scrollFunction() {
    if (document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }
  

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar ')
    sidebar.style.display = 'flex'
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar ')
    sidebar.style.display = 'none'
  }
  
  function is(src) {
    window.location = src;
  }
  
// When the user clicks on the button, scroll to the top of the document
function opFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}