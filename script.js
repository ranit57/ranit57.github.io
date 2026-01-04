// Small UI enhancements
document.addEventListener('DOMContentLoaded',()=>{
  // smooth scrolling for nav
  document.querySelectorAll('.nav a').forEach(a=>{
    a.addEventListener('click',e=>{
      e.preventDefault();
      const t=document.querySelector(a.getAttribute('href'));
      if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
    })
  })

  // collapsible project details
  const toggles = document.querySelectorAll('.toggle-details');
  toggles.forEach(btn=>{
    btn.setAttribute('type','button');
    btn.addEventListener('click', ()=>{
      const card = btn.closest('.card');
      const details = card.querySelector('.project-details');
      const isOpen = card.classList.contains('open');
      if(!isOpen){
        // open: set class, animate from 0 to scrollHeight
        card.classList.add('open');
        btn.textContent = 'See less';
        details.style.maxHeight = details.scrollHeight + 'px';
        details.setAttribute('aria-hidden','false');
        btn.setAttribute('aria-expanded','true');
        // after transition, allow auto height
        window.setTimeout(()=>{ if(card.classList.contains('open')) details.style.maxHeight = 'none' }, 350);
      } else {
        // close: set explicit maxHeight then animate to 0
        details.style.maxHeight = details.scrollHeight + 'px';
        // force reflow
        void details.offsetHeight;
        card.classList.remove('open');
        btn.textContent = 'See more details';
        details.setAttribute('aria-hidden','true');
        btn.setAttribute('aria-expanded','false');
        details.style.maxHeight = '0px';
      }
    })
  })

  // ensure collapse state on load
  document.querySelectorAll('.project-details').forEach(d=>{ d.style.maxHeight = 0; d.setAttribute('aria-hidden','true') })

})
