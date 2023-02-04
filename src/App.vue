<script>

export default {
  data() {
    return {
      userInfo: {} 
    }
  },
  methods: {
    userInformation(value) {
      this.userInfo = value.user;
      console.log(value);
      console.log(value.user);
    }
  }
}
</script>

<template>
  <div>
    <router-view @userData="userInformation" :user-logged="userInfo"/>
  </div>
</template>

<style scoped>
</style>
