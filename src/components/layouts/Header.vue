<template>
<!-- bg-red-500 absolute top-0 left-0 right-0  -->
    <header :class="`bg-${getHeaderTemplate.headerColor} py-7 px-5 flex justify-between shadow fixed top-0 left-0 right-0 z-10`">
        <h1 class="text-white text-4xl font-bold align-middle tracking-wide">{{getHeaderTemplate.title}}</h1>

        <button 
            class="bg-lightBeige rounded px-4 py-2 font-medium home-btn shadow" 
            v-show="showHomeBtn"
            @click="toHome"
        >Home</button>
    </header>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        
        const getHeaderTemplate = computed(() => { return route.meta })

        const showHomeBtn = computed(() => {
            return route.name != 'Home'
        })

        function toHome() {
            router.push({ name: 'Home' })
        }

        return {
            showHomeBtn,
            toHome,
            getHeaderTemplate
        }
    }
}
</script>

<style scoped>
    /* .home-btn {
        box-shadow: 0 1px 5px 0 rgb(0 0 0 / 0.1);
    } */
</style>