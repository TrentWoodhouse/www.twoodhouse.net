<template>
    <div class="d-flex flex-column h-100">
        <div v-if="navLinks" class="text-right">
            <b-link v-for="navLink in navLinks" :key="navLink.key || navLink.text" :to="navLink.to" class="ml-1">
                {{ navLink.text }}
            </b-link>
        </div>
        <div class="flex-grow-1">
            <slot/>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Content",
        props: {
            navLinks: {
                type: Array,
                default: [],
            }
        },
	}
</script>

<style scoped>

</style>
