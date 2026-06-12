<script setup lang="ts">
import { educations } from '@/data/education'
</script>

<template>
  <div class="section">
    <div class="section-title">Education</div>
    <div v-for="edu in educations" :key="edu.name" class="edu-item">
      <div class="edu-name">{{ edu.name }}</div>
      <div v-if="edu.detail" class="edu-detail">{{ edu.detail }}</div>
      <div v-if="edu.gpa" class="edu-gpa">{{ edu.gpa }}</div>
      <div class="edu-detail">{{ edu.period }}</div>
    </div>
  </div>
</template>
