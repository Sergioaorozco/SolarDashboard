<template>
    <!-- Each of one the cards -->
    <div class="card bg-white h-auto px-4 inline-block">
      <div class="flex justify-between items-center mb-4">
        <p class="text-xs bg-slate-100 px-4 py-1 rounded-md text-slate-600">{{cardInfo.tag}}</p>
        <span
          class="actionsMenu w-6 h-6 text-[0.7rem] bg-white border border-slate-200 rounded-full flex justify-center items-center hover:bg-slate-200 transition-colors duration-300"><i
            class="pi pi-ellipsis-v"></i></span>
      </div>
      <h3 class="text-slate-500 font-semibold mb-2">{{cardInfo.title}}</h3>
      <p class="text-slate-400 text-sm mb-2">{{ cardInfo.description }}</p>
        <ProgressBar :value="cardInfo.value" style="height: 6px;"/>
    </div>
</template>

<script>
import ProgressBar from 'primevue/progressbar';

export default {
  data(){
    return {
    }
  },
  components: {
    ProgressBar
  },
  props: ['cardInfo']
}

</script>

<style scoped>
</style>