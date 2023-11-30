<template>
    <header class="header center">
        <nav class="logo">
            <img src="../assets/logo.png" alt="logo" class="logo__img">
            <router-link to="/" class="logo__text">Interno</router-link>
        </nav>
        <nav class="menu">
            <router-link to="/" class="menu__home">Home</router-link>
            <router-link to="/project" class="menu__project">Project</router-link>
            <router-link to="/blog" class="menu__blog">Blog</router-link>
        </nav>
    </header>
</template>
<script>
export default {
  name: 'VueProjectHeader',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 53px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    &__text {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__img {
        width: 34px;
    }
}

.menu {
    display: flex;
    justify-content: space-between;
    width: 243px;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;

    &__link {
        color: #292F36;
    }
}
</style>
