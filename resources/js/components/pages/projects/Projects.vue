<template>
    <Page
        title="Projects"
        :image="publicImage('projects.png')"
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
    export default {
		name: "Projects",
        components: {Page, ListGroup, ListItem, Content},
        computed: {
		    items() {
		        return this.projects?.map(project => ({
                    id: project.id,
                    title: project.title,
                    src: project.image,
                    description: project.description,
                    createdAt: project.created_at,
                    to: { name: 'project', params: { id: project.id }},
                })) || [];
            },
            actions() {
		        if(this.auth) {
		            return [
                        {
                            text: 'New',
                            to: { name: 'project-create' },
                        },
                    ]
                }
		        return [];
            },
		    projects() {
		        return this.$store.state.projects;
            },
            auth() {
		        return this.$store.getters.auth;
            },
            loaded() {
		        return !!this.projects;
            }
        },
    }
</script>

<style scoped>

</style>
