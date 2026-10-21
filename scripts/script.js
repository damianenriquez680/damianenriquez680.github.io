// ── Idioma actual (se recuerda entre visitas) ──
let lang = 'es';
try {
const saved = localStorage.getItem('lang');
if (saved === 'es' || saved === 'en') lang = saved;
} catch (e) { /* sin almacenamiento: se usa español */ }

const panel = document.getElementById('detailPanel');
const langBtn = document.getElementById('langToggle');
let currentProject = null;

const t = key => i18n[lang][key];

function renderDetail() {
const p = projects[currentProject];
if (!p) return;
const isBlog = p.layout === 'blog';
const c = p[lang] || {};

document.getElementById('detail-status').classList.toggle('d-none', !p.wip);
document.getElementById('detail-icon').textContent = p.icon;

// Alterna entre la vista de proyecto y la vista de artículo
document.getElementById('detail-project').hidden = isBlog;
document.getElementById('detail-blog').hidden = !isBlog;

const tagsHtml = p.tags.map(tag => `<span class="badge rounded-pill tag">${tag}</span>`).join('');
document.getElementById('detail-tags').innerHTML = tagsHtml;
document.getElementById('detail-blog-tags').innerHTML = tagsHtml;

if (!isBlog) {
    document.getElementById('detail-title').textContent = c.title;
    document.getElementById('detail-desc').textContent = c.desc;
    document.getElementById('detail-features').innerHTML =
    c.features.map(f => `<li class="list-group-item">${f}</li>`).join('');
}

const repoBtn = document.getElementById('detail-repo');
repoBtn.href = p.repo;
repoBtn.textContent = t(isBlog ? 'blog_btn_drive' : 'btn_repo');

// Botón "Jugar ahora": solo en proyectos que tengan play (nunca en el blog)
const play = document.getElementById('detail-play');
play.href = p.play || '#';
play.classList.toggle('d-none', isBlog || !p.play);
}

function applyLang() {
document.documentElement.lang = lang;
document.title = t('page_title');

document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

langBtn.textContent = t('toggle_label');
langBtn.setAttribute('aria-label', t('toggle_aria'));

renderDetail();   // si el panel está abierto, se traduce al instante
}

langBtn.addEventListener('click', () => {
lang = lang === 'es' ? 'en' : 'es';
try { localStorage.setItem('lang', lang); } catch (e) {}
applyLang();
});

// Bootstrap dispara este evento al abrir el offcanvas; relatedTarget es la tarjeta que se tocó
panel.addEventListener('show.bs.offcanvas', event => {
const card = event.relatedTarget;
if (!card || !projects[card.dataset.project]) return;

currentProject = card.dataset.project;
panel.classList.toggle('panel-wide', currentProject === 'blog');
document.querySelectorAll('.project-card.selected').forEach(c => c.classList.remove('selected'));
card.classList.add('selected');
renderDetail();
});

panel.addEventListener('hidden.bs.offcanvas', () => {
document.querySelectorAll('.project-card.selected').forEach(c => c.classList.remove('selected'));
});

applyLang();

// ── Enlace activo de la navegación (blanco + subrayado) ──
const navLinks = [...document.querySelectorAll('#siteNav .nav-link')];
const navSections = navLinks.map(a => document.querySelector(a.getAttribute('href')));

function setActive(index) {
navLinks.forEach((a, i) => {
    a.classList.toggle('active', i === index);
    if (i === index) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
});
}

function updateNav() {
let index = 0;
navSections.forEach((section, i) => {
    if (section && section.getBoundingClientRect().top - 120 <= 0) index = i;
});
// Al llegar al final de la página, se marca la última sección
if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    index = navSections.length - 1;
}
setActive(index);
}

navLinks.forEach((a, i) => a.addEventListener('click', () => setActive(i)));
window.addEventListener('scroll', updateNav, { passive: true });
window.addEventListener('resize', updateNav);
updateNav();