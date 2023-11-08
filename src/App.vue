<template>
<Header />
<Homepage />
<!--  <BlogDetails /> -->
<!--  <BlogMain /> -->
<Footer />
</template>

<script>
import Header from './components/Header.vue'
import Homepage from './components/Homepage.vue'
// import BlogDetails from './components/BlogDetails.vue'
// import BlogMain from './components/BlogMain.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Homepage,
    // BlogDetails,
    // BlogMain,
    Footer

  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: 'DM Serif Display', serif;
  font-family: 'Jost', sans-serif;
  background-color: #fff;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>
