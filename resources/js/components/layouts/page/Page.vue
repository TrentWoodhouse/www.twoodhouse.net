<template>
    <div class="position-absolute h-100 w-100">
        <div class="d-flex h-100">
            <div class="flex-column">
                <Link v-if="back" :to="back" dark>
                    <b-icon icon="arrow-left-square-fill" class="d-none d-md-inline-block mr-3" font-scale="2"/>
                    <b-icon icon="arrow-left-square-fill" class="d-inline-block d-md-none mr-3" font-scale="1"/>
                </Link>
            </div>
            <div class="flex-fill">
                <div class="row h-100">
                    <div class="col-lg-7 h-100" :class="{'scrollable': scrollable}">
                        <slot/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import SideImage from "../SideImage";
    import Auth from "../Auth";
    import Link from "../Link";
    export default {
		name: "Page",
        components: {Link, Auth, SideImage},
        props: {
		    title: String,
            image: String,
            actions: {
		        type: Array,
                default: () => [],
            },
            back: Object,
            loaded: {
		        type: Boolean,
                default: true,
            },
            scrollable: Boolean,
        },
        mounted() {
            this.$store.commit('setObject', {
                object: 'title',
                data: this.title,
            });
            this.$store.commit('setObject', {
                object: 'image',
                data: this.image,
            });
            this.$store.commit('setObject', {
                object: 'actions',
                data: this.actions,
            });
        }
	}
</script>

<style scoped>

</style>
