<script setup lang="ts">
import Input from '../ui/input/Input.vue';
import { computed, ref } from 'vue';

const search = ref('');
const activeFilter = ref<'all' | 'image' | 'file'>('all');

const mediaItems = [
  { id: 1, type: 'image' as const, name: 'screenshot.png', size: '2.4 MB', date: '12 Apr' },
  { id: 2, type: 'file' as const, name: 'report.pdf', size: '1.1 MB', date: '11 Apr' },
  { id: 3, type: 'image' as const, name: 'photo.jpg', size: '3.8 MB', date: '10 Apr' },
  { id: 4, type: 'file' as const, name: 'notes.docx', size: '450 KB', date: '9 Apr' },
  { id: 5, type: 'image' as const, name: 'banner.png', size: '1.7 MB', date: '8 Apr' },
  { id: 6, type: 'file' as const, name: 'data.xlsx', size: '890 KB', date: '7 Apr' },
  { id: 7, type: 'image' as const, name: 'avatar.jpg', size: '520 KB', date: '6 Apr' },
  { id: 8, type: 'file' as const, name: 'slides.pptx', size: '5.2 MB', date: '5 Apr' },
];

const filteredMedia = computed(() => {
  return mediaItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.value.toLowerCase());
    const matchesFilter = activeFilter.value === 'all' || item.type === activeFilter.value;
    return matchesSearch && matchesFilter;
  });
});

const filters = [
  { key: 'all' as const, label: 'All' },
  { key: 'image' as const, label: 'Images' },
  { key: 'file' as const, label: 'Files' },
];
</script>

<template>
  <div class="flex flex-1 flex-col overflow-y-auto p-4">
    <Input
      v-model="search"
      type="text"
      placeholder="Search media..."
      class="mb-3"
    />

    <div class="mb-3 flex gap-1">
      <button
        v-for="filter in filters"
        :key="filter.key"
        class="rounded-full px-3 py-1 text-xs font-medium transition-colors"
        :class="
          activeFilter === filter.key
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground hover:bg-accent'
        "
        @click="activeFilter = filter.key"
      >
        {{ filter.label }}
      </button>
    </div>

    <div v-if="filteredMedia.length === 0" class="flex flex-1 items-center justify-center text-sm text-muted-foreground">
      No media found
    </div>

    <div v-else class="space-y-2">
      <div
        v-for="item in filteredMedia"
        :key="item.id"
        class="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent"
      >
        <div
          class="flex size-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
          :class="
            item.type === 'image'
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
              : 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
          "
        >
          {{ item.type === 'image' ? 'IMG' : 'DOC' }}
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-medium">{{ item.name }}</p>
          <p class="text-xs text-muted-foreground">{{ item.size }}</p>
        </div>
        <span class="shrink-0 text-xs text-muted-foreground">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>
