<template>
    <div 
        @click="clicked()"
        class="flex-1 shrink-0 card rounded-lg w-72 overflow-hidden cursor-pointer"
    >
        <div>
            <img draggable="false" :src="getImage()" class="object-contain h-72 w-full">
        </div>
        <div class="flex justify-center align-center pb-7 px-2">
            <p class="text-2xl font-medium">{{appDetails.name}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    props: {
        appDetails: {
            type: Object,
            required: true
        }
    },

    setup( props, { emit } ){
        // const details = { ...props.appDetails }

        function getImage() {
            if(props.appDetails.logo) return props.appDetails.logo

            return '/img/Coming-soon.jpg'
        }

        function clicked(){
            emit('appClick', props.appDetails.routerName)
        }

        return { 
            getImage,
            clicked
        }
    }
})
</script>

<style scoped>
    .card {
        box-shadow: 0 1px 5px 0 rgb(0 0 0 / 0.1), 0 0 4px 0 rgb(0 0 0 / 0.1);
        transition: transform .15s, box-shadow .15s;
    }

    .card:hover {
        transform: scale(1.04);
        box-shadow: 0 5px 10px 0 rgb(0 0 0 / 0.1), 0 2px 10px 0 rgb(0 0 0 / 0.1);
    }

    .card:active {
        transform: scale(1.065);
        box-shadow: 0 5px 20px 0 rgb(0 0 0 / 0.1), 0 2px 20px 0 rgb(0 0 0 / 0.1);
    }
</style>