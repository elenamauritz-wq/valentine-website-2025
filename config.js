// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // 3) Name / greeting
    valentineName: "Thijs!",

    // Browser tab title
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // 4) Only one question, 5) Only Yes/No + "Try to say no..."
    questions: {
        first: {
            text: "Will you be my Valentine?",
            yesBtn: "Yes",
            noBtn: "No",
            // Many versions of this template show this as a small/secret/hover hint
            secretAnswer: "Try to say no..."
        }
    },

    // 6) After they say "Yes"
    celebration: {
        title: "Aww! I'm the luckiest homikje!",
        message: "Here is a small note for you.",
        emojis: "💝💖❤️✨"
    },

    // 7) Note content (wire this to your note modal/screen if needed)
    note: {
        text: "Spend this Valentine with me, my love. At 17:00, Saturday, at Archibald Restaurant Bussum."
    },

    // 2) Year = 2026 (kept as an explicit config value)
    year: 2026,

    // Colors (unchanged)
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animations (unchanged)
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // 1) Remove/disable music button
    music: {
        enabled: false,
        autoplay: false,
        musicUrl: "",
        startText: "",
        stopText: "",
        volume: 0.5
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
