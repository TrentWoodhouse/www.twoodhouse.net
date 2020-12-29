<template>
    <Content :navLinks="auth && navLinks">
        <div class="h-100 overflow-auto">
            <div v-if="loaded">
                <ListItem v-for="project in projects" :key="project.id" :title="project.title" :src="project.image" :description="project.description" :badge="getBadge(project)" :to="{ name: 'project', params: { id: project.id }}"/>
            </div>
        </div>
    </Content>
</template>

<script>
    import moment from 'moment';
    import ListItem from "../../layouts/ListItem";
    import Content from "../../layouts/Content";
    export default {
		name: "Projects",
        components: {ListItem, Content},
        data() {
		    return {
		        loaded: false,
                navLinks: [
                    {
                        text: 'New',
                        to: { name: 'project-create' },
                    },
                ]
            }
        },
        computed: {
		    projects() {
		        return this.$store.getters.projects;
            },
            auth() {
		        return this.$store.getters.auth;
            }
        },
        created() {
		    if(!this.projects) {
		        this.$store.dispatch('getProjects')
                .then(response => {
                    this.loaded = true;
                });
            }
		    else {
		        this.loaded = true;
            }
        },
        methods: {
		    getBadge(project) {
                let createdAt = moment(project.created_at);
                let now = moment();
                if(!now.isAfter(createdAt.add(7, 'days').startOf('day'))) {
                    return {
                        text: 'New',
                        variant: 'danger',
                    }
                }
                return null;
            }
        }
    }
</script>

<style scoped>

</style>
