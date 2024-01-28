<template>
    <Page
        title="Contact Me"
        :image="publicImage('contact.png')"
        :back="{name:'home'}">
        <p>Leave your name and email and I'll get back to you as soon as I can.</p>
        <ContactForm @onSubmit="onSubmit" @onCancel="onCancel"/>
    </Page>
</template>

<script>
	import ContactForm from "../forms/ContactForm";
    import Page from "../layouts/page/Page";
    export default {
		name: "Contact",
        components: {Page, ContactForm},
        methods: {
            onSubmit(data) {
                this.$store.dispatch('sendContactMail', data)
                .then(response => {
                    this.$store.commit('addAlert', {
                        message: 'Message sent.',
                        variant: 'success',
                    })
                    this.$router.push({ name: 'home' });
                })
                .catch(error => {
                    this.$store.commit('addAlert', {
                        message: 'Something went wrong, please try again later.',
                        variant: 'danger',
                    })
                    this.$router.push({ name: 'home' });
                });
            },
            onCancel() {
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>

<style scoped>

</style>
