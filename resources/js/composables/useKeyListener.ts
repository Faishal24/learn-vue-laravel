import { onMounted, onUnmounted } from 'vue';

export function useKeyListener(key: string, callback: () => void): void {
  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === key) callback();
  };

  onMounted(() => window.addEventListener('keydown', handleKeyDown));
  onUnmounted(() => window.removeEventListener('keydown', handleKeyDown));
}
