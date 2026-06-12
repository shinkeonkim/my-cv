<script setup lang="ts">
import { awards } from '@/data/awards'
</script>

<template>
  <div class="section">
    <div class="section-title">Awards</div>
    <div v-for="award in awards" :key="award.name" class="award-item">
      <div class="award-name">{{ award.name }}</div>
      <div class="award-date">{{ award.date }}</div>
    </div>
  </div>
</template>
