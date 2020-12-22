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
                <b-form-invalid-feedback :state="!this.error">
                    {{ error }}
                </b-form-invalid-feedback>
            </div>
        </div>

        <Link class="px-2" @click.native="onSubmit">Login</Link>
        <Link class="px-2" @click.native="onCancel">Cancel</Link>
    </b-form>
</template>

<script>
	import Link from "../layouts/Link";
    import { required, email } from 'vuelidate/lib/validators';
    export default {
		name: "LoginForm",
        components: {Link},
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                submitted: false,
                error: '',
            }
        },
        methods: {
            onSubmit() {
                this.submitted = true;
                if(!this.$v.invalid) {
                    this.axios.get('/sanctum/csrf-cookie')
                        .then(response => {
                            this.axios.post('/login', this.form)
                                .then(response => {
                                    this.$router.push({ name: 'home' });
                                })
                                .catch(error => {
                                    this.error = 'Login failed. PLease check your credentials.';
                                });
                        });
                }
            },
            onCancel() {
                this.$router.push({ name: 'home' });
            }
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
