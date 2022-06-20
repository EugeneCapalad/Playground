<template>
  <section class="w-4/5 mx-auto">
    <div class="flex flex-wrap m-20 justify-center gap-x-10 gap-y-8">
      <Card v-for="app in apps" :key="app.id" :appDetails="app" @appClick="appClick"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Card from '@/components/reusable/Card.vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    Card
  },

  setup(){
    const router = useRouter()
    const apps = ref([
      {
        id: 1,
        name : 'To do App',
        status: 'On-going',
        logo: '/img/Todo.png',
        routerName: 'ToDo'
      },

      {
        id: 2,
        name : 'To Be Announced',
        status: 'Not Started',
        routerName: '',
      },

      {
        id: 3,
        name : 'To Be Announced',
        status: 'Not Started',
        routerName: ''
      },
      
    ])

    function appClick(goTo : string) {
      if(goTo) router.push({name: goTo})
    }

    return { 
      apps, 
      appClick
    }
  }
});
</script>

<style scoped>
</style>
