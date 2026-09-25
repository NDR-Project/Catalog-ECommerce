const products = [
  {
    id: 1,
    name: 'Golden Hour Turmeric Latte',
    type: 'Superfoods',
    category: 'superfoods',
    price: 128000,
    rating: 4.9,
    reviews: 128,
    benefit: ['immunity', 'energy'],
    badge: '100% Organic',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 2,
    name: 'Moonflower Calm Tea',
    type: 'Botanical tea',
    category: 'teas',
    price: 89000,
    rating: 4.8,
    reviews: 96,
    benefit: ['calm'],
    badge: 'BPOM',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 3,
    name: 'Sari Jahe Red Ginger',
    type: 'Modern jamu',
    category: 'jamu',
    price: 76000,
    rating: 4.9,
    reviews: 214,
    benefit: ['immunity', 'digestion'],
    badge: 'Best seller',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 4,
    name: 'Cacao Adaptogen Mix',
    type: 'Superfoods',
    category: 'superfoods',
    price: 149000,
    rating: 4.7,
    reviews: 64,
    benefit: ['energy', 'calm'],
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 5,
    name: 'Lemongrass Digest Tonic',
    type: 'Modern jamu',
    category: 'jamu',
    price: 68000,
    rating: 4.8,
    reviews: 87,
    benefit: ['digestion'],
    badge: 'BPOM',
    image: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 6,
    name: 'Rosella Radiance Elixir',
    type: 'Botanical tea',
    category: 'teas',
    price: 95000,
    rating: 4.9,
    reviews: 153,
    benefit: ['immunity'],
    badge: '100% Organic',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 7,
    name: 'Ashwagandha Daily Drops',
    type: 'Supplements',
    category: 'supplements',
    price: 185000,
    rating: 4.6,
    reviews: 42,
    benefit: ['calm', 'energy'],
    badge: 'Vegan',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 8,
    name: 'Moringa Green Superleaf',
    type: 'Supplements',
    category: 'supplements',
    price: 112000,
    rating: 4.8,
    reviews: 76,
    benefit: ['immunity', 'energy'],
    badge: '100% Organic',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=85'
  },
 {
    id: 8,
    name: 'Moringa Blue SuperSpeed',
    type: 'Supplements',
    category: 'supplements',
    price: 112000,
    rating: 4.8,
    reviews: 76,
    benefit: ['immunity', 'energy'],
    badge: '100% Organic',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=85'
  }
];

const descriptions = {
  1: 'A warming blend of turmeric, ginger, cinnamon, and black pepper for a comforting daily ritual that supports a balanced immune response.',
  2: 'A soft evening infusion of chamomile, butterfly pea, and pandan leaf, blended to help you slow down and settle into rest.',
  3: 'Indonesian red ginger meets palm sugar and lime in a bright, warming jamu concentrate for everyday comfort and digestion.',
  4: 'Deep cacao, maca, and ashwagandha create a naturally rich drink mix for steady energy without the sharp edges.',
  5: 'Fragrant lemongrass, fennel, and young coconut vinegar make a refreshing tonic designed for a lighter, happier gut.',
  6: 'Tart rosella petals, hibiscus, and wild honey create a vivid ruby tea rich in antioxidants and bright botanical character.',
  7: 'A measured botanical extract with ashwagandha and holy basil for a grounded addition to busy daily routines.',
  8: 'Fresh moringa leaf powder, gently dried to preserve its earthy flavor and nutrient-dense green goodness.'
};

const state = {
  category: 'all',
  query: '',
  cart: [],
  wishlist: [],
  sort: 'featured',
  userName: 'Amara'
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
        <article class="product-card">
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
              <button class="product-details" data-details="${product.id}" type="button">View description</button>
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
      <button class="button button-primary" data-modal-cart="${product.id}" type="button">
        Add to cart <span aria-hidden="true">&#8594;</span>
      </button>
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
          <small>${formatPrice(product.price)} • ${product.stock} in stock</small>
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
          <small>${product.stock} available</small>
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
    if (existingItem.qty >= product.stock) {
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
  const detailsButton = event.target.closest('[data-details]');

  if (cartButton) handleAddToCart(Number(cartButton.dataset.cart));
  if (wishButton) toggleWishlistItem(Number(wishButton.dataset.wishlist));
  if (detailsButton) openProductModal(Number(detailsButton.dataset.details));
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
      if (product && newQty > product.stock) {
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
