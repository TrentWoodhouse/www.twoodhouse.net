<template>
    <div v-if="loaded" id="app" class="position-relative h-100 overflow-hidden">
        <SideImage/>
        <Auth/>
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
                                    <Link v-if="back" :go="-1" dark>
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
    <div v-else class="row align-items-center w-100 h-100">
        <div class="col-12 text-center">
            <b-spinner style="width: 3rem; height: 3rem;" type="grow" variant="light"/>
        </div>
    </div>
</template>

<script>
    import SideImage from "./layouts/SideImage";
    import Link from "./layouts/Link";
    import Auth from "./layouts/Auth";
    export default {
        name: "App",
        components: {Auth, Link, SideImage},
        data() {
            return {
                loaded: false,
            }
        },
        computed: {
            title() {
                return this.$store.getters.title;
            },
            back() {
                return this.$route.name !== 'home';
            },
        },
        created() {
            this.loaded = true;
        }
    }
</script>

<style>
    hr {
        background-color: #f8f9fa;
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
