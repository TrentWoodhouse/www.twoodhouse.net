<template>
    <Page
        title="Projects"
        :image="image"
        :actions="actions"
        :back="{name: 'projects'}"
    >
        <Content>
            <div v-if="loaded">
                <div class="mb-2">
                    <h1>{{ project.title }}</h1>
                    <div><small>Uploaded {{ format(project.created_at) }}</small></div>
                </div>
                <div v-html="project.content"></div>
                <div><small>Last updated {{ format(project.updated_at) }}</small></div>
            </div>
        </Content>
    </Page>
</template>

<script>
    import moment from 'moment';
	import Content from "../../layouts/page/ContentPage";
    import Page from "../../layouts/Page";
    export default {
		name: "Project",
        components: {Page, Content},
        computed: {
		    project() {
                return this.$store.state.projects?.find(p => p.id == this.$route.params.id);
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
        methods: {
		    format(date) {
		        return moment(date).format('LL');
            }
        }
    }
</script>

<style scoped>

</style>
