import { useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const toggle = () => setMode(m => (m === 'light' ? 'dark' : 'light'));

  return { mode, toggle, isDark: mode === 'dark' };
}
