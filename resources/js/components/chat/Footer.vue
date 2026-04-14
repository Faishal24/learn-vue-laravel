<script setup lang="ts">
import { Send } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';

const message = defineModel<string>({ required: true });
const emit = defineEmits<{ send: [message: string] }>();
</script>

<template>
  <form
    @submit.prevent="emit('send', message)"
    class="flex items-center gap-3 border-t border-sidebar-border/70 p-4"
  >
    <Input
      type="text"
      placeholder="Ketik pesan..."
      class="w-full rounded-md border px-3 py-2 focus:ring focus:outline-none"
      v-model="message"
    />
    <Button
      class="aspect-square"
      variant="outline"
      type="submit"
      size="icon"
      :disabled="!message.trim()"
    >
      <Send />
    </Button>
  </form>
</template>
