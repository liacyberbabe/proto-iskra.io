const nav=document.querySelector(".nav"), menu=document.querySelector(".menu");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".card,.process-item,.section h2").forEach(e=>io.observe(e));