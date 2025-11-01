  (() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const c = document.getElementById('bg-stars'); if (!c || reduceMotion) return;
    const ctx = c.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize(){ c.width = Math.floor(innerWidth * dpr); c.height = Math.floor(innerHeight * dpr); ctx.setTransform(dpr,0,0,dpr,0,0); init(); }
    window.addEventListener('resize', resize, {passive:true});
    let stars = []; function init(){ const count = Math.round(innerWidth*innerHeight/15000); stars = Array.from({length: count}, () => ({ x: Math.random()*innerWidth, y: Math.random()*innerHeight, r: Math.random()*1.2+0.2, p: Math.random()*Math.PI*2, s: (Math.random()*0.7+0.3)/1000 })); }
    resize();
    function loop(t){ ctx.clearRect(0,0, innerWidth, innerHeight); for(const s of stars){ const a = 0.12 + 0.25*(0.5+Math.sin(t*s.s + s.p)); ctx.globalAlpha = a; ctx.fillStyle = 'rgba(56,189,248,0.9)'; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill(); } ctx.globalAlpha=1; requestAnimationFrame(loop); }
    requestAnimationFrame(loop);
  })();
  // Top glow follows scroll (subtle parallax)
  (() => {
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById('glowfx'); if (!el || reduceMotion) return;
    function onScroll(){ const y = window.scrollY; el.style.setProperty('--glowShift', (-(y%120)/6).toFixed(1)+'px'); }
    window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  })();
