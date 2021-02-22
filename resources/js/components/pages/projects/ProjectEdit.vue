<template>
    <Page
        title="Edit Project"
        :image="image"
        :back="back"
        scrollable
    >
        <ProjectForm v-if="loaded" :project="project" @onSubmit="onSubmit" @onCancel="onCancel"/>
    </Page>
</template>

<script>
	import ProjectForm from "../../forms/ProjectForm";
    import Page from "../../layouts/Page";
    import {projectMixin} from '../../../mixins';
    export default {
		name: "ProjectEdit",
        mixins: [projectMixin],
        components: {Page, ProjectForm},
        computed: {
            project() {
                return this.$store.getters.projects?.find(p => p.id == this.$route.params.id);
            },
            image() {
                return this.project?.image;
            },
            back() {
                return this.loaded ? {name: 'project', params: {id: this.project.id}} : {name: 'projects'};
            },
            loaded() {
                return !!this.project;
            }
        },
        methods: {
		    onSubmit(data) {
		        this.$store.dispatch('updateProject', {id: this.project.id, data})
                .then(response => {
                    console.log(response);
                    this.$router.push({ name: 'projects' });
                })
            },
            onCancel() {
                this.$router.push({ name: 'projects' });
            }
        }
    }
</script>

<style scoped>

</style>
