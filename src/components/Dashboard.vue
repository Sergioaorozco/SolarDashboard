<template>
  <div class="">
    <p class="text-slate-600 text-2xl font-bold mb-3">Dashboard</p>
    <section class="grid grid-cols-4 gap-x-4 items-center mb-8">
      <article v-for="dash in Rates" :key="dash.title" class="card h-28 flex flex-col justify-between">
        <p class="text-slate-500 font-semibold"><i :class="dash.icon , dash.color, dash.text" class="pi p-2  rounded-full"></i> {{ dash.title }}</p>
        <div class="flex justify-between">
          <p class="text-slate-400 text-3xl">${{ dash.price }}<span class="ml-1 text-xs">USD</span></p>
          <div>
            <p class="text-slate-600 text-sm font-bold"><i class="pi pi-arrow-up-right mr-2"></i>8%</p>
            <p class="text-slate-400 text-xs underline">View last days</p>
          </div>
        </div>
      </article>
    </section>
    <section class="flex justify-between gap-x-3 mt-3">
      <div class="card w-2/3 p-5">
        <chatVisualization />
      </div>
      <div class="bg-white card w-1/2">
        <div class="flex justify-between items-center">
          <p class="text-lg text-slate-500 font-semibold mb-3">Top Transaction</p>
          <p class="text-xs mb-3 bg-blue-100 text-blue-500 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors duration-300">View Detail</p>
        </div>
        <DataTable :value="cars" stripedRows >
          <Column sortable field="vin" header="Vin"></Column>
          <Column sortable field="year" header="Year"></Column>
          <Column sortable field="brand" header="Brand"></Column>
          <Column sortable field="color" header="Color"></Column>
        </DataTable>
      </div>
    </section>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import chatVisualization from '../components/chatVisualization.vue'

export default {
  data(){
    return {
      cars: [
        {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      ],
      Rates: [
        {"title": "Total Revenue", "year": 2012, "price": 1203, "icon": "pi-dollar" ,'color':"bg-green-100", 'text': 'text-green-700'},
        {"title": "Total Customer", "year": 2012, "price": 3240, "icon": "pi-users" ,'color':"bg-amber-200", 'text': 'text-amber-700'},
        {"title": "Total Transaction", "year": 2012, "price": 3232, "icon": "pi-bookmark" ,'color':"bg-teal-200", 'text': 'text-teal-700'},
        {"title": "Total Product", "year": 2012, "price": 12000, "icon": "pi-bolt" ,'color':"bg-blue-200", 'text': 'text-blue-700'},
      ]
    }
  },
  components: {
    chatVisualization,
    DataTable,
    Column,
  },
}
</script>

<style lang="scss">
.card {
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
  border-width: 1px;
  border-radius: 0.5rem;
  padding: 1rem;
}

.p-datatable-thead {
  th[role=columnheader]:first-child { border-top-left-radius: 10px; }
  th[role=columnheader]:last-child { border-top-right-radius: 10px; }
}
</style>