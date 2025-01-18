
const toggleInput = document.getElementById('theme');
const demo = document.getElementById('demo');


toggleInput.addEventListener("change", function(){
  
    document.documentElement.classList.toggle("dark");
    demo.classList.toggle("fa-moon");
    demo.classList.toggle("fa-sun");
    
})