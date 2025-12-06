document.addEventListener('DOMContentLoaded',function(){
  // set year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const slider = document.getElementById('slider');
  if(!slider) return;
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  let idx = slides.findIndex(s=>s.classList.contains('active')) || 0;
  let timer = null;

  function goTo(i){
    slides.forEach((s,si)=>{
      s.classList.toggle('active', si===i);
    });
    idx = (i+slides.length)%slides.length;
  }

  function next(){ goTo(idx+1); }
  function prev(){ goTo(idx-1); }

  nextBtn.addEventListener('click', ()=>{ next(); resetTimer(); });
  prevBtn.addEventListener('click', ()=>{ prev(); resetTimer(); });

  function startTimer(){ timer = setInterval(next,4000); }
  function resetTimer(){ clearInterval(timer); startTimer(); }

  startTimer();
});
