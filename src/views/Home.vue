<template>
  <div>
    <figure>
      <img src="" alt="">
    </figure>
    <h1>Welcomee {{userLogged.displayName}}</h1>
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