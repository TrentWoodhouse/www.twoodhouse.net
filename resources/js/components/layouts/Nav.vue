<template>
    <div class="h-100 scrollable">
        <div v-for="item of navItems" class="no-select mb-3">
            <Link :to="item.route" :disabled="item.disabled">
                <h1 class="d-inline">
                    <b-icon v-if="item.icon" :icon="item.icon"/>
                    {{ item.name }}
                    <h3 class="d-inline align-middle">
                        <b-badge pill v-if="item.badge" :variant="item.badge.variant">
                            {{ item.badge.text }}
                        </b-badge>
                    </h3>
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
