<script>

export default {
  data() {
    return {
      userInfo: {} 
    }
  },
  methods: {
    userInformation(value) {
      this.userInfo = value;
      console.log(value[1]);
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
