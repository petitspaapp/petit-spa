// ============================================
//  Petit Spa — FAB Universal de navegación
// ============================================

export function initFAB(moduloActivo) {
  // Inyectar estilos
  const style = document.createElement('style');
  style.textContent = `
    .fab-wrap {
      position: fixed; bottom: 28px; right: 28px;
      z-index: 200; display: flex;
      flex-direction: column-reverse;
      align-items: flex-end; gap: 12px;
    }
    .fab-main {
      width: 56px; height: 56px;
      background: #C9A84C; border: none; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; box-shadow: 0 6px 24px rgba(201,168,76,0.45);
      transition: transform 0.25s, background 0.2s; flex-shrink: 0;
    }
    .fab-main:hover { background: #A8872E; }
    .fab-main svg { width: 24px; height: 24px; color: white; transition: transform 0.25s; }
    .fab-main.abierto svg { transform: rotate(45deg); }
    .fab-menu {
      display: flex; flex-direction: column-reverse;
      align-items: flex-end; gap: 10px;
      opacity: 0; pointer-events: none;
      transform: translateY(10px);
      transition: opacity 0.25s, transform 0.25s;
    }
    .fab-menu.visible { opacity: 1; pointer-events: all; transform: translateY(0); }
    .fab-item { display: flex; align-items: center; gap: 10px; }
    .fab-item-label {
      background: #1A1814; color: white;
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 12px; font-weight: 600;
      padding: 6px 14px; border-radius: 999px;
      white-space: nowrap; box-shadow: 0 2px 12px rgba(0,0,0,0.2);
    }
    .fab-item-btn {
      width: 46px; height: 46px;
      background: #1A1814; border: none; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      color: #C9A84C; text-decoration: none;
      transition: background 0.15s, transform 0.15s; flex-shrink: 0;
    }
    .fab-item-btn:hover { background: #2d2820; transform: scale(1.08); }
    .fab-item-btn.activo { background: #C9A84C; color: white; }
    .fab-item-btn svg { width: 20px; height: 20px; }
  `;
  document.head.appendChild(style);

  const modulos = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: 'dashboard.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
    },
    {
      id: 'calendario',
      label: 'Calendario',
      href: 'calendario.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`
    },
    {
      id: 'servicios',
      label: 'Servicios',
      href: 'servicios.html',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`
    }
  ];

  // Crear HTML del FAB
  const wrap = document.createElement('div');
  wrap.className = 'fab-wrap';
  wrap.id = 'fab-wrap';

  const menu = document.createElement('div');
  menu.className = 'fab-menu';
  menu.id = 'fab-menu';

  modulos.forEach(m => {
    const item = document.createElement('div');
    item.className = 'fab-item';
    item.innerHTML = `
      <span class="fab-item-label">${m.label}</span>
      <a href="${m.href}" class="fab-item-btn${m.id === moduloActivo ? ' activo' : ''}">
        ${m.icon}
      </a>`;
    menu.appendChild(item);
  });

  const btn = document.createElement('button');
  btn.className = 'fab-main';
  btn.id = 'fab-main';
  btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>`;

  wrap.appendChild(menu);
  wrap.appendChild(btn);
  document.body.appendChild(wrap);

  // Toggle
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.classList.toggle('abierto');
    menu.classList.toggle('visible');
  });
  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) {
      btn.classList.remove('abierto');
      menu.classList.remove('visible');
    }
  });
}
