    function Badge({ kind, t }) {
      const map = { keynote: '#EAB308', panel: '#38BDF8', workshop: '#22C55E', performance: '#A78BFA' };
      return (
        <span className="inline-flex items-center gap-2 text-xs mt-3 px-2.5 py-1 rounded-full" style={{ background: '#ffffff10', border: '1px solid #ffffff22' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: map[kind] || '#94A3B8' }} />
          <span className="text-slate-300 capitalize">{t(`program.kind.${kind}`) || kind}</span>
        </span>
      );
    }
