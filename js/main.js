/* =========================================================
   BRAVOS BARBEARIA — main.js
   Tudo que o dono precisa mudar fica no CONFIG abaixo.
   ========================================================= */
const CONFIG = {
  nome: 'Bravos Barbearia',
  whatsapp: '5551996767939',              // DDI + DDD + número, só dígitos
  telefoneExibicao: '(51) 99676-7939',
  endereco: 'R. Paraguai, 33 · Rio Branco',
  cidade: 'Rio Branco · Porto Alegre - RS',
  cidadeCurta: 'Rio Branco',
  mapsBusca: 'Bravos Barbearia, R. Paraguai, 33 - Rio Branco, Porto Alegre - RS',
  avaliacoes: { nota: 4.9, total: 166 },
  // 0 = domingo ... 6 = sábado. null = fechado. [abre, fecha] em horas cheias
  horarios: { 0: null, 1: null, 2: [9, 20], 3: [9, 20], 4: [9, 20], 5: [9, 20], 6: [9, 18] },
  pausaAlmoco: [12],                        // horas sem atendimento
  diasNaAgenda: 6,                          // quantos dias abertos aparecem na agenda
  antecedenciaMin: 30,                      // minutos mínimos para agendar hoje

  servicos: [
    { id: 'corte',       nome: 'Corte',                 cat: 'Cabelo',  desc: 'Acabamento impecável e alinhado ao seu estilo.', preco: 50,  dur: '40 min', img: 'img/barbeiro.jpg' },
    { id: 'barba',       nome: 'Barba na toalha quente', cat: 'Barba',   desc: 'Tradição e relaxamento com navalha afiada.',    preco: 40,  dur: '30 min', img: 'img/maquina.jpg' },
    { id: 'pigmentacao', nome: 'Pigmentação',           cat: 'Estilo',  desc: 'Correção de falhas com aspecto natural.',       preco: 90,  dur: '50 min', img: 'img/cadeira.jpg' },
    { id: 'combo',       nome: 'Combo pai e filho',     cat: 'Família', desc: 'Atendimento simultâneo para vocês dois.',        preco: 120, dur: '60 min', img: 'img/equipe.jpg', largo: true }
  ],
  // serviços que aparecem na agenda (inclui o combo Corte e Barba)
  agenda: ['corte', 'barba', 'corte-barba', 'pigmentacao', 'combo'],
  extras: {
    'corte-barba': { id: 'corte-barba', nome: 'Corte e barba', preco: 80, dur: '1h10' }
  },
  planos: [
    { id: 'corte-barba', nome: 'Corte e Barba',   desc: 'Para homens que buscam precisão e visual impecável na rotina.', tags: ['Corte com degradê navalhado', 'Barba na toalha quente', 'Cerveja artesanal inclusa'], preco: 80 },
    { id: 'combo',       nome: 'Combo Pai e Filho', desc: 'Atendimento exclusivo para momentos em família.',            tags: ['Corte para ambos', 'Ambiente com sinuca', 'Hora marcada sem espera'], preco: 120 },
    { id: 'pigmentacao', nome: 'Pigmentação',     desc: 'Acabamento perfeito para disfarçar falhas.',                    tags: ['Aplicação profissional', 'Efeito natural'], preco: 90 },
    { id: 'corte',       nome: 'Corte',           desc: 'O clássico bem feito, do jeito que você pediu.',                tags: ['Lavagem', 'Finalização com pomada'], preco: 50 }
  ],
  // Stories: só uma frase curta de cada avaliação real
  stories: [
    { nome: 'Diether M.',   frase: 'João é mestre no corte!',               img: 'img/barbeiro.jpg' },
    { nome: 'Vinicius M.',  frase: 'Os caras são bravos!',                  img: 'img/cadeira.jpg' },
    { nome: 'Guilherme D.', frase: 'Fazer a barba é uma experiência ímpar.', img: 'img/maquina.jpg' },
    { nome: 'David B.',     frase: 'Mais do que um corte, uma experiência.', img: 'img/sinuca.jpg' },
    { nome: 'Luciano A.',   frase: 'Atendimento nota mil!',                 img: 'img/equipe.jpg' },
    { nome: 'Matheus L.',   frase: 'Corte do Andrey é fera.',               img: 'img/chope.jpg' }
  ],
  // Avaliações reais do Google Maps (trechos)
  barbeiros: ['Alessandro', 'João Henrique', 'João', 'Andrey', 'Guto', 'Renato'],
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

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const isFine = window.matchMedia('(pointer:fine)').matches;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const money = v => 'R$ ' + v;
const DIAS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const DIAS_CURTO = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const DIAS_TABELA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const pad = n => String(n).padStart(2, '0');

function getServico(id) {
  return CONFIG.servicos.find(s => s.id === id) || CONFIG.extras[id] || CONFIG.planos.find(p => p.id === id);
}

/* =========================================================
   WHATSAPP — mensagens específicas
   ========================================================= */
function saudacao() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'Bom dia';
  if (h >= 12 && h < 18) return 'Boa tarde';
  return 'Boa noite';
}
function nomeCliente() {
  const v = ($('#clientName')?.value || '').trim();
  return v ? ` Meu nome é ${v}.` : '';
}
function msg(tipo, d = {}) {
  const oi = `Olá, ${saudacao().toLowerCase()}!`;
  const s = d.servico ? getServico(d.servico) : null;
  switch (tipo) {
    case 'slot':
      return `${oi}${nomeCliente()} Vim pelo site da ${CONFIG.nome} e quero agendar *${s.nome}* (${money(s.preco)}) para *${d.diaTexto}*, às *${d.hora}*. Pode confirmar pra mim?`;
    case 'servico':
      return `${oi}${nomeCliente()} Vim pelo site da ${CONFIG.nome} e quero agendar *${s.nome}* (${money(s.preco)}). Quais horários vocês têm livres?`;
    case 'plano': {
      const p = CONFIG.planos.find(x => x.id === d.plano);
      return `${oi}${nomeCliente()} Vim pelo site da ${CONFIG.nome} e tenho interesse no plano *${p.nome}* (${money(p.preco)}): ${p.tags.join(', ').toLowerCase()}. Quais horários estão disponíveis?`;
    }
    case 'duvida':
      return `${oi} Vim pelo site da ${CONFIG.nome} e tenho uma dúvida:`;
    case 'local':
      return `${oi} Vim pelo site da ${CONFIG.nome}. Pode me mandar a localização certinha da barbearia?`;
    default:
      return `${oi}${nomeCliente()} Vim pelo site da ${CONFIG.nome} e gostaria de agendar um horário. Quais horários vocês têm disponíveis?`;
  }
}
function waLink(texto) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}
function hrefFor(el) {
  const t = el.dataset.wa;
  return waLink(msg(t, { servico: el.dataset.servico, plano: el.dataset.plano, diaTexto: el.dataset.diatexto, hora: el.dataset.hora }));
}
function refreshWaLinks() { $$('.js-wa').forEach(el => { el.href = hrefFor(el); }); }

// garante a saudação certa no momento do clique
document.addEventListener('pointerdown', e => {
  const el = e.target.closest('.js-wa'); if (el) el.href = hrefFor(el);
}, true);
document.addEventListener('focusin', e => {
  const el = e.target.closest('.js-wa'); if (el) el.href = hrefFor(el);
});
document.addEventListener('click', e => {
  const el = e.target.closest('.js-wa'); if (!el) return;
  el.href = hrefFor(el);
  toast('Abrindo o WhatsApp com sua mensagem pronta…');
});

/* ---------- toast ---------- */
let toastT;
function toast(t) {
  const el = $('#toast'); el.textContent = t; el.classList.add('is-on');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('is-on'), 2600);
}

/* =========================================================
   CONTEÚDO DINÂMICO
   ========================================================= */
function fillBasics() {
  $$('.js-city').forEach(e => e.textContent = CONFIG.cidade);
  $$('.js-city-short').forEach(e => e.textContent = CONFIG.cidadeCurta);
  $$('.js-address').forEach(e => e.textContent = CONFIG.endereco);
  $$('.js-phone').forEach(e => e.textContent = 'WhatsApp ' + CONFIG.telefoneExibicao);
  $$('.js-maps').forEach(e => e.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONFIG.mapsBusca));
  $('#year').textContent = new Date().getFullYear();
}

function renderServices() {
  $('#servicesGrid').innerHTML = CONFIG.servicos.map((s, i) => `
    <a href="#agenda" class="svc${s.largo ? ' svc--wide' : ''}" data-servico-pick="${s.id}" data-img="${s.img}" data-cursor="Agendar">
      <div class="svc__top"><span class="svc__num">${pad(i + 1)}</span><span>${s.cat}</span></div>
      <div>
        <h3 class="svc__title">${s.nome}</h3>
        <p class="svc__desc">${s.desc}</p>
        <div class="svc__meta">
          <span class="svc__price">${money(s.preco)} · ${s.dur}</span>
          <span class="svc__go">Escolher horário →</span>
        </div>
      </div>
    </a>`).join('');
}

function renderPlans() {
  $('#plansList').innerHTML = CONFIG.planos.map(p => `
    <a class="plan js-wa" data-wa="plano" data-plano="${p.id}" href="#" target="_blank" rel="noopener" data-cursor="WhatsApp">
      <div><h3 class="plan__name">${p.nome}</h3><p class="plan__desc">${p.desc}</p></div>
      <div class="plan__tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="plan__price"><small>R$</small> <span class="count" data-to="${p.preco}">0</span></div>
      <div class="plan__cta">Pedir este plano no WhatsApp ↗</div>
    </a>`).join('');
}

/* ---------- horários / status ---------- */
function renderHours() {
  const today = new Date().getDay();
  const order = [1, 2, 3, 4, 5, 6, 0];
  $('#hoursList').innerHTML = order.map(d => {
    const h = CONFIG.horarios[d];
    return `<li class="${h ? '' : 'is-closed'} ${d === today ? 'is-today' : ''}"><span>${DIAS_TABELA[d]}</span><span>${h ? `${pad(h[0])}:00 – ${pad(h[1])}:00` : 'fechado'}</span></li>`;
  }).join('');
  updateStatus();
}
function updateStatus() {
  const now = new Date(); const h = CONFIG.horarios[now.getDay()];
  const el = $('#openStatus'); const mins = now.getHours() * 60 + now.getMinutes();
  el.classList.remove('is-open', 'is-closed');
  if (h && mins >= h[0] * 60 && mins < h[1] * 60) {
    el.classList.add('is-open'); el.querySelector('span').textContent = `Aberto agora · fecha às ${h[1]}h`;
  } else {
    el.classList.add('is-closed');
    // próximo dia aberto
    for (let i = 0; i < 8; i++) {
      const d = new Date(now); d.setDate(now.getDate() + i);
      const hh = CONFIG.horarios[d.getDay()];
      if (!hh) continue;
      if (i === 0 && mins >= hh[0] * 60) continue;
      const quando = i === 0 ? 'hoje' : i === 1 ? 'amanhã' : DIAS[d.getDay()];
      el.querySelector('span').textContent = `Fechado agora · abre ${quando} às ${hh[0]}h`;
      break;
    }
  }
}

/* =========================================================
   AGENDA
   ========================================================= */
const booking = { servico: 'corte', dayIndex: 0, days: [] };

function buildDays() {
  const out = []; const now = new Date();
  for (let i = 0; out.length < CONFIG.diasNaAgenda && i < 21; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const h = CONFIG.horarios[d.getDay()]; if (!h) continue;
    const slots = [];
    for (let hr = h[0]; hr < h[1]; hr++) {
      if (CONFIG.pausaAlmoco.includes(hr)) continue;
      if (i === 0) {
        const limite = now.getHours() * 60 + now.getMinutes() + CONFIG.antecedenciaMin;
        if (hr * 60 < limite) continue;
      }
      slots.push(`${pad(hr)}:00`);
    }
    if (!slots.length) continue;
    const label = i === 0 ? 'Hoje' : i === 1 ? 'Amanhã' : `${DIAS_CURTO[d.getDay()]} ${d.getDate()}`;
    const dataBr = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`;
    const texto = i === 0 ? `hoje, ${DIAS[d.getDay()]} (${dataBr})` : i === 1 ? `amanhã, ${DIAS[d.getDay()]} (${dataBr})` : `${DIAS[d.getDay()]}, ${dataBr}`;
    out.push({ label, texto, slots });
  }
  booking.days = out;
}

function renderBookingServices() {
  $('#bookingServices').innerHTML = CONFIG.agenda.map(id => {
    const s = getServico(id);
    return `<label class="opt" data-cursor="Escolher">
      <input type="radio" name="servico" value="${id}" ${id === booking.servico ? 'checked' : ''}>
      <span class="opt__radio"></span>
      <span class="opt__name">${s.nome}</span>
      <span class="opt__time">${s.dur}</span>
      <span class="opt__price">${money(s.preco)}</span>
    </label>`;
  }).join('');
  $$('#bookingServices input').forEach(inp => inp.addEventListener('change', () => {
    booking.servico = inp.value; renderSlots(); updatePreview();
  }));
}

function renderDays() {
  $('#bookingDays').innerHTML = booking.days.map((d, i) =>
    `<button class="day ${i === booking.dayIndex ? 'is-active' : ''}" role="tab" aria-selected="${i === booking.dayIndex}" data-i="${i}">${d.label}</button>`).join('');
  $$('#bookingDays .day').forEach(b => b.addEventListener('click', () => {
    booking.dayIndex = +b.dataset.i; renderDays(); renderSlots(); updatePreview();
  }));
  const abertos = Object.entries(CONFIG.horarios).filter(([, v]) => v);
  const ini = DIAS_CURTO[abertos[0][0]], fim = DIAS_CURTO[abertos[abertos.length - 1][0]];
  $('#bookingHoursNote').textContent = `${ini} a ${fim} · consulte o horário de cada dia`;
}

function renderSlots() {
  const d = booking.days[booking.dayIndex];
  const box = $('#bookingSlots');
  if (!d) { box.innerHTML = `<p class="booking__empty">Agenda sem horários no momento. Fale com a gente no WhatsApp.</p>`; return; }
  box.innerHTML = d.slots.map((h, i) => `
    <a class="slot js-wa" style="--i:${i}" data-wa="slot" data-servico="${booking.servico}" data-diatexto="${d.texto}" data-hora="${h}"
       href="#" target="_blank" rel="noopener" data-cursor="Agendar" aria-label="Agendar ${h}">
      <span class="slot__perf"></span><strong>${h}</strong><small>livre</small>
    </a>`).join('');
  $$('.slot', box).forEach(s => {
    s.href = hrefFor(s);
    s.addEventListener('mouseenter', () => updatePreview(s));
    s.addEventListener('focus', () => updatePreview(s));
  });
  bindCursorTargets(box);
  bindMagnetic($$('.slot', box), .15);
}

function updatePreview(slotEl) {
  const p = $('#msgPreview');
  const d = booking.days[booking.dayIndex];
  const hora = slotEl ? slotEl.dataset.hora : (d ? d.slots[0] : '');
  if (!d) { p.textContent = msg('geral'); return; }
  p.textContent = msg('slot', { servico: booking.servico, diaTexto: d.texto, hora });
}

function pickService(id) {
  if (!CONFIG.agenda.includes(id)) return;
  booking.servico = id;
  const inp = $(`#bookingServices input[value="${id}"]`); if (inp) inp.checked = true;
  renderSlots(); updatePreview();
  toast(`${getServico(id).nome} selecionado — agora escolha o horário`);
}

function initBooking() {
  buildDays(); renderBookingServices(); renderDays(); renderSlots(); updatePreview();
  $('#clientName').addEventListener('input', () => { refreshWaLinks(); $$('#bookingSlots .slot').forEach(s => s.href = hrefFor(s)); updatePreview(); });
  document.addEventListener('click', e => {
    const card = e.target.closest('[data-servico-pick]'); if (card) pickService(card.dataset.servicoPick);
  });
}

/* =========================================================
   DEPOIMENTOS (stories)
   ========================================================= */
function initStories() {
  const stage = $('#storiesStage'); const list = CONFIG.stories;
  stage.innerHTML = list.map((t, i) => `
    <article class="story" data-i="${i}">
      <div class="story__bg"><img src="${t.img}" alt=""></div>
      <div class="story__bars">${list.map(() => '<i><b></b></i>').join('')}</div>
      <blockquote class="story__quote">${t.frase}</blockquote>
      <div class="story__name">${t.nome} <span>· Google</span></div>
      <div class="story__side-label">${t.nome}</div>
    </article>`).join('');
  const cards = $$('.story', stage);
  let active = 0, start = performance.now(); const DUR = 5200;

  function layout() {
    const n = cards.length; const small = innerWidth < 720;
    cards.forEach((c, i) => {
      let off = i - active; if (off > n / 2) off -= n; if (off < -n / 2) off += n;
      const abs = Math.abs(off);
      c.classList.toggle('is-side', off !== 0);
      const x = off * (small ? 190 : 360);
      const sc = off === 0 ? 1 : 0.62;
      const ry = off * -14;
      c.style.transform = `translateX(${x}px) scale(${sc}) rotateY(${ry}deg)`;
      c.style.zIndex = 10 - abs;
      c.style.opacity = abs > 1 ? 0 : 1;
      c.style.pointerEvents = abs > 1 ? 'none' : 'auto';
      $$('.story__bars b', c).forEach((b, bi) => { b.style.width = bi < active ? '100%' : '0%'; });
    });
  }
  function go(i) { active = (i + cards.length) % cards.length; start = performance.now(); layout(); }
  cards.forEach((c, i) => c.addEventListener('click', () => { if (i !== active) go(i); }));
  $('#storyPrev').addEventListener('click', () => go(active - 1));
  $('#storyNext').addEventListener('click', () => go(active + 1));
  // arrastar / swipe
  let sx = null;
  stage.addEventListener('pointerdown', e => { sx = e.clientX; });
  addEventListener('pointerup', e => { if (sx === null) return; const dx = e.clientX - sx; if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1)); sx = null; });
  let paused = false;
  stage.addEventListener('mouseenter', () => paused = true);
  stage.addEventListener('mouseleave', () => { paused = false; start = performance.now() - (start ? 0 : 0); });
  (function tick(t) {
    if (!paused) {
      const p = clamp((t - start) / DUR, 0, 1);
      const bar = $$('.story__bars b', cards[active])[active]; if (bar) bar.style.width = (p * 100) + '%';
      if (p >= 1) go(active + 1);
    } else start = t - 0; // segura o progresso
    requestAnimationFrame(tick);
  })(performance.now());
  layout(); addEventListener('resize', layout);
}

/* =========================================================
   EFEITOS
   ========================================================= */

/* ---- split words ---- */
function splitWords() {
  $$('.split-words').forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) => `<span class="w"><span style="--i:${i}">${w}</span></span>`).join(' ');
  });
}

/* ---- reveals ---- */
function initReveals() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('is-in');
      if (en.target.classList.contains('count')) countUp(en.target);
      if (en.target.classList.contains('count-dec')) countDec(en.target);
      if (en.target.classList.contains('eyebrow')) scramble(en.target);
      if (en.target.classList.contains('rating')) { const f = $('#ratingFill'); if (f) setTimeout(() => f.style.width = (CONFIG.avaliacoes.nota / 5 * 100) + '%', 300); }
      io.unobserve(en.target);
    });
  }, { threshold: .18, rootMargin: '0px 0px -6% 0px' });
  $$('.split-words, .reveal-blur, .reveal-up, .count, .count-dec').forEach(el => { if (!el.closest('.hero')) io.observe(el); });
}
function countUp(el) {
  const to = +el.dataset.to; const dur = 1600; const t0 = performance.now();
  (function f(t) { const p = clamp((t - t0) / dur, 0, 1); const e = 1 - Math.pow(1 - p, 4); el.textContent = Math.round(to * e); if (p < 1) requestAnimationFrame(f); })(t0);
}
function countDec(el) {
  const to = +el.dataset.to; const t0 = performance.now();
  (function f(t) { const p = clamp((t - t0) / 1800, 0, 1); const e = 1 - Math.pow(1 - p, 4); el.textContent = (to * e).toFixed(1).replace('.', ','); if (p < 1) requestAnimationFrame(f); })(t0);
}
/* ---- texto embaralhado (scramble) ---- */
function scramble(el) {
  if (reduced || el.__sc) return; el.__sc = 1;
  const final = el.textContent; const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=/<>';
  let frame = 0; const total = final.length * 2 + 10;
  (function f() {
    el.textContent = final.split('').map((c, i) => c === ' ' ? ' ' : (frame / 2 > i ? c : chars[Math.floor(Math.random() * chars.length)])).join('');
    if (++frame <= total) requestAnimationFrame(f); else el.textContent = final;
  })();
}
/* ---- mural de avaliações ---- */
function destaque(txt) {
  const re = new RegExp('(' + CONFIG.barbeiros.join('|') + ')', 'g');
  return txt.replace(re, '<em>$1</em>');
}
function initWall() {
  const list = CONFIG.depoimentos; const n = Math.ceil(list.length / 3);
  const tipos = ['', 'wall__card--red', '', 'wall__card--line', '', 'wall__card--big'];
  const card = (t, i) => `<figure class="wall__card ${tipos[i % tipos.length]}">
      <blockquote>${destaque(t.texto)}</blockquote>
      <figcaption><span class="avatar">${t.nome[0]}</span><strong>${t.nome}</strong><small>${t.quando}</small><span class="wall__g">G</span></figcaption>
    </figure>`;
  const grupos = [list.slice(0, n), list.slice(n, n * 2), list.slice(n * 2)];
  ['#wallA', '#wallB', '#wallC'].forEach((id, gi) => {
    const html = grupos[gi].map((t, i) => card(t, i + gi * 2)).join('');
    $(id).innerHTML = `<div class="wall__track">${html}${html}</div>`;
  });
}
/* ---- toque no celular: ondinha ---- */
function initTouchFx() {
  addEventListener('touchstart', e => {
    const t = e.touches[0]; if (!t) return;
    const rp = document.createElement('span'); rp.className = 'click-ripple';
    rp.style.left = t.clientX + 'px'; rp.style.top = t.clientY + 'px'; document.body.appendChild(rp);
    setTimeout(() => rp.remove(), 750);
  }, { passive: true });
}
function heroIn() { $$('.hero .split-words, .hero .reveal-blur').forEach((el, i) => setTimeout(() => el.classList.add('is-in'), 150 + i * 260)); }

/* ---- HD images (carrega versão em alta se disponível) ---- */
function upgradeImages() {
  $$('img[data-hd]').forEach(img => {
    const hd = new Image();
    hd.onload = () => { if (hd.naturalWidth > 200) img.src = hd.src; };
    hd.src = img.dataset.hd;
  });
}

/* ---- preloader ---- */
function preloader(done) {
  const pre = $('#preloader'), bar = $('#preloaderBar'), cnt = $('#preloaderCount');
  if (reduced) { pre.classList.add('is-gone'); document.body.classList.remove('is-loading'); done(); return; }
  let v = 0; const t0 = performance.now();
  (function f(t) {
    v = clamp((t - t0) / 1700, 0, 1); const e = 1 - Math.pow(1 - v, 3);
    bar.style.width = (e * 100) + '%'; cnt.textContent = pad(Math.round(e * 100));
    if (v < 1) requestAnimationFrame(f);
    else {
      pre.classList.add('is-done'); document.body.classList.remove('is-loading');
      setTimeout(done, 350); setTimeout(() => pre.classList.add('is-gone'), 1300);
    }
  })(t0);
}

/* ---- cursor ---- */
const mouse = { x: innerWidth / 2, y: innerHeight / 2, px: 0, py: 0, vx: 0, vy: 0 };
addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

function initCursor() {
  if (!isFine) return;
  document.body.classList.add('has-cursor');
  const cur = $('#cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring'), label = $('#cursorLabel');
  const r = { x: mouse.x, y: mouse.y };
  // trail
  const cv = $('#cursorTrail'), ctx = cv.getContext('2d'); const parts = [];
  const resize = () => { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); };
  resize(); addEventListener('resize', resize);

  (function loop() {
    mouse.vx = mouse.x - mouse.px; mouse.vy = mouse.y - mouse.py; mouse.px = mouse.x; mouse.py = mouse.y;
    r.x = lerp(r.x, mouse.x, .16); r.y = lerp(r.y, mouse.y, .16);
    const sp = Math.min(Math.hypot(mouse.vx, mouse.vy), 40);
    const ang = Math.atan2(mouse.vy, mouse.vx);
    dot.style.transform = `translate(${mouse.x}px,${mouse.y}px)`;
    ring.style.transform = `translate(${r.x}px,${r.y}px) rotate(${ang}rad) scale(${1 + sp / 120},${1 - sp / 200})`;
    if (cur.classList.contains('is-hover')) ring.style.transform = `translate(${r.x}px,${r.y}px)`;
    // particles
    if (sp > 1.5) parts.push({ x: mouse.x, y: mouse.y, a: .55, s: 2 + Math.random() * 2.5 });
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i]; p.a -= .022; p.s *= .965;
      if (p.a <= 0) { parts.splice(i, 1); continue; }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2); ctx.fillStyle = `rgba(225,36,43,${p.a})`; ctx.fill();
    }
    requestAnimationFrame(loop);
  })();

  addEventListener('mousedown', e => {
    cur.classList.add('is-down');
    const rp = document.createElement('span'); rp.className = 'click-ripple';
    rp.style.left = e.clientX + 'px'; rp.style.top = e.clientY + 'px'; document.body.appendChild(rp);
    setTimeout(() => rp.remove(), 750);
  });
  addEventListener('mouseup', () => cur.classList.remove('is-down'));
  document.addEventListener('mouseleave', () => cur.classList.add('is-hidden'));
  document.addEventListener('mouseenter', () => cur.classList.remove('is-hidden'));
  bindCursorTargets(document);
  window.__cursor = { cur, label };
}
function bindCursorTargets(root) {
  if (!isFine) return;
  const cur = $('#cursor'), label = $('#cursorLabel');
  $$('[data-cursor]', root).forEach(el => {
    if (el.__cb) return; el.__cb = 1;
    el.addEventListener('mouseenter', () => { label.textContent = el.dataset.cursor; cur.classList.add('is-hover'); cur.classList.remove('is-link'); });
    el.addEventListener('mouseleave', e => {
      cur.classList.remove('is-hover');
      const parent = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('[data-cursor]');
      if (parent) { label.textContent = parent.dataset.cursor; cur.classList.add('is-hover'); }
    });
  });
  $$('a:not([data-cursor]), button:not([data-cursor]), summary, input', root).forEach(el => {
    if (el.__cl) return; el.__cl = 1;
    el.addEventListener('mouseenter', () => { if (!cur.classList.contains('is-hover')) cur.classList.add('is-link'); });
    el.addEventListener('mouseleave', () => cur.classList.remove('is-link'));
  });
}

/* ---- magnetic ---- */
function bindMagnetic(els, force = .35) {
  if (!isFine) return;
  els.forEach(el => {
    if (el.__mg) return; el.__mg = 1;
    el.addEventListener('mousemove', e => {
      const b = el.getBoundingClientRect();
      const x = (e.clientX - b.left - b.width / 2) * force, y = (e.clientY - b.top - b.height / 2) * force;
      el.style.transform = `translate(${x}px,${y}px)`;
      const t = el.querySelector('.btn__text'); if (t) t.style.transform = `translate(${x * .35}px,${y * .35}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform .7s cubic-bezier(.22,1.6,.36,1)';
      el.style.transform = '';
      const t = el.querySelector('.btn__text'); if (t) t.style.transform = '';
      setTimeout(() => el.style.transition = '', 700);
    });
  });
}

/* ---- tilt 3D ---- */
function initTilt() {
  if (!isFine) return;
  $$('.tilt').forEach(el => {
    el.addEventListener('mousemove', e => {
      const b = el.getBoundingClientRect();
      const rx = ((e.clientY - b.top) / b.height - .5) * -10, ry = ((e.clientX - b.left) / b.width - .5) * 12;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });
}

/* ---- hover reveal (serviços) ---- */
function initHoverReveal() {
  if (!isFine) return;
  const box = $('#hoverReveal'), inner = $('.hover-reveal__inner', box), img = $('img', box);
  const p = { x: 0, y: 0 }; let on = false;
  $('#servicesGrid').addEventListener('mouseover', e => {
    const c = e.target.closest('.svc'); if (!c) return;
    if (img.getAttribute('src') !== c.dataset.img) img.src = c.dataset.img;
    on = true; box.classList.add('is-on');
  });
  $('#servicesGrid').addEventListener('mouseleave', () => { on = false; box.classList.remove('is-on'); });
  (function loop() {
    p.x = lerp(p.x, mouse.x + 40, .12); p.y = lerp(p.y, mouse.y - 190, .12);
    const rot = clamp((mouse.x + 40 - p.x) * .08, -14, 14);
    box.style.transform = `translate(${p.x}px,${p.y}px) scale(${on ? 1 : .6})`;
    inner.style.transform = `rotate(${rot}deg)`;
    requestAnimationFrame(loop);
  })();
}

/* ---- spotlight ---- */
function initSpotlight() {
  const sec = $('#spotlight'), lit = $('#spotlightLit');
  const t = { x: .7, y: .4 }, c = { x: .7, y: .4 }; let inside = false, r = 220, rt = 220;
  sec.addEventListener('mousemove', e => {
    const b = sec.getBoundingClientRect(); t.x = (e.clientX - b.left) / b.width; t.y = (e.clientY - b.top) / b.height; inside = true; rt = 260;
  });
  sec.addEventListener('mouseleave', () => { inside = false; rt = 200; });
  sec.addEventListener('touchmove', e => { const b = sec.getBoundingClientRect(); const tt = e.touches[0]; t.x = (tt.clientX - b.left) / b.width; t.y = (tt.clientY - b.top) / b.height; inside = true; }, { passive: true });
  (function loop(time) {
    if (!inside) { // passeia sozinho (vai e volta)
      t.x = .62 + Math.sin(time / 1700) * .2; t.y = .42 + Math.cos(time / 2300) * .16;
    }
    c.x = lerp(c.x, t.x, .08); c.y = lerp(c.y, t.y, .08); r = lerp(r, rt, .06);
    lit.style.setProperty('--x', (c.x * 100) + '%'); lit.style.setProperty('--y', (c.y * 100) + '%'); lit.style.setProperty('--r', r + 'px');
    requestAnimationFrame(loop);
  })(0);
}

/* ---- lightbox ---- */
function initLightbox() {
  const lb = $('#lightbox'), im = $('#lightboxImg'), cap = $('#lightboxCap');
  $$('.club__img').forEach(f => f.addEventListener('click', () => {
    const i = $('img', f); im.src = i.src; im.alt = i.alt; cap.textContent = $('figcaption', f)?.textContent || '';
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false');
  }));
  const close = () => { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); };
  $('#lightboxClose').addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ---- menu ---- */
function initMenu() {
  const b = $('#burger'), m = $('#mobileMenu');
  const toggle = open => { b.classList.toggle('is-open', open); m.classList.toggle('is-open', open); b.setAttribute('aria-expanded', open); m.setAttribute('aria-hidden', !open); document.body.style.overflow = open ? 'hidden' : ''; };
  b.addEventListener('click', () => toggle(!m.classList.contains('is-open')));
  $$('a', m).forEach(a => a.addEventListener('click', () => toggle(false)));
}

/* ---- REC timer ---- */
function initRec() {
  const el = $('#recTimer'); const t0 = performance.now();
  (function f(t) {
    const ms = t - t0 + 1000 * 60 * 50; // começa em 00:50:00 como câmera ligada
    const h = Math.floor(ms / 3.6e6), m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1000) % 60, fr = Math.floor(ms / 41.66) % 24;
    el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(fr)}`;
    requestAnimationFrame(f);
  })(t0);
}

/* =========================================================
   SCROLL LOOP — parallax, faixa vai-e-volta, galeria
   ========================================================= */
function initScrollFx() {
  const header = $('#header'), prog = $('#scrollProgress');
  const heroMedia = $('.hero__media'), heroContent = $('.hero__content'), hero = $('#hero'), cross = $('.hero__crosshair');
  const club = $('#galeria'), clubImgs = $$('.club__img'), words = $$('.club__word');
  const rows = $$('.band__row').map(r => ({ el: r, track: $('.band__track', r), dir: +r.dataset.dir, x: 0 }));
  const aboutImg = $('.about__main'); const plansCard = $('#plansCard'); const giant = $('.footer__giant');
  const navLinks = $$('.nav__link'); const sections = navLinks.map(a => $(a.getAttribute('href')));
  const wallRows = $$('.wall__row').map(el => ({ el, track: el.firstElementChild, auto: el.dataset.auto === '1', dir: +el.dataset.dir || 1, x: 0 }));
  let lastY = scrollY, vel = 0, scrollDir = 1, mx = 0, my = 0;

  (function loop() {
    const y = scrollY; const dy = y - lastY; lastY = y;
    vel = lerp(vel, dy, .12);
    if (Math.abs(dy) > 0.5) scrollDir = dy > 0 ? 1 : -1;
    const H = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${H > 0 ? y / H : 0})`;

    header.classList.toggle('is-scrolled', y > 40);
    header.classList.toggle('is-hidden', y > 500 && vel > 2 && !$('#mobileMenu').classList.contains('is-open'));
    if (vel < -2) header.classList.remove('is-hidden');

    // hero
    if (y < innerHeight * 1.2 && !reduced) {
      heroMedia.style.transform = `translateY(${y * .28}px) scale(${1 + y / 4000})`;
      const p = clamp(y / (innerHeight * .7), 0, 1);
      heroContent.style.opacity = 1 - p; heroContent.style.filter = `blur(${p * 10}px)`; heroContent.style.transform = `translateY(${-p * 60}px)`;
    }
    if (isFine) {
      const b = hero.getBoundingClientRect();
      cross.style.transform = `translate(${(mouse.x - b.left - b.width / 2) * .35}px,${(mouse.y - b.top - b.height * .55) * .35}px)`;
    }

    // faixa vermelha — direção acompanha a rolagem (vai e volta) + velocidade
    rows.forEach(r => {
      const w = r.track.scrollWidth / 2;
      r.x -= (0.9 + Math.abs(vel) * .35) * r.dir * scrollDir;
      if (r.x <= -w) r.x += w; if (r.x > 0) r.x -= w;
      const skew = clamp(vel * .25, -8, 8);
      r.track.style.transform = `translateX(${r.x}px) skewX(${-skew}deg)`;
    });

    // mural de avaliações: linhas A e C andam com a rolagem, B anda sozinha (e acelera com a rolagem)
    wallRows.forEach(r => {
      const b = r.el.getBoundingClientRect();
      if (b.bottom < -200 || b.top > innerHeight + 200) return;
      const tw = r.track.scrollWidth / 2;
      if (r.auto) {
        r.x -= (0.7 + Math.abs(vel) * .25) * scrollDir;
        if (r.x <= -tw) r.x += tw; if (r.x > 0) r.x -= tw;
      } else {
        const p = (b.top + b.height / 2 - innerHeight / 2) / innerHeight; // ~ -1..1
        r.x = lerp(r.x, -tw * .5 + p * r.dir * tw * .35, .1);
      }
      const sk = clamp(vel * .2, -6, 6);
      r.track.style.transform = `translate3d(${r.x}px,0,0) skewX(${-sk}deg)`;
    });

    // galeria clube
    if (innerWidth > 720) {
      const b = club.getBoundingClientRect();
      const p = clamp(-b.top / (b.height - innerHeight), 0, 1);
      mx = lerp(mx, mouse.x / innerWidth - .5, .06); my = lerp(my, mouse.y / innerHeight - .5, .06);
      if (b.top < innerHeight && b.bottom > 0) {
        clubImgs.forEach(f => {
          const sp = +f.dataset.speed, dp = +f.dataset.depth;
          f.style.transform = `translate3d(${mx * -dp}px, ${(p - .5) * sp * -900 + my * -dp}px, 0)`;
        });
        const spread = (p - .5) * 2; // -1..1
        words.forEach((w, i) => { const k = i - 1; w.style.transform = `translateX(${k * spread * 60}px) scale(${1 + (1 - Math.abs(spread)) * .08})`; });
      }
    }

    // sobre — parallax interno
    if (aboutImg) { const b = aboutImg.parentElement.getBoundingClientRect(); const p = (b.top + b.height / 2 - innerHeight / 2) / innerHeight; aboutImg.style.transform = `scale(1.15) translateY(${p * 40}px)`; }

    // card planos — sobe e desfoca na entrada
    if (plansCard) {
      const b = plansCard.getBoundingClientRect(); const p = clamp(1 - (b.top - innerHeight * .25) / (innerHeight * .75), 0, 1);
      plansCard.style.transform = `translateY(${(1 - p) * 80}px) scale(${.94 + p * .06})`;
      plansCard.style.filter = p < 1 ? `blur(${(1 - p) * 6}px)` : 'none';
    }

    // rodapé
    if (giant) { const b = giant.getBoundingClientRect(); const p = clamp(1 - b.top / innerHeight, 0, 1); giant.style.transform = `translateY(${(1 - p) * 40 + 12}%)`; giant.style.letterSpacing = `${-0.07 + (1 - p) * .05}em`; }

    // menu ativo
    let cur = -1; sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) cur = i; });
    navLinks.forEach((a, i) => a.classList.toggle('is-active', i === cur));

    requestAnimationFrame(loop);
  })();
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  fillBasics(); renderServices(); renderPlans(); renderHours(); initBooking(); initStories(); initWall(); initTouchFx();
  splitWords(); initReveals(); refreshWaLinks(); upgradeImages();
  initCursor(); bindMagnetic($$('.magnetic')); initTilt(); initHoverReveal(); initSpotlight();
  initLightbox(); initMenu(); initRec(); initScrollFx();
  preloader(heroIn);
  setInterval(() => { refreshWaLinks(); updateStatus(); }, 60000);
});
