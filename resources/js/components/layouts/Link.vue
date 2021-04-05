<template>
    <b-link
        v-else
        :to="to"
        :class="hoverClass"
        @mouseover.native="hover = true"
        @mouseleave.native="hover = false"
        :disabled="disabled"
    >
        <slot></slot>
    </b-link>
</template>

<script>
	export default {
		name: "Link",
        props: {
		    to: [Object, String],
            variant: {
		        type: String,
                default: 'light',
            },
            dark: {
		        type: Boolean,
                default: false,
            },
            disabled: {
		        type: Boolean,
                default: false,
            }
        },
        data() {
		    return {
		        hover: false,
            }
        },
        computed: {
            hoverClass() {
                return {
                    [`text-${this.variant}`]:  !this.disabled && !(this.dark && !this.hover),
                    'text-secondary': this.dark || this.disabled
                };
            }
        }
	}
</script>

<style scoped>

</style>
