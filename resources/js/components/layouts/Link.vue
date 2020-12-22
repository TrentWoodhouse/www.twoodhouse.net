<template>
    <b-link
        v-if="go"
        :class="hoverClass"
        @mouseover.native="hover = true"
        @mouseleave.native="hover = false"
        @click="$router.go(go)"
    >
        <slot></slot>
    </b-link>
    <router-link
        v-else-if="to"
        :to="to"
        :class="hoverClass"
        @mouseover.native="hover = true"
        @mouseleave.native="hover = false"
    >
        <slot></slot>
    </router-link>
    <b-link
        v-else
        :class="hoverClass"
        @mouseover.native="hover = true"
        @mouseleave.native="hover = false"
    >
        <slot></slot>
    </b-link>
</template>

<script>
	export default {
		name: "Link",
        props: {
		    to: [Object, String],
            go: Number,
            variant: {
		        type: String,
                default: 'light',
            },
            dark: {
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
                clss[`text-${this.variant}`] = this.hover;
                clss['text-secondary'] = this.dark && !this.hover;
                return clss
            }
        }
	}
</script>

<style scoped>

</style>
