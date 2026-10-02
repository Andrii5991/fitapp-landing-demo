import { APP_SUPPORT } from './app-support';

export type SupportLang = 'en' | 'de';

type FaqItem = { question: string; answer: string };

export type SupportCopy = {
  meta: { title: string; description: string };
  langLabel: string;
  langSwitch: string;
  hero: {
    title: string;
    subtitle: string;
    intro: string;
  };
  about: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    responseTime: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formVersion: string;
    formMessage: string;
    formSubmit: string;
    formHint: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  reviewer: {
    title: string;
    items: { label: string; value: string }[];
  };
  legal: {
    privacy: string;
    terms: string;
    copyright: string;
  };
};

const enFaq: FaqItem[] = [
  {
    question: 'How do I create an account?',
    answer:
      'Open PushLab on your iPhone or iPad, tap Sign up, and register with your email and a password. You can log in on any device using the same credentials.',
  },
  {
    question: 'How do I reset my password?',
    answer:
      'On the login screen, tap Forgot password and follow the email instructions. If you do not receive an email within a few minutes, check spam or contact us with the address you used to sign up.',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'In the app: Profile → Settings → Account & Security → Delete account. This permanently removes your account and synced workout data from our servers. This action cannot be undone.',
  },
  {
    question: 'How is my workout data stored?',
    answer:
      'When you are signed in, workouts, sets, reps, weight, and progress stats sync to DOARBO servers so you can access them across sessions. Data you log while offline is saved on your device and syncs when you reconnect.',
  },
  {
    question: 'Does the app use Apple Health or HealthKit?',
    answer:
      'No. PushLab does not read from or write to Apple Health. All workout data is entered manually in the app.',
  },
  {
    question: 'Is the app free?',
    answer:
      'Yes. The current App Store release is free. There are no active in-app subscriptions; Fit Pro billing is disabled in this version.',
  },
  {
    question: 'How do I report a bug?',
    answer:
      `Email ${APP_SUPPORT.supportEmail} with your device model, iOS version, app version (Profile → About), and steps to reproduce the issue. Screenshots or screen recordings help us fix problems faster.`,
  },
];

const deFaq: FaqItem[] = [
  {
    question: 'Wie erstelle ich ein Konto?',
    answer:
      'Oeffne PushLab auf deinem iPhone oder iPad, tippe auf Registrieren und melde dich mit E-Mail und Passwort an. Du kannst dich auf jedem Geraet mit denselben Zugangsdaten anmelden.',
  },
  {
    question: 'Wie setze ich mein Passwort zurueck?',
    answer:
      'Auf dem Anmeldebildschirm tippe auf Passwort vergessen und folge den Anweisungen in der E-Mail. Wenn du nichts erhaeltst, pruefe den Spam-Ordner oder kontaktiere uns mit der verwendeten E-Mail-Adresse.',
  },
  {
    question: 'Wie loesche ich mein Konto?',
    answer:
      'In der App: Profil → Einstellungen → Konto & Sicherheit → Konto loeschen. Dadurch werden dein Konto und synchronisierte Trainingsdaten dauerhaft von unseren Servern entfernt. Dies kann nicht rueckgaengig gemacht werden.',
  },
  {
    question: 'Wie werden meine Trainingsdaten gespeichert?',
    answer:
      'Wenn du angemeldet bist, werden Workouts, Saetze, Wiederholungen, Gewicht und Fortschrittsstatistiken mit den DOARBO-Servern synchronisiert. Offline erfasste Daten bleiben auf dem Geraet und werden bei Verbindung synchronisiert.',
  },
  {
    question: 'Nutzt die App Apple Health oder HealthKit?',
    answer:
      'Nein. PushLab liest nicht aus Apple Health und schreibt auch nicht dorthin. Alle Trainingsdaten werden manuell in der App erfasst.',
  },
  {
    question: 'Ist die App kostenlos?',
    answer:
      'Ja. Die aktuelle App-Store-Version ist kostenlos. Es gibt keine aktiven In-App-Abonnements; Fit Pro-Abrechnung ist in dieser Version deaktiviert.',
  },
  {
    question: 'Wie melde ich einen Fehler?',
    answer:
      `Schreib an ${APP_SUPPORT.supportEmail} mit Geraetemodell, iOS-Version, App-Version (Profil → Info) und Schritten zur Reproduktion. Screenshots oder Aufnahmen helfen uns beim Beheben.`,
  },
];

export const supportCopy: Record<SupportLang, SupportCopy> = {
  en: {
    meta: {
      title: 'PushLab Support | DOARBO',
      description:
        'Get help with PushLab — account, workouts, data, and contact support.',
    },
    langLabel: 'Language',
    langSwitch: 'Deutsch',
    hero: {
      title: 'PushLab — App Support',
      subtitle: APP_SUPPORT.productSubtitle,
      intro:
        'This page is for people using the PushLab mobile app by DOARBO on iPhone and iPad — account help, workout data, and contacting our team.',
    },
    about: {
      title: 'What this app does',
      items: [
        'Log workouts, sets, reps, weight, and RPE/RIR',
        'Workout plans and templates',
        'Progress stats and streaks',
        'Email/password sign-up and login',
        'Profile settings: name, units, training preferences',
        'Account deletion in-app under Profile → Settings → Account & Security',
      ],
    },
    contact: {
      title: 'Contact support',
      intro: 'Questions, account issues, or bug reports — reach us directly:',
      emailLabel: 'Support email',
      responseTime: APP_SUPPORT.responseTime,
      formTitle: 'Send a message',
      formName: 'Your name',
      formEmail: 'Your email',
      formVersion: 'App version (optional)',
      formMessage: 'How can we help?',
      formSubmit: 'Open in email app',
      formHint: 'Opens your mail app with a pre-filled message to our support team.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: enFaq,
    },
    reviewer: {
      title: 'App details',
      items: [
        { label: 'App', value: APP_SUPPORT.appName },
        { label: 'Developer', value: APP_SUPPORT.company },
        { label: 'Bundle ID', value: APP_SUPPORT.bundleId },
        { label: 'Platform', value: 'iOS (iPhone & iPad)' },
        { label: 'Category', value: 'Strength training / workout logging' },
        { label: 'Apple Health', value: 'Not used — manual entry only' },
        { label: 'Subscriptions', value: 'None in current release (free app)' },
      ],
    },
    legal: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      copyright: `© ${new Date().getFullYear()} ${APP_SUPPORT.company}. ${APP_SUPPORT.appName} app support.`,
    },
  },
  de: {
    meta: {
      title: 'PushLab Support | DOARBO',
      description:
        'Hilfe zu PushLab — Konto, Training, Daten und Support-Kontakt.',
    },
    langLabel: 'Sprache',
    langSwitch: 'English',
    hero: {
      title: 'PushLab — App-Support',
      subtitle: APP_SUPPORT.productSubtitle,
      intro:
        'Diese Seite richtet sich an Nutzer der PushLab App von DOARBO auf iPhone und iPad — Kontohilfe, Trainingsdaten und Kontakt zum Team.',
    },
    about: {
      title: 'Was die App kann',
      items: [
        'Workouts, Saetze, Wiederholungen, Gewicht und RPE/RIR erfassen',
        'Trainingsplaene und Vorlagen',
        'Fortschrittsstatistiken und Serien',
        'Registrierung und Anmeldung per E-Mail/Passwort',
        'Profileinstellungen: Name, Einheiten, Trainingspraeferenzen',
        'Kontoloeschen in der App unter Profil → Einstellungen → Konto & Sicherheit',
      ],
    },
    contact: {
      title: 'Support kontaktieren',
      intro: 'Fragen, Kontoprobleme oder Fehlermeldungen — direkt an uns:',
      emailLabel: 'Support-E-Mail',
      responseTime: 'Wir antworten innerhalb von 2 Werktagen.',
      formTitle: 'Nachricht senden',
      formName: 'Dein Name',
      formEmail: 'Deine E-Mail',
      formVersion: 'App-Version (optional)',
      formMessage: 'Wobei koennen wir helfen?',
      formSubmit: 'In E-Mail-App oeffnen',
      formHint: 'Oeffnet deine E-Mail-App mit einer vorausgefuellten Nachricht an unser Support-Team.',
    },
    faq: {
      title: 'Haeufige Fragen',
      items: deFaq,
    },
    reviewer: {
      title: 'App-Details',
      items: [
        { label: 'App', value: APP_SUPPORT.appName },
        { label: 'Entwickler', value: APP_SUPPORT.company },
        { label: 'Bundle-ID', value: APP_SUPPORT.bundleId },
        { label: 'Plattform', value: 'iOS (iPhone & iPad)' },
        { label: 'Kategorie', value: 'Krafttraining / Workout-Protokoll' },
        { label: 'Apple Health', value: 'Nicht genutzt — nur manuelle Eingabe' },
        { label: 'Abonnements', value: 'Keine in der aktuellen Version (kostenlos)' },
      ],
    },
    legal: {
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      copyright: `© ${new Date().getFullYear()} ${APP_SUPPORT.company}. ${APP_SUPPORT.appName} App-Support.`,
    },
  },
};
