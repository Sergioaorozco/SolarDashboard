<template>
  <div>
    <figure>
      <img src="" alt="">
    </figure>
    <h1>Welcomee {{userLogged.displayName}}</h1>
    <img class="w-12 h-12 rounded-full" :src="userLogged.photoURL" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo:this.$route.params.userInfo
    }
  },
  props: {
    userLogged: {}
  },


}
</script>