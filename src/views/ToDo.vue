<template>
    <section class="h-full w-full">
        <div class="mx-auto h-full w-2/4 borderThis px-8 py-4">
            <Textfield :latestId="latestId" @addNewTask="addNewTask"></Textfield>
            <div class="mt-8">
                <div class="flex legendContainer mb-3">
                    <div class=" flex gap-x-2">
                        <div 
                            v-for="legend in legends"
                            :key="legend.id"
                            :class="`flex items-center gap-x-1 px-2 py-1 cursor-pointer select-none ${filterType == legend.id ? 'bg-gray-200 rounded' : ''}`"
                            @click="filterTask(legend.id)"
                        >
                            <div :class="`w-3 h-3 bg-${legend.color}`"></div>
                            <p class="m-0">{{legend.name}}</p>
                        </div>
                    </div>

                    <!-- <button class="bg-gray-400 py-1 px-3 rounded text-white">
                        Finished Task
                    </button> -->
                </div>
                <div class="flex flex-col gap-y-3" v-if="displayTask.length">
                    <Task 
                        v-for="task in displayTask" 
                        :key="task.id"
                        :task="task"
                        @modifyTask="modifyTask"
                    ></Task>
                </div>

                <div v-else>
                    <h1 class="text-xxl">Empty</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import Textfield from '@/components/layouts/Todo_Textfield.vue'
import Task from '@/components/Task.vue'
import { TaskType, ModifyTask } from '@/types/types'

export default defineComponent({
    components: {
        Textfield,
        Task
    },

    setup() {
        const legends = reactive([
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
        ])
        const tasks = ref([
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
        ] as TaskType[])
        
        const filterType = ref(0 as number)

        const latestId = computed(() => tasks.value.length + 1)
        // const statusForFillter = {
        //     0:
        // }
        const displayTask = computed(() => {
            if(filterType.value == 0){
                return tasks.value.filter(task => {
                    return task.status !== 0
                })
            }
            else {
                return tasks.value.filter(task => {
                    return task.status == filterType.value
                })
            }

            
        })
        function addNewTask(newTask: TaskType){
            tasks.value.push({...newTask})
        }

        function modifyTask(toEmit: ModifyTask) {
            tasks.value = tasks.value.map(task => {
                if(task.id == toEmit.id) task.status = toEmit.status
                return  task
            })
        }

        function filterTask(id: number) {
            filterType.value = filterType.value == id ? 0 : id
        }

        return {
            tasks,
            legends,
            latestId,
            addNewTask,
            displayTask,
            modifyTask,
            filterTask,
            filterType
        }
    }

})
</script>

<style>
    .legendContainer {
        display: flex;
        justify-content: space-between;
    }
</style>

