<template>
    <header class="header center">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo" class="logo__img">
            <a href="index.html" class="logo__text">Interno</a>
        </div>
        <div class="menu">
            <a href="index.html" class="menu__link">Home</a>
            <a href="#" class="menu__link">Project</a>
            <a href="pages/blog.html" class="menu__link">Blog</a>
        </div>
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
