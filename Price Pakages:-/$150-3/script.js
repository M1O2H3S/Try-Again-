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
  
  // When the user clicks on the button, scroll to the top of the document
  function opFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  
  
  const sidebar = document.querySelector(".sidebar");
  const cross = document.querySelector(".fa-xmark");
  const black = document.querySelector(".black");
  const sidebtn = document.querySelector(".second-1");
  
  
  
  
  cross.addEventListener("click", () => {
    sidebar.classlist.fa - xmark("active");
    cross.classlist.remove("active");
    black.classlist.remove("active");
  });
  
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
  
  /**Registration**/
  const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    allInput = form.querySelectorAll(".first input");
  
  
  nextBtn.addEventListener("click", () => {
    allInput.forEach(input => {
      if (input.value != "") {
        form.classList.add('secActive');
      } else {
        form.classList.remove('secActive');
      }
    })
  })
  
  backBtn.addEventListener("click", () => form.classList.remove('secActive'));
  
  function passaval() {
    let selecttext = document.getElementById("all").value;
    localStorage.setItem("dd.value,selecttext") / returntrue;
  }
  document.getElementById("Result").innerHTML = localStorage.setItem("dd.value");
  // When the user clicks on the button, scroll to the top of the document
function opFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}