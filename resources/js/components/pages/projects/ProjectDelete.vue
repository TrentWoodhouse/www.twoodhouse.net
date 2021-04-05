<template>
    <Page
        title="Delete Project"
        :image="image"
        :back="back"
    >
        <div v-if="loaded">
            <p>Are you sure you want to delete the project "{{ title }}"?</p>
            <DeleteForm @onSubmit="onSubmit" @onCancel="onCancel"/>
        </div>
    </Page>
</template>

<script>
    import Page from "../../layouts/page/Page";
    import DeleteForm from "../../forms/DeleteForm";
    export default {
		name: "ProjectDelete",
        components: {DeleteForm, Page},
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
            title() {
                return this.project?.title;
            },
            back() {
                return this.loaded ? { name: 'project', params: {id: this.project.id}} : {name:'projects'};
            },
            loaded() {
                return !!this.project;
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('deleteProject', this.project.id)
                .then(response => {
                    this.$router.push({ name: 'projects'})
                });
            },
            onCancel() {
                this.$router.push({ name: 'project', params: {id: this.project.id}});
            }
        }
    }
</script>

<style scoped>

</style>
