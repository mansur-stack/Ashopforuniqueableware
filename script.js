// UniqueWare - Asosiy Mahsulotlar Ro'yxati
const products = [
  {
    id: 1,
    name: "Qo'lda yasalgan keramika tarelkalar to'plami",
    category: "ceramics",
    price: 45.0,
    oldPrice: 55.0,
    rating: 4.9,
    reviewCount: 38,
    badge: "sale",
    description: "Noyob qora va oltin rangli glazurali seramika idishlar to'plami (4 dona). Har bir buyum qo'l mehnati mahsuli bo'lib, o'zgacha teksturaga ega.",
    specs: {
      material: "Tabiiy kuydirilgan gil, sirlangan",
      dimensions: "Diametri: 26 sm",
      origin: "Rishton, O'zbekiston"
    },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 2,
    name: "Eksklyuziv Bohemia Kristall Bokal (2 dona)",
    category: "glass",
    price: 34.0,
    oldPrice: null,
    rating: 5.0,
    reviewCount: 24,
    badge: "new",
    description: "Bayramona va tantanali dasturxon uchun nozik va mukammal jilolanuvchi kristall qadahlar to'plami.",
    specs: {
      material: "Yuqori sifatli qo'rg'oshinsiz kristall",
      dimensions: "Hajmi: 450 ml, Balandligi: 24 sm",
      origin: "Chexiya"
    },
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 3,
    name: "Bronza Pichoq va Qoshiqlar To'plami (24 dona)",
    category: "cutlery",
    price: 65.0,
    oldPrice: 80.0,
    rating: 4.8,
    reviewCount: 42,
    badge: "hot",
    description: "Oziq-ovqatbop zanglamaydigan po'latdan ishlangan, matli bronza qoplamali premium dasturxon jihozlari jamlanmasi.",
    specs: {
      material: "18/10 zanglamaydigan po'lat, PVD qoplama",
      dimensions: "6 kishilik to'liq to'plam",
      origin: "Portugaliya"
    },
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 4,
    name: "Marmar Naqshli Seramika Choy To'plami",
    category: "ceramics",
    price: 58.0,
    oldPrice: null,
    rating: 4.9,
    reviewCount: 31,
    badge: "new",
    description: "Tabiiy marmar tosh tomirlari effekti berilgan zamonaviy choynak va 4 dona finjon to'plami.",
    specs: {
      material: "Yuqori haroratda pishirilgan farfor",
      dimensions: "Choynak: 900 ml, Finjonlar: 200 ml",
      origin: "Yaponiya uslubi"
    },
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 5,
    name: "Artisanal To'lqinsimon Salat Kosasi",
    category: "glass",
    price: 28.0,
    oldPrice: 35.0,
    rating: 4.7,
    reviewCount: 19,
    badge: "sale",
    description: "O'ziga xos assimetrik shakldagi, quyosh nurlarida jilolanuvchi nafis shisha kosa.",
    specs: {
      material: "Termobarqaror bo'rtmali shisha",
      dimensions: "Diametri: 24 sm, Chuqurligi: 11 sm",
      origin: "Italiya dizayni"
    },
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 6,
    name: "Minimalist Tabiiy Eman Yog'och Podnos",
    category: "sets",
    price: 39.0,
    oldPrice: null,
    rating: 4.9,
    reviewCount: 27,
    badge: "hot",
    description: "Yuz yillik eman daraxtidan qo'lda silliqlab tayyorlangan va tabiiy zig'ir moyi bilan to'yintirilgan xizmat patnisi.",
    specs: {
      material: "100% tabiiy eman yog'ochi",
      dimensions: "40 x 28 sm",
      origin: "O'zbekiston"
    },
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901044?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 7,
    name: "Skandinavcha Kofe Finjonlari (2 dona)",
    category: "ceramics",
    price: 22.0,
    oldPrice: 28.0,
    rating: 4.8,
    reviewCount: 15,
    badge: "sale",
    description: "Qalin devorli, ichimlik haroratini uzoq saqlovchi rustik uslubdagi kofe va kapuchino finjonlari.",
    specs: {
      material: "Gilli matli sopol",
      dimensions: "Hajmi: 280 ml",
      origin: "Daniya dizayni"
    },
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 8,
    name: "Vintage Oltin Hoshiyali Shampan Qadahlar",
    category: "glass",
    price: 48.0,
    oldPrice: 60.0,
    rating: 5.0,
    reviewCount: 33,
    badge: "hot",
    description: "24-karatli haqiqiy oltin hoshiyaga ega, nozik va uzun oyoqli 4 dona shampan bokallari.",
    specs: {
      material: "Kristall shisha, oltin suvli hoshiya",
      dimensions: "Hajmi: 220 ml",
      origin: "Fransiya"
    },
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 9,
    name: "Qora Matli Steak Pichoqlari To'plami (6 dona)",
    category: "cutlery",
    price: 42.0,
    oldPrice: null,
    rating: 4.9,
    reviewCount: 29,
    badge: "new",
    description: "Maxsus tishli pichoqlar go'sht va pishiriqlarni osongina kesish uchun maxsus charxlangan.",
    specs: {
      material: "Karbonli yapon po'lati",
      dimensions: "Pichoq uzunligi: 23 sm",
      origin: "Yaponiya"
    },
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 10,
    name: "Rustik Zaytun Yog'ochidan Dasturxon To'plami",
    category: "sets",
    price: 52.0,
    oldPrice: null,
    rating: 4.9,
    reviewCount: 18,
    badge: null,
    description: "Qadimiy zaytun daraxtining go'zal tabiiy naqshlari bilan bezatilgan non va pishloq idishi.",
    specs: {
      material: "Zaytun daraxti tanasi",
      dimensions: "Uzunligi: 36 sm",
      origin: "Gretsiya"
    },
    image: "https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 11,
    name: "Terrakota Glazurali Chuchuklik Idishlari",
    category: "ceramics",
    price: 29.0,
    oldPrice: 38.0,
    rating: 4.7,
    reviewCount: 14,
    badge: "sale",
    description: "Murabbo, asal va turli shirinliklar uchun mo'ljallangan 3 bo'lakli nafis sopol to'plam.",
    specs: {
      material: "Katta haroratli terrakota",
      dimensions: "3 dona idish + yog'och taglik",
      origin: "Ispaniya"
    },
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=700"
  },
  {
    id: 12,
    name: "Geometrik Kristal Grafindi To'plam",
    category: "glass",
    price: 75.0,
    oldPrice: 90.0,
    rating: 5.0,
    reviewCount: 46,
    badge: "hot",
    description: "Qimmatbaho viski, sharbat va suv uchun mo'ljallangan og'ir tubli kristal dekanter va 2 stakan.",
    specs: {
      material: "Olmos kesimli og'ir kristall",
      dimensions: "Dekanter: 800 ml, Stakanlar: 300 ml",
      origin: "Chexiya"
    },
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=700"
  }
];

// Holat (State) o'zgaruvchilari - LocalStorage bilan integratsiya
let cart = JSON.parse(localStorage.getItem("uniqueware_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("uniqueware_wishlist")) || [];
let activeCategory = "all";
let currentSort = "default";
let promoApplied = false;
const PROMO_CODE = "UNIQUE10";
const DISCOUNT_PERCENT = 0.10;

// DOM Elementlari
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const searchInput = document.getElementById("searchInput");
const categoryTabs = document.getElementById("categoryTabs");
const sortSelect = document.getElementById("sortSelect");

const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const cartDrawer = document.getElementById("cartDrawer");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartDiscount = document.getElementById("cartDiscount");
const discountLine = document.getElementById("discountLine");
const cartCount = document.getElementById("cartCount");
const promoInput = document.getElementById("promoInput");
const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoMessage = document.getElementById("promoMessage");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistModal = document.getElementById("wishlistModal");
const closeWishlist = document.getElementById("closeWishlist");
const wishlistItems = document.getElementById("wishlistItems");
const wishlistCount = document.getElementById("wishlistCount");

const quickViewModal = document.getElementById("quickViewModal");
const closeQuickView = document.getElementById("closeQuickView");
const quickViewBody = document.getElementById("quickViewBody");

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutSummaryText = document.getElementById("checkoutSummaryText");

const successModal = document.getElementById("successModal");
const successCloseBtn = document.getElementById("successCloseBtn");
const orderNumberEl = document.getElementById("orderNumber");

const overlay = document.getElementById("overlay");
const toastContainer = document.getElementById("toastContainer");
const backToTop = document.getElementById("backToTop");
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");

// Mahsulotlarni ekranga chiqarish (Render)
function renderProducts(list) {
  productGrid.innerHTML = "";
  
  if (list.length === 0) {
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  list.forEach(product => {
    const isLiked = wishlist.includes(product.id);
    const card = document.createElement("div");
    card.classList.add("product-card");

    let badgeHTML = "";
    if (product.badge === "sale") {
      badgeHTML = `<span class="badge-tag badge-sale">Chegirma</span>`;
    } else if (product.badge === "new") {
      badgeHTML = `<span class="badge-tag badge-new">Yangi</span>`;
    } else if (product.badge === "hot") {
      badgeHTML = `<span class="badge-tag badge-hot">Xit</span>`;
    }

    let priceHTML = `<span class="price">$${product.price.toFixed(2)}</span>`;
    if (product.oldPrice) {
      priceHTML = `
        <span class="old-price">$${product.oldPrice.toFixed(2)}</span>
        <span class="price">$${product.price.toFixed(2)}</span>
      `;
    }

    card.innerHTML = `
      ${badgeHTML}
      <button class="wishlist-toggle ${isLiked ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Sevimlilar">
        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>

      <div class="product-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="quickview-btn-overlay" onclick="openQuickView(${product.id})">
          <i class="fa-regular fa-eye"></i> Tez ko'rish
        </button>
      </div>

      <div class="product-info">
        <div>
          <div class="product-meta">
            <span class="product-category">${getCategoryName(product.category)}</span>
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <span>${product.rating} (${product.reviewCount})</span>
            </div>
          </div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        </div>

        <div class="product-footer">
          <div class="price-wrap">
            ${priceHTML}
          </div>
          <button class="add-to-cart" onclick="addToCart(${product.id})">
            <i class="fa-solid fa-cart-plus"></i> Savatga
          </button>
        </div>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

function getCategoryName(categoryKey) {
  const map = {
    ceramics: "Keramika",
    glass: "Kristall & Shisha",
    cutlery: "Oshxona Jihozlari",
    sets: "To'plamlar"
  };
  return map[categoryKey] || "Dasturxon";
}

// Filtrlash va saralash mexanizmi
function getProcessedProducts() {
  let filtered = [...products];

  // Kategoriya bo'yicha filter
  if (activeCategory !== "all") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  // Qidiruv so'zi bo'yicha filter
  const term = searchInput.value.trim().toLowerCase();
  if (term) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      getCategoryName(p.category).toLowerCase().includes(term)
    );
  }

  // Saralash (Sort)
  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
}

function updateProductDisplay() {
  const list = getProcessedProducts();
  renderProducts(list);
}

// Category Tabs bosilganda
categoryTabs.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-btn")) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    activeCategory = e.target.dataset.category;
    updateProductDisplay();
  }
});

// Tashqi kategoriya tanlash (masalan footer'dan)
window.filterByCategory = function(category) {
  activeCategory = category;
  document.querySelectorAll(".tab-btn").forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  updateProductDisplay();
};

// Saralash tanlanganda
sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  updateProductDisplay();
});

// Qidiruv kiritilganda
searchInput.addEventListener("input", () => {
  updateProductDisplay();
});

// Filtrlarni qayta tiklash
resetFilterBtn.addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "all";
  currentSort = "default";
  sortSelect.value = "default";
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === "all");
  });
  updateProductDisplay();
});

// ==================== SAVAT (CART) BOSHQARUVI ====================

function saveCart() {
  localStorage.setItem("uniqueware_cart", JSON.stringify(cart));
  updateCart();
}

function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart();
  showToast(`"${product.name}" savatga qo'shildi!`, "success");
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId, false);
  } else {
    saveCart();
  }
}

function removeFromCart(productId, showNotice = true) {
  const item = cart.find(i => i.id === productId);
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  if (showNotice && item) {
    showToast(`"${item.name}" savatdan o'chirildi.`, "danger");
  }
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Haqiqatan ham savatchangizni tozalashni xohlaysizmi?")) {
    cart = [];
    saveCart();
    showToast("Savatcha tozalandi.", "info");
  }
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let subtotal = 0;
  let totalCount = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>Savatingiz hozircha bo'sh</h4>
        <p>Katalogimizdan xarid qilish uchun eng sara mahsulotlarni tanlang!</p>
      </div>
    `;
    cartSubtotal.innerText = "$0.00";
    cartTotal.innerText = "$0.00";
    cartCount.innerText = "0";
    discountLine.style.display = "none";
    return;
  }

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    totalCount += item.quantity;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="O'chirish">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartCount.innerText = totalCount;
  cartSubtotal.innerText = `$${subtotal.toFixed(2)}`;

  let finalTotal = subtotal;
  if (promoApplied) {
    const discountAmount = subtotal * DISCOUNT_PERCENT;
    finalTotal = subtotal - discountAmount;
    discountLine.style.display = "flex";
    cartDiscount.innerText = `-$${discountAmount.toFixed(2)}`;
  } else {
    discountLine.style.display = "none";
  }

  cartTotal.innerText = `$${finalTotal.toFixed(2)}`;
}

// Promo-kod qo'llash
applyPromoBtn.addEventListener("click", () => {
  const code = promoInput.value.trim().toUpperCase();
  if (!code) {
    promoMessage.className = "promo-message error";
    promoMessage.innerText = "Iltimos, promokodni kiriting!";
    return;
  }

  if (code === PROMO_CODE) {
    promoApplied = true;
    promoMessage.className = "promo-message success";
    promoMessage.innerText = "Tabriklaymiz! 10% chegirma muvaffaqiyatli qo'llandi.";
    showToast("10% chegirma promokodi qabul qilindi!", "success");
    updateCart();
  } else {
    promoMessage.className = "promo-message error";
    promoMessage.innerText = "Noto'g'ri promokod. Qayta urinib ko'ring.";
  }
});

clearCartBtn.addEventListener("click", clearCart);

// Savat Drawer ochish / yopish
function openCartDrawer() {
  cartDrawer.classList.add("open");
  openOverlay();
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  closeOverlay();
}

cartBtn.addEventListener("click", openCartDrawer);
closeCart.addEventListener("click", closeCartDrawer);

// ==================== SEVIMLILAR (WISHLIST) ====================

function saveWishlist() {
  localStorage.setItem("uniqueware_wishlist", JSON.stringify(wishlist));
  updateWishlistBadge();
  updateProductDisplay();
}

function updateWishlistBadge() {
  wishlistCount.innerText = wishlist.length;
}

function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`"${product.name}" sevimlilardan olib tashlandi.`, "info");
  } else {
    wishlist.push(productId);
    showToast(`"${product.name}" sevimlilarga qo'shildi! ❤️`, "success");
  }

  saveWishlist();
}

function openWishlistModal() {
  renderWishlistModal();
  wishlistModal.classList.add("open");
  openOverlay();
}

function closeWishlistModal() {
  wishlistModal.classList.remove("open");
  closeOverlay();
}

function renderWishlistModal() {
  wishlistItems.innerHTML = "";
  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-regular fa-heart" style="font-size: 40px; color: #ddd; margin-bottom: 10px;"></i>
        <h4>Sevimlilar ro'yxati bo'sh</h4>
        <p>O'zingizga yoqqan mahsulotlarga yurakcha belgisini bosing.</p>
      </div>
    `;
    return;
  }

  wishlist.forEach(id => {
    const item = products.find(p => p.id === id);
    if (!item) return;

    const div = document.createElement("div");
    div.classList.add("wishlist-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="wishlist-item-info">
        <h4>${item.name}</h4>
        <span>$${item.price.toFixed(2)}</span>
      </div>
      <div class="wishlist-item-actions">
        <button class="add-to-cart" onclick="addToCart(${item.id}); toggleWishlist(${item.id}); renderWishlistModal();">
          <i class="fa-solid fa-cart-plus"></i> Savatga
        </button>
        <button class="cart-item-remove" onclick="toggleWishlist(${item.id}); renderWishlistModal();" title="O'chirish">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    wishlistItems.appendChild(div);
  });
}

wishlistBtn.addEventListener("click", openWishlistModal);
closeWishlist.addEventListener("click", closeWishlistModal);

// ==================== TEZ KO'RISH (QUICK VIEW) MODAL ====================

let qvCurrentQuantity = 1;

function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  qvCurrentQuantity = 1;
  const isLiked = wishlist.includes(product.id);

  quickViewBody.innerHTML = `
    <div class="qv-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="qv-details">
      <div>
        <span class="qv-category">${getCategoryName(product.category)}</span>
        <h2 class="qv-title">${product.name}</h2>
        <div class="qv-rating">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating} / 5.0 (${product.reviewCount} ta sharh)</span>
        </div>
        <div class="qv-price-box">
          <span class="qv-price">$${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="qv-old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <p class="qv-desc">${product.description}</p>
        
        <div class="qv-specs">
          <div class="qv-specs-row">
            <span>Material:</span>
            <span>${product.specs.material}</span>
          </div>
          <div class="qv-specs-row">
            <span>O'lcham:</span>
            <span>${product.specs.dimensions}</span>
          </div>
          <div class="qv-specs-row">
            <span>Ishlab chiqarilgan:</span>
            <span>${product.specs.origin}</span>
          </div>
        </div>
      </div>

      <div class="qv-actions">
        <div class="qty-controls" style="padding: 4px;">
          <button class="qty-btn" id="qvQtyMinus">-</button>
          <span class="qty-val" id="qvQtyVal">1</span>
          <button class="qty-btn" id="qvQtyPlus">+</button>
        </div>
        <button class="btn primary-btn" id="qvAddToCartBtn" style="flex-grow: 1;">
          <i class="fa-solid fa-bag-shopping"></i> Savatga qo'shish
        </button>
        <button class="icon-btn" onclick="toggleWishlist(${product.id}); openQuickView(${product.id});" title="Sevimlilar">
          <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart" style="color: ${isLiked ? '#e74c3c' : 'inherit'};"></i>
        </button>
      </div>
    </div>
  `;

  document.getElementById("qvQtyMinus").onclick = () => {
    if (qvCurrentQuantity > 1) {
      qvCurrentQuantity--;
      document.getElementById("qvQtyVal").innerText = qvCurrentQuantity;
    }
  };

  document.getElementById("qvQtyPlus").onclick = () => {
    qvCurrentQuantity++;
    document.getElementById("qvQtyVal").innerText = qvCurrentQuantity;
  };

  document.getElementById("qvAddToCartBtn").onclick = () => {
    addToCart(product.id, qvCurrentQuantity);
    closeQuickViewModal();
    openCartDrawer();
  };

  quickViewModal.classList.add("open");
  openOverlay();
}

function closeQuickViewModal() {
  quickViewModal.classList.remove("open");
  closeOverlay();
}

closeQuickView.addEventListener("click", closeQuickViewModal);

// ==================== CHECKOUT (BUYURTMA BERISH) ====================

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Savatingiz bo'sh! Avval mahsulot tanlang.", "danger");
    return;
  }

  closeCartDrawer();
  const totalAmount = cartTotal.innerText;
  const count = cart.reduce((acc, i) => acc + i.quantity, 0);
  checkoutSummaryText.innerText = `Jami: ${count} ta mahsulot - Umumiy qiymat: ${totalAmount}`;
  
  checkoutModal.classList.add("open");
  openOverlay();
});

function closeCheckoutModal() {
  checkoutModal.classList.remove("open");
  closeOverlay();
}

closeCheckout.addEventListener("click", closeCheckoutModal);

// Buyurtmani tasdiqlash
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const city = document.getElementById("custCity").value;
  const address = document.getElementById("custAddress").value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  // Tasodifiy buyurtma ID generatsiya qilish
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  const orderId = `#UW-${randomNum}`;

  orderNumberEl.innerText = orderId;
  closeCheckoutModal();

  // Savatni tozalash
  cart = [];
  promoApplied = false;
  promoInput.value = "";
  promoMessage.innerText = "";
  saveCart();

  // Muvaffaqiyat modali ochish
  successModal.classList.add("open");
  openOverlay();
  checkoutForm.reset();
});

successCloseBtn.addEventListener("click", () => {
  successModal.classList.remove("open");
  closeOverlay();
});

// ==================== ALOQA FORMASI ====================

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cName").value;
  showToast(`Rahmat, ${name}! Xabaringiz qabul qilindi. Tez orada javob beramiz.`, "success");
  contactForm.reset();
});

// ==================== OVERLAY & MODAL GENERAL ====================

function openOverlay() {
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

overlay.addEventListener("click", () => {
  closeCartDrawer();
  closeWishlistModal();
  closeQuickViewModal();
  closeCheckoutModal();
  successModal.classList.remove("open");
  closeOverlay();
});

// ESC tugmasi bosilganda barcha modallarni yopish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCartDrawer();
    closeWishlistModal();
    closeQuickViewModal();
    closeCheckoutModal();
    successModal.classList.remove("open");
    closeOverlay();
  }
});

// ==================== TOAST XABARNOMALARI ====================

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "danger") icon = "fa-circle-exclamation";

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3200);
}

// ==================== MOBIL MENYU & YUQORIGA QAYTISH ====================

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Menyudagi havolalar bosilganda mobil menyuni yopish
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Scroll hodisasi (Header soyasi & Back to Top tugmasi)
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

  // Active nav-link yangilash
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${sectionId}`);
      });
    }
  });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Ilk ishga tushirish (Initialization)
updateProductDisplay();
updateCart();
updateWishlistBadge();

// ==================== TOAST XABARNOMALARI ====================

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "danger") icon = "fa-circle-exclamation";

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3200);
}

// ==================== MOBIL MENYU & YUQORIGA QAYTISH ====================

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Menyudagi havolalar bosilganda mobil menyuni yopish
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Scroll hodisasi (Header soyasi & Back to Top tugmasi)
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

  // Active nav-link yangilash
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${sectionId}`);
      });
    }
  });
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Ilk ishga tushirish (Initialization)
updateProductDisplay();
updateCart();
updateWishlistBadge();

