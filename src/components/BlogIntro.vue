<template>
    <section class="intro">
        <div class="intro__title">
            <h2 class="intro__heading">Articles & News</h2>
            <div class="intro__subhead-box">
                <a href="../index.html" class="intro__subhead-box-item">Home</a>
                <a href="blog.html" class="intro__subhead-box-item">Blog</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'VueProjectBlogIntro',
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
.intro {
    margin-top: 45px;
    background-image: url("../assets/BlogMainImage.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;

    &__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 78px;
        width: 503px;
        margin-top: 179px;
        border-radius: 37px 37px 0px 0px;
        background-color: #fff;
    }

    &__heading {
        color: #292f36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__subhead-box {
        display: inline-flex;
        flex-direction: row;

        &-item {
            color: #4d5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
            text-align: center;

            &:first-child::after {
                content: "/\00a0";
                padding-left: 5px;
            }
        }
    }
}
</style>
