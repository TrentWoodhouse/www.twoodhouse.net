<template>
	<div v-if="src">
        <div class="d-none d-md-inline align-right h-100">
            <transition name="fade">
                <img :src="src" :key="src" class="img-regular h-100">
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
        computed: {
		    src() {
                return this.$route.meta.image.src;
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
        mask-image: url("/images/mask.png")
    }

    .img-responsive {
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        opacity: 0.15;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
        position:absolute;
        right: 0;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
