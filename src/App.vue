<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  data() {
    return {
      userInfo : null
    }
  },
  methods: {
    userData(result){
      this.userInfo = result.user
    }
  }
}
</script>

<template>
  <div>
    <router-view :user-logged="userInfo" @user-data="userData"/>
  </div>
</template>

<style scoped>
</style>
