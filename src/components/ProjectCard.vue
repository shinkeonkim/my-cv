<script setup lang="ts">
import type { ProjectEntry } from '@/types/cv'

defineProps<{
  entry: ProjectEntry
}>()
</script>

<template>
  <div class="proj-item">
    <div class="proj-header">
      <span class="proj-name">{{ entry.name }}</span>
      <span class="exp-period">{{ entry.period }}</span>
    </div>
    <div class="proj-role">{{ entry.role }}</div>
    <div class="proj-desc">{{ entry.description }}</div>
    <ul class="exp-list">
      <li v-for="bullet in entry.bullets" :key="bullet" v-html="bullet"></li>
    </ul>
  </div>
</template>
