<template>
    <div class="p-3 h-100 overflow-auto">
        <ListItem v-for="project in projects" :title="project.title" :src="project.image" :description="project.description" :badge="getBadge(project)" :to="{ name: 'home' }"/>
    </div>
</template>

<script>
    import ListItem from "../../layouts/ListItem";
    export default {
		name: "Projects",
        components: {ListItem},
        computed: {
		    projects() {
		        return this.$store.getters.projects;
            },
        },
        methods: {
		    getBadge(project) {
                return null;
            }
        }
    }
</script>

<style scoped>

</style>
