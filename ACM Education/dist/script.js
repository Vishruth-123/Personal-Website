/* UI and canvas. Edit content.js for your text, links, projects, and skills. */
(() => {
  'use strict';

  const data = window.PORTFOLIO;
  if (!data) return;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const paths = {
    code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
    spark: '<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/><path d="M19 2v4m-2-2h4"/>',
    layers: '<path d="m12 3 10 6-10 6L2 9l10-6Zm-10 12 10 6 10-6M2 12l10 6 10-6"/>',
    trophy: '<path d="M7 3h10v7a5 5 0 0 1-10 0V3Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 3v6m-5 0h10"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.1m4 9.9v-7m0 3c0-4 6-4 6 0v4"/>',
    github: '<path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-1.7-.8-2 2.8-.3 5.8-1.3 5.8-6A4.8 4.8 0 0 0 19 7c.1-.3.5-1.5-.1-3-1.3-.4-3.3 1.1-3.3 1.1a12 12 0 0 0-6.2 0S7.4 3.6 6.1 4C5.5 5.5 5.9 6.7 6 7a4.8 4.8 0 0 0-1 3c0 4.7 3 5.7 5.8 6-.5.3-.8 1-.8 2v4"/>',
    copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3"/>'
  };
  const icon = (name, className = '') => `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.code}</svg>`;
  const safeLink = (value, allowLocal = false) => {
    if (!value) return null;
    try {
      const url = new URL(value, document.baseURI);
      return ['https:', 'http:'].includes(url.protocol) || (allowLocal && url.protocol === 'file:') ? value : null;
    } catch { return null; }
  };

  // Profile. Contact information comes directly from the supplied résumé.
  const profile = data.profile;
  $('#hero-description').textContent = profile.intro;
  $('#about-copy').innerHTML = profile.about.map(text => `<p>${escape(text)}</p>`).join('');
  $('[data-degree]').textContent = profile.degree;
  $('[data-graduation]').textContent = profile.graduation;
  $$('[data-resume]').forEach(link => { link.href = safeLink(profile.resume, true) || '#contact'; });
  const nameSpan = document.createElement('span');
  nameSpan.textContent = profile.lastName;
  const period = document.createElement('span');
  period.className = 'name-period';
  period.textContent = '.';
  nameSpan.append(period);
  $('#hero-name').replaceChildren(document.createTextNode(profile.firstName), document.createElement('br'), nameSpan);
  $('#contact-email').textContent = profile.email;
  const mailto = `mailto:${profile.email}`;
  $('#contact-email').href = mailto;
  $('#email-button').href = mailto;
  $$('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  $('#social-links').innerHTML = [
    safeLink(profile.linkedin) ? `<a href="${escape(profile.linkedin)}" target="_blank" rel="noopener noreferrer">${icon('linkedin')} LinkedIn <span aria-hidden="true">↗</span></a>` : '',
    safeLink(profile.github) ? `<a href="${escape(profile.github)}" target="_blank" rel="noopener noreferrer">${icon('github')} GitHub <span aria-hidden="true">↗</span></a>` : '',
    `<a href="${escape(profile.resume)}" target="_blank" rel="noopener">Résumé <span aria-hidden="true">↗</span></a>`
  ].join('');

  // Original illustrations: these are decorative, not screenshots or results.
  function projectArt(project) {
    const chrome = `<div class="art-grid"></div><span class="art-index">EXPLORATION / ${escape(project.number)}</span><span class="art-mark">+</span>`;
    if (project.illustration === 'research') {
      return `<div class="project-art research-art" aria-hidden="true">${chrome}<div class="research-document"><div class="document-type">A RESEARCH QUESTION</div><div class="document-title">AI & the<br>future of work.</div><div class="document-lines"><span></span><span></span><span></span><span></span></div><div class="document-bottom"><span></span><span></span><span></span></div></div><div class="research-node node-productivity">PRODUCTIVITY</div><div class="research-node node-workforce">WORKFORCE</div><span class="art-caption">TECHNOLOGY. ECONOMICS. PEOPLE.</span></div>`;
    }
    return `<div class="project-art robotics-art" aria-hidden="true">${chrome}<svg class="robot-drawing" viewBox="0 0 300 220" fill="none" stroke="#a3cfda"><defs><linearGradient id="robot-face" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2c4c59"/><stop offset="1" stop-color="#1a2e36"/></linearGradient></defs><ellipse cx="153" cy="191" rx="86" ry="15" stroke="#3c6876" stroke-dasharray="3 5"/><path d="m73 163 80 37 81-37-81-37-80 37Z" stroke="#436f7b"/><path d="m92 153 61 28 61-28" stroke="#436f7b"/><path d="M111 123v32l42 20 42-20v-32" fill="#203d47"/><path d="m111 123 42-19 42 19-42 19-42-19Z" fill="#284852"/><path d="M153 142v33m-29-18v-18m12 24v-18m29 18v-18m12 12v-18" stroke="#557f8b"/><path d="M117 72 94 84v44l59 28 59-28V84l-59-28-36 16Z" fill="url(#robot-face)"/><path d="m94 84 59 28 59-28m-59 28v44"/><path d="m105 98 36 17v20l-36-17V98Z" fill="#132932" stroke="#507b88"/><path d="m166 116 33-16v19l-33 16v-19Z" fill="#132932" stroke="#507b88"/><path d="m112 108 9 4m8 4 6 3m38 4 7-3m7-3 6-3" stroke="#b6f4ef" stroke-width="3"/><path d="M153 56V38m-7 0h14" stroke="#86b4bf"/><circle cx="153" cy="33" r="5" fill="#c2f3e4" stroke="#c2f3e4"/><path d="m94 107-13 6v19l13 6m118-31 13 6v19l-13 6M81 119l-12 6v24l15 7m141-37 12 6v24l-15 7"/><circle cx="69" cy="151" r="6" fill="#1b3540"/><circle cx="237" cy="151" r="6" fill="#1b3540"/><path d="m129 75 24-11 25 11-25 12-24-12Z" stroke="#648d96"/><circle cx="253" cy="63" r="19" stroke="#456d76" stroke-dasharray="2 4"/><path d="m246 63 5 5 9-11" stroke="#a6e1c5"/><path d="m63 73-13-6m12 24-21-3m25-31-7-8" stroke="#557d87"/><circle cx="50" cy="67" r="2" fill="#83a9b0"/></svg><span class="art-caption">CODE IN. REAL-WORLD BEHAVIOR OUT.</span></div>`;
  }

  function renderProjects(filter = 'All') {
    const projects = data.projects.filter(project => filter === 'All' || project.category === filter);
    $('#project-grid').innerHTML = projects.map(project => `<article class="project-card">${projectArt(project)}<div class="project-body"><div class="project-meta"><span>${escape(project.category)} / ${escape(project.number)}</span><span class="project-status">${escape(project.status)}</span></div><h3>${escape(project.title)}</h3><p class="project-summary">${escape(project.summary)}</p><div class="tag-row">${project.tags.map(tag => `<span class="tag">${escape(tag)}</span>`).join('')}</div><div class="project-bottom"><span class="project-date">${escape(project.date)}</span><button class="project-open" type="button" data-project="${escape(project.id)}" aria-label="Explore ${escape(project.title)}">Explore project <span aria-hidden="true">↗</span></button></div></div></article>`).join('') || '<p class="project-empty">More explorations are on the way.</p>';
    $('#project-announcement').textContent = `${projects.length} ${projects.length === 1 ? 'project' : 'projects'} shown${filter === 'All' ? '' : ` in ${filter}`}.`;
  }
  renderProjects();
  $$('.filter').forEach(button => button.addEventListener('click', () => {
    $$('.filter').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderProjects(button.dataset.filter);
  }));

  // Native dialogs provide keyboard focus containment, Escape, and focus return.
  const projectDialog = $('#project-dialog');
  const commandDialog = $('#command-dialog');
  const unlockScroll = () => { if (!projectDialog.open && !commandDialog.open) document.body.classList.remove('dialog-open'); };
  function openDialog(dialog) {
    if (dialog.open) return;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
  [projectDialog, commandDialog].forEach(dialog => {
    dialog.addEventListener('close', unlockScroll);
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
  });
  $('.dialog-close', projectDialog).addEventListener('click', () => projectDialog.close());
  $('#project-grid').addEventListener('click', event => {
    const button = event.target.closest('[data-project]');
    if (!button) return;
    const project = data.projects.find(item => item.id === button.dataset.project);
    if (!project) return;
    const links = [
      safeLink(project.url) ? `<a class="inline-link" href="${escape(project.url)}" target="_blank" rel="noopener noreferrer">Visit project <span aria-hidden="true">↗</span></a>` : '',
      safeLink(project.source) ? `<a class="inline-link" href="${escape(project.source)}" target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">↗</span></a>` : ''
    ].join('');
    $('#project-dialog-content').innerHTML = `<p class="dialog-kicker">${escape(project.category)} / EXPLORATION ${escape(project.number)}</p><h2 id="dialog-title">${escape(project.title)}</h2><p class="dialog-date">${escape(project.date)} · ${escape(project.status)}</p><p class="dialog-overview">${escape(project.overview)}</p><h3>What I worked on</h3><ul>${project.contributions.map(text => `<li>${escape(text)}</li>`).join('')}</ul><h3>What I’m taking forward</h3><p class="dialog-takeaway">${escape(project.takeaway)}</p><div class="tag-row">${project.tags.map(tag => `<span class="tag">${escape(tag)}</span>`).join('')}</div>${links ? `<div class="dialog-actions">${links}</div>` : ''}`;
    openDialog(projectDialog);
  });

  $('#skills-grid').innerHTML = data.skillGroups.map(group => `<article class="skill-group"><div class="skill-head">${icon(group.icon, 'skill-icon')}<span class="mono">${escape(group.number)} /</span></div><h3>${escape(group.title)}</h3><p class="skill-caption">${escape(group.caption)}</p><div class="skill-items">${group.items.map(item => `<span class="skill-chip">${escape(item)}</span>`).join('')}</div></article>`).join('');
  $('#timeline').innerHTML = data.journey.map(item => `<article class="timeline-item${item.current ? ' current' : ''}"><div class="timeline-head"><span>${escape(item.date)}</span><span class="timeline-type">${escape(item.type)}</span></div><h3>${escape(item.organization)}</h3><p class="timeline-title">${escape(item.title)}</p>${item.description ? `<p class="timeline-description">${escape(item.description)}</p>` : ''}</article>`).join('');
  $('#study-areas').innerHTML = data.areasOfStudy.map(item => `<span>${escape(item)}</span>`).join('');
  $('#credentials').innerHTML = data.credentials.map(item => `<article class="credential"><div class="credential-top">${icon(item.type === 'Recognition' ? 'trophy' : 'spark')}<span>${escape(item.year)}</span></div><h4>${escape(item.title)}</h4><span class="credential-type">${escape(item.type)}</span></article>`).join('');

  let toastTimeout;
  function toast(message) {
    const element = $('#toast');
    element.textContent = message;
    element.classList.add('visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => element.classList.remove('visible'), 4000);
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast('Email address copied. Say hello!');
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents($('#contact-email'));
      selection.removeAllRanges();
      selection.addRange(range);
      toast('Email selected. Press Ctrl+C or Command+C to copy.');
    }
  }
  $('.copy-email').addEventListener('click', copyEmail);

  // Mobile navigation, including closing it after a section is chosen.
  const menuToggle = $('.menu-toggle');
  const mobileNav = $('#mobile-nav');
  function setMenu(open) {
    mobileNav.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }
  menuToggle.addEventListener('click', () => setMenu(mobileNav.hidden));
  $$('a', mobileNav).forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 700) setMenu(false); }, { passive: true });

  // A compact keyboard navigation palette, inspired by developer portfolios.
  const commands = [
    { label: 'About me', keywords: 'bio introduction', hint: '01', go: () => jump('#about') },
    { label: 'Selected work & projects', keywords: 'research robotics ai machine learning', hint: '02', go: () => jump('#projects') },
    { label: 'Skills & toolkit', keywords: 'languages tools programming', hint: '03', go: () => jump('#skills') },
    { label: 'Education & journey', keywords: 'university organizations community leadership awards credentials', hint: '04', go: () => jump('#journey') },
    { label: 'Get in touch', keywords: 'contact email hello', hint: '05', go: () => jump('#contact') },
    { label: 'Read my résumé', hint: 'PDF ↗', go: () => window.open(safeLink(profile.resume, true), '_blank', 'noopener') },
    { label: 'Copy my email', hint: 'COPY', go: () => { jump('#contact'); copyEmail(); } }
  ];
  if (safeLink(profile.linkedin)) commands.push({ label: 'LinkedIn', hint: '↗', go: () => window.open(profile.linkedin, '_blank', 'noopener') });
  if (safeLink(profile.github)) commands.push({ label: 'GitHub', hint: '↗', go: () => window.open(profile.github, '_blank', 'noopener') });
  const commandInput = $('#command-search');
  let filteredCommands = commands;
  let selectedCommand = 0;
  function jump(selector) { $(selector)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }
  function renderCommands() {
    const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const query = normalize(commandInput.value.trim());
    filteredCommands = commands.filter(command => normalize(`${command.label} ${command.keywords || ''}`).includes(query));
    selectedCommand = 0;
    $('#command-results').innerHTML = filteredCommands.length ? filteredCommands.map((command, index) => `<button class="command-result${index === 0 ? ' selected' : ''}" type="button" data-command="${index}"><span>${escape(command.label)}</span><span>${escape(command.hint)}</span></button>`).join('') : '<p class="command-empty">No matching sections or links.</p>';
  }
  function openCommands() {
    setMenu(false);
    commandInput.value = '';
    renderCommands();
    openDialog(commandDialog);
    commandInput.focus();
  }
  function runCommand(index) {
    const command = filteredCommands[index];
    if (!command) return;
    commandDialog.close();
    command.go();
  }
  $('.command-trigger').addEventListener('click', openCommands);
  $('.command-close').addEventListener('click', () => commandDialog.close());
  commandInput.addEventListener('input', renderCommands);
  $('#command-results').addEventListener('click', event => {
    const button = event.target.closest('[data-command]');
    if (button) runCommand(Number(button.dataset.command));
  });
  commandDialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      commandDialog.close();
      return;
    }
    if (!filteredCommands.length) return;
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      selectedCommand = (selectedCommand + (event.key === 'ArrowDown' ? 1 : -1) + filteredCommands.length) % filteredCommands.length;
      $$('.command-result').forEach((el, index) => el.classList.toggle('selected', index === selectedCommand));
      $$('.command-result')[selectedCommand]?.scrollIntoView({ block: 'nearest' });
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const button = event.target.closest('[data-command]');
      runCommand(button ? Number(button.dataset.command) : selectedCommand);
    }
  });
  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (commandDialog.open) commandDialog.close();
      else if (!projectDialog.open) openCommands();
    }
    if (event.key === 'Escape') setMenu(false);
  });

  // Progress and active section indicators. Keep scroll work to one frame.
  const sections = ['about', 'projects', 'skills', 'journey', 'contact'].map(id => document.getElementById(id));
  let scrollQueued = false;
  function updateScroll() {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    $('#reading-progress').style.transform = `scaleX(${available > 0 ? Math.min(1, window.scrollY / available) : 0})`;
    let activeId = '';
    sections.forEach(section => { if (section.getBoundingClientRect().top <= 170) activeId = section.id; });
    $$('.desktop-nav a').forEach(link => {
      const active = link.getAttribute('href') === `#${activeId}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scrollQueued = false;
  }
  window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScroll); } }, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });
  updateScroll();

  // THE CURIOSITY ENGINE
  // A lightweight, original 3D torus rendered with the Canvas 2D API.
  // Change these constants to customize its density and shape.
  const canvas = $('#orbit-canvas');
  const context = canvas.getContext('2d');
  if (!context) return;
  const U_SEGMENTS = 96;
  const V_SEGMENTS = 26;
  const MAJOR_RADIUS = 1.44;
  const MINOR_RADIUS = 0.55;
  const TAU = Math.PI * 2;
  const points = [];
  for (let u = 0; u <= U_SEGMENTS; u++) {
    for (let v = 0; v <= V_SEGMENTS; v++) {
      const angleU = (u / U_SEGMENTS) * TAU;
      const angleV = (v / V_SEGMENTS) * TAU;
      points.push({ x: (MAJOR_RADIUS + MINOR_RADIUS * Math.cos(angleV)) * Math.cos(angleU), y: MINOR_RADIUS * Math.sin(angleV), z: (MAJOR_RADIUS + MINOR_RADIUS * Math.cos(angleV)) * Math.sin(angleU) });
    }
  }
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let savedPause = null;
  try { savedPause = localStorage.getItem('vy-motion-paused'); } catch { /* Storage is optional. */ }
  let paused = savedPause === null ? reducedMotion.matches : savedPause === 'true';
  let animationId = null;
  let visible = true;
  let width = 600;
  let height = 520;
  let lastTime = 0;
  let elapsed = 0;
  let pointerX = 0;
  let pointerY = 0;
  let rotationX = 0;
  let rotationY = 0;
  const motionButton = $('.motion-toggle');

  function project(point, angleX, angleY, angleZ) {
    const cy = Math.cos(angleY), sy = Math.sin(angleY);
    const cx = Math.cos(angleX), sx = Math.sin(angleX);
    const cz = Math.cos(angleZ), sz = Math.sin(angleZ);
    const x1 = point.x * cy - point.z * sy;
    const z1 = point.x * sy + point.z * cy;
    const y1 = point.y * cx - z1 * sx;
    const z2 = point.y * sx + z1 * cx;
    const x2 = x1 * cz - y1 * sz;
    const y2 = x1 * sz + y1 * cz;
    const scale = Math.min(width, height) * 0.208 * (5.6 / (5.6 + z2));
    return { x: width * 0.51 + x2 * scale, y: height * 0.50 + y2 * scale, z: z2 };
  }
  function draw() {
    context.clearRect(0, 0, width, height);
    const glow = context.createRadialGradient(width * .51, height * .53, 5, width * .51, height * .53, width * .43);
    glow.addColorStop(0, 'rgba(78, 165, 116, .045)');
    glow.addColorStop(.6, 'rgba(78, 165, 116, .035)');
    glow.addColorStop(1, 'rgba(78, 165, 116, 0)');
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);
    // Deterministic stars: no external images, libraries, or random flickering.
    for (let i = 0; i < 64; i++) {
      const x = ((Math.sin(i * 137.7) * 417.3) % 1 + 1) % 1;
      const y = ((Math.sin(i * 73.9) * 227.8) % 1 + 1) % 1;
      context.fillStyle = `rgba(174, 223, 193, ${.12 + (i % 4) * .04})`;
      context.fillRect(x * width, y * height, i % 5 === 0 ? 1.5 : .8, i % 5 === 0 ? 1.5 : .8);
    }
    const angleX = .90 + rotationY * .30;
    const angleY = -.32 + elapsed * .075 + rotationX * .34;
    const angleZ = -.45 + Math.sin(elapsed * .12) * .06;
    const projected = points.map(point => project(point, angleX, angleY, angleZ));
    const at = (u, v) => projected[u * (V_SEGMENTS + 1) + v];
    context.lineWidth = .65;
    // Longitudinal mesh.
    for (let v = 0; v < V_SEGMENTS; v++) {
      context.beginPath();
      for (let u = 0; u <= U_SEGMENTS; u++) {
        const point = at(u, v);
        if (u === 0) context.moveTo(point.x, point.y); else context.lineTo(point.x, point.y);
      }
      const bright = v % 6 === 0;
      context.strokeStyle = bright ? 'rgba(173, 245, 199, .42)' : `rgba(126, 205, 161, ${.09 + (Math.sin(v / V_SEGMENTS * TAU) + 1) * .055})`;
      context.lineWidth = bright ? .9 : .6;
      context.stroke();
    }
    // Cross sections.
    for (let u = 0; u < U_SEGMENTS; u += 2) {
      context.beginPath();
      for (let v = 0; v <= V_SEGMENTS; v++) {
        const point = at(u, v);
        if (v === 0) context.moveTo(point.x, point.y); else context.lineTo(point.x, point.y);
      }
      const depth = at(u, 0).z;
      context.strokeStyle = `rgba(146, 225, 178, ${.09 + Math.max(0, 2 - depth) * .045})`;
      context.lineWidth = .6;
      context.stroke();
    }
    // Bright vertices provide structure without a costly WebGL dependency.
    for (let u = 0; u < U_SEGMENTS; u += 2) {
      for (let v = 0; v < V_SEGMENTS; v += 2) {
        const point = at(u, v);
        const front = Math.max(0, Math.min(1, (2.1 - point.z) / 4.2));
        context.fillStyle = `rgba(192, 255, 214, ${.08 + front * .55})`;
        const size = .5 + front * .75;
        context.fillRect(point.x - size / 2, point.y - size / 2, size, size);
      }
    }
    // A moving node travels around the surface.
    const u = ((elapsed * .085 + .18) % 1) * TAU;
    const v = .72;
    const node = project({ x: (MAJOR_RADIUS + MINOR_RADIUS * Math.cos(v)) * Math.cos(u), y: MINOR_RADIUS * Math.sin(v), z: (MAJOR_RADIUS + MINOR_RADIUS * Math.cos(v)) * Math.sin(u) }, angleX, angleY, angleZ);
    const nodeGlow = context.createRadialGradient(node.x, node.y, 0, node.x, node.y, 21);
    nodeGlow.addColorStop(0, 'rgba(202,255,220,.6)');
    nodeGlow.addColorStop(.15, 'rgba(159,241,185,.24)');
    nodeGlow.addColorStop(1, 'rgba(159,241,185,0)');
    context.fillStyle = nodeGlow;
    context.fillRect(node.x - 21, node.y - 21, 42, 42);
    context.beginPath();
    context.arc(node.x, node.y, 2.2, 0, TAU);
    context.fillStyle = '#d8ffe3';
    context.fill();
  }
  function resizeCanvas() {
    const box = canvas.getBoundingClientRect();
    width = box.width;
    height = box.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw();
  }
  function frame(time) {
    animationId = null;
    if (paused || !visible || document.hidden) return;
    if (!lastTime) lastTime = time;
    elapsed += Math.min((time - lastTime) / 1000, .05);
    lastTime = time;
    rotationX += (pointerX - rotationX) * .035;
    rotationY += (pointerY - rotationY) * .035;
    draw();
    animationId = requestAnimationFrame(frame);
  }
  function syncMotion() {
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute('aria-label', paused ? 'Resume orbital animation' : 'Pause orbital animation');
    $('.motion-text').textContent = paused ? 'RESUME MOTION' : 'PAUSE MOTION';
    $('.motion-symbol').textContent = paused ? '▷' : 'Ⅱ';
    if (animationId !== null) { cancelAnimationFrame(animationId); animationId = null; }
    lastTime = 0;
    if (!paused && visible && !document.hidden) animationId = requestAnimationFrame(frame);
    else draw();
  }
  motionButton.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('vy-motion-paused', String(paused)); savedPause = String(paused); } catch { /* Optional preference. */ }
    syncMotion();
  });
  reducedMotion.addEventListener('change', event => {
    if (savedPause === null) { paused = event.matches; syncMotion(); }
  });
  canvas.addEventListener('pointermove', event => {
    const box = canvas.getBoundingClientRect();
    pointerX = ((event.clientX - box.left) / box.width - .5) * 2;
    pointerY = ((event.clientY - box.top) / box.height - .5) * 2;
    if (paused) { rotationX = pointerX; rotationY = pointerY; draw(); }
  }, { passive: true });
  canvas.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; });
  document.addEventListener('visibilitychange', syncMotion);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; syncMotion(); }, { threshold: .05 }).observe(canvas);
  new ResizeObserver(resizeCanvas).observe(canvas);
  if (matchMedia('(pointer: coarse)').matches) $('.interaction-hint').innerHTML = 'TOUCH TO EXPLORE <span aria-hidden="true">↔</span>';
  resizeCanvas();
  syncMotion();
})();
