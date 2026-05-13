BorrowBook

BorrowBook is a modern, full-stack library management and book-sharing platform designed to streamline the process of browsing, borrowing, and tracking books. Built with a focus on seamless user experience, secure database operations, and robust authentication architecture.

🔗 Live URLs
  Frontend Application:[https://borrow-book-henna.vercel.app]
  Backend Server API:[https://borrow-book-server.onrender.com]

---

🎯 Purpose
  The main goal of BorrowBook is to replace outdated tracking systems with a highly performant digital ecosystem. It separates presentation layers from operational logic, allowing users to safely create accounts, manage profiles, track active book rentals, and examine structured catalogs without compromising performance or data consistency.

---

✨ Key Features
  1.Full-Stack Authentication:** Secure email/password register and login workflows alongside Google OAuth integration, completely powered by Better-Auth.
  2.Cross-Origin Security (CORS):** Fine-grained validation handling across Vercel deployments and Render cloud clusters using secure credentials and explicit trusted origin tracking.
  3.Structured Data Handling:** Fully integrated cloud persistence using MongoDB Atlas with reliable document mapping for users, active sessions, and book collections.
  4.Responsive Visual Interface:** Fast, modern, and accessible design layout optimized for both desktop views and mobile displays.


📦 Monorepo & Core NPM Packages Used

🖥️ Frontend Framework & UI Dependencies
1. ext: The core React framework for server-side rendering, static generation, and optimized client routing routing.
2. react & react-dom: Structural interactive state management engine.
3. better-auth (React Client)**: Client utility ecosystem facilitating secure background validation checks      (`get-session`) and direct credential transmission.
4. lucide-react: Svg asset toolkit used for structural clean input design form icons (User, Mail, Lock, Eye, EyeOff).
tailwindcss: Utility-first CSS processing framework for layout structures.
5. animate.css: Global CSS animation library utilized for fluid layout transitions, form cards entry effects, and sleek micro-interactions.

⚙️ Backend & Database Dependencies
1. mongodb: Official driver utilized to establish persistent cluster operations, connection pools, and structure transactional documents.
2. better-auth: Server-side runtime managing user states, cryptographically secure password hashing, session lifecycle, and credential tracking.
3. cors: Express middleware allowing secure cross-domain preflight headers and precise multi-origin authorization control.
