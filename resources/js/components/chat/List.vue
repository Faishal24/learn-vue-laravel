<script setup lang="ts">
import InfoBox from '../InfoBox.vue';
import Bubble from './Bubble.vue';

defineProps<{
  selectedContact: Contact;
}>();
</script>

<template>
  <div class="flex-1 space-y-1 overflow-y-auto p-4">
    <InfoBox v-if="selectedContact.id === 2" class="mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      itaque architecto, quidem temporibus placeat eaque repudiandae recusandae
      dolorem modi beatae, vitae nesciunt fugiat doloremque. Nihil, recusandae
      corporis.
    </InfoBox>

    <Bubble
      v-for="message in selectedContact.messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>
