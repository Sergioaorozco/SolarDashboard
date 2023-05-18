<template>
    <div>
      <p class="text-slate-600 text-2xl font-bold mb-3">Tasks</p>
      <div class="flex items-center gap-x-3">
        <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
          :maxSelectedLabels="3" class="w-full md:w-20rem" />
        <button class="bg-blue-600 text-white rounded-md px-5 py-3 whitespace-pre hover:bg-blue-800 transition-colors duration-300">Agregar Proyecto</button>
      </div>
    </div>
</template>

<script>
import MultiSelect from 'primevue/multiselect';

export default {
  data() {
    return {
      selectedCities: '',
      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }        
      ]
    }
  },
  components: {
    MultiSelect,

  }
}




</script>