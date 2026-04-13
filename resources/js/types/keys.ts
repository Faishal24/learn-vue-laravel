import type { InjectionKey, Ref } from 'vue';

export const selectedContactKey: InjectionKey<Ref<Contact | null>> = Symbol('selectedContact');
