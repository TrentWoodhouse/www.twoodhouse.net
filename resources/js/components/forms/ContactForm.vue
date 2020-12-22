<template>
	<b-form @submit="onSubmit">
        <div class="row">
            <div class="col-6">
                <b-form-group>
                    <b-form-input
                        id="name"
                        v-model="form.name"
                        placeholder="Name"
                        required
                    />
                </b-form-group>
            </div>
            <div class="col-6">
                <b-form-group>
                    <b-form-input
                        id="email"
                        type="email"
                        v-model="form.email"
                        placeholder="Email"
                        required
                    />
                </b-form-group>
            </div>
        </div>
        <b-form-group>
            <b-form-textarea
                id="message"
                v-model="form.message"
                placeholder="Write a message..."
                rows="6"
                no-resize
                required
            />
        </b-form-group>
        <Link class="px-2" @click.native="onSubmit">Submit</Link>
        <Link class="px-2" @click.native="onCancel">Cancel</Link>

    </b-form>
</template>

<script>
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
                }
            }
        },
        methods: {
		    onSubmit() {
		        this.$bvToast.toast('Please wait one to two days for a reply', {
		            title: 'Message Sent!',
                    autoHideDelay: 5000,
                });
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
