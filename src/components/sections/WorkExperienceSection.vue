<script setup lang="ts">
import ExperienceCard from '../ExperienceCard.vue'
import { experiences } from '@/data/experiences'
</script>

<template>
  <div class="section">
    <div class="section-title">Work Experience</div>
    <ExperienceCard v-for="entry in experiences" :key="entry.role + entry.period" :entry="entry" />
  </div>
</template>
