<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Nav-bar.vue'
</script>

<template>
  <v-app class="bg-blue-grey-lighten-3">
    <Navbar />
    <RouterView />
  </v-app>
</template>
