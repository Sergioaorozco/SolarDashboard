<template>
  <div>
    <figure>
      <img src="" alt="">
    </figure>
    <keep-alive>
      <div>
        <h1>Welcome {{userLogged.displayName}}</h1>
        <img class="w-12 h-12 rounded-full" :src="userLogged.photoURL" alt="">
      </div>
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