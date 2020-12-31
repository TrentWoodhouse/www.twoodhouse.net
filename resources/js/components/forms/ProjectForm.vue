<template>
    <b-form @submit="onSubmit">
            <div class="row w-100">
                <div class="col-lg-6">
                    <b-form-group>
                        <clipper-basic
                            v-if="imageData"
                            class="mb-3"
                            :src="imageData"
                            :ratio="1"
                            :init-height="100"
                            :init-width="100"
                            :min-width="20"
                            :height="100"
                        />
                        <b-form-file
                            v-model="$v.form.image.$model"
                            accept="image/*"
                            placeholder="Upload image"
                            drop-placeholder="Drop image"
                            @input="onSelectFile"
                        />
                        <b-form-invalid-feedback :state="!submitted || $v.form.image.required">
                            This is required
                        </b-form-invalid-feedback>
                    </b-form-group>
                </div>
            </div>

        <b-form-group>
            <b-form-input
                id="title"
                v-model.trim="$v.form.title.$model"
                placeholder="Title"
                size="lg"
                required
            />
            <b-form-invalid-feedback :state="!submitted || $v.form.title.required">
                This is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback :state="!submitted || $v.form.title.maxLength">
                Title is too long
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
            <b-form-textarea
                id="description"
                v-model.trim="$v.form.description.$model"
                placeholder="Enter a short description..."
                rows="3"
                no-resize
                required
            />
            <b-form-invalid-feedback :state="!submitted || $v.form.description.required">
                This is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback :state="!submitted || $v.form.description.maxLength">
                Description is too long
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
            <vue-editor
                id="content"
                v-model="$v.form.content.$model"
                placeholder="Write your content here..."
            />
            <b-form-invalid-feedback :state="!submitted || $v.form.content.required">
                This is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback :state="!submitted || $v.form.content.maxLength">
                Content is too long
            </b-form-invalid-feedback>
        </b-form-group>
        <Link class="px-2" @click.native="onSubmit" dark>Submit</Link>
        <Link class="px-2" @click.native="$emit('onCancel')" dark>Cancel</Link>
    </b-form>
</template>

<script>
	import Link from "../layouts/Link";
    import {maxLength, required} from "vuelidate/lib/validators";
    export default {
		name: "ProjectForm",
        components: {Link},
        props: {
		    project: Object,
        },
        data() {
		    return {
                form: {
                    title: '',
                    description: '',
                    content: '',
                    image: null,
                },
                imageData: null,
                submitted: false,
            }
        },
        created() {
            if(this.project) {
                Object.keys(this.form).forEach(key => {
                    if(key in this.project) {
                        this.form[key] = this.project[key];
                    }
                });
            }
        },
        methods: {
            onSubmit() {
                this.submitted = true;
                if(!this.$v.$invalid) {
                    this.$emit('onSubmit', this.form);
                }
            },
            onSelectFile() {
                const reader = new FileReader;
                if(this.form.image) {
                    reader.readAsDataURL(this.form.image);
                }

                reader.onload = e => {
                    this.imageData = e.target.result;
                }
            }
        },
        validations: {
            form: {
                title: {
                    required,
                    maxLength: maxLength(255),
                },
                description: {
                    required,
                    maxLength: maxLength(10000),
                },
                content: {
                    required,
                    maxLength: maxLength(65000),
                },
                image: {
                    required,
                }
            }
        }
	}
</script>

<style scoped>

</style>
