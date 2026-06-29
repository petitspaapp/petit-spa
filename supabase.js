// ============================================
//  Petit Spa — Configuración de Supabase
// ============================================
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL  = 'https://fcyeblpcyzmdxyuoowqy.supabase.co';
const SUPABASE_KEY  = 'sb_publishable_O2MDEad7hFLZtSNJmJOIEQ_T1IEGG31';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Helper toast
export function toast(msg, tipo = 'ok') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.style.borderLeftColor = tipo === 'error' ? 'var(--error)' : 'var(--principal)';
  t.classList.add('visible');
  setTimeout(() => t.classList.remove('visible'), 3000);
}

// Helper modal
export function abrirModal(id) {
  document.getElementById(id)?.classList.add('visible');
}
export function cerrarModal(id) {
  document.getElementById(id)?.classList.remove('visible');
}

// Helper sidebar
export function initSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  const hamburguesa = document.getElementById('btn-hamburguesa');
  if (!sidebar || !overlay || !hamburguesa) return;
  hamburguesa.addEventListener('click', () => {
    sidebar.classList.add('abierto');
    overlay.classList.add('visible');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('abierto');
    overlay.classList.remove('visible');
  });
}
