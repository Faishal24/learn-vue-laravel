<script setup lang="ts">
import Footer from '@/components/chat/Footer.vue';
import Header from '@/components/chat/Header.vue';
import List from '@/components/chat/List.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { contacts } from '@/constants/contact';
import { computed, ref } from 'vue';

const selectedContact = ref<Contact | null>(null);

function selectContact(contact: Contact) {
    selectedContact.value = contact;
}

const contactWithMessage = computed(() => {
  return contacts.filter(contact => contact.messages && contact.messages.length > 0);
})
</script>

<template>
    <div class="flex h-full">
        <!-- Contact Section -->
        <div class="flex w-80 flex-col border-r border-sidebar-border/70">
            <div class="border-b border-sidebar-border/70 p-4">
                <h1 class="text-xl font-bold">Chat</h1>
            </div>
            <div class="flex-1 overflow-y-auto">
                <div
                    v-for="contact in contactWithMessage"
                    :key="contact.id"
                    class="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-accent"
                    @click="selectContact(contact)"
                >
                    <Avatar class="size-10 shrink-0">
                        <AvatarImage
                            :src="contact.avatar"
                            :alt="contact.name"
                        />
                        <AvatarFallback>{{ contact.initials }}</AvatarFallback>
                    </Avatar>
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between">
                            <span class="truncate text-sm font-medium">{{
                                contact.name
                            }}</span>
                            <span
                                class="shrink-0 text-xs text-muted-foreground"
                                >{{ contact.messages?.at(-1)?.time }}</span
                            >
                        </div>
                        <p class="truncate text-sm text-muted-foreground">
                            {{ contact.messages?.at(-1)?.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Chat Section -->
        <div class="flex flex-1">
            <div
                v-if="!selectedContact"
                class="flex flex-1 items-center justify-center text-muted-foreground"
            >
                Pilih kontak untuk mulai chat
            </div>
            <div v-else class="flex flex-1 flex-col">
                <Header :selected-contact="selectedContact" />
                <List :selected-contact="selectedContact" />
                <Footer />
            </div>
        </div>
    </div>
</template>
