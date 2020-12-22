<template>
    <div>
        <div v-for="item of navItems" class="no-select">
            <Link :to="item.route" dark>
                <h1 class="d-inline">
                    {{ item.name }}
                    <h5 class="d-inline align-middle">
                        <b-badge pill v-if="item.badge" :variant="item.badge.variant">
                            {{ item.badge.text }}
                        </b-badge>
                    </h5>
                </h1>
            </Link>
        </div>
    </div>
</template>

<script>
	import Link from "./Link";
    export default {
		name: "Nav",
        components: {Link},
        props: {
		    navItems: Array,
        }
	}
</script>

<style scoped>

</style>
