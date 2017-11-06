<template>
  <div class="hello">
    <tophead></tophead>
    <carousel></carousel>
    <features></features>
  </div>
</template>

<script>
import carousel from './second/carousel'
import tophead from './second/heade'
import features from './second/features'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    carousel, tophead, features
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
