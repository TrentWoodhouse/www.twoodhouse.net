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
                    <div><small>Started {{ format(project.created_at) }}</small></div>
                    <div><small>Last updated {{ format(project.updated_at) }}</small></div>
                </div>
                <div v-html="project.content"></div>
            </div>
        </Content>
    </Page>
</template>

<script>
    import moment from 'moment';
	import Content from "../../layouts/Content";
    import Page from "../../layouts/Page";
    import {projectMixin} from '../../../mixins';
    export default {
		name: "Project",
        mixins: [projectMixin],
        components: {Page, Content},
        computed: {
		    project() {
                return this.$store.getters.projects?.find(p => p.id == this.$route.params.id);
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
                            to: { name: 'home' },
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
