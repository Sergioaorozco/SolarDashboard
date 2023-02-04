<script>

export default {
  data() {
    return {
      userInfo : null
    }
  },
  methods: {
    userData(result){
      this.userInfo = result.user
    },
    userInformation(value) {
      this.userInfo = value;
      console.log(value, this.userInfo);
    }
  }
}
</script>

<template>
  <div>
    <router-view @userData="userInformation" :user-logged="userInfo" @user-data="userData"/>
  </div>
</template>

<style scoped>
</style>
