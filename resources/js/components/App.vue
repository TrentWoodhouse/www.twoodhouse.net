<template>
    <div id="app">
        <SideImage/>
        <div class="front p-3 h-100">
            <div class="d-flex flex-column h-100">
                <div id="header">
                    <h1 class="d-inline no-select">
                        <router-link :to="{ name: 'home' }">
                            <img src="/images/TWLogo.svg">
                        </router-link>
                        <div class="d-inline">{{ title }}</div>
                    </h1>
                    <hr width="300px" align="left">
                </div>
                <div id="body" class="flex-grow-1 overflow-hidden position-relative">
                    <transition name="content">
                        <div :key="$route.name" class="position-absolute h-100 w-100">
                            <div class="d-flex h-100">
                                <div class="flex-column">
                                    <Link v-if="back" :go="-1">
                                        <b-icon icon="chevron-left" font-scale="3" />
                                    </Link>
                                </div>
                                <div class="flex-fill">
                                    <div class="row h-100">
                                        <div class="col-lg-7">
                                            <router-view/>
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
</template>

<script>
    import SideImage from "./layouts/SideImage";
    import Link from "./layouts/Link";
    export default {
        name: "App",
        components: {Link, SideImage},
        computed: {
            title() {
                return this.$route.meta.title;
            },
            back() {
                return this.$route.name !== 'home';
            }
        },
    }
</script>

<style>
    hr {
        background-color: #f8f9fa;
    }

    #app {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .front {
        position: relative;
        z-index: 10;
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
