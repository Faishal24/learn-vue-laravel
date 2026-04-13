<script setup lang="ts">
import { Send } from 'lucide-vue-next';
import Button from '../ui/button/Button.vue';

</script>

<template>
    <div class="flex items-center gap-3 border-t border-sidebar-border/70 p-4">
        <input
            type="text"
            placeholder="Ketik pesan..."
            class="w-full rounded-md border px-3 py-2 focus:ring focus:outline-none"
        />
        <Button class="aspect-square h-full" variant="outline">
            <Send />
        </Button>
    </div>
</template>
