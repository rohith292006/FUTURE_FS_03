🍰 Amudham Bakery — Business Website & Online Ordering Demo — S. Rohith

The Amudham Bakery Website is a fully responsive, client-side web application developed using HTML, CSS, and JavaScript for a real local business — Amudham Bakery, Jaihindpuram, Madurai (est. 1972). The site is built as a professional business landing page combined with a functional online ordering demo, designed to show how a real neighbourhood bakery with no existing website can gain a stronger, more trustworthy online presence.

The interface uses a warm bakery-appropriate design language — a maroon-and-gold palette, a scrolling marquee ticker, and scroll-reveal animations — while staying focused on the essentials a real customer needs: what's on the menu, what it costs, and how to order it.

🎯 Objectives of the Project

To design a professional, fully responsive website for a real local business as a live client-pitch project.
To translate real business information (menu, pricing, address, hours, contact) into a clear, trustworthy online presence.
To build a working add-to-cart and checkout flow that simulates a real online ordering experience.
To implement local-business SEO using semantic HTML5, meta tags, Open Graph properties, and schema.org structured data.
To demonstrate JavaScript DOM manipulation, event delegation, state management (cart), and the IntersectionObserver API.
To deliver a complete business profile including menu, services, story, gallery, testimonials, FAQ, and location.

🧩 Key Features

Interactive Menu & Cart System: Category-tabbed menu (Cakes / Puffs & Snacks / Cookies & Others) with add/increment/decrement controls, a live item count badge, and a slide-out cart drawer with running subtotal.
Pickup & Delivery Checkout Flow: Cart supports pickup-or-delivery selection and multiple payment methods (Cash on Delivery, UPI, Card), with a simulated order confirmation and randomly generated token number.
Marquee Ticker: A seamless, screen-width-aware scrolling strip announcing "54 years in business" that dynamically repeats and duplicates its content in JavaScript so the loop never shows a gap on any screen size.
Scroll Reveal Animations: Sections fade/slide into view using the IntersectionObserver API as the visitor scrolls, with `prefers-reduced-motion` support for accessibility.
FAQ Accordion: Expandable question-and-answer list covering custom cake orders, delivery area, payment methods, and bulk/party orders.
Embedded Google Map & Click-to-Call: Live map embed of the bakery's real address plus `tel:` links throughout the header, hero, footer, and a sticky mobile action bar (Call / Directions / Cart).
Fully Responsive Layout: Adapts across desktop, tablet, and mobile using CSS Grid/Flexbox and media queries, with a dedicated sticky mobile order bar replacing the desktop cart button.
Local Business SEO: Descriptive meta tags, Open Graph tags for social previews, and full schema.org `Bakery` structured data (address, phone, hours, price range) for better search and Maps visibility.
Image Fallback Handling: Every image has an `onerror` fallback so a failed load never leaves a broken image icon on the page.

🛠️ Technologies Used

| Technology | Description |
|---|---|
| HTML5 | Semantic page structure, SEO meta tags, Open Graph properties, schema.org JSON-LD, and accessible aria labels. |
| CSS3 | Custom properties (variables), Flexbox and Grid layouts, keyframe animations, and responsive media queries. |
| JavaScript (ES6+) | Cart state management, event delegation, DOM rendering from a data array, IntersectionObserver scroll reveals, and dynamic marquee sizing logic. |
| Google Fonts | Baloo 2 (headings) and Work Sans (body text), loaded via CDN. |
| Google Maps Embed | Live location map for the "Visit Us" section. |

⚙️ Working Methodology

Page Load: Fonts load from CDN. The menu is rendered from a JavaScript data array (`MENU`) into the active category tab. The marquee measures the viewport and duplicates its content until the scrolling loop is seamless.
Menu Interaction: Clicking a category tab re-renders the menu grid for that category. Clicking "Add +" or the quantity stepper updates an in-memory `cart` object and re-renders both the menu and the cart drawer.
Cart & Checkout: The cart drawer shows each item with quantity controls and a live subtotal. Selecting "Delivery" reveals an address field; selecting "UPI" or "Card" reveals the relevant payment fields. Placing an order validates the cart isn't empty, then shows a confirmation with a token number, fulfillment method, and payment method — clearly labelled as a demo checkout.
Scroll Behaviour: As the visitor scrolls, sections marked `.reveal` animate into view via IntersectionObserver. The FAQ accordion opens one answer at a time.
Mobile Behaviour: On narrower screens, the header collapses to a hamburger menu, the gallery grid reduces to two columns, and a sticky bottom bar gives one-tap access to Call, Directions, and Cart.

📁 Project Structure

FUTURE_FS_03/
│
├── index.html      ← Main site structure (header, hero, menu, services, story, gallery, testimonials, FAQ, contact, cart drawer)
├── style.css       ← All styling, layout, animations, and responsive media queries
├── script.js       ← Menu data, cart logic, cart drawer, checkout, FAQ accordion, scroll reveal, marquee
└── README.md       ← Project documentation

🚀 Setup & Deployment

View Locally

# Clone the repository
git clone https://github.com/rohith292006/FUTURE_FS_03.git

# Navigate into the folder
cd FUTURE_FS_03

# Open directly in browser
# Double-click index.html OR run a local server:
npx live-server

Deploy on GitHub Pages

# Push code to GitHub
git add .
git commit -m "Deploy Amudham Bakery site — FUTURE_FS_03"
git push origin main

# In GitHub: Settings → Pages → Source: main branch → / (root) → Save
# Live at: https://rohith292006.github.io/FUTURE_FS_03

✅ Task Requirements Checklist

 Real local business chosen and researched (Amudham Bakery, Jaihindpuram, Madurai)
 Home page with clear value proposition
 Menu / services section with pricing
 About / story section
 Contact & location section with map and click-to-call
 Responsive design — works on mobile & desktop
 Fast-loading, clean navigation
 Live demo hosted on GitHub Pages
 Public GitHub repository with source code
 README with project details, setup & deployment steps
 Bonus: Google Maps embed
 Bonus: Call button
 Bonus: Gallery
 Bonus: Testimonials
 Professional enough to pitch to the business owner as a live project

📌 Applications

Live-project pitch for a real local business as part of the Future Interns Full Stack Web Development track.
Task 3 submission demonstrating client communication, business problem-solving, and front-end development skills.
Reference build for a menu-driven ordering interface with cart state management in vanilla JavaScript.

👨‍💻 Developer Information

Developer: S. Rohith
Track: Full Stack Web Development — Future Interns (Track Code: FS)
Task: Task 3 — FUTURE_FS_03
Institution: SRM Madurai College of Engineering & Technology (SRM MCET)
Project Type: Local Business Website / Internship Task Submission
Target Environment: Client-Side Web Browsers (Standalone — No Backend Required)
LinkedIn: rohith-s-99b914385
GitHub: rohith292006
Email: rohith20062908@gmail.com

Built as Task 3 @ Future Interns · Full Stack Web Development Track · 2026
Still training. Still building. Still leveling up. 🔥
