<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Button from '@/components/ui/button/Button.vue';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { notifications } from '@/constants/notification';
import { AlertTriangle, Bell } from 'lucide-vue-next';
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="ghost" size="icon" class="relative size-8">
        <Bell class="size-4" />
        <span
          v-if="notifications.some((n) => !n.read)"
          class="absolute top-1 right-1 size-2 rounded-full bg-destructive"
        />
      </Button>
    </PopoverTrigger>
    <PopoverContent align="end" :side-offset="8" class="w-80 p-0">
      <div class="border-b px-4 py-3">
        <p class="text-sm font-semibold">Notifications</p>
      </div>
      <div class="max-h-80 overflow-y-auto">
        <div
          v-for="notif in notifications"
          :key="notif.id"
          class="flex items-start gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-accent"
          :class="{ 'opacity-60': notif.read }"
        >
          <template v-if="notif.type === 'message'">
            <Avatar class="size-8 shrink-0">
              <AvatarFallback class="text-xs">{{ notif.initials }}</AvatarFallback>
            </Avatar>
            <div class="min-w-0 flex-1">
              <p class="text-xs font-medium">{{ notif.sender }}</p>
              <p class="truncate text-xs text-muted-foreground">{{ notif.preview }}</p>
            </div>
          </template>

          <template v-else-if="notif.type === 'system'">
            <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
              <AlertTriangle class="size-3 text-orange-600 dark:text-orange-400" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-xs font-medium">{{ notif.title }}</p>
              <p class="truncate text-xs text-muted-foreground">{{ notif.description }}</p>
            </div>
          </template>

          <template v-else-if="notif.type === 'invite'">
            <Avatar class="size-8 shrink-0">
              <AvatarFallback class="text-xs">{{ notif.initials }}</AvatarFallback>
            </Avatar>
            <div class="min-w-0 flex-1">
              <p class="text-xs font-medium">
                {{ notif.sender }}
                <span class="font-normal text-muted-foreground">invited you to</span>
                {{ notif.groupName }}
              </p>
            </div>
          </template>

          <span class="ml-auto shrink-0 text-xs text-muted-foreground">
            {{ notif.time }}
          </span>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>
