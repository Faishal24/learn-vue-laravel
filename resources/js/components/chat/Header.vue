<script setup lang="ts">
defineProps<{
  selectedContact: Contact;
}>();
</script>

<template>
    <div class="border-b border-sidebar-border/70 p-4">
        <h2 class="text-lg font-semibold">
            {{ selectedContact.name }}
        </h2>
    </div>
</template>
