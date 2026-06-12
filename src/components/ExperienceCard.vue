<script setup lang="ts">
import type { ExperienceEntry } from '@/types/cv'

defineProps<{
  entry: ExperienceEntry
}>()
</script>

<template>
  <div class="exp-item">
    <div class="exp-header">
      <span class="exp-company">{{ entry.company }}</span>
      <span class="exp-period">{{ entry.period }}</span>
    </div>
    <div class="exp-role">{{ entry.role }}</div>
    <div v-if="entry.tags && entry.tags.length" class="exp-tags">
      <span v-for="tag in entry.tags" :key="tag" class="exp-tag">{{ tag }}</span>
    </div>
    <ul class="exp-list">
      <li v-for="bullet in entry.bullets" :key="bullet" v-html="bullet"></li>
    </ul>
  </div>
</template>
