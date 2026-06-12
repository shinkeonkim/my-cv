<script setup lang="ts">
import { skills } from '@/data/skills'
</script>

<template>
  <div class="section">
    <div class="section-title">Skills</div>
    <div v-for="category in skills" :key="category.label" class="skill-category">
      <div class="skill-label">{{ category.label }}</div>
      <div class="tags">
        <span v-for="item in category.items" :key="item" class="tag">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
