<template>
    <main class="project-details center">
        <section class="project-details__intro">
            <img src="../assets/ProjectDetailsMainImage.jpg" alt="photo">
        </section>
        <section class="project-details__content center">
            <div class="project-details__info">
                <div class="project-details__info_heading">
                    {{ heading }}
                </div>
                <div class="project-details__info_text">
                    {{ text1 }}
                </div>
                <br>
                <div class="project-details__info_text">
                    {{ text2 }}
                </div>
            </div>
        </section>
        <section class="slider center">
            <div class="slider__content">
                <div class="slider-wrapper">
                    <SliderImage :image="image" v-for="image in sliderImages" :id="image.id" :key="image.id"
                        :src="image.src" alt="bedroom" />
                    <SliderImage :image="image" v-for="image in sliderImages" :id="image.id" :key="image.id"
                        :src="image.src" alt="bedroom" />
                </div>
            </div>
            <div @click="changeImage" class="slider-pagination center">
                <SliderPagination class="slider-pagination__button_active" />
                <SliderPagination />
                <SliderPagination />
            </div>
        </section>

    </main>
</template>

<script>
import SliderImage from './SliderImage.vue';
import SliderPagination from './SliderPagination.vue'
import { mapState } from 'vuex'


export default {
    name: 'ProjectDetails',
    components: {
        SliderImage,
        SliderPagination,
    },

    data() {
        return {

            sliderImages: [
                { id: "slider-image_1", src: require("../assets/LampImage_1.jpg") },
                { id: "slider-image_2", src: require("../assets/LampImage_2.jpg") },
                { id: "slider-image_3", src: require("../assets/LampImage_3.jpg") },
            ],
            sliderImages: [
                { id: 1, src: require("../assets/LampImage_1.jpg") },
                { id: 2, src: require("../assets/LampImage_2.jpg") },
                { id: 3, src: require("../assets/LampImage_3.jpg") },
            ],
            sliderCounter: 0,
        };
    },
    methods: {
        changeImage() {
            let sliderCounter = 0;

            const sliderContentWidth = document.querySelector(".slider-wrapper");
            const sliderPagination = document.querySelectorAll(
                ".slider-pagination__button-wrapper"
            );
            function slideChange() {
                sliderContentWidth.style.transform = `translateX(${-sliderCounter * 1226}px)`;
            }

            function changePaginationColor(position) {
                if (document.querySelector(".slider-pagination__button_active") !== null) {
                    document
                        .querySelector(".slider-pagination__button_active")
                        .classList.remove("slider-pagination__button_active");
                }
                sliderPagination[position].firstElementChild.classList.add(
                    "slider-pagination__button_active"
                );
            }
            sliderPagination.forEach((circle, position) => {
                circle.addEventListener("click", () => {
                    sliderCounter = position;
                    slideChange();
                    changePaginationColor(sliderCounter);
                });
            });
        },
    },
    computed: {
        ...mapState(["heading", "text1", "text2"]),
    },
}
</script>

<style scoped lang="scss">
.project-details {

    &__content {
        display: grid;
        justify-content: center;
    }

    &__info {
        padding-top: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 658px;

        &__heading {
            color: #292f36;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }

        &__text {
            color: #4d5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.18px;
            margin-bottom: 36px;
        }
    }
}

.slider {
    &__content {
        max-width: 1201px;
        overflow: hidden;
    }

    &-item {
        margin-top: 61px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-pagination {
        display: flex;
        flex-direction: row;
        gap: 15px;
        justify-content: center;
        padding-top: 15px;
        padding-bottom: 170px;
        cursor: pointer;
    }
}

.slider-image__zoom[data-v-81200830]:hover [data-v-388cd5fa] {
    transform: scale(1.1);
}
</style>