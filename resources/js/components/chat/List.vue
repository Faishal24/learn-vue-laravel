<script setup lang="ts">
import { selectedContactMessagesKey } from '@/types/keys';
import { inject } from 'vue';
import InfoBox from '../InfoBox.vue';
import Bubble from './Bubble.vue';

defineProps<{
  contactId: number;
}>();

const messages = inject(selectedContactMessagesKey);
</script>

<template>
  <div class="flex-1 space-y-1 overflow-y-auto p-4">
    <TransitionGroup name="message">
      <!-- Demo Info Box -->
      <InfoBox v-if="contactId === 2" class="mb-4" key="info-box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        itaque architecto, quidem temporibus placeat eaque repudiandae
        recusandae dolorem modi beatae, vitae nesciunt fugiat doloremque. Nihil,
        recusandae corporis.
      </InfoBox>

      <Bubble
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </TransitionGroup>
  </div>
</template>
