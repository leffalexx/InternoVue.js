<template>
    <BlogIntro />
    <BlogPost />
    <Blog />
</template>

<script>
import BlogIntro from './BlogIntro.vue';
import BlogPost from './BlogPost.vue';
import Blog from './Blog.vue';
export default {
    name: 'VueProjectBlogMain',
    components: {
        BlogIntro,
        BlogPost,
        Blog
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>