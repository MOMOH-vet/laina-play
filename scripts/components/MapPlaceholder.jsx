    function MapPlaceholder({ t }) {
      return (
        <div className="aspect-[4/3] bg-white/5 grid place-items-center text-slate-400">
          <div className="text-center p-6"><div className="font-medium">{t('map.embed')}</div><div className="text-sm mt-1">{t('map.note')}</div></div>
        </div>
      );
    }

