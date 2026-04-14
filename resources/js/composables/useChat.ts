import { computed, onMounted, ref, watch, watchEffect } from 'vue';
import { useKeyListener } from './useKeyListener';

export function useChat() {
  const contacts = ref<Contact[] | null>(null);
  const selectedContact = ref<Contact | null>(null);
  const messages = ref<Message[]>([]);
  const message = ref<string>('');
  const messagesCache = new Map<number, Message[]>();

  const handleSend = (): void => {
    if (!message.value.trim() || !selectedContact.value) return;
    const newMessage: Message = {
      id: Date.now(),
      text: message.value,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      direction: 'sent',
    };
    messages.value.push(newMessage);
    messagesCache.set(selectedContact.value.id, messages.value);
    message.value = '';
  };

  const contactsWithMessages = computed(() => {
    return contacts.value?.filter((contact) => contact.latest_message) || [];
  });

  watch(selectedContact, () => (message.value = ''));
  useKeyListener('Escape', () => (selectedContact.value = null));

  watchEffect(async () => {
    if (!selectedContact.value) return;
    const id = selectedContact.value.id;

    if (messagesCache.has(id)) {
      messages.value = messagesCache.get(id)!;
      return;
    }

    messages.value = [];
    const res = await fetch(`/api/contacts/${id}`);
    const data = await res.json();
    messagesCache.set(id, data.messages);
    messages.value = data.messages;
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
