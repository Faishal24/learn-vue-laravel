<script setup lang="ts">
defineProps<{
  message: Message;
}>();
</script>

<template>
  <div
    class="flex"
    :class="message.direction === 'sent' ? 'justify-end' : 'justify-start'"
  >
    <div
      class="max-w-xs rounded-2xl px-3 py-2 lg:max-w-md"
      :class="
        message.direction === 'sent'
          ? 'rounded-tr-sm bg-primary text-primary-foreground'
          : 'rounded-tl-sm bg-muted'
      "
    >
      <p class="text-sm break-words">{{ message.text }}</p>
      <span
        class="mt-1 block text-[10px] opacity-60"
        :class="message.direction === 'sent' ? 'text-right' : 'text-left'"
      >
        {{ message.time }}
      </span>
    </div>
  </div>
</template>
