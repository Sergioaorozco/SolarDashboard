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
