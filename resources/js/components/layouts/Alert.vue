<template>
    <span v-if="alert" :class="{['text-' + alert.variant]: alert.variant}">{{ alert.message }}</span>
</template>

<script>
export default {
    name: "Alert",
    props: {
        scope: {
            type: String,
            default: 'app',
        }
    },
    computed: {
        alert() {
            return this.$store.state.alerts.find(a => a.scope === this.scope);
        }
    }
}
</script>

<style scoped>

</style>
