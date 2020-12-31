<template>
    <div>
        <p>Leave your name and email and I'll get back to you as soon as I can.</p>
        <ContactForm @onSubmit="onSubmit" @onCancel="onCancel"/>
    </div>
</template>

<script>
	import ContactForm from "../forms/ContactForm";
    export default {
		name: "Contact",
        components: {ContactForm},
        methods: {
            onSubmit() {
                this.$router.push({ name: 'home' });
            },
            onCancel() {
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>

<style scoped>

</style>
