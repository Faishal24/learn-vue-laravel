<script setup lang="ts">
import Header from '@/components/chat/Header.vue';
import Footer from '@/components/chat/Footer.vue';
import NotificationPopover from '@/components/notification/NotificationPopover.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useChat } from '@/composables/useChat';
import { useInitials } from '@/composables/useInitials';
import { chat } from '@/routes';
import { selectedContactMessagesKey } from '@/types/keys';
import { Head } from '@inertiajs/vue3';
import { computed, defineAsyncComponent, provide, ref } from 'vue';

const { getInitials } = useInitials();
const { contactsWithMessages, selectedContact, messages, message, handleSend } =
  useChat();

const activeTab = ref<'chat' | 'media'>('chat');

const ChatList = defineAsyncComponent(() => import('@/components/chat/List.vue'));
const ChatMedia = defineAsyncComponent(() => import('@/components/chat/Media.vue'));

const activeTabComponent = computed(() => {
  return activeTab.value === 'chat' ? ChatList : ChatMedia;
});

defineOptions({
  layout: {
    breadcrumbs: [
      {
        title: 'Chat',
        href: chat(),
      },
    ],
  },
});

provide(selectedContactMessagesKey, messages);
</script>

<template>
  <Head title="Chat" />

  <div class="flex h-full">
    <!-- Contact Section -->
    <div class="flex w-80 flex-col border-r border-sidebar-border/70">
      <div
        class="flex items-center justify-between border-b border-sidebar-border/70 p-4"
      >
        <h1 class="text-xl font-bold">Chat</h1>
        <NotificationPopover />
      </div>
      <div class="flex-1 overflow-y-auto">
        <div
          v-for="contact in contactsWithMessages"
          :key="contact.id"
          class="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-accent"
          :class="contact.id === selectedContact?.id && 'bg-accent/80'"
          @click="selectedContact = contact"
        >
          <Avatar class="size-10 shrink-0">
            <AvatarImage :src="contact.avatar" :alt="contact.name" />
            <AvatarFallback>{{ getInitials(contact.name) }}</AvatarFallback>
          </Avatar>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between">
              <span class="truncate text-sm font-medium">{{
                contact.name
              }}</span>
              <span class="shrink-0 text-xs text-muted-foreground">{{
                contact.latest_message?.time
              }}</span>
            </div>
            <p class="truncate text-sm text-muted-foreground">
              {{ contact.latest_message?.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Section -->
    <div class="relative flex flex-1">
      <Transition name="fade" mode="out-in">
        <div
          v-if="!selectedContact"
          key="empty"
          class="flex flex-1 items-center justify-center text-muted-foreground"
        >
          Pilih kontak untuk mulai chat
        </div>
        <div v-else key="chat" class="flex flex-1 flex-col">
          <Header
            :selected-contact="selectedContact"
            @close="selectedContact = null"
            v-model="activeTab"
          />
          <Suspense>
            <template #default>
              <Transition name="fade" mode="out-in">
                <KeepAlive>
                  <component
                    :is="activeTabComponent"
                    :contact-id="selectedContact.id"
                  />
                </KeepAlive>
              </Transition>
            </template>

            <template #fallback>
              <div
                class="flex flex-1 items-center justify-center text-sm text-muted-foreground"
              >
                Loading conversation...
              </div>
            </template>
          </Suspense>
          <Footer
            v-if="activeTab === 'chat'"
            v-model="message"
            @send="handleSend"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>
