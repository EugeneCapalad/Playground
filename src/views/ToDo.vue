<template>
    <section class="h-full w-full">
        <div class="mx-auto h-full w-2/4 borderThis px-8 pt-4">
            <Textfield :latestId="latestId"></Textfield>
            <div class="mt-10">
                <div class="mb-3 flex gap-x-4">
                    <div 
                        v-for="legend in legends"
                        :key="legend.id"
                        class="flex items-center gap-x-1"
                        @addNewTask="addNewTask"
                    >
                        <div :class="`w-3 h-3 bg-${legend.color}`"></div>
                        <p class="m-0">{{legend.name}}</p>
                    </div>
                </div>
                <div class="flex flex-col gap-y-3">
                    <Task 
                        v-for="task in tasks" 
                        :key="task.id"
                        :task="task"
                    ></Task>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Textfield from '@/components/layouts/Todo_Textfield.vue'
import Task from '@/components/Task.vue'
import { TaskType } from '@/types/types'

export default defineComponent({
    components: {
        Textfield,
        Task
    },

    setup() {
        const legends = [
            {
                id: 1,
                name: 'On-going',
                color: 'gray-400'
            },
            {
                id: 2,
                name: 'Finished',
                color: 'primary'
            },
        ]
        const tasks = [
            {
                id: 1,
                taskName: 'Finish To Do App',
                dateCreated: '2022-06-20',
                status: 1
            },
            {
                id: 2,
                taskName: 'test',
                dateCreated: '2022-06-21',
                status: 2
            },
            {
                id: 3,
                taskName: 'testing',
                dateCreated: '2022-06-21',
                status: 2
            },
        ]

        const latestId = computed(() => tasks.length + 1)
        function addNewTask(newTask: TaskType){
            tasks.push(newTask)
        }

        return {
            tasks,
            legends,
            latestId,
            addNewTask
        }
    }

})
</script>


