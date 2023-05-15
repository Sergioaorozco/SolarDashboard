<template>
  <div class="flex items-start">
    <aside class="w-[var(--widthSidebar)] h-screen z-10 bg-slate-50 border-r border-slate-100 pt-3 pb-10 px-4">
      <div class="flex justify-between flex-col h-full">
        <nav>
          <div class="flex flex-col mb-20">
            <figure class="flex items-center py-2">
              <img class="w-10 mr-2" src="/vite.svg" alt="">
              <p class="text-2xl font-bold text-slate-700 my-4">VisualSolar</p>
            </figure>
            <div class="border-b w-full border-slate-100 mt-3"></div>
          </div>
          <div class="flex flex-col gap-4">
            <router-link :to="{name:'dashboard'}" class="hover:bg-slate-100 px-4 py-2 rounded-full">Dashboard</router-link>
            <router-link :to="{name:'users'}" class="hover:bg-slate-100 px-4 py-2 rounded-full">Users</router-link>
            <router-link :to="{name:'accounts'}" class="hover:bg-slate-100 px-4 py-2 rounded-full">Accounts</router-link>
          </div>
        </nav>
        <div class="flex flex-col">
          <div class="border-b border-slate-200 my-3"></div>
          <a href="#" class="hover:bg-red-200 bg-red-100 px-4 py-2 rounded-lg text-sm" @click="logOut">
            <figure class="flex items-center justify-between">
              <p class="text-red-700 font-semibold">Logout</p>
              <img src="/icons/logout.svg">
            </figure>
          </a>
        </div>
      </div>
    </aside>
    <section class="pl-10 pr-8 py-6 w-screen h-screen overflow-auto">
      <div>
        <img v-tooltip.left="userLogged.displayName" class="w-12 h-12 rounded-full fixed right-10 top-4" :src="userLogged.photoURL || defaultImg" alt="profile image">
        <div class="mt-3">
          <router-view name="dashboard"></router-view>
          <router-view name="users"></router-view>
          <router-view name="accounts"></router-view>
        </div>
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
.wrapper { padding-inline: 3em; }
</style>