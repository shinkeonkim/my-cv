<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <div class="header">
    <h1>{{ profile.name }}</h1>
    <h2>{{ profile.role }}</h2>
    <div class="divider"></div>
  </div>
</template>
