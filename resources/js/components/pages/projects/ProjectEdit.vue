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
    export default {
		name: "ProjectEdit",
        components: {Page, ProjectForm},
        computed: {
            project() {
                return this.$store.state.projects?.find(p => p.id == this.$route.params.id);
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
                    this.$router.push({ name: 'project', params: {id: this.project.id}});
                })
            },
            onCancel() {
                this.$router.push({ name: 'project', params: {id: this.project.id}});
            }
        }
    }
</script>

<style scoped>

</style>
