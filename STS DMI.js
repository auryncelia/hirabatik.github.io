// ====================== HOME ====================
// ========= TOGGLE MENU BAR (NAVBAR)============
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}



// =========== SCROLL REVEAL ============
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 3000,
  delay: 200
});

ScrollReveal().reveal('.text-box', { origin: 'top'});
ScrollReveal().reveal('.hero-btn', { origin: 'bottom'});
ScrollReveal().reveal('.faq', { origin: 'top'});
ScrollReveal().reveal('.testi-col', { origin: 'bottom'});
ScrollReveal().reveal('.our-cust', { origin: 'left'});
ScrollReveal().reveal('.cust-col', { origin: 'left'});


// =========== LOGIN ============== 
const container = document.querySelector(".container");
const inputs = document.querySelectorAll(".form-box input[type = 'password']");
const icons =[...document.querySelectorAll(".form-icon")];
const span = [...document.querySelectorAll(".form-box .top-span")];
const section = document.querySelector("section");

spans.map((span) => {
    span.addEventListener("click",(e) => {
        const color = e.target.dataset.id;
        container.classList.toggle("active");
        document.querySelector(':root').style.setProperty("--custom", color);
    });
});

Array.from(inputs).map(input =>{
    icons.map(icon =>{
        icon.innerHTML = '<img src="gambar/eye.svg" alt="" />';

        icon.addEventListener('click', ()=>{
            const type = input.getAttribute("type");
            if(type === "password"){
                input.setAttribute("type", "text");
                icon.innerHTML = '<img src="gambar/hide.svg" alt="" />';
            }else if (type === "text") {
                input.setAttribute("type", "password");
                icon.innerHTML = `<img src="gambar/eye.svg" alt="" />`;
              }
        });
    });
});
