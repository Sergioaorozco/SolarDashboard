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
      console.log(value[[target]]);
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
