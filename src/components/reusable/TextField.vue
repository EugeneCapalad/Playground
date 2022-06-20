<template>
    <input 
        class="w-full px-5 py-3 box-border inputBorder rounded-md text-lg"
        type="text"
        :placeholder="placeHolder"
    >
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    props: {
        placeHolder: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>
    .inputBorder {
        outline: 2px solid #2393d8;
    }

    /* .inputBorder:focus {
        outline: 3px solid #0481cf
    } */
</style>