<script setup lang="ts">
import { activities } from '@/data/activities'
</script>

<template>
  <div class="section">
    <div class="section-title">Activities</div>
    <div v-for="activity in activities" :key="activity.name" class="activity-item">
      <div class="activity-name" v-html="activity.name"></div>
      <div class="activity-detail" v-html="activity.detail"></div>
    </div>
  </div>
</template>
