document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const status = document.getElementById("form-status");
  status.innerHTML = "Sending...";
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      status.innerHTML = "<span style='color:green'>Thank you! Your message has been sent.</span>";
      form.reset();
    } else {
      status.innerHTML = "<span style='color:red'>Sorry, there was a problem. Please try again later.</span>";
    }
  } catch (err) {
    status.innerHTML = "<span style='color:red'>Network error. Please try again later.</span>";
  }
});

// Highlight nav links on scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute("id");
    let link = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
    if(link) {
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});