<template>
  <div class="">
    <p class="text-slate-600 text-2xl font-bold mb-3">Tasks</p>
    <div class="flex items-center gap-x-3">
      <Dropdown v-model="selectedProject" :options="projects" filter optionLabel="name" placeholder="Select a Project"
        class="w-full md:w-14rem">
        <template #value="slotProps">
          <div v-if="slotProps.value" class="flex align-items-center">
            <Chip>{{slotProps.value.name }}</Chip>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="flex align-items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
      <button
        class="bg-blue-600 text-white rounded-md px-5 py-3 w-56 hover:bg-blue-800 transition-colors duration-300">Agregar
        Proyecto</button>
    </div>
    <section class="grid grid-cols-4 mt-6 gap-x-6">
      <div v-for="status in board" class="h-full">
        <article class="flex flex-col justify-center items-centers gap-y-4 pb-6">
          <div :class="status.color" class="card text-slate-600 font-semibold">{{ status.name }}</div>
          <div class="bg-transparent card h-auto flex flex-col gap-y-4 border-none">
            <div v-for="card in cardInformation" >
              <CardTask v-if="card.status === status.name.toLowerCase().replace(' ', '-')" :cardInfo="card" />
            </div>
          </div>
        </article>
      </div>
      
    </section>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Chip from 'primevue/chip';
import CardTask from '../components/CardTask.vue'

export default {
  data() {
    return {
      selectedProject: '',
      board: [
        { name: 'Not Started', color:'bg-slate-100', cardStatus: true,  },
        { name: 'In progress', color:'bg-orange-50', cardStatus: false },
        { name: 'Ready for QA', color:'bg-sky-50', cardStatus: false  },
        { name: 'Done', color:'bg-lime-50', cardStatus: true  },
      ],
      projects: [
        { name: 'Newsletter May 2023', code: 'RM' },
        { name: 'Print and Distribution', code: 'LDN' },
        { name: 'Project Vue 1', code: 'NY' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Speech preparation', code: 'PRS' }
      ],
      cardInformation: [
        {title:'Tarjeta 1', tag: 'Contact', description: 'A "Not Started" card refers to a task or project that has not yet been initiated or commenced. It representation of the task or project...', value: 30, status: 'not-started'},
        {title:'Tarjeta 2 Completada', tag: 'CallTracking', description: 'A "Done" card refers to a task or project that has been finalied. It representation of the task or project...', value: 100, status: 'done'},   
        {title:'Tarjeta 3', tag: 'CallTracking', description: 'A "Done" card refers to a task or project that has been finalied. It representation of the task or project...', value: 21, status: 'not-started'},   
      ]
    }
  },
  components: {
    Dropdown,
    Chip,
    CardTask
  },
  methods: {
    addToproject(e){
      console.log(e);
    }
  }
}

</script>

<style lang="scss">

</style>