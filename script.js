const CONFIG = {
  valentineName: "Thijs!",
  pageTitle: "Will You Be My Valentine? 💝",

  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💓"],
    bears: ["🧸", "🐻"],
  },

  // Only ONE question
  questions: {
    first: {
      text: "Will you be my Valentine?",
      yesBtn: "Yes",
      noBtn: "No",
      secretAnswer: "Try to say no...",
    },
  },

  // After Yes
  celebration: {
    title: "Aww! I'm the luckiest homikje!",
    message: "Here is a small note for you.",
    emojis: "💝💖❤️✨",
  },

  // The note content
  note: {
    text: "Spend this Valentine with me, my love. At 17:00, Saturday, at Archibald Restaurant Bussum.",
  },

  year: 2026,

  colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757",
  },

  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5,
  },

  // Disable music -> removes music button
  music: {
    enabled: false,
    autoplay: false,
    musicUrl: "",
    startText: "",
    stopText: "",
    volume: 0.5,
  },
};

window.VALENTINE_CONFIG = CONFIG;
 
