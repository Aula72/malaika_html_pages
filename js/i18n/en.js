/*
 * Malaika — English content. es.js and de.js mirror these keys exactly.
 * NOTE: testimonials are PLACEHOLDERS. Replace with real, consented quotes before launch.
 */
window.MALAIKA_I18N = window.MALAIKA_I18N || {};
window.MALAIKA_I18N.en = {
  meta: {
    titles: { home: "Malaika — Gamified Care", features: "Features — Malaika", solutions: "Solutions — Malaika", about: "About — Malaika", faq: "FAQ — Malaika", join: "Join — Malaika" },
    language: "Language"
  },
  nav: { home: "Home", features: "Features", solutions: "Solutions", about: "About", faq: "FAQ", cta: "Join waitlist", menu: "Menu", theme: "Toggle dark mode" },
  common: { learnMore: "Learn more", seeAll: "See all features" },

  home: {
    hero: {
      eyebrow: "Gamified care for sickle cell & chronic illness",
      titleBefore: "Care that feels like",
      words: ["a game", "a friend", "progress", "home"],
      sub: "Malaika turns daily routines (water, medication, rest and pain tracking) into small quests, streaks and rewards, so you stay on track and never feel alone.",
      primary: "Get early access",
      secondary: "Play the demo",
      bubble: "Hi! I'm Malaika. Let's drink some water together 💧"
    },
    stats: [
      { value: 3, suffix: " min", label: "a day is all it takes" },
      { value: 8, suffix: "", label: "glasses: your daily hydration quest" },
      { value: 24, suffix: "/7", label: "crisis plan in one tap" },
      { value: 3, suffix: "", label: "languages: English, Spanish & German" }
    ],
    demo: {
      eyebrow: "Try it now",
      title: "Today's quests",
      sub: "Tap a quest to complete it. Earn XP, fill your ring, keep your streak alive.",
      xp: "XP", level: "Level", reset: "Reset day",
      allDone: "All quests done! Malaika is proud of you 🎉",
      quests: [
        { id: "water", icon: "💧", title: "Drink 2 glasses of water", xp: 20 },
        { id: "meds", icon: "💊", title: "Take morning medication", xp: 30 },
        { id: "pain", icon: "📝", title: "Log how you feel", xp: 15 },
        { id: "move", icon: "🧘", title: "5-minute gentle stretch", xp: 25 },
        { id: "learn", icon: "📚", title: "2-minute lesson: staying warm", xp: 10 }
      ],
      moods: { idle: "Ready when you are!", progress: "Nice! Keep going ✨", done: "You're amazing! 🎉" }
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps to a lighter day",
      steps: [
        { icon: "👋", title: "Meet Malaika", body: "Tell us about your condition and goals. Malaika builds your daily plan in under a minute." },
        { icon: "🎮", title: "Play your day", body: "Complete quests, keep streaks, level up. Small actions add up to big changes." },
        { icon: "🌱", title: "Grow together", body: "Share progress with your care circle and bring real insights to every appointment." }
      ]
    },
    highlights: {
      eyebrow: "Features",
      title: "Everything you need, nothing that overwhelms",
      items: [
        { id: "quests", icon: "🎯", title: "Daily quests", body: "Hydration, medication and rest as quests with XP and streaks." },
        { id: "journal", icon: "📈", title: "Pain journal", body: "Log symptoms in seconds and spot patterns over time." },
        { id: "crisis", icon: "🚨", title: "Crisis mode", body: "Your plan and your care circle, one tap away." }
      ]
    },
    testimonials: {
      eyebrow: "Early voices",
      title: "What our beta community says",
      items: [
        { quote: "My son actually reminds ME about his water quest now. That has never happened before.", name: "Amina", role: "Parent" },
        { quote: "The pain journal made my last appointment so much faster. My doctor saw the pattern immediately.", name: "Kevin", role: "Beta user, 24" },
        { quote: "It feels like a friend, not a medical app. I've kept a 41-day streak!", name: "Grace", role: "Beta user, 17" }
      ]
    },
    cta: { title: "Ready to meet Malaika?", sub: "Join the waitlist and be first in line when we launch.", button: "Join the waitlist" }
  },

  features: {
    hero: { eyebrow: "Features", title: "Built for the everyday, ready for the hard days", sub: "Five tools in one friendly companion. Explore each one below." },
    items: [
      { id: "quests", icon: "🎯", tab: "Daily quests", title: "Small wins, every day", body: "Hydration, medication and rest become quests with XP, streaks and badges. Gentle reminders, never guilt.", bullets: ["Personalised daily goals", "Streak freezes for tough days", "Badges that celebrate consistency"] },
      { id: "journal", icon: "📈", tab: "Pain journal", title: "See patterns you couldn't before", body: "Log pain, mood and triggers in seconds. Malaika turns your entries into clear charts you can share with your doctor.", bullets: ["Tap-to-log body map", "Weather & trigger insights", "Export a clinic-ready report"] },
      { id: "crisis", icon: "🚨", tab: "Crisis mode", title: "One tap when it matters most", body: "Your personal crisis plan, nearest clinics and an instant alert to your care circle, all from one big button.", bullets: ["Your plan, always offline", "Notify caregivers instantly", "Nearest clinic directions"] },
      { id: "circle", icon: "🤝", tab: "Care circle", title: "Nobody does this alone", body: "Invite family, friends and clinicians. They see your progress and can send cheers when you need them.", bullets: ["Shared progress view", "Cheers & check-ins", "Clinician dashboard"] },
      { id: "learn", icon: "🎓", tab: "Learn", title: "Bite-sized lessons", body: "Two-minute lessons on living well with sickle cell, written with clinicians and the people who live it.", bullets: ["Quizzes that earn XP", "Kids & teen tracks", "Available in 3 languages"] }
    ],
    vis: {
      days: ["M", "T", "W", "T", "F", "S", "S"], sos: "SOS", alerting: "Alerting", mom: "Mum", doc: "Dr. Otieno",
      clinic: "Nearest clinic · 1.2 km", cheer: "sent you a cheer 🎉",
      quizQ: "Which habit helps prevent a pain crisis?", quiz: ["Staying hydrated", "Skipping meals", "Cold showers"],
      q1: "Water", q2: "Medication", q3: "Rest"
    },
    extras: {
      eyebrow: "Also included",
      title: "The details that make it work",
      items: [
        { icon: "📴", title: "Works offline", body: "Quests and your crisis plan work without a connection." },
        { icon: "🔒", title: "Private by design", body: "Encrypted data. You choose who sees what." },
        { icon: "🧒🏾", title: "Kids mode", body: "Friendly visuals and parent controls for younger players." },
        { icon: "🔔", title: "Smart reminders", body: "Nudges that adapt to your day, not the other way round." },
        { icon: "📄", title: "Clinic reports", body: "One-tap PDF summaries for appointments." },
        { icon: "🌍", title: "Multilingual", body: "English, Spanish and German, with more to come." }
      ]
    }
  },

  solutions: {
    hero: { eyebrow: "Solutions", title: "Built for everyone in the circle of care", sub: "Whether you live with sickle cell, care for someone who does, or run a clinic, Malaika fits your role." },
    groups: [
      { id: "patients", label: "Patients", emoji: "🧑🏾", title: "For people living with it", intro: "Daily self-care is the frontline. Malaika makes it lighter, and even fun.", points: ["Stay on top of hydration and meds without thinking", "Spot your triggers early", "Celebrate progress, not perfection"], cta: "Join as a patient" },
      { id: "caregivers", label: "Caregivers", emoji: "👩🏾‍👧🏾", title: "For parents & caregivers", intro: "Support the people you love without having to watch them every minute.", points: ["Kids' mode with friendly visuals", "Get alerted when help is needed", "See progress at a glance"], cta: "Join as a caregiver" },
      { id: "clinics", label: "Clinicians", emoji: "🩺", title: "For clinics & programmes", intro: "Extend care beyond the appointment with engagement that lasts.", points: ["Adherence and symptom trends at a glance", "Structured reports before visits", "Population-level insights for programmes"], cta: "Request a pilot" }
    ],
    compare: {
      title: "What each role gets",
      cols: ["Patients", "Caregivers", "Clinicians"],
      rows: [
        { label: "Daily quests & streaks", v: [1, 0, 0] },
        { label: "Pain & symptom journal", v: [1, 1, 1] },
        { label: "Crisis alerts", v: [1, 1, 1] },
        { label: "Kids mode controls", v: [0, 1, 0] },
        { label: "Trend dashboard", v: [0, 0, 1] }
      ]
    }
  },

  about: {
    hero: { eyebrow: "About us", title: "Making sickle cell care joyful, not just clinical", sub: "We believe the best care plan is the one people actually want to follow." },
    mission: {
      eyebrow: "Why we exist",
      title: "Over 300,000 babies are born with sickle cell disease every year.",
      body: "Most of them are born in sub-Saharan Africa. Daily self-care is the frontline, and it's hard to keep up. Malaika makes it something you want to come back to."
    },
    story: {
      eyebrow: "Our story",
      title: "From a hospital waiting room to your pocket",
      paragraphs: [
        "Malaika started with a simple observation: the patients who did best were the ones who had built small, steady habits, and the hardest part was keeping them going.",
        "Games are brilliant at keeping people coming back. We asked: what if drinking water, taking medication and logging pain felt as rewarding as keeping a language streak?",
        "Today we co-design every feature with patients, caregivers and clinicians, so Malaika fits real lives, not just care plans."
      ]
    },
    values: {
      eyebrow: "What we stand for",
      title: "Our values",
      items: [
        { icon: "💛", title: "Kindness first", body: "No guilt, no shame. Bad days are part of the journey." },
        { icon: "🤝", title: "Co-designed", body: "Built with the community, not just for it." },
        { icon: "🔬", title: "Clinically grounded", body: "Content reviewed by clinicians who treat sickle cell." },
        { icon: "🔒", title: "Privacy always", body: "Your health data belongs to you. Full stop." }
      ]
    },
    cta: { title: "Want to partner with us?", sub: "We work with clinics, NGOs and researchers to bring Malaika to more people.", button: "Get in touch" }
  },

  faq: {
    hero: { eyebrow: "FAQ", title: "Questions, answered", sub: "Can't find what you're looking for? Send us a message." },
    search: "Search questions…",
    all: "All",
    empty: "No questions match your search.",
    categories: { general: "General", privacy: "Privacy & data", clinics: "For clinics" },
    items: [
      { cat: "general", q: "Does Malaika replace my doctor?", a: "No. Malaika supports your daily routine and helps you share better information with your care team. Always follow your clinician's advice." },
      { cat: "general", q: "Is it free?", a: "The core app, including quests, journal and crisis mode, will be free for patients. Clinics and programmes can access extra dashboards." },
      { cat: "general", q: "Which languages are supported?", a: "English, Spanish and German at launch, with more languages on the way." },
      { cat: "general", q: "Does it work offline?", a: "Your quests and crisis plan work offline and sync when you're back online." },
      { cat: "privacy", q: "Is my health data private?", a: "Yes. Your data is encrypted and you decide exactly who in your care circle can see what." },
      { cat: "privacy", q: "Can I delete my data?", a: "Yes. You can export or permanently delete your data at any time from settings." },
      { cat: "clinics", q: "How can my clinic run a pilot?", a: "Fill in the partner form on the Join page and our team will set up an onboarding call." },
      { cat: "clinics", q: "Can it connect to our records system?", a: "We offer secure exports today and are working on direct integrations with common record systems." }
    ],
    still: { title: "Still have questions?", button: "Contact us" }
  },

  join: {
    hero: { eyebrow: "Join", title: "Be the first to meet Malaika", sub: "Join the waitlist for early access, or get in touch about partnerships." },
    waitlist: {
      title: "Join the waitlist",
      sub: "Get early access when we launch.",
      roleLabel: "I am a…",
      roles: { patient: "Patient", caregiver: "Caregiver", clinician: "Clinician" },
      emailLabel: "Email",
      placeholder: "you@example.com",
      button: "Join waitlist",
      success: "You're on the list! We'll be in touch soon 💛",
      invalid: "Please enter a valid email address.",
      error: "Something went wrong. Please try again.",
      count: "people already waiting"
    },
    contact: {
      title: "Partner with us",
      sub: "Clinics, NGOs, researchers and press: we'd love to hear from you.",
      name: "Name", email: "Email", org: "Organisation (optional)", message: "Message",
      button: "Send message",
      success: "Thanks! We'll reply within two working days.",
      invalid: "Please fill in your name, a valid email and a message."
    }
  },

  footer: {
    tagline: "Your angel for everyday care.",
    product: "Product", company: "Company", legal: "Legal",
    links: { features: "Features", demo: "Try it", clinics: "For clinics", faq: "FAQ", about: "About", join: "Join", contact: "Contact", privacy: "Privacy", terms: "Terms", disclaimer: "Medical disclaimer" },
    rights: "All rights reserved.",
    disclaimer: "Malaika is a self-care companion and does not provide medical diagnosis or treatment."
  }
};
