<template>
    <div class="flex borderThis rounded-md p-0 overflow-hidden">
        <input 
            class="w-full px-5 py-3 box-border inputBorder rounded-md text-lg"
            type="text"
            placeholder="Add Task"
            v-model="taskName"
            @keyup.enter="addNewTask"
        >
        <button 
            @click="addNewTask"
            class="w-24 bg-disabled box-border add-btn font-bold"
        >ADD</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/runtime-core";
import moment from 'moment'

export default defineComponent({
    props: {
        latestId: {
            required: false,
            type: Number
        }
    },
    setup(props, { emit }){
        const disableAddBtn = ref(true as boolean)
        const taskName = ref('' as string)

        function addNewTask() {
            let newTask = reactive({
                id: props.latestId,
                taskName,
                dateCreated: moment().format('YYYY-MM-DD'),
                status: 1
            })

            emit('addNewTask', newTask)

            taskName.value = ''
            newTask = reactive({
                id: 0,
                taskName: '',
                dateCreated: '',
                status: 0
            })
            


        }

        return {
            disableAddBtn,
            addNewTask,
            taskName,
        }
    }
})
</script>

<style scoped>
    .borderThis {
        outline: 2px solid #b4b4b4;
        transition: outline .15s
    }

    .add-btn {
        color: #dcdcdc;
        transition: background-color .15s, color .15s;
    }

    .add-btn:hover {
        cursor: not-allowed;
    }

    .borderThis:focus-within {
        outline: 2px solid #4AB0F1;
    }

    .borderThis:focus-within .add-btn{
        background-color: #4AB0F1;
        color: white;
        pointer-events: auto;
    }

    .borderThis:focus-within .add-btn:hover{
        cursor: pointer;
    }
 
    .inputBorder {
        outline: 0;
    }

</style>