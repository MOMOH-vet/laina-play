    function FaqItem({ q, a }) {
      const [open, setOpen] = useState(false);
      const id = Math.random().toString(36).slice(2);
      return (
        <div className="rounded-2xl ring-1 ring-white/10 bg-white/5">
          <button className="w-full text-left p-4 flex items-center justify-between"
                  onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`faq-${id}`}>
            <span className="font-medium pr-4">{q}</span>
            <span className="text-slate-400" aria-hidden>{open ? '–' : '+'}</span>
          </button>
          {open && <div id={`faq-${id}`} className="px-4 pb-4 text-slate-300">{a}</div>}
        </div>
      );
    }

