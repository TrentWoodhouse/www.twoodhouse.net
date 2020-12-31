<template>
	<b-form @submit="onSubmit">
        <div class="row">
            <div class="col-6">
                <b-form-group>
                    <b-form-input
                        id="name"
                        v-model="$v.form.name.$model"
                        placeholder="Name"
                        required
                    />
                    <b-form-invalid-feedback :state="!submitted || $v.form.name.required">
                        This is required
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback :state="!submitted || $v.form.name.maxLength">
                        Name is too long
                    </b-form-invalid-feedback>
                </b-form-group>
            </div>
            <div class="col-6">
                <b-form-group>
                    <b-form-input
                        id="email"
                        type="email"
                        v-model="$v.form.email.$model"
                        placeholder="Email"
                        required
                    />
                    <b-form-invalid-feedback :state="!submitted || $v.form.email.required">
                        This is required
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback :state="!submitted || $v.form.email.email">
                        Email is not valid
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback :state="!submitted || $v.form.email.maxLength">
                        Email is too long
                    </b-form-invalid-feedback>
                </b-form-group>
            </div>
        </div>
        <b-form-group>
            <b-form-textarea
                id="message"
                v-model.trim="$v.form.message.$model"
                placeholder="Write a message..."
                rows="6"
                no-resize
                required
            />
            <b-form-invalid-feedback :state="!submitted || $v.form.message.required">
               This is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback :state="!submitted || $v.form.message.maxLength">
                Message is too long
            </b-form-invalid-feedback>
        </b-form-group>
        <Link class="px-2" @click.native="onSubmit" dark>Submit</Link>
        <Link class="px-2" @click.native="$emit('onCancel')" dark>Cancel</Link>
    </b-form>
</template>

<script>
    import { required, email, maxLength } from 'vuelidate/lib/validators';
	import Link from "../layouts/Link";
    export default {
		name: "ContactForm",
        components: {Link},
        data() {
		    return {
		        form: {
		            name: '',
                    email: '',
                    message: '',
                },
                submitted: false,
            }
        },
        methods: {
		    onSubmit() {
		        this.submitted = true;
		        if(!this.$v.$invalid) {
                    this.$emit('onSubmit', this.form);
                }
            },
        },
        validations: {
		    form: {
                name: {
                    required,
                    maxLength: maxLength(255),
                },
                email: {
                    required,
                    email,
                    maxLength: maxLength(255),
                },
                message: {
                    required,
                    maxLength: maxLength(10000),
                },
            }
        }
	}
</script>

<style scoped>

</style>
