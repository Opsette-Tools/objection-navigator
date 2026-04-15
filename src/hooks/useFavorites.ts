import { useState, useEffect, useCallback } from 'react';

interface FavoriteItem {
  responseId: string;
  objectionLabel: string;
  text: string;
  tone: string;
  savedAt: number;
}

const STORAGE_KEY = 'objection-helper-favorites';

function loadFavorites(): FavoriteItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(loadFavorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = useCallback(
    (responseId: string) => favorites.some(f => f.responseId === responseId),
    [favorites]
  );

  const toggleFavorite = useCallback(
    (responseId: string, objectionLabel: string, text: string, tone: string) => {
      setFavorites(prev => {
        if (prev.some(f => f.responseId === responseId)) {
          return prev.filter(f => f.responseId !== responseId);
        }
        return [...prev, { responseId, objectionLabel, text, tone, savedAt: Date.now() }];
      });
    },
    []
  );

  const clearAll = useCallback(() => setFavorites([]), []);

  return { favorites, isFavorite, toggleFavorite, clearAll };
}
