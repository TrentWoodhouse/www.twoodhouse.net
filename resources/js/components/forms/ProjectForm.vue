<template>
    <b-form @submit="onSubmit">
        <div class="row w-100">
            <div class="col-lg-6">
                <b-form-group>
                    <clipper-basic
                        v-if="imageData"
                        ref="clipper"
                        class="mb-3"
                        :src="imageData"
                        :ratio="1"
                        :init-height="100"
                        :init-width="100"
                        :min-width="20"
                        :width="100"
                    />
                    <b-form-file
                        v-model="imageFile"
                        accept="image/*"
                        placeholder="Upload image"
                        drop-placeholder="Drop image"
                        @input="onSelectFile"
                    />
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
            <CKEditor v-model="$v.form.content.$model"/>
            <b-form-invalid-feedback :state="!submitted || $v.form.content.required">
                This is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback :state="!submitted || $v.form.content.maxLength">
                Content is too long
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-invalid-feedback :state="!error">
            {{ error }}
        </b-form-invalid-feedback>
        <Link class="px-2" @click.native="onSubmit" dark>Submit</Link>
        <Link class="px-2" @click.native="$emit('onCancel')" dark>Cancel</Link>
    </b-form>
</template>

<script>
	import Link from "../layouts/Link";
    import {maxLength, required} from "vuelidate/lib/validators";
    import CKEditor from "../layouts/CKEditor";
    export default {
		name: "ProjectForm",
        components: {CKEditor, Link},
        props: {
		    project: Object,
        },
        data() {
		    return {
                form: {
                    title: '',
                    description: '',
                    content: '',
                    image: '',
                },
                imageFile: null,
                imageData: null,
                submitted: false,
                error: '',
            }
        },
        created() {
            if(this.project) {
                this.form.title = this.project.title;
                this.form.description = this.project.description;
                this.form.content = this.project.content;
            }
        },
        methods: {
            onSubmit() {
                this.submitted = true;
                if(!this.$v.$invalid) {
                    if(this.imageFile) {
                        let data = new FormData();
                        let canvas = this.$refs.clipper.clip();

                        this.resizeCanvas(canvas, 1000).toBlob(blob => {
                            data.append('image', blob);
                            this.$store.dispatch('imageUpload', data)
                                .then(response => {
                                    this.form.image = response.data;
                                    this.$emit('onSubmit', this.form);
                                })
                                .catch(error => {
                                    this.error = error.message;
                                });
                        });
                    }
                    else {
                        this.$emit('onSubmit', this.form);
                    }
                }
            },
            onSelectFile() {
                const reader = new FileReader;
                if(this.imageFile) {
                    reader.readAsDataURL(this.imageFile);
                }

                reader.onload = e => {
                    this.imageData = e.target.result;
                }
            },
            resizeCanvas(canvas, max) {
                let c = document.createElement('canvas');
                let size = Math.min(canvas.width, max);
                c.width = size;
                c.height = size;
                let ctx = c.getContext('2d');
                ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, size, size);
                return c;
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
            },
        }
	}
</script>

<style scoped>

</style>
