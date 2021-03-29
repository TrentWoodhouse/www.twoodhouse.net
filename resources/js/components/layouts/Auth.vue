<template>
    <small v-if="auth" class="ml-2 mr-3">
        <Link @click.native="logout">Logout</Link>
    </small>
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
