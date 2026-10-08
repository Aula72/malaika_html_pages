/* Malaika — contenido en español. Mismas claves que en.js. Testimonios: MARCADORES DE POSICIÓN. */
window.MALAIKA_I18N = window.MALAIKA_I18N || {};
window.MALAIKA_I18N.es = {
  meta: {
    titles: { home: "Malaika — Cuidado gamificado", features: "Funciones — Malaika", solutions: "Soluciones — Malaika", about: "Nosotros — Malaika", faq: "Preguntas — Malaika", join: "Únete — Malaika" },
    language: "Idioma"
  },
  nav: { home: "Inicio", features: "Funciones", solutions: "Soluciones", about: "Nosotros", faq: "Preguntas", cta: "Lista de espera", menu: "Menú", theme: "Cambiar modo oscuro" },
  common: { learnMore: "Saber más", seeAll: "Ver todas las funciones" },

  home: {
    hero: {
      eyebrow: "Cuidado gamificado para la anemia falciforme y enfermedades crónicas",
      titleBefore: "Un cuidado que se siente como",
      words: ["un juego", "un amigo", "progreso", "hogar"],
      sub: "Malaika convierte las rutinas diarias (agua, medicación, descanso y registro del dolor) en pequeñas misiones, rachas y recompensas, para que sigas el plan y nunca te sientas solo.",
      primary: "Acceso anticipado",
      secondary: "Jugar la demo",
      bubble: "¡Hola! Soy Malaika. Bebamos agua juntos 💧"
    },
    stats: [
      { value: 3, suffix: " min", label: "al día es todo lo que necesitas" },
      { value: 8, suffix: "", label: "vasos: tu misión diaria de hidratación" },
      { value: 24, suffix: "/7", label: "plan de crisis con un toque" },
      { value: 3, suffix: "", label: "idiomas: inglés, español y alemán" }
    ],
    demo: {
      eyebrow: "Pruébalo ahora",
      title: "Misiones de hoy",
      sub: "Toca una misión para completarla. Gana XP, llena tu anillo y mantén tu racha.",
      xp: "XP", level: "Nivel", reset: "Reiniciar día",
      allDone: "¡Todas las misiones completadas! Malaika está orgullosa de ti 🎉",
      quests: [
        { id: "water", icon: "💧", title: "Bebe 2 vasos de agua", xp: 20 },
        { id: "meds", icon: "💊", title: "Toma la medicación de la mañana", xp: 30 },
        { id: "pain", icon: "📝", title: "Registra cómo te sientes", xp: 15 },
        { id: "move", icon: "🧘", title: "5 minutos de estiramiento suave", xp: 25 },
        { id: "learn", icon: "📚", title: "Lección de 2 min: mantenerse abrigado", xp: 10 }
      ],
      moods: { idle: "¡Lista cuando tú lo estés!", progress: "¡Genial! Sigue así ✨", done: "¡Eres increíble! 🎉" }
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos hacia un día más ligero",
      steps: [
        { icon: "👋", title: "Conoce a Malaika", body: "Cuéntanos sobre tu condición y tus metas. Malaika crea tu plan diario en menos de un minuto." },
        { icon: "🎮", title: "Juega tu día", body: "Completa misiones, mantén rachas y sube de nivel. Las pequeñas acciones suman grandes cambios." },
        { icon: "🌱", title: "Crezcan juntos", body: "Comparte tu progreso con tu círculo de cuidado y lleva información real a cada cita." }
      ]
    },
    highlights: {
      eyebrow: "Funciones",
      title: "Todo lo que necesitas, nada que abrume",
      items: [
        { id: "quests", icon: "🎯", title: "Misiones diarias", body: "Hidratación, medicación y descanso como misiones con XP y rachas." },
        { id: "journal", icon: "📈", title: "Diario del dolor", body: "Registra síntomas en segundos y descubre patrones con el tiempo." },
        { id: "crisis", icon: "🚨", title: "Modo crisis", body: "Tu plan y tu círculo de cuidado, a un toque." }
      ]
    },
    testimonials: {
      eyebrow: "Primeras voces",
      title: "Lo que dice nuestra comunidad beta",
      items: [
        { quote: "Ahora es mi hijo quien ME recuerda su misión de agua. Eso nunca había pasado.", name: "Amina", role: "Madre" },
        { quote: "El diario del dolor hizo mi última cita mucho más rápida. Mi médico vio el patrón al instante.", name: "Kevin", role: "Usuario beta, 24" },
        { quote: "Se siente como un amigo, no como una app médica. ¡Llevo una racha de 41 días!", name: "Grace", role: "Usuaria beta, 17" }
      ]
    },
    cta: { title: "¿Lista para conocer a Malaika?", sub: "Únete a la lista de espera y sé de los primeros cuando lancemos.", button: "Unirme a la lista" }
  },

  features: {
    hero: { eyebrow: "Funciones", title: "Hecha para el día a día, lista para los días difíciles", sub: "Cinco herramientas en una compañera amigable. Descubre cada una abajo." },
    items: [
      { id: "quests", icon: "🎯", tab: "Misiones diarias", title: "Pequeñas victorias, cada día", body: "La hidratación, la medicación y el descanso se convierten en misiones con XP, rachas e insignias. Recordatorios amables, nunca culpa.", bullets: ["Metas diarias personalizadas", "Protectores de racha para días difíciles", "Insignias que celebran la constancia"] },
      { id: "journal", icon: "📈", tab: "Diario del dolor", title: "Ve patrones que antes no veías", body: "Registra dolor, ánimo y desencadenantes en segundos. Malaika convierte tus registros en gráficos claros para compartir con tu médico.", bullets: ["Mapa corporal táctil", "Clima y desencadenantes", "Informe listo para la consulta"] },
      { id: "crisis", icon: "🚨", tab: "Modo crisis", title: "Un toque cuando más importa", body: "Tu plan de crisis personal, las clínicas cercanas y una alerta instantánea a tu círculo de cuidado, todo desde un gran botón.", bullets: ["Tu plan, siempre sin conexión", "Avisa a tus cuidadores al instante", "Indicaciones a la clínica más cercana"] },
      { id: "circle", icon: "🤝", tab: "Círculo de cuidado", title: "Nadie hace esto solo", body: "Invita a familia, amigos y médicos. Ven tu progreso y pueden enviarte ánimos cuando los necesites.", bullets: ["Vista de progreso compartida", "Ánimos y seguimiento", "Panel para médicos"] },
      { id: "learn", icon: "🎓", tab: "Aprende", title: "Lecciones breves", body: "Lecciones de dos minutos sobre cómo vivir bien con anemia falciforme, escritas con médicos y con quienes la viven.", bullets: ["Cuestionarios que dan XP", "Rutas para niños y adolescentes", "Disponible en 3 idiomas"] }
    ],
    vis: {
      days: ["L", "M", "X", "J", "V", "S", "D"], sos: "SOS", alerting: "Avisando a", mom: "Mamá", doc: "Dr. Otieno",
      clinic: "Clínica más cercana · 1,2 km", cheer: "te envió ánimos 🎉",
      quizQ: "¿Qué hábito ayuda a prevenir una crisis de dolor?", quiz: ["Mantenerse hidratado", "Saltarse comidas", "Duchas frías"],
      q1: "Agua", q2: "Medicación", q3: "Descanso"
    },
    extras: {
      eyebrow: "También incluye",
      title: "Los detalles que lo hacen funcionar",
      items: [
        { icon: "📴", title: "Funciona sin conexión", body: "Las misiones y tu plan de crisis funcionan sin internet." },
        { icon: "🔒", title: "Privacidad por diseño", body: "Datos cifrados. Tú eliges quién ve qué." },
        { icon: "🧒🏾", title: "Modo infantil", body: "Visuales amigables y controles parentales para los más pequeños." },
        { icon: "🔔", title: "Recordatorios inteligentes", body: "Avisos que se adaptan a tu día, y no al revés." },
        { icon: "📄", title: "Informes clínicos", body: "Resúmenes en PDF con un toque para tus citas." },
        { icon: "🌍", title: "Multilingüe", body: "Inglés, español y alemán, y más por venir." }
      ]
    }
  },

  solutions: {
    hero: { eyebrow: "Soluciones", title: "Hecha para todo el círculo de cuidado", sub: "Ya sea que vivas con anemia falciforme, cuides a alguien que la tiene o dirijas una clínica, Malaika se adapta a tu rol." },
    groups: [
      { id: "patients", label: "Pacientes", emoji: "🧑🏾", title: "Para quienes viven con ella", intro: "El autocuidado diario es la primera línea. Malaika lo hace más ligero, e incluso divertido.", points: ["Controla hidratación y medicación sin pensarlo", "Detecta tus desencadenantes a tiempo", "Celebra el progreso, no la perfección"], cta: "Unirme como paciente" },
      { id: "caregivers", label: "Cuidadores", emoji: "👩🏾‍👧🏾", title: "Para padres y cuidadores", intro: "Apoya a quienes quieres sin tener que vigilarlos cada minuto.", points: ["Modo infantil con visuales amigables", "Recibe alertas cuando se necesita ayuda", "Ve el progreso de un vistazo"], cta: "Unirme como cuidador" },
      { id: "clinics", label: "Médicos", emoji: "🩺", title: "Para clínicas y programas", intro: "Extiende el cuidado más allá de la consulta con una participación que perdura.", points: ["Tendencias de adherencia y síntomas de un vistazo", "Informes estructurados antes de las visitas", "Datos a nivel poblacional para programas"], cta: "Solicitar un piloto" }
    ],
    compare: {
      title: "Qué obtiene cada rol",
      cols: ["Pacientes", "Cuidadores", "Médicos"],
      rows: [
        { label: "Misiones diarias y rachas", v: [1, 0, 0] },
        { label: "Diario de dolor y síntomas", v: [1, 1, 1] },
        { label: "Alertas de crisis", v: [1, 1, 1] },
        { label: "Controles del modo infantil", v: [0, 1, 0] },
        { label: "Panel de tendencias", v: [0, 0, 1] }
      ]
    }
  },

  about: {
    hero: { eyebrow: "Nosotros", title: "Hacer que el cuidado de la anemia falciforme sea alegre, no solo clínico", sub: "Creemos que el mejor plan de cuidado es el que la gente realmente quiere seguir." },
    mission: {
      eyebrow: "Por qué existimos",
      title: "Cada año nacen más de 300.000 bebés con anemia falciforme.",
      body: "La mayoría nace en el África subsahariana. El autocuidado diario es la primera línea, y es difícil mantenerlo. Malaika lo convierte en algo a lo que quieres volver."
    },
    story: {
      eyebrow: "Nuestra historia",
      title: "De una sala de espera a tu bolsillo",
      paragraphs: [
        "Malaika nació de una observación sencilla: a los pacientes que mejor les iba eran los que habían creado hábitos pequeños y constantes, y lo más difícil era mantenerlos.",
        "Los juegos son brillantes para que la gente vuelva. Nos preguntamos: ¿y si beber agua, tomar la medicación y registrar el dolor fuera tan gratificante como mantener una racha de idiomas?",
        "Hoy diseñamos cada función junto con pacientes, cuidadores y médicos, para que Malaika encaje en vidas reales, no solo en planes de cuidado."
      ]
    },
    values: {
      eyebrow: "Lo que defendemos",
      title: "Nuestros valores",
      items: [
        { icon: "💛", title: "Amabilidad primero", body: "Sin culpa ni vergüenza. Los días malos son parte del camino." },
        { icon: "🤝", title: "Co-diseñado", body: "Hecho con la comunidad, no solo para ella." },
        { icon: "🔬", title: "Base clínica", body: "Contenido revisado por médicos que tratan la anemia falciforme." },
        { icon: "🔒", title: "Privacidad siempre", body: "Tus datos de salud te pertenecen. Punto." }
      ]
    },
    cta: { title: "¿Quieres colaborar con nosotros?", sub: "Trabajamos con clínicas, ONG e investigadores para llevar Malaika a más personas.", button: "Contáctanos" }
  },

  faq: {
    hero: { eyebrow: "Preguntas", title: "Preguntas respondidas", sub: "¿No encuentras lo que buscas? Envíanos un mensaje." },
    search: "Buscar preguntas…",
    all: "Todas",
    empty: "Ninguna pregunta coincide con tu búsqueda.",
    categories: { general: "General", privacy: "Privacidad y datos", clinics: "Para clínicas" },
    items: [
      { cat: "general", q: "¿Malaika sustituye a mi médico?", a: "No. Malaika apoya tu rutina diaria y te ayuda a compartir mejor información con tu equipo de cuidado. Sigue siempre los consejos de tu médico." },
      { cat: "general", q: "¿Es gratis?", a: "La app principal, incluidas misiones, diario y modo crisis, será gratuita para pacientes. Las clínicas y programas pueden acceder a paneles adicionales." },
      { cat: "general", q: "¿Qué idiomas están disponibles?", a: "Inglés, español y alemán en el lanzamiento, y más idiomas en camino." },
      { cat: "general", q: "¿Funciona sin conexión?", a: "Tus misiones y tu plan de crisis funcionan sin conexión y se sincronizan al volver a estar en línea." },
      { cat: "privacy", q: "¿Mis datos de salud son privados?", a: "Sí. Tus datos están cifrados y tú decides exactamente quién de tu círculo de cuidado puede ver qué." },
      { cat: "privacy", q: "¿Puedo borrar mis datos?", a: "Sí. Puedes exportar o borrar definitivamente tus datos en cualquier momento desde los ajustes." },
      { cat: "clinics", q: "¿Cómo puede mi clínica hacer un piloto?", a: "Completa el formulario de colaboración en la página Únete y nuestro equipo organizará una llamada de incorporación." },
      { cat: "clinics", q: "¿Se puede conectar con nuestro sistema de historias clínicas?", a: "Hoy ofrecemos exportaciones seguras y trabajamos en integraciones directas con los sistemas más comunes." }
    ],
    still: { title: "¿Aún tienes preguntas?", button: "Contáctanos" }
  },

  join: {
    hero: { eyebrow: "Únete", title: "Sé de los primeros en conocer a Malaika", sub: "Únete a la lista de espera para acceso anticipado, o contáctanos para colaborar." },
    waitlist: {
      title: "Únete a la lista de espera",
      sub: "Obtén acceso anticipado cuando lancemos.",
      roleLabel: "Soy…",
      roles: { patient: "Paciente", caregiver: "Cuidador/a", clinician: "Médico/a" },
      emailLabel: "Correo electrónico",
      placeholder: "tu@ejemplo.com",
      button: "Unirme",
      success: "¡Estás en la lista! Te contactaremos pronto 💛",
      invalid: "Introduce un correo electrónico válido.",
      error: "Algo salió mal. Inténtalo de nuevo.",
      count: "personas ya esperando"
    },
    contact: {
      title: "Colabora con nosotros",
      sub: "Clínicas, ONG, investigadores y prensa: nos encantaría saber de ti.",
      name: "Nombre", email: "Correo electrónico", org: "Organización (opcional)", message: "Mensaje",
      button: "Enviar mensaje",
      success: "¡Gracias! Responderemos en dos días hábiles.",
      invalid: "Completa tu nombre, un correo válido y un mensaje."
    }
  },

  footer: {
    tagline: "Tu ángel para el cuidado diario.",
    product: "Producto", company: "Empresa", legal: "Legal",
    links: { features: "Funciones", demo: "Pruébalo", clinics: "Para clínicas", faq: "Preguntas", about: "Nosotros", join: "Únete", contact: "Contacto", privacy: "Privacidad", terms: "Términos", disclaimer: "Aviso médico" },
    rights: "Todos los derechos reservados.",
    disclaimer: "Malaika es una compañera de autocuidado y no ofrece diagnóstico ni tratamiento médico."
  }
};
