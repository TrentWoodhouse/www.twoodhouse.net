<template>
	<div v-if="src">
        <div class="d-none d-md-none d-xl-inline align-right h-100">
            <transition name="fade">
                <img v-if="src" :src="src" :key="src" class="img-regular h-100">
            </transition>
        </div>
        <div class="d-none d-md-inline d-xl-none align-right h-100">
            <transition name="fade">
                <img v-if="src" :src="src" :key="src" class="img-regular-darkened h-100">
            </transition>
        </div>
        <div class="d-inline d-md-none h-100">
            <transition name="fade">
                <img :src="src" :key="src + '-responsive'" class="img-responsive h-100">
            </transition>
        </div>
    </div>
</template>

<script>
	export default {
		name: "SideImage",
        data() {
		    return {
		        src: '/images/blank.png',
            }
        },
        computed: {
		    image() {
		        return this.$store.state.image;
            }
        },
        watch: {
		    image(val) {
		        if(val) {
		            this.loadImage(val, path => this.src = path);
                }
            }
        }
	}
</script>

<style scoped>
    .align-right {
        position:absolute;
        right: 0;
    }

    .img-regular {
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-image: url("/images/mask.png");
        mask-image: url("/images/mask.png");
        position:absolute;
        right: 0;
    }

    .img-regular-darkened {
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-image: url("/images/mask.png");
        mask-image: url("/images/mask.png");
        position:absolute;
        right: 0;
        opacity: 0.7;
    }

    .img-responsive {
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        opacity: 0.15;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
