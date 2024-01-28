<template>
    <Page
        :title="title"
        :image="publicImage(image)"
        :actions="actions"
        :back="{name: 'home'}"
        scrollable
    >
        <ListGroup :items="items"/>
    </Page>

</template>

<script>
    import ListItem from "../../layouts/list/ListItem";
    import Content from "../../layouts/page/ContentPage";
    import ListGroup from "../../layouts/list/ListGroup";
    import Page from "../../layouts/page/Page";
    import config from "../../../config";

    export default {
		name: "Posts",
        components: {Page, ListGroup, ListItem, Content},
        data() {
		    return {
		        title: config.post[this.$route.params.type].title,
                image: config.post[this.$route.params.type].image,
                type: this.$route.params.type,
            }
        },
        computed: {
		    items() {
		        return this.posts?.filter(p => p.type === this.type)
                    .sort((a, b) => (a.created_at < b.created_at) ? 1 : -1)
                    .map(post => ({
                        id: post.id,
                        title: post.title,
                        src: post.image,
                        description: post.description,
                        createdAt: post.created_at,
                        to: { name: 'post', params: { id: post.id, type: this.type }},
                    })) || [];
            },
            actions() {
		        if(this.auth) {
		            return [
                        {
                            text: 'New',
                            to: { name: 'post-create', params: {type: this.type}},
                        },
                    ]
                }
		        return [];
            },
		    posts() {
		        return this.$store.state.posts;
            },
            auth() {
		        return this.$store.getters.auth;
            },
            loaded() {
		        return !!this.posts;
            }
        },
    }
</script>

<style scoped>

</style>
