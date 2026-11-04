/**
 * Better Solutions - Developers & Primary Projects Interactive Page Controller
 */

const DevelopersApp = {
  currentDeveloperId: null,
  activeLightboxImages: [],
  activeLightboxIndex: 0,

  init() {
    this.bindEvents();
    this.handleRouting();
    window.addEventListener('popstate', () => this.handleRouting());
  },

  handleRouting() {
    const params = new URLSearchParams(window.location.search);
    const devId = params.get('id');

    if (devId) {
      this.showDeveloper(devId, false);
    } else {
      this.showCatalog(false);
    }
  },

  bindEvents() {
    // Search input in catalog
    const searchInput = document.getElementById('dev-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.filterDevelopers(e.target.value);
      });
    }

    // Lightbox close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowRight') this.lightboxPrev();
      if (e.key === 'ArrowLeft') this.lightboxNext();
    });
  },

  showCatalog(updateUrl = true) {
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.delete('id');
      history.pushState({}, '', url.pathname);
    }

    this.currentDeveloperId = null;
    document.getElementById('developers-catalog-view')?.classList.remove('hidden');
    document.getElementById('developer-detail-view')?.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderCatalog();
  },

  showDeveloper(devId, updateUrl = true) {
    const dev = typeof getDeveloperById === 'function' ? getDeveloperById(devId) : null;
    if (!dev) {
      this.showCatalog(true);
      return;
    }

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('id', devId);
      history.pushState({ id: devId }, '', url.toString());
    }

    this.currentDeveloperId = devId;
    document.getElementById('developers-catalog-view')?.classList.add('hidden');
    document.getElementById('developer-detail-view')?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderDeveloperDetail(dev);
  },

  renderCatalog(filterQuery = '') {
    const container = document.getElementById('developers-grid');
    if (!container) return;

    const devs = typeof getAllDevelopers === 'function' ? getAllDevelopers() : [];
    const query = filterQuery.trim().toLowerCase();

    const filtered = devs.filter(d => {
      if (!query) return true;
      const matchName = d.name.toLowerCase().includes(query);
      const matchDesc = d.description.toLowerCase().includes(query);
      const matchProjects = d.projects && d.projects.some(p => p.name.toLowerCase().includes(query) || p.location.toLowerCase().includes(query));
      return matchName || matchDesc || matchProjects;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center bg-pure-white rounded-3xl border border-border-gray p-8">
          <span class="material-symbols-outlined text-6xl text-secondary mb-3">domain_disabled</span>
          <h3 class="font-bold text-xl text-on-surface mb-2">لم نتمكن من إيجاد مطور بهذا الاسم</h3>
          <p class="text-secondary text-sm mb-6">جرب البحث بكلمات أخرى أو تصفح قائمة المطورين المعتمدين.</p>
          <button onclick="DevelopersApp.resetSearch()" class="btn-primary px-6 py-2.5 rounded-xl text-xs font-bold">إعادة ضبط البحث</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(dev => {
      const projectsCount = dev.projects ? dev.projects.length : 0;
      const projectsTags = (dev.projects || []).slice(0, 3).map(p => `
        <span class="bg-surface-container text-on-surface text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-border-gray">
          ${p.name}
        </span>
      `).join('');

      return `
        <article class="bg-pure-white rounded-3xl border border-border-gray overflow-hidden hover-gold-glow flex flex-col group transition-all duration-300 hover:border-primary-container shadow-sm">
          <div class="relative h-48 img-zoom-container bg-surface-container-high overflow-hidden">
            <img class="w-full h-full object-cover" src="${dev.coverImage}" alt="${dev.name}" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent"></div>
            
            <div class="absolute top-4 right-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-extrabold shadow-md flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">verified</span>
              <span>${dev.badge || 'مطور معتمد'}</span>
            </div>

            <div class="absolute bottom-4 right-4 flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-pure-white shadow-lg flex items-center justify-center font-black text-primary text-base border border-border-gray">
                ${dev.logoText || 'DEV'}
              </div>
              <div class="text-pure-white">
                <h3 class="font-black text-lg leading-snug drop-shadow">${dev.name}</h3>
                <span class="text-xs text-primary-fixed font-semibold">تأسست عام ${dev.founded} (${dev.experienceYears})</span>
              </div>
            </div>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <p class="text-xs text-secondary leading-relaxed mb-5 line-clamp-3">
              ${dev.description}
            </p>

            <div class="grid grid-cols-2 gap-3 p-3 bg-surface-container-low rounded-2xl mb-5 border border-border-gray/70 text-center">
              <div>
                <span class="block text-[11px] text-secondary">إجمالي المشروعات</span>
                <strong class="text-primary font-black text-base">${projectsCount} مشروعات</strong>
              </div>
              <div>
                <span class="block text-[11px] text-secondary">سوابق التسليم</span>
                <strong class="text-on-surface font-black text-base">${dev.deliveredUnits}</strong>
              </div>
            </div>

            <div class="mb-5">
              <span class="block text-[11px] font-bold text-secondary mb-2">أبرز المشروعات المتاحة:</span>
              <div class="flex flex-wrap gap-1.5">
                ${projectsTags}
              </div>
            </div>

            <div class="mt-auto pt-4 border-t border-border-gray flex gap-3">
              <button onclick="DevelopersApp.showDeveloper('${dev.id}')" class="btn-primary flex-1 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover-gold-glow">
                <span>استعراض المشروعات (${projectsCount})</span>
                <span class="material-symbols-outlined text-base">arrow_back</span>
              </button>
              <button onclick="openWhatsAppLead('استفسار عن مشروعات مطور: ${dev.name}')" class="btn-secondary px-3.5 py-3 rounded-xl text-xs font-bold flex items-center justify-center hover:bg-surface-container" title="تواصل واتساب">
                <span class="material-symbols-outlined text-lg">chat</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  },

  resetSearch() {
    const input = document.getElementById('dev-search-input');
    if (input) input.value = '';
    this.renderCatalog();
  },

  filterDevelopers(query) {
    this.renderCatalog(query);
  },

  renderDeveloperDetail(dev) {
    // Breadcrumbs
    const bcName = document.getElementById('detail-bc-dev-name');
    if (bcName) bcName.textContent = dev.name;

    // Header info
    const nameEl = document.getElementById('dev-detail-name');
    const badgeEl = document.getElementById('dev-detail-badge');
    const foundedEl = document.getElementById('dev-detail-founded');
    const expEl = document.getElementById('dev-detail-exp');
    const unitsEl = document.getElementById('dev-detail-units');
    const ratingEl = document.getElementById('dev-detail-rating');
    const descEl = document.getElementById('dev-detail-desc');
    const logoEl = document.getElementById('dev-detail-logo');
    const coverEl = document.getElementById('dev-detail-cover');
    const waBtn = document.getElementById('dev-detail-wa-btn');

    if (nameEl) nameEl.textContent = dev.name;
    if (badgeEl) badgeEl.textContent = dev.badge || 'مطور معتمد';
    if (foundedEl) foundedEl.textContent = dev.founded;
    if (expEl) expEl.textContent = dev.experienceYears;
    if (unitsEl) unitsEl.textContent = dev.deliveredUnits;
    if (ratingEl) ratingEl.textContent = dev.rating || '4.9';
    if (descEl) descEl.textContent = dev.description;
    if (logoEl) logoEl.textContent = dev.logoText;
    if (coverEl) coverEl.src = dev.coverImage;

    if (waBtn) {
      waBtn.onclick = () => openWhatsAppLead(`مرحباً بيتر سوليوشنز، أود الاستفسار وتحديد موعد معاينة بخصوص مشروعات ${dev.name}`);
    }

    // Render Projects
    const projectsContainer = document.getElementById('developer-projects-grid');
    const countTitle = document.getElementById('dev-projects-count-title');
    const projects = dev.projects || [];

    if (countTitle) {
      countTitle.textContent = `مشروعات ${dev.name} (${projects.length})`;
    }

    if (!projectsContainer) return;

    if (projects.length === 0) {
      projectsContainer.innerHTML = `
        <div class="col-span-full py-12 text-center bg-pure-white rounded-3xl border border-border-gray p-8">
          <p class="text-secondary text-sm">سيتم إضافة مشروعات جديدة لهذا المطور قريباً.</p>
        </div>
      `;
      return;
    }

    projectsContainer.innerHTML = projects.map((proj, pIdx) => {
      const amenitiesHtml = (proj.amenities || []).map(a => `
        <span class="inline-flex items-center gap-1 bg-surface-container text-on-surface text-xs font-semibold px-3 py-1.5 rounded-lg border border-border-gray/70">
          <span class="material-symbols-outlined text-primary text-sm">check_circle</span>
          <span>${a}</span>
        </span>
      `).join('');

      const images = proj.images || [];
      const mainImg = images[0] || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80';

      const thumbnailsHtml = images.map((img, iIdx) => `
        <button onclick="DevelopersApp.switchProjectImage('${dev.id}', '${proj.id}', ${iIdx})" class="aspect-video rounded-xl overflow-hidden border-2 ${iIdx === 0 ? 'border-primary' : 'border-border-gray'} hover:border-primary-container transition-all relative">
          <img class="w-full h-full object-cover" src="${img}" alt="${proj.name} - صورة ${iIdx + 1}">
        </button>
      `).join('');

      return `
        <article id="project-card-${proj.id}" class="bg-pure-white rounded-3xl border border-border-gray overflow-hidden shadow-md hover:border-primary-container transition-all duration-300">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            <!-- Left/Image Column (5 cols) -->
            <div class="lg:col-span-5 p-6 flex flex-col bg-surface-container-low">
              <div class="relative h-72 sm:h-80 rounded-2xl overflow-hidden img-zoom-container mb-4 shadow-sm border border-border-gray/70">
                <img id="proj-main-img-${proj.id}" class="w-full h-full object-cover cursor-pointer" src="${mainImg}" alt="${proj.name}" onclick="DevelopersApp.openProjectLightbox('${dev.id}', '${proj.id}')">
                
                <div class="absolute top-3 right-3 bg-badge-gold-bg text-badge-gold-text px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                  <span class="material-symbols-outlined text-[14px]">apartment</span>
                  <span>${proj.status}</span>
                </div>

                <button onclick="DevelopersApp.openProjectLightbox('${dev.id}', '${proj.id}')" class="absolute bottom-3 left-3 bg-inverse-surface/80 hover:bg-inverse-surface text-pure-white px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md flex items-center gap-1.5 shadow transition-all">
                  <span class="material-symbols-outlined text-sm">photo_library</span>
                  <span>عرض كل الصور (${images.length})</span>
                </button>
              </div>

              <!-- Thumbnails -->
              <div class="grid grid-cols-4 gap-2">
                ${thumbnailsHtml}
              </div>
            </div>

            <!-- Right/Content Column (7 cols) -->
            <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div class="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                    <span class="material-symbols-outlined text-sm">location_on</span>
                    <span>${proj.location}</span>
                  </div>
                  <div class="text-xs text-secondary font-semibold">
                    الاستلام المتوقع: <strong class="text-on-surface">${proj.deliveryYear}</strong>
                  </div>
                </div>

                <h3 class="text-2xl font-black text-on-surface mb-2">${proj.name}</h3>
                <p class="text-xs font-semibold text-primary mb-4 flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">roofing</span>
                  <span>الوحدات المتاحة: ${proj.type}</span>
                </p>

                <p class="text-xs sm:text-sm text-secondary leading-relaxed mb-6">
                  ${proj.overview}
                </p>

                <!-- Pricing & Payment Box -->
                <div class="bg-surface-container-low rounded-2xl p-4 sm:p-5 border border-border-gray/70 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span class="block text-[11px] text-secondary mb-1">الأسعار تبدأ من</span>
                    <strong class="text-primary font-black text-lg sm:text-xl">${formatEGP(proj.startPrice)}</strong>
                  </div>
                  <div>
                    <span class="block text-[11px] text-secondary mb-1">المقدم المطلوب</span>
                    <strong class="text-on-surface font-bold text-sm sm:text-base">${formatEGP(proj.downPayment)} (${proj.downPaymentPercent})</strong>
                  </div>
                  <div>
                    <span class="block text-[11px] text-secondary mb-1">نظام السداد</span>
                    <strong class="text-success-green font-bold text-sm sm:text-base">${proj.installmentYears}</strong>
                  </div>
                </div>

                <!-- Amenities -->
                <div class="mb-6">
                  <span class="block text-xs font-bold text-on-surface mb-2.5">مزايا وخدمات الكمبوند:</span>
                  <div class="flex flex-wrap gap-2">
                    ${amenitiesHtml}
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="pt-6 border-t border-border-gray flex flex-col sm:flex-row gap-3">
                <button onclick="openWhatsAppLead('استفسار وحجز موعد معاينة لمشروع: ${proj.name} (${dev.name})')" class="btn-primary flex-1 py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover-gold-glow">
                  <span class="material-symbols-outlined text-lg">chat</span>
                  <span>حجز موعد واستفسار عبر الواتساب</span>
                </button>
                <a href="tel:19xxx" class="btn-secondary px-6 py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
                  <span class="material-symbols-outlined text-lg">call</span>
                  <span>اتصل بمستشار المشروع</span>
                </a>
              </div>

            </div>

          </div>
        </article>
      `;
    }).join('');
  },

  switchProjectImage(devId, projId, imgIndex) {
    const dev = typeof getDeveloperById === 'function' ? getDeveloperById(devId) : null;
    if (!dev) return;
    const proj = (dev.projects || []).find(p => p.id === projId);
    if (!proj || !proj.images || !proj.images[imgIndex]) return;

    const mainImg = document.getElementById(`proj-main-img-${proj.id}`);
    if (mainImg) {
      mainImg.src = proj.images[imgIndex];
    }

    const card = document.getElementById(`project-card-${proj.id}`);
    if (card) {
      const thumbs = card.querySelectorAll('button img');
      thumbs.forEach((th, idx) => {
        const btn = th.closest('button');
        if (btn) {
          if (idx === imgIndex) {
            btn.classList.remove('border-border-gray');
            btn.classList.add('border-primary');
          } else {
            btn.classList.remove('border-primary');
            btn.classList.add('border-border-gray');
          }
        }
      });
    }
  },

  openProjectLightbox(devId, projId) {
    const dev = typeof getDeveloperById === 'function' ? getDeveloperById(devId) : null;
    if (!dev) return;
    const proj = (dev.projects || []).find(p => p.id === projId);
    if (!proj || !proj.images || proj.images.length === 0) return;

    this.activeLightboxImages = proj.images;
    this.activeLightboxIndex = 0;

    const modal = document.getElementById('project-lightbox-modal');
    const titleEl = document.getElementById('lightbox-project-title');
    if (titleEl) titleEl.textContent = `${proj.name} - ${dev.name}`;

    this.updateLightboxImage();
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  },

  updateLightboxImage() {
    const imgEl = document.getElementById('lightbox-main-img');
    const counterEl = document.getElementById('lightbox-counter');
    const thumbsContainer = document.getElementById('lightbox-thumbs-container');

    if (imgEl && this.activeLightboxImages[this.activeLightboxIndex]) {
      imgEl.src = this.activeLightboxImages[this.activeLightboxIndex];
    }

    if (counterEl) {
      counterEl.textContent = `${this.activeLightboxIndex + 1} / ${this.activeLightboxImages.length}`;
    }

    if (thumbsContainer) {
      thumbsContainer.innerHTML = this.activeLightboxImages.map((img, idx) => `
        <button onclick="DevelopersApp.setLightboxIndex(${idx})" class="w-16 h-12 rounded-lg overflow-hidden border-2 ${idx === this.activeLightboxIndex ? 'border-primary' : 'border-border-gray/50'} hover:border-primary transition-all shrink-0">
          <img src="${img}" class="w-full h-full object-cover">
        </button>
      `).join('');
    }
  },

  setLightboxIndex(idx) {
    this.activeLightboxIndex = idx;
    this.updateLightboxImage();
  },

  lightboxNext() {
    if (this.activeLightboxImages.length === 0) return;
    this.activeLightboxIndex = (this.activeLightboxIndex + 1) % this.activeLightboxImages.length;
    this.updateLightboxImage();
  },

  lightboxPrev() {
    if (this.activeLightboxImages.length === 0) return;
    this.activeLightboxIndex = (this.activeLightboxIndex - 1 + this.activeLightboxImages.length) % this.activeLightboxImages.length;
    this.updateLightboxImage();
  },

  closeLightbox() {
    const modal = document.getElementById('project-lightbox-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
};

// Initialize on DOM ready
if (typeof onReady === 'function') {
  onReady(() => DevelopersApp.init());
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => DevelopersApp.init());
} else {
  DevelopersApp.init();
}
