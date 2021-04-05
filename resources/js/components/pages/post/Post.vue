<template>
    <Page
        :title="title"
        :image="image"
        :actions="actions"
        :back="{name: 'posts', params: {type}}"
    >
        <ContentPage>
            <b-skeleton-wrapper :loading="!loaded">
                <template #loading>
                    <div class="mb-2">
                        <b-skeleton width="50%" height="52px" class="mb-2"/>
                        <b-skeleton width="20%" height="15px" class="mb-2"/>
                    </div>
                    <b-skeleton width="85%" class="mb-2"/>
                    <b-skeleton width="55%" class="mb-2"/>
                    <b-skeleton width="70%" class="mb-2"/>
                </template>
                <template #default>
                    <div class="mb-2">
                        <h1>{{ post.title }}</h1>
                        <div><small>Uploaded {{ format(post.created_at) }}</small></div>
                    </div>
                    <div v-html="post.content"></div>
                    <div><small>Last updated {{ format(post.updated_at) }}</small></div>
                </template>
            </b-skeleton-wrapper>
        </ContentPage>
    </Page>
</template>

<script>
    import moment from 'moment';
	import ContentPage from "../../layouts/page/ContentPage";
    import Page from "../../layouts/page/Page";
    import config from "../../../config";
    export default {
		name: "Post",
        components: {Page, ContentPage},
        data() {
            return {
                title: config.post[this.$route.params.type].title,
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
            actions() {
		        if(this.auth) {
		            return [
                        {
                            text: 'Edit',
                            to: { name: 'post-edit', params: {type: this.type} },
                        },
                        {
                            text: 'Delete',
                            to: { name: 'post-delete', params: {type: this.type} },
                        }
                    ]
                }
		        return [];
            },
            loaded() {
		        return !!this.post;
            }
        },
        watch: {
		    '$store.getters.loaded'(val) {
		        if(val) {
		            if(!this.loaded) {
		                this.$router.push({name: 'posts', params: {type: this.type}});
                    }
                }
            }
        },
        methods: {
		    format(date) {
		        return moment(date).format('LL');
            }
        }
    }
</script>

<style scoped>

</style>
