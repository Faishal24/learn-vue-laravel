import { ref, watch } from 'vue';
import { useKeyListener } from './useKeyListener';

export function useChat() {
  const selectedContact = ref<Contact | null>(null);
  const message = ref<string>('');

  const handleSend = (): void => {
    if (!message.value.trim()) return;
    selectedContact.value?.messages?.push({
      id: Date.now(),
      text: message.value,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      direction: 'sent',
    });
    message.value = '';
  };

  watch(selectedContact, () => (message.value = ''));
  useKeyListener('Escape', () => (selectedContact.value = null));

  return { selectedContact, message, handleSend }
}
