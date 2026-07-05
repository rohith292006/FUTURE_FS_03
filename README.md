# 🍰 Amudham Bakery — Business Website & Online Ordering Demo

**Task 3 · Future Interns Full Stack Web Development Fellowship**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Site-7A2131?style=for-the-badge)](https://rohith292006.github.io/FUTURE_FS_03/)
[![Repository](https://img.shields.io/badge/Repository-FUTURE_FS_03-181717?style=for-the-badge&logo=github)](https://github.com/rohith292006/FUTURE_FS_03)

Amudham Bakery has been running out of Jaihindpuram, Madurai since 1972 — but never had a website. For Task 3 of the Future Interns fellowship, I picked them as my real local business and built one from scratch: a site that shows off the menu, tells the bakery's story, and makes it easy for someone to actually place an order instead of just reading about the place.

It's a single-page site with a category-based menu, a working cart, and a pickup/delivery checkout flow, styled with a warm maroon-and-gold look that fits a bakery rather than a generic template.

---

## 🌐 Live Demo

| Interface | Link |
| --- | --- |
| **Bakery Website (Live)** | [Open Live](https://rohith292006.github.io/FUTURE_FS_03/) |
| **GitHub Repository** | [FUTURE_FS_03](https://github.com/rohith292006/FUTURE_FS_03) |

**Hosting Stack:**
* Frontend → GitHub Pages
* Backend → None (fully client-side, no server or database required)

---

## 🎯 What I set out to do

* Build a website a real bakery owner could actually be pitched, not just a class assignment.
* Turn the real business details — menu, pricing, address, hours, contact number — into something clear and easy to trust at a glance.
* Give it a working cart and checkout flow so the pitch isn't just "here's a page," it's "here's how someone would actually order."
* Get the local SEO basics right — meta tags, Open Graph, and schema.org markup — so the site has a real shot at showing up in search and Maps.
* Use the build as a chance to get comfortable with DOM manipulation, event delegation, cart state, and the IntersectionObserver API.
* Cover everything a customer usually calls to ask about: menu, story, gallery, reviews, FAQs, and location.

---

## 🧩 What's actually in it

* **Menu with a real cart**: Tabbed categories (Cakes / Puffs & Snacks / Cookies & Others) pulled from a JS data array, with add/increment/decrement buttons and a cart count badge that updates live.
* **Slide-out cart drawer**: Shows everything you've added, lets you adjust quantities, and keeps a running subtotal.
* **Pickup or delivery checkout**: Pick how you want your order, choose Cash on Delivery / UPI / Card, and get a confirmation with a randomly generated token number — just like getting a receipt at the counter.
* **A marquee that actually loops properly**: Most scrolling tickers show an awkward gap when they reset. This one measures the screen and duplicates its own content in JS so the loop is seamless on any device.
* **FAQ accordion**: Answers to the stuff people usually call and ask — custom cake lead time, delivery area, payment options, bulk orders for events.
* **Real map + click-to-call**: An embedded Google Map pointing to the bakery's actual address, and `tel:` links in the header, hero, footer, and a sticky mobile bar.
* **Scroll-reveal animations**: Sections fade/slide in as you scroll, using IntersectionObserver, and it respects `prefers-reduced-motion` for anyone who's turned that off.
* **No broken images, ever**: Every image has a fallback baked in, so if one fails to load, it quietly swaps to a backup instead of showing a broken icon.
* **Actually responsive**: Not just "it doesn't break on mobile" — there's a dedicated sticky order bar for phones, a collapsing nav, and layouts that adjust cleanly at every size.

---

## 🛠️ Technologies Used

| Technology | Description |
| --- | --- |
| **HTML5** | Semantic structure, SEO meta tags, Open Graph properties, and schema.org `Bakery` structured data. |
| **CSS3** | Custom properties (variables), Flexbox and Grid layouts, keyframe animations, and responsive media queries. |
| **JavaScript (ES6+)** | Handles cart state management, event delegation, DOM rendering from a data array, IntersectionObserver scroll reveals, and dynamic marquee sizing. |
| **Google Fonts** | Baloo 2 (headings) and Work Sans (body text), loaded via CDN. |
| **Google Maps Embed** | Powers the live location map on the "Visit Us" section. |

---

## ⚙️ How it actually works

1. **On load** — fonts pull in from Google's CDN, the menu renders straight from a JS array (`MENU`) into whichever category tab is active, and the marquee measures the screen width so it can duplicate itself just enough to loop without a visible seam.
2. **Browsing the menu** — switching tabs just re-renders the grid for that category. Hitting "Add +" or a quantity stepper updates an in-memory `cart` object, which triggers both the menu and the cart drawer to re-render.
3. **Cart and checkout** — the drawer keeps a live subtotal as you go. Choosing "Delivery" reveals an address field, and picking UPI or Card swaps in the right payment fields underneath.
4. **Placing an order** — checks the cart isn't empty, then shows a confirmation with a random token number, the fulfillment method, and the payment method chosen. It's clearly flagged as a demo — nothing is actually charged.
5. **Scrolling around** — sections tagged `.reveal` animate in as they enter the viewport, and the FAQ only ever keeps one answer open at a time.
6. **On mobile** — the header folds into a hamburger menu, the gallery drops to two columns, and a sticky bar at the bottom gives one-tap access to Call, Directions, and the Cart.

---

## 📁 Project Structure

```
future-fs-03/
│
├── index.html      ← Page structure — header, hero, menu, services, story, gallery, testimonials, FAQ, contact, cart drawer
├── style.css       ← All styling, layout, animations, and responsive breakpoints
├── script.js       ← Menu data, cart logic, checkout flow, FAQ accordion, scroll reveal, marquee
└── README.md       ← Project documentation
```

---

## 🚀 Local Development Setup

> The live demo above is fully functional — this section is only needed if you want to run the project locally for development or testing.

**1. Clone the Repository**
```bash
git clone https://github.com/rohith292006/FUTURE_FS_03.git
cd FUTURE_FS_03
```

**2. Open the Website**

No dependencies or build step required. Open `index.html` directly in your browser, or use a tool like VS Code's Live Server extension:
```bash
npx live-server
```

**3. Deploy on GitHub Pages**
```bash
git add .
git commit -m "Deploy Amudham Bakery site"
git push origin main
```
In GitHub: **Settings → Pages → Source: `main` branch → `/root`** → Save.

---

## ✅ Task 3 Requirements — Checklist

* [x] Real local business chosen and researched
* [x] Home page with a clear value proposition
* [x] Menu / services section with pricing
* [x] About / story section
* [x] Contact & location section with map and click-to-call
* [x] Fully responsive — mobile and desktop
* [x] Fast-loading, clean navigation
* [x] Live demo hosted on GitHub Pages
* [x] Public GitHub repository with source code
* [x] README with project details, setup & deployment steps
* [x] Google Maps embed *(bonus)*
* [x] Call button *(bonus)*
* [x] Photo gallery *(bonus)*
* [x] Customer testimonials *(bonus)*
* [x] Good enough to actually pitch to the owner as a live project

---

## 📌 Where this fits

* Task 3 submission for the Future Interns Full Stack Web Development fellowship.
* A live-project pitch for a real, existing local business — not a hypothetical one.
* Practice in client communication and business problem-solving, not just code.
* A reference build for anyone wanting a menu-driven ordering UI with cart state handled in plain JavaScript, no frameworks.

---

## 👨‍💻 About Me

* **Name:** S. Rohith
* **Program:** Future Interns — Full Stack Web Development Fellowship (Track Code: FS)
* **Submission:** Task 3 — `future-fs-03`
* **What it is:** A real local business website, built and pitched as part of an internship task
* **Runs on:** Just the browser — no backend, no server, no dependencies
* **GitHub:** [rohith292006](https://github.com/rohith292006)
* **Repository:** [github.com/rohith292006/FUTURE_FS_03](https://github.com/rohith292006/FUTURE_FS_03)
* **Email:** rohith20062908@gmail.com

---

*Task 3 · Future Interns Full Stack Web Development Fellowship · 2026*
