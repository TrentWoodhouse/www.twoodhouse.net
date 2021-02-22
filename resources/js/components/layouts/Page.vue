<template>
    <div v-if="loaded" class="position-relative h-100 overflow-hidden">
        <SideImage :src="image"/>
        <Auth/>
        <div class="front p-3 h-100">
            <div class="d-flex flex-column h-100">
                <div id="header">
                    <h1 class="d-inline no-select">
                        <router-link :to="{ name: 'home' }">
                            <img :src="getImage('TWLogo.svg')">
                        </router-link>
                        <div class="d-inline">{{ title }}</div>
                    </h1>
                    <div class="d-flex">
                        <hr class="hr-short">
                        <Link
                            v-for="action in actions"
                            :to="action.to"
                            :key="action.key || action.text"
                            class="pl-2"
                        >
                            {{ action.text }}
                        </Link>
                    </div>
                </div>
                <div id="body" class="flex-grow-1 overflow-hidden position-relative">
                    <transition name="content">
                        <div :key="$route.fullPath" class="position-absolute h-100 w-100">
                            <div class="d-flex h-100">
                                <div class="flex-column">
                                    <Link v-if="back" :to="back" dark>
                                        <b-icon icon="chevron-left" font-scale="3" />
                                    </Link>
                                </div>
                                <div class="flex-fill">
                                    <div class="row h-100">
                                        <div class="col-lg-7 h-100" :class="{'overflow-auto': scrollable}">
                                            <slot/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="row align-items-center w-100 h-100">
        <div class="col-12 text-center">
            <b-spinner style="width: 3rem; height: 3rem;" type="grow" variant="light"/>
        </div>
    </div>
</template>

<script>
	import SideImage from "./SideImage";
    import Auth from "./Auth";
    import Link from "./Link";
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
	}
</script>

<style scoped>
    .front {
        position: relative;
        z-index: 10;
    }

    .hr-short {
        width: 300px;
        margin-left: 0;
        margin-right: 0;
    }

    .content-enter {
        transform: translateX(-500px);
    }

    .content-enter-active {
        transition: .2s ease;
    }

    .content-leave-to {
        opacity: 0;
    }

    .content-leave-active {
        transition: opacity .2s;
    }
</style>
