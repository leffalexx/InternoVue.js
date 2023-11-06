<template>
    <section class="project center">
        <p class="project__title">
            Follow Our Projects
        </p>
        <p class="project__text">
            It is a long established fact that a reader will be distracted by the of readable content of page
            lookings
            at its layouts points.
        </p>
        <div class="project__items">
            <div class="project__item">
                <img src="../assets/KitchanImage_1.jpg" alt="photo" class="project__item_img">
                <div class="project__item_content">
                    <div class="project__item_content-text">
                        <p class="project__item_content-title">Modern Kitchan</p>
                        <p class="project__item_content-subtitle">
                            <span>Decor</span>
                            /
                            <span>Artchitecture</span>
                        </p>
                    </div>
                    <img src="../assets/Elem.svg" alt="photo" class="project__item_elem">
                </div>
            </div>
            <div class="project__item">
                <img src="../assets/KitchanImage_2.jpg" alt="photo" class="project__item_img">
                <div class="project__item_content">
                    <div class="project__item_content-text">
                        <p class="project__item_content-title">Modern Kitchan</p>
                        <p class="project__item_content-subtitle">
                            <span>Decor</span>
                            /
                            <span>Artchitecture</span>
                        </p>
                    </div>
                    <img src="../assets/Elem.svg" alt="photo" class="project__item_elem">
                </div>
            </div>
            <div class="project__item">
                <img src="../assets/KitchanImage_3.jpg" alt="photo" class="project__item_img">
                <div class="project__item_content">
                    <div class="project__item_content-text">
                        <p class="project__item_content-title">Modern Kitchan</p>
                        <p class="project__item_content-subtitle">
                            <span>Decor</span>
                            /
                            <span>Artchitecture</span>
                        </p>
                    </div>
                    <img src="../assets/Elem.svg" alt="photo" class="project__item_elem">
                </div>
            </div>
            <div class="project__item">
                <img src="../assets/KitchanImage_4.jpg" alt="photo" class="project__item_img">
                <div class="project__item_content">
                    <div class="project__item_content-text">
                        <p class="project__item_content-title">Modern Kitchan</p>
                        <p class="project__item_content-subtitle">
                            <span>Decor</span>
                            /
                            <span>Artchitecture</span>
                        </p>
                    </div>
                    <img src="../assets/Elem.svg" alt="photo" class="project__item_elem">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'VueProjectHomepageProject',
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
.project {
    margin-top: 96px;

    &__title {
        color: #292F36;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
    }

    &__text {
        margin-top: 8px;
        margin-bottom: 93px;
        width: 737px;
        margin-left: auto;
        margin-right: auto;
        color: #4D5053;
        text-align: center;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;

    }

    &__items {
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 104px;
        row-gap: 56px;
        margin-bottom: 96px;
    }

    &__item {
        display: grid;
        gap: 24px;

        &_content {
            display: flex;
            gap: 260px;

            &-title {
                color: #292F36;
                font-family: DM Serif Display;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                /* 31.25px */
                letter-spacing: 0.5px;
            }

            &-subtitle {
                width: 217px;
                height: 27px;
                color: #4D5053;
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                /* 33px */
                letter-spacing: 0.22px;
            }
        }
    }
}
</style>
