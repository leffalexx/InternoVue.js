<template>
  <Header />
  <HomepageBanner />
  <HomepageProject />
  <HomepageCounter />
  <HomepageBlog />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomepageBanner from './components/HomepageBanner.vue'
import HomepageProject from './components/HomepageProject.vue'
import HomepageCounter from './components/HomepageCounter.vue'
import HomepageBlog from './components/HomepageBlog.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    HomepageBanner,
    HomepageProject,
    HomepageCounter,
    HomepageBlog
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
