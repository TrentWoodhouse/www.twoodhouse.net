<template>
    <div v-if="auth" class="top-right p-3 text-right">
        <div>{{ auth.user.full_name }}</div>
        <Link @click.native="logout">Logout</Link>
    </div>
</template>

<script>
	import Link from "./Link";
    export default {
		name: "Auth",
        components: {Link},
        computed: {
		    auth() {
		        return this.$store.getters.auth;
            }
        },
        methods: {
		    logout() {
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style scoped>
    .top-right {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 20;
    }
</style>
