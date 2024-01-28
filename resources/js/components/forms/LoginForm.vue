<template>
    <b-form @submit="onSubmit" novalidate>
        <div class="row">
            <div class="col-md-6">
                <b-form-group>
                    <b-form-input
                        id="email"
                        v-model.trim="$v.form.email.$model"
                        placeholder="Email"
                        required
                    />
                    <b-form-invalid-feedback :state="!submitted || $v.form.email.required">
                        This is required
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback :state="!submitted || $v.form.email.email">
                        Email is not valid
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group>
                    <b-form-input
                        id="password"
                        type="password"
                        v-model.trim="$v.form.password.$model"
                        placeholder="Password"
                        required
                    />
                    <b-form-invalid-feedback :state="!submitted || $v.form.password.required">
                        This is required
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-invalid-feedback :state="!error">
                    {{ error }}
                </b-form-invalid-feedback>
            </div>
        </div>
        <Link class="px-2" @click.native="onSubmit" dark>Login</Link>
        <Link class="px-2" @click.native="$emit('onCancel')" dark>Cancel</Link>
    </b-form>
</template>

<script>
	import Link from "../layouts/Link";
    import { required, email } from 'vuelidate/lib/validators';
    export default {
		name: "LoginForm",
        components: {Link},
        props: {
		    error: String,
        },
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                submitted: false,
                timeout: null,
                pause: false,
            }
        },
        methods: {
            onSubmit() {
                this.submitted = true;
                if(!this.$v.$invalid) {
                    if(!this.pause) {
                        this.$emit('onSubmit', this.form);
                    }
                    this.pause = true;
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => {
                        this.pause = false;
                    }, 100);
                }
            },
        },
        validations: {
		    form: {
		        email: {
		            required,
                    email,
                },
                password: {
                    required,
                }
            }
        }
	}
</script>

<style scoped>

</style>
