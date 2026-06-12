<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import CvSidebar from './CvSidebar.vue'
import CvMain from './CvMain.vue'

const { theme } = useTheme()
</script>

<template>
  <div class="page" :class="`theme-${theme}`">
    <CvSidebar />
    <CvMain />
  </div>
</template>
