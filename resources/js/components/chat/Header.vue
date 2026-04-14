<script setup lang="ts">
import { Image, MessageCircleMore, X } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';
import ContactEditDialog from './ContactEditDialog.vue';

defineProps<{
  selectedContact: Contact;
}>();
const activeTab = defineModel<'chat' | 'media'>({
  default: 'chat',
  required: true,
});

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

    <div class="flex items-center gap-x-3">
      <div>
        <Button
          variant="outline"
          size="icon"
          class="rounded-r-none size-7"
          :class="activeTab === 'chat' ? 'bg-accent!' : 'hover:bg-accent/80'"
          @click="activeTab = 'chat'"
        >
          <MessageCircleMore class="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          class="rounded-l-none border-l-0 size-7"
          :class="activeTab === 'media' ? 'bg-accent!' : 'hover:bg-accent/80'"
          @click="activeTab = 'media'"
        >
          <Image class="size-4" />
        </Button>
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
  </div>
</template>
