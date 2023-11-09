<template>
    <div>
        <h2 class="intro__heading">{{ text.title }}</h2>
        <div class="intro__subhead">
            <a href="../index.html" class="intro__subhead_item">{{ text.subheadLeft }}</a>
            <span class="intro__subhead_line">{{ text.subheadLine }}</span>
            <a href="blog.html" class="intro__subhead_item">{{ text.subheadRight }}</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IntroText',
  props: {
    text: Object
  }
}
</script>

<style lang="scss" scoped>
.intro__heading {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.intro__subhead_item {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.intro__subhead_line {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}
</style>
