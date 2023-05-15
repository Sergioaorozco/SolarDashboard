<template>
  <div class="">
    <p class="text-slate-600 text-2xl font-bold mb-3">Dashboard</p>
    <section class="grid grid-cols-4 gap-x-4 items-center mb-5">
      <article v-for="dash in Rates" class="card h-28 flex flex-col justify-between">
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
    <section class="flex justify-between gap-x-3">
      <div class="card w-2/3 p-5">
        <DataTable :value="cars" stripedRows>
          <Column field="vin" header="Vin"></Column>
          <Column field="year" header="Year"></Column>
          <Column field="brand" header="Brand"></Column>
          <Column field="color" header="Color"></Column>
        </DataTable>
      </div>
      <div class="card w-1/3">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
      </div>
    </section>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Chart from 'primevue/chart';
import Column from 'primevue/column';
export default {
  data(){
    return {
      cars: [
        {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
      ],
      Rates: [
        {"title": "Total Revenue", "year": 2012, "price": 4000, "icon": "pi-dollar" ,'color':"bg-green-100", 'text': 'text-green-700'},
        {"title": "Total Customer", "year": 2012, "price": 4000, "icon": "pi-users" ,'color':"bg-amber-200", 'text': 'text-amber-700'},
        {"title": "Total Transaction", "year": 2012, "price": 4000, "icon": "pi-bookmark" ,'color':"bg-teal-200", 'text': 'text-teal-700'},
        {"title": "Total Product", "year": 2012, "price": 4000, "icon": "pi-bolt" ,'color':"bg-blue-200", 'text': 'text-blue-700'},
      ]
    }
  },
  components: {
    DataTable,
    Column,
    Chart
  }
}
</script>

<style>
.card {
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
  border-width: 1px;
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>