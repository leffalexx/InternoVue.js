<template>
<div>
    <HomepageBanner />
    <HomepageProject />
    <HomepageCounter />
    <HomepageBlog />
    </div>
</template>

<script>
import HomepageBanner from './HomepageBanner.vue'
import HomepageProject from './HomepageProject.vue'
import HomepageCounter from './HomepageCounter.vue'
import HomepageBlog from './HomepageBlog.vue'
export default {
  name: 'VueProjectHomepage',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
  components: {
    HomepageBanner,
    HomepageProject,
    HomepageCounter,
    HomepageBlog
  }
}
</script>

<style lang="scss" scoped></style>
