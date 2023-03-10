<template>
  <div class="flex items-start">
    <aside class="w-1/6 h-screen bg-slate-50 border-r border-slate-100 pt-3 pb-10 px-10">
      <div class="flex justify-between flex-col h-full">
        <nav>
          <figure class="flex items-center py-2 mb-20">
            <img class="w-10 mr-2" src="/vite.svg" alt="">
            <p class="text-2xl font-bold text-slate-700 my-4">VisualSolar</p>
          </figure>
          <div class="flex flex-col gap-4">
            <a href="#" class="hover:bg-slate-100 px-2 py-2 rounded-lg">Dashboard</a>
            <a href="#" class="hover:bg-slate-100 px-2 py-2 rounded-lg">Users</a>
            <a href="#" class="hover:bg-slate-100 px-2 py-2 rounded-lg">Accounts</a>
          </div>
        </nav>
        <div class="flex flex-col">
          <div class="border-b border-slate-200 my-3"></div>
          <a href="#" class="hover:bg-slate-100 px-2 py-2 rounded-lg text-sm" @click="logOut">
            <figure class="flex items-center">
              <img class="mr-2" src="/icons/logout.svg">
              <p>Logout</p>
            </figure>
          </a>
        </div>
      </div>
    </aside>
    <section class="pl-10 pr-8 py-6 w-full">
      <header class="flex justify-between items-center">
        <p class="text-slate-600 text-2xl font-bold">Latest Tasks</p>
        <figure>
          <img v-tooltip.bottom="userLogged.displayName" class="w-12 h-12 rounded-full" :src="userLogged.photoURL || defaultImg" alt="profile image">
        </figure>
      </header>
    </section>
  </div>
</template>
<script>
import { getAuth, signOut } from 'firebase/auth'
import router from '../router/index.js'

const auth = getAuth()
export default {
  data () {
    return {
      defaultImg: '../defaultimage.svg',
      userInfo:{}
    }
  },
  methods: {
    logOut(){
      signOut(auth).then(() => {
        router.push({name:'login'})
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  props: {
    userLogged: {}
  },


}
</script>

<style scoped>
.wrapper {
  padding-inline: 3em;
}
</style>