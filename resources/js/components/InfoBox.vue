<script setup lang="ts">
import { Info } from 'lucide-vue-next';

defineProps<{
  class?: string;
}>();
</script>

<template>
  <div class="rounded-lg border border-blue-600 bg-blue-600/10 px-4 py-3" :class="class">
    <div class="flex items-center gap-x-2 text-blue-400 mb-2">
      <Info class="size-4" />
      <strong>This is a info message</strong>
    </div>

    <div class="text-sm text-muted-foreground"><slot /></div>
  </div>
</template>
