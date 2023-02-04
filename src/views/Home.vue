<template>
  <div>
    <keep-alive>
      <section class="wrapper">
        <div class="flex flex-col lg:justify-between lg:flex-row">
          <h1 class=" font-bold text-lg">Welcome</h1>
          <h1>{{userLogged.displayName}}</h1>
          <img class="w-12 h-12 rounded-full" :src="userLogged.photoURL" alt="profile image">
        </div>
      </section>
    </keep-alive>
    <button class="text-2xl" @click="logOut" >Log Out</button>
  </div>
</template>
<script>
import { getAuth, signOut } from 'firebase/auth'
import router from '../router/index.js'

const auth = getAuth()
export default {
  data () {
    return {
      // userInfo:this.$route.params.userInfo
      userInfo:{}
    }
  },
  methods: {
    logOut(){
      signOut(auth).then(() => {
        router.push({name:'login'})
        console.log('You close this session')
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
  max-inline-size: 1125px;
}
</style>