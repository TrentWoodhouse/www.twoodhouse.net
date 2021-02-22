<template>
    <Page
        title="Create Project"
        :image="getImage('projects.png')"
        :back="{name: 'projects'}"
        scrollable
    >
        <ProjectForm @onSubmit="onSubmit" @onCancel="onCancel"/>
    </Page>
</template>

<script>
	import ProjectForm from "../../forms/ProjectForm";
    import Page from "../../layouts/Page";
    export default {
		name: "ProjectCreate",
        components: {Page, ProjectForm},
        methods: {
		    onSubmit(data) {
		        this.$store.dispatch('createProject', data)
                .then(response => {
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
