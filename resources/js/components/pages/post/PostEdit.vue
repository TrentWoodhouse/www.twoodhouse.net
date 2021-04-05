<template>
    <Page
        :title="'Edit ' + title"
        :image="image"
        :back="back"
        scrollable
    >
        <PostForm v-if="loaded" :post="post" @onSubmit="onSubmit" @onCancel="onCancel"/>
    </Page>
</template>

<script>
	import PostForm from "../../forms/PostForm";
    import Page from "../../layouts/page/Page";
    import config from "../../../config";
    export default {
		name: "PostEdit",
        components: {Page, PostForm},
        data() {
            return {
                title: config.post[this.$route.params.type].titleSingular,
                type: this.$route.params.type,
            }
        },
        computed: {
            post() {
                return this.$store.state.posts?.find(p => p.id === parseInt(this.$route.params.id) && p.type === this.type);
            },
            image() {
                return this.post?.image;
            },
            back() {
                return this.loaded ? {name: 'post', params: {id: this.post.id, type: this.type}} : {name: 'posts', params: {type: this.type}};
            },
            loaded() {
                return !!this.post;
            }
        },
        methods: {
		    onSubmit(data) {
		        this.$store.dispatch('updatePost', {id: this.post.id, data})
                .then(response => {
                    this.$router.push({ name: 'post', params: {id: this.post.id, type: this.type}});
                })
            },
            onCancel() {
                this.$router.push({ name: 'post', params: {id: this.post.id, type: this.type}});
            }
        }
    }
</script>

<style scoped>

</style>
