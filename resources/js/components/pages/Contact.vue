<template>
    <div>
        <p>Leave your name and email and I'll get back to you as soon as I can.</p>
        <ContactForm />
    </div>
</template>

<script>
	import ContactForm from "../forms/ContactForm";
    export default {
		name: "Contact",
        components: {ContactForm},
    }
</script>

<style scoped>

</style>
