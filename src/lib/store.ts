import { atom } from 'nanostores';

export const currentPath = atom('/');

export const isDark = atom(false);

export function initTheme() {
  if (typeof window === 'undefined') return;
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDark.set(true);
  }
}

export function toggleTheme() {
  const dark = !isDark.get();
  isDark.set(dark);
  if (dark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}
