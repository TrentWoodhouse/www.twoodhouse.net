<template>
    <Page
        title="Login"
        :image="publicImage('login.png')"
        :back="{name: 'home'}"
    >
        <p>Please sign in.</p>
        <LoginForm @onSubmit="onSubmit" @onCancel="onCancel" :error="error"/>
    </Page>
</template>

<script>
    import LoginForm from '../../forms/LoginForm';
    import Page from "../../layouts/page/Page";
	export default {
		name: "Login",
        components: {Page, LoginForm},
        data() {
		    return {
		        error: null,
            }
        },
        methods: {
		    onSubmit(data) {
                this.$store.dispatch('login', data)
                    .then(response => {
                        this.$store.commit('addAlert', {
                            message: 'Signed in.',
                            variant: 'success',
                        })
                        this.$router.push({ name: 'home' });
                    })
                    .catch(error => {
                        this.error = 'You credentials didn\'t match. Please try again.';
                    })
            },
            onCancel() {
                this.$router.push({ name: 'home' });
            }
        }
	}
</script>

<style scoped>

</style>
