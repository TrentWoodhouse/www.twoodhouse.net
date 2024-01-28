<template>
    <b-form>
        <b-link class="px-2 text-danger" @click.native="$emit('onSubmit')">Delete</b-link>
        <Link class="px-2" @click.native="$emit('onCancel')" dark>Cancel</Link>
    </b-form>
</template>

<script>
    import Link from "../layouts/Link";
    export default {
        name: "DeleteForm",
        components: {Link},
    }
</script>

<style scoped>

</style>
