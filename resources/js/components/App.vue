<template>
    <div>
        <div class="position-relative h-100 overflow-hidden">
            <SideImage/>
            <div class="front p-4 h-100">
                <div class="d-flex flex-column h-100">
                    <div id="header">
                        <div class="no-select d-flex">
                            <router-link :to="{ name: 'home' }">
                                <img :src="publicImage('TWLogo.svg')">
                            </router-link>
                            <div class="pl-2">
                                <div class="mt-2 mb-0">
                                    <h1 class="d-none d-md-inline-block">{{ title }}</h1>
                                    <h4 class="d-inline-block d-md-none">{{ title }}</h4>
                                </div>
                                <Auth class="ml-2"/>
                                <Alert/>
                            </div>
                        </div>
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
                            <router-view/>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideImage from "./layouts/SideImage";
    import Auth from "./layouts/Auth";
    import Alert from "./layouts/Alert";
    import Link from "./layouts/Link";
    export default {
        name: "App",
        components: {Link, Auth, Alert, SideImage},
        created() {
            this.$store.dispatch('getPosts');
        },
        computed: {
            title() {
                return this.$store.state.title;
            },
            image() {
                return this.$store.state.image;
            },
            actions() {
                return this.$store.state.actions;
            },
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
