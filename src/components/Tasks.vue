<template>
  <div>
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
          <div :class="status.color" class="card h-auto flex flex-col gap-y-4 border-none">
            <!-- Each of one the cards -->
            <div class="card bg-white h-auto px-4 inline-block">
              <div class="flex justify-between items-center mb-4">
                <p class="text-xs bg-slate-100 px-4 py-1 rounded-md text-slate-600">Contact Management</p>
                <span class="actionsMenu w-6 h-6 text-[0.7rem] bg-white border border-slate-200 rounded-full flex justify-center items-center hover:bg-slate-200 transition-colors duration-300"><i class="pi pi-ellipsis-v"></i></span>
              </div>
              <h3 class="text-slate-500 font-semibold mb-2">Tarjeta 1</h3>
              <p class="text-slate-400 text-sm">A "Not Started" card refers to a task or project that has not yet been initiated or commenced. It representation of the task or project...</p>
            </div>
            <!-- Each of one the cards -->
            <div class="card bg-white h-auto px-4 inline-block">
              <div class="flex justify-between items-center mb-4">
                <p class="text-xs bg-slate-100 px-4 py-1 rounded-md text-slate-600">Calltracking</p>
                <span class="actionsMenu w-6 h-6 text-[0.7rem] bg-white border border-slate-200 rounded-full flex justify-center items-center hover:bg-slate-200 transition-colors duration-300"><i class="pi pi-ellipsis-v"></i></span>
              </div>
              <h3 class="text-slate-500 font-semibold mb-2">Tarjeta 1</h3>
              <p class="text-slate-400 text-sm">A "Not Started" card refers to a task or project that has not yet been initiated or commenced. It representation of the task or project...</p>
            </div>
            <!-- Each of one the cards -->
            <div class="card bg-white h-auto px-4 inline-block">
              <div class="flex justify-between items-center mb-4">
                <p class="text-xs bg-slate-100 px-4 py-1 rounded-md text-slate-600">Funds</p>
                <span class="actionsMenu w-6 h-6 text-[0.7rem] bg-white border border-slate-200 rounded-full flex justify-center items-center hover:bg-slate-200 transition-colors duration-300"><i class="pi pi-ellipsis-v"></i></span>
              </div>
              <h3 class="text-slate-500 font-semibold mb-2">Tarjeta 1</h3>
              <p class="text-slate-400 text-sm">A "Not Started" card refers to a task or project that has not yet been initiated or commenced. It representation of the task or project...</p>
            </div>
            <!-- Each of one the cards -->
            <div class="card bg-white h-auto px-4 inline-block">
              <div class="flex justify-between items-center mb-4">
                <p class="text-xs bg-slate-100 px-4 py-1 rounded-md text-slate-600">Funds</p>
                <span class="actionsMenu w-6 h-6 text-[0.7rem] bg-white border border-slate-200 rounded-full flex justify-center items-center hover:bg-slate-200 transition-colors duration-300"><i class="pi pi-ellipsis-v"></i></span>
              </div>
              <h3 class="text-slate-500 font-semibold mb-2">Tarjeta 1</h3>
              <p class="text-slate-400 text-sm">A "Not Started" card refers to a task or project that has not yet been initiated or commenced. It representation of the task or project...</p>
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

export default {
  data() {
    return {
      selectedProject: '',
      board: [
        { name: 'Not Started', color:'bg-stale-100' },
        { name: 'In progress', color:'bg-stale-100' },
        { name: 'Ready for QA', color:'bg-stale-100' },
        { name: 'Done', color:'bg-green-50' },
      ],
      projects: [
        { name: 'Newsletter May 2023', code: 'RM' },
        { name: 'Print and Distribution', code: 'LDN' },
        { name: 'Project Vue 1', code: 'NY' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Speech preparation', code: 'PRS' }
      ]
    }
  },
  components: {
    Dropdown,
    Chip,
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