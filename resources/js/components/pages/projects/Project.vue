<template>
    <Page
        title="Projects"
        :image="image"
        :actions="actions"
        :back="{name: 'projects'}"
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
                        <h1>{{ project.title }}</h1>
                        <div><small>Uploaded {{ format(project.created_at) }}</small></div>
                    </div>
                    <div v-html="project.content"></div>
                    <div><small>Last updated {{ format(project.updated_at) }}</small></div>
                </template>
            </b-skeleton-wrapper>
        </ContentPage>
    </Page>
</template>

<script>
    import moment from 'moment';
	import ContentPage from "../../layouts/page/ContentPage";
    import Page from "../../layouts/page/Page";
    export default {
		name: "Project",
        components: {Page, ContentPage},
        computed: {
		    project() {
                return this.$store.state.projects?.find(p => p.id === parseInt(this.$route.params.id));
            },
            auth() {
                return this.$store.getters.auth;
            },
            image() {
		        return this.project?.image;
            },
            actions() {
		        if(this.auth) {
		            return [
                        {
                            text: 'Edit',
                            to: { name: 'project-edit' },
                        },
                        {
                            text: 'Delete',
                            to: { name: 'project-delete' },
                        }
                    ]
                }
		        return [];
            },
            loaded() {
		        return !!this.project;
            }
        },
        watch: {
		    '$store.getters.loaded'(val) {
		        if(val) {
		            if(!this.loaded) {
		                this.$router.push({name: 'projects'});
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
