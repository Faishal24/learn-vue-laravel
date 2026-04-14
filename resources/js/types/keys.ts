import type { InjectionKey, Ref } from 'vue';

export const selectedContactMessagesKey: InjectionKey<Ref<Message[] | null>> = Symbol('messages');
