import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import { useKeyListener } from './useKeyListener';

export function useChat() {
  const contacts = ref<Contact[] | null>(null);
  const selectedContact = ref<Contact | null>(null);
  const messages = ref<Message[]>([]);
  const message = ref<string>('');

  const handleSend = (): void => {
    if (!message.value.trim()) return;
    messages.value.push({
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

  const contactsWithMessages = computed(() => {
    return contacts.value?.filter((contact) => contact.latest_message) || [];
  });

  watch(selectedContact, () => (message.value = ''));
  useKeyListener('Escape', () => (selectedContact.value = null));

  watchEffect(async () => {
    if (selectedContact.value) {
      messages.value = [];
      const res = await fetch(`/api/contacts/${selectedContact.value.id}`);
      const data = await res.json();
      messages.value = data.messages;
    }
  });

  onMounted(async () => {
    const res = await fetch('/api/contacts');
    const data = await res.json();
    contacts.value = data;
  });

  return {
    contactsWithMessages,
    selectedContact,
    messages,
    message,
    handleSend,
  };
}
