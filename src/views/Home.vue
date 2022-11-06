<template>
  <div>
    <figure>
      <img src="" alt="">
    </figure>
    <h1>Welcome</h1>
  </div>
</template>
<script>
import data from '../views/Home.vue'
export default {
  data () {
    return {
      UserInfo: data
    }
  },
  props: {
    // userInfo: Object
  },
  methods: {
  }


}
</script>