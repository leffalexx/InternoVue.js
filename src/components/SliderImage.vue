<template>
    <div class="slider-item">
        <img :src="image.src" class="slider-image" />
        <img class="slider-image__zoom" src="../assets/Zoom.png" alt="image" />
    </div>
</template>

<script>
export default {
    name: "SliderImage",
    props: {
        image: Object,
    },
    components: {},
    data() {
        return {};
    },
};
</script>

<style scoped lang="scss">
.slider {
    &-image {
        border-radius: 70px;
        transition: 0.5s;

        &:hover {
            transform: scale(2.2);
        }
    }

    &-item {
        position: relative;
    }

    &-image__zoom {
        position: absolute;
        cursor: pointer;
        transition: 1s;
    }
}</style>