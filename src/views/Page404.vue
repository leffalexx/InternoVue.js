<template>
    <main class="main center">
        <section class="banner-error">
            <Banner v-for="banner in errorBanner" :banner="banner" :buttonText="errorButtonText" :link="link" />
        </section>
    </main>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
    name: "Page404",
    components: {
        Banner
    },
    data () {
        return {
            link: "/",
            errorButtonText: "Go back",
            errorBanner: [
                {
                    id: "errorbanner",
                    src: require("../assets/404_page_cover.jpg"),
                    alt: "error",
                    heading: "404",
                    paragraph: "Page does not exist",
                },
            ],
        };
    },
};
</script>
<style scoped lang="scss">
.banner-error {
    margin: 0 auto;
    padding-top: 45px;
    padding-bottom: 100px;
}

.banner-error :deep(.banner-box) {
    display: flex;
    flex-direction: row-reverse;
    gap: 81px;
}

.banner-error :deep(.banner__text) {
    // padding-top: 272px;
}

.banner-error :deep(.banner__image) {
    border-bottom-left-radius: 37%;
}

</style>