<script setup lang="ts">
import Bubble from './Bubble.vue';

defineProps<{
    selectedContact: Contact;
}>();
</script>

<template>
    <div class="flex-1 overflow-y-auto p-4">
        <!-- Pesan chat akan ditampilkan di sini -->
         <Bubble v-for="message in selectedContact.messages" :key="message.id" :message="message" />
    </div>
</template>
