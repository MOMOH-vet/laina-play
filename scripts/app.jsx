    function AIExhibitionLanding() {
      const { lang, setLang, t } = useI18n();
      const [statusNode, status] = useInlineStatus();

      const nav = [
        { id: 'venue', label: t('nav.venue') },
        { id: 'about', label: t('nav.about') },
        { id: 'program', label: t('nav.program') },
        { id: 'artists', label: t('nav.artists') },
        { id: 'rsvp', label: t('nav.rsvp') },
        { id: 'faq', label: t('nav.faq') },
        { id: 'partners', label: t('nav.partners') },
      ];

      const schedule = [
        { time: '10:00–11:00', title: t('program.opening'), kind: 'keynote' },
        { time: '11:15–13:00', title: t('program.panel'), kind: 'panel' },
        { time: '14:00–17:00', title: t('program.workshops'), kind: 'workshop' },
        { time: '18:30–20:00', title: t('program.performance'), kind: 'performance' },
      ];

      const [active, setActive] = useState('venue');
      useEffect(() => {
        const ids = nav.map(n => n.id);
        const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
        if (!sections.length) return;
        const obs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
        }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });
        sections.forEach(sec => obs.observe(sec));
        return () => obs.disconnect();
      }, []);

      const jsonLdRef = useRef(null);

      const eventJsonLd = useMemo(() => ({
        '@context': 'https://schema.org', '@type': 'ExhibitionEvent', name: t('brand.title'),
        startDate: '2025-12-01', endDate: '2026-03-31',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: { '@type': 'Place', name: (lang==='fr'?'Tachkent':lang==='en'?'Tashkent':lang==='uz'?'Toshkent':'Ташкент'), address: 'Tashkent, Uzbekistan' },
        organizer: { '@type': 'Organization', name: 'Curatorial Office', email: 'hello@example.com' },
      }), [lang]);
      useEffect(() => {
        if (jsonLdRef.current) {
          jsonLdRef.current.textContent = JSON.stringify(eventJsonLd);
        }
      }, [eventJsonLd]);

      const RSVP_ENDPOINT = null; const OC_ENDPOINT = null;

      async function handleRSVPSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        try {
          if (RSVP_ENDPOINT) {
            const res = await fetch(RSVP_ENDPOINT, { method: 'POST', body: fd });
            if (!res.ok) throw new Error('network');
          } else {
            const list = JSON.parse(localStorage.getItem('rsvp') || '[]');
            list.push({ ...Object.fromEntries(fd.entries()), ts: Date.now() });
            localStorage.setItem('rsvp', JSON.stringify(list));
          }
          status.show('ok', t('rsvp.success'));
        } catch (err) {
          status.show('error', t('rsvp.error'));
        } finally {
          setTimeout(() => status.clear(), 2500);
        }
      }

      return (
        <div className="min-h-screen relative">
          <script ref={jsonLdRef} id="jsonld" type="application/ld+json" />

          <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[1000] bg-white text-slate-900 px-3 py-1 rounded">{t('a11y.skip')}</a>

          <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/70" aria-label={t('topbar.label')}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <a href="#top" className="flex items-center gap-3 group" aria-label={t('home')}>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/15 group-hover:ring-white/30 transition overflow-hidden">
                 <BrandMark size={40} />
                </div>

                <div className="leading-tight">
                  <div className="font-semibold text-sm tracking-wide">{t('brand.title')}</div>
                  <div className="text-xs text-slate-400">{t('brand.subtitle')}</div>
                </div>
              </a>

              <nav className="hidden md:flex items-center gap-6" aria-label={t('nav.sections')}>
                {nav.map((n) => (
                  <a key={n.id} href={`#${n.id}`}
                     className={"text-sm transition-colors " + (active === n.id ? "text-white" : "text-slate-300 hover:text-white")}
                     aria-current={active === n.id ? 'page' : undefined}>
                    {n.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <LangCapsule lang={lang} setLang={setLang} t={t} />
                <a href="#rsvp" className="hidden sm:inline-block text-xs px-3 py-1 rounded-full bg-white text-slate-900 font-semibold hover:opacity-90">
                  {t('nav.rsvp')}
                </a>
              </div>
            </div>
          </header>

          <section id="top" className="relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_10%,black,transparent)]">
              <GridBG />
            </div>
            <main id="main" className="max-w-7xl mx-auto px-4 pt-14 md:pt-20 pb-14 md:pb-24">
              <div className="grid md:grid-cols-2 lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-12 items-start">
                <div className="self-start">
                  <h1 className="text-[36px] md:text-[44px] font-semibold leading-[1.15] tracking-tight max-w-[36ch]">
                    {lang === 'ru' ? (
                      <>
                        <span className="inline-flex items-center gap-3 align-top text-[1.35em] md:text-[1.35em] leading-[1.05]">
                          <BrandMark className="h-[1.15em] w-auto -translate-y-[1px]" />
                          <span>ИГРА В L&apos;AIнгу</span>
                        </span>
                        <span className="block text-[.92em] md:text-[.92em]">Между человеком и алгоритмом</span>
                        <span className="block text-[.92em] md:text-[.92em]">возникает волшебство искусства</span>
                      </>
                    ) : (
                      <span className="inline-flex items-center gap-3 align-top">
                        <BrandMark className="h-[1.05em] w-auto -translate-y-[1px]" />
                        {t('hero.title')}
                      </span>
                    )}
                  </h1>
                  <p className="mt-3 md:mt-4 text-slate-300 text-base md:text-lg max-w-xl">{t('hero.date')}</p>
                  <div className="mt-6 flex flex-wrap gap-3 items-center">
                    <a href="#rsvp" className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-semibold">{t('hero.cta.invite')}</a>
                    <a href="#program" className="px-5 py-3 rounded-2xl ring-1 ring-white/20 hover:ring-white/40">{t('hero.cta.program')}</a>
                  </div>
                  <ul className="mt-6 text-sm text-slate-400 space-y-1">
                    <li>• {t('hero.b1')}</li>
                    <li>• {t('hero.b2')}</li>
                    <li>• {t('hero.b3')}</li>
                  </ul>
                </div>
                <HeroVideo />
              </div>
            </main>
          </section>

          <Section id="venue" title={t('venue.title')}>
            <div className="grid md:grid-cols-[1.6fr_0.6fr] gap-6">
              <div>
                <p className="text-slate-300">{t('venue.text')}</p>
                <div className="mt-4 p-4 rounded-2xl ring-1 ring-white/10 bg-white/5 text-sm text-slate-300">
                  <div className="font-semibold">{t('venue.hours')}</div>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>{t('venue.tueSun')}</li>
                    <li>{t('venue.mon')}</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 w-full md:max-w-md ml-auto">
                <MapPlaceholder t={t} />
              </div>
            </div>
          </Section>

          <Section id="about" title={t('about.title')}>
            <p className="text-slate-300 max-w-3xl">{t('about.p1')}</p>
            <div className="mt-6 text-slate-300 max-w-3xl"><p className="mb-2">{t('about.p2')}</p></div>
          </Section>

          <Section id="open-call" title={t('oc.title')} subtitle={t('oc.subtitle')}>
            <div className="grid md:grid-cols-2 xl:grid-cols-[1.05fr_1.2fr] gap-8">
              <div className="space-y-4 text-slate-300">
                <div>
                  <div className="font-semibold">{t('oc.formats.title')}</div>
                  <ul className="mt-2 list-disc list-inside text-slate-300">
                    <li>{t('oc.format.installation')}</li>
                    <li>{t('oc.format.video')}</li>
                    <li>{t('oc.format.textviz')}</li>
                    <li>{t('oc.format.sound')}</li>
                    <li>{t('oc.format.datachoreo')}</li>
                    <li>{t('oc.format.new')}</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">{t('oc.what.title')}</div>
                  <ul className="mt-2 list-disc list-inside text-slate-300">
                    <li>{t('oc.what.item1')}</li>
                    <li>{t('oc.what.item2')}</li>
                    <li>{t('oc.what.item3')}</li>
                    <li>{t('oc.what.item4')}</li>
                    <li>{t('oc.what.item5')}</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-4 text-sm text-slate-300">{t('oc.note.special')}</div>
                <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); }}>
                  <Input label={t('oc.form.full_name')} name="full_name" placeholder={t('oc.form.full_name.ph')} required />
                  <Input label={t('oc.form.country')} name="country" required />
                  <Input label={t('oc.form.role')} name="role" required />
                  <Input label={t('oc.form.org')} name="org" />
                  <Input label={t('oc.form.email')} type="email" name="email" required autoComplete="email" />
                  <Input label={t('oc.form.project_title')} name="project_title" required />
                  <label className="block" htmlFor="desc"><span className="text-sm text-slate-300">{t('oc.form.desc')}</span>
                    <textarea id="desc" name="desc" className="mt-1 w-full p-3 rounded-xl bg-white/5 ring-1 ring-white/10 focus:outline-none" rows={4} placeholder={t('oc.form.desc.ph')} required aria-required="true"></textarea>
                  </label>
                  <Input label={t('oc.form.pdf_link')} name="pdf_link" placeholder="https://..." />
                  <div className="flex items-center gap-3">
                    <button type="submit" className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-semibold">{t('oc.form.submit')}</button>
                  </div>
                  <p className="text-xs text-slate-400">{t('oc.note.after')}</p>
                </form>
              </div>
            </div>
          </Section>

          <Section id="program" title={t('program.title')}>
            <div className="grid md:grid-cols-2 gap-4">
              {schedule.map((s, i) => (
                <div key={i} className="rounded-2xl p-4 ring-1 ring-white/10 bg-white/5">
                  <div className="text-sm text-slate-400">{s.time}</div>
                  <div className="mt-1 font-medium">{s.title}</div>
                  <Badge kind={s.kind} t={t} />
                </div>
              ))}
            </div>
          </Section>

          <Section id="artists" title={t('artists.title')}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map((n) => (
                <div key={n} className="rounded-2xl overflow-hidden ring-1 ring-white/10 group">
                  <div className="aspect-[4/3] bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/10 to-cyan-500/20" />
                  <div className="p-4"><div className="font-medium">{t('artists.name')} #{n}</div><div className="text-sm text-slate-400 mt-1">{t('artists.blurb')}</div></div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="rsvp" title={t('rsvp.title')} subtitle={t('rsvp.subtitle')}>
            <form className="grid md:grid-cols-2 gap-4 max-w-3xl" method="POST" action="#" onSubmit={handleRSVPSubmit}>
              <Input label={t('form.name')} name="name" placeholder={t('form.name.ph')} required autoComplete="name" />
              <Input label={t('form.email')} name="email" type="email" placeholder="name@example.com" required autoComplete="email" />
              <Input label={t('form.org2')} name="org" placeholder={t('form.org2.ph')} autoComplete="organization" />
              <Input label={t('form.phone')} name="phone" placeholder="+998 xx xxx xx xx" autoComplete="tel" />
              <div className="md:col-span-2">
                <label className="text-sm text-slate-300" htmlFor="rsvp_message">{t('form.msg')}</label>
                <textarea id="rsvp_message" name="message" className="mt-1 w-full p-3 rounded-xl bg-white/5 ring-1 ring-white/10 focus:outline-none" rows={4} placeholder={t('form.msg.ph')} />
              </div>
              <div className="md:col-span-2 flex items-center gap-3">
                <button type="submit" className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-semibold">{t('form.send')}</button>
                <a href="mailto:hello@example.com" className="text-sm text-slate-300 underline">{t('form.orEmail')}</a>
              </div>
            </form>
          </Section>

          <Section id="faq" title={t('faq.title')} subtitle={t('faq.subtitle')}>
            <div className="grid gap-3 max-w-3xl">
              <FaqItem q={t('faq.q1')} a={t('faq.a1')} />
              <FaqItem q={t('faq.q2')} a={t('faq.a2')} />
              <FaqItem q={t('faq.q3')} a={t('faq.a3')} />
            </div>
          </Section>

          <Section id="partners" title={t('partners.title')}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[t('partners.logo.museum'),t('partners.logo.tech'),t('partners.logo.university'),t('partners.logo.gallery'),t('partners.logo.media')].map(p => (
                <div key={p} className="h-16 rounded-xl ring-1 ring-white/10 grid place-items-center text-sm text-slate-300 bg-white/5">{p}</div>
              ))}
            </div>
          </Section>

          <footer className="mt-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="font-semibold">{t('contacts.title')}</div>
                <div className="text-sm text-slate-300 mt-1">{t('contacts.office')}</div>
                <div className="text-sm text-slate-400 mt-2">email: hello@example.com</div>
              </div>
              <div className="md:text-right text-sm text-slate-400">© 2025 {t('brand.title')} • {t('rights')}</div>
            </div>
          </footer>

          {statusNode}
        </div>
      );
    }
    const mount = document.getElementById('root');
    (ReactDOM.createRoot ? ReactDOM.createRoot(mount) : ReactDOM).render(<AIExhibitionLanding />);
