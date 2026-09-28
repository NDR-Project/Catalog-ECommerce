const products = [
  {
    id: 1,
    name: 'Jamu Kunyit Asem',
    type: 'Minuman Tradisional',
    category: 'jamu',
    price: 5000,
    rating: 4.7,
    reviews: 58,
    benefit: ['kesehatan', 'menyegarkan'],
    badge: 'Kelompok 5',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 2,
    name: 'Jamu Kunyit',
    type: 'Minuman Herbal',
    category: 'jamu',
    price: 10000,
    rating: 4.5,
    reviews: 15,
    benefit: ['alami', 'menyegarkan'],
    badge: 'Kelompok 1',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 3,
    name: 'Jamu Beras Kencur',
    type: 'Minuman Tradisional',
    category: 'jamu',
    price: 5000,
    rating: 4.6,
    reviews: 32,
    benefit: ['manis', 'segar'],
    badge: 'Kelompok 7',
    image: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 4,
    name: 'Sinom',
    type: 'Minuman Tradisional',
    category: 'jamu',
    price: 7000,
    rating: 4.9,
    reviews: 34,
    benefit: ['alami', 'segar'],
    badge: 'Kelompok 6',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=85'
  }
];

const descriptions = {
  1: 'Jamu kunyit asem adalah minuman tradisional yang terbuat dari kunyit, asam jawa, gula merah, dan air. Minuman ini memiliki rasa manis dan asam yang menyegarkan serta bermanfaat untuk membantu menjaga kesehatan tubuh.',
  2: 'Jamu Kunyit merupakan minuman herbal yang dibuat dari kunyit segar pilihan. Rasanya khas dengan perpaduan sedikit pahit dan segar, serta memiliki aroma alami yang kuat. Jamu ini diolah secara sederhana dengan bahan-bahan alami sehingga cocok dinikmati sebagai minuman tradisional sehari-hari.',
  3: 'Minuman jamu tradisional yang terbuat dari beras, kencur, gula merah, dan bahan alami lainnya. Rasanya manis dan segar.',
  4: 'Jamu Sinom adalah jamu yang terbuat dari pucuk daun asam muda (sinom) pilihan yang dipadukan dengan kunyit, temulawak, dan gula asli.'
};

// Isi dengan nomor WhatsApp ketua kelas dalam format internasional tanpa tanda +, spasi, atau strip.
const WHATSAPP_NUMBER = '';

const svgFilterMarkup = `
  <svg class="sr-only" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs>
      <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.02" numOctaves="2" seed="92" result="noise"></feTurbulence>
        <feGaussianBlur in="noise" stdDeviation="1.2" result="blur"></feGaussianBlur>
        <feDisplacementMap in="SourceGraphic" in2="blur" scale="50" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
      </filter>
      <filter id="goo" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"></feGaussianBlur>
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo"></feColorMatrix>
        <feBlend in="SourceGraphic" in2="goo"></feBlend>
      </filter>
      <filter id="knockout" color-interpolation-filters="sRGB">
        <feColorMatrix result="knocked" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 -1 -1 1 0"></feColorMatrix>
        <feComponentTransfer>
          <feFuncR type="linear" slope="3" intercept="-1"></feFuncR>
          <feFuncG type="linear" slope="3" intercept="-1"></feFuncG>
          <feFuncB type="linear" slope="3" intercept="-1"></feFuncB>
        </feComponentTransfer>
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 0 0 0 0 1 1 1 1 1"></feFuncR>
          <feFuncG type="table" tableValues="0 0 0 0 0 1 1 1 1 1"></feFuncG>
          <feFuncB type="table" tableValues="0 0 0 0 0 1 1 1 1 1"></feFuncB>
        </feComponentTransfer>
      </filter>
      <filter id="remove-black" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -255 -255 -255 0 1" result="black-pixels"></feColorMatrix>
        <feMorphology in="black-pixels" operator="dilate" radius="0.5" result="smoothed"></feMorphology>
        <feComposite in="SourceGraphic" in2="smoothed" operator="out"></feComposite>
      </filter>
    </defs>
  </svg>
`;

const state = {
  category: 'all',
  query: '',
  cart: [],
  wishlist: [],
  sort: 'featured',
  userName: 'Amara',
  checkoutItems: [],
  checkoutMode: 'single'
};

const ensureSvgFilters = () => {
  if (document.querySelector('#container-glass')) return;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = svgFilterMarkup;
  document.body.insertBefore(wrapper.firstElementChild, document.body.firstChild);
};

const element = {
  resultCount: document.querySelector('#resultCount'),
  emptyState: document.querySelector('#emptyState'),
  productGrid: document.querySelector('#productGrid'),
  toast: document.querySelector('#toast'),
  autocomplete: document.querySelector('#autocomplete'),
  searchInput: document.querySelector('#searchInput'),
  categoryButtons: document.querySelector('#categoryButtons'),
  sortButton: document.querySelector('#sortButton'),
  catalog: document.querySelector('#catalog'),
  cartCount: document.querySelector('#cartCount'),
  wishlistCount: document.querySelector('#wishlistCount'),
  rfqButton: document.querySelector('#rfqButton'),
  rfqModal: document.querySelector('#rfqModal'),
  closeModalButton: document.querySelector('#closeModal'),
  rfqForm: document.querySelector('#rfqForm'),
  formSuccess: document.querySelector('#formSuccess'),
  productModal: document.querySelector('#productModal'),
  productModalContent: document.querySelector('#productModalContent'),
  closeProductModalButton: document.querySelector('#closeProductModal'),
  newsletterForm: document.querySelector('#newsletterForm'),
  newsletterMessage: document.querySelector('#newsletterMessage'),
  storyButton: document.querySelector('#storyButton'),
  cartButton: document.querySelector('#cartButton'),
  wishlistButton: document.querySelector('#wishlistButton'),
  avatar: document.querySelector('.avatar'),
  dockSheet: document.querySelector('#dockSheet'),
  dockBar: document.querySelector('.dockbar'),
  dockTrack: document.querySelector('.dock-track'),
  dockIndicator: document.querySelector('.dock-indicator'),
  dockItems: document.querySelectorAll('.dock-item'),
  dockCloseButtons: document.querySelectorAll('.dock-close'),
  wishlistEmpty: document.querySelector('#wishlistEmpty'),
  wishlistList: document.querySelector('#wishlistList'),
  cartEmpty: document.querySelector('#cartEmpty'),
  cartTotal: document.querySelector('#cartTotal'),
  cartList: document.querySelector('#cartList'),
  cartCheckoutButton: document.querySelector('#cartCheckoutButton'),
  checkoutModal: document.querySelector('#checkoutModal'),
  closeCheckoutModalButton: document.querySelector('#closeCheckoutModal'),
  checkoutSummary: document.querySelector('#checkoutSummary'),
  checkoutForm: document.querySelector('#checkoutForm'),
  checkoutName: document.querySelector('#checkoutName'),
  checkoutQuantity: document.querySelector('#checkoutQuantity'),
  checkoutQuantityField: document.querySelector('#checkoutQuantityField'),
  checkoutMethod: document.querySelector('#checkoutMethod'),
  checkoutAddress: document.querySelector('#checkoutAddress'),
  accountGreeting: document.querySelector('#accountGreeting'),
  accountSummary: document.querySelector('#accountSummary'),
  accountNameInput: document.querySelector('#accountNameInput'),
  saveAccountName: document.querySelector('#saveAccountName'),
  resetAccountName: document.querySelector('#resetAccountName')
};

const sortLabels = {
  featured: 'Featured',
  'price-low': 'Price: Low to high',
  'price-high': 'Price: High to low'
};

const formatPrice = (value) => `Rp ${new Intl.NumberFormat('id-ID').format(value)}`;

const getCartCount = () => state.cart.reduce((sum, item) => sum + item.qty, 0);
const getCartTotal = () => state.cart.reduce((sum, item) => {
  const product = products.find((entry) => entry.id === item.id);
  return sum + ((product ? product.price : 0) * item.qty);
}, 0);

const setBodyScrollLock = (isLocked) => {
  document.body.style.overflow = isLocked ? 'hidden' : '';
};

const showToast = (message) => {
  const { toast } = element;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('show'), 2400);
};

const getInitials = (name = 'Amara') => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'A';
  return parts.slice(0, 2).map((part) => part[0].toUpperCase()).join('');
};

const updateAccountBadge = () => {
  const avatarText = element.avatar?.querySelector('.dock-icon');
  if (avatarText) {
    avatarText.textContent = getInitials(state.userName);
  }
};

const getVisibleProducts = () => {
  const query = state.query.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === 'all' || product.category === state.category;
    const searchable = `${product.name} ${product.type} ${product.benefit.join(' ')}`.toLowerCase();
    const matchesQuery = !query || searchable.includes(query);
    return matchesCategory && matchesQuery;
  });

  if (state.sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  return filtered;
};

const updateSortButtonLabel = () => {
  element.sortButton.innerHTML = `Sort: ${sortLabels[state.sort]} <span aria-hidden="true">&#8595;</span>`;
};

const renderProducts = () => {
  const visibleProducts = getVisibleProducts();

  element.resultCount.textContent = `Showing ${visibleProducts.length} of ${products.length} products`;
  element.emptyState.hidden = visibleProducts.length > 0;
  element.productGrid.innerHTML = visibleProducts
    .map((product) => {
      const isSaved = state.wishlist.includes(product.id);

      return `
        <article class="product-card" data-product="${product.id}" tabindex="0" role="button" aria-label="Lihat produk ${product.name}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="product-badge">${product.badge}</span>
            <button
              class="wish-card ${isSaved ? 'saved' : ''}"
              data-wishlist="${product.id}"
              type="button"
              aria-label="${isSaved ? 'Remove' : 'Add'} ${product.name} ${isSaved ? 'from' : 'to'} wishlist"
            >
              ${isSaved ? '&#9829;' : '&#9825;'}
            </button>
          </div>
          <div class="product-info">
            <span class="product-type">${product.type}</span>
            <h3 title="${product.name}">${product.name}</h3>
            <div class="product-meta">
              <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>${product.rating} (${product.reviews})</span>
            </div>
            <div class="product-footer">
              <span class="product-price">${formatPrice(product.price)}<small>per 100g</small></span>
              <button class="add-cart" data-cart="${product.id}" type="button" aria-label="Add ${product.name} to cart">+</button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
};

const renderSuggestions = (value) => {
  const query = value.trim();
  const matches = products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 4);

  element.autocomplete.innerHTML = matches
    .map(
      (product) => `
        <button class="suggestion" data-suggestion="${product.name}" type="button">
          <span>${product.name}</span>
          <small>${product.type}</small>
        </button>
      `
    )
    .join('');

  element.autocomplete.classList.toggle('show', Boolean(query) && matches.length > 0);
};

const openDock = (slide) => {
  const slideIndex = { wishlist: 0, cart: 1, account: 2 }[slide];
  const dock = element.dockSheet;
  const dockBar = element.dockBar;
  const track = element.dockTrack;
  const indicator = element.dockIndicator;

  dock.dataset.active = slide;
  dockBar.dataset.active = slide;
  dock.classList.add('open');

  const startTrack = Number.parseFloat(track.dataset.position || '0');
  const startIndicator = Number.parseFloat(indicator.dataset.position || '0');
  const targetTrack = -slideIndex * dock.clientWidth;
  const targetIndicator = slideIndex * (dockBar.querySelector('.nav-actions').clientWidth / 3 + 4);
  const startTime = performance.now();

  window.clearInterval(openDock.interval);

  const animateSwitcher = (now) => {
    const progress = Math.min((now - startTime) / 420, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const trackPosition = startTrack + (targetTrack - startTrack) * eased;
    const indicatorPosition = startIndicator + (targetIndicator - startIndicator) * eased;

    track.style.marginLeft = `${trackPosition}px`;
    indicator.style.marginLeft = `${indicatorPosition}px`;
    track.dataset.position = String(trackPosition);
    indicator.dataset.position = String(indicatorPosition);

    if (progress >= 1) {
      window.clearInterval(openDock.interval);
      track.style.marginLeft = `${targetTrack}px`;
      indicator.style.marginLeft = `${targetIndicator}px`;
      track.dataset.position = String(targetTrack);
      indicator.dataset.position = String(targetIndicator);
    }
  };

  window.clearTimeout(openDock.timer);
  openDock.timer = window.setTimeout(() => {
    openDock.interval = window.setInterval(() => animateSwitcher(performance.now()), 16);
    animateSwitcher(performance.now());
  }, 16);

  element.dockItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.slide === slide);
  });

  if (slide === 'wishlist') renderWishlist();
  if (slide === 'cart') renderCart();
  if (slide === 'account') renderAccount();
};

const closeDock = () => {
  element.dockSheet.classList.remove('open');
};

const closeModal = () => {
  element.rfqModal.hidden = true;
  setBodyScrollLock(false);
};

const openProductModal = (productId) => {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  element.productModalContent.innerHTML = `
    <img class="product-modal-image" src="${product.image}" alt="${product.name}">
    <div class="product-modal-copy">
      <p class="eyebrow"><span></span> ${product.type}</p>
      <h2 id="productModalTitle">${product.name}</h2>
      <div class="product-modal-rating">
        <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        ${product.rating} (${product.reviews} reviews)
      </div>
      <p class="product-description">${descriptions[product.id]}</p>
      <p class="product-modal-price">${formatPrice(product.price)} <small>per 100g</small></p>
      <div class="product-modal-actions">
        <button class="button button-primary" data-buy-now="${product.id}" type="button">Beli sekarang <span aria-hidden="true">&#8594;</span></button>
        <button class="button button-outline" data-modal-cart="${product.id}" type="button">Tambah ke keranjang</button>
      </div>
    </div>
  `;

  element.productModal.hidden = false;
  setBodyScrollLock(true);
};

const closeProductModal = () => {
  element.productModal.hidden = true;
  setBodyScrollLock(false);
};

const renderWishlist = () => {
  const wishlistProducts = products.filter((product) => state.wishlist.includes(product.id));
  element.wishlistEmpty.hidden = wishlistProducts.length > 0;
  element.wishlistList.innerHTML = wishlistProducts.length
    ? wishlistProducts.map((product) => `
      <div class="dock-product-item">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="dock-product-info">
          <strong>${product.name}</strong>
          <span>${product.type}</span>
          <small>${formatPrice(product.price)} • Produk pilihan</small>
        </div>
        <button class="mini-action" type="button" data-wishlist-remove="${product.id}">Remove</button>
      </div>
    `).join('')
    : '';
  element.wishlistCount.textContent = String(state.wishlist.length);
};

const renderCart = () => {
  const cartItems = state.cart
    .map(({ id, qty }) => {
      const product = products.find((entry) => entry.id === id);
      return product ? { ...product, qty } : null;
    })
    .filter(Boolean);

  element.cartEmpty.hidden = cartItems.length > 0;
  element.cartList.innerHTML = cartItems.length
    ? cartItems.map((product) => `
      <div class="dock-product-item">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="dock-product-info">
          <strong>${product.name}</strong>
          <span>${formatPrice(product.price)}</span>
          <small>Produk pilihan</small>
        </div>
        <div class="dock-qty">
          <button type="button" data-cart-adjust="${product.id}" data-direction="-1">-</button>
          <strong>${product.qty}</strong>
          <button type="button" data-cart-adjust="${product.id}" data-direction="1">+</button>
        </div>
        <button class="mini-action danger" type="button" data-cart-remove="${product.id}">Remove</button>
      </div>
    `).join('')
    : '';

  element.cartTotal.textContent = cartItems.length
    ? `${getCartCount()} item${getCartCount() === 1 ? '' : 's'} • ${formatPrice(getCartTotal())}`
    : '0 item';
  element.cartCount.textContent = String(getCartCount());
  element.cartCheckoutButton.hidden = cartItems.length === 0;
};

const renderAccount = () => {
  if (!element.accountGreeting || !element.accountSummary || !element.accountNameInput) return;

  element.accountGreeting.textContent = `Welcome back, ${state.userName}`;
  element.accountSummary.textContent = `${state.wishlist.length} saved rituals • ${getCartCount()} items in basket`;
  element.accountNameInput.value = state.userName;
  updateAccountBadge();
};

const handleAddToCart = (productId) => {
  const product = products.find((entry) => entry.id === productId);
  if (!product) return;

  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    if (product.stock && existingItem.qty >= product.stock) {
      showToast('Stock limit reached for this product');
      return;
    }
    existingItem.qty += 1;
  } else {
    state.cart.push({ id: productId, qty: 1 });
  }

  renderCart();
  renderAccount();
  renderProducts();
  showToast('Added to your botanical basket');
};

const toggleWishlistItem = (productId) => {
  const hasItem = state.wishlist.includes(productId);

  if (hasItem) {
    state.wishlist = state.wishlist.filter((id) => id !== productId);
    showToast('Removed from wishlist');
  } else {
    state.wishlist = [...state.wishlist, productId];
    showToast('Saved to your wishlist');
  }

  renderWishlist();
  renderProducts();
  renderAccount();
};

const handleCategoryClick = (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;

  state.category = button.dataset.category;
  document.querySelectorAll('.category-button').forEach((item) => {
    item.classList.toggle('active', item === button);
  });

  renderProducts();
  element.catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const handleGridClick = (event) => {
  const cartButton = event.target.closest('[data-cart]');
  const wishButton = event.target.closest('[data-wishlist]');

  if (cartButton) {
    event.stopPropagation();
    handleAddToCart(Number(cartButton.dataset.cart));
    return;
  }
  if (wishButton) {
    event.stopPropagation();
    toggleWishlistItem(Number(wishButton.dataset.wishlist));
    return;
  }
  const card = event.target.closest('[data-product]');
  if (card) openProductModal(Number(card.dataset.product));
};

const handleProductCardKeydown = (event) => {
  const card = event.target.closest('[data-product]');
  if (!card || (event.key !== 'Enter' && event.key !== ' ')) return;
  if (event.target.closest('button')) return;
  event.preventDefault();
  openProductModal(Number(card.dataset.product));
};

const renderCheckoutSummary = () => {
  const items = state.checkoutItems.map(({ id, qty }) => {
    const product = products.find((entry) => entry.id === id);
    return product ? { ...product, qty } : null;
  }).filter(Boolean);

  element.checkoutSummary.innerHTML = items.map((product) => `
    <div class="checkout-item">
      <img src="${product.image}" alt="">
      <div><strong>${product.name}</strong><span>${product.badge} · ${product.qty} × ${formatPrice(product.price)}</span></div>
      <b>${formatPrice(product.qty * product.price)}</b>
    </div>
  `).join('') + `<div class="checkout-grand-total"><span>Total</span><strong>${formatPrice(items.reduce((total, item) => total + item.qty * item.price, 0))}</strong></div>`;
};

const openCheckout = (productId = null) => {
  if (productId !== null) {
    state.checkoutMode = 'single';
    state.checkoutItems = [{ id: productId, qty: 1 }];
    element.checkoutQuantityField.hidden = false;
    element.checkoutQuantity.value = '1';
  } else {
    state.checkoutMode = 'cart';
    state.checkoutItems = state.cart.map((item) => ({ ...item }));
    element.checkoutQuantityField.hidden = true;
  }

  if (!state.checkoutItems.length) {
    showToast('Keranjang masih kosong');
    return;
  }

  element.checkoutName.value = state.userName;
  renderCheckoutSummary();
  closeProductModal();
  closeDock();
  element.checkoutModal.hidden = false;
  setBodyScrollLock(true);
  element.checkoutAddress.focus();
};

const closeCheckout = () => {
  element.checkoutModal.hidden = true;
  setBodyScrollLock(false);
};

const submitCheckout = (event) => {
  event.preventDefault();
  const items = state.checkoutItems.map(({ id, qty }) => ({
    product: products.find((entry) => entry.id === id),
    qty: state.checkoutMode === 'single' ? Number(element.checkoutQuantity.value) : qty
  })).filter((item) => item.product);

  if (!items.length || items.some((item) => !Number.isInteger(item.qty) || item.qty < 1)) {
    showToast('Periksa kembali kuantitas pesanan');
    return;
  }

  const productDetails = items.map(({ product, qty }) => `- ${product.name} (${product.badge}) sebanyak ${qty}`).join('\n');
  const message = [
    'Halo Ketua Kelas, saya ingin memesan produk berikut:',
    `Nama akun: ${state.userName}`,
    'Pesanan:',
    productDetails,
    `Metode pemesanan: ${element.checkoutMethod.value}`,
    `Alamat tujuan: ${element.checkoutAddress.value.trim()}`
  ].join('\n');
  const recipient = WHATSAPP_NUMBER.replace(/\D/g, '');
  const whatsappUrl = recipient
    ? `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  closeCheckout();
};

const handleAutocompleteClick = (event) => {
  const suggestion = event.target.closest('[data-suggestion]');
  if (!suggestion) return;

  element.searchInput.value = suggestion.dataset.suggestion;
  state.query = suggestion.dataset.suggestion;
  element.autocomplete.classList.remove('show');
  renderProducts();
};

const handleDockActionClick = (event) => {
  const removeFromWishlist = event.target.closest('[data-wishlist-remove]');
  if (removeFromWishlist) {
    toggleWishlistItem(Number(removeFromWishlist.dataset.wishlistRemove));
    return;
  }

  const adjustButton = event.target.closest('[data-cart-adjust]');
  if (adjustButton) {
    const productId = Number(adjustButton.dataset.cartAdjust);
    const delta = Number(adjustButton.dataset.direction);
    const item = state.cart.find((entry) => entry.id === productId);
    if (!item) return;

    const newQty = item.qty + delta;
    if (newQty <= 0) {
      state.cart = state.cart.filter((entry) => entry.id !== productId);
    } else {
      const product = products.find((entry) => entry.id === productId);
      if (product?.stock && newQty > product.stock) {
        showToast('Stock limit reached for this product');
        return;
      }

      item.qty = newQty;
    }

    renderCart();
    renderProducts();
    renderAccount();
    return;
  }

  const removeCartItem = event.target.closest('[data-cart-remove]');
  if (removeCartItem) {
    const productId = Number(removeCartItem.dataset.cartRemove);
    state.cart = state.cart.filter((item) => item.id !== productId);
    renderCart();
    renderProducts();
    renderAccount();
  }
};

const handleGlobalClick = (event) => {
  if (!event.target.closest('.search-wrap')) element.autocomplete.classList.remove('show');
  if (event.target === element.rfqModal) closeModal();
  if (event.target === element.productModal) closeProductModal();
  if (event.target === element.checkoutModal) closeCheckout();

  const buyNowButton = event.target.closest('[data-buy-now]');
  if (buyNowButton) {
    openCheckout(Number(buyNowButton.dataset.buyNow));
    return;
  }

  const addButton = event.target.closest('[data-modal-cart]');
  if (addButton) {
    handleAddToCart(Number(addButton.dataset.modalCart));
    closeProductModal();
  }
};

const handleDocumentKeydown = (event) => {
  if (event.key !== 'Escape') return;
  if (!element.rfqModal.hidden) { closeModal(); return; }
  if (!element.productModal.hidden) { closeProductModal(); return; }
  if (!element.checkoutModal.hidden) { closeCheckout(); return; }
  closeDock();
};

const saveAccountName = () => {
  const input = document.querySelector('#accountNameInput');
  if (!input) return;

  const trimmed = input.value.trim();
  if (!trimmed) {
    input.value = state.userName;
    showToast('Please enter a valid name');
    return;
  }

  state.userName = trimmed;
  try { localStorage.setItem('nativa-user-name', trimmed); } catch (error) {}
  renderAccount();
  showToast('Profile updated');
};

const resetAccountName = () => {
  state.userName = 'Amara';
  try { localStorage.setItem('nativa-user-name', 'Amara'); } catch (error) {}
  renderAccount();
  showToast('Name reset to default');
};

const initState = () => {
  ensureSvgFilters();

  try {
    const savedName = localStorage.getItem('nativa-user-name');
    if (savedName) state.userName = savedName;
  } catch (error) {}

  element.wishlistCount.textContent = String(state.wishlist.length);
  element.cartCount.textContent = String(getCartCount());
  updateSortButtonLabel();
  renderProducts();
  renderWishlist();
  renderCart();
  renderAccount();
};

element.categoryButtons.addEventListener('click', handleCategoryClick);
element.productGrid.addEventListener('click', handleGridClick);
element.productGrid.addEventListener('keydown', handleProductCardKeydown);
element.searchInput.addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  renderSuggestions(state.query);
  renderProducts();
});
element.autocomplete.addEventListener('click', handleAutocompleteClick);
document.addEventListener('click', handleGlobalClick);
document.addEventListener('click', handleDockActionClick);

element.sortButton.addEventListener('click', () => {
  const options = ['featured', 'price-low', 'price-high'];
  const currentIndex = options.indexOf(state.sort);
  state.sort = options[(currentIndex + 1) % options.length];
  updateSortButtonLabel();
  renderProducts();
});

element.rfqButton.addEventListener('click', () => {
  element.rfqModal.hidden = false;
  setBodyScrollLock(true);
  element.rfqModal.querySelector('input').focus();
});

element.closeModalButton.addEventListener('click', closeModal);

element.rfqForm.addEventListener('submit', (event) => {
  event.preventDefault();
  element.formSuccess.hidden = false;
  event.target.querySelector('button[type="submit"]').disabled = true;
  showToast('Your wholesale inquiry is on its way');
  window.setTimeout(closeModal, 1800);
});

element.closeProductModalButton.addEventListener('click', closeProductModal);
element.closeCheckoutModalButton.addEventListener('click', closeCheckout);
element.checkoutForm.addEventListener('submit', submitCheckout);
element.checkoutQuantity.addEventListener('input', () => {
  const quantity = Math.max(1, Number(element.checkoutQuantity.value) || 1);
  state.checkoutItems = [{ ...state.checkoutItems[0], qty: quantity }];
  renderCheckoutSummary();
});
element.cartCheckoutButton.addEventListener('click', () => openCheckout());

element.newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  element.newsletterMessage.textContent = 'You are on the list. Welcome to the ritual.';
  event.target.reset();
});

element.storyButton.addEventListener('click', () => showToast('Our botanicals are sourced from 14 Indonesian farming communities'));

element.cartButton.addEventListener('click', () => openDock('cart'));
element.wishlistButton.addEventListener('click', () => openDock('wishlist'));
element.avatar.addEventListener('click', () => openDock('account'));
element.dockCloseButtons.forEach((button) => button.addEventListener('click', closeDock));
document.addEventListener('keydown', handleDocumentKeydown);

element.saveAccountName?.addEventListener('click', saveAccountName);
element.resetAccountName?.addEventListener('click', resetAccountName);
element.accountNameInput?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') saveAccountName();
});

initState();
