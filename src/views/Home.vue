<template>
  <div>
    <figure>
      <img src="" alt="">
    </figure>
    <h1>Welcomee {{userLogged.displayName}}</h1>
    <img class="w-12 h-12 rounded-full" :src="userLogged.photoURL" alt="">

    <a @click="logOut" href="">Log Out</a>
  </div>
</template>
<script>
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth()
export default {
  data () {
    return {
      userInfo:this.$route.params.userInfo
    }
  },
  methods: {
    logOut(){
      signOut(auth).then(() => {
        console.log('You close this session')
        route.push('/')
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