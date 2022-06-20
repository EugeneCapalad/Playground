<template>
    <Header />
    <main class="h-screen w-full flex antialiased text-gray-700 flex flex-col" v-cloak>
    <router-view class="mt-26"/>
  </main>

  
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import Header from '@/components/layouts/Header.vue'
export default defineComponent ({
  components: {
    Header
  },

  setup(){
    const img = '@/assets/images/Coming_soon.jpg'
    return { img }
  }
})
</script>

<style scoped>
  [v-cloak] {
    display: none
  }
</style>
