<script setup lang="ts">
import { Contact, X } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';
import ContactEditDialog from './ContactEditDialog.vue';

defineProps<{
  selectedContact: Contact;
}>();

const emit = defineEmits<{ close: [] }>();
</script>

<template>
  <div
    class="group flex items-center justify-between border-b border-sidebar-border/70 p-4"
  >
    <div class="flex items-center gap-x-3">
      <h2 class="text-lg font-semibold">
        {{ selectedContact.name }}
      </h2>
      <ContactEditDialog :contact="selectedContact" />
    </div>

    <Button
      title="Close chat"
      @click="emit('close')"
      variant="ghost"
      size="icon"
      class="size-6 h-min"
    >
      <X class="size-4" />
    </Button>
  </div>
</template>
