    function Section({ id, title, subtitle, children }) {
      return (
        <section id={id} className="max-w-7xl mx-auto px-4 py-16 md:py-24 scroll-mt-24" data-section>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
            {subtitle && (<p className="mt-2 text-slate-400 max-w-3xl">{subtitle}</p>)}
          </div>
          {children}
        </section>
      );
    }
