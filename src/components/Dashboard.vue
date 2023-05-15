<template>
  <div>
    <p class="text-slate-600 text-2xl font-bold mb-3">Latest Tasks</p>
    <section class="grid grid-cols-3 justify-start items-center gap-x-4">
      <article class="bg-slate-100 py-4 rounded-lg">
        <p>Profile 01</p>
      </article>
      <article class="bg-slate-200 p-4 rounded-lg">
        <p>Profile 02</p>
      </article>
      <article class="bg-slate-200 p-4 rounded-lg">
        <p>Profile 03</p>
      </article>
    </section>
    <DataTable :value="cars" stripedRows>
      <Column field="vin" header="Vin"></Column>
      <Column field="year" header="Year"></Column>
      <Column field="brand" header="Brand"></Column>
      <Column field="color" header="Color"></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
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
    ]
    }
  },
  components: {
    DataTable,
    Column
  }
}
</script>