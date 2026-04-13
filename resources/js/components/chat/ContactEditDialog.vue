<script setup lang="ts">
import { Pencil } from 'lucide-vue-next';
import CardHeader from '../ui/card/CardHeader.vue';
import DialogTrigger from '../ui/dialog/DialogTrigger.vue';
import DialogTitle from '../ui/dialog/DialogTitle.vue';
import DialogDescription from '../ui/dialog/DialogDescription.vue';
import DialogContent from '../ui/dialog/DialogContent.vue';
import Label from '../ui/label/Label.vue';
import {
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  watch,
  watchEffect,
} from 'vue';
import Dialog from '../ui/dialog/Dialog.vue';
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps<{
  contact: Contact;
}>();

const openDialog = ref(false);

const form = useForm({
  name: '',
});

// Bisa pakai ini namun sebaiknya pakai watch
// onUpdated(() => {
//   form.name = props.contact.name;
// })

// Alternatif bisa pakai watch() juga
// watch(() => props.contact, (newContact) => {
//   form.name = newContact.name;
// }, { immediate: true });

watchEffect(() => {
  form.name = props.contact.name;
});
</script>

<template>
  <Dialog v-model:open="openDialog">
    <DialogTrigger as-child>
      <Button
        title="Edit contact"
        variant="ghost"
        size="icon"
        class="size-6 opacity-0 group-hover:opacity-100"
        @click="openDialog = true"
      >
        <Pencil class="size-3" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <CardHeader class="px-0">
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogDescription>
          Here you can edit the contact information. This is just a placeholder
          dialog to demonstrate the Dialog component.
        </DialogDescription>
      </CardHeader>
      <!-- <form
        class="flex flex-col"
        @submit.prevent="form.post('/some-route')"
      > -->
      <form
        class="flex flex-col"
        @submit.prevent="
          console.log('Submitted name:', form.name);
          openDialog = false;
        "
      >
        <div>
          <Label for="name" class="mb-1 block text-sm font-medium">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            class="w-full rounded-md border px-3 py-2 focus:ring focus:outline-none"
            placeholder="Enter name"
            v-model="form.name"
          />
        </div>

        <Button type="submit" class="mt-4 ml-auto"> Save Changes </Button>
      </form>
    </DialogContent>
  </Dialog>
</template>
