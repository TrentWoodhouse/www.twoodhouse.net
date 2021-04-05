<template>
    <Page
        :title="'Delete ' + title"
        :image="image"
        :back="back"
    >
        <div v-if="loaded">
            <p>Are you sure you want to delete the post "{{ postTitle }}"?</p>
            <DeleteForm @onSubmit="onSubmit" @onCancel="onCancel"/>
        </div>
    </Page>
</template>

<script>
    import Page from "../../layouts/page/Page";
    import DeleteForm from "../../forms/DeleteForm";
    import config from "../../../config";
    export default {
		name: "PostDelete",
        components: {DeleteForm, Page},
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
            auth() {
                return this.$store.getters.auth;
            },
            image() {
                return this.post?.image;
            },
            postTitle() {
                return this.post?.title;
            },
            back() {
                return this.loaded ? { name: 'post', params: {id: this.post.id, type: this.type}} : {name:'posts', params: {type: this.type}};
            },
            loaded() {
                return !!this.post;
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('deletePost', this.post.id)
                .then(response => {
                    this.$router.push({ name: 'posts', params: {type: this.type}});
                });
            },
            onCancel() {
                this.$router.push({ name: 'post', params: {id: this.post.id, type: this.type}});
            }
        }
    }
</script>

<style scoped>

</style>
