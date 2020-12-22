<template>
    <div>
        <p>Please sign in.</p>
        <LoginForm/>
    </div>
</template>

<script>
    import LoginForm from '../../forms/LoginForm';
	export default {
		name: "Login",
        components: {LoginForm},
	}
</script>

<style scoped>

</style>
