<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <div class="section">
    <div class="section-title">Projects</div>
    <ProjectCard v-for="entry in projects" :key="entry.name + entry.period" :entry="entry" />
  </div>
</template>
