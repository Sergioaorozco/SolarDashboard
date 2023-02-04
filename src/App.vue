<script>

export default {
  data() {
    return {
      userInfo : {}
    }
  },
  methods: {
    userInformation(value) {
      this.userInfo = value.target.user;
      console.log(value);
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
