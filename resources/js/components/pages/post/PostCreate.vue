<template>
    <Page
        :title="'Create ' + title"
        :image="publicImage(image)"
        :back="{name: 'posts', params: {type}}"
        scrollable
    >
        <PostForm @onSubmit="onSubmit" @onCancel="onCancel"/>
    </Page>
</template>

<script>
	import PostForm from "../../forms/PostForm";
    import Page from "../../layouts/page/Page";
    import config from "../../../config";
    export default {
		name: "PostCreate",
        components: {Page, PostForm},
        data() {
            return {
                title: config.post[this.$route.params.type].titleSingular,
                image: config.post[this.$route.params.type].image,
                type: this.$route.params.type,
            }
        },
        methods: {
		    onSubmit(data) {
		        this.$store.dispatch('createPost', data)
                .then(response => {
                    this.$router.push({ name: 'posts', params: {type: this.type}});
                })
            },
            onCancel() {
                this.$router.push({ name: 'posts', params: {type: this.type}});
            }
        }
    }
</script>

<style scoped>

</style>
