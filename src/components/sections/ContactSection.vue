<script setup lang="ts">
import ContactIcon from '../ContactIcon.vue'
import { contacts } from '@/data/contact'
</script>

<template>
  <div class="section">
    <div class="section-title">Contact</div>
    <div v-for="item in contacts" :key="item.text" class="contact-item">
      <ContactIcon :icon="item.icon" />
      <a v-if="item.href" :href="item.href">{{ item.text }}</a>
      <span v-else>{{ item.text }}</span>
    </div>
  </div>
</template>
