<template>
    <div 
        v-if="task.status != 0"
        class="px-5 py-4 rounded-md flex  gap-x-5 todo-card"
    >
        <div :class="`w-1.5 ${getStatus()}`">
            <!-- line -->
        </div>
        <div class="flex-1 flex items-center task">
            <div class="flex-1">
                <p class="text-gray-400 text-sm">{{ getDate() }}</p>
                <p class="font-medium text-xl">{{ task.taskName }}</p>
            </div>

            <div class="w-20 h-2/3 flex gap-x-4"> <!--Button Container-->
                <div 
                    @click="modifyTask('finish')"
                    class="w-1/2 flex justify-center items-center rounded-full fab-btn p-0.5 cursor-pointer"
                >
                    <div class="bg-gray-100 w-full h-full rounded-full flex justify-center items-center">
                            <span class="mdi mdi-check-bold text-primary text-xl"></span>
                    </div>
                </div>
                <div 
                    @click="modifyTask('delete')"
                    class="w-1/2 flex justify-center items-center rounded-full fab-btn p-0.5 cursor-pointer"
                >
                    <div class="bg-gray-100 w-full h-full rounded-full flex justify-center items-center">
                            <span class="mdi mdi-trash-can text-bin text-xl"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import moment from 'moment'

export default defineComponent({
    props: {
        task: {
            required: true,
            type: Object
        }
    },

    setup( props, { emit } ) {
        function getStatus() {
            if(props.task.status == 0) return 'bg-red-500'
            else if(props.task.status == 1) return 'bg-gray-400'
            return 'bg-primary'
        }

        function getDate() {
            return moment(props.task.dateCreated).format('MMMM D, YYYY')
        }

        function finishTask() {
            emit('finishTask', props.task.id)
        }

        function deleteTask() {
            emit('deleteTask', props.task.id)
        }

        function modifyTask(method: string){
            let toEmit = {
                status: method === 'finish' ? 2 : 0,
                id: props.task.id
            }

            emit('modifyTask', toEmit)
        }

        return {
            getStatus,
            getDate,
            // finishTask,
            // deleteTask,
            modifyTask
        }
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