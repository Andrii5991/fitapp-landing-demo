export type Locale = 'en' | 'es' | 'pt-br' | 'de' | 'fr';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'es', 'pt-br', 'de', 'fr'];

type FaqItem = {
  question: string;
  answer: string;
  answerHtml?: string;
};

type LocaleCopy = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    product: string;
    progress: string;
    platforms: string;
    getApp: string;
    getAppDialogTitle: string;
    getAppDialogSub: string;
    getAppStoreLabel: string;
    getAppPlayLabel: string;
    getAppQrHint: string;
    getAppCloseLabel: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
    chips: string[];
    figcaption: string;
    weeklyVolume: string;
    consistency: string;
    imageAlt: string;
  };
  workflow: {
    kicker: string;
    title: string;
    sub: string;
    navPrev: string;
    navNext: string;
    slides: Array<{
      tag: string;
      title: string;
      body: string;
    }>;
  };
  features: {
    title: string;
    sub: string;
    blocks: Array<{
      title: string;
      items: string[];
      imageAlt: string;
    }>;
  };
  faq: {
    title: string;
    sub: string;
    updated: string;
    items: FaqItem[];
  };
  platforms: {
    title: string;
    sub: string;
    cards: Array<{ title: string; description: string }>;
  };
  cta: {
    title: string;
    sub: string;
    button: string;
    imageAlt: string;
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    legal: string;
    features: string;
    platforms: string;
    changelog: string;
    about: string;
    careers: string;
    contact: string;
    privacy: string;
    terms: string;
    legalLine: string;
  };
};

export const copyByLocale: Record<Locale, LocaleCopy> = {
  en: {
    meta: {
      title: 'PushLab — Train anything. Track everything.',
      description:
        'Train anything. Track everything. Log yoga, Pilates, stretching, strength, or cardio—see progress and results in one place.',
    },
    nav: {
      product: 'Product',
      progress: 'Progress',
      platforms: 'Platforms',
      getApp: 'Get the app',
      getAppDialogTitle: 'Get PushLab',
      getAppDialogSub: 'Store links go live at release. For now, use the placeholders below.',
      getAppStoreLabel: 'App Store',
      getAppPlayLabel: 'Google Play',
      getAppQrHint: 'Scan to download (QR updates when the app is live).',
      getAppCloseLabel: 'Close',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageLabel: 'Language',
    },
    hero: {
      eyebrow: 'Any training style',
      line1: 'Train anything.',
      line2: 'Track everything.',
      sub: 'You can log every exercise you want—yoga, Pilates, stretching, strength training, cardio. Track activity, improve your body, and see real results.',
      ctaPrimary: 'Get PushLab',
      ctaSecondary: 'Explore system',
      trust: 'Trusted by 40k+ strength athletes',
      chips: ['Offline logging', 'Live PR detection', 'Programs + templates'],
      figcaption: 'One app for every way you like to move.',
      weeklyVolume: 'Weekly volume',
      consistency: 'Consistency score',
      imageAlt: 'Layered PushLab workout screens arranged in a dynamic composition.',
    },
    workflow: {
      kicker: 'How it works',
      title: 'Train, log, repeat—with intent',
      sub: 'The loop strong weeks run on: show up, capture the session, let history choose the next load.',
      navPrev: 'Previous step',
      navNext: 'Next step',
      slides: [
        {
          tag: 'Train',
          title: 'Sessions that flex with your style',
          body: 'Programs, templates, or a blank slate—structure and timers keep you moving, not hunting menus.',
        },
        {
          tag: 'Log',
          title: 'Sets captured without breaking focus',
          body: 'Load, reps, and rest in a tap or two. Offline in the gym, synced the moment you reconnect.',
        },
        {
          tag: 'Repeat',
          title: 'Progress answers what is next',
          body: 'Volume, PRs, and consistency cues stack week over week so the next plan almost writes itself.',
        },
      ],
    },
    features: {
      title: 'Designed around your workout goals',
      sub: 'Yoga, Pilates, stretching, strength, cardio—track your activity, improve your body, and see results with real app screens.',
      blocks: [
        {
          title: 'Note every set in seconds',
          items: [
            'Log exercises, reps, weight, and rest without slowing your session',
            'Use reusable templates to start workouts faster',
            'Keep your history structured so every next session is easier',
            'Train with focus while PushLab captures the details',
          ],
          imageAlt: 'PushLab workout logging screen.',
        },
        {
          title: 'See progress, not guesses',
          items: [
            'Track trends across weeks and months',
            'Compare sessions and spot your personal bests quickly',
            'Use clean history to evaluate what is working',
            'Measure improvements with real data over time',
          ],
          imageAlt: 'PushLab progress tracking screen.',
        },
        {
          title: 'Set goals and plan activity',
          items: [
            'Define clear milestones for strength and consistency',
            'Plan your training week before you enter the gym',
            'Track goal completion and adjust your next sessions',
            'Build momentum with measurable, repeatable progress',
          ],
          imageAlt: 'PushLab goal and activity planning screen.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      sub: 'Direct answers to common questions about PushLab and progress tracking.',
      updated: 'Last updated',
      items: [
        {
          question: 'What is PushLab?',
          answer:
            'PushLab is a workout tracking app that helps you log training sessions, organize programs, and review progress over time across strength, cardio, yoga, stretching, and Pilates.',
        },
        {
          question: 'Which workout types can I track in PushLab?',
          answer:
            'You can track strength training, cardio, yoga, stretching, and Pilates. Each session captures exercises, sets, reps, load, and notes so you can compare performance week to week.',
        },
        {
          question: 'How does PushLab measure progress?',
          answer:
            'PushLab shows weekly volume, consistency, session history, and personal best trends. These metrics help you evaluate whether your sessions become more consistent and effective over time.',
        },
        {
          question: 'Can I log workouts without internet?',
          answer:
            'Yes. PushLab supports offline logging so you can record training in the gym or studio and sync updates when your device reconnects.',
        },
        {
          question: 'What is a good weekly activity target?',
          answer:
            'A practical baseline is at least 150 minutes of moderate-intensity activity per week, based on World Health Organization guidance.',
          answerHtml:
            'A practical baseline is at least 150 minutes of moderate-intensity activity per week, based on <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noopener noreferrer">World Health Organization guidance</a>.',
        },
      ],
    },
    platforms: {
      title: 'Your routine, every screen',
      sub: 'Phone in your pocket, watch on your wrist, planning on the big screen.',
      cards: [
        {
          title: 'iOS & Android',
          description: 'Full logging, offline-friendly sessions, and sync when you are back online.',
        },
        {
          title: 'Apple Watch & Wear OS',
          description: 'Timers and set entry from your wrist—leave the phone in the locker.',
        },
        {
          title: 'Web',
          description: 'Review programs, study trends, and plan ahead on desktop.',
        },
      ],
    },
    cta: {
      title: 'Ready to transform your training?',
      sub: 'Yoga to cardio—track your activity, improve your body, and see the result. Start logging and watch progress add up.',
      button: 'Get PushLab',
      imageAlt: 'PushLab app screenshot for call to action.',
    },
    footer: {
      tagline: 'Made for athletes who care about the numbers that matter.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      features: 'Features',
      platforms: 'Platforms',
      changelog: 'Changelog',
      about: 'About',
      careers: 'Careers',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      legalLine: 'Replace with your legal entity.',
    },
  },
  es: {
    meta: {
      title: 'PushLab — Entrena cualquier cosa. Registra todo.',
      description:
        'Entrena cualquier cosa. Registra todo. Guarda yoga, pilates, estiramientos, fuerza o cardio y visualiza tu progreso en un solo lugar.',
    },
    nav: {
      product: 'Producto',
      progress: 'Progreso',
      platforms: 'Plataformas',
      getApp: 'Obtener la app',
      getAppDialogTitle: 'Obtener PushLab',
      getAppDialogSub: 'Los enlaces de las tiendas estarán disponibles al lanzamiento. Por ahora, usa los enlaces de ejemplo.',
      getAppStoreLabel: 'App Store',
      getAppPlayLabel: 'Google Play',
      getAppQrHint: 'Escanea para descargar (el QR se actualizará al lanzar).',
      getAppCloseLabel: 'Cerrar',
      openMenu: 'Abrir menu',
      closeMenu: 'Cerrar menu',
      languageLabel: 'Idioma',
    },
    hero: {
      eyebrow: 'Cualquier estilo de entrenamiento',
      line1: 'Entrena cualquier cosa.',
      line2: 'Registra todo.',
      sub: 'Puedes registrar cada ejercicio: yoga, pilates, estiramientos, fuerza y cardio. Registra tu actividad, mejora tu cuerpo y ve resultados reales.',
      ctaPrimary: 'Descargar PushLab',
      ctaSecondary: 'Ver sistema',
      trust: 'Con la confianza de mas de 40k atletas de fuerza',
      chips: ['Registro sin conexion', 'Deteccion de PR en vivo', 'Programas + plantillas'],
      figcaption: 'Una app para cada forma en que te gusta moverte.',
      weeklyVolume: 'Volumen semanal',
      consistency: 'Puntuacion de constancia',
      imageAlt: 'Pantallas de entrenamiento de PushLab en una composicion dinamica.',
    },
    workflow: {
      kicker: 'Como funciona',
      title: 'Entrena, registra, repite—con intencion',
      sub: 'El circuito de cada semana fuerte: llegar a la sesion, guardar el trabajo y dejar que los datos elijan la siguiente carga.',
      navPrev: 'Paso anterior',
      navNext: 'Paso siguiente',
      slides: [
        {
          tag: 'Entrena',
          title: 'Sesiones que se adaptan a tu estilo',
          body: 'Programas, plantillas o lienzo en blanco: estructura y temporizadores te mantienen en movimiento.',
        },
        {
          tag: 'Registra',
          title: 'Series sin perder el foco',
          body: 'Carga, repeticiones y descanso en uno o dos toques. Sin conexion en el gym y sincronizado al volver.',
        },
        {
          tag: 'Repite',
          title: 'El progreso dice que toca despues',
          body: 'Volumen, PRs y constancia semana a semana para que el siguiente plan casi se escriba solo.',
        },
      ],
    },
    features: {
      title: 'Disenada para tus objetivos de entrenamiento',
      sub: 'Yoga, pilates, estiramientos, fuerza y cardio: registra tu actividad, mejora tu cuerpo y ve resultados con pantallas reales.',
      blocks: [
        {
          title: 'Registra cada serie en segundos',
          items: [
            'Guarda ejercicios, repeticiones, peso y descanso sin frenar tu sesion',
            'Usa plantillas reutilizables para empezar mas rapido',
            'Mantiene tu historial ordenado para mejorar cada sesion',
            'Entrena con foco mientras PushLab captura los detalles',
          ],
          imageAlt: 'Pantalla de registro de entrenamiento de PushLab.',
        },
        {
          title: 'Ve progreso, no suposiciones',
          items: [
            'Sigue tendencias por semanas y meses',
            'Compara sesiones y detecta tus mejores marcas rapidamente',
            'Usa el historial para evaluar lo que funciona',
            'Mide mejoras con datos reales a lo largo del tiempo',
          ],
          imageAlt: 'Pantalla de seguimiento de progreso de PushLab.',
        },
        {
          title: 'Define objetivos y planifica actividad',
          items: [
            'Define metas claras de fuerza y constancia',
            'Planifica tu semana antes de entrar al gimnasio',
            'Sigue el avance de objetivos y ajusta tus sesiones',
            'Construye impulso con progreso medible y repetible',
          ],
          imageAlt: 'Pantalla de objetivos y planificacion de PushLab.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      sub: 'Respuestas directas a las preguntas mas comunes sobre PushLab y el seguimiento de progreso.',
      updated: 'Ultima actualizacion',
      items: [
        {
          question: 'Que es PushLab?',
          answer:
            'PushLab es una app para registrar entrenamientos y analizar progreso en fuerza, cardio, yoga, estiramientos y pilates.',
        },
        {
          question: 'Que tipos de entrenamiento puedo registrar?',
          answer:
            'Puedes registrar fuerza, cardio, yoga, estiramientos y pilates con ejercicios, series, repeticiones, carga y notas.',
        },
        {
          question: 'Como mide PushLab el progreso?',
          answer:
            'PushLab muestra volumen semanal, constancia, historial de sesiones y tendencias de marcas personales para evaluar tu avance real.',
        },
        {
          question: 'Puedo registrar entrenamientos sin internet?',
          answer:
            'Si. PushLab permite registro sin conexion y sincroniza tus datos cuando recuperas internet.',
        },
        {
          question: 'Cual es una meta semanal recomendada de actividad?',
          answer:
            'Un objetivo practico es al menos 150 minutos de actividad moderada por semana, segun la Organizacion Mundial de la Salud.',
          answerHtml:
            'Un objetivo practico es al menos 150 minutos de actividad moderada por semana, segun la <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noopener noreferrer">Organizacion Mundial de la Salud</a>.',
        },
      ],
    },
    platforms: {
      title: 'Tu rutina en cada pantalla',
      sub: 'Movil en el bolsillo, reloj en la muneca y planificacion en pantalla grande.',
      cards: [
        {
          title: 'iOS y Android',
          description: 'Registro completo, sesiones sin conexion y sincronizacion cuando vuelves a estar online.',
        },
        {
          title: 'Apple Watch y Wear OS',
          description: 'Temporizadores y carga de series desde la muneca.',
        },
        {
          title: 'Web',
          description: 'Revisa programas, analiza tendencias y planifica en escritorio.',
        },
      ],
    },
    cta: {
      title: 'Listo para transformar tu entrenamiento?',
      sub: 'De yoga a cardio: registra actividad, mejora tu cuerpo y ve resultados. Empieza hoy y convierte progreso en habito.',
      button: 'Obtener PushLab',
      imageAlt: 'Captura de PushLab para llamada a la accion.',
    },
    footer: {
      tagline: 'Hecha para atletas que valoran los datos que importan.',
      product: 'Producto',
      company: 'Empresa',
      legal: 'Legal',
      features: 'Funciones',
      platforms: 'Plataformas',
      changelog: 'Novedades',
      about: 'Acerca de',
      careers: 'Carreras',
      contact: 'Contacto',
      privacy: 'Privacidad',
      terms: 'Terminos',
      legalLine: 'Reemplaza por tu entidad legal.',
    },
  },
  'pt-br': {
    meta: {
      title: 'PushLab — Treine qualquer coisa. Registre tudo.',
      description:
        'Treine qualquer coisa. Registre tudo. Salve yoga, pilates, alongamento, forca ou cardio e acompanhe seu progresso em um so lugar.',
    },
    nav: {
      product: 'Produto',
      progress: 'Progresso',
      platforms: 'Plataformas',
      getApp: 'Baixar app',
      getAppDialogTitle: 'Baixar PushLab',
      getAppDialogSub: 'Os links das lojas ficam ativos no lancamento. Por enquanto, use os links de exemplo.',
      getAppStoreLabel: 'App Store',
      getAppPlayLabel: 'Google Play',
      getAppQrHint: 'Escaneie para baixar (o QR sera atualizado no lancamento).',
      getAppCloseLabel: 'Fechar',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      languageLabel: 'Idioma',
    },
    hero: {
      eyebrow: 'Qualquer estilo de treino',
      line1: 'Treine qualquer coisa.',
      line2: 'Registre tudo.',
      sub: 'Registre todos os exercicios: yoga, pilates, alongamento, forca e cardio. Acompanhe sua atividade, melhore seu corpo e veja resultados reais.',
      ctaPrimary: 'Baixar PushLab',
      ctaSecondary: 'Ver sistema',
      trust: 'Confiado por mais de 40k atletas de forca',
      chips: ['Registro offline', 'Deteccao de PR ao vivo', 'Programas + modelos'],
      figcaption: 'Um app para cada forma de movimento.',
      weeklyVolume: 'Volume semanal',
      consistency: 'Pontuacao de consistencia',
      imageAlt: 'Telas do PushLab em composicao dinamica.',
    },
    workflow: {
      kicker: 'Como funciona',
      title: 'Treine, registre, repita—de proposito',
      sub: 'O circuito de toda semana forte: entrar na sessao, registrar o trabalho e deixar os dados escolherem a proxima carga.',
      navPrev: 'Etapa anterior',
      navNext: 'Proxima etapa',
      slides: [
        {
          tag: 'Treine',
          title: 'Sessoes que acompanham seu estilo',
          body: 'Programas, modelos ou tela em branco: estrutura e timers mantem voce no fluxo, nao nos menus.',
        },
        {
          tag: 'Registre',
          title: 'Series sem perder o foco',
          body: 'Carga, repeticoes e descanso em um ou dois toques. Offline na academia e sincronizado ao reconectar.',
        },
        {
          tag: 'Repita',
          title: 'O progresso responde o que vem depois',
          body: 'Volume, PRs e consistencia semana a semana para o proximo plano quase se montar sozinho.',
        },
      ],
    },
    features: {
      title: 'Feito para seus objetivos de treino',
      sub: 'Yoga, pilates, alongamento, forca e cardio: registre sua atividade, evolua e veja resultados com telas reais do app.',
      blocks: [
        {
          title: 'Registre cada serie em segundos',
          items: [
            'Registre exercicios, repeticoes, carga e descanso sem atrasar seu treino',
            'Use modelos reutilizaveis para comecar mais rapido',
            'Mantenha historico organizado para evoluir em cada sessao',
            'Treine com foco enquanto o PushLab salva os detalhes',
          ],
          imageAlt: 'Tela de registro de treino no PushLab.',
        },
        {
          title: 'Veja progresso, nao suposicoes',
          items: [
            'Acompanhe tendencias por semanas e meses',
            'Compare sessoes e encontre records pessoais rapido',
            'Use historico limpo para entender o que funciona',
            'Meça evolucao com dados reais ao longo do tempo',
          ],
          imageAlt: 'Tela de progresso do PushLab.',
        },
        {
          title: 'Defina metas e planeje atividade',
          items: [
            'Defina marcos claros de forca e consistencia',
            'Planeje sua semana antes de entrar na academia',
            'Acompanhe metas e ajuste as proximas sessoes',
            'Construa consistencia com progresso mensuravel',
          ],
          imageAlt: 'Tela de metas e planejamento do PushLab.',
        },
      ],
    },
    faq: {
      title: 'Perguntas frequentes',
      sub: 'Respostas diretas para duvidas comuns sobre PushLab e acompanhamento de progresso.',
      updated: 'Ultima atualizacao',
      items: [
        {
          question: 'O que e o PushLab?',
          answer:
            'PushLab e um app para registrar treinos e acompanhar progresso em forca, cardio, yoga, alongamento e pilates.',
        },
        {
          question: 'Quais tipos de treino posso registrar?',
          answer:
            'Voce pode registrar forca, cardio, yoga, alongamento e pilates com exercicios, series, repeticoes, carga e notas.',
        },
        {
          question: 'Como o PushLab mede progresso?',
          answer:
            'PushLab mostra volume semanal, consistencia, historico de sessoes e tendencias de records pessoais para avaliar evolucao real.',
        },
        {
          question: 'Posso registrar treino sem internet?',
          answer:
            'Sim. O PushLab suporta registro offline e sincroniza seus dados quando a conexao volta.',
        },
        {
          question: 'Qual meta semanal de atividade e recomendada?',
          answer:
            'Um alvo pratico e pelo menos 150 minutos de atividade moderada por semana, segundo a Organizacao Mundial da Saude.',
          answerHtml:
            'Um alvo pratico e pelo menos 150 minutos de atividade moderada por semana, segundo a <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noopener noreferrer">Organizacao Mundial da Saude</a>.',
        },
      ],
    },
    platforms: {
      title: 'Sua rotina em todas as telas',
      sub: 'Celular no bolso, relogio no pulso e planejamento na tela grande.',
      cards: [
        {
          title: 'iOS e Android',
          description: 'Registro completo, sessoes offline e sincronizacao quando voce volta a ficar online.',
        },
        {
          title: 'Apple Watch e Wear OS',
          description: 'Temporizadores e registro de series direto no pulso.',
        },
        {
          title: 'Web',
          description: 'Revise programas, analise tendencias e planeje no desktop.',
        },
      ],
    },
    cta: {
      title: 'Pronto para transformar seu treino?',
      sub: 'De yoga a cardio: registre atividade, evolua e veja resultados. Comece hoje e transforme progresso em habito.',
      button: 'Baixar PushLab',
      imageAlt: 'Captura do PushLab para chamada de acao.',
    },
    footer: {
      tagline: 'Feito para atletas que valorizam os numeros que importam.',
      product: 'Produto',
      company: 'Empresa',
      legal: 'Legal',
      features: 'Recursos',
      platforms: 'Plataformas',
      changelog: 'Novidades',
      about: 'Sobre',
      careers: 'Carreiras',
      contact: 'Contato',
      privacy: 'Privacidade',
      terms: 'Termos',
      legalLine: 'Substitua pela sua entidade legal.',
    },
  },
  de: {
    meta: {
      title: 'PushLab — Trainiere alles. Erfasse alles.',
      description:
        'Trainiere alles. Erfasse alles. Protokolliere Yoga, Pilates, Mobility, Kraft oder Cardio und verfolge deinen Fortschritt an einem Ort.',
    },
    nav: {
      product: 'Produkt',
      progress: 'Fortschritt',
      platforms: 'Plattformen',
      getApp: 'App holen',
      getAppDialogTitle: 'PushLab holen',
      getAppDialogSub: 'Store-Links werden zum Release freigeschaltet. Bis dahin nutze die Platzhalter-Links.',
      getAppStoreLabel: 'App Store',
      getAppPlayLabel: 'Google Play',
      getAppQrHint: 'Zum Download scannen (QR wird zum Release aktualisiert).',
      getAppCloseLabel: 'Schliessen',
      openMenu: 'Menu oeffnen',
      closeMenu: 'Menu schliessen',
      languageLabel: 'Sprache',
    },
    hero: {
      eyebrow: 'Jeder Trainingsstil',
      line1: 'Trainiere alles.',
      line2: 'Erfasse alles.',
      sub: 'Protokolliere jedes Training: Yoga, Pilates, Mobility, Kraft und Cardio. Erfasse deine Aktivitaet, verbessere deinen Koerper und sieh echte Ergebnisse.',
      ctaPrimary: 'PushLab holen',
      ctaSecondary: 'System ansehen',
      trust: 'Vertrauen von ueber 40k Kraftsportlern',
      chips: ['Offline Protokoll', 'Live PR Erkennung', 'Programme + Vorlagen'],
      figcaption: 'Eine App fuer jede Art, wie du dich bewegst.',
      weeklyVolume: 'Wochenvolumen',
      consistency: 'Konstanzwert',
      imageAlt: 'PushLab Workout Screens in dynamischer Komposition.',
    },
    workflow: {
      kicker: 'So funktioniert es',
      title: 'Trainieren, erfassen, wiederholen—mit Absicht',
      sub: 'Die Schleife fuer starke Wochen: Session starten, Arbeit speichern, Verlauf waehlt die naechste Last.',
      navPrev: 'Vorheriger Schritt',
      navNext: 'Naechster Schritt',
      slides: [
        {
          tag: 'Trainieren',
          title: 'Sessions passend zu deinem Stil',
          body: 'Programme, Vorlagen oder frei: Struktur und Timer halten dich in Bewegung statt in Menues.',
        },
        {
          tag: 'Erfassen',
          title: 'Saetze ohne Fokusverlust',
          body: 'Gewicht, Wiederholungen und Pause in wenigen Taps. Offline im Gym, Sync sobald du wieder online bist.',
        },
        {
          tag: 'Wiederholen',
          title: 'Fortschritt zeigt was als Naechstes zaehlt',
          body: 'Volumen, PRs und Konstanz Woche fuer Woche—der naechste Plan schreibt sich fast von selbst.',
        },
      ],
    },
    features: {
      title: 'Entwickelt fuer deine Trainingsziele',
      sub: 'Yoga, Pilates, Mobility, Kraft und Cardio: erfasse Aktivitaet, verbessere dich und sieh Resultate mit echten App Screens.',
      blocks: [
        {
          title: 'Jeden Satz in Sekunden erfassen',
          items: [
            'Erfasse Uebungen, Wiederholungen, Gewicht und Pause ohne Unterbrechung',
            'Nutze Vorlagen fuer schnelleren Start',
            'Halte deinen Verlauf strukturiert fuer bessere naechste Sessions',
            'Trainiere fokussiert waehrend PushLab die Details speichert',
          ],
          imageAlt: 'PushLab Trainingsprotokoll Bildschirm.',
        },
        {
          title: 'Sieh Fortschritt statt Vermutungen',
          items: [
            'Verfolge Trends ueber Wochen und Monate',
            'Vergleiche Sessions und finde Bestleistungen schnell',
            'Nutze saubere Historie um wirksame Strategien zu erkennen',
            'Miss Verbesserungen mit echten Daten ueber Zeit',
          ],
          imageAlt: 'PushLab Fortschrittsbildschirm.',
        },
        {
          title: 'Setze Ziele und plane Aktivitaet',
          items: [
            'Definiere klare Meilensteine fuer Kraft und Konstanz',
            'Plane deine Trainingswoche vor dem Gym',
            'Verfolge Zielerreichung und passe naechste Sessions an',
            'Baue Momentum mit messbarem Fortschritt auf',
          ],
          imageAlt: 'PushLab Ziel und Planungsbildschirm.',
        },
      ],
    },
    faq: {
      title: 'Haeufige Fragen',
      sub: 'Direkte Antworten auf typische Fragen zu PushLab und Fortschrittsmessung.',
      updated: 'Zuletzt aktualisiert',
      items: [
        {
          question: 'Was ist PushLab?',
          answer:
            'PushLab ist eine Workout Tracking App fuer Kraft, Cardio, Yoga, Mobility und Pilates mit klaren Fortschrittsdaten.',
        },
        {
          question: 'Welche Trainingsarten kann ich erfassen?',
          answer:
            'Du kannst Kraft, Cardio, Yoga, Mobility und Pilates erfassen inklusive Uebungen, Saetze, Wiederholungen, Last und Notizen.',
        },
        {
          question: 'Wie misst PushLab Fortschritt?',
          answer:
            'PushLab zeigt Wochenvolumen, Konstanz, Session Verlauf und Trends bei Bestleistungen fuer eine klare Bewertung.',
        },
        {
          question: 'Kann ich ohne Internet protokollieren?',
          answer: 'Ja. PushLab unterstuetzt Offline Erfassung und synchronisiert spaeter automatisch.',
        },
        {
          question: 'Was ist ein gutes Wochenziel fuer Aktivitaet?',
          answer:
            'Ein praktischer Richtwert sind mindestens 150 Minuten moderate Aktivitaet pro Woche laut WHO.',
          answerHtml:
            'Ein praktischer Richtwert sind mindestens 150 Minuten moderate Aktivitaet pro Woche laut <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noopener noreferrer">WHO</a>.',
        },
      ],
    },
    platforms: {
      title: 'Deine Routine auf jedem Screen',
      sub: 'Smartphone in der Tasche, Uhr am Handgelenk und Planung am Desktop.',
      cards: [
        {
          title: 'iOS und Android',
          description: 'Volles Logging, offline faehige Sessions und Sync sobald du wieder online bist.',
        },
        {
          title: 'Apple Watch und Wear OS',
          description: 'Timer und Satz Eingabe direkt am Handgelenk.',
        },
        {
          title: 'Web',
          description: 'Programme pruefen, Trends analysieren und am Desktop planen.',
        },
      ],
    },
    cta: {
      title: 'Bereit dein Training zu transformieren?',
      sub: 'Von Yoga bis Cardio: Aktivitaet erfassen, Fortschritt sehen und konstant bleiben.',
      button: 'PushLab holen',
      imageAlt: 'PushLab Screenshot fuer den Call to Action.',
    },
    footer: {
      tagline: 'Fuer Athleten die Zahlen nutzen die wirklich zaehlen.',
      product: 'Produkt',
      company: 'Unternehmen',
      legal: 'Rechtliches',
      features: 'Funktionen',
      platforms: 'Plattformen',
      changelog: 'Changelog',
      about: 'Ueber uns',
      careers: 'Karriere',
      contact: 'Kontakt',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      legalLine: 'Bitte durch deine rechtliche Einheit ersetzen.',
    },
  },
  fr: {
    meta: {
      title: 'PushLab — Entraine tout. Suis tout.',
      description:
        'Entraine tout. Suis tout. Enregistre yoga, pilates, mobilite, force ou cardio et visualise ta progression au meme endroit.',
    },
    nav: {
      product: 'Produit',
      progress: 'Progression',
      platforms: 'Plateformes',
      getApp: 'Obtenir app',
      getAppDialogTitle: 'Obtenir PushLab',
      getAppDialogSub: 'Les liens des boutiques seront actifs au lancement. Pour l’instant, utilise les liens d’exemple.',
      getAppStoreLabel: 'App Store',
      getAppPlayLabel: 'Google Play',
      getAppQrHint: 'Scanne pour telecharger (le QR sera mis a jour au lancement).',
      getAppCloseLabel: 'Fermer',
      openMenu: 'Ouvrir menu',
      closeMenu: 'Fermer menu',
      languageLabel: 'Langue',
    },
    hero: {
      eyebrow: 'Tous les styles dentrainement',
      line1: 'Entraine tout.',
      line2: 'Suis tout.',
      sub: 'Enregistre chaque seance: yoga, pilates, mobilite, force et cardio. Suis ton activite, ameliore ton corps et vois des resultats concrets.',
      ctaPrimary: 'Obtenir PushLab',
      ctaSecondary: 'Voir le systeme',
      trust: 'Adopte par plus de 40k athletes de force',
      chips: ['Journal hors ligne', 'Detection PR en direct', 'Programmes + modeles'],
      figcaption: 'Une seule app pour toutes tes facons de bouger.',
      weeklyVolume: 'Volume hebdomadaire',
      consistency: 'Score de regularite',
      imageAlt: 'Ecrans PushLab en composition dynamique.',
    },
    workflow: {
      kicker: 'Fonctionnement',
      title: 'Entrainer, enregistrer, repeter—avec intention',
      sub: 'La boucle des semaines costaudes: arriver en seance, capturer le travail, laisser l\'historique choisir la prochaine charge.',
      navPrev: 'Etape precedente',
      navNext: 'Etape suivante',
      slides: [
        {
          tag: 'Entrainer',
          title: 'Des seances qui suivent ton style',
          body: 'Programmes, modeles ou page blanche: structure et minuteurs te gardent en mouvement, pas dans les menus.',
        },
        {
          tag: 'Enregistrer',
          title: 'Des series sans perdre le focus',
          body: 'Charge, repetitions et repos en un ou deux taps. Hors ligne en salle, synchro des la reconnexion.',
        },
        {
          tag: 'Repeter',
          title: 'La progression dit la suite',
          body: 'Volume, PRs et regularite semaine apres semaine pour que le prochain plan se dessine presque tout seul.',
        },
      ],
    },
    features: {
      title: 'Concu autour de tes objectifs',
      sub: 'Yoga, pilates, mobilite, force et cardio: suis ton activite, progresse et vois des resultats avec de vrais ecrans app.',
      blocks: [
        {
          title: 'Note chaque serie en quelques secondes',
          items: [
            'Enregistre exercices, repetitions, charge et repos sans casser ton rythme',
            'Utilise des modeles reutilisables pour demarrer plus vite',
            'Garde un historique structure pour simplifier chaque prochaine seance',
            'Reste concentre pendant que PushLab capture les details',
          ],
          imageAlt: 'Ecran de journal dentrainement PushLab.',
        },
        {
          title: 'Observe la progression sans supposer',
          items: [
            'Suis les tendances sur des semaines et des mois',
            'Compare les seances et repere vite tes records personnels',
            'Utilise un historique propre pour comprendre ce qui marche',
            'Mesure les progres avec des donnees reelles dans le temps',
          ],
          imageAlt: 'Ecran de progression PushLab.',
        },
        {
          title: 'Fixe des objectifs et planifie ton activite',
          items: [
            'Definis des jalons clairs de force et de regularite',
            'Planifie ta semaine avant dentrer a la salle',
            'Suis les objectifs atteints et ajuste les prochaines seances',
            'Construis une dynamique avec un progres mesurable',
          ],
          imageAlt: 'Ecran dobjectifs et planification PushLab.',
        },
      ],
    },
    faq: {
      title: 'Questions frequentes',
      sub: 'Reponses directes aux questions courantes sur PushLab et le suivi de progression.',
      updated: 'Derniere mise a jour',
      items: [
        {
          question: 'Quest ce que PushLab?',
          answer:
            'PushLab est une app de suivi dentrainement pour la force, le cardio, le yoga, la mobilite et le pilates.',
        },
        {
          question: 'Quels types dentrainement puis je suivre?',
          answer:
            'Tu peux suivre force, cardio, yoga, mobilite et pilates avec exercices, series, repetitions, charge et notes.',
        },
        {
          question: 'Comment PushLab mesure la progression?',
          answer:
            'PushLab affiche volume hebdomadaire, regularite, historique de seances et tendances de records personnels.',
        },
        {
          question: 'Puis je enregistrer hors connexion?',
          answer:
            'Oui. PushLab prend en charge le journal hors ligne et synchronise ensuite quand la connexion revient.',
        },
        {
          question: 'Quel objectif hebdomadaire dactivite est recommande?',
          answer:
            'Un objectif pratique est au moins 150 minutes dactivite moderee par semaine selon lOMS.',
          answerHtml:
            'Un objectif pratique est au moins 150 minutes dactivite moderee par semaine selon <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noopener noreferrer">lOMS</a>.',
        },
      ],
    },
    platforms: {
      title: 'Ta routine sur chaque ecran',
      sub: 'Telephone en poche, montre au poignet, planification sur grand ecran.',
      cards: [
        {
          title: 'iOS et Android',
          description: 'Journal complet, seances hors ligne et synchronisation quand tu reviens en ligne.',
        },
        {
          title: 'Apple Watch et Wear OS',
          description: 'Timers et saisie des series directement au poignet.',
        },
        {
          title: 'Web',
          description: 'Revois tes programmes, analyse les tendances et planifie sur desktop.',
        },
      ],
    },
    cta: {
      title: 'Pret a transformer ton entrainement?',
      sub: 'Du yoga au cardio: suis ton activite, progresse et vois des resultats concrets.',
      button: 'Obtenir PushLab',
      imageAlt: 'Capture PushLab pour appel a laction.',
    },
    footer: {
      tagline: 'Concu pour les athletes qui suivent les chiffres qui comptent.',
      product: 'Produit',
      company: 'Entreprise',
      legal: 'Juridique',
      features: 'Fonctionnalites',
      platforms: 'Plateformes',
      changelog: 'Changelog',
      about: 'A propos',
      careers: 'Carrieres',
      contact: 'Contact',
      privacy: 'Confidentialite',
      terms: 'Conditions',
      legalLine: 'Remplace par ton entite legale.',
    },
  },
};

export function getLocaleFromParam(value: string | undefined): Locale {
  return SUPPORTED_LOCALES.includes(value as Locale) ? (value as Locale) : 'en';
}
