// ============================================================
//  TAAFFE VINTAGE — SITE LOGIC
//  This file handles rendering, filtering, the policy modal,
//  and auto-hiding sold items after 30 days.
//  You shouldn't need to edit this — only edit pieces.js.
// ============================================================

(function () {
  // ---------- 30-day sold-piece filtering ----------
  function isPieceVisible(piece) {
    if (piece.status !== 'sold') return true;
    if (!piece.soldDate) return true; // no date = stays visible
    const soldDate = new Date(piece.soldDate);
    if (isNaN(soldDate.getTime())) return true; // invalid date = stays visible
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return soldDate > thirtyDaysAgo;
  }

  // Pre-filter the master list once
  const visiblePieces = pieces.filter(isPieceVisible);

  // ---------- Shape rendering for placeholder illustrations ----------
  function renderShape(shape, palette) {
    const bg = '#F7F7F2';
    const [c1, c2 = c1, c3 = c2] = palette || [c1, c1, c1];
    const shapes = {
      tallboy: `<rect x="90" y="40" width="220" height="360" fill="${c1}"/><rect x="90" y="40" width="220" height="360" fill="url(#pg1)"/><g stroke="${bg}" stroke-width="1" fill="none" opacity="0.6"><line x1="90" y1="110" x2="310" y2="110"/><line x1="90" y1="180" x2="310" y2="180"/><line x1="90" y1="250" x2="310" y2="250"/><line x1="90" y1="320" x2="310" y2="320"/></g><g fill="${c3}"><circle cx="200" cy="75" r="3"/><circle cx="200" cy="145" r="3"/><circle cx="200" cy="215" r="3"/><circle cx="200" cy="285" r="3"/><circle cx="200" cy="360" r="3"/></g><rect x="80" y="395" width="240" height="8" fill="${c2}"/><rect x="85" y="400" width="10" height="20" fill="${c1}"/><rect x="305" y="400" width="10" height="20" fill="${c1}"/>`,
      dresser: `<rect x="60" y="120" width="280" height="240" fill="${c1}"/><rect x="60" y="120" width="280" height="240" fill="url(#pg1)"/><g stroke="${bg}" stroke-width="1" fill="none" opacity="0.5"><line x1="60" y1="200" x2="340" y2="200"/><line x1="60" y1="280" x2="340" y2="280"/><line x1="200" y1="120" x2="200" y2="200"/><line x1="200" y1="280" x2="200" y2="360"/></g><g fill="${c3}"><rect x="130" y="155" width="16" height="4"/><rect x="254" y="155" width="16" height="4"/><rect x="192" y="235" width="16" height="4"/><rect x="130" y="315" width="16" height="4"/><rect x="254" y="315" width="16" height="4"/></g><rect x="60" y="360" width="10" height="30" fill="${c1}"/><rect x="330" y="360" width="10" height="30" fill="${c1}"/>`,
      desk: `<rect x="50" y="140" width="300" height="30" fill="${c1}"/><rect x="70" y="170" width="260" height="180" fill="${c2}"/><rect x="70" y="170" width="260" height="180" fill="url(#pg1)"/><rect x="85" y="190" width="110" height="70" fill="${c1}" opacity="0.7"/><rect x="205" y="190" width="110" height="70" fill="${c1}" opacity="0.7"/><rect x="85" y="275" width="230" height="60" fill="${c1}" opacity="0.7"/><g fill="${c3}"><circle cx="140" cy="225" r="2"/><circle cx="260" cy="225" r="2"/><rect x="195" y="303" width="10" height="3"/></g><rect x="60" y="350" width="8" height="40" fill="${c1}"/><rect x="332" y="350" width="8" height="40" fill="${c1}"/>`,
      credenza: `<rect x="40" y="160" width="320" height="180" fill="${c1}"/><rect x="40" y="160" width="320" height="180" fill="url(#pg1)"/><g stroke="${bg}" stroke-width="1" fill="none" opacity="0.5"><line x1="140" y1="160" x2="140" y2="340"/><line x1="260" y1="160" x2="260" y2="340"/></g><g fill="${c3}" opacity="0.8"><rect x="85" y="245" width="10" height="3"/><rect x="195" y="245" width="10" height="3"/><rect x="305" y="245" width="10" height="3"/></g><line x1="50" y1="340" x2="60" y2="380" stroke="${c2}" stroke-width="4"/><line x1="340" y1="340" x2="350" y2="380" stroke="${c2}" stroke-width="4"/>`,
      chair: `<path d="M130 120 Q130 80, 170 80 L230 80 Q270 80, 270 120 L270 240 L130 240 Z" fill="${c1}"/><path d="M130 120 Q130 80, 170 80 L230 80 Q270 80, 270 120 L270 240 L130 240 Z" fill="url(#pg1)"/><g stroke="${bg}" stroke-width="0.8" fill="none" opacity="0.5"><line x1="155" y1="100" x2="155" y2="230"/><line x1="180" y1="90" x2="180" y2="230"/><line x1="200" y1="85" x2="200" y2="230"/><line x1="220" y1="90" x2="220" y2="230"/><line x1="245" y1="100" x2="245" y2="230"/><line x1="130" y1="140" x2="270" y2="140"/><line x1="130" y1="180" x2="270" y2="180"/></g><rect x="120" y="240" width="160" height="18" fill="${c2}"/><g fill="${c1}"><rect x="125" y="258" width="10" height="120"/><rect x="265" y="258" width="10" height="120"/><rect x="195" y="258" width="10" height="100"/></g><path d="M120 258 Q100 300, 130 380" stroke="${c2}" stroke-width="6" fill="none"/><path d="M280 258 Q300 300, 270 380" stroke="${c2}" stroke-width="6" fill="none"/>`,
      nightstand: `<rect x="50" y="180" width="140" height="180" fill="${c1}"/><rect x="50" y="180" width="140" height="180" fill="url(#pg1)"/><rect x="210" y="180" width="140" height="180" fill="${c1}"/><rect x="210" y="180" width="140" height="180" fill="url(#pg1)"/><g stroke="${bg}" stroke-width="0.8" fill="none" opacity="0.5"><line x1="50" y1="250" x2="190" y2="250"/><line x1="210" y1="250" x2="350" y2="250"/></g><g fill="${c2}"><rect x="112" y="215" width="16" height="3"/><rect x="112" y="300" width="16" height="3"/><rect x="272" y="215" width="16" height="3"/><rect x="272" y="300" width="16" height="3"/></g><rect x="55" y="360" width="6" height="20" fill="${c1}"/><rect x="179" y="360" width="6" height="20" fill="${c1}"/><rect x="215" y="360" width="6" height="20" fill="${c1}"/><rect x="339" y="360" width="6" height="20" fill="${c1}"/>`,
      vanity: `<ellipse cx="200" cy="110" rx="70" ry="90" fill="${c1}" opacity="0.4"/><ellipse cx="200" cy="110" rx="62" ry="82" fill="${bg}"/><rect x="100" y="200" width="200" height="130" fill="${c1}"/><rect x="100" y="200" width="200" height="130" fill="url(#pg1)"/><g stroke="${bg}" stroke-width="0.8" fill="none" opacity="0.6"><line x1="100" y1="245" x2="300" y2="245"/><line x1="200" y1="245" x2="200" y2="330"/></g><g fill="${c3}"><circle cx="150" cy="225" r="2"/><circle cx="250" cy="225" r="2"/><circle cx="150" cy="285" r="2"/><circle cx="250" cy="285" r="2"/></g><path d="M110 330 Q105 360, 115 385" stroke="${c2}" stroke-width="5" fill="none"/><path d="M290 330 Q295 360, 285 385" stroke="${c2}" stroke-width="5" fill="none"/>`,
      table: `<rect x="40" y="180" width="320" height="25" fill="${c1}"/><rect x="40" y="180" width="320" height="25" fill="url(#pg1)"/><rect x="70" y="205" width="8" height="175" fill="${c2}"/><rect x="322" y="205" width="8" height="175" fill="${c2}"/><rect x="60" y="375" width="28" height="10" fill="${c2}"/><rect x="312" y="375" width="28" height="10" fill="${c2}"/><line x1="78" y1="250" x2="322" y2="250" stroke="${c2}" stroke-width="3"/>`,
      wingback: `<path d="M120 90 Q120 60, 150 60 L160 60 Q170 60, 170 80 L170 260 L120 260 Z" fill="${c1}"/><path d="M280 90 Q280 60, 250 60 L240 60 Q230 60, 230 80 L230 260 L280 260 Z" fill="${c1}"/><rect x="140" y="80" width="120" height="200" fill="${c2}"/><rect x="140" y="80" width="120" height="200" fill="url(#pg1)"/><path d="M115 280 L285 280 L295 320 L105 320 Z" fill="${c1}"/><g fill="${c3}" opacity="0.7"><circle cx="170" cy="150" r="2"/><circle cx="200" cy="150" r="2"/><circle cx="230" cy="150" r="2"/><circle cx="170" cy="210" r="2"/><circle cx="200" cy="210" r="2"/><circle cx="230" cy="210" r="2"/></g><rect x="120" y="320" width="10" height="50" fill="#2a1810"/><rect x="270" y="320" width="10" height="50" fill="#2a1810"/>`
    };
    return `<svg viewBox="0 0 400 440" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="400" height="440" fill="${bg}"/><defs><pattern id="pg1" width="4" height="40" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="40" stroke="${c3}" stroke-opacity="0.3" stroke-width="0.7"/><line x1="2" y1="0" x2="2" y2="40" stroke="${bg}" stroke-opacity="0.15" stroke-width="0.4"/></pattern></defs>${shapes[shape] || ''}<ellipse cx="200" cy="410" rx="150" ry="6" fill="${c1}" opacity="0.15"/></svg>`;
  }

  // ---------- Card creation ----------
  const igOverlay = `<div class="piece-overlay"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>View on Instagram</span></div>`;

  function createCard(p, index) {
    const hasLink = p.instagramUrl && p.instagramUrl.length > 0 && p.status !== 'kept';
    const tagName = hasLink ? 'a' : 'div';

    const card = document.createElement(tagName);
    card.className = 'piece reveal' + (p.status === 'sold' ? ' is-sold' : '') + (hasLink ? '' : ' no-link');
    if (hasLink) {
      card.setAttribute('href', p.instagramUrl);
      card.setAttribute('target', '_blank');
      card.setAttribute('rel', 'noopener');
    }
    card.style.transitionDelay = `${(index % 9) * 60}ms`;

    let tagHtml = '';
    if (p.status === 'sold') tagHtml = '<span class="piece-tag sold">Sold</span>';
    else if (p.status === 'drop') tagHtml = '<span class="piece-tag drop">Price drop</span>';
    else if (p.status === 'kept') tagHtml = '<span class="piece-tag">Not for sale</span>';
    else tagHtml = '<span class="piece-tag">Available</span>';

    const priceHtml = p.oldPrice
      ? `<span style="color: var(--muted); text-decoration: line-through; font-size: 14px; margin-right: 6px;">${p.oldPrice}</span>${p.price}`
      : p.price;

    const imgHtml = p.image && p.image.length > 0
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy"/>`
      : renderShape(p.shape, p.palette);

    card.innerHTML = `
      ${tagHtml}
      <div class="piece-img">
        ${imgHtml}
        ${hasLink ? igOverlay : ''}
      </div>
      <div class="piece-info">
        <div>
          <div class="piece-name">${p.name}</div>
          <div class="piece-meta">${p.era}</div>
        </div>
        <div class="piece-price">${priceHtml}</div>
      </div>
    `;
    return card;
  }

  // ---------- Reveal-on-scroll observer ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  function attachReveal() {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
  }

  // ---------- Homepage rendering (6 featured) ----------
  function renderHomepageGrid() {
    const grid = document.getElementById('pieceGrid');
    if (!grid) return;

    // If we're on the homepage (path is / or index.html), only show featured
    const path = window.location.pathname;
    const isHomepage = path === '/' || path.endsWith('/index.html') || path === '/index.html' || path.endsWith('/');

    if (!isHomepage) return; // available.html handles itself

    const featured = visiblePieces.filter(p => p.featured).slice(0, 6);
    grid.innerHTML = '';
    featured.forEach((p, i) => grid.appendChild(createCard(p, i)));
    attachReveal();
  }

  // ---------- Available page rendering with filters ----------
  let activeFilters = { category: 'all', status: 'all' };

  function pieceMatchesFilters(p) {
    if (activeFilters.category !== 'all' && p.category !== activeFilters.category) return false;
    if (activeFilters.status === 'all') {
      // Show available, drop, and recently-sold (kept items don't show on available page)
      return p.status !== 'kept';
    }
    if (activeFilters.status === 'available') return p.status === 'available';
    if (activeFilters.status === 'drop') return p.status === 'drop';
    if (activeFilters.status === 'sold') return p.status === 'sold';
    return true;
  }

  function renderAvailableGrid() {
    const grid = document.getElementById('pieceGrid');
    const emptyState = document.getElementById('emptyState');
    const filterCount = document.getElementById('filterCount');
    if (!grid) return;

    // Only run on available page (when filter UI exists)
    if (!document.getElementById('categoryPills')) return;

    const filtered = visiblePieces.filter(pieceMatchesFilters);
    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      grid.style.display = 'grid';
      if (emptyState) emptyState.style.display = 'none';
      filtered.forEach((p, i) => grid.appendChild(createCard(p, i)));
    }

    if (filterCount) {
      const word = filtered.length === 1 ? 'piece' : 'pieces';
      filterCount.textContent = `${filtered.length} ${word}`;
    }

    attachReveal();
  }

  function setupFilters() {
    const allPills = document.querySelectorAll('.pill');
    if (!allPills.length) return;

    allPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const filterType = pill.dataset.filter;
        const filterValue = pill.dataset.value;

        // Deactivate siblings
        document.querySelectorAll(`.pill[data-filter="${filterType}"]`).forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        activeFilters[filterType] = filterValue;
        renderAvailableGrid();
      });
    });
  }

  // ---------- Policy modal ----------
  function setupPolicyModal() {
    const modal = document.getElementById('policyModal');
    if (!modal) return;

    const openButtons = document.querySelectorAll('[data-open-policy]');
    const closeButtons = modal.querySelectorAll('[data-close-policy]');

    function openModal(e) {
      if (e) e.preventDefault();
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }
    function closeModal() {
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    openButtons.forEach(btn => btn.addEventListener('click', openModal));
    closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
    });
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', () => {
    renderHomepageGrid();
    renderAvailableGrid();
    setupFilters();
    setupPolicyModal();
    attachReveal();
  });
})();
