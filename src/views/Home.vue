<template>
  <div>
    <keep-alive>
      <section class="bg-white border-b border-slate-200">
        <header class="wrapper m-auto py-2">
          <div class="flex justify-between flex-row">
            <div class="flex gap-2 items-center">
              <img class="w-12 h-12 rounded-full" :src="userLogged.photoURL || defaultImg" alt="profile image">
              <div class="leading-none">
                <h1 class="font-bold text-lg">Welcome</h1>
                <h1>{{userLogged.displayName}}</h1>
              </div>
            </div>
            <button class="text-lg hover:underline" @click="logOut">Log Out</button>
          </div>
        </header>
      </section>
    </keep-alive>
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
  max-inline-size: 90%;
}
</style>