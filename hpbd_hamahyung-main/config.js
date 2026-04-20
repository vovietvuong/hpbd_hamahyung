/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Hương",
  photo: "./img/hamhuong.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "Mình thật sự thích tên của cậu!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Hôm nay là sinh nhật cậu!! :D",
    },
    {
      type: "chatbox",
      message:
        "Chúc mừng sinh nhật cậu, Huỳnh Hàm Hương! 🎂\n\nThật ra mình đã suy nghĩ rất lâu không biết nên nói gì...\nNhưng có một điều mình chắc chắn:\nDù đã lâu không gặp,\ncậu vẫn luôn là một người rất đặc biệt đối với mình.",
      buttonText: "Đợi một lát nhé!",
    },
    {
      type: "ideas",
      lines: [
        "Mình đã định chỉ nói một câu chúc bình thường...",
        "Nhưng như vậy thì không hay lắm.",
        "Mình muốn làm gì đó <strong>đặc biệt hơn</strong>.",
        "Bởi vì...",
        "Cậu không giống bất kỳ ai.",
        "Trong lòng mình, cậu luôn có một vị trí rất riêng.",
      ],
      bigLetters: "SPECIAL",
    },
    {
      type: "quote",
      text: "Càng trân trọng và biết ơn cuộc đời, bạn sẽ càng tìm thấy nhiều lý do để mỉm cười và ăn mừng hơn.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "Chúc cho nụ cười của em sẽ luôn xuất hiện,\nkhông chỉ hôm nay mà là mỗi ngày.\n\nVà nếu có lúc nào đó em buồn,\nthì hãy nhớ rằng...\nvẫn có người luôn âm thầm mong em hạnh phúc.❤️",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Cảm ơn em đã xem hết món quà nhỏ này.\n\nHy vọng nó làm em mỉm cười một chút.😊",
      replayText: "Hoặc ấn vào đây để xem lại lần nữa nhé!❤️",
    },
  ],
};
