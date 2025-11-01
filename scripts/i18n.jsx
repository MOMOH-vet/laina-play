    const langs = ['ru','en','uz','fr'];
    const dict = {
      'ui.lang': {ru:'Язык', en:'Language', uz:'Til', fr:'Langue'},
      'a11y.skip': {ru:'К содержимому', en:'Skip to content', fr:'Aller au contenu', uz:"Tarkibga o‘tish"},
      'topbar.label': {ru:'Верхняя панель', en:'Top bar', fr:'Barre supérieure', uz:'Yuqori panel'},
      'nav.sections': {ru:'Навигация по разделам', en:'Section navigation', fr:'Navigation par sections', uz:'Bo‘limlar navigatsiyasi'},
      'home': {ru:'Домой', en:'Home', fr:'Accueil', uz:'Bosh sahifa'},

      // Brand
      'brand.title': {ru:"Игра в L’AIнгу", en:"The L'AInga Play", fr:"The L'AInga Play", uz:"L'AInga"},
      'brand.subtitle': {ru:'Международная выставка', en:'International Exhibition', fr:'Exposition internationale', uz:'Xalqaro ko‘rgazma'},

      // Nav
      'nav.about': {ru:'О выставке', en:'About', fr:'À propos', uz:'Ko‘rgazma haqida'},
      'nav.program': {ru:'Программа', en:'Program', fr:'Programme', uz:'Dastur'},
      'nav.artists': {ru:'Художники', en:'Artists', fr:'Artistes', uz:'Rassomlar'},
      'nav.venue': {ru:'Площадка', en:'Venue', fr:'Lieu', uz:'Manzil'},
      'nav.partners': {ru:'Партнёры', en:'Partners', fr:'Partenaires', uz:'Hamkorlar'},
      'nav.rsvp': {ru:'Регистрация', en:'Register', fr:'Inscription', uz:"Ro‘yxatdan o‘tish"},
      'nav.faq': {ru:'Вопросы', en:'FAQ', fr:'FAQ', uz:'Savollar'},

      // Hero
      'hero.title': {
        en:"Between the human and the algorithm, art happens",
        fr:"Entre l’humain et l’algorithme naît l’art",
        uz:"Inson va algoritm o‘rtasida sanʼat yuzaga keladi",
        ru:""
      },
      'hero.date': {
        ru:'Декабрь 2025 — Март 2026 • Ташкент',
        en:'December 2025 — March 2026 • Tashkent',
        fr:'Décembre 2025 — Mars 2026 • Tachkent',
        uz:"2025‑yil dekabr — 2026‑yil mart • Toshkent"
      },
      'hero.cta.invite': {ru:'Получить приглашение', en:'Get Invite', fr:"Recevoir une invitation", uz:'Taklifnoma olish'},
      'hero.cta.program': {ru:'Смотреть программу', en:'Explore Program', fr:'Voir le programme', uz:'Dasturni ko‘rish'},
      'hero.b1': {ru:'Кураторские кластеры: естественный, искусственный, коллективный интеллект', en:'Curatorial clusters: Natural, Artificial, Collective Intelligence', fr:'Pôles curatoriaux : naturel, artificiel, collectif', uz:'Kuratorlik klasterlari: tabiiy, sunʼiy, kollektiv intellekt'},
      'hero.b2': {ru:'Интерактивные инсталляции, мастер‑классы, дискуссии', en:'Interactive installations, workshops, talks', fr:'Installations interactives, ateliers, discussions', uz:'Interaktiv installyatsiyalar, mahorat darslari, suhbatlar'},
      'hero.b3': {ru:'Партнёрства с музеями и тех‑индустрией', en:'Partnerships with museums & tech industry', fr:'Partenariats avec musées et tech', uz:'Muzeylar va tex‑industriya hamkorligi'},
      'hero.visual.caption': {
        ru:'Визуализация: абстрактные поля — макет',
        en:'Visualization: abstract fields — mockup',
        fr:'Visualisation : champs abstraits — maquette',
        uz:'Vizualizatsiya: abstrakt maydonlar — maket'
      },

      // About
      'about.title': {ru:'О выставке', en:'About the Exhibition', fr:"À propos de l’exposition", uz:'Ko‘rgazma haqida'},
      'about.p1': {
        ru:"«Игра в L'AIнгу» — это игра смыслов, нейронов и языков. Нас интересует не ИИ как технология, а ИИ как зеркало: что происходит, когда машина начинает видеть, слышать и помнить? Где мы находимся сейчас и где окажемся завтра? Уйдут ли живые креаторы в доставку или каждый из нас станет на вес золота? А может быть, мы вместе с ИИ создадим новую культуру и забудем, что такое константность в повествовании?",
        en:"“The L’AInga Play” explores meanings, neurons and languages. We look at AI not just as tech, but as a mirror: what happens when a machine starts to see, hear and remember? Where are we now and where will we be tomorrow?",
        fr:"« The L’AInga Play » explore les sens, les neurones et les langues. Nous regardons l’IA non pas seulement comme une technologie, mais comme un miroir : que se passe‑t‑il quand la machine commence à voir, entendre et se souvenir ?",
        uz:"“L’AInga o‘yini” ma’no, neyron va tillarni o‘rganadi. Biz AI‑ni shunchaki texnologiya emas, balki ko‘zgudek ko‘ramiz: mashina ko‘ra, eshita va eslab qola boshlaganda nima bo‘ladi?"
      },
      'about.p2': {
        ru:'Мы открыты к работам со всей Центральной Азии и мира. Если ты диджитал‑художник, медиа‑креатор, AI‑исследователь, режиссёр, дизайнер или писатель — присылай проект, где ИИ — не просто инструмент, а участник размышления.',
        en:'Open to works from Central Asia and beyond. Digital artists, media creators, AI researchers, directors, designers and writers — submit projects where AI is not just a tool but a thinking partner.',
        fr:'Ouvert aux œuvres d’Asie centrale et d’ailleurs. Artistes numériques, créateurs média, chercheurs IA, réalisateur·rice·s, designers et écrivain·e·s — envoyez des projets où l’IA est plus qu’un outil : un partenaire de pensée.',
        uz:'Markaziy Osiyo va butun dunyodan ishlarni qabul qilamiz. Raqamli rassomlar, media yaratuvchilar, AI tadqiqotchilari, rejissyorlar, dizayнерlar, yozuvchilar — AI vosita emas, hamfikr bo‘lgan loyihalarni yuboring.'
      },

      // Venue
      'venue.title': {ru:'Площадка', en:'Venue & Dates', fr:'Lieu & Dates', uz:'Manzil va sanalar'},
      'venue.text': {
        ru:'Ташкент • Декабрь 2025 — Март 2026. Точная сетка дат будет объявлена дополнительно.',
        en:'Tashkent • December 2025 — March 2026. Detailed schedule to be announced.',
        fr:'Tachkent • Décembre 2025 — Mars 2026. Calendrier détaillé à venir.',
        uz:'Toshkent • 2025‑yil dekabr — 2026‑yil mart. Batafsil jadval eʼlon qilinadi.'
      },
      'venue.hours': {ru:'Часы работы', en:'Opening hours', fr:'Horaires', uz:'Ish vaqti'},
      'venue.tueSun': {ru:'Вт–Вс: 10:00–20:00', en:'Tue–Sun: 10:00–20:00', fr:'Mar–Dim : 10:00–20:00', uz:'Se–Yak: 10:00–20:00'},
      'venue.mon': {ru:'Пн: выходной', en:'Mon: closed', fr:'Lun : fermé', uz:'Du: yopiq'},

      // Open Call
      'oc.title': {ru:'Открытый набор', en:'Open Call', fr:'Appel à projets', uz:'Ochiq tanlov'},
      'oc.subtitle': {ru:'Дедлайн: 1 декабря 2025', en:'Deadline: 1 December 2025', fr:'Date limite : 1 décembre 2025', uz:'Muddat: 2025‑yil 1‑dekabr'},
      'oc.formats.title': {ru:'Форматы', en:'Formats', fr:'Formats', uz:'Formatlar'},
      'oc.format.installation': {ru:'интерактивная инсталляция', en:'interactive installation', fr:'installation interactive', uz:'interaktiv installyatsiya'},
      'oc.format.video': {ru:'видеоработа', en:'video work', fr:'œuvre vidéo', uz:'video ish'},
      'oc.format.textviz': {ru:'текст + генеративная визуализация', en:'text + generative visualization', fr:'texte + visualisation générative', uz:'matn + generativ vizualizatsiya'},
      'oc.format.sound': {ru:'звуковой опыт', en:'sound experience', fr:'expérience sonore', uz:'ovozli tajriba'},
      'oc.format.datachoreo': {ru:'хореография данных', en:'data choreography', fr:'chorégraphie de données', uz:'ma’lumotlar xoreografiyasi'},
      'oc.format.new': {ru:'или нечто новое', en:'or something new', fr:'ou quelque chose de nouveau', uz:'yoki yangicha narsa'},
      'oc.what.title': {ru:'Что мы ищем', en:'What we look for', fr:'Ce que nous recherchons', uz:'Nimani izlaymiz'},
      'oc.what.item1': {ru:'философские и этические размышления', en:'philosophical and ethical reflections', fr:'réflexions philosophiques et éthiques', uz:'falsafiy va axloqiy mulohazalar'},
      'oc.what.item2': {ru:'сюжеты об идентичности', en:'stories about identity', fr:'récits sur l’identité', uz:'shaxsiyat haqidagi hikoyalar'},
      'oc.what.item3': {ru:'синергия/конфликт с машиной', en:'synergy/conflict with the machine', fr:'synergie/conflit avec la machine', uz:'mashina bilan sinergiya/konflikt'},
      'oc.what.item4': {ru:'сны ИИ', en:'AI dreams', fr:'rêves d’IA', uz:'AI orzulari'},
      'oc.what.item5': {ru:'работы, где алгоритм удивляет', en:'works where the algorithm surprises', fr:'œuvres où l’algorithme surprend', uz:'algoritm hayratlantiradigan ishlar'},
      'oc.note.special': {
        ru:'Мы особенно ждём женщин и поддержим сильные проекты.',
        en:'We especially encourage women to apply and will support strong projects.',
        fr:'Nous encourageons particulièrement les femmes à candidater et soutiendrons les projets forts.',
        uz:'Ayniqsa ayollarni ariza topshirishga chorlaymiz va kuchli loyihalarni qo‘llab‑quvvatlaymiz.'
      },
      'oc.form.full_name': {ru:'Имя и фамилия', en:'Full name', fr:'Nom et prénom', uz:'Ism va familiya'},
      'oc.form.full_name.ph': {ru:'Иван Иванов', en:'Your full name', fr:'Votre nom et prénom', uz:'Ism familiya'},
      'oc.form.country': {ru:'Страна', en:'Country', fr:'Pays', uz:'Mamlakat'},
      'oc.form.role': {ru:'Профессия', en:'Role / Profession', fr:'Profession', uz:'Kasb'},
      'oc.form.org': {ru:'Организация', en:'Organization', fr:'Organisation', uz:'Tashkilot'},
      'oc.form.email': {ru:'Email', en:'Email', fr:'Email', uz:'Email'},
      'oc.form.project_title': {ru:'Название проекта', en:'Project title', fr:'Titre du projet', uz:'Loyiha nomi'},
      'oc.form.desc': {ru:'Описание и роль ИИ', en:'Description and the role of AI', fr:'Description et rôle de l’IA', uz:'Tavsif va AI roli'},
      'oc.form.desc.ph': {ru:'Коротко о замысле', en:'Short concept', fr:'Concept bref', uz:'Qisqacha g‘oya'},
      'oc.form.pdf_link': {ru:'Ссылка на PDF (drive/link)', en:'Link to PDF (drive/link)', fr:'Lien vers le PDF (drive/lien)', uz:'PDF havolasi (drive/link)'},
      'oc.form.submit': {ru:'Получить номер регистрации', en:'Get registration number', fr:"Obtenir le numéro d’inscription", uz:'Ro‘yxat raqamini olish'},
      'oc.note.after': {
        ru:'После подтверждения мы свяжемся с вами по email. Дедлайн подачи — 1 декабря 2025 года.',
        en:'After verification we will contact you by email. Submission deadline — 1 December 2025.',
        fr:'Après vérification, nous vous contacterons par email. Date limite — 1 décembre 2025.',
        uz:'Tekshiruvdan so‘ng siz bilan email orqali bog‘ланamiz. Oxirgi muddat — 2025‑yil 1‑dekabr.'
      },

      // Program
      'program.title': {ru:'Программа', en:'Program', fr:'Programme', uz:'Dastur'},
      'program.opening': {ru:'Официальное открытие', en:'Opening Ceremony', fr:'Cérémonie d’ouverture', uz:'Ochilish marosimi'},
      'program.panel': {ru:'Панель: Искусство × ИИ', en:'Panel: Art × AI', fr:'Table ronde : Art × IA', uz:'Panel: Sanʼat × AI'},
      'program.workshops': {ru:'Мастер‑классы', en:'Workshops', fr:'Ateliers', uz:'Mahorat darslari'},
      'program.performance': {ru:'Перформанс', en:'Performance', fr:'Performance', uz:'Perfomans'},
      'program.kind.keynote': {ru:'церемония', en:'ceremony', fr:'cérémonie', uz:'marosim'},
      'program.kind.panel': {ru:'панель', en:'panel', fr:'table ronde', uz:'panel'},
      'program.kind.workshop': {ru:'мастер‑класс', en:'workshop', fr:'atelier', uz:'mahorat darsi'},
      'program.kind.performance': {ru:'перформанс', en:'performance', fr:'performance', uz:'perfomans'},

      // Artists
      'artists.title': {ru:'Художники', en:'Artists', fr:'Artistes', uz:'Rassomlar'},
      'artists.name': {ru:'Имя художника', en:'Artist Name', fr:'Nom de l’artiste', uz:'Rassom nomi'},
      'artists.blurb': {ru:'Краткое описание проекта на 1–2 строки.', en:'Short project blurb', fr:'Bref descriptif du projet', uz:'Loyiha haqida qisqa matn'},

      // Partners
      'partners.title': {ru:'Партнёры', en:'Partners & Supporters', fr:'Partenaires & soutiens', uz:'Hamkorlar va homiylar'},
      'partners.logo.museum': {ru:'Музей', en:'Museum', fr:'Musée', uz:'Muzey'},
      'partners.logo.tech': {ru:'Тех‑компания', en:'Tech Co.', fr:'Entreprise tech', uz:'Tex kompaniya'},
      'partners.logo.university': {ru:'Университет', en:'University', fr:'Université', uz:'Universitet'},
      'partners.logo.gallery': {ru:'Галерея', en:'Gallery', fr:'Galerie', uz:'Galereya'},
      'partners.logo.media': {ru:'Медиа', en:'Media', fr:'Média', uz:'OAV'},

      // RSVP
      'rsvp.title': {ru:'Регистрация', en:'Registration', fr:'Inscription', uz:'Ro‘yxatdan o‘tish'},
      'rsvp.subtitle': {
        ru:'Оставьте контакты — пришлём приглашение и программу.',
        en:'Leave your contacts — we’ll send an invite and the program.',
        fr:'Laissez vos coordonnées — nous enverrons une invitation et le programme.',
        uz:'Kontaktlaringizni qoldiring — taklifnoma va dastur yuboramiz.'
      },
      'form.name': {ru:'Имя', en:'Name', fr:'Nom', uz:'Ism'},
      'form.name.ph': {ru:'Ваше имя', en:'Your name', fr:'Votre nom', uz:'Ismingiz'},
      'form.org2': {ru:'Организация', en:'Organization', fr:'Organisation', uz:'Tashkilot'},
      'form.org2.ph': {ru:'Компания / медиа / музей', en:'Company / media / museum', fr:'Entreprise / média / musée', uz:'Kompaniya / OAV / muzey'},
      'form.phone': {ru:'Телефон', en:'Phone', fr:'Téléphone', uz:'Telefon'},
      'form.email': {ru:'Email', en:'Email', fr:'Email', uz:'Email'},
      'form.msg': {ru:'Комментарий', en:'Comment', fr:'Commentaire', uz:'Izoh'},
      'form.msg.ph': {ru:'Кто вы и что интересно?', en:'Who you are and what you’re interested in', fr:'Qui vous êtes et ce qui vous intéresse', uz:'O‘zingiz haqida va qiziqishlaringiz'},
      'form.send': {ru:'Отправить', en:'Send', fr:'Envoyer', uz:'Yuborish'},
      'form.orEmail': {ru:'или напишите на hello@example.com', en:'or email hello@example.com', fr:'ou écrivez à hello@example.com', uz:'yoki hello@example.com manziliga yozing'},
      'rsvp.success': {ru:'Заявка отправлена', en:'Submitted', fr:'Envoyé', uz:'Yuborildi'},
      'rsvp.error': {ru:'Не удалось отправить, попробуйте ещё раз', en:'Failed to submit, try again', fr:'Échec de l’envoi, réessayez', uz:'Yuborib bo‘lmadi, yana urinib ko‘ring'},

      // FAQ
      'faq.title': {ru:'Частые вопросы', en:'FAQ', fr:'FAQ', uz:'Ko‘p so‘raladigan savollar'},
      'faq.subtitle': {ru:'Коротко о главном', en:'Short answers to the essentials', fr:'L’essentiel en bref', uz:'Muhimi qisqacha'},
      'faq.q1': {ru:'Можно ли прийти без регистрации?', en:'Can I come without registration?', fr:'Puis‑je venir sans inscription ?', uz:'Ro‘yxatdan o‘tmasdan kelish mumkinmi?'},
      'faq.a1': {ru:'Да, но количество гостей ограничено — регистрация гарантирует вход.', en:'Yes, but capacity is limited—registration guarantees entry.', fr:'Oui, mais la capacité est limitée — l’inscription garantit l’entrée.', uz:'Ha, ammo joylar cheklangan — ro‘yxatdan o‘tish kirishni kafolatlaydi.'},
      'faq.q2': {ru:'Будет ли англоязычная навигация?', en:'Will there be English wayfinding?', fr:'La signalétique sera‑t‑elle en anglais ?', uz:'Inglizcha navigatsiya bo‘ladimi?'},
      'faq.a2': {ru:'Да, вся навигация и материалы доступны на RU/EN/UZ/FR.', en:'Yes, all signage and materials are available in RU/EN/UZ/FR.', fr:'Oui, toute la signalétique et les supports seront en RU/EN/UZ/FR.', uz:'Ha, barcha materiallar RU/EN/UZ/FR tillarida bo‘ladi.'},
      'faq.q3': {ru:'Можно ли фотографировать?', en:'Is photography allowed?', fr:'La photographie est‑elle autorisée ?', uz:'Suratga olish mumkinmi?'},
      'faq.a3': {ru:'Да, кроме специально помеченных зон.', en:'Yes, except in marked areas.', fr:'Oui, sauf dans les zones signalées.', uz:'Ha, maxsus belgilangan zonalardan tashqari.'},

      // Contacts & misc
      'contacts.title': {ru:'Контакты', en:'Contacts', fr:'Contacts', uz:'Kontaktlar'},
      'contacts.office': {ru:'Кураторский офис', en:'Curatorial Office', fr:'Bureau de curation', uz:'Kuratorlik ofisi'},
      'rights': {ru:'Все права защищены', en:'All rights reserved', fr:'Tous droits réservés', uz:'Barcha huquqlar himoyalangan'},

      // Map placeholder
      'map.embed': {ru:'Встроенная карта', en:'Embed Map', fr:'Carte intégrée', uz:'Xaritani joylashtirish'},
      'map.note': {ru:'(Google Maps / Yandex Maps iFrame)', en:'(Google Maps / Yandex Maps iFrame)', fr:'(Google Maps / Yandex Maps iFrame)', uz:'(Google Maps / Yandex Maps iFrame)'}
    };
