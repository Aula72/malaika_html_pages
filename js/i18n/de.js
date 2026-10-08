/* Malaika — deutsche Inhalte. Gleiche Schlüssel wie en.js. Erfahrungsberichte: PLATZHALTER. */
window.MALAIKA_I18N = window.MALAIKA_I18N || {};
window.MALAIKA_I18N.de = {
  meta: {
    titles: { home: "Malaika — Spielerische Versorgung", features: "Funktionen — Malaika", solutions: "Lösungen — Malaika", about: "Über uns — Malaika", faq: "FAQ — Malaika", join: "Mitmachen — Malaika" },
    language: "Sprache"
  },
  nav: { home: "Start", features: "Funktionen", solutions: "Lösungen", about: "Über uns", faq: "FAQ", cta: "Warteliste", menu: "Menü", theme: "Dunkelmodus umschalten" },
  common: { learnMore: "Mehr erfahren", seeAll: "Alle Funktionen ansehen" },

  home: {
    hero: {
      eyebrow: "Spielerische Versorgung bei Sichelzellkrankheit & chronischen Erkrankungen",
      titleBefore: "Versorgung, die sich anfühlt wie",
      words: ["ein Spiel", "eine Freundin", "Fortschritt", "Zuhause"],
      sub: "Malaika verwandelt tägliche Routinen (Trinken, Medikamente, Ruhe und Schmerztagebuch) in kleine Quests, Serien und Belohnungen, damit du dranbleibst und dich nie allein fühlst.",
      primary: "Frühen Zugang sichern",
      secondary: "Demo spielen",
      bubble: "Hallo! Ich bin Malaika. Lass uns zusammen Wasser trinken 💧"
    },
    stats: [
      { value: 3, suffix: " Min", label: "am Tag genügen" },
      { value: 8, suffix: "", label: "Gläser: deine tägliche Trink-Quest" },
      { value: 24, suffix: "/7", label: "Krisenplan mit einem Tipp" },
      { value: 3, suffix: "", label: "Sprachen: Englisch, Spanisch & Deutsch" }
    ],
    demo: {
      eyebrow: "Jetzt ausprobieren",
      title: "Heutige Quests",
      sub: "Tippe auf eine Quest, um sie abzuschließen. Sammle XP, fülle deinen Ring und halte deine Serie.",
      xp: "XP", level: "Level", reset: "Tag zurücksetzen",
      allDone: "Alle Quests geschafft! Malaika ist stolz auf dich 🎉",
      quests: [
        { id: "water", icon: "💧", title: "2 Gläser Wasser trinken", xp: 20 },
        { id: "meds", icon: "💊", title: "Morgenmedikamente nehmen", xp: 30 },
        { id: "pain", icon: "📝", title: "Befinden eintragen", xp: 15 },
        { id: "move", icon: "🧘", title: "5 Minuten sanftes Dehnen", xp: 25 },
        { id: "learn", icon: "📚", title: "2-Minuten-Lektion: warm bleiben", xp: 10 }
      ],
      moods: { idle: "Bereit, wenn du es bist!", progress: "Super! Weiter so ✨", done: "Du bist großartig! 🎉" }
    },
    how: {
      eyebrow: "So funktioniert's",
      title: "Drei Schritte zu einem leichteren Tag",
      steps: [
        { icon: "👋", title: "Lerne Malaika kennen", body: "Erzähl uns von deiner Erkrankung und deinen Zielen. Malaika erstellt deinen Tagesplan in unter einer Minute." },
        { icon: "🎮", title: "Spiel deinen Tag", body: "Schließe Quests ab, halte Serien und steige auf. Kleine Schritte bewirken Großes." },
        { icon: "🌱", title: "Gemeinsam wachsen", body: "Teile deinen Fortschritt mit deinem Betreuungskreis und bring echte Erkenntnisse zu jedem Termin." }
      ]
    },
    highlights: {
      eyebrow: "Funktionen",
      title: "Alles, was du brauchst, nichts, was überfordert",
      items: [
        { id: "quests", icon: "🎯", title: "Tägliche Quests", body: "Trinken, Medikamente und Ruhe als Quests mit XP und Serien." },
        { id: "journal", icon: "📈", title: "Schmerztagebuch", body: "Symptome in Sekunden erfassen und Muster mit der Zeit erkennen." },
        { id: "crisis", icon: "🚨", title: "Krisenmodus", body: "Dein Plan und dein Betreuungskreis, nur einen Tipp entfernt." }
      ]
    },
    testimonials: {
      eyebrow: "Erste Stimmen",
      title: "Das sagt unsere Beta-Community",
      items: [
        { quote: "Mein Sohn erinnert jetzt MICH an seine Wasser-Quest. Das ist noch nie passiert.", name: "Amina", role: "Mutter" },
        { quote: "Mit dem Schmerztagebuch ging mein letzter Termin viel schneller. Mein Arzt hat das Muster sofort gesehen.", name: "Kevin", role: "Beta-Nutzer, 24" },
        { quote: "Es fühlt sich an wie eine Freundin, nicht wie eine Medizin-App. Ich habe eine Serie von 41 Tagen!", name: "Grace", role: "Beta-Nutzerin, 17" }
      ]
    },
    cta: { title: "Bereit, Malaika kennenzulernen?", sub: "Trag dich in die Warteliste ein und sei beim Start ganz vorne mit dabei.", button: "Zur Warteliste" }
  },

  features: {
    hero: { eyebrow: "Funktionen", title: "Gemacht für den Alltag, bereit für schwere Tage", sub: "Fünf Werkzeuge in einer freundlichen Begleiterin. Entdecke sie unten." },
    items: [
      { id: "quests", icon: "🎯", tab: "Tägliche Quests", title: "Kleine Erfolge, jeden Tag", body: "Trinken, Medikamente und Ruhe werden zu Quests mit XP, Serien und Abzeichen. Sanfte Erinnerungen, nie Schuldgefühle.", bullets: ["Persönliche Tagesziele", "Serienschutz für harte Tage", "Abzeichen, die Beständigkeit feiern"] },
      { id: "journal", icon: "📈", tab: "Schmerztagebuch", title: "Muster erkennen, die vorher unsichtbar waren", body: "Erfasse Schmerz, Stimmung und Auslöser in Sekunden. Malaika macht daraus klare Diagramme, die du mit deiner Ärztin teilen kannst.", bullets: ["Körperkarte zum Antippen", "Wetter- & Auslöser-Analysen", "Praxisfertiger Bericht zum Export"] },
      { id: "crisis", icon: "🚨", tab: "Krisenmodus", title: "Ein Tipp, wenn es darauf ankommt", body: "Dein persönlicher Krisenplan, nahe Kliniken und eine sofortige Benachrichtigung an deinen Betreuungskreis, alles über einen großen Knopf.", bullets: ["Dein Plan, immer offline", "Betreuende sofort benachrichtigen", "Weg zur nächsten Klinik"] },
      { id: "circle", icon: "🤝", tab: "Betreuungskreis", title: "Niemand schafft das allein", body: "Lade Familie, Freunde und Ärzte ein. Sie sehen deinen Fortschritt und können dich anfeuern, wenn du es brauchst.", bullets: ["Gemeinsame Fortschrittsansicht", "Anfeuern & Nachfragen", "Dashboard für Ärzte"] },
      { id: "learn", icon: "🎓", tab: "Lernen", title: "Lektionen in Häppchen", body: "Zweiminütige Lektionen über ein gutes Leben mit Sichelzellkrankheit, geschrieben mit Ärzten und Betroffenen.", bullets: ["Quizze, die XP bringen", "Pfade für Kinder & Jugendliche", "In 3 Sprachen verfügbar"] }
    ],
    vis: {
      days: ["M", "D", "M", "D", "F", "S", "S"], sos: "SOS", alerting: "Benachrichtige", mom: "Mama", doc: "Dr. Otieno",
      clinic: "Nächste Klinik · 1,2 km", cheer: "hat dich angefeuert 🎉",
      quizQ: "Welche Gewohnheit hilft, einer Schmerzkrise vorzubeugen?", quiz: ["Ausreichend trinken", "Mahlzeiten auslassen", "Kalt duschen"],
      q1: "Wasser", q2: "Medikamente", q3: "Ruhe"
    },
    extras: {
      eyebrow: "Ebenfalls dabei",
      title: "Die Details, die den Unterschied machen",
      items: [
        { icon: "📴", title: "Funktioniert offline", body: "Quests und dein Krisenplan laufen auch ohne Verbindung." },
        { icon: "🔒", title: "Datenschutz eingebaut", body: "Verschlüsselte Daten. Du entscheidest, wer was sieht." },
        { icon: "🧒🏾", title: "Kindermodus", body: "Freundliche Optik und Elternkontrollen für jüngere Spieler." },
        { icon: "🔔", title: "Smarte Erinnerungen", body: "Hinweise, die sich deinem Tag anpassen, nicht umgekehrt." },
        { icon: "📄", title: "Praxisberichte", body: "PDF-Zusammenfassungen für Termine mit einem Tipp." },
        { icon: "🌍", title: "Mehrsprachig", body: "Englisch, Spanisch und Deutsch, weitere folgen." }
      ]
    }
  },

  solutions: {
    hero: { eyebrow: "Lösungen", title: "Gemacht für alle im Betreuungskreis", sub: "Ob du mit Sichelzellkrankheit lebst, jemanden betreust oder eine Klinik leitest: Malaika passt zu deiner Rolle." },
    groups: [
      { id: "patients", label: "Betroffene", emoji: "🧑🏾", title: "Für Menschen, die damit leben", intro: "Tägliche Selbstfürsorge ist die erste Verteidigungslinie. Malaika macht sie leichter und sogar spaßig.", points: ["Trinken und Medikamente im Griff, ohne nachzudenken", "Auslöser früh erkennen", "Fortschritt feiern, nicht Perfektion"], cta: "Als Betroffene/r anmelden" },
      { id: "caregivers", label: "Betreuende", emoji: "👩🏾‍👧🏾", title: "Für Eltern & Betreuende", intro: "Unterstütze die Menschen, die du liebst, ohne sie jede Minute zu beobachten.", points: ["Kindermodus mit freundlicher Optik", "Benachrichtigung, wenn Hilfe nötig ist", "Fortschritt auf einen Blick"], cta: "Als Betreuende/r anmelden" },
      { id: "clinics", label: "Ärzte", emoji: "🩺", title: "Für Kliniken & Programme", intro: "Erweitere die Versorgung über den Termin hinaus, mit Engagement, das bleibt.", points: ["Adhärenz- und Symptomtrends auf einen Blick", "Strukturierte Berichte vor Terminen", "Einblicke auf Bevölkerungsebene für Programme"], cta: "Pilotprojekt anfragen" }
    ],
    compare: {
      title: "Was jede Rolle bekommt",
      cols: ["Betroffene", "Betreuende", "Ärzte"],
      rows: [
        { label: "Tägliche Quests & Serien", v: [1, 0, 0] },
        { label: "Schmerz- & Symptomtagebuch", v: [1, 1, 1] },
        { label: "Krisenbenachrichtigungen", v: [1, 1, 1] },
        { label: "Kindermodus-Einstellungen", v: [0, 1, 0] },
        { label: "Trend-Dashboard", v: [0, 0, 1] }
      ]
    }
  },

  about: {
    hero: { eyebrow: "Über uns", title: "Sichelzellversorgung soll Freude machen, nicht nur klinisch sein", sub: "Wir glauben: Der beste Behandlungsplan ist der, dem Menschen wirklich folgen wollen." },
    mission: {
      eyebrow: "Warum es uns gibt",
      title: "Jedes Jahr kommen über 300.000 Babys mit Sichelzellkrankheit zur Welt.",
      body: "Die meisten davon in Subsahara-Afrika. Tägliche Selbstfürsorge ist die erste Verteidigungslinie, und sie durchzuhalten ist schwer. Malaika macht sie zu etwas, zu dem man gern zurückkehrt."
    },
    story: {
      eyebrow: "Unsere Geschichte",
      title: "Vom Wartezimmer in deine Hosentasche",
      paragraphs: [
        "Malaika begann mit einer einfachen Beobachtung: Am besten ging es den Patienten, die kleine, beständige Gewohnheiten aufgebaut hatten, und das Schwierigste war, sie beizubehalten.",
        "Spiele sind genial darin, Menschen zum Wiederkommen zu bewegen. Wir fragten uns: Was, wenn Wassertrinken, Medikamente nehmen und Schmerzen eintragen so belohnend wäre wie eine Sprachlern-Serie?",
        "Heute entwickeln wir jede Funktion gemeinsam mit Betroffenen, Betreuenden und Ärzten, damit Malaika in echte Leben passt, nicht nur in Behandlungspläne."
      ]
    },
    values: {
      eyebrow: "Wofür wir stehen",
      title: "Unsere Werte",
      items: [
        { icon: "💛", title: "Freundlichkeit zuerst", body: "Keine Schuld, keine Scham. Schlechte Tage gehören dazu." },
        { icon: "🤝", title: "Gemeinsam gestaltet", body: "Mit der Community entwickelt, nicht nur für sie." },
        { icon: "🔬", title: "Klinisch fundiert", body: "Inhalte geprüft von Ärzten, die Sichelzellkrankheit behandeln." },
        { icon: "🔒", title: "Immer privat", body: "Deine Gesundheitsdaten gehören dir. Punkt." }
      ]
    },
    cta: { title: "Möchtest du mit uns zusammenarbeiten?", sub: "Wir arbeiten mit Kliniken, NGOs und Forschenden, um Malaika zu mehr Menschen zu bringen.", button: "Kontakt aufnehmen" }
  },

  faq: {
    hero: { eyebrow: "FAQ", title: "Fragen und Antworten", sub: "Nicht gefunden, was du suchst? Schreib uns eine Nachricht." },
    search: "Fragen durchsuchen…",
    all: "Alle",
    empty: "Keine Fragen passen zu deiner Suche.",
    categories: { general: "Allgemein", privacy: "Datenschutz", clinics: "Für Kliniken" },
    items: [
      { cat: "general", q: "Ersetzt Malaika meinen Arzt?", a: "Nein. Malaika unterstützt deinen Alltag und hilft dir, bessere Informationen mit deinem Behandlungsteam zu teilen. Folge immer dem Rat deiner Ärztin oder deines Arztes." },
      { cat: "general", q: "Ist es kostenlos?", a: "Die Kern-App mit Quests, Tagebuch und Krisenmodus wird für Betroffene kostenlos sein. Kliniken und Programme erhalten zusätzliche Dashboards." },
      { cat: "general", q: "Welche Sprachen werden unterstützt?", a: "Englisch, Spanisch und Deutsch zum Start, weitere Sprachen folgen." },
      { cat: "general", q: "Funktioniert es offline?", a: "Deine Quests und dein Krisenplan funktionieren offline und synchronisieren sich, sobald du wieder online bist." },
      { cat: "privacy", q: "Sind meine Gesundheitsdaten privat?", a: "Ja. Deine Daten sind verschlüsselt und du entscheidest genau, wer in deinem Betreuungskreis was sehen darf." },
      { cat: "privacy", q: "Kann ich meine Daten löschen?", a: "Ja. Du kannst deine Daten jederzeit in den Einstellungen exportieren oder dauerhaft löschen." },
      { cat: "clinics", q: "Wie kann meine Klinik ein Pilotprojekt starten?", a: "Fülle das Partnerformular auf der Seite Mitmachen aus, und unser Team vereinbart ein Onboarding-Gespräch." },
      { cat: "clinics", q: "Lässt es sich mit unserem Dokumentationssystem verbinden?", a: "Wir bieten heute sichere Exporte an und arbeiten an direkten Integrationen mit gängigen Systemen." }
    ],
    still: { title: "Noch Fragen?", button: "Kontakt" }
  },

  join: {
    hero: { eyebrow: "Mitmachen", title: "Lerne Malaika als Erste/r kennen", sub: "Trag dich für frühen Zugang in die Warteliste ein oder melde dich für Partnerschaften." },
    waitlist: {
      title: "Zur Warteliste",
      sub: "Erhalte frühen Zugang zum Start.",
      roleLabel: "Ich bin…",
      roles: { patient: "Betroffene/r", caregiver: "Betreuende/r", clinician: "Ärztin/Arzt" },
      emailLabel: "E-Mail",
      placeholder: "du@beispiel.de",
      button: "Eintragen",
      success: "Du stehst auf der Liste! Wir melden uns bald 💛",
      invalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
      error: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
      count: "Personen warten bereits"
    },
    contact: {
      title: "Partner werden",
      sub: "Kliniken, NGOs, Forschende und Presse: Wir freuen uns auf deine Nachricht.",
      name: "Name", email: "E-Mail", org: "Organisation (optional)", message: "Nachricht",
      button: "Nachricht senden",
      success: "Danke! Wir antworten innerhalb von zwei Werktagen.",
      invalid: "Bitte gib deinen Namen, eine gültige E-Mail und eine Nachricht ein."
    }
  },

  footer: {
    tagline: "Dein Engel für die tägliche Versorgung.",
    product: "Produkt", company: "Unternehmen", legal: "Rechtliches",
    links: { features: "Funktionen", demo: "Ausprobieren", clinics: "Für Kliniken", faq: "FAQ", about: "Über uns", join: "Mitmachen", contact: "Kontakt", privacy: "Datenschutz", terms: "AGB", disclaimer: "Medizinischer Hinweis" },
    rights: "Alle Rechte vorbehalten.",
    disclaimer: "Malaika ist eine Begleiterin zur Selbstfürsorge und bietet keine medizinische Diagnose oder Behandlung."
  }
};
