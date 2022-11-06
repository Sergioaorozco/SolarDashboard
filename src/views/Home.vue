<template>
  <div v-for="data in authData" :key="data.accessToken" >
    <figure>
      <img src="data.displayName" alt="">
    </figure>
    <h1>This is the home</h1>
  </div>
</template>
<script>
import authData from './Login.vue'
export default {
  data () {
    return {
      UserCredentials: authData
    }
  }

}
</script>