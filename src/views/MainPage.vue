<template>
    <div>
        <HomepageBanner />
        <HomepageProject />
        <HomepageCounter />
        <HomepageBlog />
        </div>
    </template>
    
    <script>
    import HomepageBanner from '@/components/HomepageBanner.vue'
    import HomepageProject from '@/components/HomepageProject.vue'
    import HomepageCounter from '@/components/HomepageCounter.vue'
    import HomepageBlog from '@/components/HomepageBlog.vue'
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
    