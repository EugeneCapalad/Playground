<template>
    <section class="h-full w-full">
        <div class="mx-auto h-full w-2/4 borderThis px-8 pt-4">
            <Textfield></Textfield>
            <div class="mt-10">
                <div class="px-5 py-4 rounded-md flex  gap-x-5 todo-card">
                    <div class="w-1.5 bg-red-500">
                        
                    </div>
                    <div class="flex-1 flex items-center task">
                        <div class="flex-1">
                            <p class="text-gray-400 text-sm">June 20, 2022</p>
                            <p class="font-medium text-xl">Finish To do App</p>
                        </div>

                        <div class="w-20 h-2/3 flex gap-x-4">
                            <div class="w-1/2 flex justify-center items-center rounded-full fab-btn p-0.5 cursor-pointer">
                                <div class="bg-gray-100 w-full h-full rounded-full flex justify-center items-center">
                                        <span class="mdi mdi-check-bold text-primary text-xl"></span>
                                </div>
                            </div>
                            <div class="w-1/2 flex justify-center items-center rounded-full fab-btn p-0.5 cursor-pointer">
                                <div class="bg-gray-100 w-full h-full rounded-full flex justify-center items-center">
                                        <span class="mdi mdi-trash-can text-bin text-xl"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Textfield from '@/components/layouts/Todo_Textfield.vue'

export default defineComponent({
    components: {
        Textfield
    }
})
</script>

<style scoped>
    .todo-card {
        box-shadow: 0 1px 5px 0 rgb(0 0 0 / 0.1), 0 0 4px 0 rgb(0 0 0 / 0.1);
    }

    .fab-btn {
        box-shadow: 0 1px 5px 0 rgb(0 0 0 / 0.15), 0 0 4px 0 rgb(0 0 0 / 0.15);
        transition: opacity .15s, transform .15s;
        opacity: 0;
    }

    .fab-btn:hover {
        transform: scale(1.2);
    }

    .fab-btn:active {
        transform: scale(1.28);
    }

    .task:hover .fab-btn{
        opacity: 1;
    }
</style>
