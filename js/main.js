/* =========================================================
   BRAVOS BARBEARIA — main.js (v2)
   Tudo que o dono precisa mudar fica no CONFIG.
   ========================================================= */
'use strict';

const CONFIG = {
  nome: 'Bravos Barbearia',
  whatsapp: '5551996767939',               // DDI + DDD + número, só dígitos
  telefoneExibicao: '(51) 99676-7939',
  endereco: 'R. Paraguai, 33 · Rio Branco',
  cidade: 'Porto Alegre - RS',
  mapsBusca: 'Bravos Barbearia, R. Paraguai, 33 - Rio Branco, Porto Alegre - RS',
  avaliacoes: { nota: 4.9, total: 166 },
  // ponto da calçada em frente à barbearia (Street View)
  coordenadas: { lat: -30.03344, lng: -51.20256 },
  // 0 = domingo ... 6 = sábado. null = fechado
  horarios: { 0: null, 1: null, 2: [9, 20], 3: [9, 20], 4: [9, 20], 5: [9, 20], 6: [9, 18] },
  pausaAlmoco: [12],
  intervaloMin: 30,                        // de quanto em quanto tempo aparecem os horários
  diasNaAgenda: 8,
  antecedenciaMin: 30,
  maxPorServico: 4,

  servicos: [
    { id: 'corte', nome: 'Corte', cat: 'Cabelo', preco: 50, dur: 40, badge: 'Mais pedido', grande: true,
      desc: 'Máquina e tesoura, degradê navalhado e finalização com pomada. Do jeito que você pediu.',
      img: 'img/barbeiro.jpg', hd: 'https://unsplash.com/photos/9twmmS4aXlE/download?w=1000' },
    { id: 'corte-barba', nome: 'Corte + Barba', cat: 'Combo', preco: 80, de: 90, dur: 70, badge: 'Economize R$ 10', grande: true,
      desc: 'O pacote completo: corte, barba na toalha quente e acabamento na navalha.',
      img: 'img/cadeira.jpg', hd: 'https://unsplash.com/photos/k6RsU8om2UE/download?w=1000' },
    { id: 'barba', nome: 'Barba na toalha quente', cat: 'Barba', preco: 40, dur: 30,
      desc: 'Toalha quente, navalha afiada, contorno feito na mão e hidratação no final.',
      img: 'img/maquina.jpg', hd: 'https://unsplash.com/photos/PDDvMlScofU/download?w=900' },
    { id: 'pigmentacao', nome: 'Pigmentação', cat: 'Estilo', preco: 90, dur: 50,
      desc: 'Disfarça falhas na barba ou no cabelo com efeito natural, sem cara de pintado.',
      img: 'img/tesoura.jpg', hd: 'https://unsplash.com/photos/Xw1NnubpdPY/download?w=900' },
    { id: 'combo', nome: 'Combo pai e filho', cat: 'Família', preco: 120, dur: 60, badge: 'Para dois',
      desc: 'Dois cortes atendidos ao mesmo tempo, lado a lado. Programa de pai e filho.',
      img: 'img/equipe.jpg', hd: 'https://unsplash.com/photos/0iW0NSHjiiw/download?w=900' }
  ],

  stories: [
    { nome: 'Diether M.',   frase: 'João é mestre no corte!',                img: 'img/barbeiro.jpg' },
    { nome: 'Vinicius M.',  frase: 'Os caras são bravos!',                   img: 'img/cadeira.jpg' },
    { nome: 'Guilherme D.', frase: 'Fazer a barba é uma experiência ímpar.',  img: 'img/maquina.jpg' },
    { nome: 'David B.',     frase: 'Mais do que um corte, uma experiência.',  img: 'img/sinuca.jpg' },
    { nome: 'Luciano A.',   frase: 'Atendimento nota mil!',                  img: 'img/equipe.jpg' },
    { nome: 'Matheus L.',   frase: 'Corte do Andrey é fera.',                img: 'img/chope.jpg' }
  ],
  barbeiros: ['Alessandro', 'João Henrique', 'João', 'Andrey', 'Guto', 'Renato'],
  // Avaliações reais do Google Maps (trechos)
  depoimentos: [
    { nome: 'Bruno G.', quando: 'há 1 ano', texto: 'Atendimento de primeira e ambiente excelente, tudo limpo e organizado. Cortei com o Alessandro, que manda muito. E ainda tem um cafezinho pra completar.' },
    { nome: 'Diether M.', quando: 'há 10 meses', texto: 'Lugar tranquilo e atendimento profissional, são muito gente boa. Recomendo, João é mestre no corte!' },
    { nome: 'Luciano A.', quando: 'há 1 ano', texto: 'O Alessandro é top! Super gente boa, pontual e capricha demais no corte. Atendimento nota mil!' },
    { nome: 'Guilherme L.', quando: 'há 3 anos', texto: 'Atendimento diferenciado da rapaziada, ambiente top. Cortei com o Andrey e o cara é diferente como sempre!' },
    { nome: 'David B.', quando: 'há 3 anos', texto: 'Mais do que um serviço de corte, uma experiência. Capricho no ambiente, tudo muito limpo e organizado.' },
    { nome: 'Deyson R.', quando: 'há 3 anos', texto: 'Serviço sempre ágil e atencioso, tanto para adulto como para criança. Super indicado!' },
    { nome: 'Julio S.', quando: 'há 3 anos', texto: 'Preço atraente, ambiente agradável, atendimento cordial e um trabalho muito bem executado pelo Guto.' },
    { nome: 'Valdo F.', quando: 'há 3 anos', texto: 'Melhor atendimento e profissionalismo de Porto Alegre, sem dúvida. O primeiro corte já saiu exatamente como eu pedi.' },
    { nome: 'Guilherme F.', quando: 'há 2 anos', texto: 'Atendimento do Andrey top, corte e barba alinhados demais! Ambiente agradável e acolhedor.' },
    { nome: 'Luca L.', quando: 'há 2 anos', texto: 'Lugar excelente, atendimento nota 10. O João Henrique é profissional demais!' },
    { nome: 'Marcos C.', quando: 'há 3 anos', texto: 'O ambiente é muito legal, tem projetor com TV pra dar aquela relaxada antes da tapa no visual!' },
    { nome: 'Leandro T.', quando: 'há 1 ano', texto: 'Qualidade, agilidade e gentileza. Alessandro é um profissional extremamente qualificado e comprometido.' },
    { nome: 'Vinicius M.', quando: 'há 3 anos', texto: 'Os caras são bravos! Mandam muito bem nos cortes e te fazem se sentir muito bem.' },
    { nome: 'Jonathan B.', quando: 'há 3 anos', texto: 'Ambiente super agradável que já impressiona na chegada. Oferece bebidas e um espaço pra descontração.' },
    { nome: 'Guilherme D.', quando: 'há 3 anos', texto: 'Sempre bem atendido. Fazer a barba é uma experiência ímpar!' },
    { nome: 'Fábio D.', quando: 'há 1 ano', texto: 'Ambiente muito legal! Cortei com o Alessandro, excelente profissional e gente boa demais. Recomendo 100%.' },
    { nome: 'Matheus V.', quando: 'há 3 anos', texto: 'Atendimento top e lugar aconchegante. Cortem com o Andrey, o homi é diferenciado!' },
    { nome: 'Felipe M.', quando: 'há 3 anos', texto: 'Ambiente top, descontraído, atendimento excepcional. Os caras são simplesmente demais!' },
    { nome: 'Paulo M.', quando: 'há 3 anos', texto: 'Excelente atendimento feito pelo Guto. Bem localizada e com ambiente agradável.' },
    { nome: 'Isaak H.', quando: 'há 2 anos', texto: 'Já tive o prazer de cortar o cabelo com o João e a experiência foi excelente!' },
    { nome: 'Lucas P.', quando: 'há 1 ano', texto: 'Qualidade top! Agradecer ao barbeiro Andrey, que sempre acerta o corte. Baita profissional!' },
    { nome: 'Jonatã M.', quando: 'há 3 anos', texto: 'Bem localizado, de fácil acesso, ambiente climatizado e aconchegante. Profissionais qualificados.' },
    { nome: 'Hans H.', quando: 'há 2 anos', texto: 'Renato fez um ótimo trabalho! O lugar é extremamente aconchegante.' },
    { nome: 'Allan C.', quando: 'há 3 anos', texto: 'Lugar top, novo, moderno e com profissionais experientes! O bairro precisava de uma barbearia com essa qualidade.' },
    { nome: 'Augusto A.', quando: 'há 1 ano', texto: 'Fui atendido pelo Alessandro e foi espetacular. Profissional diferenciado.' },
    { nome: 'Emerson', quando: 'há 1 ano', texto: 'Ótima barbearia, fui super bem atendido e o corte então nem se fale. Indico muito!' },
    { nome: 'Rafael F.', quando: 'há 3 anos', texto: 'Excelente barbearia, local amplo, organizado e de bom gosto.' },
    { nome: 'Eros P.', quando: 'há 1 ano', texto: 'Baita atendimento do Alessandro! Barbeiro de qualidade! Recomendo!' }
  ]
};

/* =========================================================
   UTILITÁRIOS
   ========================================================= */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const pad = n => String(n).padStart(2, '0');
const money = v => 'R$ ' + v.toLocaleString('pt-BR');
const mq = q => window.matchMedia(q).matches;
const FINE = mq('(hover:hover) and (pointer:fine)');
const REDUCED = mq('(prefers-reduced-motion: reduce)');
const SMALL = () => innerWidth <= 760;
const LITE = !FINE || REDUCED || (navigator.hardwareConcurrency || 8) <= 4;
const DIAS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const DIAS_CURTO = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const DIAS_TABELA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

// segurança: escapa qualquer texto antes de ir para o HTML
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// nome do cliente: só letras, espaços, hífen e apóstrofo
const cleanName = s => String(s || '').replace(/[^\p{L}\s'-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 30);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem storage */ } }
};
const durTxt = min => min < 60 ? `${min} min` : `${Math.floor(min / 60)}h${min % 60 ? pad(min % 60) : ''}`;
const svcById = id => CONFIG.servicos.find(s => s.id === id);
const I_MINUS = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12h12"/></svg>';
const I_PLUS = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6v12M6 12h12"/></svg>';

/* =========================================================
   CARRINHO
   ========================================================= */
const cart = {
  items: {},
  load() {
    const raw = store.get('bravos_cart', {});
    this.items = {};
    Object.keys(raw || {}).forEach(id => { const q = parseInt(raw[id], 10); if (svcById(id) && q > 0) this.items[id] = Math.min(q, CONFIG.maxPorServico); });
  },
  save() { store.set('bravos_cart', this.items); },
  qty(id) { return this.items[id] || 0; },
  set(id, q) {
    if (!svcById(id)) return;
    q = clamp(q, 0, CONFIG.maxPorServico);
    if (q === 0) delete this.items[id]; else this.items[id] = q;
    this.save(); renderCart();
  },
  add(id, fromEl) {
    const before = this.qty(id);
    if (before >= CONFIG.maxPorServico) { toast(`Máximo de ${CONFIG.maxPorServico} por serviço`); return; }
    this.set(id, before + 1);
    if (fromEl) flyToCart(fromEl);
    if (before === 0) toast(`${svcById(id).nome} adicionado ao pedido`);
  },
  list() { return Object.keys(this.items).map(id => ({ s: svcById(id), q: this.items[id] })); },
  count() { return Object.values(this.items).reduce((a, b) => a + b, 0); },
  total() { return this.list().reduce((a, i) => a + i.s.preco * i.q, 0); },
  minutes() { return this.list().reduce((a, i) => a + i.s.dur * i.q, 0); }
};

function renderPrices() {
  const icon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  $('#priceGrid').innerHTML = CONFIG.servicos.map(s => `
    <article class="pcard${s.grande ? ' pcard--big' : ''} reveal" data-id="${esc(s.id)}">
      <div class="pcard__media">
        ${s.badge ? `<span class="pcard__badge">${esc(s.badge)}</span>` : ''}
        <span class="pcard__cat">${esc(s.cat)}</span>
        <img class="js-img" src="${esc(s.img)}" data-hd="${esc(s.hd)}" alt="${esc(s.nome)}" loading="lazy" decoding="async">
      </div>
      <div class="pcard__body">
        <h3 class="pcard__name">${esc(s.nome)}</h3>
        <p class="pcard__desc">${esc(s.desc)}</p>
        <span class="pcard__meta">${icon}${durTxt(s.dur)}</span>
        <div class="pcard__foot">
          <div class="price">${s.de ? `<s>${money(s.de)}</s>` : ''}<strong><small>R$</small>${s.preco}</strong></div>
          <button class="add" type="button" data-add="${esc(s.id)}" aria-label="Adicionar ${esc(s.nome)} ao pedido">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>Adicionar
          </button>
          <div class="qty" role="group" aria-label="Quantidade de ${esc(s.nome)}">
            <button type="button" data-dec="${esc(s.id)}" aria-label="Diminuir">${I_MINUS}</button>
            <output data-q="${esc(s.id)}">1</output>
            <button type="button" data-inc="${esc(s.id)}" aria-label="Aumentar">${I_PLUS}</button>
          </div>
        </div>
      </div>
    </article>`).join('');
}

function orderItemsHTML(empty) {
  const list = cart.list();
  if (!list.length) return empty;
  return list.map(({ s, q }) => `
    <li class="order__item">
      <span class="order__thumb"><img src="${esc(s.img)}" alt=""></span>
      <span class="order__info"><strong>${esc(s.nome)}</strong><small>${money(s.preco)} · ${durTxt(s.dur)}</small></span>
      <span class="qty" role="group" aria-label="Quantidade de ${esc(s.nome)}">
        <button type="button" data-dec="${esc(s.id)}" aria-label="Diminuir">${I_MINUS}</button>
        <output>${q}</output>
        <button type="button" data-inc="${esc(s.id)}" aria-label="Aumentar">${I_PLUS}</button>
      </span>
    </li>`).join('');
}
function totalHTML() {
  const n = cart.count();
  return `<span>${n} ${n === 1 ? 'item' : 'itens'}</span><div><strong>${money(cart.total())}</strong><small>≈ ${durTxt(cart.minutes() || 0)}</small></div>`;
}
function renderPicker() {
  const check = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  $('#picker').innerHTML = CONFIG.servicos.map(s => {
    const on = cart.qty(s.id) > 0;
    return `<button class="pick" type="button" data-toggle="${esc(s.id)}" aria-pressed="${on}"><i>${check}</i>${esc(s.nome)} <small>${money(s.preco)}</small></button>`;
  }).join('');
}
function renderCart() {
  const n = cart.count();
  // cards
  $$('.pcard').forEach(c => {
    const q = cart.qty(c.dataset.id);
    c.classList.toggle('is-added', q > 0);
    const o = $('output', c); if (o) o.textContent = q || 1;
  });
  // contador do header
  const btn = $('#cartBtn');
  $('#cartCount').textContent = n;
  btn.classList.toggle('has-items', n > 0);
  btn.classList.remove('is-bump'); void btn.offsetWidth; if (n) btn.classList.add('is-bump');
  // listas
  const emptyAgenda = `<li class="order__empty">Seu pedido está vazio.<br><a href="#servicos">Escolher serviços</a></li>`;
  const emptyDrawer = `<li class="order__empty">Nenhum serviço ainda.<br><a href="#servicos" data-close-drawer>Ver serviços e preços</a></li>`;
  $('#orderList').innerHTML = orderItemsHTML(emptyAgenda);
  $('#drawerList').innerHTML = orderItemsHTML(emptyDrawer);
  $('#orderTotal').innerHTML = n ? totalHTML() : '';
  $('#drawerTotal').innerHTML = totalHTML();
  // barra do celular
  $('#cartBarCount').textContent = `${n} ${n === 1 ? 'item' : 'itens'}`;
  $('#cartBarTotal').textContent = money(cart.total());
  renderPicker();
  updateCartBar();
  updateMessage();
}

function updateCartBar() {
  const bar = $('#cartBar');
  const agenda = $('#agenda').getBoundingClientRect();
  const inAgenda = agenda.top < innerHeight * .8 && agenda.bottom > 0;
  const on = cart.count() > 0 && !inAgenda && !document.body.classList.contains('drawer-open');
  bar.classList.toggle('is-on', on);
  document.body.classList.toggle('cart-bar-on', on && SMALL());
}

function flyToCart(fromEl) {
  if (REDUCED) return;
  const a = fromEl.getBoundingClientRect();
  const target = SMALL() && $('#cartBar').classList.contains('is-on') ? $('#cartBar') : $('#cartBtn');
  const b = target.getBoundingClientRect();
  const dot = document.createElement('span'); dot.className = 'fly-dot'; document.body.appendChild(dot);
  const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, x1 = b.left + b.width / 2, y1 = b.top + b.height / 2;
  const anim = dot.animate([
    { transform: `translate(${x0}px,${y0}px) scale(1)`, opacity: 1 },
    { transform: `translate(${(x0 + x1) / 2}px,${Math.min(y0, y1) - 120}px) scale(1.4)`, opacity: 1, offset: .5 },
    { transform: `translate(${x1}px,${y1}px) scale(.4)`, opacity: .2 }
  ], { duration: 750, easing: 'cubic-bezier(.5,0,.3,1)' });
  anim.onfinish = () => dot.remove();
}

function initCartEvents() {
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]'); if (add) { cart.add(add.dataset.add, add); return; }
    const inc = e.target.closest('[data-inc]'); if (inc) { cart.add(inc.dataset.inc, null); return; }
    const dec = e.target.closest('[data-dec]'); if (dec) { cart.set(dec.dataset.dec, cart.qty(dec.dataset.dec) - 1); return; }
    const tg = e.target.closest('[data-toggle]'); if (tg) { const id = tg.dataset.toggle; cart.qty(id) ? cart.set(id, 0) : cart.add(id, null); return; }
    const js = e.target.closest('.js-add'); if (js) { cart.add(js.dataset.id, js); return; }
  });
  // drawer
  const drawer = $('#cartDrawer'), back = $('#drawerBackdrop'), btn = $('#cartBtn');
  const open = v => {
    drawer.classList.toggle('is-open', v); back.classList.toggle('is-open', v);
    drawer.setAttribute('aria-hidden', !v); btn.setAttribute('aria-expanded', v);
    document.body.classList.toggle('drawer-open', v);
    if (window.__lenis) v ? window.__lenis.stop() : window.__lenis.start();
    updateCartBar();
    if (v) setTimeout(() => $('#drawerClose').focus(), 300);
  };
  btn.addEventListener('click', () => open(true));
  $('#drawerClose').addEventListener('click', () => open(false));
  back.addEventListener('click', () => open(false));
  $('#drawerGo').addEventListener('click', () => open(false));
  drawer.addEventListener('click', e => { if (e.target.closest('[data-close-drawer]')) open(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('is-open')) open(false); });
}

/* =========================================================
   AGENDA + MENSAGEM
   ========================================================= */
const booking = { dayIndex: 0, slot: null, days: [] };

function buildDays() {
  const out = []; const now = new Date();
  for (let i = 0; out.length < CONFIG.diasNaAgenda && i < 28; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const h = CONFIG.horarios[d.getDay()]; if (!h) continue;
    const slots = [];
    for (let m = h[0] * 60; m < h[1] * 60; m += CONFIG.intervaloMin) {
      if (CONFIG.pausaAlmoco.includes(Math.floor(m / 60))) continue;
      if (i === 0 && m < now.getHours() * 60 + now.getMinutes() + CONFIG.antecedenciaMin) continue;
      slots.push(`${pad(Math.floor(m / 60))}:${pad(m % 60)}`);
    }
    if (!slots.length) continue;
    const dataBr = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`;
    out.push({
      top: i === 0 ? 'Hoje' : i === 1 ? 'Amanhã' : DIAS_CURTO[d.getDay()],
      num: d.getDate(),
      texto: i === 0 ? `hoje, ${DIAS[d.getDay()]} (${dataBr})` : i === 1 ? `amanhã, ${DIAS[d.getDay()]} (${dataBr})` : `${DIAS[d.getDay()]}, ${dataBr}`,
      slots
    });
  }
  booking.days = out;
}
function renderDays() {
  $('#bookingDays').innerHTML = booking.days.map((d, i) =>
    `<button class="day${i === booking.dayIndex ? ' is-active' : ''}" type="button" role="tab" aria-selected="${i === booking.dayIndex}" data-day="${i}"><small>${esc(d.top)}</small><b>${d.num}</b></button>`).join('');
}
function renderSlots() {
  const d = booking.days[booking.dayIndex], box = $('#bookingSlots');
  if (!d) { box.innerHTML = '<p class="slots__empty">Sem horários no momento. Fale com a gente no WhatsApp.</p>'; return; }
  box.innerHTML = d.slots.map((h, i) => `<button class="slot" type="button" role="option" style="--i:${i}" data-slot="${h}" aria-selected="${booking.slot === h}">${h}</button>`).join('');
}
function initBooking() {
  buildDays(); renderDays(); renderSlots();
  $('#bookingDays').addEventListener('click', e => {
    const b = e.target.closest('[data-day]'); if (!b) return;
    booking.dayIndex = +b.dataset.day; booking.slot = null; renderDays(); renderSlots(); updateMessage();
  });
  $('#bookingSlots').addEventListener('click', e => {
    const b = e.target.closest('[data-slot]'); if (!b) return;
    booking.slot = b.dataset.slot;
    $$('.slot', $('#bookingSlots')).forEach(s => s.setAttribute('aria-selected', s === b));
    updateMessage();
    if (SMALL()) setTimeout(() => scrollToEl($('.panel--send'), -90), 150);
  });
  const name = $('#clientName');
  name.value = cleanName(store.get('bravos_name', ''));
  name.addEventListener('input', () => { store.set('bravos_name', cleanName(name.value)); updateMessage(); });
  $('#sendBtn').addEventListener('click', e => {
    const btn = e.currentTarget;
    if (btn.getAttribute('aria-disabled') === 'true') {
      e.preventDefault();
      if (!cart.count()) { toast('Escolha pelo menos um serviço'); scrollToEl($('#servicos')); }
      else { toast('Escolha um horário'); scrollToEl($('#bookingSlots'), -160); }
      return;
    }
    btn.href = waLink(buildMessage());
    toast('Abrindo o WhatsApp com seu pedido…');
  });
}

function saudacao() {
  const h = new Date().getHours();
  return h >= 5 && h < 12 ? 'bom dia' : h < 18 && h >= 12 ? 'boa tarde' : 'boa noite';
}
function buildMessage() {
  const nome = cleanName($('#clientName').value);
  const d = booking.days[booking.dayIndex];
  const linhas = cart.list().map(({ s, q }) => `• ${q}x ${s.nome} (${money(s.preco * q)})`);
  let t = `Olá, ${saudacao()}!${nome ? ` Meu nome é ${nome}.` : ''}\nQuero agendar na ${CONFIG.nome}:\n\n`;
  t += linhas.length ? linhas.join('\n') : '• (escolha os serviços no site)';
  if (linhas.length) t += `\n\n*Total: ${money(cart.total())}* · cerca de ${durTxt(cart.minutes())}`;
  if (d && booking.slot) t += `\n*Dia:* ${d.texto}, às ${booking.slot}`;
  t += `\n\nPode confirmar pra mim?`;
  return t;
}
function updateMessage() {
  const ok = cart.count() > 0 && !!booking.slot;
  const btn = $('#sendBtn');
  btn.setAttribute('aria-disabled', String(!ok));
  btn.href = ok ? waLink(buildMessage()) : '#';
  $('#msgPreview').textContent = buildMessage().replace(/\*/g, '');
  $('#sendHint').textContent = !cart.count() ? 'Adicione um serviço para continuar.' : !booking.slot ? 'Agora escolha um horário.' : 'Tudo certo! É só enviar.';
}

/* ---------- links gerais de WhatsApp ---------- */
function waLink(texto) { return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`; }
function msgGeral(tipo) {
  const oi = `Olá, ${saudacao()}!`;
  if (tipo === 'duvida') return `${oi} Vim pelo site da ${CONFIG.nome} e tenho uma dúvida:`;
  return `${oi} Vim pelo site da ${CONFIG.nome} e gostaria de agendar um horário. Quais horários vocês têm disponíveis?`;
}
function refreshWa() { $$('.js-wa').forEach(a => { a.href = waLink(msgGeral(a.dataset.wa)); }); }
document.addEventListener('pointerdown', e => { const a = e.target.closest('.js-wa'); if (a) a.href = waLink(msgGeral(a.dataset.wa)); }, true);

/* =========================================================
   CONTEÚDO
   ========================================================= */
function fillBasics() {
  $$('.js-city').forEach(e => e.textContent = CONFIG.cidade);
  $$('.js-address').forEach(e => e.textContent = CONFIG.endereco);
  $$('.js-phone').forEach(e => e.textContent = 'WhatsApp ' + CONFIG.telefoneExibicao);
  const maps = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONFIG.mapsBusca);
  $$('.js-maps').forEach(e => e.href = maps);
  $('#year').textContent = new Date().getFullYear();
}
function renderHours() {
  const today = new Date().getDay();
  $('#hoursList').innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => {
    const h = CONFIG.horarios[d];
    return `<li class="${h ? '' : 'is-closed'}${d === today ? ' is-today' : ''}"><span>${DIAS_TABELA[d]}</span><span>${h ? `${pad(h[0])}:00 – ${pad(h[1])}:00` : 'fechado'}</span></li>`;
  }).join('');
  updateStatus();
}
function updateStatus() {
  const now = new Date(), h = CONFIG.horarios[now.getDay()], el = $('#openStatus');
  const mins = now.getHours() * 60 + now.getMinutes();
  el.classList.remove('is-open', 'is-closed');
  if (h && mins >= h[0] * 60 && mins < h[1] * 60) { el.classList.add('is-open'); el.lastElementChild.textContent = `Aberto agora · fecha às ${h[1]}h`; return; }
  el.classList.add('is-closed');
  for (let i = 0; i < 8; i++) {
    const d = new Date(now); d.setDate(now.getDate() + i);
    const hh = CONFIG.horarios[d.getDay()]; if (!hh || (i === 0 && mins >= hh[0] * 60)) continue;
    el.lastElementChild.textContent = `Fechado agora · abre ${i === 0 ? 'hoje' : i === 1 ? 'amanhã' : DIAS[d.getDay()]} às ${hh[0]}h`;
    break;
  }
}

/* ---------- stories ---------- */
function initStories() {
  const stage = $('#storiesStage'), list = CONFIG.stories;
  stage.innerHTML = list.map((t, i) => `
    <article class="story" data-i="${i}">
      <div class="story__bg"><img src="${esc(t.img)}" alt="" loading="lazy"></div>
      <div class="story__bars">${list.map(() => '<i><b></b></i>').join('')}</div>
      <blockquote class="story__quote">${esc(t.frase)}</blockquote>
      <div class="story__name">${esc(t.nome)} <span>· Google</span></div>
    </article>`).join('');
  const cards = $$('.story', stage); let active = 0, elapsed = 0, last = performance.now(), paused = false, visible = false;
  const DUR = 4800;
  function layout() {
    const n = cards.length, gap = SMALL() ? 170 : 330;
    cards.forEach((c, i) => {
      let off = i - active; if (off > n / 2) off -= n; if (off < -n / 2) off += n;
      const abs = Math.abs(off);
      c.classList.toggle('is-side', off !== 0);
      c.style.transform = `translateX(${off * gap}px) scale(${off === 0 ? 1 : .64}) rotateY(${off * -16}deg)`;
      c.style.zIndex = 10 - abs; c.style.opacity = abs > 1 ? 0 : 1; c.style.pointerEvents = abs > 1 ? 'none' : 'auto';
      $$('.story__bars b', c).forEach((b, bi) => { b.style.width = bi < active ? '100%' : '0%'; });
    });
  }
  function go(i) { active = (i + cards.length) % cards.length; elapsed = 0; layout(); }
  cards.forEach((c, i) => c.addEventListener('click', () => { if (i !== active) go(i); }));
  $('#storyPrev').addEventListener('click', () => go(active - 1));
  $('#storyNext').addEventListener('click', () => go(active + 1));
  let sx = null;
  stage.addEventListener('pointerdown', e => { sx = e.clientX; });
  stage.addEventListener('pointerup', e => { if (sx !== null && Math.abs(e.clientX - sx) > 40) go(active + (e.clientX < sx ? 1 : -1)); sx = null; });
  stage.addEventListener('mouseenter', () => paused = true);
  stage.addEventListener('mouseleave', () => paused = false);
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(stage);
  (function tick(t) {
    const dt = t - last; last = t;
    if (visible && !paused && !document.hidden) {
      elapsed += dt;
      const bar = $$('.story__bars b', cards[active])[active];
      if (bar) bar.style.width = clamp(elapsed / DUR, 0, 1) * 100 + '%';
      if (elapsed >= DUR) go(active + 1);
    }
    requestAnimationFrame(tick);
  })(last);
  layout(); addEventListener('resize', layout, { passive: true });
}

/* ---------- mural ---------- */
function destaque(txt) {
  const re = new RegExp('(' + CONFIG.barbeiros.join('|') + ')', 'g');
  return esc(txt).replace(re, '<em>$1</em>');
}
function initWall() {
  const list = CONFIG.depoimentos, n = Math.ceil(list.length / 3);
  const tipos = ['', 'wall__card--red', '', 'wall__card--line', '', 'wall__card--big'];
  const card = (t, i) => `<figure class="wall__card ${tipos[i % tipos.length]}">
      <blockquote>${destaque(t.texto)}</blockquote>
      <figcaption><span class="avatar">${esc(t.nome[0])}</span><strong>${esc(t.nome)}</strong><small>${esc(t.quando)}</small><span class="wall__g">G</span></figcaption>
    </figure>`;
  const grupos = [list.slice(0, n), list.slice(n, n * 2), list.slice(n * 2)];
  ['#wallA', '#wallB', '#wallC'].forEach((id, gi) => {
    const html = grupos[gi].map((t, i) => card(t, i + gi * 2)).join('');
    $(id).innerHTML = `<div class="wall__track">${html}${html}</div>`;
  });
}

/* =========================================================
   EFEITOS
   ========================================================= */
function splitText() {
  $$('.split').forEach(el => {
    let i = 0;
    const walk = node => {
      Array.from(node.childNodes).forEach(ch => {
        if (ch.nodeType === 3) {
          const frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span'); w.className = 'w';
            const inner = document.createElement('span'); inner.style.setProperty('--i', i++); inner.textContent = part;
            w.appendChild(inner); frag.appendChild(w);
          });
          ch.replaceWith(frag);
        } else if (ch.nodeType === 1) walk(ch);
      });
    };
    walk(el);
  });
}

function initReveals() {
  if (!LITE) document.documentElement.classList.add('fx-blur');
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add('is-in');
    if (el.classList.contains('count')) countUp(el, false);
    if (el.classList.contains('count-dec')) countUp(el, true);
    if (el.classList.contains('rating')) setTimeout(() => { $('#ratingFill').style.width = (CONFIG.avaliacoes.nota / 5 * 100) + '%'; }, 250);
    io.unobserve(el);
  }), { threshold: .15, rootMargin: '0px 0px -5% 0px' });
  $$('.split, .reveal, .count, .count-dec').forEach((el, i) => {
    if (el.closest('.hero')) return;
    if (el.classList.contains('pcard')) el.style.transitionDelay = (i % 3) * 80 + 'ms';
    io.observe(el);
  });
}
function countUp(el, dec) {
  const to = parseFloat(el.dataset.to), t0 = performance.now();
  (function f(t) {
    const p = clamp((t - t0) / 1600, 0, 1), e = 1 - Math.pow(1 - p, 4);
    el.textContent = dec ? (to * e).toFixed(1).replace('.', ',') : Math.round(to * e);
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}
function heroIn() {
  $('.hero__title').classList.add('is-in');
  $$('.hero .reveal').forEach((el, i) => setTimeout(() => el.classList.add('is-in'), 350 + i * 140));
  // palavras que giram
  const words = $$('#heroWords b'); let w = 0; words[0].classList.add('is-on');
  setInterval(() => {
    if (document.hidden) return;
    words[w].classList.remove('is-on'); words[w].classList.add('is-out');
    const prev = words[w]; setTimeout(() => prev.classList.remove('is-out'), 800);
    w = (w + 1) % words.length; words[w].classList.add('is-on');
  }, 2400);
}
function upgradeImages() {
  const run = () => $$('img[data-hd]').forEach(img => {
    const hd = new Image(); hd.decoding = 'async';
    hd.onload = () => { if (hd.naturalWidth > 300) img.src = hd.src; };
    hd.src = img.dataset.hd;
  });
  'requestIdleCallback' in window ? requestIdleCallback(run, { timeout: 2500 }) : setTimeout(run, 1200);
}
function preloader(done) {
  const pre = $('#preloader'), bar = $('#preloaderBar');
  let seen = false; try { seen = sessionStorage.getItem('bravos_seen') === '1'; sessionStorage.setItem('bravos_seen', '1'); } catch (e) { }
  const finish = () => { pre.classList.add('is-done'); document.body.classList.remove('is-loading'); setTimeout(done, 200); setTimeout(() => pre.classList.add('is-gone'), 1100); };
  if (REDUCED || seen) { pre.classList.add('is-gone'); document.body.classList.remove('is-loading'); done(); return; }
  const t0 = performance.now(), D = 1000;
  (function f(t) { const p = clamp((t - t0) / D, 0, 1); bar.style.width = (1 - Math.pow(1 - p, 3)) * 100 + '%'; p < 1 ? requestAnimationFrame(f) : finish(); })(t0);
}

/* ---------- cursor com rastro (só desktop) ---------- */
const mouse = { x: innerWidth / 2, y: innerHeight / 2, moved: false };
addEventListener('pointermove', e => { if (e.pointerType === 'mouse') { mouse.x = e.clientX; mouse.y = e.clientY; mouse.moved = true; } }, { passive: true });
function initCursor() {
  if (!FINE || REDUCED) return;
  document.body.classList.add('has-cursor');
  const dot = $('#cursorDot'), cv = $('#cursorTrail'), ctx = cv.getContext('2d');
  const pts = []; const MAX = 22;
  const resize = () => { const r = Math.min(devicePixelRatio || 1, 2); cv.width = innerWidth * r; cv.height = innerHeight * r; ctx.setTransform(r, 0, 0, r, 0, 0); };
  resize(); addEventListener('resize', resize, { passive: true });
  const p = { x: mouse.x, y: mouse.y };
  (function loop() {
    p.x = lerp(p.x, mouse.x, .55); p.y = lerp(p.y, mouse.y, .55);
    dot.style.transform = `translate3d(${mouse.x}px,${mouse.y}px,0)`;
    pts.unshift({ x: p.x, y: p.y }); if (pts.length > MAX) pts.pop();
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    if (mouse.moved && pts.length > 2) {
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i], k = 1 - i / pts.length;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(227,36,43,${k * .55})`; ctx.lineWidth = 7 * k + .5; ctx.stroke();
      }
    }
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e => dot.classList.toggle('is-link', !!e.target.closest('a,button,summary,label,[data-add]')));
  document.documentElement.addEventListener('mouseleave', () => dot.classList.add('is-hidden'));
  document.documentElement.addEventListener('mouseenter', () => dot.classList.remove('is-hidden'));
}
function initRipple() {
  if (REDUCED) return;
  addEventListener('pointerdown', e => {
    const r = document.createElement('span'); r.className = 'click-ripple';
    r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px'; document.body.appendChild(r);
    setTimeout(() => r.remove(), 650);
  }, { passive: true });
}

/* ---------- magnético / tilt / brilho nos cards ---------- */
function initMagnetic() {
  if (LITE) return;
  $$('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const b = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .25}px,${(e.clientY - b.top - b.height / 2) * .3}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transition = 'transform .7s cubic-bezier(.34,1.56,.64,1)'; el.style.transform = ''; setTimeout(() => el.style.transition = '', 700); });
  });
}
function initTilt() {
  if (LITE) return;
  $$('.tilt').forEach(el => {
    el.addEventListener('mousemove', e => {
      const b = el.getBoundingClientRect();
      el.style.transform = `perspective(900px) rotateX(${((e.clientY - b.top) / b.height - .5) * -8}deg) rotateY(${((e.clientX - b.left) / b.width - .5) * 10}deg)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });
}
function initCardGlow() {
  if (LITE) return;
  $('#priceGrid').addEventListener('mousemove', e => {
    const c = e.target.closest('.pcard'); if (!c) return;
    const b = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - b.left) + 'px'); c.style.setProperty('--my', (e.clientY - b.top) + 'px');
  });
}

/* ---------- spotlight ---------- */
function initSpotlight() {
  const sec = $('#spotlight'), lit = $('#spotlightLit');
  const t = { x: .68, y: .42 }, c = { x: .68, y: .42 }; let inside = false, visible = false, r = 200;
  const setFrom = (cx, cy) => { const b = sec.getBoundingClientRect(); t.x = (cx - b.left) / b.width; t.y = (cy - b.top) / b.height; inside = true; };
  sec.addEventListener('pointermove', e => setFrom(e.clientX, e.clientY), { passive: true });
  sec.addEventListener('pointerleave', () => { inside = false; });
  sec.addEventListener('touchmove', e => setFrom(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  sec.addEventListener('touchend', () => setTimeout(() => inside = false, 1500));
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(sec);
  (function loop(time) {
    if (visible) {
      if (!inside) { t.x = .62 + Math.sin(time / 1700) * .2; t.y = .42 + Math.cos(time / 2300) * .15; }
      c.x = lerp(c.x, t.x, .1); c.y = lerp(c.y, t.y, .1);
      r = lerp(r, SMALL() ? 150 : (inside ? 250 : 200), .06);
      lit.style.setProperty('--x', (c.x * 100).toFixed(2) + '%'); lit.style.setProperty('--y', (c.y * 100).toFixed(2) + '%'); lit.style.setProperty('--r', r.toFixed(1) + 'px');
    }
    requestAnimationFrame(loop);
  })(0);
}

/* ---------- lightbox ---------- */
function initLightbox() {
  const lb = $('#lightbox'), im = $('#lightboxImg'), cap = $('#lightboxCap');
  const close = () => { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); window.__lenis && window.__lenis.start(); };
  $$('.club__img').forEach(f => f.addEventListener('click', () => {
    const i = $('img', f); im.src = i.currentSrc || i.src; im.alt = i.alt; cap.textContent = $('figcaption', f).textContent;
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); window.__lenis && window.__lenis.stop();
  }));
  $('#lightboxClose').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ---------- menu ---------- */
function initMenu() {
  const b = $('#burger'), m = $('#mobileMenu');
  const toggle = open => {
    b.classList.toggle('is-open', open); m.classList.toggle('is-open', open);
    b.setAttribute('aria-expanded', open); m.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (window.__lenis) open ? window.__lenis.stop() : window.__lenis.start();
  };
  b.addEventListener('click', () => toggle(!m.classList.contains('is-open')));
  $$('a', m).forEach(a => a.addEventListener('click', () => toggle(false)));
}

/* ---------- rolagem suave (Lenis no desktop) ---------- */
function scrollToEl(el, offset = -80) {
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset, duration: 1.2 });
  else window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + offset, behavior: REDUCED ? 'auto' : 'smooth' });
}
function initSmooth() {
  if (FINE && !REDUCED && window.Lenis) {
    const lenis = new window.Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    window.__lenis = lenis;
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute('href'); if (id === '#' || id.length < 2) return;
    const el = document.getElementById(id.slice(1)); if (!el) return;
    e.preventDefault(); scrollToEl(el, id === '#inicio' ? 0 : -70);
  });
}

/* ---------- Street View ---------- */
function initStreetView() {
  const box = $('#streetView'), frame = $('#svFrame'); if (!box) return;
  const { lat, lng } = CONFIG.coordenadas;
  const urls = {
    street: `https://maps.google.com/maps?layer=c&cbll=${lat},${lng}&cbp=12,250,0,0,0&output=svembed`,
    map: `https://maps.google.com/maps?q=${encodeURIComponent(CONFIG.mapsBusca)}&z=17&output=embed`
  };
  $$('.js-sv-open').forEach(a => { a.href = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`; });
  let mode = 'street', loaded = false;
  const load = () => { box.classList.remove('is-loaded'); frame.src = urls[mode]; loaded = true; };
  frame.addEventListener('load', () => box.classList.add('is-loaded'));
  $$('.sv__tab', box).forEach(t => t.addEventListener('click', () => {
    mode = t.dataset.sv;
    $$('.sv__tab', box).forEach(x => { x.classList.toggle('is-active', x === t); x.setAttribute('aria-selected', x === t); });
    load();
  }));
  // só carrega quando a pessoa chega perto (deixa o site leve)
  const io = new IntersectionObserver(([en]) => { if (en.isIntersecting && !loaded) { load(); io.disconnect(); } }, { rootMargin: '400px 0px' });
  io.observe(box);
}

/* ---------- REC ---------- */
function initRec() {
  const el = $('#recTimer'); const t0 = Date.now() - 1000 * 60 * 47;
  const f = () => { const s = Math.floor((Date.now() - t0) / 1000); el.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`; };
  f(); setInterval(f, 1000);
}

/* =========================================================
   LOOP DE ROLAGEM (um só rAF, trabalha só no que está visível)
   ========================================================= */
function initScrollFx() {
  const header = $('#header'), prog = $('#scrollProgress');
  const heroMedia = $('.hero__media'), heroContent = $('.hero__content');
  const club = $('#galeria'), clubImgs = $$('.club__img'), words = $$('.club__word');
  const band = $$('.band__row').map(r => ({ track: r.firstElementChild, dir: +r.dataset.dir, x: 0 }));
  const wallRows = $$('.wall__row').map(el => ({ el, track: el.firstElementChild, auto: el.dataset.auto === '1', dir: +el.dataset.dir || 1, x: 0 }));
  const aboutImg = $('.about__main'), giant = $('.footer__giant');
  const navLinks = $$('.nav__link'), sections = navLinks.map(a => $(a.getAttribute('href')));
  const vis = new Map();
  const io = new IntersectionObserver(es => es.forEach(e => vis.set(e.target, e.isIntersecting)), { rootMargin: '200px 0px' });
  [club, $('.band'), $('.wall'), $('#sobre'), $('.footer'), $('#hero')].forEach(el => el && io.observe(el));
  let lastY = scrollY, vel = 0, dir = 1, mx = 0, my = 0, frame = 0;

  (function loop() {
    frame++;
    const y = scrollY, dy = y - lastY; lastY = y;
    vel = lerp(vel, dy, .15); if (Math.abs(dy) > .5) dir = dy > 0 ? 1 : -1;
    const H = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${H > 0 ? (y / H).toFixed(4) : 0})`;
    header.classList.toggle('is-scrolled', y > 30);
    const menuOpen = $('#mobileMenu').classList.contains('is-open');
    if (y > 500 && vel > 3 && !menuOpen) header.classList.add('is-hidden');
    if (vel < -3 || y < 200) header.classList.remove('is-hidden');

    if (vis.get($('#hero')) && !REDUCED) {
      heroMedia.style.transform = `translate3d(0,${(y * .22).toFixed(1)}px,0)`;
      const p = clamp(y / (innerHeight * .75), 0, 1);
      heroContent.style.opacity = (1 - p).toFixed(3);
      heroContent.style.transform = `translate3d(0,${(-p * 50).toFixed(1)}px,0)`;
    }

    // faixa: direção acompanha a rolagem
    if (vis.get($('.band'))) band.forEach(r => {
      const w = r.track.scrollWidth / 2;
      r.x -= (1 + Math.abs(vel) * .3) * r.dir * dir;
      if (r.x <= -w) r.x += w; if (r.x > 0) r.x -= w;
      r.track.style.transform = `translate3d(${r.x.toFixed(1)}px,0,0) skewX(${clamp(-vel * .2, -6, 6).toFixed(2)}deg)`;
    });

    // mural de avaliações
    if (vis.get($('.wall'))) wallRows.forEach(r => {
      const b = r.el.getBoundingClientRect(), tw = r.track.scrollWidth / 2;
      if (r.auto) { r.x -= (.6 + Math.abs(vel) * .22) * dir; if (r.x <= -tw) r.x += tw; if (r.x > 0) r.x -= tw; }
      else { const p = (b.top + b.height / 2 - innerHeight / 2) / innerHeight; r.x = lerp(r.x, -tw * .45 + p * r.dir * tw * .3, .12); }
      r.track.style.transform = `translate3d(${r.x.toFixed(1)}px,0,0)`;
    });

    // galeria (só telas grandes)
    if (!SMALL() && vis.get(club)) {
      const b = club.getBoundingClientRect(), p = clamp(-b.top / (b.height - innerHeight), 0, 1);
      if (FINE) { mx = lerp(mx, mouse.x / innerWidth - .5, .06); my = lerp(my, mouse.y / innerHeight - .5, .06); }
      clubImgs.forEach(f => {
        const sp = +f.dataset.speed, dp = +f.dataset.depth;
        f.style.transform = `translate3d(${(mx * -dp).toFixed(1)}px,${((p - .5) * sp * -900 + my * -dp).toFixed(1)}px,0)`;
      });
      const s = (p - .5) * 2;
      words.forEach((w, i) => { w.style.transform = `translate3d(${((i - 1) * s * 60).toFixed(1)}px,0,0)`; });
    }

    if (vis.get($('#sobre')) && aboutImg) {
      const b = aboutImg.parentElement.getBoundingClientRect();
      aboutImg.style.transform = `scale(1.15) translate3d(0,${(((b.top + b.height / 2 - innerHeight / 2) / innerHeight) * 36).toFixed(1)}px,0)`;
    }
    if (vis.get($('.footer')) && giant) {
      const p = clamp(1 - giant.getBoundingClientRect().top / innerHeight, 0, 1);
      giant.style.transform = `translate3d(0,${((1 - p) * 40 + 14).toFixed(1)}%,0)`;
    }

    if (frame % 10 === 0) {
      let cur = -1; sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) cur = i; });
      navLinks.forEach((a, i) => a.classList.toggle('is-active', i === cur));
      updateCartBar();
    }
    requestAnimationFrame(loop);
  })();
}

/* =========================================================
   TOAST + INIT
   ========================================================= */
let toastT;
function toast(t) {
  const el = $('#toast'); el.textContent = t; el.classList.add('is-on');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('is-on'), 2300);
}

function init() {
  fillBasics(); renderPrices(); renderHours(); initStories(); initWall();
  cart.load(); initCartEvents(); initBooking(); renderCart();
  splitText(); initReveals(); refreshWa(); upgradeImages();
  initSmooth(); initCursor(); initRipple(); initMagnetic(); initTilt(); initCardGlow();
  initSpotlight(); initLightbox(); initMenu(); initRec(); initStreetView(); initScrollFx();
  preloader(heroIn);
  setInterval(() => { refreshWa(); updateStatus(); }, 60000);
}
document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
