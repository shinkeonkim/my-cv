<script setup lang="ts">
const printPage = () => {
  window.print()
}
</script>

<template>
  <button class="print-btn no-print" type="button" @click="printPage">PDF로 저장</button>
</template>
