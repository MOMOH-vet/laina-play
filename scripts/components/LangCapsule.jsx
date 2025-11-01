    function LangCapsule({ lang, setLang, t }) {
      const [open, setOpen] = useState(false);
      const [hover, setHover] = useState(null);
      const codes = ['ru','en','uz','fr'];
      const labels = { ru:'RU', en:'EN', uz:'UZ', fr:'FR' };
      const close = useCallback(() => { setOpen(false); setHover(null); }, []);
      const select = useCallback((code) => { setLang(code); close(); }, [setLang, close]);
      function onKeyDown(e) {
        if (!open && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setOpen(true); return; }
        if (e.key === 'Escape') { e.preventDefault(); close(); return; }
        const idx = codes.indexOf(hover ?? lang);
        if (open && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
          e.preventDefault(); const dir = e.key === 'ArrowRight' ? 1 : -1;
          const next = (idx + dir + codes.length) % codes.length; setHover(codes[next]);
        }
        if (open && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); select(hover ?? lang); }
      }
      return (
        <div className="relative" style={{ width: '12.5rem', height: '2rem' }}>
          <div className={"group absolute left-1/2 top-0 -translate-x-1/2 h-8 w-full rounded-full ring-1 ring-white/15 bg-transparent transition-colors select-none " + (open ? "ring-white/30" : "hover:ring-white/30")}
               role="listbox" aria-label={t('ui.lang')} tabIndex={0}
               onMouseEnter={() => setOpen(true)} onMouseLeave={close}
               onFocus={() => setOpen(true)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) close(); }}
               onKeyDown={onKeyDown}>
            <div className={"absolute inset-0 grid place-items-center pointer-events-none transition-opacity duration-150 " + (open ? "opacity-0" : "opacity-100")}>
              <span className="text-xs tracking-wide">{labels[lang]}</span>
            </div>
            <div className={"absolute inset-0 flex items-center justify-center gap-3 px-3 transition-transform duration-200 origin-center " + (open ? "scale-x-100" : "scale-x-0")}>
              {codes.map(code => {
                const active = (hover ?? lang) === code;
                return (
                  <button key={code} type="button"
                          className={"text-xs px-2 py-1 rounded-full transition " + (active ? "bg-white/20 text-white" : "hover:bg-white/10 text-slate-200")}
                          role="option" aria-selected={lang === code}
                          onMouseEnter={() => setHover(code)} onFocus={() => setHover(code)} onClick={() => select(code)}>
                    {labels[code]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

