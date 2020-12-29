<template>
    <div>
        <ContentPage :navLinks="auth && navLinks">
            <div v-if="loaded">
                <div class="mb-2">
                    <h1>{{ project.title }}</h1>
                    <div>
                        <small>Last updated {{ format(project.updated_at) }}</small>
                    </div>
                </div>
                {{ project.content }}
            </div>
            <div v-else>

            </div>
        </ContentPage>
    </div>

</template>

<script>
    import moment from 'moment';
	import ContentPage from "../../layouts/ContentPage";
    export default {
		name: "Project",
        components: {ContentPage},
        data() {
		    return {
		        loaded: false,
                navLinks: [
                    {
                        text: 'Edit',
                        to: { name: 'home' },
                    },
                    {
                        text: 'Delete',
                        to: { name: 'home' },
                    }
                ]
            }
        },
        computed: {
		    project() {
		        return this.$store.getters.projects?.find(p => p.id == this.$route.params.id);
            },
            auth() {
                return this.$store.getters.auth;
            }
        },
        created() {
            if(!this.$store.getters.projects) {
                this.$store.dispatch('getProjects')
                    .then(response => {
                        this.$store.commit('setImage', this.project.image);
                        this.loaded = true;
                    });
            }
            else {
                this.loaded = true;
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
