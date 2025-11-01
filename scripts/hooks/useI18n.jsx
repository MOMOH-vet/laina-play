    function useI18n() {
      const [lang, setLang] = useState(() => {
        try { const saved = localStorage.getItem('lang'); if (langs.includes(saved)) return saved; } catch {}
        const nav = (navigator.language || '').toLowerCase();
        if (nav.startsWith('ru')) return 'ru'; if (nav.startsWith('fr')) return 'fr'; if (nav.startsWith('uz')) return 'uz'; return 'en';
      });
      useEffect(() => {
        document.documentElement.lang = lang;
        try { localStorage.setItem('lang', lang); } catch {}
        const titles = {
          ru: "Игра в Л'AIнгу — Выставка об ИИ",
          en: "The L'AInga Play — AI Exhibition",
          fr: "The L'AInga Play — Exposition IA",
          uz: "L'AInga o‘yini — AI ko‘rgazmasi"
        };
        const descriptions = {
          ru: "Международная выставка об искусстве и ИИ: инсталляции, мастер‑классы, дискуссии. Ташкент.",
          en: "International exhibition on art & AI: installations, workshops, talks. Tashkent.",
          fr: "Exposition internationale art & IA : installations, ateliers, discussions. Tachkent.",
          uz: "Sanʼat va AI haqida xalqaro ko‘rgazma: installyatsiyalar, mahorat darslari, suhbatlar. Toshkent."
        };
        const ogDesc = {
          ru: "Между человеком и алгоритмом возникает искусство. Декабрь 2025 — Март 2026, Ташкент.",
          en: "Between human and algorithm, art happens. Dec 2025 — Mar 2026, Tashkent.",
          fr: "Entre l’humain et l’algorithme naît l’art. Déc. 2025 — Mars 2026, Tachkent.",
          uz: "Inson va algoritm o‘rtasida sanʼat tug‘iladi. 2025 dekabr — 2026 mart, Toshkent."
        };
        document.title = titles[lang] || titles.en;
        const setMeta = (selector, content) => {
          const el = document.querySelector(selector);
          if (el) el.setAttribute('content', content);
        };
        setMeta('meta[name="description"]', descriptions[lang] || descriptions.en);
        setMeta('meta[property="og:title"]', titles[lang] || titles.en);
        setMeta('meta[property="og:description"]', ogDesc[lang] || ogDesc.en);
      }, [lang]);
      const t = (key) => (dict[key] && dict[key][lang]) || (dict[key] && dict[key]['ru']) || key;
      return { lang, setLang, t };
    }
