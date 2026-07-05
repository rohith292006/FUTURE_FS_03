/* ==========================================================
   AMUDHAM BAKERY — App logic
   Cart state lives in memory for this demo (resets on refresh).
   ========================================================== */

const MENU = [
  // ---- CAKES ----
  { id: "c1", category: "cakes", name: "Chocolate Truffle Cake", desc: "Our most-loved slice — rich, fudgy, and never too sweet.", price: 60, unit: "/ slice", tag: "Bestseller", img: "https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "c2", category: "cakes", name: "Red Velvet Cake", desc: "Velvety soft sponge with a light cream cheese frosting.", price: 65, unit: "/ slice", tag: "Popular", img: "https://images.pexels.com/photos/6133313/pexels-photo-6133313.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "c3", category: "cakes", name: "Honey Cake", desc: "Delicate layers soaked in honey with a soft, malty crumb.", price: 55, unit: "/ slice", tag: "New", img: "https://images.pexels.com/photos/19940993/pexels-photo-19940993.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "c4", category: "cakes", name: "Strawberry Cake", desc: "Light sponge layered with fresh cream and strawberry.", price: 60, unit: "/ 4 pieces", tag: "New", img: "https://images.pexels.com/photos/15071184/pexels-photo-15071184.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "c5", category: "cakes", name: "Apple Cake", desc: "Moist spiced cake loaded with real apple pieces.", price: 10, unit: "/ piece", tag: "New", img: "https://images.pexels.com/photos/31581244/pexels-photo-31581244.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "c6", category: "cakes", name: "Butterscotch Cake", desc: "Crunchy praline bits folded into a soft caramel sponge.", price: 55, unit: "/ slice", tag: "", img: "https://images.pexels.com/photos/2267868/pexels-photo-2267868.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "c7", category: "cakes", name: "Pineapple Cake", desc: "Light, fruity and fresh — a party favourite.", price: 50, unit: "/ slice", tag: "", img: "https://images.pexels.com/photos/34637993/pexels-photo-34637993.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "c8", category: "cakes", name: "Vanilla Sponge Cake", desc: "Classic, fluffy and simple — a lifelong favourite.", price: 45, unit: "/ slice", tag: "", img: "https://images.pexels.com/photos/16037831/pexels-photo-16037831.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "c9", category: "cakes", name: "Custom Birthday Cake", desc: "Tell us the flavour and message — we'll bake it fresh.", price: 350, unit: "/ kg (starts at)", tag: "Made to order", img: "https://images.pexels.com/photos/30770346/pexels-photo-30770346.jpeg?auto=compress&cs=tinysrgb&w=500" },

  // ---- PUFFS & SNACKS ----
  { id: "p1", category: "puffs", name: "Mushroom Puffs", desc: "Flaky pastry stuffed with a spiced mushroom filling.", price: 20, unit: "/ piece", tag: "Fan favourite", img: "https://images.pexels.com/photos/8970177/pexels-photo-8970177.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "p2", category: "puffs", name: "Veg Puffs", desc: "Everyone's after-school snack — light, crispy, filling.", price: 15, unit: "/ piece", tag: "Budget pick", img: "https://images.pexels.com/photos/5847548/pexels-photo-5847548.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "p3", category: "puffs", name: "Egg Puffs", desc: "Soft boiled egg wrapped in golden, flaky pastry.", price: 22, unit: "/ piece", tag: "", img: "https://images.pexels.com/photos/5881018/pexels-photo-5881018.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "p4", category: "puffs", name: "Chicken Puffs", desc: "Juicy spiced chicken filling in golden puff pastry.", price: 28, unit: "/ piece", tag: "New", img: "https://images.pexels.com/photos/5881013/pexels-photo-5881013.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "p5", category: "puffs", name: "Paneer Roll", desc: "Soft roll packed with a mildly spiced paneer filling.", price: 25, unit: "/ piece", tag: "", img: "https://images.pexels.com/photos/5881014/pexels-photo-5881014.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "p6", category: "puffs", name: "Samosa", desc: "The classic crispy triangle, packed with spiced potato filling.", price: 15, unit: "/ piece", tag: "New", img: "https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=500" },

  // ---- COOKIES & OTHERS ----
  { id: "o1", category: "others", name: "Butter Cookies", desc: "Crumbly, buttery, and perfect with evening tea.", price: 15, unit: "/ 4 pcs", tag: "", img: "https://images.pexels.com/photos/1626668/pexels-photo-1626668.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "o2", category: "others", name: "Rusk Pack", desc: "Crisp and lightly sweet — a classic tea-time companion.", price: 30, unit: "/ pack", tag: "", img: "https://images.pexels.com/photos/11307538/pexels-photo-11307538.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "o3", category: "others", name: "Chocolate Brownie", desc: "Dense, fudgy and loaded with chocolate chips.", price: 35, unit: "/ piece", tag: "", img: "https://images.pexels.com/photos/5386663/pexels-photo-5386663.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { id: "o4", category: "others", name: "Bread Loaf", desc: "Soft, fresh-baked bread — baked every morning.", price: 40, unit: "/ loaf", tag: "", img: "https://images.pexels.com/photos/10011796/pexels-photo-10011796.jpeg?auto=compress&cs=tinysrgb&w=500" },
];

const FALLBACK_IMG = "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=500";

// cart = { itemId: quantity }
let cart = {};
let activeCategory = "cakes";

/* ---------- MENU RENDERING ---------- */
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const items = MENU.filter(i => i.category === activeCategory);
  grid.innerHTML = items.map(item => {
    const qty = cart[item.id] || 0;
    return `
      <div class="menu-card">
        <div class="menu-card-img">
          ${item.tag ? `<span class="menu-flavor-tag">${item.tag}</span>` : ""}
          <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
        </div>
        <div class="menu-card-body">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="menu-card-footer">
            <span class="menu-price">₹${item.price} <small style="font-size:0.65em;font-weight:500;">${item.unit}</small></span>
            ${qty > 0
              ? `<div class="qty-stepper">
                   <button data-action="dec" data-id="${item.id}">−</button>
                   <span>${qty}</span>
                   <button data-action="inc" data-id="${item.id}">+</button>
                 </div>`
              : `<button class="add-btn" data-action="add" data-id="${item.id}">Add +</button>`
            }
          </div>
        </div>
      </div>
    `;
  }).join("");
}

document.getElementById("menuTabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");
  activeCategory = tab.dataset.category;
  renderMenu();
});

document.getElementById("menuGrid").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  if (action === "add" || action === "inc") {
    cart[id] = (cart[id] || 0) + 1;
  } else if (action === "dec") {
    cart[id] = (cart[id] || 0) - 1;
    if (cart[id] <= 0) delete cart[id];
  }
  renderMenu();
  renderCart();
});

/* ---------- CART ---------- */
function findItem(id) { return MENU.find(i => i.id === id); }

function renderCart() {
  const itemsEl = document.getElementById("cartItems");
  const footerEl = document.getElementById("cartFooter");
  const countEl = document.getElementById("cartCount");
  const ids = Object.keys(cart);

  const totalCount = ids.reduce((sum, id) => sum + cart[id], 0);
  countEl.textContent = totalCount;
  const mobileCountEl = document.getElementById("mobileCartCount");
  if (mobileCountEl) mobileCountEl.textContent = totalCount;

  if (ids.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty" id="cartEmpty">Your basket is empty. Add a puff or a slice of cake to get started 🍰</p>`;
    footerEl.style.display = "none";
    return;
  }

  footerEl.style.display = "block";
  itemsEl.innerHTML = ids.map(id => {
    const item = findItem(id);
    const qty = cart[id];
    return `
      <div class="cart-line">
        <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
        <div class="cart-line-info">
          <h5>${item.name}</h5>
          <span>₹${item.price} ${item.unit}</span>
        </div>
        <div class="cart-line-actions">
          <button data-action="dec" data-id="${id}">−</button>
          <span>${qty}</span>
          <button data-action="inc" data-id="${id}">+</button>
          <button class="cart-remove" data-action="remove" data-id="${id}">✕</button>
        </div>
      </div>
    `;
  }).join("");

  const subtotal = ids.reduce((sum, id) => sum + findItem(id).price * cart[id], 0);
  document.getElementById("cartSubtotal").textContent = `₹${subtotal}`;
}

document.getElementById("cartItems").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  if (action === "inc") cart[id] = (cart[id] || 0) + 1;
  if (action === "dec") { cart[id] -= 1; if (cart[id] <= 0) delete cart[id]; }
  if (action === "remove") delete cart[id];
  renderCart();
  renderMenu();
});

/* ---------- CART DRAWER TOGGLE ---------- */
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

function openCart() { cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* ---------- PAYMENT METHOD TOGGLE ---------- */
document.querySelectorAll('input[name="payment"]').forEach(radio => {
  radio.addEventListener("change", () => {
    document.getElementById("upiBox").classList.toggle("show", radio.value === "upi" && radio.checked);
    document.getElementById("cardBox").classList.toggle("show", radio.value === "card" && radio.checked);
  });
});

/* ---------- FULFILLMENT (PICKUP / DELIVERY) TOGGLE ---------- */
document.querySelectorAll('input[name="fulfillment"]').forEach(radio => {
  radio.addEventListener("change", () => {
    document.getElementById("deliveryBox").classList.toggle("show", radio.value === "delivery" && radio.checked);
  });
});

/* ---------- PLACE ORDER ---------- */
document.getElementById("placeOrderBtn").addEventListener("click", () => {
  const ids = Object.keys(cart);
  if (ids.length === 0) {
    alert("Your basket is empty — add something tasty first!");
    return;
  }
  const method = document.querySelector('input[name="payment"]:checked').value;
  const fulfillment = document.querySelector('input[name="fulfillment"]:checked').value;
  const tokenNumber = Math.floor(100 + Math.random() * 900);
  const methodLabel = { cod: "Cash on Delivery", upi: "UPI", card: "Card" }[method];
  const fulfillmentLabel = fulfillment === "delivery" ? "Delivery" : "Pickup at counter";
  alert(`🎉 Order placed!\n\nToken No: ${tokenNumber}\nFulfillment: ${fulfillmentLabel}\nPayment method: ${methodLabel}\n\nThis is a demo checkout for a student project — please visit or call the bakery to place a real order.`);
  cart = {};
  renderCart();
  renderMenu();
  closeCart();
});

/* ---------- FAQ ACCORDION ---------- */
document.getElementById("faqList").addEventListener("click", (e) => {
  const question = e.target.closest(".faq-question");
  if (!question) return;
  const item = question.closest(".faq-item");
  const wasOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
  if (!wasOpen) item.classList.add("open");
});

/* ---------- MOBILE STICKY BAR ---------- */
document.getElementById("mobileCartBtn").addEventListener("click", openCart);

/* ---------- SCROLL REVEAL ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ---------- MOBILE NAV ---------- */
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".site-header").classList.toggle("nav-open");
});
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => document.querySelector(".site-header").classList.remove("nav-open"));
});

/* ---------- MARQUEE TICKER (seamless, screen-width aware) ---------- */
function setupMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  const baseHTML = track.innerHTML;
  const viewportWidth = window.innerWidth;

  // Repeat the base content until it's at least as wide as the screen,
  // so the loop never shows a gap or appears to "start from the middle".
  track.innerHTML = baseHTML;
  let safety = 0;
  while (track.scrollWidth < viewportWidth && safety < 12) {
    track.innerHTML += baseHTML;
    safety++;
  }

  // Duplicate the whole (now screen-wide) content once more so a
  // translateX(-50%) animation loops perfectly with no visible seam —
  // like a destination board scrolling continuously right-to-left.
  const oneScreenWidthContent = track.innerHTML;
  track.innerHTML = oneScreenWidthContent + oneScreenWidthContent;

  const singleLoopWidth = track.scrollWidth / 2;
  const pixelsPerSecond = 70;
  const duration = Math.max(singleLoopWidth / pixelsPerSecond, 10);
  track.style.animationDuration = duration + "s";
}

window.addEventListener("load", setupMarquee);
window.addEventListener("resize", () => {
  clearTimeout(window._marqueeResizeTimer);
  window._marqueeResizeTimer = setTimeout(setupMarquee, 300);
});

/* ---------- INIT ---------- */
renderMenu();
renderCart();
