<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggle } = useTheme()

const label = computed(() =>
  theme.value === 'dark' ? '밝은 테마로 보기' : '어두운 테마로 보기',
)
const ariaPressed = computed(() => theme.value === 'light')
</script>

<template>
  <button
    class="theme-btn no-print"
    type="button"
    :aria-pressed="ariaPressed"
    :title="label"
    @click="toggle"
  >
    {{ label }}
  </button>
</template>
