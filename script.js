// «Свои»: логика сайта (демо-версия без сервера)
const CATS = [
  { id: 'games', name: 'Игры', emoji: '🎮', color: '#3D5AFE' },
  { id: 'art', name: 'Рисование', emoji: '🎨', color: '#FF5C8A' },
  { id: 'sport', name: 'Спорт', emoji: '🏀', color: '#FF8A3D' },
  { id: 'board', name: 'Настолки', emoji: '🎲', color: '#F5B700' },
  { id: 'music', name: 'Музыка', emoji: '🎧', color: '#8B5CF6' },
  { id: 'anime', name: 'Аниме и книги', emoji: '📚', color: '#2FD6A0' },
  { id: 'code', name: 'Код и техника', emoji: '💻', color: '#18A7D8' },
  { id: 'video', name: 'Кино и видео', emoji: '🎬', color: '#E5484D' }
];

// Вымышленные анкеты. also: другие интересы человека (нужны для подбора)
const PEOPLE = [
  { id: 1, cat: 'games', also: ['board'], nick: 'PixelFox', emoji: '🦊', age: 14, tags: ['Minecraft', 'Roblox'], bio: 'Строю базы в Minecraft и ищу напарников для выживания. Играю по вечерам.', reviews: [{ name: 'NovaStar', stars: 5, text: 'Классно построили замок вместе, всё объясняет.' }] },
  { id: 2, cat: 'games', also: ['code'], nick: 'NightOwl', emoji: '🦉', age: 16, tags: ['Valorant', 'Among Us'], bio: 'Люблю командные игры и спокойное общение без криков.', reviews: [] },
  { id: 3, cat: 'art', also: ['anime'], nick: 'InkWave', emoji: '🖌️', age: 15, tags: ['Скетчи', 'Комиксы'], bio: 'Рисую веб-комиксы. Хочу найти тех, с кем можно делать общий проект.', reviews: [{ name: 'Mira_K', stars: 5, text: 'Помог с цветами в моём рисунке, очень терпеливый.' }] },
  { id: 4, cat: 'music', also: ['code', 'video'], nick: 'LoFiCat', emoji: '🎧', age: 17, tags: ['FL Studio', 'Лоу-фай'], bio: 'Делаю биты. Ищу вокалистов и тех, кто хочет научиться сводить треки.', reviews: [] },
  { id: 5, cat: 'sport', also: ['video'], nick: 'SkateBee', emoji: '🛹', age: 14, tags: ['Скейт', 'Велосипед'], bio: 'Катаюсь после уроков. Ищу компанию для прогулок и тренировок трюков.', reviews: [] },
  { id: 6, cat: 'sport', also: [], nick: 'HoopDream', emoji: '🏀', age: 16, tags: ['Баскетбол', 'Бег'], bio: 'Играю в баскетбол во дворе. Хочу собрать команду 3 на 3.', reviews: [] },
  { id: 7, cat: 'board', also: ['anime', 'games'], nick: 'DiceQueen', emoji: '👑', age: 15, tags: ['Настолки', 'Фэнтези'], bio: 'Обожаю настолки и фэнтези-книги. Можно играть онлайн в Tabletop Simulator.', reviews: [{ name: 'PixelFox', stars: 5, text: 'Отлично объясняет правила, играли три часа.' }] },
  { id: 8, cat: 'anime', also: ['art'], nick: 'BookMoth', emoji: '📖', age: 17, tags: ['Манга', 'Аниме'], bio: 'Читаю мангу и смотрю аниме. Ищу тех, с кем можно обсуждать сюжеты.', reviews: [] },
  { id: 9, cat: 'code', also: ['games'], nick: 'ByteBunny', emoji: '🐰', age: 15, tags: ['Python', 'Боты для Discord'], bio: 'Учусь писать на Python и делаю ботов. Могу помочь новичкам.', reviews: [] },
  { id: 10, cat: 'video', also: ['music'], nick: 'CutFrame', emoji: '🎬', age: 16, tags: ['Монтаж', 'Shorts'], bio: 'Монтирую короткие видео. Ищу тех, кто снимает, и тех, кто пишет музыку.', reviews: [] },
  { id: 11, cat: 'music', also: ['games'], nick: 'SynthWolf', emoji: '🐺', age: 14, tags: ['Гитара', 'Синтезаторы'], bio: 'Играю на гитаре и пробую синтезаторы. Хочу собрать школьную группу онлайн.', reviews: [] },
  { id: 12, cat: 'art', also: ['board'], nick: 'PaperKite', emoji: '🪁', age: 17, tags: ['Акварель', 'Скетчбук'], bio: 'Рисую акварелью и веду скетчбук. Люблю делиться приёмами.', reviews: [] }
];

const TEAMS = [
  { id: 1, cat: 'games', band: '13–15', title: 'Выживание в Minecraft', when: 'пятница, 19:00', size: 5, taken: 3, desc: 'Строим общую базу. Голосовой чат не обязателен.' },
  { id: 2, cat: 'games', band: '16–17', title: 'Командный шутер без токсичности', when: 'суббота, 20:00', size: 5, taken: 4, desc: 'Играем для удовольствия, без криков и обвинений.' },
  { id: 3, cat: 'art', band: '13–15', title: 'Комикс на троих', when: 'каждое воскресенье', size: 3, taken: 1, desc: 'Один пишет сюжет, двое рисуют. Темп спокойный.' },
  { id: 4, cat: 'sport', band: '16–17', title: 'Баскетбол 3 на 3 во дворе', when: 'среда, 17:30', size: 6, taken: 4, desc: 'Встреча в людном месте. Родители должны знать, куда ты идёшь.' },
  { id: 5, cat: 'board', band: '13–15', title: 'Вечер настолок онлайн', when: 'четверг, 18:00', size: 6, taken: 2, desc: 'Играем в Tabletop Simulator, правила объясним новичкам.' },
  { id: 6, cat: 'code', band: '16–17', title: 'Клуб начинающих программистов', when: 'вторник, 19:00', size: 8, taken: 5, desc: 'Делаем маленькие проекты вместе и разбираем ошибки.' }
];

const KEY = 'svoi.v2';
const S = { user: null, favs: [], reqs: [], joined: [], cat: 'all', band: 'all', q: '', pick: [], stars: 5, open: null, after: null };
try { const saved = JSON.parse(localStorage.getItem(KEY) || '{}'); ['user', 'favs', 'reqs', 'joined'].forEach(k => { if (saved[k] !== undefined) S[k] = saved[k]; }); } catch (e) { /* хранилище недоступно */ }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ user: S.user, favs: S.favs, reqs: S.reqs, joined: S.joined })); } catch (e) { /* ничего */ } };

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const mono = p => esc(p.nick.slice(0, 2).toUpperCase());
const bandOf = a => (a <= 15 ? '13–15' : '16–17');
const catOf = id => CATS.find(c => c.id === id);
const myBand = () => (S.user ? bandOf(S.user.age) : S.band);
const inBand = band => myBand() === 'all' || band === myBand();

function visible() {
  const q = S.q.trim().toLowerCase();
  return PEOPLE.filter(p => (S.cat === 'all' || p.cat === S.cat) && inBand(bandOf(p.age)) && (!q || (p.nick + ' ' + p.tags.join(' ')).toLowerCase().includes(q)));
}

const tags = p => p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('');

function personCard(p, extra = '') {
  const c = catOf(p.cat);
  return `<article class="card" style="--c:${c.color}">
    <button class="heart ${S.favs.includes(p.id) ? 'on' : ''}" data-fav="${p.id}" aria-label="В избранное" aria-pressed="${S.favs.includes(p.id)}">♥</button>
    <div class="ava">${mono(p)}</div>
    <h3>${esc(p.nick)}</h3>
    <div class="row"><span class="age">${p.age} лет</span><span class="tag">${c.name}</span></div>
    <div class="row">${tags(p)}</div>
    <p>${esc(p.bio)}</p>
    ${extra}
    <button class="btn" data-open="${p.id}">Открыть анкету</button>
  </article>`;
}

function renderTiles() {
  $('#tiles').innerHTML = CATS.map(c => {
    const n = PEOPLE.filter(p => p.cat === c.id && inBand(bandOf(p.age))).length;
    return `<button class="tile" style="--c:${c.color}" data-cat="${c.id}" data-go="catalog"><b>${c.name}</b><small>Анкет: ${n}</small></button>`;
  }).join('');
}

function renderChips() {
  $('#catChips').innerHTML = [{ id: 'all', name: 'Все интересы', emoji: '✨', color: '#14142B' }, ...CATS]
    .map(c => `<button class="chip ${S.cat === c.id ? 'on' : ''}" style="--c:${c.color}" data-cat="${c.id}">${c.name}</button>`).join('');
  const own = !!S.user;
  $('#ageChips').innerHTML = own
    ? `<span class="note">Показаны ребята твоей группы: ${bandOf(S.user.age)}</span>`
    : ['all', '13–15', '16–17'].map(b => `<button class="chip ${S.band === b ? 'on' : ''}" data-band="${b}">${b === 'all' ? 'Все' : b}</button>`).join('');
}

function renderGrid() {
  const list = visible();
  $('#count').textContent = `Найдено анкет: ${list.length}`;
  $('#grid').innerHTML = list.length ? list.map(p => personCard(p)).join('') : '<p class="sub">Ничего не нашлось. Попробуй другой интерес или слово в поиске.</p>';
}

function renderTeams() {
  const list = TEAMS.filter(t => inBand(t.band));
  $('#teamGrid').innerHTML = list.map(t => {
    const c = catOf(t.cat);
    const joined = S.joined.includes(t.id);
    const taken = t.taken + (joined ? 1 : 0);
    const full = taken >= t.size && !joined;
    return `<article class="card" style="--c:${c.color}">
      <h3>${t.title}</h3>
      <div class="row"><span class="age">${t.band}</span><span class="tag">${t.when}</span></div>
      <p>${t.desc}</p>
      <div class="seats" aria-hidden="true"><i style="width:${Math.round(taken / t.size * 100)}%"></i></div>
      <small>Занято мест: ${taken} из ${t.size}</small>
      <button class="btn" data-join="${t.id}" ${full ? 'disabled' : ''}>${joined ? 'Ты в команде ✓' : full ? 'Мест нет' : 'Вступить'}</button>
    </article>`;
  }).join('');
}

function renderMatchChips() {
  $('#matchChips').innerHTML = CATS.map(c => `<button class="chip ${S.pick.includes(c.id) ? 'on' : ''}" style="--c:${c.color}" data-pick="${c.id}">${c.name}</button>`).join('');
}

function renderMatch() {
  if (!S.pick.length) { $('#matchOut').innerHTML = '<p class="sub">Сначала выбери хотя бы один интерес.</p>'; return; }
  const res = PEOPLE.filter(p => inBand(bandOf(p.age)))
    .map(p => ({ p, pct: Math.round(S.pick.filter(id => id === p.cat || p.also.includes(id)).length / S.pick.length * 100) }))
    .filter(r => r.pct > 0).sort((a, b) => b.pct - a.pct).slice(0, 3);
  $('#matchOut').innerHTML = res.length
    ? res.map(r => personCard(r.p, `<div class="match-pct">Совпадение ${r.pct}%</div>`)).join('')
    : '<p class="sub">Пока никого не нашли. Попробуй выбрать другие интересы.</p>';
}

function renderHeader() {
  $('#authBtn').textContent = S.user ? `Выйти (${S.user.nick})` : 'Войти';
  $('#favCount').textContent = S.favs.length;
}

function renderFavs() {
  const list = PEOPLE.filter(p => S.favs.includes(p.id));
  $('#favList').innerHTML = list.length
    ? list.map(p => `<div class="favitem" style="--c:${catOf(p.cat).color}"><div class="ava">${mono(p)}</div><div><b>${esc(p.nick)}</b><br><small>${p.age} лет</small></div><button class="btn" data-open="${p.id}">Открыть</button><button class="btn ghost" data-fav="${p.id}" aria-label="Убрать из избранного">✕</button></div>`).join('')
    : '<p class="sub">Здесь пока пусто. Нажимай на сердечко в анкете, чтобы сохранить её.</p>';
}

function renderAll() {
  renderHeader(); renderTiles(); renderChips(); renderGrid(); renderTeams(); renderFavs();
  if (S.pick.length && $('#matchOut').children.length) renderMatch();
  if (S.open && $('#dProfile').open) openProfile(S.open);
}

function need(fn) {
  if (S.user) return true;
  S.after = fn;
  $('#dAuth').showModal();
  return false;
}

function openProfile(id) {
  const p = PEOPLE.find(x => x.id === id);
  const c = catOf(p.cat);
  S.open = id;
  const sent = S.reqs.includes(id);
  const fav = S.favs.includes(id);
  $('#profileBody').innerHTML = `<div style="--c:${c.color}">
    <div class="pbox"><div class="ava">${mono(p)}</div><div><h3>${esc(p.nick)}</h3><div class="row"><span class="age">${p.age} лет</span><span class="tag">${c.name}</span></div></div></div>
    <div class="safebox">
      <button class="btn big" data-req="${p.id}" ${sent ? 'disabled' : ''}>${sent ? 'Запрос отправлен ✓' : 'Предложить дружить'}</button>
      <button class="btn ghost" data-fav="${p.id}">${fav ? '♥ В избранном' : '♡ В избранное'}</button>
      <p>Общайтесь только на сайте. Не отправляй телефон, адрес, школу и фото.</p>
    </div>
    <h4>О себе</h4><div class="row" style="margin-bottom:10px">${tags(p)}</div><p>${esc(p.bio)}</p>
    <h4>Отзывы друзей (${p.reviews.length})</h4>
    ${p.reviews.map(r => `<div class="review"><b>${esc(r.name)}<span>${'★'.repeat(r.stars)}</span></b>${esc(r.text)}</div>`).join('') || '<p class="sub">Отзывов пока нет. Ты можешь написать первый после общения.</p>'}
    <button class="btn ghost" data-review="${p.id}">Оставить отзыв</button><br>
    <button class="link" data-report="${p.id}">Пожаловаться на анкету</button>
  </div>`;
  if (!$('#dProfile').open) $('#dProfile').showModal();
}

function paintStars() {
  document.querySelectorAll('#stars button').forEach(b => b.classList.toggle('on', +b.dataset.star <= S.stars));
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-fav],[data-open],[data-join],[data-cat],[data-band],[data-close],[data-pick],[data-star],[data-req],[data-report],[data-review]');
  if (!t) return;
  const d = t.dataset;

  if (d.close !== undefined) { t.closest('dialog').close(); return; }
  if (d.cat !== undefined) { S.cat = S.cat === d.cat && !d.go ? 'all' : d.cat; renderChips(); renderGrid(); if (d.go) $('#' + d.go).scrollIntoView(); return; }
  if (d.band) { S.band = d.band; renderAll(); return; }
  if (d.fav) {
    const id = +d.fav;
    S.favs = S.favs.includes(id) ? S.favs.filter(x => x !== id) : [...S.favs, id];
    save(); renderAll(); return;
  }
  if (d.open) { $('#dFav').close(); openProfile(+d.open); return; }
  if (d.req) { const id = +d.req; if (need(() => { S.reqs.push(id); save(); openProfile(id); })) { if (!S.reqs.includes(id)) S.reqs.push(id); save(); openProfile(id); } return; }
  if (d.join) {
    const id = +d.join;
    const run = () => { S.joined = S.joined.includes(id) ? S.joined.filter(x => x !== id) : [...S.joined, id]; save(); renderTeams(); };
    if (need(run)) run();
    return;
  }
  if (d.pick) { S.pick = S.pick.includes(d.pick) ? S.pick.filter(x => x !== d.pick) : S.pick.length < 3 ? [...S.pick, d.pick] : S.pick; renderMatchChips(); return; }
  if (d.review) { const id = +d.review; if (need(() => { $('#dProfile').close(); $('#dReview').showModal(); })) { S.stars = 5; paintStars(); $('#rText').value = ''; $('#dProfile').close(); $('#dReview').showModal(); } return; }
  if (d.star) { S.stars = +d.star; paintStars(); return; }
  if (d.report) { const p = PEOPLE.find(x => x.id === +d.report); alert(`Жалоба на анкету «${p.nick}» принята. Если тебе что-то угрожает, сразу расскажи взрослому, которому доверяешь.`); }
});

document.querySelectorAll('dialog').forEach(dlg => dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); }));

$('#authBtn').addEventListener('click', () => {
  if (S.user) { S.user = null; save(); renderAll(); } else $('#dAuth').showModal();
});
$('#favBtn').addEventListener('click', () => { renderFavs(); $('#dFav').showModal(); });
$('#q').addEventListener('input', e => { S.q = e.target.value; renderGrid(); });
$('#mBtn').addEventListener('click', renderMatch);

$('#fAuth').addEventListener('submit', e => {
  e.preventDefault();
  const nick = $('#aNick').value.trim();
  const age = parseInt($('#aAge').value, 10);
  if (!nick || !(age >= 13 && age <= 17)) return;
  S.user = { nick, age };
  save();
  $('#dAuth').close();
  $('#fAuth').reset();
  renderAll();
  const next = S.after; S.after = null;
  if (next) next();
});

$('#fReview').addEventListener('submit', e => {
  e.preventDefault();
  const text = $('#rText').value.trim();
  const p = PEOPLE.find(x => x.id === S.open);
  if (!text || !p || !S.user) return;
  p.reviews.unshift({ name: S.user.nick, stars: S.stars, text });
  $('#dReview').close();
  openProfile(p.id);
});

renderAll();
renderMatchChips();
paintStars();
