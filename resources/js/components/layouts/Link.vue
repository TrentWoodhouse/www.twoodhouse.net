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
                let clss = {};
                clss[`text-${this.variant}`] = this.hover && !this.disabled;
                clss['text-secondary'] = (this.dark && !this.hover) || this.disabled;
                return clss;
            }
        }
	}
</script>

<style scoped>

</style>
