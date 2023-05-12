<script>
import router from './router/index.js'


export default {
  data() {
    return {
      userInfo: null
    }
  },
  methods: {
    userInformation(value) {
      this.userInfo = value.user;
      console.log(value.user);
    }
  }
}
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
</style>
