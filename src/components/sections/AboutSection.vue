<script setup lang="ts">
import { about } from '@/data/profile'
</script>

<template>
  <div class="section">
    <div class="section-title">About</div>
    <ul class="about-list">
      <li v-for="item in about" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
