<script setup lang="ts">
import { certifications } from '@/data/certifications'
</script>

<template>
  <div class="section">
    <div class="section-title">Certifications</div>
    <div v-for="cert in certifications" :key="cert.name" class="cert-item">
      <span class="cert-name">{{ cert.name }}</span>
      <span class="cert-date">{{ cert.date }}</span>
    </div>
  </div>
</template>
