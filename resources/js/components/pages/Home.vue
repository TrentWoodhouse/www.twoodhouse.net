<template>
    <Page
        title="Trent Woodhouse - Coding & Design"
        :image="publicImage('home.png')"
    >
        <Nav :nav-items="navItems"/>
    </Page>
</template>

<script>
    import Nav from "../layouts/Nav";
    import Page from "../layouts/page/Page";
    export default {
		name: "Home",
        components: {Page, Nav},
        data() {
		    return {
                navItems: [
                    {
                        name: 'About',
                        icon: 'person-fill',
                        route: {name: 'about'},
                    },
                    {
                        name: 'Projects',
                        icon: 'tools',
                        route: {name: 'posts', params: {type: 'project'}},
                    },
                    {
                        name: 'Blog',
                        icon: 'book-fill',
                        route: {name: 'posts', params: {type: 'blog'}},
                        badge: {
                            text: 'Coming Soon',
                            variant: 'danger',
                        },
                        disabled: true,
                    },
                    {
                        name: 'Contact Me',
                        icon: 'envelope-fill',
                        route: { name: 'contact' },
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>
