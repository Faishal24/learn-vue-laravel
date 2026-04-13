<script setup lang="ts">
import { X } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';

defineProps<{
    selectedContact: Contact;
}>();

const emit = defineEmits<{ close: [] }>();
</script>

<template>
    <div
        class="flex items-center justify-between border-b border-sidebar-border/70 p-4"
    >
        <h2 class="text-lg font-semibold">
            {{ selectedContact.name }}
        </h2>

        <Button
            title="Close chat"
            @click="emit('close')"
            variant="ghost"
            size="icon"
            class="h-min size-6"
            >
            <X class="size-4" />
        </Button>
    </div>
</template>
