<template>
  <div class="flex items-start">
    <aside class="w-1/6 h-screen fixed z-10 bg-slate-50 border-r border-slate-100 pt-3 pb-10 px-10">
      <div class="flex justify-between flex-col h-full">
        <nav>
          <figure class="flex items-center py-2 mb-20">
            <img class="w-10 mr-2" src="/vite.svg" alt="">
            <p class="text-2xl font-bold text-slate-700 my-4">VisualSolar</p>
          </figure>
          <div class="flex flex-col gap-4">
            <router-link :to="{name:'dashboard'}" class="hover:bg-slate-100 px-4 py-2 rounded-full">Dashboard</router-link>
            <router-link :to="{name:'users'}" class="hover:bg-slate-100 px-4 py-2 rounded-full">Users</router-link>
            <router-link :to="{name:'accounts'}" class="hover:bg-slate-100 px-4 py-2 rounded-full">Accounts</router-link>
          </div>
        </nav>
        <div class="flex flex-col">
          <div class="border-b border-slate-200 my-3"></div>
          <a href="#" class="hover:bg-red-200 bg-red-100 px-2 py-2 rounded-lg text-sm" @click="logOut">
            <figure class="flex items-center">
              <img class="mr-2" src="/icons/logout.svg">
              <p class="text-red-700 font-semibold">Logout</p>
            </figure>
          </a>
        </div>
      </div>
    </aside>
    <section class="pl-10 pr-8 py-6 w-full viewOverflow">
      <header class="flex justify-end items-center">
        <figure>
          <img v-tooltip.left="userLogged.displayName" class="w-12 h-12 rounded-full" :src="userLogged.photoURL || defaultImg" alt="profile image">
        </figure>
      </header>
      <div class="mt-10">
        <router-view name="dashboard"></router-view>
        <router-view name="users"></router-view>
        <router-view name="accounts"></router-view>
      </div>
    </section>
  </div>
</template>
<script>
import { useUserStore } from '../stores/userStore'
import { defineComponent } from 'vue'

export default defineComponent ({
  setup(){
    const userStore = useUserStore()
    return {userStore}
  },
  data () {
    return {
      defaultImg: '../defaultimage.svg',
      activeElement:'',
      userLogged: this.userStore.$state.user
    }
  },
  methods: {
    logOut(){
      this.userStore.logOut();
    },

  },
})
</script>

<style scoped>

:root {
  --left: 370px;
}

.viewOverflow {
  padding-left: 370px;
}
.wrapper { padding-inline: 3em; }
</style>